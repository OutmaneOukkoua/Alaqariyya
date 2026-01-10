// NewsArticle.js
import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./NewsArticle.css";
import Footer from "../Footer/Footer";
import SEO from "../../SEO/SEO";


function NewsArticle() {
  const { id, lng } = useParams(); // ✅ lng from URL (ex: /ar/news/:id)
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { t, i18n } = useTranslation();
  const API_URL = process.env.REACT_APP_SERVER;

  const currentLang = useMemo(() => lng || i18n.language || "en", [lng, i18n.language]);
  const isArabic = currentLang === "ar";

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${API_URL}/news/${id}?lang=${currentLang}`);
        setArticle(response.data);
      } catch (error) {
        console.error("Error fetching the article:", error);
        setArticle(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [API_URL, id, currentLang]);

  const handleBack = () => {
    // ✅ if user opened article directly, history may not have a proper "back"
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(`/${currentLang}/blog`);
    }
  };

  const truncateText = (text, maxLength) => {
    if (!text) return "";
    return text.length > maxLength ? text.substring(0, maxLength) + " ..." : text;
  };

  const extractYouTubeId = (url) => {
    if (!url) return null;
    const reg = /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/;
    const match = url.match(reg);
    return match ? match[1] : null;
  };

  const renderCategoryLabel = (cat) => {
    if (!cat) return null;
    const key = `newsArticle.categories.${cat}`;
    const translated = t(key);
    return translated === key ? cat : translated;
  };

  if (isLoading) {
    return (
      <div className="loadingg">
        <FaSpinner className="spinnerr" />
        <p>{t("properties.Loading")}</p>
      </div>
    );
  }

  if (!article) {
    return (
      <>
        <p style={{ textAlign: "center", marginTop: 12 }}>{t("news.articleNotFound")}</p>
        <Footer />
      </>
    );
  }

  const formattedDate = article.published_at
    ? new Date(article.published_at).toLocaleDateString(isArabic ? "ar-MA" : "en-GB", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";

  const wordsCount = article.content ? article.content.split(/\s+/).filter(Boolean).length : 0;
  const readingMinutes = Math.max(1, Math.round(wordsCount / 200));
  const youtubeId = extractYouTubeId(article.youtube_url);

  const markdownComponents = {
    a: ({ node, ...props }) => (
      <a {...props} className="article-link" target="_blank" rel="noopener noreferrer" />
    ),
    blockquote: ({ node, ...props }) => <blockquote {...props} className="article-quote" />,
    hr: ({ node, ...props }) => <hr {...props} className="article-hr" />,
    code: ({ inline, className, children, ...props }) => {
      if (inline) {
        return (
          <code className="article-code-inline" {...props}>
            {children}
          </code>
        );
      }
      return (
        <pre className="article-code-block">
          <code {...props}>{children}</code>
        </pre>
      );
    },
    table: ({ node, ...props }) => (
      <div className="article-table-wrapper">
        <table className="article-table" {...props} />
      </div>
    ),
    th: ({ node, ...props }) => <th className="article-th" {...props} />,
    td: ({ node, ...props }) => <td className="article-td" {...props} />,
  };

  return (
    <>
      <SEO
        title={t("newsArticle.metaTitlePrefix", { title: article.title })}
        description={truncateText(article.content, 150)}
        path={`/${currentLang}/news/${id}`}
        lang={currentLang}
        imageUrl={article.image_url ? `${API_URL}/uploads/${article.image_url}` : undefined}
      />


      <div className="page-articles">
        <div className={`article-shell ${isArabic ? "rtl" : "ltr"}`}>
          <div className="page-wrappers">
            <nav className={`breadcrumbb ${isArabic ? "rtl" : "ltr"}`}>
              <span
                className="breadcrumbb-item breadcrumbb-back"
                onClick={handleBack}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && handleBack()}
              >
                {t("newsArticle.back")}
              </span>
            </nav>

            <article className="news-article">
              <div className="article-hero">
                <div className="article-image-container">
                  <img
                    src={`${API_URL}/uploads/${article.image_url}`}
                    alt={article.title}
                    className="article-image"
                  />
                  <div className="article-image-overlay" />
                  <div className="article-meta-chip">
                    <span className="article-meta-date">{formattedDate}</span>
                  </div>
                </div>

                <h1 className="article-title">{article.title}</h1>

                <div className="article-meta-row">
                  {article.category && <span className="article-chip">{renderCategoryLabel(article.category)}</span>}
                  <span className="article-reading-time">
                    {t("newsArticle.readingTime", { minutes: readingMinutes })}
                  </span>
                </div>
              </div>

              <div className="article-body-card">
                {youtubeId && (
                  <div className="article-video-wrapper">
                    <div className="article-video-inner">
                      <iframe
                        src={`https://www.youtube.com/embed/${youtubeId}`}
                        title={t("newsArticle.youtubeTitle")}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                )}

                <div className="article-content">
                  <ReactMarkdown
                    className="article-markdown"
                    remarkPlugins={[remarkGfm]}
                    components={markdownComponents}
                  >
                    {article.content}
                  </ReactMarkdown>
                </div>
              </div>
            </article>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default NewsArticle;