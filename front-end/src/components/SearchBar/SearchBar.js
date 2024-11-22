import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './SearchBar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Helmet } from 'react-helmet';

function SearchBar({ onSearch, filterType, onFilterChange, initialType, initialLocation }) {
  const { t, i18n } = useTranslation();
  const [location, setLocation] = useState(initialLocation || '');
  const [selectedType, setSelectedType] = useState(initialType || '');
  const [selectedTypeError, setSelectedTypeError] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectionMode, setSelectionMode] = useState(filterType || 'buy');

  // Array of background images
  const backgroundImages = [
    '/searchbar/1.jpg',
    '/searchbar/2.jpg',
    '/searchbar/3.jpg',
    '/searchbar/4.jpg',
    '/searchbar/5.jpg',
    '/searchbar/6.jpg',
    '/searchbar/7.jpg',
    '/searchbar/8.jpg',
    '/searchbar/9.jpg',
    '/searchbar/10.jpg'
  ];

  // Preload images when the component mounts
  useEffect(() => {
    const preloadImages = () => {
      backgroundImages.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadImages();
  }, []);

  useEffect(() => {
    if (filterType === 'rent' || filterType === 'buy') {
      setSelectionMode(filterType);
      setSelectedType(''); // Reset selectedType when mode changes
      setSelectedTypeError(false); // Clear error when mode changes
    }
  }, [filterType]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 60000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Update selectedType when initialType changes
  useEffect(() => {
    setSelectedType(initialType || '');
  }, [initialType]);

  // Update location when initialLocation changes
  useEffect(() => {
    setLocation(initialLocation || '');
  }, [initialLocation]);

  const handleFilterChange = (e) => {
    const type = e.target.value;
    setSelectedType(type);
    setSelectedTypeError(false); // Clear the error when user selects a type
  };

  const handleLocationChange = (e) => {
    const updatedLocation = e.target.value;
    setLocation(updatedLocation);
  };

  const handleSearchClick = () => {
    if (selectedType) {
      onSearch({ type: selectedType, location });
    } else {
      setSelectedTypeError(true); // Set error state to true
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };

  const handleModeChange = (mode) => {
    setSelectionMode(mode);
    onFilterChange(mode);
    setSelectedType(''); // Reset selectedType when mode changes
    setSelectedTypeError(false); // Clear error when mode changes
  };

  return (
    <div className={`search-bar-container ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
       <Helmet>
            <html lang="ar" />
            <title>تأجير وبيع وشراء العقارات في المغرب - ALAQARIYYA العقارية</title>
            <meta
              name="description"
              content="تأجير، بيع، شراء، استشارات عقارية، تسجيل العقارات في المغرب. منازل، شقق، طوابق، أراضي، كراجات، كراجات تجارية، إيجار عادي وإيجار مفروش."
            />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta charset="UTF-8" />
            <link rel="canonical" href="https://www.alaqariyya.com" />

            <meta
              property="og:title"
              content="تأجير وبيع وشراء العقارات في المغرب - ALAQARIYYA العقارية"
            />
            <meta
              property="og:description"
              content="اكتشف جميع خيارات العقارات في المغرب مع ALAQARIYYA. خدمات تأجير وبيع وشراء واستشارات عقارية لجميع أنواع العقارات من منازل، شقق، أراضي، كراجات."
            />
            <meta property="og:url" content="https://www.alaqariyya.com" />
            <meta property="og:type" content="website" />
            <meta
              property="og:image"
              content="https://www.alaqariyya.com/logo/logoAlaqariyya.jpg"
            />

            <meta name="twitter:card" content="summary_large_image" />
            <meta
              name="twitter:title"
              content="تأجير وبيع وشراء العقارات في المغرب - ALAQARIYYA"
            />
            <meta
              name="twitter:description"
              content="استكشاف العقارات مع ALAQARIYYA - خدمات شاملة لتأجير وشراء وبيع العقارات في المغرب."
            />
            <meta
              name="twitter:image"
              content="https://www.alaqariyya.com/logo/logoAlaqariyya.jpg"
            />

            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "RealEstateAgent",
                "name": "ALAQARIYYA العقارية",
                "description":
                  "تأجير، بيع، شراء، استشارات عقارية، تسجيل العقارات في المغرب. منازل، شقق، طوابق، أراضي، كراجات، كراجات تجارية، إيجار عادي وإيجار مفروش.",
                "url": "https://www.alaqariyya.com",
                "logo": "https://www.alaqariyya.com/logo/logoAlaqariyya.jpg",
                "telephone": "+212 536-348141",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress":
                    "زنقة ابن سينا (تقاطع زنقة عقبة) - حي المسجد، بني انصار - الناظور",
                  "addressLocality": "بني انصار",
                  "addressRegion": "الناظور",
                  "postalCode": "62000",
                  "addressCountry": "MA",
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "35.1765",
                    "longitude": "-2.9288",
                  },
                },
                "openingHours": ["Mo-Fr 09:00-19:00"],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+212 536-348141",
                  "contactType": "خدمة العملاء",
                  "availableLanguage": ["ar", "fr", "en", "es"],
                },
                "areaServed": "MA",
                "inLanguage": ["ar", "fr", "en", "es"],
                "serviceType": [
                  "تأجير العقارات",
                  "بيع العقارات",
                  "شراء العقارات",
                  "استشارات عقارية",
                  "تسجيل العقارات",
                ],
                "makesOffer": [
                  {
                    "@type": "Offer",
                    "priceCurrency": "MAD",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "منازل",
                      "category": "عقارات سكنية",
                    },
                  },
                  {
                    "@type": "Offer",
                    "priceCurrency": "MAD",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "شقق",
                      "category": "عقارات سكنية",
                    },
                  },
                  {
                    "@type": "Offer",
                    "priceCurrency": "MAD",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "طوابق",
                      "category": "عقارات سكنية",
                    },
                  },
                  {
                    "@type": "Offer",
                    "priceCurrency": "MAD",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "أراضي",
                      "category": "عقارات",
                    },
                  },
                  {
                    "@type": "Offer",
                    "priceCurrency": "MAD",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "كراجات",
                      "category": "عقارات",
                    },
                  },
                  {
                    "@type": "Offer",
                    "priceCurrency": "MAD",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "كراجات تجارية",
                      "category": "عقارات تجارية",
                    },
                  },
                  {
                    "@type": "Offer",
                    "priceCurrency": "MAD",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "إيجار عادي",
                      "category": "خدمات التأجير",
                    },
                  },
                  {
                    "@type": "Offer",
                    "priceCurrency": "MAD",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "إيجار مفروش",
                      "category": "خدمات التأجير",
                    },
                  },
                ],
                "foundingDate": "2024",
                "currenciesAccepted": "MAD",
                "sameAs": [
                  "https://www.facebook.com/https://www.facebook.com/profile.php?id=61560366056640",
                  "https://www.instagram.com/https://www.instagram.com/alaqariyya",
                  "https://fr.airbnb.com/users/show/582106109",
                  "https://www.booking.com/hotel/ma/alaqariyya-l-qry.html"
                ],
              })}
            </script>
          </Helmet>
      <div
        className="search-bar-background"
        style={{
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
          transition: 'background-image 0.5s ease-in-out', // Optional for smooth transition
        }}
      >
        <div className="search-bar">
          <p className="search-bar-parag">{t('searchBar.title')}</p>
          <div className="search-controls">
            <div className="mode-button-container">
              <button
                className={`mode-button ${selectionMode === 'buy' ? 'active' : ''}`}
                onClick={() => handleModeChange('buy')}
              >
                {t('properties.buy')}
              </button>
              <button
                className={`mode-button ${selectionMode === 'rent' ? 'active' : ''}`}
                onClick={() => handleModeChange('rent')}
              >
                {t('properties.rent')}
              </button>
            </div>

            <div className="filter-select-container">
              <select
                className={`filter-select ${selectedTypeError ? 'error' : ''}`}
                value={selectedType}
                onChange={handleFilterChange}
                aria-label={t('properties.selectFilter')}
              >
                <option value="">{t('properties.chooseType')}</option>
                {selectionMode === 'buy' ? (
                  <>
                    <option value="buy">{t('properties.HausesForBuy')}</option>
                    <option value="floorplots">
                      {t('properties.floorplots')}
                    </option>
                    <option value="Commercialgarages">
                      {t('properties.Commercialgarages')}
                    </option>
                  </>
                ) : (
                  <>
                    <option value="regularRent">
                      {t('properties.regularRent')}
                    </option>
                    <option value="rent">{t('properties.furnishedRent')}</option>
                  </>
                )}
              </select>
              {selectedTypeError && (
                <p
                  className="error-message"
                  style={{ fontSize: '12px', margin: '0', color: '#e63946' }}
                >
                  {t('properties.selectTypeMessage')}
                </p>
              )}
            </div>

            <div className="search-input-container">
              <input
                type="text"
                id="location-search"
                value={location}
                onChange={handleLocationChange}
                onKeyPress={handleKeyPress}
                placeholder={t('properties.searchPlaceholder')}
                aria-label={t('properties.searchPlaceholder')}
              />
              <button
                className="search-icon-button"
                onClick={handleSearchClick}
                aria-label={t('properties.searchButton')}
              >
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
