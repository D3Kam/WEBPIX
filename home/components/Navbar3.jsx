"use client";

import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const ConditionalRender = ({ condition, children }) => {
  return condition ? <>{children}</> : null;
};

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const toggleDropdownMenu = () => setIsDropdownOpen((prev) => !prev);
  const openDropdownOnHover = () => !isMobile && setIsDropdownOpen(true);
  const closeDropdownOnLeave = () => !isMobile && setIsDropdownOpen(false);

  const animateMobileMenu = isMobileMenuOpen ? "open" : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownIcon = isDropdownOpen ? "rotated" : "initial";

  return {
    isMobileMenuOpen,
    isDropdownOpen,
    toggleMobileMenu,
    toggleDropdownMenu,
    openDropdownOnHover,
    closeDropdownOnLeave,
    animateMobileMenu,
    animateDropdownMenu,
    animateDropdownIcon,
  };
};

const ConditionalCard = () => {
  const Component = ({ children, ...props }) => {
    const isMobile = useMediaQuery("(max-width: 991px)");
    const MotionCard = isMobile ? motion.div : motion.create(Card);
    return React.createElement(MotionCard, props, children);
  };
  return Component;
};

export function Navbar3() {
  const ConditionalRenderedCard = ConditionalCard();
  const useActive = useRelume();
  return (
    <section className="z-[999] grid w-full grid-cols-[1fr_max-content_1fr] items-center justify-between bg-scheme-background px-[5%] md:min-h-18">
      <button
        className="flex size-12 flex-col justify-center lg:hidden"
        onClick={useActive.toggleMobileMenu}
      >
        <span className="my-[3px] h-0.5 w-6 bg-scheme-text lg:hidden" />
        <span className="my-[3px] h-0.5 w-6 bg-scheme-text lg:hidden" />
        <span className="my-[3px] h-0.5 w-6 bg-scheme-text lg:hidden" />
      </button>
      <motion.div
        initial="closed"
        animate={useActive.animateMobileMenu}
        exit="closed"
        variants={{
          closed: {
            x: "-100%",
            opacity: 1,
            transition: { type: "spring", duration: 0.6, bounce: 0 },
            transitionEnd: {
              opacity: "var(--opacity-closed, 0%)",
              x: "var(--x-closed, -100%)",
            },
          },
          open: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", duration: 0.4, bounce: 0 },
          },
        }}
        className="absolute top-0 left-0 z-50 flex h-dvh w-[90%] flex-col border-r border-scheme-border bg-scheme-background px-[5%] pb-4 md:w-[80%] lg:visible lg:static lg:-ml-4 lg:flex lg:h-auto lg:w-auto lg:flex-row lg:border-none lg:px-0 lg:pb-0 lg:[--opacity-closed:100%] lg:[--x-closed:0%]"
      >
        <Link to="/" className="mt-10 mb-8 flex shrink-0 lg:hidden">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
            alt="Logo image"
          />
        </Link>
        <Link to="/xframe" className="relative block py-3 text-base lg:px-4 lg:py-2">
          Xframe
        </Link>
        <Link to="/about" className="relative block py-3 text-base lg:px-4 lg:py-2">
          About
        </Link>
        <Link to="/contact" className="relative block py-3 text-base lg:px-4 lg:py-2">
          Contact
        </Link>
        <Link to="/how-it-works" className="relative block py-3 text-base lg:px-4 lg:py-2">
          How it Works
        </Link>
        <Link to="/faq" className="relative block py-3 text-base lg:px-4 lg:py-2">
          FAQ
        </Link>
        <Link to="/account" className="relative block py-3 text-base lg:px-4 lg:py-2">
          Account
        </Link>
        <Button className="mt-6 w-full lg:hidden" title="Menu" size="sm">
          Menu
        </Button>
      </motion.div>
      <ConditionalRender condition={useActive.isMobileMenuOpen}>
        <motion.div
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 bg-scheme-text lg:hidden"
          onClick={useActive.toggleMobileMenu}
        />
      </ConditionalRender>
      <Link to="/" className="flex min-h-16 shrink-0 items-center">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
          alt="Logo image"
        />
      </Link>
      <div className="flex min-h-16 items-center justify-end gap-x-4">
        <div>
          <Button
            title="Create"
            size="sm"
            className="px-4 py-1 md:px-6 md:py-2"
          >
            Create
          </Button>
        </div>
      </div>
    </section>
  );
}
