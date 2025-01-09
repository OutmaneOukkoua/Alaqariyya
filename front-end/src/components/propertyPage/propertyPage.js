import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { format, addDays } from 'date-fns';
import AddProperty from '../AddProperty/AddProperty';

import './propertyPage.css';

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
  const [availabilityDate, setAvailabilityDate] = useState('');
  const [filterType, setFilterType] = useState('all');
  const API_URL = process.env.REACT_APP_SERVER;

  useEffect(() => {
    fetchProperties(currentPage, filterType);
  }, [currentPage, filterType]);

  const fetchProperties = async (page, type) => {
    try {
      const response = await axios.get(`${API_URL}/properties?page=${page}&type=${type}`);
      setProperties(response.data.properties || []);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  const handleTypeChange = (e) => {
    setFilterType(e.target.value);
    setCurrentPage(1);
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    // For "description_ar" we do Arabic + Markdown
    if (name === 'description_ar') {
      const allowArabicMarkdown = value.replace(/[^\u0600-\u06FF0-9\s:;.,!?#*()[\]_`-]/g, '');
      setSelectedProperty((prevState) => ({
        ...prevState,
        [name]: allowArabicMarkdown,
      }));
    } 
    else if (name === 'title_ar' || name === 'location_ar') {
      const arabicOnly = value.replace(/[^\u0600-\u06FF0-9\s:;.,!]/g, '');

      setSelectedProperty(prevState => ({
        ...prevState,
        [name]: type === 'number' ? parseInt(arabicOnly, 10) : arabicOnly
      }));
    }else {
      setSelectedProperty(prevState => ({
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
    setErrors(prevErrors => ({ ...prevErrors, images: '' }));
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
    imageFiles.forEach((img, index) => {
      formData.append('images', img.file);
      formData.append('isMain', img.isMain);
      formData.append('displayOrder', img.displayOrder);
    });

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
      setImageFiles([]);
      setShowModal(false);
      fetchProperties(currentPage, filterType);
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
      fetchProperties(currentPage, filterType);
    } catch (error) {
      toast.error('Error deleting property. Please try again.');
      console.error('Error deleting property:', error);
    }
  };

  const toggleAvailability = async (property_id, currentStatus) => {
    if (currentStatus) {
      setAvailabilityProperty(property_id);
      setShowAvailabilityModal(true);
    } else {
      try {
        await axios.put(`${API_URL}/properties/${property_id}/availability`, { available: true, availability_date: null });
        toast.success('Property availability updated successfully!', {
          icon: "🏠",
        });
        fetchProperties(currentPage, filterType);
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
      fetchProperties(currentPage, filterType);
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
      images: property.images || []
    });
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedProperty(null);
    setImageFiles([]);
    setShowModal(false);
  };

  const handleModalClick = (e) => {
    if (e.target.className === 'modal') {
      closeModal();
    }
  };

  const openAddPropertyModal = () => {
    setShowAddPropertyModal(true);
  };

  const closeAddPropertyModal = () => {
    setShowAddPropertyModal(false);
  };

  const handleAddPropertyModalClick = (e) => {
    if (e.target.className === 'modal') {
      closeAddPropertyModal();
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
      <center><h1>Properties</h1></center>
      
      <button className="btn-add-property" onClick={openAddPropertyModal}>
        Add Property
      </button>
      
      {/* Filter by Type */}
      <div className="filter-container">
        <label htmlFor="filterType">Filter by Type:</label>
        <select id="filterType" value={filterType} onChange={handleTypeChange}>
          <option value="all">All Types</option>
          <option value="rent">Furnished rent</option>
          <option value="regularRent">Regular Rent</option>
          <option value="buy">Hauses for buy</option>
          <option value="apartments">apartments for buy</option>
          <option value="floorplots">Floor Plots</option>
          <option value="Commercialgarages">Commercial Garages</option>
          <option value="CommercialgaragesRent">Commercial Garages for rent</option>
        </select>
      </div>

      {/* Properties Table */}
      <div className="properties-table-container">
        <table className="properties-table">
          <thead>
            <tr>
              {/* 
              
              
              */}
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {properties.length > 0 ? (
              properties.map((property) => (
                <tr key={property.property_id}>
                  {/* <td>{property.type}</td> */}
                  <td>{property.title_ar || property.title}</td>
                  <td>{property.description_ar || property.description}</td>
                  <td>{property.price}</td>
                  <td>{property.location_ar || property.location}</td>
                  <td>{property.exact_address}</td>
                  <td>{property.bedrooms}</td>
                  <td>{property.salon}</td>
                  <td>{property.bathrooms}</td>
                  <td>{property.kitchen}</td> 
                  <td>{property.area}</td>
                  <td>{property.floors}</td>
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
                <td colSpan="13">No properties found</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="pagination">
          <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
          <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
        </div>
      </div>

      {/* modal for Updating Property */}
      {showModal && (
        <div className="modal" onClick={handleModalClick}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <form onSubmit={handleUpdateProperty} className="property-form">
              <h2>Update Property</h2>
              <img src={`${API_URL}/uploads/${selectedProperty.image_url}`} alt={selectedProperty.title} className="property-image-large" />
              <div className="select-container">
                <select name="type" value={selectedProperty.type} onChange={handleInputChange} required>
                  <option value="rent">Furnished rent</option>
                  <option value="regularRent">Regular Rent</option>
                  <option value="buy">Hauses for buy</option>
                  <option value="apartments">apartments for buy</option>
                  <option value="floorplots">Floor Plots</option>
                  <option value="Commercialgarages">Commercial Garages</option>
                  <option value="CommercialgaragesRent">Commercial Garages for rent</option>

                </select>
              </div>
              <input type="text" name="title_ar" placeholder="Title (Arabic)" value={selectedProperty.title_ar} onChange={handleInputChange} required />
              <textarea style={{ resize: 'none' }} name="description_ar" placeholder="Description -Arabic- (Markdown allowed)" value={selectedProperty.description_ar} onChange={handleInputChange} required />
              <input type="number" name="price" placeholder="Price" value={selectedProperty.price} onChange={handleInputChange} required />
              <input type="text" name="location_ar" placeholder="Location (Arabic)" value={selectedProperty.location_ar} onChange={handleInputChange} required />
              <input type="text" name="exact_address" placeholder="Exact Address (e.g., 7379+44W, Beni Ansar)" value={selectedProperty.exact_address} onChange={handleInputChange}  />
              <input type="number" name="area" placeholder="Area" value={selectedProperty.area} onChange={handleInputChange} required />
              {selectedProperty.type !== 'floorplots' && selectedProperty.type !== 'Commercialgarages' && selectedProperty.type !== 'CommercialgaragesRent' && (
                <>
                  <input type="number" name="bedrooms" placeholder="Bedrooms" value={selectedProperty.bedrooms} onChange={handleInputChange} required />
                  <input type="number" name="salon" placeholder="Salon" value={selectedProperty.salon} onChange={handleInputChange} />
                  <input type="number" name="bathrooms" placeholder="Bathrooms" value={selectedProperty.bathrooms} onChange={handleInputChange} required />
                  <input type="number" name="kitchen" placeholder="Kitchen" value={selectedProperty.kitchen} onChange={handleInputChange} required />
                  {(selectedProperty.type === 'buy' || selectedProperty.type === 'apartments' || selectedProperty.type === 'regularRent') && (
                    <input type="number" name="floors" placeholder="Number of Floors" value={selectedProperty.floors} onChange={handleInputChange} required />
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
              <button type="submit" className="btn-primary">Update Property</button>
            </form>
          </div>
        </div>
      )}

      {/* modal for Adding Property */}
      {showAddPropertyModal && (
        <div className="modal" onClick={handleAddPropertyModalClick}>
          <div className="modal-content">
            <span className="close" onClick={closeAddPropertyModal}>&times;</span>
            <AddProperty />
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

export default PropertyPage;
