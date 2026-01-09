// src/components/Blog/Blog.jsx
import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './Blog.css';
import Footer from '../Footer/Footer';
import { FaSpinner } from 'react-icons/fa';
import SEO from "../../SEO/SEO";


function Blog() {
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const currentLanguage = i18n.language || 'en';

  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_SERVER;

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // ✅ Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const POSTS_PER_PAGE = 12; // 3x3

  // ✅ helper: always prefix paths with /{lang}
  const withLang = (path = '/') => {
    const clean = path.startsWith('/') ? path : `/${path}`;
    return `/${currentLanguage}${clean}`;
  };

  const truncateText = (text = '', maxLength = 150) => {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + ' ...' : text;
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(`${API_URL}/news?lang=${i18n.language}`);
        setPosts(res.data || []);
        setCurrentPage(1);
      } catch (err) {
        console.error(t('blog.errors.fetchPosts'), err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [API_URL, i18n.language, t]);

  const handleOpenPost = (id) => {
    navigate(withLang(`/news/${id}`));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));

  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    const end = start + POSTS_PER_PAGE;
    return posts.slice(start, end);
  }, [posts, currentPage]);

  const goToPage = (page) => {
    const safe = Math.min(Math.max(1, page), totalPages);
    setCurrentPage(safe);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pageNumbers = useMemo(() => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);

    const pages = new Set([1, totalPages, currentPage, currentPage - 1, currentPage + 1]);
    const filtered = [...pages].filter((p) => p >= 1 && p <= totalPages).sort((a, b) => a - b);

    const result = [];
    for (let i = 0; i < filtered.length; i++) {
      result.push(filtered[i]);
      if (i < filtered.length - 1 && filtered[i + 1] - filtered[i] > 1) {
        result.push('...');
      }
    }
    return result;
  }, [totalPages, currentPage]);

  const renderCategoryLabel = (cat) => {
  if (!cat) return "";
  const key = `newsArticle.categories.${cat}`;
  const translated = t(key);
  return translated === key ? cat : translated;
  };


  return (
    <>
      <SEO
      title={t("blog.metaTitle")}
      description={t("blog.metaDescription")}
      path="/blog"
    />


      <div className={`blog-page ${isArabic ? 'rtl' : 'ltr'}`}>
        {/* HERO */}
        <section className="blog-hero">
          <h1>{t('blog.heroTitle')}</h1>
          <p>{t('blog.heroSubtitle')}</p>
        </section>

        {/* Loading */}
        {isLoading && (
          <div className="blog-loading">
            <FaSpinner className="blog-spinner" />
            <p>{t('blog.loading')}</p>
          </div>
        )}

        {/* Empty */}
        {!isLoading && posts.length === 0 && (
          <p style={{ textAlign: 'center', marginTop: '12px' }}>
            {t('news.articleNotFound', { defaultValue: t('blog.empty') })}
          </p>
        )}

        {/* GRID */}
        {!isLoading && posts.length > 0 && (
          <>
            <section className="blog-grid">
              {paginatedPosts.map((post) => {
                const imageSrc = post.image_url
                  ? `${API_URL}/uploads/${post.image_url}`
                  : t('blog.placeholderImageUrl');

                const title = post.title;
                const excerpt = truncateText(post.excerpt || post.content || '', 180);
                const date = post.published_at
                  ? new Date(post.published_at).toLocaleDateString(isArabic ? 'ar-MA' : 'en-GB')
                  : '';

                return (
                  <article
                    className="blog-card"
                    key={post.id}
                    onClick={() => handleOpenPost(post.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="blog-card-image-wrapper">
                      <img
                        src={imageSrc}
                        alt={title}
                        className="blog-card-image"
                        loading="lazy"
                      />
                    {post.category && <span className="blog-card-tag">{renderCategoryLabel(post.category)}</span>}
                    </div>

                    <div className="blog-card-body">
                      {date && (
                        <div className="blog-card-meta">
                          <span className="blog-card-date">{date}</span>
                        </div>
                      )}

                      <h2 className="blog-card-title">{title}</h2>
                      <p className="blog-card-excerpt">{excerpt}</p>

                      <button
                        type="button"
                        className="blog-card-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenPost(post.id);
                        }}
                      >
                        {t('blog.readArticle')}
                      </button>
                    </div>
                  </article>
                );
              })}
            </section>

            {/* ✅ Pagination UI */}
            {totalPages > 1 && (
              <div className="blog-pagination">
                <button
                  className="blog-page-btn"
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  {t('blog.pagination.previous')}
                </button>

                <div className="blog-page-numbers">
                  {pageNumbers.map((p, idx) =>
                    p === '...' ? (
                      <span key={`dots-${idx}`} className="blog-page-dots">
                        ...
                      </span>
                    ) : (
                      <button
                        key={p}
                        className={`blog-page-number ${currentPage === p ? 'active' : ''}`}
                        onClick={() => goToPage(p)}
                      >
                        {p}
                      </button>
                    )
                  )}
                </div>

                <button
                  className="blog-page-btn"
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  {t('blog.pagination.next')}
                </button>
              </div>
            )}
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Blog;
