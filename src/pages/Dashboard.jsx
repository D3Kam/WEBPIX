import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import MyInformation from '../components/dashboard/MyInformation';
import MyXpixels from '../components/dashboard/MyXpixels';
import DashboardHome from '../components/dashboard/DashboardHome';

export default function Dashboard() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-brand-primary border-t-transparent"></div>
          <p className="text-lg">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<DashboardHome />} />
        <Route path="/information" element={<MyInformation />} />
        <Route path="/xpixels" element={<MyXpixels />} />
      </Routes>
    </DashboardLayout>
  );
}
