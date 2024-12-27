import React, { useState } from 'react';
import axios from 'axios';
import './AddNews.css';

function AddNews({ closeModal, refreshNews }) {
  const [title_ar, setTitle] = useState('');
  const [content_ar, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const API_URL = process.env.REACT_APP_SERVER;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title_ar || !content_ar || !image) {
      setError('All fields are required');
      return;
    }

    const formData = new FormData();
    formData.append('title_ar', title_ar);
    formData.append('content_ar', content_ar);
    formData.append('image', image);

    try {
      await axios.post(`${API_URL}/news`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('News added successfully!');
      closeModal();
      refreshNews();
    } catch (error) {
      console.error('Error adding news article:', error);
      alert('Error adding news article. Please try again.');
    }
  };

  const handleArabicInput = (setter) => (e) => {
    const arabicOnly = e.target.value.replace(/[^\u0600-\u06FF0-9\s:;.,!?#*()[\]_`-]/g, '');
    setter(arabicOnly);
  };

  return (
    <div className="AddNews">
      <h2>Add News Article</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title (Arabic):
          <input 
            type="text" 
            placeholder="Title (Arabic)"
            value={title_ar} 
            onChange={handleArabicInput(setTitle)} 
            required 
          />
        </label>
        <label>
          Content (Arabic):
          <textarea style={{ whiteSpace: 'pre-line', resize: 'none' }}
            value={content_ar}
            placeholder="Description (Arabic)"
            onChange={handleArabicInput(setContent)} 
            required
          ></textarea>
        </label>
        <label>
          Image:
          <input 
            type="file" 
            onChange={(e) => setImage(e.target.files[0])} 
            required 
          />
        </label>
        {error && <p className="error-message">{error}</p>}
        <div className="button-group">
          <button type="submit">Add News</button>
        </div>
      </form>
    </div>
  );
}

export default AddNews;
