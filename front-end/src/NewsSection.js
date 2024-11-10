import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  FaNewspaper,
  FaRegCalendarAlt,
  FaHome,
  FaSpinner,
} from 'react-icons/fa'; // Added FaSpinner
import { useTranslation } from 'react-i18next';
import Modal from './Modal'; // Import the modal component
import './NewsSection.css';

function StaticNewsSection() {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null); // State for modal article
  const [isLoading, setIsLoading] = useState(false); // Added loading state
  const { t, i18n } = useTranslation();
  const API_URL = process.env.REACT_APP_SERVER;
  const isArabic = i18n.language === 'ar';

  // Fetch articles from the API (taken from your old News component)
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading(true); // Set loading to true before fetching
        const response = await axios.get(`${API_URL}/news?lang=${i18n.language}`);
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching news articles:', error);
      } finally {
        setIsLoading(false); // Set loading to false after fetching
      }
    };

    fetchArticles();
  }, [API_URL, i18n.language]);

  // Function to select an icon based on news category
  const getCategoryIcon = (category) => {
    switch (category?.toLowerCase()) {
      case 'market':
        return <FaHome className="news-icon" />;
      case 'events':
        return <FaRegCalendarAlt className="news-icon" />;
      default:
        return <FaNewspaper className="news-icon" />;
    }
  };

  // Function to truncate the summary text
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  // Function to open the modal with the selected article
  const handleReadMore = (article) => {
    setSelectedArticle(article);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setSelectedArticle(null);
  };

  return (
    <section className={`news-section ${isArabic ? 'rtl' : 'ltr'}`}>
      <div className="news-grid">
        {isLoading ? (
          <div className="loadingg">
            <FaSpinner className="spinnerr" />
            <p>{t('properties.Loading')}</p>
          </div>
        ) : articles.length > 0 ? (
          articles.map((article) => (
            <div key={article.id} className="news-card">
              <div className="news-image-container">
                <img
                  src={`${API_URL}/uploads/${article.image_url}`}
                  alt={article.title}
                  className="news-image"
                />
                <div className="news-category">
                  {getCategoryIcon(article.category)}
                  <span>{article.category}</span>
                </div>
              </div>
              <div className="news-content">
                <h3 className="news-title">{article.title}</h3>
                <p className="news-summary">{truncateText(article.content, 131)}</p>
                <button className="read-more" onClick={() => handleReadMore(article)}>
                {t('news.readMore')} {isArabic ? '←' : '→'}

                </button>
              </div>
            </div>
          ))
        ) : (
          <p>{t('news.noArticles')}</p>
        )}
      </div>

      {/* Render the modal if an article is selected */}
      {selectedArticle && <Modal article={selectedArticle} onClose={handleCloseModal} />}
    </section>
  );
}

export default StaticNewsSection;
