
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faShareAlt, faMousePointer } from '@fortawesome/free-solid-svg-icons';
import './Statistique.css';

const Statistique = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [totalShares, setTotalShares] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);  // State for total clicks
  const API_URL = process.env.REACT_APP_SERVER;

  useEffect(() => {
    // Fetch visitor count
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
  }, []);

  return (
    <div className="statistique-container">
      <h2 className="statistique-title">Platform Statistics</h2>

      <div className="statistique-items">
        <div className="statistique-item">
          <FontAwesomeIcon icon={faUsers} className="statistique-icon" />
          <div className="statistique-info">
            <p className="statistique-number">{visitorCount}</p>
            <p className="statistique-label">Total Visitors</p>
          </div>
        </div>

        <div className="statistique-item">
          <FontAwesomeIcon icon={faShareAlt} className="statistique-icon" />
          <div className="statistique-info">
            <p className="statistique-number">{totalShares}</p>
            <p className="statistique-label">Total Shares</p>
          </div>
        </div>

        <div className="statistique-item">
          <FontAwesomeIcon icon={faMousePointer} className="statistique-icon" />
          <div className="statistique-info">
            <p className="statistique-number">{totalClicks}</p>
            <p className="statistique-label">Total Clicks</p> 
          </div>
        </div>

      </div>
    </div>
  );
};

export default Statistique;
