import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { tokenManager, authAPI } from '../services/api';
import { useAuth } from '../contexts/AuthContext';

export default function AuthCallback() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { updateUser } = useAuth();
  const [error, setError] = useState('');

  useEffect(() => {
    const handleCallback = async () => {
      // Get token from URL
      const token = searchParams.get('token');
      const errorParam = searchParams.get('error');

      if (errorParam) {
        setError('Authentication failed. Please try again.');
        setTimeout(() => navigate('/login'), 3000);
        return;
      }

      if (!token) {
        setError('No authentication token received.');
        setTimeout(() => navigate('/login'), 3000);
        return;
      }

      try {
        // Store token
        tokenManager.setToken(token);

        // Get user data
        const data = await authAPI.getCurrentUser();
        updateUser(data.user);

        // Redirect to dashboard
        navigate('/account');
      } catch (err) {
        console.error('Auth callback error:', err);
        setError('Failed to complete authentication.');
        tokenManager.removeToken();
        setTimeout(() => navigate('/login'), 3000);
      }
    };

    handleCallback();
  }, [searchParams, navigate, updateUser]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-brand-primary/10 to-brand-blue/10">
      <div className="text-center">
        {error ? (
          <>
            <div className="mb-4 text-6xl">❌</div>
            <h1 className="mb-2 text-2xl font-bold text-brand-red">{error}</h1>
            <p className="text-neutral-dark">Redirecting to login...</p>
          </>
        ) : (
          <>
            <div className="mb-4 inline-block h-16 w-16 animate-spin rounded-full border-4 border-brand-primary border-t-transparent"></div>
            <h1 className="mb-2 text-2xl font-bold text-scheme-text">Completing sign in...</h1>
            <p className="text-neutral-dark">Please wait while we set up your account</p>
          </>
        )}
      </div>
    </div>
  );
}
