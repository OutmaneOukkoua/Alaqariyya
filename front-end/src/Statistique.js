import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Statistique.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShareAlt, faMousePointer } from '@fortawesome/free-solid-svg-icons';

const Statistique = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [totalShares, setTotalShares] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);
  const [visitorDetails, setVisitorDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 8;
  const API_URL = process.env.REACT_APP_SERVER;

  useEffect(() => {
    // Fetch unique visitor count
    axios.get(`${API_URL}/api/visitor/count`)
      .then(response => setVisitorCount(response.data.count))
      .catch(error => console.error('Error fetching visitor count:', error));

    // Fetch total share count
    axios.get(`${API_URL}/api/share/total`)
      .then(response => setTotalShares(response.data.totalShares))
      .catch(error => console.error('Error fetching total share count:', error));

    // Fetch total clicks count
    axios.get(`${API_URL}/api/properties/total-clicks`)
      .then(response => setTotalClicks(response.data.totalClicks))
      .catch(error => console.error('Error fetching total clicks:', error));

    // Fetch visitor details
    axios.get(`${API_URL}/api/visitor/all-details`)
      .then(response => setVisitorDetails(response.data))
      .catch(error => console.error('Error fetching visitor details:', error));
  }, [API_URL]);

  const totalPages = Math.ceil(visitorDetails.length / rowsPerPage);
  const currentData = visitorDetails.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container">
      <div className="statistique-grid">
        <h2 className="statistique-title">Platform Statistics</h2>

        <div className="statistique-overview">
          <div className="stat-card">
            <div className="stat-icon">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="stat-info">
              <p className="stat-number">{visitorCount}</p>
              <p className="stat-label">Unique Visitors</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <FontAwesomeIcon icon={faShareAlt} />
            </div>
            <div className="stat-info">
              <p className="stat-number">{totalShares}</p>
              <p className="stat-label">Total Shares</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <FontAwesomeIcon icon={faMousePointer} />
            </div>
            <div className="stat-info">
              <p className="stat-number">{totalClicks}</p>
              <p className="stat-label">Total Clicks</p>
            </div>
          </div>
        </div>

        {/* Visitor Details Table */}
        <h3 className="statistique-subtitle">Visitor Details</h3>
        <div className="table-wrapper">
          <table className="visitor-details-table">
            <thead>
              <tr>
                <th>IP Address</th>
                <th>City</th>
                <th>Country</th>
                <th>Visit Count</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((visitor, index) => (
                <tr key={index}>
                  <td>{visitor.ip_address}</td>
                  <td>{visitor.city}</td>
                  <td>{visitor.country}</td>
                  <td>{visitor.visit_count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination-statistique">
          {/* Previous Button */}
          <button 
            onClick={() => handlePageChange(currentPage - 1)} 
            className="pagination-statistique-arrow" 
            disabled={currentPage === 1}
          >
            ‹
          </button>

          {/* Display previous page if it exists */}
          {currentPage > 1 && (
            <button 
              onClick={() => handlePageChange(currentPage - 1)} 
              className="pagination-statistique-button"
            >
              {currentPage - 1}
            </button>
          )}

          {/* Current Page */}
          <button className="pagination-statistique-button active">{currentPage}</button>

          {/* Display next page if it exists */}
          {currentPage < totalPages && (
            <button 
              onClick={() => handlePageChange(currentPage + 1)} 
              className="pagination-statistique-button"
            >
              {currentPage + 1}
            </button>
          )}

          {/* Next Button */}
          <button 
            onClick={() => handlePageChange(currentPage + 1)} 
            className="pagination-statistique-arrow" 
            disabled={currentPage === totalPages}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default Statistique;
