import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { ProtectedRoute } from './components/ProtectedRoute'
import ScrollToTop from './components/ScrollToTop'
import Home from '../home/index.jsx'
import Xpixel from '../xpixel/index.jsx'
import About from '../about/index.jsx'
import Contact from '../contact/index.jsx'
import Faq from '../faq/index.jsx'
import HowItWorks from '../how-it-works/index.jsx'
import Legal from '../legal/index.jsx'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AuthCallback from './pages/AuthCallback'
import Dashboard from './pages/Dashboard'
import Purchase from './pages/Purchase'

function App() {
  return (
    <BrowserRouter basename="/WEBPIX">
      <ScrollToTop />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/xpixel" element={<Xpixel />} />
          <Route path="/buy" element={<Purchase />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route
            path="/account/*"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App