import React,{ useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SearchBar from '../SearchBar/SearchBar';
import NewsSection from '../NewsSection/NewsSection';
import './Content.css';
import Footer from '../Footer/Footer';
import { FaSpinner } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const formatPrice = (value) => new Intl.NumberFormat('de-DE').format(value);

function Content({ filterType, onFilterChange }) {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchParams, setSearchParams] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || 'en';
  const API_URL = process.env.REACT_APP_SERVER;
  const navigate = useNavigate();
  const location = useLocation(); // New hook

  // New state variables to store initial search parameters
  const [initialType, setInitialType] = useState('');
  const [initialLocation, setInitialLocation] = useState('');

  const getTranslatedField = (property, field) => {
    const fieldKey = `${field}_${currentLanguage}`;
    return property[fieldKey] || property[`${field}_en`] || 'N/A';
  };

  const fetchProperties = async ({ type = '', location = '', page = 1 }) => {
    try {
      setIsLoading(true);
      let query = `?page=${page}&lang=${currentLanguage}`;
      if (type) {
        query += `&type=${type}`;
      }
      if (location) {
        query += `&location=${location}`;
      }

      const response = await axios.get(`${API_URL}/properties${query}`);

      if (response.data && response.data.properties) {
        const translatedProperties = response.data.properties.map((property) => ({
          ...property,
          title: getTranslatedField(property, 'title'),
          location: getTranslatedField(property, 'location'),
          description: getTranslatedField(property, 'description'),
        }));

        setProperties(translatedProperties);
        setTotalPages(response.data.totalPages);
        setCurrentPage(response.data.currentPage);
      } else {
        setProperties([]);
      }
    } catch (error) {
      console.error('Error fetching properties:', error);
      setProperties([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (filterType === '') {
      // Reset search
      setHasSearched(false);
      setProperties([]);
      setCurrentPage(1);
      setTotalPages(1);
      setSearchParams({});
      setInitialType('');
      setInitialLocation('');
    }
  }, [filterType]);

  const handleSearch = (params) => {
    if (params.type) {
      fetchProperties({ ...params, page: 1 });
      setSearchParams(params);
      setHasSearched(true);
      onFilterChange(params.type);

      // Build the search query string
      const searchParamsUrl = new URLSearchParams(params);
      navigate(`?${searchParamsUrl.toString()}`);
    } else {
      // Do not perform search; reset state
      setHasSearched(false);
      setProperties([]);
      setCurrentPage(1);
      setTotalPages(1);
      setSearchParams({});
      onFilterChange('');
      navigate('/');
    }
  };

  const handlePropertyClick = (propertyId) => {
    axios
      .post(`${API_URL}/clicks/${propertyId}`)
      .then(() => console.log('Click count incremented'))
      .catch((error) => console.error('Error incrementing click count:', error));

    // Include search parameters in the navigation
    navigate(`/product/${propertyId}${location.search}`);
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;

    // Use the stored search parameters for pagination
    fetchProperties({ ...searchParams, page: newPage });
    setCurrentPage(newPage);
    window.scrollTo(0, 0);

    // Update the URL with the new page number
    const searchParamsUrl = new URLSearchParams(searchParams);
    searchParamsUrl.set('page', newPage);
    navigate(`?${searchParamsUrl.toString()}`);
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  // New useEffect to read search parameters from URL
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get('type');
    const locationParam = queryParams.get('location');
    const page = queryParams.get('page') || 1;
    if (type) {
      const params = { type };
      if (locationParam) params.location = locationParam;
      fetchProperties({ ...params, page });
      setSearchParams(params);
      setHasSearched(true);
      onFilterChange(type);
      setCurrentPage(parseInt(page));
      setInitialType(type);
      setInitialLocation(locationParam || '');
    } else {
      setHasSearched(false);
      setProperties([]);
      setCurrentPage(1);
      setTotalPages(1);
      setSearchParams({});
      onFilterChange('');
      setInitialType('');
      setInitialLocation('');
    }
  }, [location.search]);

  // Existing useEffect to re-fetch properties when the language changes
  useEffect(() => {
    if (hasSearched) {
      fetchProperties({ ...searchParams, page: currentPage });
    }
  }, [currentLanguage]);

  return (
    <>
      <div className={`Content ${currentLanguage === 'ar' ? 'rtl' : 'ltr'}`}>
        <Helmet>
          {/* HTML Language Attribute */}
          <html lang="ar" />

          {/* Title and Description */}
          <title>تأجير وبيع وشراء العقارات في المغرب - ALAQARIYYA العقارية</title>
          <meta
            name="description"
            content="تأجير، بيع، شراء، استشارات عقارية، تسجيل العقارات في المغرب. منازل، شقق، طوابق، أراضي، كراجات، كراجات تجارية، إيجار عادي وإيجار مفروش."
          />

          {/* Viewport and Charset */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta charset="UTF-8" />

          {/* Robots Meta */}
          <meta name="robots" content="index, follow" />

          {/* Canonical Link */}
          <link rel="canonical" href="https://www.alaqariyya.com" />

          {/* Open Graph Tags */}
          <meta property="og:title" content="تأجير وبيع وشراء العقارات في المغرب - ALAQARIYYA العقارية" />
          <meta
            property="og:description"
            content="اكتشف جميع خيارات العقارات في المغرب مع ALAQARIYYA. خدمات تأجير وبيع وشراء واستشارات عقارية لجميع أنواع العقارات من منازل، شقق، أراضي، كراجات."
          />
          <meta property="og:url" content="https://www.alaqariyya.com" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://www.alaqariyya.com/logo.svg" />
          <meta property="og:image:alt" content="ALAQARIYYA العقارية Logo" />
          <meta property="og:locale" content="ar_MA" />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="تأجير وبيع وشراء العقارات في المغرب - ALAQARIYYA" />
          <meta
            name="twitter:description"
            content="استكشاف العقارات مع ALAQARIYYA - خدمات شاملة لتأجير وشراء وبيع العقارات في المغرب."
          />
          <meta name="twitter:image" content="https://www.alaqariyya.com/logo.svg" />

          {/* Location Meta Tags */}
          <meta name="geo.placename" content="زنقة ابن سينا (تقاطع زنقة عقبة) - حي المسجد، بني انصار - الناظور، المغرب" />
          <meta name="geo.position" content="35.1761;-2.9308" />
          <meta name="ICBM" content="35.1761, -2.9308" />
          <link rel="alternate" href="https://maps.app.goo.gl/ysG1ZvxgLQUj3QRN7" />

          {/* JSON-LD: RealEstateAgent Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "ALAQARIYYA العقارية",
              "description":
                "تأجير، بيع، شراء، استشارات عقارية، تسجيل العقارات في المغرب. منازل، شقق، طوابق، أراضي، كراجات، كراجات تجارية، إيجار عادي وإيجار مفروش.",
              "url": "https://www.alaqariyya.com",
              "logo": "https://www.alaqariyya.com/logo.svg",
              "telephone": "+212 536-348141",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "زنقة ابن سينا (تقاطع زنقة عقبة) - حي المسجد، بني انصار - الناظور",
                "addressLocality": "بني انصار",
                "addressRegion": "الناظور",
                "postalCode": "62000",
                "addressCountry": "MA",
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "35.1761",
                  "longitude": "-2.9308"
                }
              },
              "openingHours": ["Mo-Fr 09:00-19:00"],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+212 536-348141",
                "contactType": "خدمة العملاء",
                "availableLanguage": ["ar", "fr", "en", "es","de","nl"]
              },
              "areaServed": "MA",
              "inLanguage": ["ar", "fr", "en", "es","de","nl"],
              "serviceType": [
                "تأجير العقارات",
                "بيع العقارات",
                "شراء العقارات",
                "استشارات عقارية",
                "تسجيل العقارات"
              ],
              "makesOffer": [
                {
                  "@type": "Offer",
                  "priceCurrency": "MAD",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "منازل",
                    "category": "عقارات سكنية"
                  }
                },
                {
                  "@type": "Offer",
                  "priceCurrency": "MAD",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "شقق",
                    "category": "عقارات سكنية"
                  }
                },
                {
                  "@type": "Offer",
                  "priceCurrency": "MAD",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "طوابق",
                    "category": "عقارات سكنية"
                  }
                },
                {
                  "@type": "Offer",
                  "priceCurrency": "MAD",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "أراضي",
                    "category": "عقارات"
                  }
                },
                {
                  "@type": "Offer",
                  "priceCurrency": "MAD",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "كراجات",
                    "category": "عقارات"
                  }
                },
                {
                  "@type": "Offer",
                  "priceCurrency": "MAD",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "كراجات تجارية",
                    "category": "عقارات تجارية"
                  }
                },
                {
                  "@type": "Offer",
                  "priceCurrency": "MAD",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "إيجار عادي",
                    "category": "خدمات التأجير"
                  }
                },
                {
                  "@type": "Offer",
                  "priceCurrency": "MAD",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "إيجار مفروش",
                    "category": "خدمات التأجير"
                  }
                }
              ],
              "foundingDate": "2024",
              "currenciesAccepted": "MAD",
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61560366056640",
                "https://www.instagram.com/alaqariyya",
                "https://fr.airbnb.com/users/show/582106109",
                "https://www.booking.com/hotel/ma/alaqariyya-l-qry.html",
                "https://expe.app.link/2uBx1FL1yPb"
              ]
            })}
          </script>

          {/* JSON-LD: WebPage Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "ALAQARIYYA - العقارات الأفضل في المغرب",
              "url": "https://www.alaqariyya.com",
              "description": "خدمات تأجير، بيع، وشراء عقارات بمهنية عالية في المغرب.",
              "inLanguage": "ar",
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "35.1761",
                "longitude": "-2.9308"
              }
            })}
          </script>
        </Helmet>

        <SearchBar
          onSearch={handleSearch}
          filterType={filterType}
          onFilterChange={onFilterChange}
          initialType={initialType} // Pass initialType
          initialLocation={initialLocation} // Pass initialLocation
        />
        {!hasSearched ? (
          <NewsSection />
        ) : (
          <div className="properties-section">
            {isLoading ? (
              <div className="loadingg">
                <FaSpinner className="spinnerr" />
                <p>{t('properties.Loading')}</p>
              </div>
            ) : properties.length > 0 ? (
              <>
                <div className="properties-list">
                  {properties.map((property) => (
                    <div
                      key={property.property_id}
                      className={`property-item ${
                        currentLanguage === 'ar' ? 'rtl' : 'ltr'
                      }`}
                      onClick={() => handlePropertyClick(property.property_id)}
                      tabIndex="0"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') handlePropertyClick(property.property_id);
                      }}
                      aria-label={`View details for ${property.title}`}
                    >
                      <div className="property-imagee-container">
                        <img
                          src={`${API_URL}/uploads/${property.image_url}`}
                          alt={property.title}
                          className="property-imagee"
                          loading="lazy"
                        />
                      </div>
                      <div className="property-info">
                        <h3 className="title-p">{property.title}</h3>
                        <p>
                          <strong className="strongg">{t('properties.description')}:</strong>{' '}
                          {truncateText(property.description, 190)}
                        </p>
                        <p>
                          <strong className="strongg">{t('properties.location')}:</strong>{' '}
                          {property.location}
                        </p>
                        <div className="price-container">
                          <p>
                            <strong className="strongg">
                              {property.type === 'rent'
                                ? t('properties.priceWithAsterisk')
                                : t('properties.price')}
                              :
                            </strong>
                            {property.old_price && property.old_price > property.price && (
                              <span className="old-price">
                                {formatPrice(property.old_price)} {t('properties.MAD')}
                              </span>
                            )}
                            <span className="new-price">
                              {formatPrice(property.price)} {t('properties.MAD')}
                            </span>
                          </p>
                          {property.type === 'rent' && (
                            <p className="small-text">* {t('properties.priceVaries')}</p>
                          )}
                          
                        </div>
                        {property.type === 'rent' && (
                          <p>
                            <strong className="strongg">{t('properties.status')}:</strong>{' '}
                            {property.available
                              ? t('properties.available')
                              : t('properties.notAvailable')}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                {totalPages > 1 && (
                  <div className="pagination">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      aria-label="Previous Page"
                    >
                      {t('properties.Previous')}
                    </button>

                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      aria-label="Next Page"
                    >
                      {t('properties.Next')}
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="no-results">
                <p>{t('properties.noResults')}</p>
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Content;