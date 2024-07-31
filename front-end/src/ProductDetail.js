

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCart } from './CartContext';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faChevronLeft, faChevronRight, faMapMarkerAlt, faRulerCombined, faTag, faHome, faCheckCircle, faTimesCircle, faBed, faCouch, faBath, faUtensils, faBuilding, faCalendarAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './ProductDetail.css';
import { format } from 'date-fns';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const API_URL = process.env.REACT_APP_SERVER;
  const { dispatch } = useCart();

  useEffect(() => {
    axios.get(`${API_URL}/properties/${id}?lang=${i18n.language}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [id, API_URL, i18n.language]);

  if (!product) return <div>{t('properties.loading')}</div>;

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', product: { ...product[0], id: product[0].property_id } });
    setModalVisible(true);
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.length);
  };

  const showPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + product.length) % product.length);
  };

  const formatDate = (dateString) => {
    try {
      return format(new Date(dateString), 'yyyy-MM-dd');
    } catch {
      return dateString;
    }
  };

  const handleWhatsAppClick = () => {
    window.location.href = 'https://wa.me/212668550704';
  };

  const handleCallClick = () => {
    window.location.href = 'tel:0536348141';
  };

  return (
    <div className="ProductDetail">
      <button className="go-back-bb" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '5px' }} />
        <span className="go-back-text">{t('goBack.Go Back')}</span>
      </button>
      <div className={`content ${isArabic ? 'rtl' : 'ltr'}`}>
        <div className="image-g-container">
          {currentImageIndex > 0 && (
            <button className="scroll-button left" onClick={showPreviousImage}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
          )}
          <div className="image-g">
            <img
              src={`${API_URL}/uploads/${product[currentImageIndex].image_url}`}
              alt={product[0].title}
              className="property-i"
            />
          </div>
          {currentImageIndex < product.length - 1 && (
            <button className="scroll-button right" onClick={showNextImage}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          )}
        </div>
        <div className="product-details">
          <h1>{product[0].title}</h1>
          <p>{product[0].description}</p>
          <table className="details-table">
            <tbody>
              <tr>
                <td><FontAwesomeIcon icon={faHome} /><strong> {t('properties.type')}:</strong></td>
                <td>{t(`properties.${product[0].type}`)}</td>
              </tr>
              <tr>
                <td><FontAwesomeIcon icon={faMapMarkerAlt} /><strong> {t('properties.location')}:</strong></td>
                <td>{product[0].location}</td>
              </tr>
              {product[0].type !== 'floorplots' && (
                <>
                  <tr>
                    <td><FontAwesomeIcon icon={faBed} /><strong> {t('properties.bedrooms')}:</strong></td>
                    <td>{product[0].bedrooms}</td>
                  </tr>
                  <tr>
                    <td><FontAwesomeIcon icon={faCouch} /><strong> {t('properties.salon')}:</strong></td>
                    <td>{product[0].salon}</td>
                  </tr>
                  <tr>
                    <td><FontAwesomeIcon icon={faBath} /><strong> {t('properties.bathrooms')}:</strong></td>
                    <td>{product[0].bathrooms}</td>
                  </tr>
                  <tr>
                    <td><FontAwesomeIcon icon={faUtensils} /><strong> {t('properties.kitchen')}:</strong></td>
                    <td>{product[0].kitchen}</td>
                  </tr>
                </>
              )}
              <tr>
                <td><FontAwesomeIcon icon={faRulerCombined} /><strong> {t('properties.area')}:</strong></td>
                <td>{product[0].area} m²</td>
              </tr>
              
              {product[0].type === 'buy' && (
                <tr>
                  <td><FontAwesomeIcon icon={faBuilding} /><strong> {t('properties.floors')}:</strong></td>
                  <td>{product[0].floors}</td>
                </tr>
              )}
              {product[0].type === 'rent' && (
                <>
                  <tr>
                    <td><FontAwesomeIcon icon={product[0].available ? faCheckCircle : faTimesCircle} /><strong> {t('properties.status')}:</strong></td>
                    <td>{product[0].available ? t('properties.available') : t('properties.notAvailable')}</td>
                  </tr>
                  {!product[0].available && product[0].availability_date && (
                    <tr>
                      <td><FontAwesomeIcon icon={faCalendarAlt} /><strong> {t('properties.availabilityDate')}:</strong></td>
                      <td>{formatDate(product[0].availability_date)}</td>
                    </tr>
                  )}
                </>
              )}
              <tr>
                <td><FontAwesomeIcon icon={faTag} /><strong> {t('properties.price')}:</strong></td>
                <td>
                  {product[0].type === 'floorplots' 
                    ? `${product[0].price} ${t('properties.MAD')} ${t('properties.pricePerSquareMeter')}`
                    : `${product[0].price} ${t('properties.MAD')}`}
                </td>
              </tr>
            </tbody>
          </table>
          {isArabic ? (<button onClick={addToCart} className="btn">
            <FontAwesomeIcon icon={faPhone} style={{ marginLeft: '10px' }} />
            {t('contact.contactUs')}
          </button>) : (<button onClick={addToCart} className="btn">
            <FontAwesomeIcon icon={faPhone} style={{ marginRight: '10px' }} />
            {t('contact.contactUs')}
          </button>)}
          
        </div>
      </div>

      {isModalVisible && (
        <div className="modal">
          <div className="modal-content">
            <h2>{t('contact.contactUs')}</h2>
            <button className="modal-btn-w" onClick={handleWhatsAppClick}>
              <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: '10px' }} />
              WhatsApp
            </button>
            <button className="modal-btn" onClick={handleCallClick}>
              <FontAwesomeIcon icon={faPhone} style={{ marginRight: '10px' }} />
              Call
            </button>
            <button className="modal-close" onClick={() => setModalVisible(false)}>{t('contact.close')}</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
