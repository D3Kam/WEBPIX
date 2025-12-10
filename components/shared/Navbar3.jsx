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
    <section className="sticky top-0 z-[999] w-full bg-gradient-to-r from-white via-brand-primary/5 to-white border-b-2 border-brand-primary/20 shadow-lg backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-0 sm:px-6 lg:px-8">
        {/* Mobile Menu Button */}
        <button
          className="flex items-center justify-center p-2 text-scheme-text hover:text-brand-primary hover:bg-brand-primary/10 rounded-lg transition-all lg:hidden"
          onClick={useActive.toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {useActive.isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Logo - Center on mobile, left on desktop */}
        <Link to="/" className="flex items-center lg:order-first">
          <img
            src="/WEBPIX/media/icons/Xpixel_Logo.svg"
            alt="Xpixel Logo"
            className="h-20 w-auto "
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:space-x-2">
          <Link
            to="/xframe"
            className="text-base font-semibold text-scheme-text hover:text-brand-primary hover:bg-brand-primary/10 px-4 py-2 rounded-lg transition-all duration-300"
          >
            Xpixel
          </Link>
          <Link
            to="/about"
            className="text-base font-semibold text-scheme-text hover:text-brand-primary hover:bg-brand-primary/10 px-4 py-2 rounded-lg transition-all duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-base font-semibold text-scheme-text hover:text-brand-primary hover:bg-brand-primary/10 px-4 py-2 rounded-lg transition-all duration-300"
          >
            Contact
          </Link>
          <Link
            to="/how-it-works"
            className="text-base font-semibold text-scheme-text hover:text-brand-primary hover:bg-brand-primary/10 px-4 py-2 rounded-lg transition-all duration-300"
          >
            How it Works
          </Link>
          <Link
            to="/faq"
            className="text-base font-semibold text-scheme-text hover:text-brand-primary hover:bg-brand-primary/10 px-4 py-2 rounded-lg transition-all duration-300"
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
              className="flex items-center justify-center rounded-full p-2 text-scheme-text hover:bg-brand-primary hover:text-white transition-all duration-300 border-2 border-transparent hover:border-brand-primary"
              aria-label="Account"
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
                      className="block px-4 py-2 text-sm font-medium text-scheme-text hover:bg-brand-primary hover:text-white transition-all duration-300 rounded-md mx-2 my-1"
                    >
                      Log In
                    </Link>
                    <Link
                      to="/signup"
                      className="block px-4 py-2 text-sm font-medium text-scheme-text hover:bg-brand-primary hover:text-white transition-all duration-300 rounded-md mx-2 my-1"
                    >
                      Sign Up
                    </Link>
                    <div className="my-1 border-t border-brand-primary/20"></div>
                    <Link
                      to="/account"
                      className="block px-4 py-2 text-sm font-medium text-scheme-text hover:bg-brand-primary hover:text-white transition-all duration-300 rounded-md mx-2 my-1"
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

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 z-50 h-full w-[280px] bg-gradient-to-b from-white to-brand-primary/5 shadow-xl lg:hidden border-r-2 border-brand-primary/30"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between border-b-2 border-brand-primary/30 px-4 py-4 bg-brand-primary/5">
                  <img
                    src="/WEBPIX/media/icons/Xpixel_Logo.svg"
                    alt="Xpixel Logo"
                    className="h-8"
                  />
                  <button
                    onClick={useActive.toggleMobileMenu}
                    className="p-2 text-scheme-text"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex-1 overflow-y-auto px-4 py-6">
                  <div className="space-y-1">
                    <Link
                      to="/xframe"
                      className="block rounded-lg px-4 py-3 text-base font-semibold text-scheme-text hover:bg-brand-primary hover:text-white transition-all duration-300 border-l-4 border-transparent hover:border-brand-primary"
                      onClick={useActive.toggleMobileMenu}
                    >
                      Xframe
                    </Link>
                    <Link
                      to="/about"
                      className="block rounded-lg px-4 py-3 text-base font-semibold text-scheme-text hover:bg-brand-primary hover:text-white transition-all duration-300 border-l-4 border-transparent hover:border-brand-primary"
                      onClick={useActive.toggleMobileMenu}
                    >
                      About
                    </Link>
                    <Link
                      to="/contact"
                      className="block rounded-lg px-4 py-3 text-base font-semibold text-scheme-text hover:bg-brand-primary hover:text-white transition-all duration-300 border-l-4 border-transparent hover:border-brand-primary"
                      onClick={useActive.toggleMobileMenu}
                    >
                      Contact
                    </Link>
                    <Link
                      to="/how-it-works"
                      className="block rounded-lg px-4 py-3 text-base font-semibold text-scheme-text hover:bg-brand-primary hover:text-white transition-all duration-300 border-l-4 border-transparent hover:border-brand-primary"
                      onClick={useActive.toggleMobileMenu}
                    >
                      How it Works
                    </Link>
                    <Link
                      to="/faq"
                      className="block rounded-lg px-4 py-3 text-base font-semibold text-scheme-text hover:bg-brand-primary hover:text-white transition-all duration-300 border-l-4 border-transparent hover:border-brand-primary"
                      onClick={useActive.toggleMobileMenu}
                    >
                      FAQ
                    </Link>
                  </div>

                  <div className="mt-6 space-y-2 border-t-2 border-brand-primary/30 pt-6">
                    <Link
                      to="/login"
                      className="block rounded-lg px-4 py-3 text-base font-semibold text-scheme-text hover:bg-brand-primary hover:text-white transition-all duration-300 border-l-4 border-transparent hover:border-brand-primary"
                      onClick={useActive.toggleMobileMenu}
                    >
                      Log In
                    </Link>
                    <Link
                      to="/signup"
                      className="block rounded-lg px-4 py-3 text-base font-semibold text-scheme-text hover:bg-brand-primary hover:text-white transition-all duration-300 border-l-4 border-transparent hover:border-brand-primary"
                      onClick={useActive.toggleMobileMenu}
                    >
                      Sign Up
                    </Link>
                    <Link
                      to="/account"
                      className="block rounded-lg px-4 py-3 text-base font-semibold text-scheme-text hover:bg-brand-primary hover:text-white transition-all duration-300 border-l-4 border-transparent hover:border-brand-primary"
                      onClick={useActive.toggleMobileMenu}
                    >
                      My Account
                    </Link>
                  </div>
                </nav>

                {/* Mobile Footer */}
                <div className="border-t-2 border-brand-primary/30 px-4 py-4 bg-brand-primary/5">
                  <Button className="w-full bg-brand-primary hover:bg-brand-primary/90 shadow-lg hover:shadow-xl hover:shadow-brand-primary/30 transition-all duration-300">
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
