import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { format, addDays } from "date-fns";
import AddProperty from "../AddProperty/AddProperty";

import "./propertyPage.css";

function PropertyPage() {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showAddPropertyModal, setShowAddPropertyModal] = useState(false);
  const [imageFiles, setImageFiles] = useState([]);
  const [errors, setErrors] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showAvailabilityModal, setShowAvailabilityModal] = useState(false);
  const [availabilityProperty, setAvailabilityProperty] = useState(null);
  const [availabilityDate, setAvailabilityDate] = useState("");
  const [filterType, setFilterType] = useState("all");

  const [showSoldModal, setShowSoldModal] = useState(false);
  const [soldPropertyId, setSoldPropertyId] = useState(null);
  const [soldDate, setSoldDate] = useState("");

  const [showDescModal, setShowDescModal] = useState(false);
  const [descText, setDescText] = useState("");

  // ✅ Update progress + disable submit
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateProgress, setUpdateProgress] = useState({ percent: 0, message: "" });
  const pollTimerRef = useRef(null);

  // ✅ cities
  const [cities, setCities] = useState([]);
  const [citiesLoading, setCitiesLoading] = useState(false);

  const [showAddCityModal, setShowAddCityModal] = useState(false);
  const [newCity, setNewCity] = useState({ name_ar: "", name_fr: "" });

  const API_URL = process.env.REACT_APP_SERVER;

  useEffect(() => {
    fetchCities(); // ✅ cities once
  }, []);

  useEffect(() => {
    fetchProperties(currentPage, filterType);
  }, [currentPage, filterType]);

  
    const fetchCities = async () => {
    try {
      setCitiesLoading(true);
      const resp = await axios.get(`${API_URL}/api/cities?active=1`);
      const list = resp.data?.cities || [];
      setCities(list);
    } catch (e) {
      console.warn("fetchCities failed:", e?.message || e);
      setCities([]);
    } finally {
      setCitiesLoading(false);
    }
  };


  const fetchProperties = async (page, type) => {
    try {
      const response = await axios.get(
        `${API_URL}/properties?page=${page}&type=${type}&lang=ar`
      );
      setProperties(response.data.properties || []);
      setTotalPages(response.data.totalPages || 1);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  const handleTypeChange = (e) => {
    setFilterType(e.target.value);
    setCurrentPage(1);
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

  const startProgressPolling = (uploadId) => {
    stopPolling();
    setUpdateProgress({ percent: 1, message: "بدء المعالجة..." });

    pollTimerRef.current = setInterval(async () => {
      try {
        const resp = await axios.get(`${API_URL}/api/upload-progress/${uploadId}`);
        const data = resp.data || {};
        const percent = Number(data.percent ?? 0);
        const message = data.message ?? "";

        setUpdateProgress({ percent, message });

        if (percent >= 100 || data.done) {
          stopPolling();
        }
      } catch {
        // ignore polling errors
      }
    }, 250);
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    // ✅ نفس قواعد التنقية القديمة للوصف والعنوان
    if (name === "description_ar") {
      const allowArabicMarkdown = value.replace(
        /[^\u0600-\u06FF0-9\s:;.,!?#*()[\]_`-]/g,
        ""
      );
      setSelectedProperty((prev) => ({ ...prev, [name]: allowArabicMarkdown }));
      return;
    }

    if (name === "title_ar") {
      const arabicOnly = value.replace(/[^\u0600-\u06FF0-9\s:;.,!]/g, "");
      setSelectedProperty((prev) => ({
        ...prev,
        [name]: type === "number" ? parseInt(arabicOnly, 10) : arabicOnly,
      }));
      return;
    }

    // ✅ city_id numeric
    if (name === "city_id") {
      const n = value === "" ? "" : parseInt(value, 10);
      setSelectedProperty((prev) => ({
        ...prev,
        city_id: Number.isNaN(n) ? "" : n,
      }));
      return;
    }

    setSelectedProperty((prev) => ({
      ...prev,
      [name]: type === "number" ? parseInt(value, 10) : value,
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const updatedFiles = files.map((file, index) => ({
      file,
      isMain: index === 0,
      displayOrder: index,
    }));
    setImageFiles(updatedFiles);
    setErrors((prev) => ({ ...prev, images: "" }));
  };

  const openSoldModal = (propertyId) => {
    setSoldPropertyId(propertyId);
    setSoldDate(format(new Date(), "yyyy-MM-dd"));
    setShowSoldModal(true);
  };

  const closeSoldModal = () => {
    setShowSoldModal(false);
    setSoldPropertyId(null);
    setSoldDate("");
  };

  const handleSoldSubmit = async (e) => {
    e.preventDefault();
    if (!soldDate) {
      toast.error("Please select a sold date.");
      return;
    }

    try {
      await axios.put(`${API_URL}/properties/${soldPropertyId}/sold`, {
        is_sold: 1,
        sold_date: soldDate,
      });

      toast.success("Sold status updated!", { icon: "✅" });
      closeSoldModal();
      fetchProperties(currentPage, filterType);
    } catch (error) {
      toast.error("Error updating sold status.");
      console.error(error);
    }
  };

  const toggleSold = async (property_id, isSoldNow) => {
    // OFF -> ON: open modal
    if (!isSoldNow) {
      openSoldModal(property_id);
      return;
    }

    // ON -> OFF: direct
    try {
      await axios.put(`${API_URL}/properties/${property_id}/sold`, {
        is_sold: 0,
        sold_date: null,
      });

      toast.success("Sold status updated!", { icon: "✅" });
      fetchProperties(currentPage, filterType);
    } catch (error) {
      toast.error("Error updating sold status.");
      console.error(error);
    }
  };

  const handleUpdateProperty = async (e) => {
    e.preventDefault();
    if (!selectedProperty) return;

    // ✅ نفس الشرط القديم
    if (
      selectedProperty.type === "rent" &&
      !selectedProperty.available &&
      !selectedProperty.availability_date
    ) {
      toast.error("Please select an availability date for unavailable properties.");
      return;
    }

    // ✅ أهم تغيير لتفادي المشاكل: تأكد city_id موجود
    if (!selectedProperty.city_id) {
      toast.error("Please select a city.");
      return;
    }

    const uploadId = generateUploadId();
    startProgressPolling(uploadId);

    setIsUpdating(true);
    setUpdateProgress({ percent: 2, message: "بدء رفع الملفات..." });

    const formData = new FormData();
    formData.append("uploadId", uploadId);

    Object.keys(selectedProperty).forEach((key) => {
      if (key === "images") return; // لا ترسل images array
      if (selectedProperty[key] === undefined || selectedProperty[key] === null) {
        // خليه يمرّ في FormData إذا بغيت، ولكن نخليو null ما يتبعتش باش ما يخلطش
        // إلا كنت باغي null يتبعت، حيد هذا الشرط
      }
      formData.append(key, selectedProperty[key]);
    });

    // ✅ images + metadata
    imageFiles.forEach((img) => {
      formData.append("images", img.file);
      formData.append("isMain", String(img.isMain));
      formData.append("displayOrder", String(img.displayOrder));
    });

    try {
      await axios.put(`${API_URL}/properties/${selectedProperty.property_id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (evt) => {
          if (!evt.total) return;
          const pct = Math.round((evt.loaded * 100) / evt.total);
          const mapped = Math.min(35, Math.max(0, Math.round((pct / 100) * 35)));

          setUpdateProgress((prev) => ({
            percent: Math.max(prev.percent, mapped),
            message: "رفع الملفات...",
          }));
        },
      });

      toast.success("Property updated successfully!", { icon: "🏠" });

      setSelectedProperty(null);
      setImageFiles([]);
      setShowModal(false);

      setUpdateProgress({ percent: 100, message: "تم التحديث بنجاح" });
      fetchProperties(currentPage, filterType);
    } catch (error) {
      toast.error("Error updating property. Please try again.");
      console.error("Error updating property:", error);
      setUpdateProgress({ percent: 100, message: "فشل التحديث" });
    } finally {
      setIsUpdating(false);
      setTimeout(() => stopPolling(), 1200);
    }
  };

  const handleDeleteProperty = async (property_id) => {
    const confirmDelete = window.confirm("Do you want to remove this item?");
    if (confirmDelete) {
      try {
        await axios.delete(`${API_URL}/properties/${property_id}`);
        toast.success("Property deleted successfully!", { icon: "🏠" });
        fetchProperties(currentPage, filterType);
      } catch (error) {
        toast.error("Error deleting property. Please try again.");
        console.error("Error deleting property:", error);
      }
    }
  };

  const toggleAvailability = async (property_id, currentStatus) => {
    if (currentStatus) {
      setAvailabilityProperty(property_id);
      setShowAvailabilityModal(true);
    } else {
      try {
        await axios.put(`${API_URL}/properties/${property_id}/availability`, {
          available: true,
          availability_date: null,
        });
        toast.success("Property availability updated successfully!", { icon: "🏠" });
        fetchProperties(currentPage, filterType);
      } catch (error) {
        toast.error("Error updating property availability. Please try again.");
        console.error("Error updating property availability:", error);
      }
    }
  };

  const handleAvailabilitySubmit = async () => {
    if (!availabilityDate) {
      toast.error("Please select an availability date.");
      return;
    }

    try {
      await axios.put(`${API_URL}/properties/${availabilityProperty}/availability`, {
        available: false,
        availability_date: availabilityDate,
      });
      toast.success("Property availability updated successfully!", { icon: "🏠" });
      fetchProperties(currentPage, filterType);
      setShowAvailabilityModal(false);
      setAvailabilityProperty(null);
      setAvailabilityDate("");
    } catch (error) {
      toast.error("Error updating property availability. Please try again.");
      console.error("Error updating property availability:", error);
    }
  };

  const openModal = (property) => {
    setSelectedProperty({
      ...property,
      images: property.images || [],
      // ضمان وجود sold fields
      is_sold: property.is_sold ?? 0,
      sold_date: property.sold_date ?? null,
      // ✅ ensure city_id exists in state
      city_id: property.city_id ?? "",
    });
    setUpdateProgress({ percent: 0, message: "" });
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedProperty(null);
    setImageFiles([]);
    setUpdateProgress({ percent: 0, message: "" });
    setShowModal(false);
  };

  const handleModalClick = (e) => {
    if (e.target.className === "modal") closeModal();
  };

  const openAddPropertyModal = () => setShowAddPropertyModal(true);
  const closeAddPropertyModal = () => setShowAddPropertyModal(false);

  const handleAddPropertyModalClick = (e) => {
    if (e.target.className === "modal") closeAddPropertyModal();
  };

  const formatDate = (dateString) => {
    try {
      return format(new Date(dateString), "yyyy-MM-dd");
    } catch {
      return dateString;
    }
  };

  const getTomorrowDate = () => {
    const tomorrow = addDays(new Date(), 1);
    return format(tomorrow, "yyyy-MM-dd");
  };

  const getShortDescription = (text, wordsCount = 3) => {
    const clean = (text || "").replace(/\s+/g, " ").trim();
    if (!clean) return "";
    const words = clean.split(" ");
    if (words.length <= wordsCount) return clean;
    return words.slice(0, wordsCount).join(" ") + "...";
  };

  const openDescModal = (fullText) => {
    setDescText(fullText || "");
    setShowDescModal(true);
  };

  const closeDescModal = () => {
    setShowDescModal(false);
    setDescText("");
  };

  const shouldShowSoldColumn = (type) => {
    const hiddenTypes = [
      "rent",
      // "regularRent",
      "CommercialgaragesRent",
      // "requests",
      // "apartmentsReq",
      // "floorplotsReq",
      // "CommercialgaragesReq",
    ];
    return !hiddenTypes.includes(type);
  };

  const getCityLabelById = (id) => {
    if (!id) return "";
    const c = cities.find((x) => String(x.id) === String(id));
    return c ? c.name_ar || c.name_fr || "" : "";
  };

  const handleCityChange = (e) => {
  setNewCity({ ...newCity, [e.target.name]: e.target.value });
};

  const handleAddCity = async (e) => {
    e.preventDefault();

    if (!newCity.name_ar || !newCity.name_fr) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      await axios.post(`${API_URL}/api/cities`, newCity);
      toast.success("City added successfully 🏙️");

      setNewCity({ name_ar: "", name_fr: "" });

      // ✅ refresh cities table
      await fetchCities();
    } catch (err) {
      console.error(err);
      toast.error("Error adding city");
    }
  };
    const handleDeleteCity = async (cityId) => {
    const ok = window.confirm("Delete this city?");
    if (!ok) return;

    try {
      await axios.delete(`${API_URL}/api/cities/${cityId}`);
      toast.success("City deleted ✅");

      // ✅ refresh cities table
      await fetchCities();
    } catch (err) {
      console.error(err);
      toast.error("Error deleting city");
    }
  };

  const toggleFeatured = async (property_id, isFeaturedNow) => {
  try {
    await axios.put(`${API_URL}/properties/${property_id}/featured`, {
      is_featured: isFeaturedNow ? 0 : 1,
    });
    toast.success("Featured updated ✅");
    fetchProperties(currentPage, filterType);
  } catch (e) {
    const msg = e?.response?.data || "Error updating featured";
    toast.error(String(msg));
  }
};
  useEffect(() => {
    if (showAddPropertyModal || showModal || showSoldModal || showAvailabilityModal || showDescModal || showAddCityModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showAddPropertyModal, showModal, showSoldModal, showAvailabilityModal, showDescModal, showAddCityModal]);

  return (
    <div className="update-property-container">
      <ToastContainer />
      <center>
        <h1>Properties</h1>
      </center>
      <div style={{ display: "flex", gap: "10px" }}>
      <button className="btn-add-property" onClick={openAddPropertyModal}>
        Add Property
      </button>
      <button className="btn-add-property" onClick={() => setShowAddCityModal(true)}>
        Add City
      </button></div>

      {/* Filter by Type */}
      <div className="filter-container">
        <label htmlFor="filterType">Filter by Type:</label>
        <select id="filterType" value={filterType} onChange={handleTypeChange}>
          <option value="all">جميع الأنواع</option>
          <option value="rent">إيجار مفروش</option>
          <option value="regularRent">إيجار عادي</option>
          <option value="CommercialgaragesRent">محلات تجارية للإيجار</option>
          <option value="buy">منازل للبيع</option>
          <option value="apartments">شقق للبيع</option>
          <option value="floorplots"> قطع أرضية للبيع</option>
          <option value="Commercialgarages">محلات تجارية للبيع</option>
          {/* <option value="requests">طلبات منازل</option>
          <option value="apartmentsReq">طلبات شقق</option>
          <option value="floorplotsReq">طلبات قطع أرضية</option>
          <option value="CommercialgaragesReq">طلبات محلات تجارية</option> */}
        </select>
      </div>

      {/* Properties Table */}
      <div className="properties-table-container">
        <table className="properties-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Location</th>
              <th>Exact Address</th>
              <th>Bedrooms</th>
              <th>Salon</th>
              <th>Bathrooms</th>
              <th>Kitchen</th>
              <th>Area</th>
              <th>Floors</th>
              <th>Image</th>
              <th>Available</th>
              <th>Featured</th>
              {(filterType === "all" || shouldShowSoldColumn(filterType)) && <th>Sold</th>}
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {properties.length > 0 ? (
              properties.map((property) => (
                <tr key={property.property_id}>
                  <td>{property.title_ar || property.title}</td>

                  <td
                    className="desc-cell"
                    onClick={() => openDescModal(property.description_ar || property.description)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter")
                        openDescModal(property.description_ar || property.description);
                    }}
                    title="Click to view full description"
                  >
                    {getShortDescription(property.description_ar || property.description, 3)}
                  </td>

                  <td>{property.price}</td>

                  {/* ✅ location now comes from cities join (property.location) */}
                  <td>{property.location_ar || property.location || getCityLabelById(property.city_id)}</td>

                  <td>{property.exact_address}</td>
                  <td>{property.bedrooms}</td>
                  <td>{property.salon}</td>
                  <td>{property.bathrooms}</td>
                  <td>{property.kitchen}</td>
                  <td>{property.area}</td>
                  <td>{property.floors}</td>

                  <td>
                    <img
                      src={`${API_URL}/uploads/${property.image_url}`}
                      alt={property.title}
                      className="property-image"
                    />
                  </td>

                  <td>
                    {property.type === "rent" && (
                      <div>
                        <label className="toggle-switch">
                          <input
                            type="checkbox"
                            checked={!!property.available}
                            onChange={() =>
                              toggleAvailability(property.property_id, !!property.available)
                            }
                          />
                          <span className="slider"></span>
                        </label>

                        {!property.available && (
                          <p>
                            <strong>Date:</strong> {formatDate(property.availability_date)}
                          </p>
                        )}
                      </div>
                    )}
                  </td>
                  <td>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={!!property.is_featured}
                        onChange={() => toggleFeatured(property.property_id, !!property.is_featured)}
                      />
                      <span className="slider"></span>
                    </label>
                  </td>

                  <td>
                    {shouldShowSoldColumn(property.type) && (
                      <div>
                        <label className="toggle-switch">
                          <input
                            type="checkbox"
                            checked={!!property.is_sold}
                            onChange={() => toggleSold(property.property_id, !!property.is_sold)}
                          />
                          <span className="slider"></span>
                        </label>

                        {!!property.is_sold && property.sold_date && (
                          <p>
                            <strong>Date:</strong> {formatDate(property.sold_date)}
                          </p>
                        )}
                      </div>
                    )}
                  </td>

                  <td className="actions">
                    <button onClick={() => openModal(property)} className="update-button">
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                      onClick={() => handleDeleteProperty(property.property_id)}
                      className="delete-button"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={filterType === "all" || shouldShowSoldColumn(filterType) ? 14 : 13}>
                  No properties found
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="pagination">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous Page"
          >
            Previous
          </button>

          {currentPage > 2 && (
            <>
              <button onClick={() => setCurrentPage(1)}>1</button>
              {currentPage > 3 && <span className="ellipsis">...</span>}
            </>
          )}

          {Array.from({ length: 3 }, (_, index) => {
            const page = currentPage - 1 + index;
            if (page > 0 && page <= totalPages) {
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={currentPage === page ? "active" : ""}
                >
                  {page}
                </button>
              );
            }
            return null;
          })}

          {currentPage < totalPages - 1 && (
            <>
              {currentPage < totalPages - 2 && <span className="ellipsis">...</span>}
              <button onClick={() => setCurrentPage(totalPages)}>{totalPages}</button>
            </>
          )}

          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next Page"
          >
            Next
          </button>
        </div>
      </div>

      {/* modal for Updating Property */}
      {showModal && selectedProperty && (
        <div className="modal" onClick={handleModalClick}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <div className="modal-body">
              <form onSubmit={handleUpdateProperty} className="property-form">
                <h2>Update Property</h2>

                <img
                  src={`${API_URL}/uploads/${selectedProperty.image_url}`}
                  alt={selectedProperty.title}
                  className="property-image-large"
                />

                <div className="select-container">
                  <select
                    name="type"
                    value={selectedProperty.type}
                    onChange={handleInputChange}
                    required
                    disabled={isUpdating}
                  >
                    <option value="rent">إيجار مفروش</option>
                    <option value="regularRent">إيجار عادي</option>
                    <option value="CommercialgaragesRent">محلات تجارية للإيجار</option>
                    <option value="buy">منازل للبيع</option>
                    <option value="apartments">شقق للبيع</option>
                    <option value="floorplots"> قطع أرضية للبيع</option>
                    <option value="Commercialgarages">محلات تجارية للبيع</option>
                    {/* <option value="requests">طلبات منازل</option>
                    <option value="apartmentsReq">طلبات شقق</option>
                    <option value="floorplotsReq">طلبات قطع أرضية</option>
                    <option value="CommercialgaragesReq">طلبات محلات تجارية</option> */}
                  </select>
                </div>

                <input
                  type="text"
                  name="title_ar"
                  placeholder="العنوان (بالعربية)"
                  value={selectedProperty.title_ar || ""}
                  onChange={handleInputChange}
                  required
                  disabled={isUpdating}
                />

                <textarea
                  style={{ resize: "none" }}
                  name="description_ar"
                  placeholder="الوصف (بالعربية) (Markdown مسموح)"
                  value={selectedProperty.description_ar || ""}
                  onChange={handleInputChange}
                  required
                  disabled={isUpdating}
                />

                <input
                  type="number"
                  name="price"
                  placeholder="الثمن"
                  value={selectedProperty.price ?? ""}
                  onChange={handleInputChange}
                  required
                  disabled={isUpdating}
                />

                {/* ✅ بدل location_ar -> city_id (لكن بنفس شكل الحقول) */}
                <div className="select-container">
                  <select
                    name="city_id"
                    value={selectedProperty.city_id ?? ""}
                    onChange={handleInputChange}
                    required
                    disabled={isUpdating}
                  >
                    <option value="">اختر المدينة</option>
                    {cities.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name_ar || c.name_fr}
                      </option>
                    ))}
                  </select>
                </div>

                <input
                  type="text"
                  name="exact_address"
                  placeholder="العنوان الدقيق"
                  value={selectedProperty.exact_address || ""}
                  onChange={handleInputChange}
                  disabled={isUpdating}
                />

                <input
                  type="number"
                  name="area"
                  placeholder="المساحة"
                  value={selectedProperty.area ?? ""}
                  onChange={handleInputChange}
                  required
                  disabled={isUpdating}
                />

                {selectedProperty.type !== "floorplots" &&
                  selectedProperty.type !== "Commercialgarages" &&
                  selectedProperty.type !== "CommercialgaragesRent" && (
                  // selectedProperty.type !== "requests" &&
                  // selectedProperty.type !== "apartmentsReq" &&
                  // selectedProperty.type !== "CommercialgaragesReq" &&
                  // selectedProperty.type !== "floorplotsReq" && (
                    <>
                      <input
                        type="number"
                        name="bedrooms"
                        placeholder="عدد غرف النوم"
                        value={selectedProperty.bedrooms ?? ""}
                        onChange={handleInputChange}
                        required
                        disabled={isUpdating}
                      />
                      <input
                        type="number"
                        name="salon"
                        placeholder="الصالون"
                        value={selectedProperty.salon ?? ""}
                        onChange={handleInputChange}
                        disabled={isUpdating}
                      />
                      <input
                        type="number"
                        name="bathrooms"
                        placeholder="عدد الحمامات"
                        value={selectedProperty.bathrooms ?? ""}
                        onChange={handleInputChange}
                        required
                        disabled={isUpdating}
                      />
                      <input
                        type="number"
                        name="kitchen"
                        placeholder="المطبخ"
                        value={selectedProperty.kitchen ?? ""}
                        onChange={handleInputChange}
                        required
                        disabled={isUpdating}
                      />

                      {(selectedProperty.type === "buy" ||
                        selectedProperty.type === "apartments" ||
                        selectedProperty.type === "regularRent") && (
                        <input
                          type="number"
                          name="floors"
                          placeholder="عدد الطوابق"
                          value={selectedProperty.floors ?? ""}
                          onChange={handleInputChange}
                          required
                          disabled={isUpdating}
                        />
                      )}
                    </>
                  )}

                <div className="file-input">
                  <label
                    htmlFor="files"
                    style={{
                      opacity: isUpdating ? 0.7 : 1,
                      pointerEvents: isUpdating ? "none" : "auto",
                    }}
                  >
                    Upload Images
                  </label>
                  <input
                    type="file"
                    id="files"
                    name="images"
                    onChange={handleFileChange}
                    multiple
                    disabled={isUpdating}
                  />

                  {imageFiles.length > 0 &&
                    imageFiles.map((imageFile, index) => (
                      <div key={index}>
                        <span className="file-name">{imageFile.file.name}</span>

                        <label>
                          Main Image:
                          <input
                            type="radio"
                            name="mainImage"
                            checked={imageFile.isMain}
                            disabled={isUpdating}
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
                          Display Order:
                          <input
                            type="number"
                            value={imageFile.displayOrder}
                            disabled={isUpdating}
                            onChange={(ev) =>
                              setImageFiles((prevFiles) =>
                                prevFiles.map((img, idx) => ({
                                  ...img,
                                  displayOrder:
                                    idx === index ? parseInt(ev.target.value, 10) : img.displayOrder,
                                }))
                              )
                            }
                          />
                        </label>
                      </div>
                    ))}
                </div>

                {errors.images && <div className="error-alert">{errors.images}</div>}

                {(isUpdating || updateProgress.percent > 0) && (
                  <div className="upload-progress-wrap upload-progress-above-btn" aria-live="polite">
                    <div className="upload-progress-top">
                      <span className="upload-progress-label">
                        {updateProgress.message || "Processing..."}
                      </span>
                      <span className="upload-progress-percent">
                        {Math.min(100, Math.max(0, updateProgress.percent))}%
                      </span>
                    </div>
                    <div className="upload-progress-bar">
                      <div
                        className="upload-progress-fill"
                        style={{ width: `${Math.min(100, Math.max(0, updateProgress.percent))}%` }}
                      />
                    </div>
                  </div>
                )}

                <button type="submit" className="btn-primary" disabled={isUpdating}>
                  {isUpdating ? "جاري التحديث..." : "Update Property"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* modal for Adding Property */}
      {/* {showAddPropertyModal && (
        <div className="modal" onClick={handleAddPropertyModalClick}>
          <div className="modal-content">
            <span className="close" onClick={closeAddPropertyModal}>
              &times;
            </span>
            <AddProperty />
          </div>
        </div>
      )} */}
      {showAddPropertyModal && (
        <div className="modal" onClick={handleAddPropertyModalClick}>
          <div className="modal-content">
            <span className="close" onClick={closeAddPropertyModal}>
              &times;
            </span>

            {/* ✅ body that scrolls */}
            <div className="modal-body">
              <AddProperty />
            </div>
          </div>
        </div>
      )}

      {/* SOLD modal */}
      {showSoldModal && (
        <div className="modal" onClick={(e) => e.target.className === "modal" && closeSoldModal()}>
          <div className="modal-content">
            <span className="close" onClick={closeSoldModal}>
              &times;
            </span>

            <form onSubmit={handleSoldSubmit} className="property-form">
              <h2>Set Sold Date</h2>

              <input
                type="date"
                name="sold_date"
                value={soldDate}
                onChange={(e) => setSoldDate(e.target.value)}
                required
              />

              <button type="submit" className="btn-primary">
                Save
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Availability modal */}
      {showAvailabilityModal && (
        <div
          className="modal"
          onClick={(e) => e.target.className === "modal" && setShowAvailabilityModal(false)}
        >
          <div className="modal-content">
            <span className="close" onClick={() => setShowAvailabilityModal(false)}>
              &times;
            </span>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAvailabilitySubmit();
              }}
            >
              <h2>Set Availability Date</h2>
              <input
                type="date"
                name="availability_date"
                placeholder="تاريخ التوفر"
                value={availabilityDate}
                onChange={(e) => setAvailabilityDate(e.target.value)}
                min={getTomorrowDate()}
                required
              />
              <button type="submit" className="btn-primary">
                Set Availability Date
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Description modal */}
      {showDescModal && (
        <div className="modal" onClick={(e) => e.target.className === "modal" && closeDescModal()}>
          <div className="modal-content">
            <span className="close" onClick={closeDescModal}>
              &times;
            </span>

            <div className="property-form">
              <h2>Full Description</h2>

              <div className="desc-full">{descText}</div>

              <button type="button" className="btn-primary" onClick={closeDescModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {showAddCityModal && (
      <div
        className="modal"
        onClick={(e) => e.target.className === "modal" && setShowAddCityModal(false)}
      >
        <div className="modal-content">
          <span className="close" onClick={() => setShowAddCityModal(false)}>
            &times;
          </span>

          <form onSubmit={handleAddCity} className="property-form">
            <h2>Add City</h2>

            <input
              type="text"
              name="name_ar"
              placeholder="اسم المدينة (بالعربية)"
              value={newCity.name_ar}
              onChange={handleCityChange}
              required
            />

            <input
              type="text"
              name="name_fr"
              placeholder="City name (French / Latin)"
              value={newCity.name_fr}
              onChange={handleCityChange}
              required
            />

            <button type="submit" className="btn-primary">
              Save City
            </button>

            {/* ✅ Small table inside same modal */}
            <div className="cities-mini-table-wrap">
              <h3 style={{ marginTop: 18 }}>Cities</h3>

              {citiesLoading ? (
                <p style={{ opacity: 0.8 }}>Loading...</p>
              ) : cities.length === 0 ? (
                <p style={{ opacity: 0.8 }}>No cities found</p>
              ) : (
                <div className="cities-mini-table-container">
                  <table className="cities-mini-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>AR</th>
                        <th>FR</th>
                        <th>Slug</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {cities.map((c) => (
                        <tr key={c.id}>
                          <td>{c.id}</td>
                          <td>{c.name_ar}</td>
                          <td>{c.name_fr}</td>
                          <td style={{ direction: "ltr" }}>{c.slug}</td>
                          <td>
                            <button
                              type="button"
                              className="delete-button"
                              onClick={() => handleDeleteCity(c.id)}
                              title="Delete city"
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    )}
    </div>
  );
}

export default PropertyPage;