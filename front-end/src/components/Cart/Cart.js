// components/Cart/Cart.jsx
import React, { useEffect, useMemo, useState } from "react";
import { useCart } from "../../contexts/CartContext";
import { useNavigate, useParams } from "react-router-dom";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import axios from "axios";

const Cart = () => {
  const { t, i18n } = useTranslation();
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();
  const { lng } = useParams();

  const safeLng = lng || i18n.language || "en";
  const isArabic = safeLng === "ar";
  const API_URL = process.env.REACT_APP_SERVER;

  const [titlesById, setTitlesById] = useState({}); // { [id]: title }

  const ids = useMemo(() => cart.map((x) => String(x.id)).filter(Boolean), [cart]);

  useEffect(() => {
    let cancelled = false;

    const fetchTitles = async () => {
      if (!ids.length) {
        setTitlesById({});
        return;
      }

      try {
        const results = await Promise.all(
          ids.map(async (id) => {
            try {
              const res = await axios.get(`${API_URL}/properties/${id}?lang=${safeLng}`);
              const main = Array.isArray(res.data) ? res.data[0] : res.data;
              return [String(id), main?.title || ""];
            } catch {
              return [String(id), ""];
            }
          })
        );

        if (cancelled) return;

        const map = {};
        for (const [id, title] of results) {
          if (title) map[id] = title;
        }
        setTitlesById(map);
      } catch {
        if (!cancelled) setTitlesById({});
      }
    };

    fetchTitles();
    return () => {
      cancelled = true;
    };
  }, [API_URL, ids, safeLng]);

  // ✅ (مهم) مزامنة i18n مع لغة الرابط
  useEffect(() => {
    if (safeLng && i18n.language !== safeLng) i18n.changeLanguage(safeLng);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [safeLng]);

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", id: String(id) });
  };

  const goToProductDetail = (id) => {
    navigate(`/${safeLng}/product/${id}`);
  };

  return (
    <div className={`Cart ${isArabic ? "rtl" : "ltr"}`} key={safeLng}>
      <div className="cart-header">
        <h2>{t("Cart.yourCart")}</h2>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>{t("Cart.cartEmpty")}</p>
        </div>
      ) : (
        <div className="cart-grid">
          {cart.map((item) => {
            const id = String(item.id);
            const title = titlesById[id] || item.title || ""; // fallback لو عندك بيانات قديمة

            return (
              <div className="cart-card" key={id}>
                <div className="cart-card-image" onClick={() => goToProductDetail(id)}>
                  <img
                    src={`${API_URL}/uploads/${item.image_url}`}
                    alt={title}
                    className="cart-image"
                    loading="lazy"
                  />
                  <div className="overlay">
                    <FontAwesomeIcon icon={faHeart} className="heart-icon" />
                  </div>
                </div>

                <div className="cart-card-content">
                  <h3 className="cart-title" onClick={() => goToProductDetail(id)}>
                    {title || t("productDetail.propertyNotFound")}
                  </h3>

                  {item.price !== null && item.price !== undefined && (
                    <p className="cart-price">
                      {item.price} {t("properties.MAD")}
                    </p>
                  )}

                  <button className="remove-button" onClick={() => removeFromCart(id)}>
                    <FontAwesomeIcon icon={faTrashAlt} className="remove-icon" />
                    {t("Cart.remove")}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Cart;
