// FeaturedProperties.jsx
import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import { FaMapMarkerAlt, FaRulerCombined, FaBed, FaBath, FaCouch } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa";
import "./FeaturedProperties.css";

const formatPrice = (value) => new Intl.NumberFormat("de-DE").format(value);

export default function FeaturedProperties() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ start as true
  const [error, setError] = useState(false);   // ✅ track errors

  const API_URL = process.env.REACT_APP_SERVER;
  const { i18n, t } = useTranslation();
  const lang = i18n.language || "en";
  const isArabic = lang === "ar";

  const navigate = useNavigate();
  const location = useLocation();

  const withLang = useMemo(() => {
    const safeLang = (lang || "en").toLowerCase();
    return (path) => {
      const clean = path.startsWith("/") ? path : `/${path}`;
      if (clean === `/${safeLang}` || clean.startsWith(`/${safeLang}/`)) return clean;
      return `/${safeLang}${clean}`;
    };
  }, [lang]);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        setLoading(true);
        setError(false);

        const resp = await axios.get(`${API_URL}/properties/featured?lang=${lang}`);
        if (!mounted) return;

        setItems(resp.data?.properties || []);
      } catch (e) {
        if (!mounted) return;
        setItems([]);
        setError(true);
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => (mounted = false);
  }, [API_URL, lang]);

  // ✅ UPDATED: /{lang}/product/:id + keep querystring
  const go = (id) => navigate(withLang(`/product/${id}`) + location.search);

  const renderPrice = (p) => {
    if (!p.price) return t("featured.negotiable");
    return `${formatPrice(p.price)} ${t("properties.MAD")}`;
  };

  // ✅ UI states (Spinner / Error / Empty)
  if (loading) {
    return (
      <section className={`fp ${isArabic ? "rtl" : "ltr"}`}>
        <div className="fp-state fp-loading">
          <FaSpinner className="fp-spinner" />
          <p className="fp-state-text">{t("featured.loading")}</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={`fp ${isArabic ? "rtl" : "ltr"}`}>
        <div className="fp-state fp-error">
          <p className="fp-state-text">{t("featured.loadFailed")}</p>
        </div>
      </section>
    );
  }

  if (!items.length) {
    return (
      <section className={`fp ${isArabic ? "rtl" : "ltr"}`}>
        <div className="fp-state fp-empty">
          <p className="fp-state-text">{t("featured.empty")}</p>
        </div>
      </section>
    );
  }

  return (
    <section className={`fp ${isArabic ? "rtl" : "ltr"}`}>
      <div className="fp-head">
        <h2 className="fp-title">{t("featured.title")}</h2>
      </div>

      <div className="fp-grid">
        {items.slice(0, 6).map((p) => (
          <article
            key={p.property_id}
            className="fp-card"
            role="button"
            tabIndex={0}
            onClick={() => go(p.property_id)}
            onKeyDown={(e) => e.key === "Enter" && go(p.property_id)}
            aria-label={t("featured.viewDetails", { title: p.title })}
          >
            <div className="fp-media">
              <img src={`${API_URL}/uploads/${p.image_url}`} alt={p.title} loading="lazy" />
              <span className="fp-badge">{t("featured.featured")}</span>
            </div>

            <div className="fp-body">
              <div className="fp-row">
                <h3 className="fp-name" title={p.title}>
                  {p.title}
                </h3>

                <div className="fp-price">
                  {p.old_price && p.price && p.old_price > p.price && (
                    <span className="fp-old">
                      {formatPrice(p.old_price)} {t("properties.MAD")}
                    </span>
                  )}
                  <span className="fp-new">{renderPrice(p)}</span>
                </div>
              </div>

              <div className="fp-loc">
                <FaMapMarkerAlt className="fp-loc-ic" />
                <span className="fp-loc-txt">{p.location}</span>
                <span className="fp-pill">{t("featured.forSale")}</span>
              </div>

              <div className="fp-divider" />

              <div className="fp-meta">
                {p.area != null && (
                  <span className="fp-meta-item" title={t("featured.area")}>
                    <FaRulerCombined />
                    <b>{p.area}</b>
                    <small>m²</small>
                  </span>
                )}

                {p.bedrooms != null && (
                  <span className="fp-meta-item" title={t("featured.bedrooms")}>
                    <FaBed />
                    <b>{p.bedrooms}</b>
                  </span>
                )}

                {p.salon != null && (
                  <span className="fp-meta-item" title={t("featured.salon")}>
                    <FaCouch />
                    <b>{p.salon}</b>
                  </span>
                )}

                {p.bathrooms != null && (
                  <span className="fp-meta-item" title={t("featured.bathrooms")}>
                    <FaBath />
                    <b>{p.bathrooms}</b>
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
