// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrash, faArrowLeft, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
// import { format, addDays } from 'date-fns';
// import './UpdateProperty.css';

// function UpdateProperty() {
//   const navigate = useNavigate();
//   const [properties, setProperties] = useState([]);
//   const [selectedProperty, setSelectedProperty] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [files, setFiles] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [showAvailabilityModal, setShowAvailabilityModal] = useState(false);
//   const [availabilityProperty, setAvailabilityProperty] = useState(null);
//   const [availabilityDate, setAvailabilityDate] = useState('');
//   const API_URL = process.env.REACT_APP_SERVER;

//   useEffect(() => {
//     fetchProperties(currentPage);
//   }, [currentPage]);

//   const fetchProperties = async (page) => {
//     try {
//       const response = await axios.get(`${API_URL}/properties?page=${page}`);
//       setProperties(response.data.properties || []);
//       setTotalPages(response.data.totalPages);
//     } catch (error) {
//       console.error('Error fetching properties:', error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value, type } = e.target;
//     setSelectedProperty(prevState => ({
//       ...prevState,
//       [name]: type === 'number' ? parseInt(value, 10) : value
//     }));
//   };

//   const handleFileChange = (e) => {
//     setFiles(Array.from(e.target.files));
//   };

//   const handleUpdateProperty = async (e) => {
//     e.preventDefault();
//     if (selectedProperty.type === 'rent' && !selectedProperty.available && !selectedProperty.availability_date) {
//       toast.error('Please select an availability date for unavailable properties.');
//       return;
//     }

//     const formData = new FormData();
//     Object.keys(selectedProperty).forEach(key => {
//       formData.append(key, selectedProperty[key]);
//     });
//     if (files.length) {
//       files.forEach(file => {
//         formData.append('images', file);
//       });
//     } else if (selectedProperty.images) {
//       selectedProperty.images.forEach(image => {
//         formData.append('images', image);
//       });
//     }

//     try {
//       await axios.put(`${API_URL}/properties/${selectedProperty.property_id}`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       toast.success('Property updated successfully!', {
//         icon: "🏠",
//       });
//       setSelectedProperty(null);
//       setFiles([]);
//       setShowModal(false);
//       fetchProperties(currentPage);
//     } catch (error) {
//       toast.error('Error updating property. Please try again.');
//       console.error('Error updating property:', error);
//     }
//   };

//   const handleDeleteProperty = async (property_id) => {
//     try {
//       await axios.delete(`${API_URL}/properties/${property_id}`);
//       toast.success('Property deleted successfully!', {
//         icon: "🏠",
//       });
//       fetchProperties(currentPage);
//     } catch (error) {
//       toast.error('Error deleting property. Please try again.');
//       console.error('Error deleting property:', error);
//     }
//   };

//   const toggleAvailability = async (property_id, currentStatus) => {
//     if (currentStatus) {
//       // Changing from available to unavailable
//       setAvailabilityProperty(property_id);
//       setShowAvailabilityModal(true);
//     } else {
//       // Changing from unavailable to available
//       try {
//         await axios.put(`${API_URL}/properties/${property_id}/availability`, { available: true, availability_date: null });
//         toast.success('Property availability updated successfully!', {
//           icon: "🏠",
//         });
//         fetchProperties(currentPage);
//       } catch (error) {
//         toast.error('Error updating property availability. Please try again.');
//         console.error('Error updating property availability:', error);
//       }
//     }
//   };

//   const handleAvailabilitySubmit = async () => {
//     if (!availabilityDate) {
//       toast.error('Please select an availability date.');
//       return;
//     }

//     try {
//       await axios.put(`${API_URL}/properties/${availabilityProperty}/availability`, { available: false, availability_date: availabilityDate });
//       toast.success('Property availability updated successfully!', {
//         icon: "🏠",
//       });
//       fetchProperties(currentPage);
//       setShowAvailabilityModal(false);
//       setAvailabilityProperty(null);
//       setAvailabilityDate('');
//     } catch (error) {
//       toast.error('Error updating property availability. Please try again.');
//       console.error('Error updating property availability:', error);
//     }
//   };

//   const openModal = (property) => {
//     setSelectedProperty({
//       ...property,
//       images: property.images || [] // Ensure images is always an array
//     });
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setSelectedProperty(null);
//     setFiles([]);
//     setShowModal(false);
//   };

//   const handleModalClick = (e) => {
//     if (e.target.className === 'modal') {
//       closeModal();
//     }
//   };

//   const formatDate = (dateString) => {
//     try {
//       return format(new Date(dateString), 'yyyy-MM-dd');
//     } catch {
//       return dateString;
//     }
//   };

//   const getTomorrowDate = () => {
//     const tomorrow = addDays(new Date(), 1);
//     return format(tomorrow, 'yyyy-MM-dd');
//   };

