
import React, { useState } from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faNewspaper, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ isOpen, toggleSidebar, setActiveComponent }) => {
  const [activeLink, setActiveLink] = useState(''); // Track the active link

  const handleLinkClick = (component) => {
    setActiveLink(component); // Set the active link
    setActiveComponent(component); // Trigger the parent component's state change
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? '❮' : '❯'}
      </button>
      <ul className="list-items">
        <li>
          <a
            onClick={() => handleLinkClick('property-page')}
            className={activeLink === 'property-page' ? 'active-link' : ''}
          >
            <FontAwesomeIcon icon={faHome} />
            <span style={{ paddingLeft: '10px' }}>{isOpen && ' Property'}</span>
          </a>
        </li>
        <li>
          <a
            onClick={() => handleLinkClick('news-page')}
            className={activeLink === 'news-page' ? 'active-link' : ''}
          >
            <FontAwesomeIcon icon={faNewspaper} />
            <span style={{ paddingLeft: '10px' }}>{isOpen && ' News'}</span>
          </a>
        </li>
        <li>
          <a
            onClick={() => handleLinkClick('view-submissions')}
            className={activeLink === 'view-submissions' ? 'active-link' : ''}
          >
            <FontAwesomeIcon icon={faEnvelope} />
            <span style={{ paddingLeft: '10px' }}>{isOpen && ' Contact'}</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
