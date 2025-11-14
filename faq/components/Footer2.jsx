"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
  YoutubeLogo,
} from "relume-icons";

export function Footer2() {
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-x-[8vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-20">
          <div className="grid grid-cols-1 items-start gap-x-8 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 md:gap-x-8 lg:grid-cols-4">
            <a
              href="#"
              className="sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:row-end-2 lg:col-start-auto lg:col-end-auto lg:row-start-auto lg:row-end-auto"
            >
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
                alt="Logo image"
              />
            </a>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4">Explore</h2>
              <ul>
                <li className="py-2 text-small">
                  <a href="#" className="flex items-center gap-3">
                    Home
                  </a>
                </li>
                <li className="py-2 text-small">
                  <a href="#" className="flex items-center gap-3">
                    Xframe
                  </a>
                </li>
                <li className="py-2 text-small">
                  <a href="#" className="flex items-center gap-3">
                    Pricing
                  </a>
                </li>
                <li className="py-2 text-small">
                  <a href="#" className="flex items-center gap-3">
                    About
                  </a>
                </li>
                <li className="py-2 text-small">
                  <a href="#" className="flex items-center gap-3">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4">Resources</h2>
              <ul>
                <li className="py-2 text-small">
                  <a href="#" className="flex items-center gap-3">
                    FAQ
                  </a>
                </li>
                <li className="py-2 text-small">
                  <a href="#" className="flex items-center gap-3">
                    How it works
                  </a>
                </li>
                <li className="py-2 text-small">
                  <a href="#" className="flex items-center gap-3">
                    Legal
                  </a>
                </li>
                <li className="py-2 text-small">
                  <a href="#" className="flex items-center gap-3">
                    Dashboard
                  </a>
                </li>
                <li className="py-2 text-small">
                  <a href="#" className="flex items-center gap-3">
                    Link Ten
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4">Connect</h2>
              <ul>
                <li className="py-2 text-small">
                  <a href="#" className="flex items-center gap-3">
                    Wallet
                  </a>
                </li>
                <li className="py-2 text-small">
                  <a href="#" className="flex items-center gap-3">
                    Community
                  </a>
                </li>
                <li className="py-2 text-small">
                  <a href="#" className="flex items-center gap-3">
                    Blog
                  </a>
                </li>
                <li className="py-2 text-small">
                  <a href="#" className="flex items-center gap-3">
                    Support
                  </a>
                </li>
                <li className="py-2 text-small">
                  <a href="#" className="flex items-center gap-3">
                    Link Fifteen
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="mb-3 font-semibold md:mb-4">Subscribe</h1>
            <p className="mb-3 text-small md:mb-4">
              Get the latest updates on our digital art project and pixel canvas
              innovations.
            </p>
            <div className="w-full max-w-md">
              <form className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] md:gap-y-4">
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                />
                <Button title="Submit" variant="secondary" size="sm">
                  Submit
                </Button>
              </form>
              <p className="text-tiny">
                By subscribing, you agree to our privacy policy and terms of
                service.
              </p>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-scheme-border" />
        <div className="flex flex-col-reverse items-start pt-6 pb-4 text-small md:justify-start md:pt-8 md:pb-0 lg:flex-row lg:items-center lg:justify-between">
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 md:grid-flow-col md:justify-center md:gap-x-6 md:gap-y-0 lg:text-left">
            <li className="mt-4 md:mt-0">
              © 2024 Xpixel. All rights reserved.
            </li>
            <li className="underline">
              <a href="#">Privacy policy</a>
            </li>
            <li className="underline">
              <a href="#">Terms of service</a>
            </li>
            <li className="underline">
              <a href="#">Cookies</a>
            </li>
          </ul>
          <div className="mb-8 flex items-center justify-center gap-3 lg:mb-0">
            <a href="#">
              <FacebookLogo className="size-6 text-scheme-text" />
            </a>
            <a href="#">
              <InstagramLogo className="size-6 text-scheme-text" />
            </a>
            <a href="#">
              <XLogo className="size-6 p-0.5 text-scheme-text" />
            </a>
            <a href="#">
              <LinkedinLogo className="size-6 text-scheme-text" />
            </a>
            <a href="#">
              <YoutubeLogo className="size-6 text-scheme-text" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
