import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  FaNewspaper,
  FaRegCalendarAlt,
  FaHome,
  FaSpinner,
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './NewsSection.css';

function StaticNewsSection() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { t, i18n } = useTranslation();
  const API_URL = process.env.REACT_APP_SERVER;
  const isArabic = i18n.language === 'ar';
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${API_URL}/news?lang=${i18n.language}`);
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching news articles:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, [API_URL, i18n.language]);

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

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  // Function to handle article click
  const handleArticleClick = (articleId) => {
    navigate(`/news/${articleId}`);
  };

  const LoadingComponent = ({ t }) => (
    <div className="loadinggg">
      <FaSpinner className="spinnerrr" />
      <p>{t('properties.Loading')}</p>
    </div>
  );

  return (
    <section className={`news-section ${isArabic ? 'rtl' : 'ltr'}`}>
      <div className="news-grid">
        {isLoading ? (
          <LoadingComponent t={t} />
        ) : articles.length > 0 ? (
          articles.map((article) => (
            <div key={article.id} className="news-card">
              <div className="news-image-container"
               onClick={() => handleArticleClick(article.id)} 
               style={{ cursor: 'pointer' }} >

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
                <p className="news-summary">{truncateText(article.content, 151)}</p>
                <button
                  className="read-more"
                  onClick={() => handleArticleClick(article.id)}
                  style={{ cursor: 'pointer' }}
                >
                  {t('news.readMore')} {isArabic ? '←' : '→'}
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>{t('news.noArticles')}</p>
        )}
      </div>
    </section>
  );
}

export default StaticNewsSection;