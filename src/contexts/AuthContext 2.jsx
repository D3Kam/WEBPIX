import React, { createContext, useState, useContext, useEffect } from 'react';
import { authAPI, tokenManager } from '../services/api';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check if user is logged in on mount
  useEffect(() => {
    const checkAuth = async () => {
      const token = tokenManager.getToken();

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const data = await authAPI.getCurrentUser();
        setUser(data.user);
      } catch (err) {
        console.error('Auth check failed:', err);
        tokenManager.removeToken();
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Sign up
  const signup = async (userData) => {
    try {
      setError(null);
      const data = await authAPI.signup(userData);
      tokenManager.setToken(data.token);
      setUser(data.user);
      return { success: true };
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    }
  };

  // Login
  const login = async (email, password) => {
    try {
      setError(null);
      const data = await authAPI.login(email, password);
      tokenManager.setToken(data.token);
      setUser(data.user);
      return { success: true };
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    }
  };

  // Logout
  const logout = () => {
    tokenManager.removeToken();
    setUser(null);
    setError(null);
  };

  // Update user data
  const updateUser = (userData) => {
    setUser((prev) => ({ ...prev, ...userData }));
  };

  const value = {
    user,
    loading,
    error,
    signup,
    login,
    logout,
    updateUser,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
