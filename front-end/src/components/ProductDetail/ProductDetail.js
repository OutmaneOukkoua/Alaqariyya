// ProductDetail.js
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useCart } from "../../contexts/CartContext";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faRulerCombined,
  faTag,
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
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./ProductDetail.css";
import { format } from "date-fns";
import { FaSpinner } from "react-icons/fa";
import Footer from "../Footer/Footer";
import ReactMarkdown from "react-markdown";
import SEO from "../../SEO/SEO";

const formatPrice = (value) => new Intl.NumberFormat("de-DE").format(value);

function useOutsideClick(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) callback();
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, callback]);
}

function ProductDetail() {
  const { lng, id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isImageModalVisible, setImageModalVisible] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  // smooth fade
  const [mainImgLoaded, setMainImgLoaded] = useState(true);
  const [modalImgLoaded, setModalImgLoaded] = useState(true);

  const { t, i18n } = useTranslation();

  // ✅ Always use URL lang if present
  const safeLng = lng || i18n.language || "en";
  const isArabic = safeLng === "ar";

  const API_URL = process.env.REACT_APP_SERVER;
  const { dispatch } = useCart();

  const modalRef = useRef(null);
  useOutsideClick(modalRef, () => setImageModalVisible(false));

  /**
   * ✅ FIX (no full refresh):
   * - Wait for changeLanguage to finish BEFORE fetching / rendering
   * - Prevent old requests from overwriting new language (cancel previous request)
   * - Block render while language is syncing
   */
  const [langReady, setLangReady] = useState(true);
  const requestRef = useRef(null);

  // Sync i18n with URL language (and wait for it)
  useEffect(() => {
    let alive = true;

    const sync = async () => {
      if (!safeLng || i18n.language === safeLng) {
        if (alive) setLangReady(true);
        return;
      }

      if (alive) setLangReady(false);

      try {
        await i18n.changeLanguage(safeLng);
      } finally {
        if (alive) setLangReady(true);
      }
    };

    sync();

    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [safeLng]);

  useEffect(() => {
    // Don't fetch until the language is fully applied
    if (!langReady) return;

    window.scrollTo(0, 0);

    // Cancel previous request if any
    if (requestRef.current) {
      requestRef.current.abort();
    }
    const controller = new AbortController();
    requestRef.current = controller;

    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${API_URL}/properties/${id}?lang=${safeLng}`,
          { signal: controller.signal }
        );
        setProduct(response.data);
        setCurrentImageIndex(0);
      } catch (error) {
        // ignore abort errors
        if (error?.name === "CanceledError" || error?.name === "AbortError") return;

        console.error("Error fetching product details:", error);
        setProduct(null);
      } finally {
        // only end loading if this request is still active
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    fetchProduct();

    return () => {
      controller.abort();
    };
  }, [id, API_URL, safeLng, langReady]);

  const main = product?.[0];
  const isSold = !!(main?.sold || main?.is_sold);
  const type = main?.type;

  const hideSoldStatusTypes = new Set([
    // "requests",
    // "apartmentsReq",
    // "floorplotsReq",
    // "CommercialgaragesReq",
    "CommercialgaragesRent",
    "regularRent",
    "rent",
  ]);

  const shouldShowSoldStatusCard = !hideSoldStatusTypes.has(type);

  const addToCart = () => {
    if (!product?.[0]) return;
    const p = product[0];

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        productId: p.property_id,
        image_url: p.image_url,
        price: p.price,
      },
    });

    setIsFavorite(true);
  };

  const toggleFavorite = () => {
    if (isSold) return;
    if (!isFavorite) addToCart();
  };

  const formatDate = (dateString) => {
    try {
      return format(new Date(dateString), "yyyy-MM-dd");
    } catch {
      return dateString;
    }
  };

  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/212700058111";
  };

  const handleCallClick = () => {
    window.location.href = "tel:0700058111";
  };

  const handleEmailClick = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=alaqariyya@gmail.com",
      "_blank"
    );
  };

  const toggleModal = () => setModalVisible((v) => !v);
  const toggleImageModal = () => setImageModalVisible((v) => !v);

  const handleShare = () => {
    if (!product?.[0]) return;

    if (navigator.share) {
      navigator
        .share({
          title: product[0].title,
          text: product[0].description,
          url: window.location.href,
        })
        .then(() => {
          axios
            .post(`${API_URL}/api/share`, { propertyId: product[0].property_id })
            .then(() => console.log("Share recorded successfully"))
            .catch((error) => console.error("Error recording share:", error));
        })
        .catch((error) => console.error("Error with the sharing API:", error));
    } else {
      alert(
        `${t("productDetail.shareNotSupported")}\n${t("productDetail.copyUrl")}: ${window.location.href}`
      );
    }
  };

  const getMapSrc = (exactAddress) =>
    `https://www.google.com/maps?q=${encodeURIComponent(
      exactAddress
    )}&output=embed&maptype=satellite`;

  const handlePrevImage = useCallback(() => {
    if (!product?.length) return;
    setCurrentImageIndex((i) => (i === 0 ? product.length - 1 : i - 1));
  }, [product]);

  const handleNextImage = useCallback(() => {
    if (!product?.length) return;
    setCurrentImageIndex((i) => (i === product.length - 1 ? 0 : i + 1));
  }, [product]);

  useEffect(() => {
    setMainImgLoaded(false);
    setModalImgLoaded(false);
  }, [currentImageIndex]);

  const queryParams = new URLSearchParams(location.search);
  const searchType = queryParams.get("type");
  const searchMode = queryParams.get("mode");
  const searchCityId = queryParams.get("city_id");
  const searchPage = queryParams.get("page") || 1;
  const searchSeed = queryParams.get("seed");

  const typeDisplayNames = {
    all_buy: t("properties.all"),
    all_rent: t("productDetail.allRent"),
    // all_requests: t("productDetail.allRequests"),

    buy: t("properties.HausesForBuy"),
    apartments: t("properties.apartments"),
    floorplots: t("properties.floorplots"),
    Commercialgarages: t("properties.Commercialgarages"),

    // requests: t("properties.HausesForBuy"),
    // apartmentsReq: t("properties.apartments"),
    // floorplotsReq: t("properties.floorplots"),
    // CommercialgaragesReq: t("properties.Commercialgarages"),

    CommercialgaragesRent: t("properties.CommercialgaragesRent"),
    regularRent: t("properties.regularRent"),
    rent: t("properties.furnishedRent"),
  };

  // ✅ Block rendering while language is switching (prevents "snap back")
  if (!langReady || loading) {
    return (
      <div className="ProductDetail">
        <div className="loading">
          <FaSpinner className="spinner" />
          <p>{t("properties.Loading")}</p>
        </div>
      </div>
    );
  }

  if (!product || !product.length) {
    return (
      <>
        <div className="ProductDetail">
          <div className="no-results">
            <p>{t("productDetail.propertyNotFound")}</p>

            <button type="button" onClick={() => navigate(`/${safeLng}`)}>
              {t("productDetail.backToHome")}
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const currentImgSrc = `${API_URL}/uploads/${product[currentImageIndex].image_url}`;

  return (
    <>
      <SEO
        title={`${product[0].title} - ALAQARIYYA العقارية`}
        description={(product[0].description || "").slice(0, 160)}
        path={`/${safeLng}/product/${id}`}
        image={`${API_URL}/uploads/${product[0]?.image_url}`}
      />
      <div className="page-wrapper">
        <div className="ProductDetail">
          {/* Breadcrumb */}
          <div className="breadcrumb-container">
            <nav className={`breadcrumb ${isArabic ? "rtl" : "ltr"}`}>
              <span onClick={() => navigate(`/${safeLng}`)}>{t("header.Home")}</span> &gt;{" "}
              {searchType && (
                <>
                  <span
                    onClick={() => {
                      const sp = new URLSearchParams();
                      sp.set("type", searchType);
                      sp.set("page", searchPage);

                      if (searchMode) sp.set("mode", searchMode);
                      if (searchCityId) sp.set("city_id", searchCityId);
                      if (searchSeed) sp.set("seed", searchSeed);

                      navigate(`/${safeLng}/?${sp.toString()}`);
                    }}
                  >
                    {typeDisplayNames[searchType] || t("productDetail.searchResults")}
                  </span>{" "}
                  &gt;{" "}
                </>
              )}
              <span>{product[0].title}</span>
            </nav>
          </div>

          <div className={`product-container ${isArabic ? "rtl" : "ltr"}`}>
            <div className="left-column">
              {/* Image Gallery */}
              <div className="image-gallery">
                <div className={`main-image ${isSold ? "sold-image" : ""}`}>
                  {product.length > 1 && (
                    <button
                      type="button"
                      className={`nav-btn ${isArabic ? "right" : "left"}`}
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={handlePrevImage}
                      aria-label={t("productDetail.previousImage")}
                    >
                      <FontAwesomeIcon icon={isArabic ? faChevronRight : faChevronLeft} />
                    </button>
                  )}

                  <img
                    src={currentImgSrc}
                    alt={product[0].title}
                    onDoubleClick={toggleImageModal}
                    draggable={false}
                    onMouseDown={(e) => e.preventDefault()}
                    onLoad={() => setMainImgLoaded(true)}
                    className={`main-photo ${mainImgLoaded ? "is-visible" : "is-hidden"}`}
                  />

                  {isSold && (
                    <div className="sold-overlay-detail">
                      <span className="sold-badge-detail">{t("productDetail.soldBadge")}</span>
                    </div>
                  )}

                  {product.length > 1 && (
                    <button
                      type="button"
                      className={`nav-btn ${isArabic ? "left" : "right"}`}
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={handleNextImage}
                      aria-label={t("productDetail.nextImage")}
                    >
                      <FontAwesomeIcon icon={isArabic ? faChevronLeft : faChevronRight} />
                    </button>
                  )}

                  <FontAwesomeIcon
                    icon={faHeart}
                    onClick={toggleFavorite}
                    className="heartt-icon"
                    style={{
                      color: isFavorite ? "#dc2626" : "grey",
                      opacity: isSold ? 0.5 : 1,
                    }}
                    title={
                      isSold ? t("productDetail.soldTooltip") : t("productDetail.addToFavorites")
                    }
                  />
                </div>

                {product.length > 1 && (
                  <div className="thumbnails">
                    {product.map((img, index) => (
                      <img
                        key={index}
                        src={`${API_URL}/uploads/${img.image_url}`}
                        alt=""
                        draggable={false}
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => setCurrentImageIndex(index)}
                        className={index === currentImageIndex ? "active" : ""}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="product-info">
                <h1 className="product-title">
                  {product[0].title}
                  {isSold && (
                    <span className="sold-inline-detail">{t("productDetail.soldShort")}</span>
                  )}
                </h1>

                <div className={`product-price ${isSold ? "price-sold-detail" : ""}`}>
                  {product[0].old_price && product[0].old_price > product[0].price && (
                    <span
                      style={{
                        textDecoration: "line-through",
                        color: "#dc2626",
                        margin: "10px",
                      }}
                    >
                      {formatPrice(product[0].old_price)} {t("properties.MAD")}
                    </span>
                  )}
                  <span>
                    {formatPrice(product[0].price)} {t("properties.MAD")}
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

                <section className="description-section">
                  <h2>{t("properties.description")}</h2>
                  <ReactMarkdown>{product[0].description}</ReactMarkdown>
                </section>

                <section className="details-section">
                  <h2>{t("properties.details")}</h2>
                  <div className="details-grid">
                    {shouldShowSoldStatusCard && (
                      <div
                        className={`detail-card sold-status-card ${
                          isSold ? "sold" : "available"
                        }`}
                      >
                        <FontAwesomeIcon
                          icon={isSold ? faCheckCircle : faTimesCircle}
                          className="detail-icon"
                          style={{ color: isSold ? "#dc2626" : "#16a34a" }}
                        />
                        <div className="detail-text">
                          <strong>{t("productDetail.propertyStatus")}</strong>
                          {isSold ? t("productDetail.sold") : t("productDetail.available")}
                        </div>
                      </div>
                    )}

                    <div className="detail-card">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="detail-icon" />
                      <div className="detail-text">
                        <strong>{t("properties.location")}</strong>
                        {product[0].location}
                      </div>
                    </div>

                    {product[0].type !== "floorplots" &&
                      product[0].type !== "Commercialgarages" &&
                      product[0].type !== "CommercialgaragesRent" && (
                        <>
                          <div className="detail-card">
                            <FontAwesomeIcon icon={faBed} className="detail-icon" />
                            <div className="detail-text">
                              <strong>{t("properties.bedrooms")}</strong>
                              {product[0].bedrooms}
                            </div>
                          </div>

                          <div className="detail-card">
                            <FontAwesomeIcon icon={faCouch} className="detail-icon" />
                            <div className="detail-text">
                              <strong>{t("properties.salon")}</strong>
                              {product[0].salon}
                            </div>
                          </div>

                          <div className="detail-card">
                            <FontAwesomeIcon icon={faBath} className="detail-icon" />
                            <div className="detail-text">
                              <strong>{t("properties.bathrooms")}</strong>
                              {product[0].bathrooms}
                            </div>
                          </div>

                          <div className="detail-card">
                            <FontAwesomeIcon icon={faUtensils} className="detail-icon" />
                            <div className="detail-text">
                              <strong>{t("properties.kitchen")}</strong>
                              {product[0].kitchen}
                            </div>
                          </div>
                        </>
                      )}

                    <div className="detail-card">
                      <FontAwesomeIcon icon={faRulerCombined} className="detail-icon" />
                      <div className="detail-text">
                        <strong>{t("properties.area")}</strong>
                        {product[0].area} m²
                      </div>
                    </div>

                    {(product[0].type === "buy" ||
                      product[0].type === "apartments" ||
                      product[0].type === "regularRent") && (
                      <div className="detail-card">
                        <FontAwesomeIcon icon={faBuilding} className="detail-icon" />
                        <div className="detail-text">
                          <strong>{t("properties.floors")}</strong>
                          {product[0].floors}
                        </div>
                      </div>
                    )}

                    {product[0].type === "rent" && (
                      <>
                        <div className="detail-card">
                          <FontAwesomeIcon
                            icon={product[0].available ? faCheckCircle : faTimesCircle}
                            className="detail-icon"
                            style={{
                              color: product[0].available ? "#16a34a" : "#dc2626",
                            }}
                          />
                          <div className="detail-text">
                            <strong>{t("properties.status")}</strong>
                            {product[0].available
                              ? t("properties.available")
                              : t("properties.notAvailableRent")}
                          </div>
                        </div>

                        {!product[0].available && product[0].availability_date && (
                          <div className="detail-card">
                            <FontAwesomeIcon icon={faCalendarAlt} className="detail-icon" />
                            <div className="detail-text">
                              <strong>{t("properties.availabilityDate")}</strong>
                              {formatDate(product[0].availability_date)}
                            </div>
                          </div>
                        )}
                      </>
                    )}

                    <div className="detail-card">
                      <FontAwesomeIcon icon={faTag} className="detail-icon" />
                      <div className="detail-text">
                        <strong>{t("properties.price")}</strong>
                        {product[0].old_price && product[0].old_price > product[0].price && (
                          <span
                            style={{
                              textDecoration: "line-through",
                              color: "#dc2626",
                              margin: "10px",
                            }}
                          >
                            {formatPrice(product[0].old_price)} {t("properties.MAD")}
                          </span>
                        )}
                        <span>
                          {product[0].type === "floorplots" ||
                          product[0].type === "floorplotsReq"
                            ? `${formatPrice(product[0].price)} ${t("properties.MAD")} ${t(
                                "properties.pricePerSquareMeter"
                              )}`
                            : `${formatPrice(product[0].price)} ${t("properties.MAD")}`}
                        </span>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="location-section">
                  <h2>{t("properties.location")}</h2>
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
                      title={t("productDetail.propertyLocation")}
                    />
                  </div>
                </section>
              </div>
            </div>

            <div className="right-column">
              <div className="seller-info">
                <div className="seller-profile">
                  <div className="seller-avatar">
                    <FontAwesomeIcon icon={faUser} size="1x" />
                  </div>
                  <div className="seller-name">{t("seller.defaultName")}</div>
                </div>

                <button onClick={toggleModal} className="btn contact-btn">
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ marginLeft: "10px", marginRight: "10px" }}
                  />
                  {t("contact.contactUs")}
                </button>

                <button onClick={handleEmailClick} className="btn email-btn">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ marginLeft: "10px", marginRight: "10px" }}
                  />
                  {t("contact.sendEmail")}
                </button>

                <button onClick={handleShare} className="btn share-btn">
                  <FontAwesomeIcon
                    icon={faShareAlt}
                    style={{ marginLeft: "10px", marginRight: "10px" }}
                  />
                  {t("contact.share")}
                </button>
              </div>
            </div>
          </div>

          {isModalVisible && (
            <div className="modalT">
              <div className="modal-content">
                <h2>{t("seller.defaultName")}</h2>

                <button className="modalT-btn-w" onClick={handleWhatsAppClick}>
                  <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: "10px" }} />
                  {t("productDetail.whatsapp")}
                </button>

                <button className="modalT-btn" onClick={handleCallClick}>
                  <FontAwesomeIcon icon={faPhone} style={{ marginRight: "10px" }} />
                  {t("contact.phone")}
                </button>

                <button className="modalT-close" onClick={toggleModal}>
                  {t("contact.close")}
                </button>
              </div>
            </div>
          )}

          {isImageModalVisible && (
            <div className="image-modal">
              <div className="image-modal-content" ref={modalRef}>
                <FontAwesomeIcon icon={faTimes} className="close-modal" onClick={toggleImageModal} />

                {product.length > 1 && (
                  <button
                    type="button"
                    className={`modal-nav-btn ${isArabic ? "right" : "left"}`}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={handlePrevImage}
                    aria-label={t("productDetail.previousImage")}
                  >
                    <FontAwesomeIcon icon={isArabic ? faChevronRight : faChevronLeft} />
                  </button>
                )}

                <img
                  src={currentImgSrc}
                  alt={product[0].title}
                  className={`enlarged-image ${modalImgLoaded ? "is-visible" : "is-hidden"}`}
                  draggable={false}
                  onMouseDown={(e) => e.preventDefault()}
                  onLoad={() => setModalImgLoaded(true)}
                />

                {product.length > 1 && (
                  <button
                    type="button"
                    className={`modal-nav-btn ${isArabic ? "left" : "right"}`}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={handleNextImage}
                    aria-label={t("productDetail.nextImage")}
                  >
                    <FontAwesomeIcon icon={isArabic ? faChevronLeft : faChevronRight} />
                  </button>
                )}

                <FontAwesomeIcon
                  icon={faHeart}
                  onClick={toggleFavorite}
                  className="modal-heart-icon"
                  style={{ color: isFavorite ? "#dc2626" : "grey", opacity: isSold ? 0.5 : 1 }}
                  title={isSold ? t("productDetail.soldTooltip") : t("productDetail.addToFavorites")}
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
