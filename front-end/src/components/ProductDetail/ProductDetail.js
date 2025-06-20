import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, useLocation, redirect } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../../contexts/CartContext';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faRulerCombined,
  faTag,
  faHome,
  faTimes,
  faCheckCircle,
  faTimesCircle,
  faBed,
  faCouch,
  faBath,
  faUtensils,
  faBuilding,
  faCalendarAlt,
  faPhone,
  faHeart,
  faShareAlt,
  faUser,
  faEnvelope,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './ProductDetail.css';
import { format } from 'date-fns';
import { FaSpinner } from 'react-icons/fa';
import Footer from '../Footer/Footer';
import ReactMarkdown from 'react-markdown';


const formatPrice = (value) => new Intl.NumberFormat('de-DE').format(value);

function useOutsideClick(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
}

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation(); // Add this line
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isImageModalVisible, setImageModalVisible] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const API_URL = process.env.REACT_APP_SERVER;
  const { dispatch } = useCart();
  const modalRef = useRef(null);

  useOutsideClick(modalRef, () => setImageModalVisible(false));

  useEffect(() => {
    window.scrollTo(0, 0);
    // Fetch product details
    const fetchProduct = async () => {
      setLoading(true); // Start loading
      try {
        const response = await axios.get(`${API_URL}/properties/${id}?lang=${i18n.language}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchProduct();
  }, [id, API_URL, i18n.language]);

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', product: { ...product[0], id: product[0].property_id } });
    setIsFavorite(true);
  };

  const toggleFavorite = () => {
    if (!isFavorite) {
      addToCart();
    } else {
      // handle removing from cart if needed
    }
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

  const handleEmailClick = () => {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=alaqariyya@gmail.com', '_blank');
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleImageModal = () => {
    setImageModalVisible(!isImageModalVisible);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: product[0].title,
          text: product[0].description,
          url: window.location.href,
        })
        .then(() => {
          // Record the share in the database
          axios
            .post(`${API_URL}/api/share`, { propertyId: product[0].property_id })
            .then(() => {
              console.log('Share recorded successfully');
            })
            .catch((error) => {
              console.error('Error recording share:', error);
            });
        })
        .catch((error) => {
          console.error('Error with the sharing API:', error);
        });
    } else {
      alert(
        'Your browser does not support sharing. You can manually copy the URL: ' + window.location.href
      );
    }
  };

  const getMapSrc = (exactAddress) => {
    return `https://www.google.com/maps?q=${encodeURIComponent(exactAddress)}&output=embed&maptype=satellite`;
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => {
      if (isArabic) {
        return prevIndex === 0 ? product.length - 1 : prevIndex - 1;
      } else {
        return prevIndex === product.length - 1 ? 0 : prevIndex + 1;
      }
    });
  };
  
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => {
      if (isArabic) {
        return prevIndex === product.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? product.length - 1 : prevIndex - 1;
      }
    });
  };

  // Parse search parameters
  const queryParams = new URLSearchParams(location.search);
  const searchType = queryParams.get('type');
  const searchLocation = queryParams.get('location');
  const searchPage = queryParams.get('page') || 1;

  // Map searchType to display name
  const typeDisplayNames = {
    buy: t('properties.HausesForBuy'),
    apartments: t('properties.apartments'),
    floorplots: t('properties.floorplots'),
    Commercialgarages: t('properties.Commercialgarages'),
    requests: t('properties.HausesForBuy'),
    apartmentsReq: t('properties.apartments'),
    floorplotsReq: t('properties.floorplots'),
    CommercialgaragesReq: t('properties.Commercialgarages'),
    CommercialgaragesRent: t('properties.CommercialgaragesRent'),
    regularRent: t('properties.regularRent'),
    rent: t('properties.furnishedRent'),
  };

  if (loading) {
    // Display spinner while loading
    return (
      <div className="ProductDetail">
        <div className="loading">
          <FaSpinner className="spinner" />
          <p>{t('properties.Loading')}</p>
        </div>
      </div>
    );
  }

  return (
    <>
    <div class="page-wrapper">
      <div className="ProductDetail">
        {/* Breadcrumb */}
        <div className="breadcrumb-container">
          <nav className={`breadcrumb ${isArabic ? 'rtl' : 'ltr'}`}>
            <span
              onClick={() => {
                navigate('/'); // Force reload when navigating to the homepage
              }}
            >
              {t('header.Home')}
            </span>{' '}
            &gt;{' '}
            {searchType && (
            <>
              <span
                onClick={() => {
                  const searchParams = new URLSearchParams();
                  searchParams.set('type', searchType);
                  searchParams.set('page', searchPage);
                  if (searchLocation) {
                    searchParams.set('location', searchLocation);
                  }
                  navigate(`/?${searchParams.toString()}`);
                }}
              >
                {typeDisplayNames[searchType]}
              </span>{' '}
              &gt;{' '}
            </>
            )}
            <span>{product[0].title}</span>
          </nav>
        </div>
        <div className={`product-container ${isArabic ? 'rtl' : 'ltr'}`}>
          <div className="left-column">
            {/* Image Gallery */}
            <div className="image-gallery">
              <div className="main-image">
                {product.length > 1 && (
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    className="nav-arrow left-arrow"
                    onClick={handleNextImage}
                  />
                )}
                <img
                  src={`${API_URL}/uploads/${product[currentImageIndex].image_url}`}
                  alt={product[0].title}
                  onDoubleClick={toggleImageModal}
                />
                {product.length > 1 && (
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="nav-arrow right-arrow"
                    onClick={handlePrevImage}
                  />
                )}
                <FontAwesomeIcon
                  icon={faHeart}
                  onClick={toggleFavorite}
                  className="heartt-icon"
                  style={{ color: isFavorite ? 'red' : 'white' }}
                />
              </div>
              {product.length > 1 && (
                <div className="thumbnails">
                  {product.map((img, index) => (
                    <img
                      key={index}
                      src={`${API_URL}/uploads/${img.image_url}`}
                      alt=""
                      onClick={() => setCurrentImageIndex(index)}
                      className={index === currentImageIndex ? 'active' : ''}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="product-info">
              <h1>{product[0].title}</h1>
              <div className="product-price">
                {product[0].old_price && product[0].old_price > product[0].price && (
                  <span style={{ textDecoration: 'line-through', color: 'red', margin: '10px' }}>
                    {formatPrice(product[0].old_price)} {t('properties.MAD')}
                  </span>
                )}
                <span>
                  {formatPrice(product[0].price)} {t('properties.MAD')}
                </span>
              </div>
              <div className="product-meta">
                <span>
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> {product[0].location}
                </span>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> {formatDate(product[0].date_posted)}
                </span>
              </div>

              {/* Description Section */}
              <section className="description-section">
                <h2>{t('properties.description')}</h2>
                {/* <p className="description-text">{product[0].description}</p> */}
                <ReactMarkdown>{product[0].description}</ReactMarkdown>

              </section>

              {/* Details Section */}
              <section className="details-section">
                <h2>{t('properties.details')}</h2>
                <div className="details-grid">
                  {/* Property Type */}
                  <div className="detail-card">
                    <FontAwesomeIcon icon={faHome} className="detail-icon" />
                    <div className="detail-text">
                      <strong>{t('properties.type')}</strong>
                      {t(`properties.${product[0].type}`)}
                    </div>
                  </div>

                  {/* Location */}
                  <div className="detail-card">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="detail-icon" />
                    <div className="detail-text">
                      <strong>{t('properties.location')}</strong>
                      {product[0].location}
                    </div>
                  </div>

                  {/* Bedrooms */}
                  {product[0].type !== 'floorplots' && product[0].type !== 'Commercialgarages' && product[0].type !== 'CommercialgaragesRent' &&  product[0].type !== 'requests' && product[0].type !== 'apartmentsReq' && product[0].type !== 'floorplotsReq' && product[0].type !== 'CommercialgaragesReq' &&(
                    <>
                      <div className="detail-card">
                        <FontAwesomeIcon icon={faBed} className="detail-icon" />
                        <div className="detail-text">
                          <strong>{t('properties.bedrooms')}</strong>
                          {product[0].bedrooms}
                        </div>
                      </div>

                      {/* Salon */}
                      <div className="detail-card">
                        <FontAwesomeIcon icon={faCouch} className="detail-icon" />
                        <div className="detail-text">
                          <strong>{t('properties.salon')}</strong>
                          {product[0].salon}
                        </div>
                      </div>

                      {/* Bathrooms */}
                      <div className="detail-card">
                        <FontAwesomeIcon icon={faBath} className="detail-icon" />
                        <div className="detail-text">
                          <strong>{t('properties.bathrooms')}</strong>
                          {product[0].bathrooms}
                        </div>
                      </div>

                      {/* Kitchen */}
                      <div className="detail-card">
                        <FontAwesomeIcon icon={faUtensils} className="detail-icon" />
                        <div className="detail-text">
                          <strong>{t('properties.kitchen')}</strong>
                          {product[0].kitchen}
                        </div>
                      </div>
                    </>
                  )}

                  {/* Area */}
                  <div className="detail-card">
                    <FontAwesomeIcon icon={faRulerCombined} className="detail-icon" />
                    <div className="detail-text">
                      <strong>{t('properties.area')}</strong>
                      {product[0].area} m²
                    </div>
                  </div>

                  {/* Floors */}
                  {(product[0].type === 'buy' || product[0].type === 'apartments' || product[0].type === 'regularRent' ) && (
                    <div className="detail-card">
                      <FontAwesomeIcon icon={faBuilding} className="detail-icon" />
                      <div className="detail-text">
                        <strong>{t('properties.floors')}</strong>
                        {product[0].floors}
                      </div>
                    </div>
                  )}

                  {/* Availability */}
                  {product[0].type === 'rent' && (
                    <>
                      <div className="detail-card">
                        <FontAwesomeIcon
                          icon={product[0].available ? faCheckCircle : faTimesCircle}
                          className="detail-icon"
                          style={{ color: product[0].available ? 'green' : 'red' }}
                        />
                        <div className="detail-text">
                          <strong>{t('properties.status')}</strong>
                          {product[0].available
                            ? t('properties.available')
                            : t('properties.notAvailable')}
                        </div>
                      </div>

                      {!product[0].available && product[0].availability_date && (
                        <div className="detail-card">
                          <FontAwesomeIcon icon={faCalendarAlt} className="detail-icon" />
                          <div className="detail-text">
                            <strong>{t('properties.availabilityDate')}</strong>
                            {formatDate(product[0].availability_date)}
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  {/* Price */}
                  <div className="detail-card">
                    <FontAwesomeIcon icon={faTag} className="detail-icon" />
                    <div className="detail-text">
                      <strong>{t('properties.price')}</strong>
                      {product[0].old_price && product[0].old_price > product[0].price && (
                        <span
                          style={{ textDecoration: 'line-through', color: 'red', margin: '10px' }}
                        >
                          {formatPrice(product[0].old_price)} {t('properties.MAD')}
                        </span>
                      )}
                      <span>
                        {product[0].type === 'floorplots' || product[0].type === 'floorplotsReq'
                          ? `${formatPrice(product[0].price)} ${t('properties.MAD')} ${t('properties.pricePerSquareMeter')}`
                          : `${formatPrice(product[0].price)} ${t('properties.MAD')}`}
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Location Section */}
              <section className="location-section">
                <h2>{t('properties.location')}</h2>
                <p className="exact-address">{product[0].exact_address}</p>
                <div className="map-container">
                  <iframe
                    src={getMapSrc(product[0].exact_address)}
                    width="100%"
                    height="300"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                    title="Property Location"
                  ></iframe>
                </div>
              </section>
            </div>
          </div>

          <div className="right-column">
            {/* Seller Info */}
            <div className="seller-info">
              <div className="seller-profile">
                <div className="seller-avatar">
                  <FontAwesomeIcon icon={faUser} size="1x" />
                </div>
                <div className="seller-name">{t('seller.defaultName')}</div>
              </div>
              <button onClick={toggleModal} className="btn contact-btn">
                <FontAwesomeIcon icon={faPhone} style={{ marginLeft: '10px', marginRight: '10px' }} />
                {t('contact.contactUs')}
              </button>
              <button onClick={handleEmailClick} className="btn email-btn">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ marginLeft: '10px', marginRight: '10px' }}
                />
                {t('contact.sendEmail')}
              </button>
              <button onClick={handleShare} className="btn share-btn">
                <FontAwesomeIcon
                  icon={faShareAlt}
                  style={{ marginLeft: '10px', marginRight: '10px' }}
                />
                {t('contact.share')}
              </button>
            </div>
          </div>
        </div>

        {isModalVisible && (
          <div className="modal">
            <div className="modal-content">
              <h2>{t('seller.defaultName')}</h2>
              <button className="modal-btn-w" onClick={handleWhatsAppClick}>
                <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: '10px' }} />
                WhatsApp
              </button>
              <button className="modal-btn" onClick={handleCallClick}>
                <FontAwesomeIcon icon={faPhone} style={{ marginRight: '10px' }} />
                {t('contact.phone')}
              </button>
              <button className="modal-close" onClick={toggleModal}>
                {t('contact.close')}
              </button>
            </div>
          </div>
        )}

        {isImageModalVisible && (
          <div className="image-modal">
            <div className="image-modal-content" ref={modalRef}>
              <FontAwesomeIcon icon={faTimes} className="close-modal" onClick={toggleImageModal} />

              {product.length > 1 && (
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="modal-nav-arrow modal-left-arrow"
                  onClick={handleNextImage}
                />
              )}

              <img
                src={`${API_URL}/uploads/${product[currentImageIndex].image_url}`}
                alt={product[0].title}
                className="enlarged-image"
              />

              {product.length > 1 && (
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="modal-nav-arrow modal-right-arrow"
                  onClick={handlePrevImage}
                />
              )}

              <FontAwesomeIcon
                icon={faHeart}
                onClick={toggleFavorite}
                className="modal-heart-icon"
                style={{ color: isFavorite ? 'red' : 'white' }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}

export default ProductDetail;
