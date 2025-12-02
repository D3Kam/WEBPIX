import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { authAPI } from '../services/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
    walletAddress: '',
    livingAddress: '',
    phoneNumber: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Validate password length
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    // Validate ERC-20 wallet address format if provided
    if (formData.walletAddress && !/^0x[a-fA-F0-9]{40}$/.test(formData.walletAddress)) {
      setError('Invalid ERC-20 wallet address format');
      return;
    }

    setLoading(true);

    const result = await signup({
      name: formData.name,
      surname: formData.surname,
      email: formData.email,
      password: formData.password,
      walletAddress: formData.walletAddress || undefined,
      livingAddress: formData.livingAddress || undefined,
      phoneNumber: formData.phoneNumber || undefined,
    });

    if (result.success) {
      navigate('/account');
    } else {
      setError(result.error || 'Signup failed');
    }

    setLoading(false);
  };

  const handleGoogleSignup = () => {
    window.location.href = authAPI.getGoogleAuthUrl();
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side - Form */}
      <div className="flex w-full flex-col justify-center px-6 py-12 lg:w-1/2 lg:px-20">
        <div className="mx-auto w-full max-w-md">
          {/* Logo */}
          <Link to="/" className="mb-8 inline-block">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
              alt="WEBPIX Logo"
              className="h-12"
            />
          </Link>

          <h1 className="mb-2 text-4xl font-bold text-scheme-text">Create account</h1>
          <p className="mb-8 text-neutral-dark">Join WEBPIX and start owning your pixel space</p>

          {/* Error message */}
          {error && (
            <div className="mb-6 rounded-lg border border-brand-red bg-brand-red/10 p-4 text-brand-red">
              {error}
            </div>
          )}

          {/* Google Sign Up */}
          <Button
            type="button"
            onClick={handleGoogleSignup}
            variant="secondary"
            className="mb-6 w-full"
            size="lg"
          >
            <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </Button>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-neutral-light"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-4 text-neutral-dark">Or sign up with email</span>
            </div>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name and Surname */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-scheme-text">
                  Name <span className="text-brand-red">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="surname" className="mb-2 block text-sm font-medium text-scheme-text">
                  Surname <span className="text-brand-red">*</span>
                </label>
                <Input
                  id="surname"
                  name="surname"
                  type="text"
                  value={formData.surname}
                  onChange={handleChange}
                  placeholder="Doe"
                  required
                  className="w-full"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-scheme-text">
                Email address <span className="text-brand-red">*</span>
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="w-full"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-scheme-text">
                Password <span className="text-brand-red">*</span>
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Min. 8 characters"
                required
                minLength={8}
                className="w-full"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium text-scheme-text">
                Confirm password <span className="text-brand-red">*</span>
              </label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
                minLength={8}
                className="w-full"
              />
            </div>

            {/* ERC-20 Wallet Address (Optional) */}
            <div>
              <label htmlFor="walletAddress" className="mb-2 block text-sm font-medium text-scheme-text">
                ERC-20 Wallet Address <span className="text-neutral-dark text-xs">(Optional)</span>
              </label>
              <Input
                id="walletAddress"
                name="walletAddress"
                type="text"
                value={formData.walletAddress}
                onChange={handleChange}
                placeholder="0x..."
                pattern="^0x[a-fA-F0-9]{40}$"
                className="w-full font-mono text-sm"
              />
            </div>

            {/* Living Address (Optional) */}
            <div>
              <label htmlFor="livingAddress" className="mb-2 block text-sm font-medium text-scheme-text">
                Living Address <span className="text-neutral-dark text-xs">(Optional)</span>
              </label>
              <Input
                id="livingAddress"
                name="livingAddress"
                type="text"
                value={formData.livingAddress}
                onChange={handleChange}
                placeholder="123 Main St, City, Country"
                className="w-full"
              />
            </div>

            {/* Phone Number (Optional) */}
            <div>
              <label htmlFor="phoneNumber" className="mb-2 block text-sm font-medium text-scheme-text">
                Phone Number <span className="text-neutral-dark text-xs">(Optional)</span>
              </label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="+1 234 567 8900"
                className="w-full"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-primary hover:bg-brand-primary/90"
              size="lg"
            >
              {loading ? 'Creating account...' : 'Create account'}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-neutral-dark">
            By signing up, you agree to our Terms of Service and Privacy Policy
          </p>

          <p className="mt-4 text-center text-neutral-dark">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-brand-primary hover:text-brand-blue">
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Right side - Image/Branding */}
      <div className="hidden lg:block lg:w-1/2 bg-gradient-to-br from-brand-blue via-brand-primary to-brand-orange">
        <div className="flex h-full flex-col items-center justify-center p-12 text-white">
          <h2 className="mb-4 text-5xl font-bold">Join the Revolution</h2>
          <p className="mb-6 max-w-md text-center text-xl text-white/90">
            Become part of the world's largest collaborative digital canvas.
          </p>
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="mb-2 text-4xl font-bold">1M+</div>
              <div className="text-sm text-white/80">Total Pixels</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold">Web3</div>
              <div className="text-sm text-white/80">Blockchain</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold">Own</div>
              <div className="text-sm text-white/80">Your Space</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
