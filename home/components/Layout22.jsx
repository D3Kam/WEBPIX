"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "lucide-react";
import Spline from '@splinetool/react-spline';
import { Link } from "react-router-dom";

export function Layout22() {
  return (
    <section className="px-[5%] py-12 sm:py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-10 sm:gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="mb-5 md:mb-6">
              <img
                className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 text-scheme-text"
                src="/WEBPIX/media/images/Xpixel_Logo.svg"
                alt="Xpixel Logo"
              />
            </div>
            <h2 className="mb-4 sm:mb-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold md:mb-6 leading-tight">
              Get your PIXEL
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              See how people are transforming a million pixels into a living
              artwork.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 md:mt-8">
              <Link to="/xpixel" className="w-full sm:w-auto">
                <Button
                  title="Xpixel"
                  variant="secondary"
                  className="w-full min-h-[56px] text-lg font-semibold active:scale-95 transition-all"
                >
                  Xpixel
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <Spline
                scene="https://prod.spline.design/vjLftE5r-WDNIKfk/scene.splinecode"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Overlay for better text readability */}
            {/* <div className="absolute inset-0 bg-neutral-darkest/30" /> */}
          </div>
          {/* <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div> */}
          
        </div>
      </div>
    </section>
  );
}
