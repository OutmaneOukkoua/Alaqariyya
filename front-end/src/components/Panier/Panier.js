// components/Panier/Panier.jsx
import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import "./Panier.css";

function Panier({ items }) {
  const { t, i18n } = useTranslation();
  const API_URL = process.env.REACT_APP_SERVER;

  const safeLng = i18n.language || "en";
  const isArabic = safeLng === "ar";

  const [titlesById, setTitlesById] = useState({});
  const ids = useMemo(() => items.map((x) => String(x.id)).filter(Boolean), [items]);

  useEffect(() => {
    let cancelled = false;

    const fetchTitles = async () => {
      if (!ids.length) {
        setTitlesById({});
        return;
      }

      const results = await Promise.all(
        ids.map(async (id) => {
          try {
            const res = await axios.get(`${API_URL}/properties/${id}?lang=${safeLng}`);
            const main = Array.isArray(res.data) ? res.data[0] : res.data;
            return [id, main?.title || ""];
          } catch {
            return [id, ""];
          }
        })
      );

      if (cancelled) return;

      const map = {};
      for (const [id, title] of results) if (title) map[id] = title;
      setTitlesById(map);
    };

    fetchTitles();
    return () => {
      cancelled = true;
    };
  }, [API_URL, ids, safeLng]);

  return (
    <div className={`panier ${isArabic ? "rtl" : "ltr"}`}>
      <h2>{t("panier.title")}</h2>

      {items.length === 0 ? (
        <p className="panier-empty">{t("panier.empty")}</p>
      ) : (
        <ul className="panier-list">
          {items.map((item) => {
            const id = String(item.id);
            const title = titlesById[id] || item.title || "";

            return (
              <li key={id} className="panier-item">
                <img
                  src={`${API_URL}/uploads/${item.image_url}`}
                  alt={title}
                  className="panier-image"
                  loading="lazy"
                />

                <div className="panier-info">
                  <h3 className="panier-title">{title || t("productDetail.propertyNotFound")}</h3>
                  {item.price !== null && item.price !== undefined && (
                    <p className="panier-price">
                      {item.price} {t("properties.MAD")}
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Panier;
