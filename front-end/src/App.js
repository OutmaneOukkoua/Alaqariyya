import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import NewsArticle from './components/NewsArticle/NewsArticle'; // Import the new component

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

function App() {
  const [filterType, setFilterType] = React.useState('');

  const API_URL = process.env.REACT_APP_SERVER;
  const hasVisited = React.useRef(false);

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
  }, []);

  const handleFilterChange = (type) => {
    setFilterType(type);
  };

  return (
    <AuthProvider>
      <CartProvider>
        <Router>
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
          <div className="App">
            <Header onFilterChange={handleFilterChange} activeFilter={filterType} />
            <LanguageSelector />
            <Routes>
              <Route
                path="/"
                element={
                  <Content filterType={filterType} onFilterChange={handleFilterChange} />
                }
              />
              {/* Add the new route for news articles */}
              <Route path="/news/:id" element={<NewsArticle />} />
              {/* Other routes */}
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/login" element={<Login />} />
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/cart" element={<Cart />} />
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
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
