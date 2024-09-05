
import React, { useState } from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar';

// Importing the components for each section
import AddProperty from './AddProperty';
import PropertyPage from './propertyPage';
import AddNews from './AddNews';
import NewsPage from './newsPage';
import ContactSubmissions from './ContactSubmissions';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeComponent, setActiveComponent] = useState('');

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const renderContent = () => {
    switch (activeComponent) {
      case 'add-property':
        return <AddProperty />;
      case 'property-page':
        return <PropertyPage />;
      case 'add-news':
        return <AddNews />;
      case 'news-page':
        return <NewsPage />;
      case 'view-submissions':
        return <ContactSubmissions />;
      default:
        return <h4>Welcome to the Dashboard</h4>;
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} setActiveComponent={setActiveComponent} />
      <div className={`content ${isOpen ? '' : 'shifted'}`}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
