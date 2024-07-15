
// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';
// import './AddProperty.css';

// function AddProperty() {
//   const navigate = useNavigate();
//   const [newProperty, setNewProperty] = useState({
//     type: 'rent', // Set default type to rent
//     title_ar: '',
//     description_ar: '',
//     price: '',
//     location: '',
//     area: '',
//     available: true, // Set default status to Available
//     availability_date: '', // Add availability date
//     bedrooms: '',
//     salon: '',
//     bathrooms: '',
//     floors: ''
//   });

//   const [imageFiles, setImageFiles] = useState([]);
//   const API_URL = process.env.REACT_APP_SERVER || 'https://alaqariyya.com/nodeapp';

//   const handleInputChange = (e) => {
//     const { name, value, type } = e.target;
//     setNewProperty(prevState => ({
//       ...prevState,
//       [name]: type === 'number' ? parseInt(value, 10) : value
//     }));
//   };

//   const handleFileChange = (e) => {
//     setImageFiles([...e.target.files]);
//   };

//   const handleAddProperty = async (e) => {
//     e.preventDefault();
//     if (newProperty.type === 'rent' && !newProperty.available && !newProperty.availability_date) {
//       toast.error('Please select an availability date for unavailable properties.');
//       return;
//     }

//     const formData = new FormData();
//     for (const key in newProperty) {
//       formData.append(key, newProperty[key]);
//     }
//     imageFiles.forEach(file => {
//       formData.append('images', file);
//     });

//     const token = localStorage.getItem('jwtToken'); // Retrieve the token from local storage

//     try {
//       console.log('Form Data:', newProperty); // Log the form data
//       await axios.post(`${API_URL}/properties`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           'Authorization': `Bearer ${token}` // Include the token in the Authorization header
//         }
//       });
//       toast.success('Property added successfully!', {
//         icon: "🏠",
//       });
//       setNewProperty({
//         type: 'rent', // Reset default type to rent
//         title_ar: '',
//         description_ar: '',
//         price: '',
//         location: '',
//         area: '',
//         available: true, // Reset default status to Available
//         availability_date: '', // Reset availability date
//         bedrooms: '',
//         salon: '',
//         bathrooms: '',
//         floors: ''
//       });
//       setImageFiles([]);
//     } catch (error) {
//       toast.error('Error adding property. Please try again.');
//       console.error('Error adding property:', error);
//     }
//   };

//   return (
//     <div className="add-property-container">
//       <ToastContainer />
//       <button className="go-backa" onClick={() => navigate(-1)}>
//         Go Back
//       </button>
//       <form onSubmit={handleAddProperty} className="property-formm">
//         <select name="type" value={newProperty.type} onChange={handleInputChange} required>
//           <option value="rent">Rent</option>
//           <option value="buy">Buy</option>
//           <option value="floorplots">FloorPlots</option>
//         </select>
//         <input type="text" name="title_ar" placeholder="Title (Arabic)" value={newProperty.title_ar} onChange={handleInputChange} required />
//         <textarea name="description_ar" placeholder="Description (Arabic)" value={newProperty.description_ar} onChange={handleInputChange} required />
//         <input type="number" name="price" placeholder="Price" value={newProperty.price} onChange={handleInputChange} required />
//         <input type="text" name="location" placeholder="Location" value={newProperty.location} onChange={handleInputChange} required />
//         <input type="number" name="area" placeholder="Area" value={newProperty.area} onChange={handleInputChange} required />
//         {newProperty.type !== 'floorplots' && (
//           <>
//             <input type="number" name="bedrooms" placeholder="Bedrooms" value={newProperty.bedrooms} onChange={handleInputChange} required />
//             <input type="number" name="salon" placeholder="Salon" value={newProperty.salon} onChange={handleInputChange} required />
//             <input type="number" name="bathrooms" placeholder="Bathrooms" value={newProperty.bathrooms} onChange={handleInputChange} required />
//             {newProperty.type === 'buy' && (
//               <input type="number" name="floors" placeholder="Number of Floors" value={newProperty.floors} onChange={handleInputChange} required />
//             )}
//           </>
//         )}
//         {newProperty.type === 'rent' && (
//           <>
//             <label style={{ display: 'none' }}>
//               Available:
//               <select name="available" value={newProperty.available} onChange={handleInputChange} required>
//                 <option value={true}>Yes</option>
//                 <option value={false}>No</option>
//               </select>
//             </label>
//             {!newProperty.available && (
//               <input
//                 type="date"
//                 name="availability_date"
//                 placeholder="Availability Date"
//                 value={newProperty.availability_date}
//                 onChange={handleInputChange}
//                 required
//               />
//             )}
//           </>
//         )}
//         <div className="file-input">
//           <label htmlFor="files">Upload Images</label>
//           <input type="file" id="files" name="images" onChange={handleFileChange} multiple required />
//           {imageFiles.length > 0 && <span className="file-name">{imageFiles.length} file(s) selected</span>}
//         </div>
//         <button type="submit" className="btn-primary">Add Property</button>
//       </form>
//     </div>
//   );
// }

