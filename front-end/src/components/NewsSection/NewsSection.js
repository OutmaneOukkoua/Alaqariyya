import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { FaNewspaper, FaRegCalendarAlt, FaHome, FaSpinner } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./NewsSection.css";

function NewsSection() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { t, i18n } = useTranslation();
  const API_URL = process.env.REACT_APP_SERVER;
  const isArabic = i18n.language === "ar";
  const navigate = useNavigate();

  const lang = i18n.language || "en";

  // ✅ helper: prefix all internal routes with /{lang}
  const withLang = (path) => {
    const clean = path.startsWith("/") ? path : `/${path}`;
    return `/${lang}${clean}`;
  };

  useEffect(() => {
    let isMounted = true;

    const fetchArticles = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${API_URL}/news?lang=${lang}`);
        if (!isMounted) return;
        setArticles(response.data || []);
      } catch (error) {
        console.error("Error fetching news articles:", error);
        if (!isMounted) return;
        setArticles([]);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchArticles();

    return () => {
      isMounted = false;
    };
  }, [API_URL, lang]);

  const getCategoryIcon = (category) => {
    switch ((category || "").toLowerCase()) {
      case "market":
        return <FaHome className="news-icon" aria-hidden="true" />;
      case "events":
        return <FaRegCalendarAlt className="news-icon" aria-hidden="true" />;
      default:
        return <FaNewspaper className="news-icon" aria-hidden="true" />;
    }
  };

  const truncateText = (text = "", maxLength = 150) => {
    if (!text) return "";
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };

  const handleArticleClick = (articleId) => {
    navigate(withLang(`/news/${articleId}`));
  };

  // ✅ آخر 6 مقالات
  const latestSixArticles = useMemo(() => articles.slice(0, 6), [articles]);

  return (
    <section className={`news-section ${isArabic ? "rtl" : "ltr"}`}>
      {isLoading ? (
        <div className="news-loading" role="status" aria-live="polite">
          <FaSpinner className="news-spinner" />
          <p className="news-loading-text">{t("properties.Loading")}</p>
        </div>
      ) : latestSixArticles.length > 0 ? (
        <div className="news-grid">
          {latestSixArticles.map((article) => (
            <article key={article.id} className="news-card">
              <div
                className="news-image-container"
                onClick={() => handleArticleClick(article.id)}
                onKeyDown={(e) => e.key === "Enter" && handleArticleClick(article.id)}
                role="button"
                tabIndex={0}
                aria-label={article.title}
              >
                <img
                  src={`${API_URL}/uploads/${article.image_url}`}
                  alt={article.title}
                  className="news-image"
                  loading="lazy"
                />

                <div className="news-category" title={article.category}>
                  {getCategoryIcon(article.category)}
                  <span className="news-category-text">{article.category}</span>
                </div>
              </div>

              <div className="news-content">
                <h3 className="news-title">{article.title}</h3>

                <p className="news-summary">{truncateText(article.content, 151)}</p>

                <button className="read-more" onClick={() => handleArticleClick(article.id)} type="button">
                  {t("news.readMore")} <span className="arrow">{isArabic ? "←" : "→"}</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="no-news">{t("news.noArticles")}</p>
      )}
    </section>
  );
}

export default NewsSection;
