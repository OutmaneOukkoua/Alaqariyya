import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import "./ClientReviews.css";

function Stars({ value = 5 }) {
  const { t } = useTranslation();
  const v = Math.max(0, Math.min(5, Math.round(value)));

  return (
    <div
      className="cr-stars"
      aria-label={t("clientReviews.ratingAria", { value: v })}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`cr-star ${i < v ? "on" : ""}`}>★</span>
      ))}
    </div>
  );
}

function Avatar({ name = "" }) {
  const initials = (name || "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

  return <div className="cr-avatar" aria-hidden="true">{initials || "G"}</div>;
}

export default function ClientReviews({ isArabic }) {
  const { t } = useTranslation();

  // ✅ reviews: لا نترجمها (كما طلبت)
  const reviews = useMemo(
    () => [
      { name: "kechaf ismail", rating: 5, time: isArabic ? "قبل سنة" : "il y a un an", text: "Service top, recommandé fortement" },
      { name: "Lemgharni", rating: 5, time: isArabic ? "قبل سنة" : "il y a un an", text: "Bonne service" },
      { name: "EL-MAHDI SAAD", rating: 5, time: isArabic ? "قبل سنة" : "il y a un an", text: "Bon service" },
      { name: "Abir Rouass", rating: 5, time: isArabic ? "قبل سنة" : "il y a un an", text: "Service de haute qualité et excellent accueil. Je vous le recommande." },
      { name: "Salih Rifinyo", rating: 5, time: isArabic ? "قبل سنة" : "il y a un an", text: "Le traitement du personnel était parfait, même la maison était propre et la réponse aux demandes était rapide." },
      { name: "Depay Mem", rating: 5, time: isArabic ? "قبل سنة" : "il y a un an", text: "Bon service, merci" },
      { name: "Abderrazak Akachar", rating: 5, time: isArabic ? "قبل سنة" : "il y a un an", text: "L'une des meilleures agences que je connaisse" },
      { name: "WALKER FF デ", rating: 5, time: isArabic ? "قبل سنة" : "il y a un an", text: "SERVICE M39OL BJAHD" },
      { name: "Atelier MecaHydrau", rating: 5, time: isArabic ? "قبل سنة" : "il y a un an", text: "Un endroit tout neuf." },
      { name: "mohamed benaini", rating: 5, time: isArabic ? "قبل سنة" : "il y a un an", text: "Service meilleur et professionnel" },
      { name: "Points Plus", rating: 5, time: isArabic ? "قبل سنة" : "il y a un an", text: "Service N9ii." },
      { name: "Hamza B.D", rating: 5, time: isArabic ? "قبل سنة" : "il y a un an", text: "SERVICE de qualité supérieure" },
    ],
    [isArabic]
  );

  const getPerPage = () => {
    const w = window.innerWidth;
    if (w <= 620) return 1;
    if (w <= 980) return 2;
    return 3;
  };

  const [perPage, setPerPage] = useState(() => (typeof window !== "undefined" ? getPerPage() : 3));
  const [page, setPage] = useState(0);

  useEffect(() => {
    const onResize = () => setPerPage(getPerPage());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const pages = Math.max(1, Math.ceil(reviews.length / perPage));

  useEffect(() => {
    const id = setInterval(() => setPage((p) => (p + 1) % pages), 5000);
    return () => clearInterval(id);
  }, [pages]);

  useEffect(() => {
    setPage((p) => Math.min(p, Math.max(0, pages - 1)));
  }, [perPage, pages]);

  const start = page * perPage;
  const current = reviews.slice(start, start + perPage);

  return (
    <section
      className={`cr-wrap ${isArabic ? "rtl" : "ltr"}`}
      aria-label={t("clientReviews.sectionAria")}
    >
      <div className="cr-container">
        <div className="cr-head">
          <div className="cr-head-left">
            <h2 className="cr-title">{t("clientReviews.title")}</h2>
          </div>

          <div className="cr-head-right">
            <div className="cr-score">
              <div className="cr-score-num">4.8</div>
              <Stars value={5} />
            </div>
          </div>
        </div>

        <div className="cr-row">
          {current.map((r, idx) => (
            <article className="cr-card" key={`${r.name}-${idx}`}>
              <div className="cr-card-top">
                <div className="cr-user">
                  <Avatar name={r.name} />
                  <div className="cr-user-meta">
                    <div className="cr-name">{r.name}</div>
                    <div className="cr-time">{r.time}</div>
                  </div>
                </div>

                <div className="cr-rating">
                  <Stars value={r.rating} />
                </div>
              </div>

              <p className="cr-text">{r.text}</p>
            </article>
          ))}
        </div>

        <div className="cr-controls">
          <button
            className="cr-nav"
            onClick={() => setPage((p) => (p - 1 + pages) % pages)}
            aria-label={t("clientReviews.prevAria")}
          >
            {t("clientReviews.previous")}
          </button>

          <div className="cr-dots" aria-label={t("clientReviews.paginationAria")}>
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                className={`cr-dot ${i === page ? "active" : ""}`}
                onClick={() => setPage(i)}
                aria-label={t("clientReviews.goToPageAria", { page: i + 1 })}
              />
            ))}
          </div>

          <button
            className="cr-nav"
            onClick={() => setPage((p) => (p + 1) % pages)}
            aria-label={t("clientReviews.nextAria")}
          >
            {t("clientReviews.next")}
          </button>
        </div>

        <div className="cr-linkWrap">
          <a
            className="cr-link"
            href="https://maps.app.goo.gl/cGbmEf7mVCzQJ9yWA"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("clientReviews.viewAllLink")}
          </a>
        </div>
      </div>
    </section>
  );
}
