

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Statistique.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShareAlt, faMousePointer } from '@fortawesome/free-solid-svg-icons';

const Statistique = () => {
  const [visitorCount, setVisitorCount] = useState(0);  // State for unique visitor count (IP addresses)
  const [totalShares, setTotalShares] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);
  const [visitorDetails, setVisitorDetails] = useState([]);  // State for visitor details
  const [currentPage, setCurrentPage] = useState(1);  // Current page for pagination
  const rowsPerPage = 8;  // Number of rows per page
  const API_URL = process.env.REACT_APP_SERVER;

  useEffect(() => {
    // Fetch unique visitor count (sum of IP addresses)
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

    // Fetch visitor details (IP, city, country, visit count)
    axios.get(`${API_URL}/api/visitor/all-details`)
      .then(response => setVisitorDetails(response.data))
      .catch(error => console.error('Error fetching visitor details:', error));
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(visitorDetails.length / rowsPerPage);

  // Get current page's data
  const currentData = visitorDetails.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
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

      {/* Pagination Controls */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={`pagination-button ${currentPage === i + 1 ? 'active' : ''}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Statistique;
