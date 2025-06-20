import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddProperty.css';

function AddProperty() {
  const [newProperty, setNewProperty] = useState({
    type: 'rent',
    title_ar: '',
    description_ar: '',
    price: '',
    location_ar: '',
    exact_address: '',
    area: '',
    available: true,
    availability_date: '',
    bedrooms: '',
    salon: '',
    bathrooms: '',
    kitchen: '',
    floors: ''
  });

  const [imageFiles, setImageFiles] = useState([]);
  const [errors, setErrors] = useState({});
  const API_URL = process.env.REACT_APP_SERVER;

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    if (name === 'description_ar') {
      const allowArabicMarkdown = value.replace(/[^\u0600-\u06FF0-9\s:;.,!?\-#\*\(\)\[\]_`]/g, '');
      setNewProperty((prevState) => ({
        ...prevState,
        [name]: allowArabicMarkdown,
      }));
    }
    // but NOT for description_ar (so we can store Markdown syntax).
    else if (name === 'title_ar' || name === 'location_ar') {
      const arabicOnly = value.replace(/[^\u0600-\u06FF0-9\s:;.,!]/g, '');
      setNewProperty((prevState) => ({
        ...prevState,
        [name]: type === 'number' ? parseInt(arabicOnly, 10) : arabicOnly
      }));
    } else {
      // All other fields remain the same
      setNewProperty((prevState) => ({
        ...prevState,
        [name]: type === 'number' ? parseInt(value, 10) : value
      }));
    }
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const updatedFiles = files.map((file, index) => ({
      file,
      isMain: index === 0,
      displayOrder: index
    }));
    setImageFiles(updatedFiles);
    setErrors((prevErrors) => ({ ...prevErrors, images: '' }));
  };

  const handleAddProperty = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (imageFiles.length === 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        images: 'Please upload at least one image.'
      }));
      return;
    }

    const formData = new FormData();
    for (const key in newProperty) {
      if (newProperty[key] !== '') {
        formData.append(key, newProperty[key]);
      }
    }
    imageFiles.forEach((img, index) => {
      formData.append('images', img.file);
      formData.append('isMain', img.isMain);
      formData.append('displayOrder', img.displayOrder);
    });

    const token = localStorage.getItem('jwtToken');

    try {
      const response = await axios.post(`${API_URL}/properties`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      });

      if (response.status === 200) {
        toast.success('Property added successfully!', {
          icon: '🏠'
        });
        setNewProperty({
          type: 'rent',
          title_ar: '',
          description_ar: '',
          price: '',
          location_ar: '',
          exact_address: '0', // Reset this field
          area: '',
          available: true,
          availability_date: '',
          bedrooms: '',
          salon: '',
          bathrooms: '',
          kitchen: '',
          floors: ''
        });
        setImageFiles([]);
        setErrors({});
      } else {
        throw new Error('Unexpected response status');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(`Error adding property: ${error.response.data}`);
      } else if (error.request) {
        toast.error('No response from server. Please try again later.');
      } else {
        toast.error(`Error adding property: ${error.message}`);
      }
    }
  };

  const validateForm = () => {
    const errors = {};
    // Required fields (if your business logic needs these)
    const requiredFields = ['title_ar', 'description_ar', 'price', 'location_ar', 'area'];
    if (
      newProperty.type !== 'floorplots' &&
      newProperty.type !== 'Commercialgarages' &&
      newProperty.type !== 'requests' &&
      newProperty.type !== 'apartmentsReq' &&
      newProperty.type !== 'floorplotsReq' &&
      newProperty.type !== 'CommercialgaragesReq' &&
      newProperty.type !== 'CommercialgaragesRent' 
      
    ) {
      requiredFields.push('bedrooms', 'bathrooms', 'kitchen');
      
      if (newProperty.type === 'buy' ) {
        requiredFields.push('floors');
      }
    }
    if (newProperty.type === 'rent' && !newProperty.available && !newProperty.availability_date) {
      requiredFields.push('availability_date');
    }

    for (let field of requiredFields) {
      if (!newProperty[field]) {
        errors[field] = `Please fill out the ${field.replace('_ar', '').replace('_', ' ')} field.`;
      }
    }

    return errors;
  };

  return (
  <div className="add-property-container">
    <form onSubmit={handleAddProperty} className="property-formm">
      <ToastContainer className="toast-inside-modal" />

      <select
        name="type"
        value={newProperty.type}
        onChange={handleInputChange}
        required
      >
        <option value="rent">إيجار مفروش</option>
        <option value="regularRent">إيجار عادي</option>
        <option value="CommercialgaragesRent">محلات تجارية للإيجار</option>
        <option value="buy">منازل للبيع</option>
        <option value="apartments">شقق للبيع</option>
        <option value="floorplots">قطع أرضية للبيع</option>
        <option value="Commercialgarages">محلات تجارية للبيع</option>
        <option value="requests">طلبات منازل</option>
        <option value="apartmentsReq">طلبات شقق</option>
        <option value="floorplotsReq">طلبات قطع أرضية</option>
        <option value="CommercialgaragesReq">طلبات محلات تجارية</option>
      </select>
      {errors.type && <p className="error-message">{errors.type}</p>}

      <input
        type="text"
        name="title_ar"
        placeholder="العنوان (بالعربية)"
        value={newProperty.title_ar}
        onChange={handleInputChange}
        required
      />
      {errors.title_ar && <p className="error-message">{errors.title_ar}</p>}

      {/* Description as Markdown */}
      <textarea
        style={{ resize: 'none' }}
        name="description_ar"
        placeholder="الوصف (يسمح باستخدام Markdown)"
        value={newProperty.description_ar}
        onChange={handleInputChange}
        required
      />
      {errors.description_ar && <p className="error-message">{errors.description_ar}</p>}

      <input
        type="number"
        name="price"
        placeholder="الثمن"
        value={newProperty.price}
        onChange={handleInputChange}
        required
      />
      {errors.price && <p className="error-message">{errors.price}</p>}

      <input
        type="text"
        name="location_ar"
        placeholder="الموقع (بالعربية)"
        value={newProperty.location_ar}
        onChange={handleInputChange}
        required
      />
      {errors.location_ar && <p className="error-message">{errors.location_ar}</p>}

      {/* Exact Address Field */}
      <input
        type="text"
        name="exact_address"
        placeholder="العنوان الدقيق (e.g., 7379+44W, Beni Ansar)"
        value={newProperty.exact_address}
        onChange={handleInputChange}
      />

      <input
        type="number"
        name="area"
        placeholder="المساحة"
        value={newProperty.area}
        onChange={handleInputChange}
        required
      />
      {errors.area && <p className="error-message">{errors.area}</p>}

      {/* Extra fields if not certain property types */}
      {newProperty.type !== 'floorplots' &&
        newProperty.type !== 'Commercialgarages' &&
        newProperty.type !== 'CommercialgaragesRent' &&
        newProperty.type !== 'requests' &&
        newProperty.type !== 'apartmentsReq' &&
        newProperty.type !== 'floorplotsReq' &&
        newProperty.type !== 'CommercialgaragesReq' && (
          <>
            <input
              type="number"
              name="bedrooms"
              placeholder="عدد غرف النوم"
              value={newProperty.bedrooms}
              onChange={handleInputChange}
              required
            />
            {errors.bedrooms && <p className="error-message">{errors.bedrooms}</p>}

            <input
              type="number"
              name="salon"
              placeholder="عددالصالونات"
              value={newProperty.salon}
              onChange={handleInputChange}
            />

            <input
              type="number"
              name="bathrooms"
              placeholder="عدد الحمامات"
              value={newProperty.bathrooms}
              onChange={handleInputChange}
              required
            />
            {errors.bathrooms && <p className="error-message">{errors.bathrooms}</p>}

            <input
              type="number"
              name="kitchen"
              placeholder="عددالمطابخ"
              value={newProperty.kitchen}
              onChange={handleInputChange}
              required
            />
            {errors.kitchen && <p className="error-message">{errors.kitchen}</p>}

            {(newProperty.type === 'buy' ||
              newProperty.type === 'apartments' ||
              newProperty.type === 'regularRent') && (
              <>
                <input
                  type="number"
                  name="floors"
                  placeholder="عدد الطوابق"
                  value={newProperty.floors}
                  onChange={handleInputChange}
                  required
                />
                {errors.floors && <p className="error-message">{errors.floors}</p>}
              </>
            )}
          </>
        )}

      {/* For rent type (availability fields) */}
      {newProperty.type === 'rent' && (
        <>
          <label style={{ display: 'none' }}>
            متوفر:
            <select
              name="available"
              value={newProperty.available}
              onChange={handleInputChange}
              required
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
              />
              {errors.availability_date && (
                <p className="error-message">{errors.availability_date}</p>
              )}
            </>
          )}
        </>
      )}

      {/* File upload */}
      <div className="file-input">
        <label htmlFor="files">تحميل الصور</label>
        <input type="file" id="files" name="images" onChange={handleFileChange} multiple />
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
                  onChange={() =>
                    setImageFiles((prevFiles) =>
                      prevFiles.map((img, idx) => ({
                        ...img,
                        isMain: idx === index
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
                  onChange={(e) =>
                    setImageFiles((prevFiles) =>
                      prevFiles.map((img, idx) => ({
                        ...img,
                        displayOrder: idx === index ? parseInt(e.target.value, 10) : img.displayOrder
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

      <button type="submit" className="btn-primary">
        إضافة عقار
      </button>
    </form>
  </div>
);

}

export default AddProperty;
