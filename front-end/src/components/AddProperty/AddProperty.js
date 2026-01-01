// AddProperty.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AddProperty.css";

function AddProperty() {
  const API_URL = process.env.REACT_APP_SERVER;

  // ✅ Cities
  const [cities, setCities] = useState([]);
  const [loadingCities, setLoadingCities] = useState(false);

  const [newProperty, setNewProperty] = useState({
    type: "rent",
    title_ar: "",
    description_ar: "",
    price: "",
    city_id: "", 
    exact_address: "",
    area: "",
    available: true,
    availability_date: "",
    bedrooms: "",
    salon: "",
    bathrooms: "",
    kitchen: "",
    floors: "",
  });

  const [imageFiles, setImageFiles] = useState([]);
  const [errors, setErrors] = useState({});

  // ✅ prevent double submit + disable form
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ progress bar state
  const [progress, setProgress] = useState({ percent: 0, message: "" });

  // used to stop polling cleanly
  const pollTimerRef = useRef(null);

  // idempotency key per submit
  const idempotencyKeyRef = useRef(null);

  const token = useMemo(() => localStorage.getItem("jwtToken"), []);

  // ✅ Load cities on mount
  useEffect(() => {
    const loadCities = async () => {
      try {
        setLoadingCities(true);
        const resp = await axios.get(`${API_URL}/cities?active=1`);
        setCities(resp.data?.cities || []);
      } catch (e) {
        console.error("Error loading cities:", e);
        toast.error("Error loading cities list.");
        setCities([]);
      } finally {
        setLoadingCities(false);
      }
    };

    loadCities();
  }, [API_URL]);

  const resetForm = () => {
    setNewProperty({
      type: "rent",
      title_ar: "",
      description_ar: "",
      price: "",
      city_id: "",
      exact_address: "",
      area: "",
      available: true,
      availability_date: "",
      bedrooms: "",
      salon: "",
      bathrooms: "",
      kitchen: "",
      floors: "",
    });
    setImageFiles([]);
    setErrors({});
  };

  const stopPolling = () => {
    if (pollTimerRef.current) {
      clearInterval(pollTimerRef.current);
      pollTimerRef.current = null;
    }
  };

  useEffect(() => {
    return () => stopPolling();
  }, []);

  const generateUploadId = () => {
    return `upl_${Date.now()}_${Math.random().toString(16).slice(2)}`;
  };

  const generateIdempotencyKey = () => {
    return `idem_${Date.now()}_${Math.random().toString(16).slice(2)}`;
  };

  const startProgressPolling = (uploadId) => {
    stopPolling();
    setProgress({ percent: 1, message: "بدء الإرسال..." });

    pollTimerRef.current = setInterval(async () => {
      try {
        const resp = await axios.get(`${API_URL}/api/upload-progress/${uploadId}`);
        const data = resp.data || {};
        const percent = Number(data.percent ?? 0);
        const message = data.message ?? "";

        setProgress({ percent, message });

        if (percent >= 100 || data.done) {
          stopPolling();
        }
      } catch {
        // ignore polling errors
      }
    }, 300);
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    if (isSubmitting) return;

    if (name === "description_ar") {
      const allowArabicMarkdown = value.replace(
        /[^\u0600-\u06FF0-9\s:;.,!?\-#\*\(\)\[\]_`]/g,
        ""
      );
      setNewProperty((prevState) => ({ ...prevState, [name]: allowArabicMarkdown }));
      return;
    }

    if (name === "title_ar") {
      const arabicOnly = value.replace(/[^\u0600-\u06FF0-9\s:;.,!]/g, "");
      setNewProperty((prevState) => ({
        ...prevState,
        [name]: type === "number" ? parseInt(arabicOnly, 10) : arabicOnly,
      }));
      return;
    }

    // city_id is from select (string), keep as string here
    setNewProperty((prevState) => ({
      ...prevState,
      [name]: type === "number" ? (value === "" ? "" : parseInt(value, 10)) : value,
    }));
  };

  const handleFileChange = (e) => {
    if (isSubmitting) return;

    const files = Array.from(e.target.files || []);
    const updatedFiles = files.map((file, index) => ({
      file,
      isMain: index === 0,
      displayOrder: index,
    }));

    setImageFiles(updatedFiles);
    setErrors((prevErrors) => ({ ...prevErrors, images: "" }));
  };

  const validateForm = () => {
    const vErrors = {};
    const requiredFields = ["title_ar", "description_ar", "price", "city_id", "area"];

    if (
      newProperty.type !== "floorplots" &&
      newProperty.type !== "Commercialgarages" &&
      // newProperty.type !== "requests" &&
      // newProperty.type !== "apartmentsReq" &&
      // newProperty.type !== "floorplotsReq" &&
      // newProperty.type !== "CommercialgaragesReq" &&
      newProperty.type !== "CommercialgaragesRent"
    ) {
      requiredFields.push("bedrooms", "bathrooms", "kitchen");
      if (newProperty.type === "buy") requiredFields.push("floors");
    }

    if (newProperty.type === "rent" && !newProperty.available && !newProperty.availability_date) {
      requiredFields.push("availability_date");
    }

    for (const field of requiredFields) {
      if (
        newProperty[field] === "" ||
        newProperty[field] === null ||
        newProperty[field] === undefined
      ) {
        vErrors[field] = `Please fill out the ${field.replace("_ar", "").replace("_", " ")} field.`;
      }
    }

    return vErrors;
  };

  const handleAddProperty = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fix the errors in the form.");
      return;
    }

    if (imageFiles.length === 0) {
      setErrors((prevErrors) => ({ ...prevErrors, images: "Please upload at least one image." }));
      toast.error("Please upload at least one image.");
      return;
    }

    const uploadId = generateUploadId();
    idempotencyKeyRef.current = generateIdempotencyKey();

    startProgressPolling(uploadId);

    setIsSubmitting(true);
    setProgress({ percent: 5, message: "إرسال البيانات..." });

    const formData = new FormData();
    formData.append("uploadId", uploadId);

    for (const key in newProperty) {
      if (newProperty[key] !== "") {
        formData.append(key, newProperty[key]);
      }
    }

    // ✅ keep same behavior as old version
    imageFiles.forEach((img) => {
      formData.append("images", img.file);
      formData.append("isMain", String(img.isMain));
      formData.append("displayOrder", String(img.displayOrder));
    });

    try {
      const response = await axios.post(`${API_URL}/properties`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
          ...(idempotencyKeyRef.current ? { "Idempotency-Key": idempotencyKeyRef.current } : {}),
        },
        onUploadProgress: (evt) => {
          if (!evt.total) return;
          const pct = Math.round((evt.loaded * 100) / evt.total);

          // map upload progress to 0..40
          const mapped = Math.min(40, Math.max(0, Math.round((pct / 100) * 40)));
          setProgress((prev) => ({
            percent: Math.max(prev.percent, mapped),
            message: "رفع الملفات...",
          }));
        },
      });

      if (response.status === 200) {
        toast.success("Property added successfully!", { icon: "🏠" });
        setProgress({ percent: 100, message: "تمت الإضافة بنجاح" });
        resetForm();
      } else {
        throw new Error("Unexpected response status");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(
          `Error adding property: ${
            typeof error.response.data === "string" ? error.response.data : "Server error"
          }`
        );
      } else if (error.request) {
        toast.error("No response from server. Please try again later.");
      } else {
        toast.error(`Error adding property: ${error.message}`);
      }
      setProgress((prev) => ({ percent: Math.max(prev.percent, 100), message: "فشل الإرسال" }));
    } finally {
      setIsSubmitting(false);
      setTimeout(() => stopPolling(), 1200);
    }
  };

  const disabled = isSubmitting;

  return (
    <div className="add-property-container">
      <form onSubmit={handleAddProperty} className="property-formm">
        <ToastContainer className="toast-inside-modal" />

        <select
          name="type"
          value={newProperty.type}
          onChange={handleInputChange}
          required
          disabled={disabled}
        >
          <option value="rent">إيجار مفروش</option>
          <option value="regularRent">إيجار عادي</option>
          <option value="CommercialgaragesRent">محلات تجارية للإيجار</option>
          <option value="buy">منازل للبيع</option>
          <option value="apartments">شقق للبيع</option>
          <option value="floorplots">قطع أرضية للبيع</option>
          <option value="Commercialgarages">محلات تجارية للبيع</option>
          {/* <option value="requests">طلبات منازل</option>
          <option value="apartmentsReq">طلبات شقق</option>
          <option value="floorplotsReq">طلبات قطع أرضية</option>
          <option value="CommercialgaragesReq">طلبات محلات تجارية</option> */}
        </select>
        {errors.type && <p className="error-message">{errors.type}</p>}

        <input
          type="text"
          name="title_ar"
          placeholder="العنوان (بالعربية)"
          value={newProperty.title_ar}
          onChange={handleInputChange}
          required
          disabled={disabled}
        />
        {errors.title_ar && <p className="error-message">{errors.title_ar}</p>}

        <textarea
          style={{ resize: "none" }}
          name="description_ar"
          placeholder="الوصف (يسمح باستخدام Markdown)"
          value={newProperty.description_ar}
          onChange={handleInputChange}
          required
          disabled={disabled}
        />
        {errors.description_ar && <p className="error-message">{errors.description_ar}</p>}

        <input
          type="number"
          name="price"
          placeholder="الثمن"
          value={newProperty.price}
          onChange={handleInputChange}
          required
          disabled={disabled}
        />
        {errors.price && <p className="error-message">{errors.price}</p>}

        {/* ✅ City select بدل location_ar */}
        <select
          name="city_id"
          value={newProperty.city_id}
          onChange={handleInputChange}
          required
          disabled={disabled || loadingCities}
        >
          <option value="">
            {loadingCities ? "جاري تحميل المدن..." : "اختر المدينة"}
          </option>
          {cities.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name_ar} - {c.name_fr}
            </option>
          ))}
        </select>
        {errors.city_id && <p className="error-message">{errors.city_id}</p>}

        <input
          type="text"
          name="exact_address"
          placeholder="العنوان الدقيق (e.g., 7379+44W, Beni Ansar)"
          value={newProperty.exact_address}
          onChange={handleInputChange}
          disabled={disabled}
        />

        <input
          type="number"
          name="area"
          placeholder="المساحة"
          value={newProperty.area}
          onChange={handleInputChange}
          required
          disabled={disabled}
        />
        {errors.area && <p className="error-message">{errors.area}</p>}

        {/* ✅ Same conditional fields */}
        {newProperty.type !== "floorplots" &&
          newProperty.type !== "Commercialgarages" &&
          newProperty.type !== "CommercialgaragesRent" && (
          // newProperty.type !== "requests" &&
          // newProperty.type !== "apartmentsReq" &&
          // newProperty.type !== "floorplotsReq" &&
          // newProperty.type !== "CommercialgaragesReq" && (
            <>
              <input
                type="number"
                name="bedrooms"
                placeholder="عدد غرف النوم"
                value={newProperty.bedrooms}
                onChange={handleInputChange}
                required
                disabled={disabled}
              />
              {errors.bedrooms && <p className="error-message">{errors.bedrooms}</p>}

              <input
                type="number"
                name="salon"
                placeholder="عددالصالونات"
                value={newProperty.salon}
                onChange={handleInputChange}
                disabled={disabled}
              />

              <input
                type="number"
                name="bathrooms"
                placeholder="عدد الحمامات"
                value={newProperty.bathrooms}
                onChange={handleInputChange}
                required
                disabled={disabled}
              />
              {errors.bathrooms && <p className="error-message">{errors.bathrooms}</p>}

              <input
                type="number"
                name="kitchen"
                placeholder="عددالمطابخ"
                value={newProperty.kitchen}
                onChange={handleInputChange}
                required
                disabled={disabled}
              />
              {errors.kitchen && <p className="error-message">{errors.kitchen}</p>}

              {(newProperty.type === "buy" ||
                newProperty.type === "apartments" ||
                newProperty.type === "regularRent") && (
                <>
                  <input
                    type="number"
                    name="floors"
                    placeholder="عدد الطوابق"
                    value={newProperty.floors}
                    onChange={handleInputChange}
                    required
                    disabled={disabled}
                  />
                  {errors.floors && <p className="error-message">{errors.floors}</p>}
                </>
              )}
            </>
          )}

        {/* ✅ Rent availability */}
        {newProperty.type === "rent" && (
          <>
            <label style={{ display: "none" }}>
              متوفر:
              <select
                name="available"
                value={newProperty.available}
                onChange={handleInputChange}
                required
                disabled={disabled}
              >
                <option value={true}>نعم</option>
                <option value={false}>لا</option>
              </select>
            </label>

            {!newProperty.available && (
              <>
                <input
                  type="date"
                  name="availability_date"
                  placeholder="تاريخ التوفر"
                  value={newProperty.availability_date}
                  onChange={handleInputChange}
                  required
                  disabled={disabled}
                />
                {errors.availability_date && (
                  <p className="error-message">{errors.availability_date}</p>
                )}
              </>
            )}
          </>
        )}

        {/* ✅ Images block (restored) */}
        <div className="file-input">
          <label
            htmlFor="files"
            className={disabled ? "file-label-disabled" : ""}
            style={{ pointerEvents: disabled ? "none" : "auto", opacity: disabled ? 0.7 : 1 }}
          >
            تحميل الصور
          </label>

          <input
            type="file"
            id="files"
            name="images"
            onChange={handleFileChange}
            multiple
            disabled={disabled}
          />

          {imageFiles.length > 0 &&
            imageFiles.map((imageFile, index) => (
              <div key={index}>
                <span className="file-name">{imageFile.file.name}</span>

                <label>
                  الصورة الاساسية:
                  <input
                    type="radio"
                    name="mainImage"
                    checked={imageFile.isMain}
                    disabled={disabled}
                    onChange={() =>
                      setImageFiles((prevFiles) =>
                        prevFiles.map((img, idx) => ({
                          ...img,
                          isMain: idx === index,
                        }))
                      )
                    }
                  />
                </label>

                <label>
                  ترتيب العرض:
                  <input
                    type="number"
                    value={imageFile.displayOrder}
                    disabled={disabled}
                    onChange={(ev) =>
                      setImageFiles((prevFiles) =>
                        prevFiles.map((img, idx) => ({
                          ...img,
                          displayOrder: idx === index ? parseInt(ev.target.value, 10) : img.displayOrder,
                        }))
                      )
                    }
                  />
                </label>
              </div>
            ))}

          {imageFiles.length > 0 && (
            <span className="file-name">{imageFiles.length} file(s) selected</span>
          )}
        </div>

        {errors.images && <div className="error-alert">{errors.images}</div>}

        {(isSubmitting || progress.percent > 0) && (
          <div className="upload-progress-wrap upload-progress-above-btn" aria-live="polite">
            <div className="upload-progress-top">
              <span className="upload-progress-label">{progress.message || "Processing..."}</span>
              <span className="upload-progress-percent">
                {Math.min(100, Math.max(0, progress.percent))}%
              </span>
            </div>

            <div className="upload-progress-bar">
              <div
                className="upload-progress-fill"
                style={{ width: `${Math.min(100, Math.max(0, progress.percent))}%` }}
              />
            </div>
          </div>
        )}

        <button type="submit" className="btn-primary" disabled={disabled}>
          {isSubmitting ? "جاري الإضافة..." : "إضافة عقار"}
        </button>

        <input type="text" style={{ display: "none" }} />
      </form>
    </div>
  );
}

export default AddProperty;