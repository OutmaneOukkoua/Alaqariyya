import React, { useState, useEffect, useContext, useMemo } from "react";
import axios from "axios";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../contexts/AuthContext";

import "./Login.css";

const SUPPORTED_LANGS = ["ar", "en", "fr", "de", "es", "nl"];

function Login() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { lng } = useParams();

  // ✅ language state that reacts instantly
  const [currentLng, setCurrentLng] = useState(() => {
    return SUPPORTED_LANGS.includes(lng)
      ? lng
      : SUPPORTED_LANGS.includes(i18n.language)
      ? i18n.language
      : "ar";
  });

  // ✅ update when URL lang OR i18n lang changes
  useEffect(() => {
    const nextLng = SUPPORTED_LANGS.includes(lng)
      ? lng
      : SUPPORTED_LANGS.includes(i18n.language)
      ? i18n.language
      : "ar";

    setCurrentLng(nextLng);
  }, [lng, i18n.language]);

  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [validationError, setValidationError] = useState("");

  const API_URL = process.env.REACT_APP_SERVER;
  const restrictedCharacters = /[!=;"_+]/;

  // ✅ helper to build language-aware paths (memo to always use latest lang)
  const withLang = useMemo(() => {
    return (path) => {
      if (path === "/") return `/${currentLng}`;
      return `/${currentLng}${path.startsWith("/") ? path : `/${path}`}`;
    };
  }, [currentLng]);

  // ✅ if already logged in → go to dashboard with lang
  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
      navigate(withLang("/dashboard"), { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [withLang]);

  // ✅ prevent going back to login after auth
  useEffect(() => {
    const handlePopState = () => {
      if (localStorage.getItem("userEmail")) {
        navigate(withLang("/dashboard"), { replace: true });
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [navigate, withLang]);

  const validateInput = () => {
    if (restrictedCharacters.test(email) || restrictedCharacters.test(password)) {
      setValidationError(t("login.invalid_characters"));
      return false;
    }
    setValidationError("");
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateInput()) return;

    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });

      if (response.data.success) {
        login(response.data.email);
        navigate(withLang("/dashboard"), { replace: true, state: { from: location } });
      } else {
        setError(response.data.message || t("login.error"));
      }
    } catch (err) {
      setError(t("login.error"));
    }
  };

  // ✅ (اختياري) حل نهائي جداً: force remount عند تغيّر اللغة
  // لو مازال شي جزء ما كيتبدلش عندك
  const rtl = currentLng === "ar";

  return (
    <div className="login-page" key={currentLng}>
      <div className={`login-shell ${rtl ? "rtl" : "ltr"}`}>
        {/* ✅ الصورة داخل JSX بدل CSS */}
        <div className="login-media" aria-hidden="true">
          <img
            className="login-image"
            src="/login.jpg"
            alt=""
          />
        </div>

        <div className="login-form">
          <h3 className="login-title">
            <strong>{t("login.title")}</strong>
          </h3>

          {error && <p className="error">{error}</p>}
          {validationError && <p className="error">{validationError}</p>}

          <form onSubmit={handleLogin} noValidate>
            <div className="form-group">
              <label>{t("login.email")}</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-control"
                placeholder={t("login.email")}
                onBlur={validateInput}
                autoComplete="username"
              />
            </div>

            <div className="form-group">
              <label>{t("login.password")}</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="form-control"
                placeholder={t("login.password")}
                onBlur={validateInput}
                autoComplete="current-password"
              />
            </div>

            <button type="submit" className="btn-primary">
              {t("login.submit")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
