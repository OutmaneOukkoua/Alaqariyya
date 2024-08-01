

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddNews.css';

function AddNews() {
  const [title_ar, setTitle] = useState('');
  const [content_ar, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();
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

    console.log('Form data being sent:', title_ar, content_ar, image);

    try {
      const response = await axios.post(`${API_URL}/news`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Response:', response);
      alert('News added successfully!');
      navigate('/dashboard');
    } catch (error) {
      console.error('Error adding news article:', error);
      alert('Error adding news article. Please try again.');
    }
  };

  return (
    <div className="AddNews">
      <button className="go-back-button" onClick={() => navigate('/dashboard')}>Go Back</button>
      <h2>Add News Article</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title (Arabic):
          <input 
            type="text" 
            placeholder="Title (Arabic)"
            value={title_ar} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </label>
        <label>
          Content (Arabic):
          <textarea 
            value={content_ar}
            placeholder="Description (Arabic)"
            onChange={(e) => setContent(e.target.value)} 
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
