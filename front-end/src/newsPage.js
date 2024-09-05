
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import AddNews from './AddNews'; // Import the AddNews component
import './newsPage.css';

function NewsPage() {
  const [articles, setArticles] = useState([]);
  const [showAddNewsModal, setShowAddNewsModal] = useState(false);
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

  const handleAddNews = () => {
    setShowAddNewsModal(true);
  };

  const closeAddNewsModal = () => {
    setShowAddNewsModal(false);
  };

  const refreshNews = () => {
    fetchArticles(); // Refresh the news list after adding a new article
  };

  return (
    <div className="newsPage">
      <h2>Manage News Articles</h2>
      <button className="add-news" onClick={handleAddNews}>Add News</button>
      <table className="news-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Content</th>
            <th>Published At</th>
            <th>Image</th>
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
                    <img src={`${API_URL}/uploads/${article.image_url}`} alt={article.title} className="article-image" />
                  </td>
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

      {showAddNewsModal && (
        <div className="modal" onClick={closeAddNewsModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="close" onClick={closeAddNewsModal}>&times;</span>
            <AddNews closeModal={closeAddNewsModal} refreshNews={refreshNews} /> {/* Pass closeModal and refreshNews */}
          </div>
        </div>
      )}
    </div>
  );
}

export default NewsPage;