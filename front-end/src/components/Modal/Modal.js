import React from 'react';
import './Modal.css';

function Modal({ article, onClose }) {
  if (!article) return null;

  const API_URL = process.env.REACT_APP_SERVER;

  // Handle click outside the modal content to close
  const handleOverlayClick = (e) => {
    if (e.target.className === 'modall-overlay') {
      onClose();
    }
  };

  return (
    <div className="modall-overlay" onClick={handleOverlayClick}>
      <div className="modall-content">
        <button className="modall-close" onClick={onClose}>
          <span className="close-icon">×</span>
        </button>
        <div className="modall-body">
          <div className="modall-image-container">
            <img 
              src={`${API_URL}/uploads/${article.image_url}`} 
              alt={article.title} 
              className="modall-image" 
            />
          </div>
          <div className="modall-info">
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <p className="modall-date">
              <strong>Published On:</strong> {new Date(article.published_at).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
