// controllers/propertyController.js
const db = require("../config/db");
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");
const { translateProperty } = require("../utils/translator");

const watermarkPath = path.join(__dirname, "../watermarks", "watermark.png");
const { initProgress, updateProgress, finishProgress } = require("../utils/progressStore");

// -------------------- Helpers --------------------
const toBool = (v) => v === true || v === 1 || v === "1" || v === "true";

const toIntOrNull = (v) => {
  if (v === undefined || v === null || v === "") return null;
  const n = parseInt(v, 10);
  return Number.isNaN(n) ? null : n;
};

const toFloatOrNull = (v) => {
  if (v === undefined || v === null || v === "") return null;
  const n = parseFloat(v);
  return Number.isNaN(n) ? null : n;
};

const cleanDateOrNull = (v) => (v ? v : null);

// ✅ NEW helpers for array fields (isMain / displayOrder)
const toArray = (v) => {
  if (v === undefined || v === null) return [];
  return Array.isArray(v) ? v : [v];
};

const parseIsMainList = (rawIsMain, total) => {
  const arr = toArray(rawIsMain).map((x) => x === true || x === 1 || x === "1" || x === "true");
  while (arr.length < total) arr.push(false);
  return arr.slice(0, total);
};

const parseDisplayOrderList = (rawDisplayOrder, total) => {
  const arr = toArray(rawDisplayOrder).map((x, i) => {
    const n = parseInt(x, 10);
    return Number.isNaN(n) ? i : n;
  });
  while (arr.length < total) arr.push(arr.length);
  return arr.slice(0, total);
};

// ✅ safer lang
const normalizeLang = (lang) => {
  const allowed = ["ar", "en", "es", "fr", "de", "nl"];
  const L = String(lang || "ar").toLowerCase();
  return allowed.includes(L) ? L : "ar";
};

