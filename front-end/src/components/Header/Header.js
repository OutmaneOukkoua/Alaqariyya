import React, { useState, useContext, useMemo, useEffect, useRef } from "react";
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

  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const toggleUserMenu = () => setUserMenuOpen((v) => !v);
  const closeUserMenu = () => setUserMenuOpen(false);

  // ✅ refs for click-outside
  const navRef = useRef(null);
  const navBtnRef = useRef(null);
  const userMenuRef = useRef(null);
  const userBtnRef = useRef(null);

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

  // ✅ click outside closes both menus
  useEffect(() => {
    const onPointerDown = (e) => {
      const target = e.target;

      // close main nav menu (menuOpen)
      if (menuOpen) {
        const clickedInsideNav = navRef.current?.contains(target);
        const clickedNavBtn = navBtnRef.current?.contains(target);

        if (!clickedInsideNav && !clickedNavBtn) {
          setMenuOpen(false);
        }
      }

      // close account dropdown (userMenuOpen)
      if (userMenuOpen) {
        const clickedInsideUser = userMenuRef.current?.contains(target);
        const clickedUserBtn = userBtnRef.current?.contains(target);

        if (!clickedInsideUser && !clickedUserBtn) {
          setUserMenuOpen(false);
        }
      }
    };

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setUserMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown, true);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown, true);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen, userMenuOpen]);

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
    navigate(withLang("/login"), { replace: true });

    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
      navigate(withLang("/login"), { replace: true });
    };

    closeDialog();
    closeUserMenu();
    closeMenu();
  };

  // ✅ keep same page, just swap language prefix in URL
  const changeLanguage = (opt) => {
    const newLng = opt?.value;
    if (!newLng || !SUPPORTED_LANGS.includes(newLng)) return;

    i18n.changeLanguage(newLng);
    localStorage.setItem("i18nextLng", newLng);

    const basePath = stripLangPrefix(location.pathname);
    const nextPath = `/${newLng}${basePath === "/" ? "" : basePath}`;

    navigate(`${nextPath}${location.search}${location.hash}`, { replace: true });

    closeMenu();
    closeUserMenu();
  };

  // const languageOptions = [
  //   { value: "ar", label: (<><span className="fi fi-ma"></span> العربية</>) },
  //   { value: "en", label: (<><span className="fi fi-gb"></span> English</>) },
  //   { value: "fr", label: (<><span className="fi fi-fr"></span> Français</>) },
  //   { value: "es", label: (<><span className="fi fi-es"></span> Español</>) },
  //   { value: "de", label: (<><span className="fi fi-de"></span> Deutsch</>) },
  //   { value: "nl", label: (<><span className="fi fi-nl"></span> Nederlands</>) },
  // ];
    const languageOptions = [
    { value: "ar", label: (<><span className="fi fi-ma"></span> AR</>) },
    { value: "en", label: (<><span className="fi fi-gb"></span> EN</>) },
    { value: "fr", label: (<><span className="fi fi-fr"></span> FR</>) },
    { value: "es", label: (<><span className="fi fi-es"></span> ES</>) },
    { value: "de", label: (<><span className="fi fi-de"></span> DE</>) },
    { value: "nl", label: (<><span className="fi fi-nl"></span> NL</>) },
  ];

  // ✅ nav links now include lang prefix
  const navItems = [
    { key: "home", label: t("header.Home"), link: "/" },
    { key: "about", label: t("header.about"), link: "/about" },
    { key: "services", label: t("header.services"), link: "/services" },
    { key: "blog", label: t("header.blog"), link: "/blog" },
    { key: "contact", label: t("header.contactUs"), link: "/contact" },
  ];

  const handleNavClick = (link) => {
    if (link === "/" && onFilterChange) onFilterChange("");
    navigate(withLang(link));
    closeMenu();
    closeUserMenu();
    window.scrollTo(0, 0);
  };

  const handleLogoClick = () => {
    if (onFilterChange) onFilterChange("");
    navigate(withLang("/"));
    closeMenu();
    closeUserMenu();
    window.scrollTo(0, 0);
  };

  const renderNavItems = (items) => (
    <ul className={isArabic ? "rtl" : "ltr"}>
      {items.map((item) => {
        const fullPath = withLang(item.link);
        const isActive = stripLangPrefix(location.pathname) === item.link;

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

        <nav ref={navRef} className={`header-nav ${menuOpen ? "open" : ""}`}>
          {renderNavItems(navItems)}
        </nav>

        <div className={`header-actions ${isArabic ? "header-actions-ar" : "header-actions-en is-ltr"}`}>
          <button
            ref={navBtnRef}
            className="menu-toggle"
            onClick={() => {
              // optional: opening nav closes user menu
              if (!menuOpen) closeUserMenu();
              toggleMenu();
            }}
            type="button"
            aria-label="Menu"
            aria-expanded={menuOpen ? "true" : "false"}
          >
            <i className="fas fa-bars"></i>
          </button>

          <Link
            to={withLang("/cart")}
            className="panier-icon"
            onClick={(e) => {
              e.preventDefault();
              navigate(withLang("/cart"));
              closeMenu();
              closeUserMenu();
            }}
          >
            <i className="fas fa-heart"></i>
            {panierCount > 0 && <span className="panier-count">{panierCount}</span>}
          </Link>

          {/* ✅ Auth area: single button (Login OR Account) */}
          {isAuthenticated ? (
            <div className="user-menu">
              <button
                ref={userBtnRef}
                type="button"
                className="header-login user-menu-btn"
                onClick={() => {
                  // optional: opening user menu closes nav
                  if (!userMenuOpen) closeMenu();
                  toggleUserMenu();
                }}
                aria-haspopup="menu"
                aria-expanded={userMenuOpen ? "true" : "false"}
              >
                {t("header.account")}
                <span className={`caret ${userMenuOpen ? "up" : ""}`}>▾</span>
              </button>

              {userMenuOpen && (
                <div
                  ref={userMenuRef}
                  className={`user-menu-dropdown ${isArabic ? "rtl" : "ltr"}`}
                  role="menu"
                >
                  <button
                    type="button"
                    className="user-menu-item"
                    onClick={() => {
                      navigate(withLang("/dashboard"));
                      closeMenu();
                      closeUserMenu();
                    }}
                    role="menuitem"
                  >
                    {t("header.dashboard")}
                  </button>

                  <button
                    type="button"
                    className="user-menu-item danger"
                    onClick={() => {
                      closeUserMenu();
                      openDialog();
                    }}
                    role="menuitem"
                  >
                    {t("header.logout")}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to={withLang("/login")}
              className="header-login"
              onClick={(e) => {
                e.preventDefault();
                navigate(withLang("/login"));
                closeMenu();
                closeUserMenu();
              }}
            >
              {t("header.login")}
            </Link>
          )}

          <Select
            options={languageOptions}
            onChange={changeLanguage}
            className="language-selectt"
            classNamePrefix="react-select"
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