//   return (
//     <div className="update-property-container">
//       <ToastContainer />
//       <h1>Update Properties</h1>
//       <button className="go-back" onClick={() => navigate(-1)}>
//         <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '5px' }} /> Go Back
//       </button>
//       <div className="properties-table-container">
//         <table className="properties-table">
//           <thead>
//             <tr>
//               <th>Type</th>
//               <th>Title</th>
//               <th>Description</th>
//               <th>Price</th>
//               <th>Location</th>
//               <th>Bedrooms</th>
//               <th>Salon</th>
//               <th>Bathrooms</th>
//               <th>Area</th>
//               <th>Image</th>
//               <th>Available</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {properties.length > 0 ? (
//               properties.map((property) => (
//                 <tr key={property.property_id}>
//                   <td>{property.type}</td>
//                   <td>{property.title}</td>
//                   <td>{property.description}</td>
//                   <td>{property.price}</td>
//                   <td>{property.location}</td>
//                   <td>{property.bedrooms}</td>
//                   <td>{property.salon}</td>
//                   <td>{property.bathrooms}</td>
//                   <td>{property.area}</td>
//                   <td>
//                     <img src={`${API_URL}/uploads/${property.image_url}`} alt={property.title} className="property-image" />
//                   </td>
//                   <td>
//                     {property.type === 'rent' && (
//                       <div>
//                         <label className="toggle-switch">
//                           <input 
//                             type="checkbox" 
//                             checked={property.available} 
//                             onChange={() => toggleAvailability(property.property_id, property.available)} 
//                           />
//                           <span className="slider"></span>
//                         </label>
//                         {!property.available && (
//                           <p><strong>Availability Date:</strong> {formatDate(property.availability_date)}</p>
//                         )}
//                       </div>
//                     )}
//                   </td>
//                   <td className="actions">
//                     <button onClick={() => openModal(property)} className="update-button">
//                       <FontAwesomeIcon icon={faEdit} />
//                     </button>
//                     <button onClick={() => handleDeleteProperty(property.property_id)} className="delete-button">
//                       <FontAwesomeIcon icon={faTrash} />
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="12">No properties found</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//         <div className="pagination">
//           <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
//           <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
//         </div>
//       </div>

//       {showModal && (
//         <div className="modal" onClick={handleModalClick}>
//           <div className="modal-content">
//             <span className="close" onClick={closeModal}>&times;</span>
//             <form onSubmit={handleUpdateProperty} className="property-form">
//               <h2>Update Property</h2>
//               <img src={`${API_URL}/uploads/${selectedProperty.image_url}`} alt={selectedProperty.title} className="property-image-large" />
//               <div className="select-container">
//                 <select name="type" value={selectedProperty.type} onChange={handleInputChange} required>
//                   <option value="rent">Rent</option>
//                   <option value="buy">Buy</option>
//                   <option value="floorplots">FloorPlots</option>
//                 </select>
//               </div>
//               <input type="text" name="title_ar" placeholder="Title (Arabic)" value={selectedProperty.title_ar} onChange={handleInputChange} required />
//               <textarea name="description_ar" placeholder="Description (Arabic)" value={selectedProperty.description_ar} onChange={handleInputChange} required />
//               <input type="number" name="price" placeholder="Price" value={selectedProperty.price} onChange={handleInputChange} required />
//               <input type="text" name="location" placeholder="Location" value={selectedProperty.location} onChange={handleInputChange} required />
//               <input type="number" name="area" placeholder="Area" value={selectedProperty.area} onChange={handleInputChange} required />
//               {selectedProperty.type !== 'floorplots' && (
//                 <>
//                   <input type="number" name="bedrooms" placeholder="Bedrooms" value={selectedProperty.bedrooms} onChange={handleInputChange} required />
//                   <input type="number" name="salon" placeholder="Salon" value={selectedProperty.salon} onChange={handleInputChange} required />
//                   <input type="number" name="bathrooms" placeholder="Bathrooms" value={selectedProperty.bathrooms} onChange={handleInputChange} required />
//                 </>
//               )}
//               {selectedProperty.type === 'rent' && (
//                 <input
//                   type="date"
//                   name="availability_date"
//                   placeholder="Availability Date"
//                   value={selectedProperty.availability_date ? formatDate(selectedProperty.availability_date) : ''}
//                   onChange={handleInputChange}
//                   min={getTomorrowDate()}
//                   required={!selectedProperty.available}
//                 />
//               )}
//               <input type="file" name="images" multiple onChange={handleFileChange} />
//               <button type="submit" className="btn-primary">Update Property</button>
//             </form>
//           </div>
//         </div>
//       )}