// ✅ Promisify db.query
const query = (sql, params = []) =>
  new Promise((resolve, reject) => {
    db.query(sql, params, (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });

// ======================================================
// ✅ AUTO availability: if availability_date <= today => available=1, availability_date=NULL
// ======================================================
const autoUpdateAvailabilityByDate = async () => {
  // This updates ONLY rows that are currently unavailable and have an availability_date in the past/today.
  // Keeps everything else unchanged.
  const sql = `
    UPDATE properties
    SET available = 1,
        availability_date = NULL
    WHERE available = 0
      AND availability_date IS NOT NULL
      AND DATE(availability_date) <= CURDATE()
  `;
  try {
    await query(sql);
  } catch (e) {
    // لا نكسر أي endpoint إذا فشل التحديث
    console.warn("autoUpdateAvailabilityByDate failed:", e?.message || e);
  }
};

// ======================================================
// ✅ ADD PROPERTY
// ======================================================
exports.addProperty = async (req, res) => {
  const uploadId = req.body.uploadId || null;

  try {
    if (uploadId) {
      initProgress(uploadId);
      updateProgress(uploadId, 3, "بدء معالجة الطلب");
    }

    // ✅ AUTO update before doing anything (optional but safe)
    await autoUpdateAvailabilityByDate();

    const newProperty = {
      type: req.body.type,
      title_ar: req.body.title_ar,
      description_ar: req.body.description_ar,
      price: toFloatOrNull(req.body.price),
      old_price: null,

      // ✅ CITY (foreign key)
      city_id: toIntOrNull(req.body.city_id),

      exact_address: req.body.exact_address || "",

      bedrooms: toIntOrNull(req.body.bedrooms),
      salon: toIntOrNull(req.body.salon),
      bathrooms: toIntOrNull(req.body.bathrooms),
      kitchen: toIntOrNull(req.body.kitchen),
      area: toIntOrNull(req.body.area),
      floors: toIntOrNull(req.body.floors),

      available: req.body.type === "rent" ? 1 : toBool(req.body.available) ? 1 : 0,
      availability_date: cleanDateOrNull(req.body.availability_date),

      is_sold: 0,
      sold_date: null,
    };

    // ✅ If someone sends availability_date <= today while setting available=0, auto-fix it
    if (
      newProperty.available === 0 &&
      newProperty.availability_date &&
      !Number.isNaN(Date.parse(newProperty.availability_date))
    ) {
      const d = new Date(newProperty.availability_date);
      d.setHours(0, 0, 0, 0);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (d <= today) {
        newProperty.available = 1;
        newProperty.availability_date = null;
      }
    }

    if (!newProperty.title_ar || !newProperty.description_ar || !newProperty.city_id) {
      if (uploadId) {
        updateProgress(uploadId, 100, "خطأ: بيانات ناقصة");
        finishProgress(uploadId);
      }
      return res.status(400).send("Title, description, and city_id are required.");
    }

    if (uploadId) updateProgress(uploadId, 8, "ترجمة البيانات");

    const translations = await translateProperty(newProperty);
    Object.assign(newProperty, translations);

    if (uploadId) updateProgress(uploadId, 15, "حفظ العقار في قاعدة البيانات");

    const insertSql = "INSERT INTO properties SET ?";
    db.query(insertSql, newProperty, async (err, result) => {
      if (err) {
        console.error("Error inserting property:", err);
        if (uploadId) {
          updateProgress(uploadId, 100, "خطأ: فشل حفظ العقار");
          finishProgress(uploadId);
        }
        return res.status(500).send("Database insertion error");
      }

      const propertyId = result.insertId;
      res.locals.idempotencyResult = { message: "Property added successfully!", propertyId };

      if (!req.files || req.files.length === 0) {
        if (uploadId) {
          updateProgress(uploadId, 100, "تمت الإضافة بنجاح");
          finishProgress(uploadId);
        }
        return res.status(200).send({ message: "Property added successfully!", propertyId });
      }

      const total = req.files.length;
      if (uploadId) updateProgress(uploadId, 20, `بدء معالجة الصور (0/${total})`);

      let watermark;
      try {
        watermark = await sharp(watermarkPath).resize({ width: 300 }).toBuffer();
      } catch (e) {
        console.error("Error loading watermark:", e);
        if (uploadId) {
          updateProgress(uploadId, 100, "خطأ في watermark");
          finishProgress(uploadId);
        }
        return res.status(500).send("Error loading watermark");
      }

      const isMainList = parseIsMainList(req.body.isMain, total);
      const displayOrderList = parseDisplayOrderList(req.body.displayOrder, total);

      let mainIndex = isMainList.findIndex((v) => v === true);
      if (mainIndex === -1) mainIndex = 0;

      const images = [];

      for (const [index, file] of req.files.entries()) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const outputName = `${uniqueSuffix}.webp`;
        const outputPath = path.join(__dirname, "../uploads", outputName);

        await sharp(file.buffer)
          .rotate()
          .resize(800, 600, {
            fit: "contain",
            background: { r: 0, g: 0, b: 0, alpha: 0 },
          })
          .composite([{ input: watermark, gravity: "center", blend: "over", opacity: 1 }])
          .webp({ quality: 80 })
          .toFile(outputPath);

        const isMain = index === mainIndex;
        const displayOrder = displayOrderList[index] ?? index;

        images.push([propertyId, outputName, isMain, displayOrder]);

        if (uploadId) {
          const p = 20 + Math.round(((index + 1) / total) * 65);
          updateProgress(uploadId, p, `معالجة الصور (${index + 1}/${total})`);
        }
      }

      images.sort((a, b) => (a[3] ?? 0) - (b[3] ?? 0));

      if (uploadId) updateProgress(uploadId, 90, "حفظ الصور في قاعدة البيانات");

      const imageSql =
        "INSERT INTO property_images (property_id, image_url, is_main, display_order) VALUES ?";

      db.query(imageSql, [images], (imgErr) => {
        if (imgErr) {
          console.error("Error inserting property images:", imgErr);
          if (uploadId) {
            updateProgress(uploadId, 100, "خطأ: فشل حفظ الصور");
            finishProgress(uploadId);
          }
          return res.status(500).send("Database insertion error");
        }

        if (uploadId) {
          updateProgress(uploadId, 100, "تمت الإضافة بنجاح");
          finishProgress(uploadId);
        }

        return res.status(200).send({ message: "Property added successfully!", propertyId });
      });
    });
  } catch (error) {
    console.error("Error processing request:", error);

    if (uploadId) {
      updateProgress(uploadId, 100, "خطأ غير متوقع");
      finishProgress(uploadId);
    }

    return res.status(500).send("Error processing request");
  }
};

exports.getProperties = async (req, res) => {
  const { type, city_id, page = 1, limit = 12, lang = "ar", seed } = req.query;

  // ✅ AUTO update before returning listings
  await autoUpdateAvailabilityByDate();

  const L = normalizeLang(lang);
  const pageNum = Math.max(1, parseInt(page, 10) || 1);
  const limitNum = Math.max(1, parseInt(limit, 10) || 12);
  const offset = (pageNum - 1) * limitNum;

  const titleColumn = `p.title_${L}`;
  const descriptionColumn = `p.description_${L}`;
  const cityLabel = L === "ar" ? "c.name_ar" : "c.name_fr";

  const cityIdNum = toIntOrNull(city_id);

  // ✅ Define allowed types per selection mode
  const TYPE_GROUPS = {
    all_buy: ["buy", "apartments", "floorplots", "Commercialgarages"],
    all_rent: ["regularRent", "rent", "CommercialgaragesRent"],
    // all_requests: ["requests", "apartmentsReq", "floorplotsReq", "CommercialgaragesReq"],
  };

  const typeGroup = TYPE_GROUPS[type] || null; // array or null

  // ✅ best image per property (main first, then display_order)
  let sql = `
    SELECT 
      p.property_id,
      p.title_ar,
      p.description_ar,
      ${titleColumn} AS title,
      ${descriptionColumn} AS description,
      ${cityLabel} AS location,
      p.city_id,
      p.exact_address,
      p.price, p.old_price,
      p.bedrooms, p.bathrooms, p.salon, p.kitchen, p.area,
      p.type, p.available, p.floors, p.availability_date,
      p.is_sold, p.sold_date, p.is_featured, p.featured_at,
      pi.image_url
    FROM properties p
    LEFT JOIN cities c ON c.id = p.city_id
    LEFT JOIN (
      SELECT t.property_id, t.image_url
      FROM property_images t
      INNER JOIN (
        SELECT property_id,
               MIN(CONCAT(
                 LPAD(1 - is_main, 1, '0'), '-',
                 LPAD(display_order, 6, '0'), '-',
                 image_url
               )) AS sort_key
        FROM property_images
        GROUP BY property_id
      ) k
        ON k.property_id = t.property_id
       AND CONCAT(
            LPAD(1 - t.is_main, 1, '0'), '-',
            LPAD(t.display_order, 6, '0'), '-',
            t.image_url
          ) = k.sort_key
    ) pi ON p.property_id = pi.property_id
  `;

  const params = [];
  const where = [];

  // ✅ Type filter
  if (typeGroup) {
    where.push(`p.type IN (${typeGroup.map(() => "?").join(",")})`);
    params.push(...typeGroup);
  } else if (type && type !== "all") {
    where.push("p.type = ?");
    params.push(type);
  }

  // ✅ City filter
  if (cityIdNum) {
    where.push("p.city_id = ?");
    params.push(cityIdNum);
  }

  if (where.length) sql += " WHERE " + where.join(" AND ");

  // ✅ Ordering
  if (seed) {
    sql += " ORDER BY RAND(?) LIMIT ? OFFSET ?";
    params.push(seed, limitNum, offset);
  } else {
    sql += " ORDER BY RAND() LIMIT ? OFFSET ?";
    params.push(limitNum, offset);
  }

  db.query(sql, params, (err, rows) => {
    if (err) {
      console.error("Error querying properties:", err);
      return res.status(500).send("Database query error");
    }

    // ✅ count
    let countSql = "SELECT COUNT(*) as total FROM properties p";
    const countParams = [];
    const countWhere = [];

    if (typeGroup) {
      countWhere.push(`p.type IN (${typeGroup.map(() => "?").join(",")})`);
      countParams.push(...typeGroup);
    } else if (type && type !== "all") {
      countWhere.push("p.type = ?");
      countParams.push(type);
    }

    if (cityIdNum) {
      countWhere.push("p.city_id = ?");
      countParams.push(cityIdNum);
    }

    if (countWhere.length) countSql += " WHERE " + countWhere.join(" AND ");

    db.query(countSql, countParams, (countErr, countRows) => {
      if (countErr) {
        console.error("Error counting properties:", countErr);
        return res.status(500).send("Database count error");
      }

      const totalProperties = countRows[0]?.total || 0;
      const totalPages = Math.ceil(totalProperties / limitNum);

      return res.status(200).send({
        properties: rows,
        totalPages,
        currentPage: pageNum,
      });
    });
  });
};

// ======================================================
// ✅ getPropertyById (property + all images ordered) + city join
// ======================================================
exports.getPropertyById = async (req, res) => {
  // ✅ AUTO update before returning details
  await autoUpdateAvailabilityByDate();

  const L = normalizeLang(req.query.lang || "fr");
  const titleColumn = `p.title_${L}`;
  const descriptionColumn = `p.description_${L}`;
  const cityLabel = L === "ar" ? "c.name_ar" : "c.name_fr";

  const sql = `
    SELECT 
      p.property_id,
      ${titleColumn} AS title,
      p.price, p.old_price,
      ${cityLabel} AS location,
      p.city_id,
      p.exact_address,
      p.bedrooms, p.bathrooms, p.salon, p.kitchen, p.area,
      p.type, p.available, p.floors, p.availability_date,
      p.is_sold, p.sold_date,
      pi.image_url, pi.is_main, pi.display_order,
      ${descriptionColumn} AS description
    FROM properties p
    LEFT JOIN cities c ON c.id = p.city_id
    LEFT JOIN property_images pi ON p.property_id = pi.property_id
    WHERE p.property_id = ?
    ORDER BY pi.is_main DESC, pi.display_order ASC
  `;

  db.query(sql, [req.params.id], (err, rows) => {
    if (err) {
      console.error("Error querying property by ID:", err);
      return res.status(500).send("Database query error");
    }
    if (!rows || rows.length === 0) return res.status(404).send("Property not found");
    return res.status(200).send(rows);
  });
};

// =========================اظهار العقارات مميزة=============================
exports.getFeaturedProperties = async (req, res) => {
  // ✅ AUTO update before returning featured
  await autoUpdateAvailabilityByDate();

  const L = normalizeLang(req.query.lang || "ar");
  const titleColumn = `p.title_${L}`;
  const descriptionColumn = `p.description_${L}`;
  const cityLabel = L === "ar" ? "c.name_ar" : "c.name_fr";

  const sql = `
    SELECT 
      p.property_id,
      ${titleColumn} AS title,
      ${descriptionColumn} AS description,
      ${cityLabel} AS location,
      p.city_id,
      p.price, p.old_price,
      p.bedrooms, p.bathrooms, p.salon, p.kitchen, p.area,
      p.type, p.available, p.floors, p.availability_date,
      p.is_sold, p.sold_date,
      pi.image_url
    FROM properties p
    LEFT JOIN cities c ON c.id = p.city_id
    LEFT JOIN (
      SELECT t.property_id, t.image_url
      FROM property_images t
      INNER JOIN (
        SELECT property_id,
               MIN(CONCAT(
                 LPAD(1 - is_main, 1, '0'), '-',
                 LPAD(display_order, 6, '0'), '-',
                 image_url
               )) AS sort_key
        FROM property_images
        GROUP BY property_id
      ) k
        ON k.property_id = t.property_id
       AND CONCAT(
            LPAD(1 - t.is_main, 1, '0'), '-',
            LPAD(t.display_order, 6, '0'), '-',
            t.image_url
          ) = k.sort_key
    ) pi ON p.property_id = pi.property_id
    WHERE p.is_featured = 1
    ORDER BY p.featured_at DESC, p.property_id DESC
    LIMIT 6
  `;

  db.query(sql, (err, rows) => {
    if (err) {
      console.error("Error querying featured properties:", err);
      return res.status(500).send("Database query error");
    }
    return res.status(200).send({ properties: rows || [] });
  });
};

exports.toggleFeatured = async (req, res) => {
  try {
    const propertyId = toIntOrNull(req.params.id);
    const isFeatured = toBool(req.body.is_featured) ? 1 : 0;

    if (!propertyId) return res.status(400).send("Invalid property id");

    // إذا تفعيل => تحقق من الحد الأقصى 6
    if (isFeatured === 1) {
      const rows = await query(
        "SELECT COUNT(*) AS total FROM properties WHERE is_featured = 1 AND property_id <> ?",
        [propertyId]
      );
      const total = rows?.[0]?.total || 0;
      if (total >= 6) {
        return res.status(400).send("You already have 6 featured properties.");
      }
    }

    await query("UPDATE properties SET is_featured = ?, featured_at = ? WHERE property_id = ?", [
      isFeatured,
      isFeatured ? new Date() : null,
      propertyId,
    ]);

    return res.status(200).send({ message: "Featured status updated successfully!" });
  } catch (e) {
    console.error("toggleFeatured error:", e);
    return res.status(500).send("Error processing request");
  }
};

// ======================================================
// ✅ updateProperty (FIXED)
//  - uses city_id (NOT location_ar)
//  - respects isMain/displayOrder from UI
//  - keeps old_price when new price < old price
// ======================================================
exports.updateProperty = async (req, res) => {
  const uploadId = req.body.uploadId || null;

  try {
    if (uploadId) initProgress(uploadId);

    // ✅ AUTO update (safe)
    await autoUpdateAvailabilityByDate();

    // 1) Build update object
    const updatedProperty = {
      type: req.body.type,
      title_ar: req.body.title_ar,
      description_ar: req.body.description_ar,

      price: toFloatOrNull(req.body.price),

      // ✅ city_id instead of location_ar
      city_id: toIntOrNull(req.body.city_id),

      exact_address: req.body.exact_address || "",

      bedrooms: toIntOrNull(req.body.bedrooms),
      salon: toIntOrNull(req.body.salon),
      bathrooms: toIntOrNull(req.body.bathrooms),
      kitchen: toIntOrNull(req.body.kitchen),
      area: toIntOrNull(req.body.area),

      available:
        req.body.type === "rent"
          ? toBool(req.body.available)
            ? 1
            : 0
          : toBool(req.body.available)
          ? 1
          : 0,
      floors: toIntOrNull(req.body.floors),
      availability_date: cleanDateOrNull(req.body.availability_date),

      is_sold: req.body.is_sold === undefined ? undefined : toBool(req.body.is_sold) ? 1 : 0,
      sold_date: req.body.sold_date === undefined ? undefined : cleanDateOrNull(req.body.sold_date),
    };

    // ✅ If user sends availability_date <= today while setting available=0, auto-fix it
    if (
      updatedProperty.available === 0 &&
      updatedProperty.availability_date &&
      !Number.isNaN(Date.parse(updatedProperty.availability_date))
    ) {
      const d = new Date(updatedProperty.availability_date);
      d.setHours(0, 0, 0, 0);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (d <= today) {
        updatedProperty.available = 1;
        updatedProperty.availability_date = null;
      }
    }

    // Remove undefined fields (so they don't overwrite)
    Object.keys(updatedProperty).forEach((k) => {
      if (updatedProperty[k] === undefined) delete updatedProperty[k];
    });

    if (uploadId) updateProgress(uploadId, 5, "التحقق من البيانات...");

    // 2) Translate
    const translations = await translateProperty(updatedProperty);
    Object.assign(updatedProperty, translations);

    if (uploadId) updateProgress(uploadId, 10, "ترجمة البيانات...");

    // 3) Read old price
    const getPriceSql = "SELECT price FROM properties WHERE property_id = ?";
    db.query(getPriceSql, [req.params.id], (err, rows) => {
      if (err) {
        console.error("Error fetching property for price update:", err);
        if (uploadId) updateProgress(uploadId, 100, "خطأ في قاعدة البيانات");
        return res.status(500).send("Database query error");
      }
      if (!rows || rows.length === 0) {
        if (uploadId) updateProgress(uploadId, 100, "العقار غير موجود");
        return res.status(404).send("Property not found");
      }

      const oldPrice = parseFloat(rows[0].price);
      const newPrice = updatedProperty.price != null ? parseFloat(updatedProperty.price) : oldPrice;

      if (!Number.isNaN(newPrice) && !Number.isNaN(oldPrice) && newPrice < oldPrice) {
        updatedProperty.old_price = oldPrice;
      }

      if (uploadId) updateProgress(uploadId, 20, "تحديث بيانات العقار...");

      // 4) Update property
      const updSql = "UPDATE properties SET ? WHERE property_id = ?";
      db.query(updSql, [updatedProperty, req.params.id], async (updErr) => {
        if (updErr) {
          console.error("Error updating property:", updErr);
          if (uploadId) updateProgress(uploadId, 100, "خطأ أثناء تحديث العقار");
          return res.status(500).send("Database update error");
        }

        // ✅ No new images
        if (!req.files || req.files.length === 0) {
          if (uploadId) finishProgress(uploadId);
          res.locals.idempotencyResult = { message: "Property updated successfully!" };
          return res.status(200).send({ message: "Property updated successfully!" });
        }

        if (uploadId) updateProgress(uploadId, 30, "قراءة الصور القديمة...");

        // 5) Replace images
        const selectImagesSql = "SELECT image_url FROM property_images WHERE property_id = ?";
        db.query(selectImagesSql, [req.params.id], async (imgErr, images) => {
          if (imgErr) {
            console.error("Error querying property images:", imgErr);
            if (uploadId) updateProgress(uploadId, 100, "خطأ أثناء قراءة الصور");
            return res.status(500).send("Database query error");
          }

          if (uploadId) updateProgress(uploadId, 35, "حذف الصور القديمة...");

          (images || []).forEach((image) => {
            const filePath = path.join(__dirname, "../uploads", image.image_url);
            fs.unlink(filePath, (e) => {
              if (e) console.error(`Error deleting file: ${filePath}`, e);
            });
          });

          const deleteImagesSql = "DELETE FROM property_images WHERE property_id = ?";
          db.query(deleteImagesSql, [req.params.id], async (delErr) => {
            if (delErr) {
              console.error("Error deleting property images:", delErr);
              if (uploadId) updateProgress(uploadId, 100, "خطأ أثناء حذف الصور");
              return res.status(500).send("Database deletion error");
            }

            const total = req.files.length;

            // ✅ metadata from UI
            const isMainList = parseIsMainList(req.body.isMain, total);
            const displayOrderList = parseDisplayOrderList(req.body.displayOrder, total);

            let mainIndex = isMainList.findIndex((v) => v === true);
            if (mainIndex === -1) mainIndex = 0;

            let watermark;
            try {
              watermark = await sharp(watermarkPath).resize({ width: 300 }).toBuffer();
            } catch (e) {
              console.error("Error loading watermark:", e);
              if (uploadId) updateProgress(uploadId, 100, "خطأ في watermark");
              return res.status(500).send("Error loading watermark");
            }

            if (uploadId) updateProgress(uploadId, 40, `بدء معالجة الصور (0/${total})...`);

            const newImages = [];

            for (const [index, file] of req.files.entries()) {
              const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
              const outputName = `${uniqueSuffix}.webp`;
              const outputPath = path.join(__dirname, "../uploads", outputName);

              await sharp(file.buffer)
                .rotate()
                .resize(800, 600, {
                  fit: "contain",
                  background: { r: 0, g: 0, b: 0, alpha: 0 },
                })
                .composite([{ input: watermark, gravity: "center", blend: "over", opacity: 1 }])
                .webp({ quality: 80 })
                .toFile(outputPath);

              const isMain = index === mainIndex;
              const displayOrder = displayOrderList[index] ?? index;

              newImages.push([req.params.id, outputName, isMain, displayOrder]);

              if (uploadId) {
                const p = 40 + Math.round(((index + 1) / total) * 45);
                updateProgress(uploadId, p, `معالجة الصور (${index + 1}/${total})...`);
              }
            }

            if (newImages.length === 0) {
              if (uploadId) finishProgress(uploadId);
              res.locals.idempotencyResult = { message: "Property updated successfully!" };
              return res.status(200).send({ message: "Property updated successfully!" });
            }

            newImages.sort((a, b) => (a[3] ?? 0) - (b[3] ?? 0));

            if (uploadId) updateProgress(uploadId, 90, "حفظ الصور في قاعدة البيانات...");

            const insertImagesSql =
              "INSERT INTO property_images (property_id, image_url, is_main, display_order) VALUES ?";

            db.query(insertImagesSql, [newImages], (insErr) => {
              if (insErr) {
                console.error("Error inserting property images:", insErr);
                if (uploadId) updateProgress(uploadId, 100, "خطأ أثناء حفظ الصور");
                return res.status(500).send("Database insertion error");
              }

              if (uploadId) finishProgress(uploadId);
              res.locals.idempotencyResult = { message: "Property updated successfully!" };
              return res.status(200).send({ message: "Property updated successfully!" });
            });
          });
        });
      });
    });
  } catch (error) {
    console.error("Error processing request:", error);
    if (uploadId) updateProgress(uploadId, 100, "خطأ أثناء المعالجة");
    return res.status(500).send("Error processing request");
  }
};

// ======================================================
// ✅ Update property availability
// ======================================================
exports.updatePropertyAvailability = async (req, res) => {
  const { available, availability_date } = req.body;
  const availableVal = toBool(available) ? 1 : 0;

  // ✅ AUTO update (safe)
  await autoUpdateAvailabilityByDate();

  // ✅ If someone sets available=0 with a date <= today, auto-fix to available=1
  let finalAvailable = availableVal;
  let finalDate = availableVal ? null : availability_date || null;

  if (finalAvailable === 0 && finalDate && !Number.isNaN(Date.parse(finalDate))) {
    const d = new Date(finalDate);
    d.setHours(0, 0, 0, 0);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (d <= today) {
      finalAvailable = 1;
      finalDate = null;
    }
  }

  const sql = "UPDATE properties SET available = ?, availability_date = ? WHERE property_id = ?";
  db.query(sql, [finalAvailable, finalDate, req.params.id], (err) => {
    if (err) {
      console.error("Error updating availability:", err);
      return res.status(500).send("Database update error");
    }
    return res.status(200).send({ message: "Property availability updated successfully!" });
  });
};

// ======================================================
// ✅ Update SOLD status
// ======================================================
exports.updatePropertySoldStatus = (req, res) => {
  const { is_sold, sold_date } = req.body;
  const soldVal = toBool(is_sold) ? 1 : 0;

  const sql = `
    UPDATE properties
    SET is_sold = ?, sold_date = ?
    WHERE property_id = ?
  `;

  db.query(sql, [soldVal, soldVal ? sold_date || null : null, req.params.id], (err) => {
    if (err) {
      console.error("Error updating sold status:", err);
      return res.status(500).send("Database update error");
    }
    return res.status(200).send({ message: "Sold status updated successfully!" });
  });
};

// ======================================================
// ✅ Delete a property by ID
// ======================================================
exports.deleteProperty = (req, res) => {
  const propertyId = req.params.id;

  const selectImagesSql = "SELECT image_url FROM property_images WHERE property_id = ?";
  db.query(selectImagesSql, [propertyId], (err, images) => {
    if (err) {
      console.error("Error querying property images:", err);
      return res.status(500).send("Database query error");
    }

    (images || []).forEach((image) => {
      const filePath = path.join(__dirname, "../uploads", image.image_url);
      fs.unlink(filePath, (e) => {
        if (e) console.error(`Error deleting file: ${filePath}`, e);
      });
    });

    const deleteImagesSql = "DELETE FROM property_images WHERE property_id = ?";
    db.query(deleteImagesSql, [propertyId], (delImgErr) => {
      if (delImgErr) {
        console.error("Error deleting property images:", delImgErr);
        return res.status(500).send("Database deletion error");
      }

      const deletePropertySql = "DELETE FROM properties WHERE property_id = ?";
      db.query(deletePropertySql, [propertyId], (delPropErr) => {
        if (delPropErr) {
          console.error("Error deleting property:", delPropErr);
          return res.status(500).send("Database deletion error");
        }
        return res.status(200).send({ message: "Property deleted successfully!" });
      });
    });
  });
};
