import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';

function Welcome() {
  const email = localStorage.getItem('userEmail');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    navigate('/login', { replace: true });
  };

  const goToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div className="welcome-container">
      <button className="logout-button" onClick={handleLogout}>
        <i className="fas fa-sign-out-alt"></i> Deconnection
      </button>
      <h1 className="welcome-heading">Hello, {email}!</h1>
      <button className="dashboard-button" onClick={goToDashboard}>
        Go to Dashboard
      </button>
    </div>
  );
}

export default Welcome;