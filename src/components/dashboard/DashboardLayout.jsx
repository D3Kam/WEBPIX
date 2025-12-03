import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { User, Grid, Menu, X, LogOut } from 'lucide-react';

export default function DashboardLayout({ children }) {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navigation = [
    { name: 'Dashboard', path: '/account', icon: Grid },
    { name: 'My Information', path: '/account/information', icon: User },
    { name: 'My Xpixels', path: '/account/xpixels', icon: Grid },
  ];

  const isActive = (path) => {
    if (path === '/account') {
      return location.pathname === '/account';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex h-screen bg-neutral-lightest">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-white shadow-lg transition-transform duration-300 lg:relative lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex items-center justify-between border-b border-neutral-light px-6 py-4">
            <Link to="/" className="flex items-center">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
                alt="WEBPIX"
                className="h-8"
              />
            </Link>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* User info */}
          <div className="border-b border-neutral-light px-6 py-4">
            <div className="flex items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-white font-semibold">
                {user?.name?.[0]}{user?.surname?.[0]}
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-scheme-text">
                  {user?.name} {user?.surname}
                </p>
                <p className="text-xs text-neutral-dark">{user?.email}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 px-3 py-4">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? 'bg-brand-primary text-white'
                      : 'text-neutral-dark hover:bg-neutral-lightest'
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Logout button */}
          <div className="border-t border-neutral-light p-4">
            <Button
              onClick={handleLogout}
              variant="secondary"
              className="w-full"
              size="sm"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top navbar */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-4 py-3 lg:px-8">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-neutral-dark lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex items-center lg:hidden">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
                alt="WEBPIX"
                className="h-8"
              />
            </div>
            <div className="hidden lg:block">
              <h1 className="text-2xl font-bold text-scheme-text">
                Welcome back, {user?.name}!
              </h1>
            </div>
            <Link to="/" className="text-sm font-medium text-brand-primary hover:text-brand-blue">
              Back to Home
            </Link>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-neutral-lightest p-4 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
