


import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();



  return (
    <div className="dashboard-container">
      <h1>Welcome to the Dashboard</h1>
      <div className="button-container">
        <button className="dashboard-button" onClick={() => navigate('/add-property')}>Add Property</button>
        <button className="dashboard-button" onClick={() => navigate('/update-property')}>Update Property</button>
        <button className="dashboard-button" onClick={() => navigate('/delete-property')}>Delete Property</button>
        <button className="dashboard-button green-button" onClick={() => navigate('/add-news')}>Add News</button>
        <button className="dashboard-button red-button" onClick={() => navigate('/delete-news')}>Delete News</button>
        <button className="dashboard-button" onClick={() => navigate('/contact-submissions')}>View Contact Submissions</button>
      </div>
    </div>
  );
}

export default Dashboard;