// Header.js
import React, { useState, useContext, useMemo } from "react";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Select from "react-select";
import { useCart } from "../../contexts/CartContext";
import { AuthContext } from "../../contexts/AuthContext";
import ConfirmDialog from "../ConfirmDialog/ConfirmDialog";
import "flag-icons/css/flag-icons.min.css";
import "./Header.css";

const SUPPORTED_LANGS = ["ar", "en", "fr", "de", "es", "nl"];

function Header({ onFilterChange }) {
  const { t, i18n } = useTranslation();
  const { cart } = useCart();
  const { isAuthenticated, logout } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams(); // expects routes like "/:lng/*"

  const [menuOpen, setMenuOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const panierCount = cart.length;

  // ✅ current lang from URL if exists, else i18n/localStorage fallback
  const currentLang = useMemo(() => {
    const urlLng = params?.lng;
    if (urlLng && SUPPORTED_LANGS.includes(urlLng)) return urlLng;

    const ls = localStorage.getItem("i18nextLng");
    if (ls && SUPPORTED_LANGS.includes(ls)) return ls;

    const i18nLng = i18n.language;
    if (i18nLng && SUPPORTED_LANGS.includes(i18nLng)) return i18nLng;

    return "ar";
  }, [params?.lng, i18n.language]);

  const isArabic = currentLang === "ar";

  const toggleMenu = () => setMenuOpen((v) => !v);
  const closeMenu = () => setMenuOpen(false);

  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);

  // ✅ remove "/ar" prefix from a pathname if it exists
  const stripLangPrefix = (pathname) => {
    const parts = pathname.split("/").filter(Boolean); // ["ar","about"]
    if (parts.length && SUPPORTED_LANGS.includes(parts[0])) {
      return "/" + parts.slice(1).join("/");
    }
    return pathname === "" ? "/" : pathname;
  };

  // ✅ add current lang prefix to any path
  const withLang = (path) => {
    const clean = path.startsWith("/") ? path : `/${path}`;
    return `/${currentLang}${clean === "/" ? "" : clean}`;
  };

  const handleLogout = () => {
    logout();
    // بعد logout نمشيو للوغين مع اللغة
    navigate(withLang("/login"), { replace: true });

    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
      navigate(withLang("/login"), { replace: true });
    };

    closeDialog();
  };

  // ✅ keep same page, just swap language prefix in URL
  const changeLanguage = (opt) => {
    const newLng = opt?.value;
    if (!newLng || !SUPPORTED_LANGS.includes(newLng)) return;

    i18n.changeLanguage(newLng);
    localStorage.setItem("i18nextLng", newLng);

    // keep same route + query/hash, only swap the lang prefix
    const basePath = stripLangPrefix(location.pathname); // "/about" or "/"
    const nextPath = `/${newLng}${basePath === "/" ? "" : basePath}`;

    navigate(`${nextPath}${location.search}${location.hash}`, { replace: true });
    closeMenu();
  };

  const languageOptions = [
    { value: "ar", label: <><span className="fi fi-ma"></span> العربية</> },
    { value: "en", label: <><span className="fi fi-gb"></span> English</> },
    { value: "fr", label: <><span className="fi fi-fr"></span> Français</> },
    { value: "es", label: <><span className="fi fi-es"></span> Español</> },
    { value: "de", label: <><span className="fi fi-de"></span> Deutsch</> },
    { value: "nl", label: <><span className="fi fi-nl"></span> Nederlands</> },
  ];

  // ✅ nav links now include lang prefix
  const navItems = [
    { key: "home",     label: t("header.Home"),      link: "/" },
    { key: "about",    label: t("header.about"),     link: "/about" },
    { key: "services", label: t("header.services"),  link: "/services" },
    { key: "blog",     label: t("header.blog"),      link: "/blog" },
    { key: "contact",  label: t("header.contactUs"), link: "/contact" },
  ];

  const handleNavClick = (link) => {
    if (link === "/" && onFilterChange) onFilterChange("");
    navigate(withLang(link));
    closeMenu();
    window.scrollTo(0, 0);
  };

  const handleLogoClick = () => {
    if (onFilterChange) onFilterChange("");
    navigate(withLang("/"));
    closeMenu();
    window.scrollTo(0, 0);
  };

  const renderNavItems = (items) => (
    <ul className={isArabic ? "rtl" : "ltr"}>
      {items.map((item) => {
        const fullPath = withLang(item.link);
        const isActive =
          stripLangPrefix(location.pathname) === item.link; // compare without lang
        return (
          <li key={item.key}>
            <Link
              to={fullPath}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.link);
              }}
              className={`nav-link ${isActive ? "active" : ""}`}
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
      <div className={`header-top ${isArabic ? "header-top-ar" : ""}`}>
        <div className="header-logo">
          <Link
            to={withLang("/")}
            onClick={(e) => {
              e.preventDefault();
              handleLogoClick();
            }}
          >
            <img src="/logo.svg" alt="Alaqariyya Logo" className="logo" />
          </Link>
        </div>

        <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
          {renderNavItems(navItems)}
        </nav>

        <div className={`header-actions ${isArabic ? "header-actions-ar" : "header-actions-en"}`}>
          <button className="menu-toggle" onClick={toggleMenu} type="button">
            <i className="fas fa-bars"></i>
          </button>

          <Link
            to={withLang("/cart")}
            className="panier-icon"
            onClick={(e) => {
              e.preventDefault();
              navigate(withLang("/cart"));
              closeMenu();
            }}
          >
            <i className="fas fa-heart"></i>
            {panierCount > 0 && <span className="panier-count">{panierCount}</span>}
          </Link>

          {isAuthenticated ? (
            <>
              {isArabic ? (
                <>
                  <button className="header-button" onClick={openDialog} type="button">
                    {t("header.logout")}
                  </button>
                  <Link
                    to={withLang("/dashboard")}
                    className="header-button"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(withLang("/dashboard"));
                      closeMenu();
                    }}
                  >
                    {t("header.dashboard")}
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to={withLang("/dashboard")}
                    className="header-button"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(withLang("/dashboard"));
                      closeMenu();
                    }}
                  >
                    {t("header.dashboard")}
                  </Link>
                  <button className="header-button" onClick={openDialog} type="button">
                    {t("header.logout")}
                  </button>
                </>
              )}
            </>
          ) : (
            <Link
              to={withLang("/login")}
              className="header-login"
              onClick={(e) => {
                e.preventDefault();
                navigate(withLang("/login"));
                closeMenu();
              }}
            >
              {t("header.login")}
            </Link>
          )}

          <Select
            options={languageOptions}
            onChange={changeLanguage}
            className="language-selectt"
            value={languageOptions.find((o) => o.value === currentLang)}
            isSearchable={false}
          />
        </div>
      </div>

      {dialogOpen && (
        <ConfirmDialog
          message={t("Are you sure you want to log out?")}
          onConfirm={handleLogout}
          onCancel={closeDialog}
        />
      )}
    </header>
  );
}

export default Header;
