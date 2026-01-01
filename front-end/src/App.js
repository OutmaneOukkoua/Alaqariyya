import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

// Components
import Header from './components/Header/Header';
import LanguageSelector from './i18n/LanguageSelector';
import Content from './components/Content/Content';
import Login from './Auth/Login';
import Welcome from './components/Welcome/Welcome';
import ProductDetail from './components/ProductDetail/ProductDetail';
import AddProperty from './components/AddProperty/AddProperty';
import Dashboard from './components/Dashboard/Dashboard';
import ContactUs from './components/ContactUs/ContactUs';
import Cart from './components/Cart/Cart';
import PropertyPage from './components/propertyPage/propertyPage';
import AddNews from './components/AddNews/AddNews';
import NewsPage from './components/newsPage/newsPage';
import ContactSubmissions from './components/ContactUs/ContactSubmissions';
import Statistique from './components/Statistique/Statistique';
import NewsArticle from './components/NewsArticle/NewsArticle';
import About from './components/About/About';
import Services from './components/Services/Services';
import Blog from './components/blog/Blog';
import FloatingContact from "./components/FloatingContact/FloatingContact";

// i18n
import { useTranslation } from 'react-i18next';

// Contexts
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';

// Routes
import ProtectedRoute from './routes/ProtectedRoute';

// Styles and Libraries
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// SEO
import { Helmet } from 'react-helmet';

const SUPPORTED_LANGS = ['ar', 'en', 'fr', 'de', 'es', 'nl'];

function AppShell() {
  const [filterType, setFilterType] = React.useState('');

  const API_URL = process.env.REACT_APP_SERVER;
  const hasVisited = React.useRef(false);

  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const lngFromUrl = params.lng;

  React.useEffect(() => {
    if (!hasVisited.current) {
      hasVisited.current = true;
      axios
        .get(`${API_URL}/api/visitor/increment`)
        .then((response) => {
          console.log('Visitor count incremented:', response.data.count);
        })
        .catch((error) => {
          console.error('Error incrementing visitor count:', error);
        });
    }
    // eslint-disable-next-line
  }, []);

  const handleFilterChange = (type) => {
    setFilterType(type);
  };

  // ✅ 1) Sync i18n language from URL (/ar, /fr, ...)
  React.useEffect(() => {
    if (!lngFromUrl) return;

    if (!SUPPORTED_LANGS.includes(lngFromUrl)) {
      const fallback = i18n.language && SUPPORTED_LANGS.includes(i18n.language) ? i18n.language : 'ar';
      navigate(`/${fallback}`, { replace: true });
      return;
    }

    if (i18n.language !== lngFromUrl) {
      i18n.changeLanguage(lngFromUrl);
      localStorage.setItem('i18nextLng', lngFromUrl);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lngFromUrl]);

  // ✅ 2) If user changes language from Header (i18n.changeLanguage),
  // update URL prefix while keeping the same page + querystring.
  const lastSyncedLng = React.useRef(null);

  React.useEffect(() => {
    const currentLng = i18n.language;

    if (!currentLng || !SUPPORTED_LANGS.includes(currentLng)) return;
    if (!lngFromUrl) return;

    // prevent loops
    if (lastSyncedLng.current === currentLng && lngFromUrl === currentLng) return;

    // If URL and i18n differ, rewrite URL to match i18n
    if (lngFromUrl !== currentLng) {
      // remove current "/{lng}" prefix from pathname
      const prefix = `/${lngFromUrl}`;
      const restPath = location.pathname.startsWith(prefix)
        ? location.pathname.slice(prefix.length) || '/'
        : location.pathname || '/';

      const nextPath = `/${currentLng}${restPath === '/' ? '' : restPath}${location.search}`;
      lastSyncedLng.current = currentLng;
      navigate(nextPath, { replace: true });
    } else {
      lastSyncedLng.current = currentLng;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language, lngFromUrl, location.pathname, location.search]);

  const hideFloatingContact = location.pathname.includes("/dashboard");

  return (
    <div className="App">
      <Helmet
        htmlAttributes={{ lang: i18n.language || "ar" }}
        titleTemplate="%s | ALAQARIYYA العقارية"
        defaultTitle="ALAQARIYYA العقارية"
      >
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
      </Helmet>
      
      <Header onFilterChange={handleFilterChange} activeFilter={filterType} />
      <LanguageSelector />
      <Routes>
        <Route
          path="/"
          element={<Content filterType={filterType} onFilterChange={handleFilterChange} />}
        />

        <Route path="/news/:id" element={<NewsArticle />} />
        <Route path="/product/:id" element={<ProductDetail />} />

        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/blog" element={<Blog />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-property"
          element={
            <ProtectedRoute>
              <AddProperty />
            </ProtectedRoute>
          }
        />

        <Route
          path="/property-page"
          element={
            <ProtectedRoute>
              <PropertyPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-news"
          element={
            <ProtectedRoute>
              <AddNews />
            </ProtectedRoute>
          }
        />

        <Route
          path="/news-page"
          element={
            <ProtectedRoute>
              <NewsPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/contact-submissions"
          element={
            <ProtectedRoute>
              <ContactSubmissions />
            </ProtectedRoute>
          }
        />

        <Route
          path="/statistique"
          element={
            <ProtectedRoute>
              <Statistique />
            </ProtectedRoute>
          }
        />
      </Routes>
      {!hideFloatingContact && <FloatingContact />}
    </div>
  );
}

function App() {
  // ✅ redirect "/" -> "/{lang}" based on saved language (or fallback)
  const savedLng = localStorage.getItem('i18nextLng');
  const initialLng = savedLng && SUPPORTED_LANGS.includes(savedLng) ? savedLng : 'ar';

  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to={`/${initialLng}`} replace />} />
            <Route path="/:lng/*" element={<AppShell />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
