import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast, ToastContainer } from 'react-toastify';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import AddNews from '../AddNews/AddNews';
import { useTranslation } from "react-i18next"; 
import './newsPage.css';

function NewsPage() {
  const { i18n } = useTranslation(); 

  const [articles, setArticles] = useState([]);
  const [showAddNewsModal, setShowAddNewsModal] = useState(false);

  // ✅ content modal
  const [showContentModal, setShowContentModal] = useState(false);
  const [contentText, setContentText] = useState('');

  // ✅ Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  const API_URL = process.env.REACT_APP_SERVER;

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(`${API_URL}/news?lang=ar`);

      // ✅ حماية من "slice is not a function"
      const data = Array.isArray(response.data) ? response.data : [];
      setArticles(data);

      // ✅ رجع للصفحة 1 إذا الصفحة الحالية ولات خارج النطاق
      setCurrentPage(1);
    } catch (error) {
      console.error('Error fetching news articles:', error);
      setArticles([]);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Do you want to remove this item?');
    if (!confirmDelete) return;

    try {
      await axios.delete(`${API_URL}/news/${id}`);

      setArticles((prev) => prev.filter((article) => article.id !== id));
      toast.success('Article deleted successfully!', { icon: '🗑️' });

      // ✅ إذا مسحتي آخر عنصر فالصفحة، رجع صفحة لور
      setTimeout(() => {
        setCurrentPage((prevPage) => {
          const newCount = articles.length - 1;
          const newTotalPages = Math.max(1, Math.ceil(newCount / ITEMS_PER_PAGE));
          return Math.min(prevPage, newTotalPages);
        });
      }, 0);
    } catch (error) {
      console.error('Error deleting news article:', error);
      toast.error('Error deleting article. Please try again.');
    }
  };

  const handleAddNews = () => setShowAddNewsModal(true);
  const closeAddNewsModal = () => setShowAddNewsModal(false);

  const refreshNews = () => fetchArticles();

  const getShortText = (text, wordsCount = 3) => {
    const clean = (text || '').replace(/\s+/g, ' ').trim();
    if (!clean) return '';
    const words = clean.split(' ');
    if (words.length <= wordsCount) return clean;
    return words.slice(0, wordsCount).join(' ') + '...';
  };

  const openContentModal = (fullText) => {
    setContentText(fullText || '');
    setShowContentModal(true);
  };

  const closeContentModal = () => {
    setShowContentModal(false);
    setContentText('');
  };

  // ✅ Pagination calculations
  const totalPages = Math.max(1, Math.ceil((articles?.length || 0) / ITEMS_PER_PAGE));

  const paginatedArticles = useMemo(() => {
    const safeArticles = Array.isArray(articles) ? articles : [];
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return safeArticles.slice(start, end);
  }, [articles, currentPage]);

  const goPrev = () => setCurrentPage((p) => Math.max(1, p - 1));
  const goNext = () => setCurrentPage((p) => Math.min(totalPages, p + 1));

  // ✅ always show Arabic category label
  const renderCategoryAr = (cat) => {
    if (!cat) return "";
    const normalized = String(cat).trim().toLowerCase();

    // نفس keys اللي عندك في NewsArticle
    const key = `newsArticle.categories.${normalized}`;

    // نجيب الترجمة من موارد اللغة العربية فقط
    const translated =
      i18n?.getResource("ar", "translation", key) ??
      i18n?.getResource("ar", "translation", `newsArticle.categories.${cat}`); // fallback

    return translated || cat;
  };

  return (
    <div className="newsPage">
      <ToastContainer />
      <h2>Manage News Articles</h2>

      <button className="add-news" onClick={handleAddNews}>
        Add News
      </button>

      <table className="news-table">
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>Title</th>
            <th>Content</th>
            <th>Category</th>
            <th>Youtube URL</th>
            <th>Published At</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {paginatedArticles.length > 0 ? (
            paginatedArticles.map((article) => (
              <tr key={article.id}>
                {/* <td>{article.id}</td> */}
                <td>{article.title}</td>

                <td
                  className="news-content-cell"
                  onClick={() => openContentModal(article.content)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') openContentModal(article.content);
                  }}
                  title="Click to view full content"
                >
                  {getShortText(article.content, 3)}
                </td>
                <td>{renderCategoryAr(article.category)}</td>
                <td>{article.youtube_url}</td>
                <td>{article.published_at ? new Date(article.published_at).toLocaleDateString() : ''}</td>
                <td>
                  {article.image_url ? (
                    <img
                      src={`${API_URL}/uploads/${article.image_url}`}
                      alt={article.title}
                      className="article-images"
                    />
                  ) : null}
                </td>

                <td>
                  <button className="delete-button" onClick={() => handleDelete(article.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No articles found</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* ✅ Pagination UI */}
      {articles.length > ITEMS_PER_PAGE && (
        <div className="pagination">
          <button onClick={goPrev} disabled={currentPage === 1}>
            Previous
          </button>

          <span className="page-indicator">
            Page {currentPage} / {totalPages}
          </span>

          <button onClick={goNext} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      )}

      {/* modal for Adding News */}
      {showAddNewsModal && (
        <div className="modal" onClick={closeAddNewsModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeAddNewsModal}>
              &times;
            </span>
            <AddNews closeModal={closeAddNewsModal} refreshNews={refreshNews} />
          </div>
        </div>
      )}

      {/* modal for Full Content */}
      {showContentModal && (
        <div className="modal" onClick={(e) => e.target.className === 'modal' && closeContentModal()}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeContentModal}>
              &times;
            </span>

            <div className="news-content-modal">
              <h2>Full Content</h2>
              <div className="news-content-full">{contentText}</div>

              <button type="button" className="btn-primary" onClick={closeContentModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewsPage;
