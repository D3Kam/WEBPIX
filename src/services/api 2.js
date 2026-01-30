// API service for communicating with backend

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Helper function to get auth token
const getToken = () => {
  return localStorage.getItem('token');
};

// Helper function to make API requests
const request = async (endpoint, options = {}) => {
  const token = getToken();

  const config = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  };

  // Add authorization header if token exists
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_URL}${endpoint}`, config);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Something went wrong');
  }

  return data;
};

// Authentication API
export const authAPI = {
  // Sign up with email and password
  signup: async (userData) => {
    return request('/auth/signup', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },

  // Login with email and password
  login: async (email, password) => {
    return request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },

  // Get current user
  getCurrentUser: async () => {
    return request('/auth/me');
  },

  // Google OAuth URL
  getGoogleAuthUrl: () => {
    return `${API_URL.replace('/api', '')}/api/auth/google`;
  },
};

// User API
export const userAPI = {
  // Get user profile
  getProfile: async () => {
    return request('/user/profile');
  },

  // Update user profile
  updateProfile: async (updates) => {
    return request('/user/profile', {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  },

  // Get user statistics
  getStats: async () => {
    return request('/user/stats');
  },

  // Get global statistics
  getGlobalStats: async () => {
    return request('/user/stats/global');
  },
};

// Token management
export const tokenManager = {
  setToken: (token) => {
    localStorage.setItem('token', token);
  },

  removeToken: () => {
    localStorage.removeItem('token');
  },

  getToken,
};
