import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './NewsArticle.css';
import Footer from '../Footer/Footer';


function NewsArticle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { t, i18n } = useTranslation();
  const API_URL = process.env.REACT_APP_SERVER;
  const isArabic = i18n.language === 'ar';

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${API_URL}/news/${id}?lang=${i18n.language}`
        );
        setArticle(response.data);
      } catch (error) {
        console.error('Error fetching the article:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [API_URL, id, i18n.language]);

  if (isLoading) {
    return (
      <div className="loadingg">
        <FaSpinner className="spinnerr" />
        <p>{t('properties.Loading')}</p>
      </div>
    );
  }

  if (!article) {
    return <p>{t('news.articleNotFound')}</p>;
  }

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + ' ...';
    }
    return text;
  };

  return (
    <>
    <div className='page-articles'>
      <div class="page-wrappers">
        <div className={`news-article ${isArabic ? 'rtl' : 'ltr'}`}>
        <nav className={`breadcrumbb ${isArabic ? 'rtl' : 'ltr'}`}>
            <span className="breadcrumbb-item" onClick={() => navigate('/')}>
              {t('header.Home')}
            </span>
            {' > '}
            <span className="breadcrumbb-current">{truncateText(article.title,20)}</span>
          </nav>
          <h1 className="article-title">{article.title}</h1>
          <div className="article-meta">
            <span>{new Date(article.published_at).toLocaleDateString()}</span>
          </div>
          <div className="article-image-container">
            <img
              src={`${API_URL}/uploads/${article.image_url}`}
              alt={article.title}
              className="article-image"
            />
          </div>
          <div className="article-content" style={{ whiteSpace: 'pre-line' }}>
            <p>{article.content}</p>
          </div>
        </div>
        
      </div>
      <Footer />
    </div>
      
    </>
  );
}

export default NewsArticle;

