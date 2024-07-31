
import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import './AddProperty.css';

function AddProperty() {
  const navigate = useNavigate();
  const [newProperty, setNewProperty] = useState({
    type: 'rent',
    title_ar: '',
    description_ar: '',
    price: '',
    location_ar: '',
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
    setNewProperty(prevState => ({
      ...prevState,
      [name]: type === 'number' ? parseInt(value, 10) : value
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const updatedFiles = files.map((file, index) => ({
      file,
      isMain: index === 0, // Default the first image as main
      displayOrder: index
    }));
    setImageFiles(updatedFiles);
    setErrors(prevErrors => ({ ...prevErrors, images: '' }));
  };

  const handleAddProperty = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (imageFiles.length === 0) {
      setErrors(prevErrors => ({ ...prevErrors, images: 'Please upload at least one image.' }));
      return;
    }

    const formData = new FormData();
    for (const key in newProperty) {
      formData.append(key, newProperty[key]);
    }
    imageFiles.forEach((img, index) => {
      formData.append('images', img.file);
      formData.append('isMain', img.isMain);
      formData.append('displayOrder', img.displayOrder);
    });

    const token = localStorage.getItem('jwtToken');

    try {
      await axios.post(`${API_URL}/properties`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
      });
      toast.success('Property added successfully!', {
        icon: "🏠",
      });
      setNewProperty({
        type: 'rent',
        title_ar: '',
        description_ar: '',
        price: '',
        location_ar: '',
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
    } catch (error) {
      toast.error('Error adding property. Please try again.');
    }
  };

  const validateForm = () => {
    const errors = {};
    const requiredFields = ['title_ar', 'description_ar', 'price', 'location_ar', 'area'];
    if (newProperty.type !== 'floorplots') {
      requiredFields.push('bedrooms', 'bathrooms', 'kitchen');
      if (newProperty.type === 'buy') {
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
      <ToastContainer />
      <button className="go-backa" onClick={() => navigate(-1)}>
        Go Back
      </button>
      <form onSubmit={handleAddProperty} className="property-formm">
        <select name="type" value={newProperty.type} onChange={handleInputChange} required>
          <option value="rent">Rent</option>
          <option value="buy">Buy</option>
          <option value="floorplots">FloorPlots</option>
        </select>
        {errors.type && <p className="error-message">{errors.type}</p>}
        <input type="text" name="title_ar" placeholder="Title (Arabic)" value={newProperty.title_ar} onChange={handleInputChange} required />
        {errors.title_ar && <p className="error-message">{errors.title_ar}</p>}
        <textarea name="description_ar" placeholder="Description (Arabic)" value={newProperty.description_ar} onChange={handleInputChange} required />
        {errors.description_ar && <p className="error-message">{errors.description_ar}</p>}
        <input type="number" name="price" placeholder="Price" value={newProperty.price} onChange={handleInputChange} required />
        {errors.price && <p className="error-message">{errors.price}</p>}
        <input type="text" name="location_ar" placeholder="Location (Arabic)" value={newProperty.location_ar} onChange={handleInputChange} required />
        {errors.location_ar && <p className="error-message">{errors.location_ar}</p>}
        <input type="number" name="area" placeholder="Area" value={newProperty.area} onChange={handleInputChange} required />
        {errors.area && <p className="error-message">{errors.area}</p>}
        {newProperty.type !== 'floorplots' && (
          <>
            <input type="number" name="bedrooms" placeholder="Bedrooms" value={newProperty.bedrooms} onChange={handleInputChange} required />
            {errors.bedrooms && <p className="error-message">{errors.bedrooms}</p>}
            <input type="number" name="salon" placeholder="Salon" value={newProperty.salon} onChange={handleInputChange} />
            
            <input type="number" name="bathrooms" placeholder="Bathrooms" value={newProperty.bathrooms} onChange={handleInputChange} required />
            {errors.bathrooms && <p className="error-message">{errors.bathrooms}</p>}
            <input type="number" name="kitchen" placeholder="Kitchen" value={newProperty.kitchen} onChange={handleInputChange} required />
            {errors.kitchen && <p className="error-message">{errors.kitchen}</p>}
            {newProperty.type === 'buy' && (
              <>
                <input type="number" name="floors" placeholder="Number of Floors" value={newProperty.floors} onChange={handleInputChange} required />
                {errors.floors && <p className="error-message">{errors.floors}</p>}
              </>
            )}
          </>
        )}
        {newProperty.type === 'rent' && (
          <>
            <label style={{ display: 'none' }}>
              Available:
              <select name="available" value={newProperty.available} onChange={handleInputChange} required>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </label>
            {!newProperty.available && (
              <>
                <input
                  type="date"
                  name="availability_date"
                  placeholder="Availability Date"
                  value={newProperty.availability_date}
                  onChange={handleInputChange}
                  required
                />
                {errors.availability_date && <p className="error-message">{errors.availability_date}</p>}
              </>
            )}
          </>
        )}
        <div className="file-input">
          <label htmlFor="files">Upload Images</label>
          <input type="file" id="files" name="images" onChange={handleFileChange} multiple />
          {imageFiles.length > 0 && imageFiles.map((imageFile, index) => (
            <div key={index}>
              <span className="file-name">{imageFile.file.name}</span>
              <label>
                Main Image:
                <input
                  type="radio"
                  name="mainImage"
                  checked={imageFile.isMain}
                  onChange={() => setImageFiles(prevFiles => prevFiles.map((img, idx) => ({
                    ...img,
                    isMain: idx === index
                  })))}
                />
              </label>
              <label>
                Display Order:
                <input
                  type="number"
                  value={imageFile.displayOrder}
                  onChange={(e) => setImageFiles(prevFiles => prevFiles.map((img, idx) => ({
                    ...img,
                    displayOrder: idx === index ? parseInt(e.target.value, 10) : img.displayOrder
                  })))}
                />
              </label>
            </div>
          ))}
          {imageFiles.length > 0 && <span className="file-name">{imageFiles.length} file(s) selected</span>}
        </div>
        {errors.images && <div className="error-alert">{errors.images}</div>}
        <button type="submit" className="btn-primary">Add Property</button>
      </form>
    </div>
  );
}

export default AddProperty;
