
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './DeleteNews.css';

function DeleteNews() {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_SERVER;

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(`${API_URL}/news?lang=ar`);
      setArticles(response.data);
    } catch (error) {
      console.error('Error fetching news articles:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/news/${id}`);
      setArticles(articles.filter(article => article.id !== id));
      alert('News deleted successfully!');
    } catch (error) {
      console.error('Error deleting news article:', error);
      alert('Error deleting news article. Please try again.');
    }
  };

  return (
    <div className="DeleteNews">
      <button className="go-bac" onClick={() => navigate('/dashboard')}>Go Back</button>
      <h2>Delete News Articles</h2>
      <table className="news-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Content</th>
            <th>Published At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {articles.map(article => (
            <tr key={article.id}>
              <td>{article.id}</td>
              <td>{article.title}</td>
              <td>{article.content}</td>
              <td>{new Date(article.published_at).toLocaleDateString()}</td>
              <td>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(article.id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DeleteNews;
