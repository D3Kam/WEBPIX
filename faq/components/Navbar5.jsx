"use client";

import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { motion } from "motion/react";
import React, { useState } from "react";
import { ChevronRight, KeyboardArrowDown } from "relume-icons";

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true);
  };
  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false);
  };
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
  };
};

export function Navbar5() {
  const useActive = useRelume();
  return (
    <section className="relative z-[999] flex w-full items-center justify-between bg-scheme-background lg:min-h-18 lg:px-[5%]">
      <div className="size-full lg:flex lg:items-center lg:justify-between">
        <div className="lg:flex">
          <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
            <a href="#">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
                alt="Logo image"
              />
            </a>
            <button
              className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
              onClick={useActive.toggleMobileMenu}
            >
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-scheme-text"
                animate={useActive.animateMobileMenuButtonSpan}
                variants={{
                  open: { translateY: 8, transition: { delay: 0.1 } },
                  rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                  closed: {
                    translateY: 0,
                    rotate: 0,
                    transition: { duration: 0.2 },
                  },
                }}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-scheme-text"
                animate={useActive.animateMobileMenu}
                variants={{
                  open: { width: 0, transition: { duration: 0.1 } },
                  closed: {
                    width: "1.5rem",
                    transition: { delay: 0.3, duration: 0.2 },
                  },
                }}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-scheme-text"
                animate={useActive.animateMobileMenuButtonSpan}
                variants={{
                  open: { translateY: -8, transition: { delay: 0.1 } },
                  rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                  closed: {
                    translateY: 0,
                    rotate: 0,
                    transition: { duration: 0.2 },
                  },
                }}
              />
            </button>
          </div>
          <motion.div
            variants={{
              open: { height: "var(--height-open, 100dvh)" },
              close: { height: "var(--height-closed, 0)" },
            }}
            initial="close"
            exit="close"
            animate={useActive.animateMobileMenu}
            transition={{ duration: 0.4 }}
            className="overflow-auto px-[5%] lg:ml-6 lg:flex lg:items-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
          >
            <a
              href="#"
              className="block py-3 text-base first:pt-7 lg:px-4 lg:py-6 first:lg:pt-6"
            >
              canvas
            </a>
            <a
              href="#"
              className="block py-3 text-base first:pt-7 lg:px-4 lg:py-6 first:lg:pt-6"
            >
              xframe
            </a>
            <a
              href="#"
              className="block py-3 text-base first:pt-7 lg:px-4 lg:py-6 first:lg:pt-6"
            >
              pricing
            </a>
            <div
              onMouseEnter={useActive.openOnDesktopDropdownMenu}
              onMouseLeave={useActive.closeOnDesktopDropdownMenu}
            >
              <p
                role="button"
                className="flex w-full items-center justify-between gap-2 py-3 text-center text-base lg:w-auto lg:flex-none lg:justify-start lg:px-4 lg:py-6"
                onClick={useActive.openOnMobileDropdownMenu}
              >
                explore
                <motion.span
                  variants={{
                    rotated: { rotate: 180 },
                    initial: { rotate: 0 },
                  }}
                  animate={useActive.animateDropdownMenuIcon}
                  transition={{ duration: 0.3 }}
                >
                  <KeyboardArrowDown className="text-scheme-text" />
                </motion.span>
              </p>
              <motion.div
                variants={{
                  open: {
                    visibility: "visible",
                    opacity: 1,
                    height: "var(--height-open, auto)",
                  },
                  close: {
                    visibility: "hidden",
                    opacity: "0",
                    height: "var(--height-close, 0)",
                  },
                }}
                initial="close"
                exit="close"
                animate={useActive.animateDropdownMenu}
                transition={{ duration: 0.3 }}
                className="top-full bottom-auto left-0 w-full max-w-full min-w-full overflow-hidden bg-scheme-background lg:absolute lg:w-[100vw] lg:border-b lg:border-scheme-border lg:px-[5%] lg:[--height-close:auto]"
              >
                <div className="mx-auto flex size-full max-w-full items-center justify-between">
                  <div className="w-full lg:flex">
                    <div className="grid flex-1 gap-x-8 gap-y-6 py-4 pr-8 md:grid-cols-2 md:px-0 md:py-8 lg:py-8 lg:pr-8">
                      <div className="grid auto-rows-max grid-cols-1 grid-rows-[max-content] gap-y-2 md:gap-y-4">
                        <h4 className="text-small leading-[1.3] font-semibold">
                          project sections
                        </h4>
                        <a
                          href="#"
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex size-6 flex-col items-center justify-center">
                            <img
                              className="text-scheme-text"
                              src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/art_track.svg"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <p className="font-semibold">buy pixels</p>
                            <p className="hidden text-small md:block">
                              collaborative digital art on the blockchain
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex size-6 flex-col items-center justify-center">
                            <img
                              className="text-scheme-text"
                              src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/interactive_space.svg"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <p className="font-semibold">create space</p>
                            <p className="hidden text-small md:block">
                              design your digital canvas placement
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex size-6 flex-col items-center justify-center">
                            <img
                              className="text-scheme-text"
                              src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/join.svg"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <p className="font-semibold">join project</p>
                            <p className="hidden text-small md:block">
                              become a pixel artist
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex size-6 flex-col items-center justify-center">
                            <img
                              className="text-scheme-text"
                              src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/wallet.svg"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <p className="font-semibold">connect wallet</p>
                            <p className="hidden text-small md:block">
                              secure crypto art platform
                            </p>
                          </div>
                        </a>
                      </div>
                      <div className="grid auto-rows-max grid-cols-1 grid-rows-[max-content] gap-y-2 md:gap-y-4">
                        <h4 className="text-small leading-[1.3] font-semibold">
                          community resources
                        </h4>
                        <a
                          href="#"
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex size-6 flex-col items-center justify-center">
                            <img
                              className="text-scheme-text"
                              src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/vr180_create2d.svg"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <p className="font-semibold">how it works</p>
                            <p className="hidden text-small md:block">
                              learn about pixel art creation
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex size-6 flex-col items-center justify-center">
                            <img
                              className="text-scheme-text"
                              src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/question_exchange.svg"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <p className="font-semibold">faq</p>
                            <p className="hidden text-small md:block">
                              common questions answered
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex size-6 flex-col items-center justify-center">
                            <img
                              className="text-scheme-text"
                              src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/farsight_digital.svg"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <p className="font-semibold">about</p>
                            <p className="hidden text-small md:block">
                              our digital art mission
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex size-6 flex-col items-center justify-center">
                            <img
                              className="text-scheme-text"
                              src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/contacts.svg"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <p className="font-semibold">contact</p>
                            <p className="hidden text-small md:block">
                              get in touch with our team
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="relative flex max-w-none flex-1 p-6 md:py-8 md:pr-0 md:pl-8 lg:max-w-md">
                      <div className="relative z-10 grid w-full auto-cols-fr auto-rows-max grid-cols-1 grid-rows-[max-content_max-content] gap-4">
                        <h4 className="text-small leading-[1.3] font-semibold">
                          latest updates
                        </h4>
                        <div className="grid auto-cols-fr grid-cols-1 grid-rows-[auto_auto] items-start gap-y-2 lg:grid-rows-[auto]">
                          <a
                            href="#"
                            className="flex auto-cols-fr grid-cols-[0.6fr_1fr] flex-col gap-x-6 py-2 md:grid"
                          >
                            <div className="relative w-full pt-[66.66%]">
                              <img
                                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                                alt="Relume placeholder image 1"
                                className="absolute inset-0 size-full rounded-image object-cover"
                              />
                            </div>
                            <div className="mt-4 flex flex-col justify-start md:mt-0">
                              <p className="mb-1 font-semibold">
                                blockchain art trends
                              </p>
                              <p className="text-small">
                                emerging digital canvas innovations
                              </p>
                              <div className="mt-1.5">
                                <Button
                                  title="explore more"
                                  variant="link"
                                  size="link"
                                  className="text-small underline"
                                >
                                  explore more
                                </Button>
                              </div>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="flex auto-cols-fr grid-cols-[0.6fr_1fr] flex-col gap-x-6 py-2 md:grid"
                          >
                            <div className="relative w-full pt-[66.66%]">
                              <img
                                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                                alt="Relume placeholder image 2"
                                className="absolute inset-0 size-full rounded-image object-cover"
                              />
                            </div>
                            <div className="mt-4 flex flex-col justify-start md:mt-0">
                              <p className="mb-1 font-semibold">
                                crypto art evolution
                              </p>
                              <p className="text-small">
                                transforming digital ownership
                              </p>
                              <div className="mt-1.5">
                                <Button
                                  title="read insights"
                                  variant="link"
                                  size="link"
                                  className="text-small underline"
                                >
                                  read insights
                                </Button>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="flex items-center">
                          <Button
                            title="view all articles"
                            variant="link"
                            size="link"
                            iconRight={
                              <ChevronRight className="text-scheme-text" />
                            }
                          >
                            view all articles
                          </Button>
                        </div>
                      </div>
                      <div className="absolute top-0 right-auto bottom-0 left-0 min-w-full bg-scheme-foreground lg:min-w-[100vw]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="mt-6 flex w-full flex-col gap-y-4 pb-24 lg:hidden lg:pb-0">
              <Button
                className="w-full"
                title="Button"
                variant="secondary"
                size="sm"
              >
                Button
              </Button>
              <Button className="w-full" title="Button" size="sm">
                Button
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="hidden lg:flex lg:gap-4">
          <Button title="connect" variant="secondary" size="sm">
            connect
          </Button>
          <Button title="start" size="sm">
            start
          </Button>
        </div>
      </div>
    </section>
  );
}
