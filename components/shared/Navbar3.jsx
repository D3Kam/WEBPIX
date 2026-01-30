"use client";

import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { User, X, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const ConditionalRender = ({ condition, children }) => {
  return condition ? <>{children}</> : null;
};

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const toggleAccountDropdown = () => setIsAccountDropdownOpen((prev) => !prev);
  const openAccountDropdownOnHover = () => !isMobile && setIsAccountDropdownOpen(true);
  const closeAccountDropdownOnLeave = () => !isMobile && setIsAccountDropdownOpen(false);

  const animateMobileMenu = isMobileMenuOpen ? "open" : "closed";
  const animateAccountDropdown = isAccountDropdownOpen ? "open" : "close";

  return {
    isMobileMenuOpen,
    isAccountDropdownOpen,
    toggleMobileMenu,
    toggleAccountDropdown,
    openAccountDropdownOnHover,
    closeAccountDropdownOnLeave,
    animateMobileMenu,
    animateAccountDropdown,
  };
};

export function Navbar3() {
  const useActive = useRelume();
  const isMobile = useMediaQuery("(max-width: 991px)");

  return (
    <section className="sticky top-0 z-[999] w-full bg-gradient-to-r from-brand-primary/70 via-brand-primary/80 to-brand-primary/70 border-b-2 border-brand-primary/30 shadow-lg shadow-brand-primary/20 backdrop-blur-sm safe-top">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        {/* Mobile Menu Button - Larger touch target */}
        <button
          className="flex items-center justify-center min-w-[48px] min-h-[48px] p-3 text-neutral-darkest hover:text-white hover:bg-neutral-darkest/10 rounded-lg transition-all active:scale-95 lg:hidden"
          onClick={useActive.toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={useActive.isMobileMenuOpen}
        >
          {useActive.isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Logo and Home Button */}
        <div className="flex items-center gap-3 lg:gap-4">
          <Link to="/" className="flex items-center">
            <img
              src="/WEBPIX/media/icons/Xpixel_Logo.svg"
              alt="Xpixel Logo"
              className="h-16 w-auto sm:h-20"
            />
          </Link>
          <Link
            to="/"
            className="hidden lg:block text-base font-semibold text-neutral-darkest hover:text-white hover:bg-neutral-darkest/10 px-4 py-2 rounded-lg transition-all duration-300"
          >
            Home
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:space-x-2">
          <Link
            to="/xpixel"
            className="text-base font-semibold text-neutral-darkest hover:text-white hover:bg-neutral-darkest/10 px-4 py-2 rounded-lg transition-all duration-300"
          >
            Xpixel
          </Link>
          <Link
            to="/about"
            className="text-base font-semibold text-neutral-darkest hover:text-white hover:bg-neutral-darkest/10 px-4 py-2 rounded-lg transition-all duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-base font-semibold text-neutral-darkest hover:text-white hover:bg-neutral-darkest/10 px-4 py-2 rounded-lg transition-all duration-300"
          >
            Contact
          </Link>
          <Link
            to="/how-it-works"
            className="text-base font-semibold text-neutral-darkest hover:text-white hover:bg-neutral-darkest/10 px-4 py-2 rounded-lg transition-all duration-300"
          >
            How it Works
          </Link>
          <Link
            to="/faq"
            className="text-base font-semibold text-neutral-darkest hover:text-white hover:bg-neutral-darkest/10 px-4 py-2 rounded-lg transition-all duration-300"
          >
            FAQ
          </Link>
        </nav>

        {/* Account Icon with Dropdown */}
        <div className="flex items-center gap-3">

          <div
            className="relative"
            onMouseEnter={useActive.openAccountDropdownOnHover}
            onMouseLeave={useActive.closeAccountDropdownOnLeave}
          >
            <button
              onClick={useActive.toggleAccountDropdown}
              className="flex items-center justify-center rounded-full min-w-[48px] min-h-[48px] p-3 text-neutral-darkest hover:bg-neutral-darkest/10 hover:text-white transition-all duration-300 active:scale-95 border-2 border-neutral-darkest/20 hover:border-neutral-darkest"
              aria-label="Account menu"
              aria-expanded={useActive.isAccountDropdownOpen}
            >
              <User className="h-6 w-6" />
            </button>

            {/* Account Dropdown */}
            {useActive.isAccountDropdownOpen && (
              <div className="absolute right-0 pt-2">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="w-48 rounded-lg border border-neutral-light bg-white shadow-lg"
                >
                  <div className="py-1">
                    <Link
                      to="/login"
                      className="block px-4 py-2 text-sm font-medium text-neutral-darkest hover:bg-brand-primary hover:text-neutral-darkest transition-all duration-300 rounded-md mx-2 my-1"
                    >
                      Log In
                    </Link>
                    <Link
                      to="/signup"
                      className="block px-4 py-2 text-sm font-medium text-neutral-darkest hover:bg-brand-primary hover:text-neutral-darkest transition-all duration-300 rounded-md mx-2 my-1"
                    >
                      Sign Up
                    </Link>
                    <div className="my-1 border-t border-brand-primary/20"></div>
                    <Link
                      to="/account"
                      className="block px-4 py-2 text-sm font-medium text-neutral-darkest hover:bg-brand-primary hover:text-neutral-darkest transition-all duration-300 rounded-md mx-2 my-1"
                    >
                      My Account
                    </Link>
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <ConditionalRender condition={useActive.isMobileMenuOpen}>
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black lg:hidden"
              onClick={useActive.toggleMobileMenu}
            />

            {/* Menu Panel - Modern mobile optimized */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 left-0 z-50 h-full w-[85vw] max-w-[320px] bg-gradient-to-b from-brand-primary via-brand-primary/95 to-brand-primary/90 shadow-2xl lg:hidden border-r-2 border-brand-primary/50 shadow-brand-primary/30 safe-left safe-top safe-bottom"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header - Better touch target */}
                <div className="flex items-center justify-between border-b-2 border-neutral-darkest/20 px-5 py-5 bg-neutral-darkest/5">
                  <img
                    src="/WEBPIX/media/icons/Xpixel_Logo.svg"
                    alt="Xpixel Logo"
                    className="h-10"
                  />
                  <button
                    onClick={useActive.toggleMobileMenu}
                    className="min-w-[48px] min-h-[48px] p-3 text-neutral-darkest hover:text-white hover:bg-neutral-darkest/10 rounded-lg transition-all active:scale-95"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Mobile Navigation Links - Optimized touch targets */}
                <nav className="flex-1 overflow-y-auto overscroll-contain px-5 py-6">
                  <div className="space-y-2">
                    <Link
                      to="/"
                      className="flex items-center rounded-xl px-5 py-4 min-h-[56px] text-lg font-semibold text-neutral-darkest hover:bg-neutral-darkest/10 hover:text-white active:scale-98 transition-all duration-200 border-l-4 border-transparent hover:border-neutral-darkest"
                      onClick={useActive.toggleMobileMenu}
                    >
                      Home
                    </Link>
                    <Link
                      to="/xpixel"
                      className="flex items-center rounded-xl px-5 py-4 min-h-[56px] text-lg font-semibold text-neutral-darkest hover:bg-neutral-darkest/10 hover:text-white active:scale-98 transition-all duration-200 border-l-4 border-transparent hover:border-neutral-darkest"
                      onClick={useActive.toggleMobileMenu}
                    >
                      Xpixel
                    </Link>
                    <Link
                      to="/about"
                      className="flex items-center rounded-xl px-5 py-4 min-h-[56px] text-lg font-semibold text-neutral-darkest hover:bg-neutral-darkest/10 hover:text-white active:scale-98 transition-all duration-200 border-l-4 border-transparent hover:border-neutral-darkest"
                      onClick={useActive.toggleMobileMenu}
                    >
                      About
                    </Link>
                    <Link
                      to="/contact"
                      className="flex items-center rounded-xl px-5 py-4 min-h-[56px] text-lg font-semibold text-neutral-darkest hover:bg-neutral-darkest/10 hover:text-white active:scale-98 transition-all duration-200 border-l-4 border-transparent hover:border-neutral-darkest"
                      onClick={useActive.toggleMobileMenu}
                    >
                      Contact
                    </Link>
                    <Link
                      to="/how-it-works"
                      className="flex items-center rounded-xl px-5 py-4 min-h-[56px] text-lg font-semibold text-neutral-darkest hover:bg-neutral-darkest/10 hover:text-white active:scale-98 transition-all duration-200 border-l-4 border-transparent hover:border-neutral-darkest"
                      onClick={useActive.toggleMobileMenu}
                    >
                      How it Works
                    </Link>
                    <Link
                      to="/faq"
                      className="flex items-center rounded-xl px-5 py-4 min-h-[56px] text-lg font-semibold text-neutral-darkest hover:bg-neutral-darkest/10 hover:text-white active:scale-98 transition-all duration-200 border-l-4 border-transparent hover:border-neutral-darkest"
                      onClick={useActive.toggleMobileMenu}
                    >
                      FAQ
                    </Link>
                  </div>

                  <div className="mt-8 space-y-2 border-t-2 border-neutral-darkest/20 pt-6">
                    <Link
                      to="/login"
                      className="flex items-center rounded-xl px-5 py-4 min-h-[56px] text-lg font-semibold text-neutral-darkest hover:bg-neutral-darkest/10 hover:text-white active:scale-98 transition-all duration-200 border-l-4 border-transparent hover:border-neutral-darkest"
                      onClick={useActive.toggleMobileMenu}
                    >
                      Log In
                    </Link>
                    <Link
                      to="/signup"
                      className="flex items-center rounded-xl px-5 py-4 min-h-[56px] text-lg font-semibold text-neutral-darkest hover:bg-neutral-darkest/10 hover:text-white active:scale-98 transition-all duration-200 border-l-4 border-transparent hover:border-neutral-darkest"
                      onClick={useActive.toggleMobileMenu}
                    >
                      Sign Up
                    </Link>
                    <Link
                      to="/account"
                      className="flex items-center rounded-xl px-5 py-4 min-h-[56px] text-lg font-semibold text-neutral-darkest hover:bg-neutral-darkest/10 hover:text-white active:scale-98 transition-all duration-200 border-l-4 border-transparent hover:border-neutral-darkest"
                      onClick={useActive.toggleMobileMenu}
                    >
                      My Account
                    </Link>
                  </div>
                </nav>

                {/* Mobile Footer */}
                <div className="border-t-2 border-neutral-darkest/20 px-4 py-4 bg-neutral-darkest/5">
                  <Button className="w-full min-h-[56px] bg-neutral-darkest hover:bg-neutral-darkest/90 text-brand-primary shadow-lg hover:shadow-xl hover:shadow-neutral-darkest/30 transition-all duration-300 active:scale-98 text-lg font-semibold">
                    Create
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        </ConditionalRender>
      </div>
    </section>
  );
}
