import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import LanguageSelector from './LanguageSelector';
import Content from './Content';
import Login from './Login';
import Welcome from './Welcome';
import News from './News';
import ProductDetail from './ProductDetail';
import AddProperty from './AddProperty';
import DeleteProperty from './DeleteProperty';
import Dashboard from './Dashboard';
import { CartProvider } from './CartContext';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ContactUs from './ContactUs';
import Cart from './Cart';
import UpdateProperty from './UpdateProperty';
import AddNews from './AddNews';
import DeleteNews from './DeleteNews';
import ContactSubmissions from './ContactSubmissions';

function App() {
  const [filterType, setFilterType] = useState('');

  const handleFilterChange = (type) => {
    setFilterType(type);
  };

  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="App">
            <Header onFilterChange={handleFilterChange} />
            <LanguageSelector />
            <Routes>
              <Route path="/" element={<Content filterType={filterType} />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/news" element={<News />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/add-property" element={<ProtectedRoute><AddProperty /></ProtectedRoute>} />
              <Route path="/delete-property" element={<ProtectedRoute><DeleteProperty /></ProtectedRoute>} />
              <Route path="/update-property" element={<ProtectedRoute><UpdateProperty /></ProtectedRoute>} />
              <Route path="/add-news" element={<ProtectedRoute><AddNews /></ProtectedRoute>} />
              <Route path="/delete-news" element={<ProtectedRoute><DeleteNews /></ProtectedRoute>} />
              <Route path="/contact-submissions" element={<ProtectedRoute><ContactSubmissions /></ProtectedRoute>} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;