// export default AddProperty;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';
// import './AddProperty.css';

// function AddProperty() {
//   const navigate = useNavigate();
//   const [newProperty, setNewProperty] = useState({
//     type: 'rent',
//     title_ar: '',
//     description_ar: '',
//     price: '',
//     location: '',
//     area: '',
//     available: true,
//     availability_date: '',
//     bedrooms: '',
//     salon: '',
//     bathrooms: '',
//     floors: ''
//   });

//   const [imageFiles, setImageFiles] = useState([]);
//   const API_URL = process.env.REACT_APP_SERVER || 'https://alaqariyya.com/nodeapp';

//   const handleInputChange = (e) => {
//     const { name, value, type } = e.target;
//     setNewProperty(prevState => ({
//       ...prevState,
//       [name]: type === 'number' ? parseInt(value, 10) : value
//     }));
//   };

//   const handleFileChange = (e) => {
//     setImageFiles([...e.target.files]);
//   };

//   const handleAddProperty = async (e) => {
//     e.preventDefault();
//     if (newProperty.type === 'rent' && !newProperty.available && !newProperty.availability_date) {
//       toast.error('Please select an availability date for unavailable properties.');
//       return;
//     }

//     const formData = new FormData();
//     for (const key in newProperty) {
//       formData.append(key, newProperty[key]);
//     }
//     imageFiles.forEach(file => {
//       formData.append('images', file);
//     });

//     const token = localStorage.getItem('jwtToken');

//     try {
//       console.log('Form Data:', newProperty);
//       await axios.post(`${API_URL}/properties`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           'Authorization': `Bearer ${token}`
//         }
//       });
//       toast.success('Property added successfully!', {
//         icon: "🏠",
//       });
//       setNewProperty({
//         type: 'rent',
//         title_ar: '',
//         description_ar: '',
//         price: '',
//         location: '',
//         area: '',
//         available: true,
//         availability_date: '',
//         bedrooms: '',
//         salon: '',
//         bathrooms: '',
//         floors: ''
//       });
//       setImageFiles([]);
//     } catch (error) {
//       toast.error('Error adding property. Please try again.');
//       console.error('Error adding property:', error);
//     }
//   };

