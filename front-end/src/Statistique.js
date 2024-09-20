
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Statistique.css';

const Statistique = () => {
  const [visitorCount, setVisitorCount] = useState(0); 
  const API_URL = process.env.REACT_APP_SERVER; 

  useEffect(() => {
    axios.get(`${API_URL}/api/visitor/count`)  // Fetch without incrementing
      .then(response => {
        setVisitorCount(response.data.count); 
        console.log(response.data.count);
      })
      .catch(error => {
        console.error('Error fetching visitor count:', error);
      });
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="statistique-container">
      <h2>Visitor Statistics</h2>
      <p>Total Visitors: {visitorCount}</p> 
    </div>
  );
};

export default Statistique;
