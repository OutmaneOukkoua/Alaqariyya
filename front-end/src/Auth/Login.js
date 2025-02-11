import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../contexts/AuthContext';

import './Login.css';

function Login() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [validationError, setValidationError] = useState('');
  const API_URL = process.env.REACT_APP_SERVER;

  const restrictedCharacters = /[!=;"_+]/;

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
      navigate('/dashboard', { replace: true });
    }
  }, [navigate]);

  useEffect(() => {
    const handlePopState = () => {
      if (localStorage.getItem('userEmail')) {
        navigate('/dashboard', { replace: true });
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [navigate]);

  const validateInput = () => {
    if (restrictedCharacters.test(email) || restrictedCharacters.test(password)) {
      setValidationError(t('login.invalid_characters'));
      return false;
    }
    setValidationError('');
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateInput()) return;

    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });
      if (response.data.success) {
        login(response.data.email);
        navigate('/dashboard', { replace: true });
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError(t('login.error'));
    }
  };

  return (
    <div className="login-container">
      <div className="bg"></div>
      <div className={`contents ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-7">
              <h3><strong>{t('login.title')}</strong></h3>
              {error && <p className="error">{error}</p>}
              {validationError && <p className="error">{validationError}</p>}
              <form onSubmit={handleLogin}>
                <div className="form-group first">
                  <label>{t('login.email')}</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="form-control"
                    placeholder="your-email@gmail.com"
                    onBlur={validateInput}
                  />
                </div>
                <div className="form-group last mb-3">
                  <label>{t('login.password')}</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="form-control"
                    placeholder="Your Password"
                    onBlur={validateInput}
                  />
                </div>
                <button type="submit" className="btn btn-block btn-primary">
                  {t('login.submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;