//   return (
//     <div className="add-property-container">
//       <ToastContainer />
//       <button className="go-backa" onClick={() => navigate(-1)}>
//         Go Back
//       </button>
//       <form onSubmit={handleAddProperty} className="property-formm">
//         <select name="type" value={newProperty.type} onChange={handleInputChange} required>
//           <option value="rent">Rent</option>
//           <option value="buy">Buy</option>
//           <option value="floorplots">FloorPlots</option>
//         </select>
//         <input type="text" name="title_ar" placeholder="Title (Arabic)" value={newProperty.title_ar} onChange={handleInputChange} required />
//         <textarea name="description_ar" placeholder="Description (Arabic)" value={newProperty.description_ar} onChange={handleInputChange} required />
//         <input type="number" name="price" placeholder="Price" value={newProperty.price} onChange={handleInputChange} required />
//         <input type="text" name="location" placeholder="Location" value={newProperty.location} onChange={handleInputChange} required />
//         <input type="number" name="area" placeholder="Area" value={newProperty.area} onChange={handleInputChange} required />
//         {newProperty.type !== 'floorplots' && (
//           <>
//             <input type="number" name="bedrooms" placeholder="Bedrooms" value={newProperty.bedrooms} onChange={handleInputChange} required />
//             <input type="number" name="salon" placeholder="Salon" value={newProperty.salon} onChange={handleInputChange} required />
//             <input type="number" name="bathrooms" placeholder="Bathrooms" value={newProperty.bathrooms} onChange={handleInputChange} required />
//             {newProperty.type === 'buy' && (
//               <input type="number" name="floors" placeholder="Number of Floors" value={newProperty.floors} onChange={handleInputChange} required />
//             )}
//           </>
//         )}
//         {newProperty.type === 'rent' && (
//           <>
//             <label style={{ display: 'none' }}>
//               Available:
//               <select name="available" value={newProperty.available} onChange={handleInputChange} required>
//                 <option value={true}>Yes</option>
//                 <option value={false}>No</option>
//               </select>
//             </label>
//             {!newProperty.available && (
//               <input
//                 type="date"
//                 name="availability_date"
//                 placeholder="Availability Date"
//                 value={newProperty.availability_date}
//                 onChange={handleInputChange}
//                 required
//               />
//             )}
//           </>
//         )}
//         <div className="file-input">
//           <label htmlFor="files">Upload Images</label>
//           <input type="file" id="files" name="images" onChange={handleFileChange} multiple required />
//           {imageFiles.length > 0 && <span className="file-name">{imageFiles.length} file(s) selected</span>}
//         </div>
//         <button type="submit" className="btn-primary">Add Property</button>
//       </form>
//     </div>
//   );
// }

// export default AddProperty;
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
    location: '',
    area: '',
    available: true,
    availability_date: '',
    bedrooms: '',
    salon: '',
    bathrooms: '',
    floors: ''
  });

  const [imageFiles, setImageFiles] = useState([]);
  const [errors, setErrors] = useState({});
  const API_URL = process.env.REACT_APP_SERVER || 'https://alaqariyya.com/nodeapp';

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setNewProperty(prevState => ({
      ...prevState,
      [name]: type === 'number' ? parseInt(value, 10) : value
    }));
  };

  const handleFileChange = (e) => {
    setImageFiles([...e.target.files]);
    setErrors(prevErrors => ({ ...prevErrors, images: '' })); // Clear image error when files are selected
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
    imageFiles.forEach(file => {
      formData.append('images', file);
    });

    const token = localStorage.getItem('jwtToken');

    try {
      console.log('Form Data:', newProperty);
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
        location: '',
        area: '',
        available: true,
        availability_date: '',
        bedrooms: '',
        salon: '',
        bathrooms: '',
        floors: ''
      });
      setImageFiles([]);
      setErrors({});
    } catch (error) {
      toast.error('Error adding property. Please try again.');
      console.error('Error adding property:', error);
    }
  };

  const validateForm = () => {
    const errors = {};
    const requiredFields = ['title_ar', 'description_ar', 'price', 'location', 'area'];
    if (newProperty.type !== 'floorplots') {
      requiredFields.push('bedrooms', 'salon', 'bathrooms');
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
        <input type="text" name="location" placeholder="Location" value={newProperty.location} onChange={handleInputChange} required />
        {errors.location && <p className="error-message">{errors.location}</p>}
        <input type="number" name="area" placeholder="Area" value={newProperty.area} onChange={handleInputChange} required />
        {errors.area && <p className="error-message">{errors.area}</p>}
        {newProperty.type !== 'floorplots' && (
          <>
            <input type="number" name="bedrooms" placeholder="Bedrooms" value={newProperty.bedrooms} onChange={handleInputChange} required />
            {errors.bedrooms && <p className="error-message">{errors.bedrooms}</p>}
            <input type="number" name="salon" placeholder="Salon" value={newProperty.salon} onChange={handleInputChange} required />
            {errors.salon && <p className="error-message">{errors.salon}</p>}
            <input type="number" name="bathrooms" placeholder="Bathrooms" value={newProperty.bathrooms} onChange={handleInputChange} required />
            {errors.bathrooms && <p className="error-message">{errors.bathrooms}</p>}
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
          {imageFiles.length > 0 && <span className="file-name">{imageFiles.length} file(s) selected</span>}
        </div>
        {errors.images && <div className="error-alert">{errors.images}</div>}
        <button type="submit" className="btn-primary">Add Property</button>
      </form>
    </div>
  );
}

export default AddProperty;
