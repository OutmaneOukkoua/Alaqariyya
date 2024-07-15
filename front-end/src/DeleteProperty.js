import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaTrash } from 'react-icons/fa';
import './DeleteProperty.css';

function DeleteProperty() {
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
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

  const handleDeleteProperty = async (propertyId) => {
    try {
      await axios.delete(`${API_URL}/properties/${propertyId}`);
      toast.success('Property deleted successfully!');
      fetchProperties(currentPage);
    } catch (error) {
      toast.error('Error deleting property. Please try again.');
      console.error('Error deleting property:', error);
    }
  };

  return (
    <div className="delete-property-container">
      <ToastContainer />
      <h1>Delete Property</h1>
      <button className="go-backk" onClick={() => navigate(-1)}>
        <FaArrowLeft style={{ marginRight: '5px' }} /> Go Back
      </button>
      <table className="property-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Location</th>
            <th>Bedrooms</th>
            <th>Bathrooms</th>
            <th>Area</th>
            <th>Image</th>
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
                <td>{property.bathrooms}</td>
                <td>{property.area}</td>
                <td>
                  <img src={`${API_URL}/uploads/${property.image_url}`} alt={property.title} className="property-image" />
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteProperty(property.property_id)}
                    className="btn-delete">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10">No properties found</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default DeleteProperty;
