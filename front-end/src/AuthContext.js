import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    setIsAuthenticated(!!userEmail);
  }, []);

  const login = (email) => {
    localStorage.setItem('userEmail', email);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('userEmail');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
