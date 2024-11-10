import React from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faTrashAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const Cart = () => {
  const { t, i18n } = useTranslation();
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_SERVER;

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', id });
  };

  // Function to handle redirection to product detail page
  const goToProductDetail = (id) => {
    navigate(`/product/${id}`);
  };

  // Determine if the current language is Arabic
  const isArabic = i18n.language === 'ar';

  return (
    <div className={`Cart ${isArabic ? 'rtl' : 'ltr'}`} key={i18n.language}>
      <div className="cart-header">
        <h2>{t('Cart.yourCart')}</h2>
      </div>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>{t('Cart.cartEmpty')}</p>
        </div>
      ) : (
        <div className="cart-grid">
          {cart.map((product) => (
            <div className="cart-card" key={product.id}>
              <div className="cart-card-image" onClick={() => goToProductDetail(product.id)}>
                <img
                  src={`${API_URL}/uploads/${product.image_url}`}
                  alt={product.title}
                  className="cart-image"
                  loading="lazy" /* Improves performance */
                />
                <div className="overlay">
                  <FontAwesomeIcon icon={faHeart} className="heart-icon" />
                </div>
              </div>
              <div className="cart-card-content">
                <h3 className="cart-title" onClick={() => goToProductDetail(product.id)}>
                  {product.title}
                </h3>
                <p className="cart-price">
                  {product.price} {t('properties.MAD')}
                </p>
                <button className="remove-button" onClick={() => removeFromCart(product.id)}>
                  <FontAwesomeIcon icon={faTrashAlt} className="remove-icon" />
                  {t('Cart.remove')}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
