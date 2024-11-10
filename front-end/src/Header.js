import React, { useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';
import { useCart } from './CartContext';
import { AuthContext } from './AuthContext';
import ConfirmDialog from './ConfirmDialog';
import 'flag-icons/css/flag-icons.min.css';
import './Header.css';
import { Helmet } from 'react-helmet';

function Header({ onFilterChange, activeFilter }) {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const { cart } = useCart();
  const { isAuthenticated, logout } = useContext(AuthContext);
  const panierCount = cart.length;
  const [menuOpen, setMenuOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
      navigate('/login', { replace: true });
    };
    closeDialog();
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng.value);
  };

  const languageOptions = [
    { value: 'ar', label: <><span className="fi fi-ma"></span> العربية</> },
    { value: 'en', label: <><span className="fi fi-gb"></span> English</> },
    { value: 'fr', label: <><span className="fi fi-fr"></span> Français</> },
    { value: 'es', label: <><span className="fi fi-es"></span> Español</> },
    { value: 'de', label: <><span className="fi fi-de"></span> German</> },
    { value: 'nl', label: <><span className="fi fi-nl"></span> Dutch</> }
  ];

  // Updated 'Home' filter to an empty string
  const navItems = [
    { filter: '', label: t('header.Home'), link: '/' },
    { filter: 'rent', label: t('header.rent'), link: '/' },
    { filter: 'buy', label: t('header.buy'), link: '/' },
    { filter: 'contact', label: t('header.contactUs'), link:'/contact' }
  ];

  const handleNavClick = (filter, link) => {
    if (filter !== undefined) {
      onFilterChange(filter);
      navigate('/');
    } 
    if (!filter) {
      onFilterChange(''); // Reset filter when it's a link
      navigate(link);
    }
    closeMenu();
    window.scrollTo(0, 0);
  };

  const handleLogoClick = () => {
    onFilterChange('');
    navigate('/');
    closeMenu();
    window.scrollTo(0, 0);
  };

  const renderNavItems = (items) => (
    <ul className={isArabic ? 'rtl' : ''}>
      {items.map((item, index) => {
        const isFilter = item.filter !== undefined;
        const isActive = isFilter 
          ? item.filter === activeFilter
          : item.link === location.pathname;
        
        return (
          <li key={index}>
            <Link
              to={item.link}
              onClick={() => {
                if (item.filter === '') {
                  handleLogoClick();
                } else {
                  handleNavClick(item.filter, item.link);
                }
              }}
              className={isActive ? 'active' : ''}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <header className="header">
      <div className={`header-top ${isArabic ? 'header-top-ar' : ''}`}>
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
        <div className="header-logo">
          <Link to="/" onClick={handleLogoClick}>
            <img src="/logo192.png" alt="Alaqariyya Logo" className="logo" />
          </Link>
        </div>
        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          {renderNavItems(navItems)}
        </nav>
        <div className={`header-actions ${isArabic ? 'header-actions-ar' : 'header-actions-en'}`}>
          <button className="menu-toggle" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </button>
          <Link to="/cart" className="panier-icon" onClick={closeMenu}>
            <i className="fas fa-heart"></i>
            {panierCount > 0 && <span className="panier-count">{panierCount}</span>}
          </Link>

          {isAuthenticated ? (
            <>
              {isArabic ? (
                <>
                  <Link className="header-button" onClick={openDialog}>
                    {t('header.logout')}
                  </Link>
                  <Link to="/dashboard" className="header-button" onClick={closeMenu}>
                    {t('header.dashboard')}
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/dashboard" className="header-button" onClick={closeMenu}>
                    {t('header.dashboard')}
                  </Link>
                  <Link className="header-button" onClick={openDialog}>
                    {t('header.logout')}
                  </Link>
                </>
              )}
            </>
          ) : (
            <Link to="/login" className="header-login" onClick={closeMenu}>
              {t('header.login')}
            </Link>
          )}
          <Select
            options={languageOptions}
            onChange={changeLanguage}
            className="language-select"
            defaultValue={languageOptions.find((option) => option.value === i18n.language)}
            isSearchable={false}
          />
        </div>
      </div>
      {dialogOpen && (
        <ConfirmDialog
          message={t('Are you sure you want to log out?')}
          onConfirm={handleLogout}
          onCancel={closeDialog}
        />
      )}
    </header>
  );
}

export default Header;