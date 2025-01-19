import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast, ToastContainer } from 'react-toastify';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import AddNews from '../AddNews/AddNews';
import './newsPage.css';

function NewsPage() {
  const [articles, setArticles] = useState([]);
  const [showAddNewsModal, setShowAddNewsModal] = useState(false);
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
    const confirmDelete = window.confirm("Do you want to remove this item?");
    if (confirmDelete) {
      try {
        await axios.delete(`${API_URL}/news/${id}`);
        setArticles(articles.filter(article => article.id !== id));
        toast.success('Property deleted successfully!', {
                  icon: "🏠",
                });
        
      } catch (error) {
        console.error('Error deleting news article:', error);
        toast.error('Error deleting property. Please try again.');
      }
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
      <ToastContainer />
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
                    <img src={`${API_URL}/uploads/${article.image_url}`} alt={article.title} className="article-images" />
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
