
import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';
import { useCart } from './CartContext';
import { AuthContext } from './AuthContext';
import ConfirmDialog from './ConfirmDialog';
import 'flag-icons/css/flag-icons.min.css';
import './Header.css';

function Header({ onFilterChange }) {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const { cart } = useCart();
  const { isAuthenticated, logout } = useContext(AuthContext);
  const panierCount = cart.length;
  const [menuOpen, setMenuOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const navigate = useNavigate();

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

  useEffect(() => {
    if (isAuthenticated) {
      window.onpopstate = null; // Allow back navigation if authenticated
    }
  }, [isAuthenticated]);

  const languageOptions = [
    { value: 'ar', label: <><span className="fi fi-ma"></span> العربية</> },
    { value: 'en', label: <><span className="fi fi-gb"></span> English</> },
    { value: 'fr', label: <><span className="fi fi-fr"></span> Français</> },
    { value: 'es', label: <><span className="fi fi-es"></span> Español</> },
    { value: 'de', label: <><span className="fi fi-de"></span> German</> },
    { value: 'nl', label: <><span className="fi fi-nl"></span> Dutch</> }
  ];

  const navItems = [
    { filter: 'all', label: t('header.Home') },
    { filter: 'buy', label: t('header.buy') },
    { filter: 'rent', label: t('header.rent') },
    { filter: 'floorplots', label: t('header.floorplotss') },
    { link: '/news', label: t('header.news') },
    { link: '/contact', label: t('header.contactUs') }
  ];

  const renderNavItems = (items) => (
    <ul className={isArabic ? 'rtl' : ''}>
      {items.map((item, index) =>
        item.link ? (
          <li key={index}><Link to={item.link} onClick={closeMenu}>{item.label}</Link></li>
        ) : (
          <li key={index}><Link to="/" onClick={() => { onFilterChange(item.filter); closeMenu(); }}>{item.label}</Link></li>
        )
      )}
    </ul>
  );

  return (
    <header className="header">
      <div className={`header-top ${isArabic ? 'header-top-ar' : ''}`}>
        <div className="header-logo">
          <Link to="/" onClick={closeMenu}>
            <img src="logo192.png" alt="Alaqariyya Logo" className="logo" />
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
            <i className="fas fa-shopping-cart"></i>
            {panierCount > 0 && <span className="panier-count">{panierCount}</span>}
          </Link>
          {isAuthenticated ? (
            <>
              {isArabic ? (
                <>
                  <Link className="header-button" onClick={openDialog}>{t('header.logout')}</Link>
                  <Link to="/dashboard" className="header-button" onClick={closeMenu}>{t('header.dashboard')}</Link>
                </>
              ) : (
                <>
                  <Link to="/dashboard" className="header-button" onClick={closeMenu}>{t('header.dashboard')}</Link>
                  <Link className="header-button" onClick={openDialog}>{t('header.logout')}</Link>
                </>
              )}
            </>
          ) : (
            <Link to="/login" className="header-login" onClick={closeMenu}>{t('header.login')}</Link>
          )}
          <Select
            options={languageOptions}
            onChange={changeLanguage}
            className="language-select"
            defaultValue={languageOptions.find(option => option.value === i18n.language)}
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