//       {showAvailabilityModal && (
//         <div className="modal" onClick={(e) => e.target.className === 'modal' && setShowAvailabilityModal(false)}>
//           <div className="modal-content">
//             <span className="close" onClick={() => setShowAvailabilityModal(false)}>&times;</span>
//             <form onSubmit={(e) => { e.preventDefault(); handleAvailabilitySubmit(); }}>
//               <h2>Set Availability Date</h2>
//               <input
//                 type="date"
//                 name="availability_date"
//                 placeholder="Availability Date"
//                 value={availabilityDate}
//                 onChange={(e) => setAvailabilityDate(e.target.value)}
//                 min={getTomorrowDate()}
//                 required
//               />
//               <button type="submit" className="btn-primary">Set Availability Date</button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default UpdateProperty;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faArrowLeft, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { format, addDays } from 'date-fns';
import './UpdateProperty.css';

function UpdateProperty() {
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [files, setFiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showAvailabilityModal, setShowAvailabilityModal] = useState(false);
  const [availabilityProperty, setAvailabilityProperty] = useState(null);
  const [availabilityDate, setAvailabilityDate] = useState('');
  const API_URL = process.env.REACT_APP_SERVER;

  useEffect(() => {
    fetchProperties(currentPage);
  }, [currentPage]);

  const fetchProperties = async (page) => {
    try {
      const response = await axios.get(`${API_URL}/properties?page=${page}`);
      setProperties(response.data.properties || []);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setSelectedProperty(prevState => ({
      ...prevState,
      [name]: type === 'number' ? parseInt(value, 10) : value
    }));
  };

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleUpdateProperty = async (e) => {
    e.preventDefault();
    if (selectedProperty.type === 'rent' && !selectedProperty.available && !selectedProperty.availability_date) {
      toast.error('Please select an availability date for unavailable properties.');
      return;
    }

    const formData = new FormData();
    Object.keys(selectedProperty).forEach(key => {
      formData.append(key, selectedProperty[key]);
    });
    if (files.length) {
      files.forEach(file => {
        formData.append('images', file);
      });
    } else if (selectedProperty.images) {
      selectedProperty.images.forEach(image => {
        formData.append('images', image);
      });
    }

    try {
      await axios.put(`${API_URL}/properties/${selectedProperty.property_id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      toast.success('Property updated successfully!', {
        icon: "🏠",
      });
      setSelectedProperty(null);
      setFiles([]);
      setShowModal(false);
      fetchProperties(currentPage);
    } catch (error) {
      toast.error('Error updating property. Please try again.');
      console.error('Error updating property:', error);
    }
  };

  const handleDeleteProperty = async (property_id) => {
    try {
      await axios.delete(`${API_URL}/properties/${property_id}`);
      toast.success('Property deleted successfully!', {
        icon: "🏠",
      });
      fetchProperties(currentPage);
    } catch (error) {
      toast.error('Error deleting property. Please try again.');
      console.error('Error deleting property:', error);
    }
  };

  const toggleAvailability = async (property_id, currentStatus) => {
    if (currentStatus) {
      // Changing from available to unavailable
      setAvailabilityProperty(property_id);
      setShowAvailabilityModal(true);
    } else {
      // Changing from unavailable to available
      try {
        await axios.put(`${API_URL}/properties/${property_id}/availability`, { available: true, availability_date: null });
        toast.success('Property availability updated successfully!', {
          icon: "🏠",
        });
        fetchProperties(currentPage);
      } catch (error) {
        toast.error('Error updating property availability. Please try again.');
        console.error('Error updating property availability:', error);
      }
    }
  };

  const handleAvailabilitySubmit = async () => {
    if (!availabilityDate) {
      toast.error('Please select an availability date.');
      return;
    }

    try {
      await axios.put(`${API_URL}/properties/${availabilityProperty}/availability`, { available: false, availability_date: availabilityDate });
      toast.success('Property availability updated successfully!', {
        icon: "🏠",
      });
      fetchProperties(currentPage);
      setShowAvailabilityModal(false);
      setAvailabilityProperty(null);
      setAvailabilityDate('');
    } catch (error) {
      toast.error('Error updating property availability. Please try again.');
      console.error('Error updating property availability:', error);
    }
  };

  const openModal = (property) => {
    setSelectedProperty({
      ...property,
      images: property.images || [] // Ensure images is always an array
    });
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedProperty(null);
    setFiles([]);
    setShowModal(false);
  };

  const handleModalClick = (e) => {
    if (e.target.className === 'modal') {
      closeModal();
    }
  };

  const formatDate = (dateString) => {
    try {
      return format(new Date(dateString), 'yyyy-MM-dd');
    } catch {
      return dateString;
    }
  };

  const getTomorrowDate = () => {
    const tomorrow = addDays(new Date(), 1);
    return format(tomorrow, 'yyyy-MM-dd');
  };

  return (
    <div className="update-property-container">
      <ToastContainer />
      <h1>Update Properties</h1>
      <button className="go-back" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '5px' }} /> Go Back
      </button>
      <div className="properties-table-container">
        <table className="properties-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Location</th>
              <th>Bedrooms</th>
              <th>Salon</th>
              <th>Bathrooms</th>
              <th>Area</th>
              <th>Image</th>
              <th>Available</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {properties.length > 0 ? (
              properties.map((property) => (
                <tr key={property.property_id}>
                  <td>{property.type}</td>
                  <td>{property.title}</td>
                  <td>{property.description}</td>
                  <td>{property.price}</td>
                  <td>{property.location}</td>
                  <td>{property.bedrooms}</td>
                  <td>{property.salon}</td>
                  <td>{property.bathrooms}</td>
                  <td>{property.area}</td>
                  <td>
                    <img src={`${API_URL}/uploads/${property.image_url}`} alt={property.title} className="property-image" />
                  </td>
                  <td>
                    {property.type === 'rent' && (
                      <div>
                        <label className="toggle-switch">
                          <input 
                            type="checkbox" 
                            checked={property.available} 
                            onChange={() => toggleAvailability(property.property_id, property.available)} 
                          />
                          <span className="slider"></span>
                        </label>
                        {!property.available && (
                          <p><strong>Availability Date:</strong> {formatDate(property.availability_date)}</p>
                        )}
                      </div>
                    )}
                  </td>
                  <td className="actions">
                    <button onClick={() => openModal(property)} className="update-button">
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button onClick={() => handleDeleteProperty(property.property_id)} className="delete-button">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="12">No properties found</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="pagination">
          <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
          <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
        </div>
      </div>

      {showModal && (
        <div className="modal" onClick={handleModalClick}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <form onSubmit={handleUpdateProperty} className="property-form">
              <h2>Update Property</h2>
              <img src={`${API_URL}/uploads/${selectedProperty.image_url}`} alt={selectedProperty.title} className="property-image-large" />
              <div className="select-container">
                <select name="type" value={selectedProperty.type} onChange={handleInputChange} required>
                  <option value="rent">Rent</option>
                  <option value="buy">Buy</option>
                  <option value="floorplots">FloorPlots</option>
                </select>
              </div>
              <input type="text" name="title_ar" placeholder="Title (Arabic)" value={selectedProperty.title_ar} onChange={handleInputChange} required />
              <textarea name="description_ar" placeholder="Description (Arabic)" value={selectedProperty.description_ar} onChange={handleInputChange} required />
              <input type="number" name="price" placeholder="Price" value={selectedProperty.price} onChange={handleInputChange} required />
              <input type="text" name="location" placeholder="Location" value={selectedProperty.location} onChange={handleInputChange} required />
              <input type="number" name="area" placeholder="Area" value={selectedProperty.area} onChange={handleInputChange} required />
              {selectedProperty.type !== 'floorplots' && (
                <>
                  <input type="number" name="bedrooms" placeholder="Bedrooms" value={selectedProperty.bedrooms} onChange={handleInputChange} required />
                  <input type="number" name="salon" placeholder="Salon" value={selectedProperty.salon} onChange={handleInputChange} required />
                  <input type="number" name="bathrooms" placeholder="Bathrooms" value={selectedProperty.bathrooms} onChange={handleInputChange} required />
                </>
              )}
              {selectedProperty.type === 'rent' && (
                <input
                  type="date"
                  name="availability_date"
                  placeholder="Availability Date"
                  value={selectedProperty.availability_date ? formatDate(selectedProperty.availability_date) : ''}
                  onChange={handleInputChange}
                  min={getTomorrowDate()}
                  required={!selectedProperty.available}
                />
              )}
              <input type="file" name="images" multiple onChange={handleFileChange} />
              <button type="submit" className="btn-primary">Update Property</button>
            </form>
          </div>
        </div>
      )}

      {showAvailabilityModal && (
        <div className="modal" onClick={(e) => e.target.className === 'modal' && setShowAvailabilityModal(false)}>
          <div className="modal-content">
            <span className="close" onClick={() => setShowAvailabilityModal(false)}>&times;</span>
            <form onSubmit={(e) => { e.preventDefault(); handleAvailabilitySubmit(); }}>
              <h2>Set Availability Date</h2>
              <input
                type="date"
                name="availability_date"
                placeholder="Availability Date"
                value={availabilityDate}
                onChange={(e) => setAvailabilityDate(e.target.value)}
                min={getTomorrowDate()}
                required
              />
              <button type="submit" className="btn-primary">Set Availability Date</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default UpdateProperty;
