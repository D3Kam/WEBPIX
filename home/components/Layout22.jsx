"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "lucide-react";
import Spline from '@splinetool/react-spline';

export function Layout22() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="mb-5 md:mb-6">
              <img
                className="size-40 text-scheme-text max-h-40"
                src="/public/media/images/Xpixel_Logo.svg"
              />
            </div>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Preview Xpixel digital canvas
            </h2>
            <p className="text-medium">
              See how people are transforming a million pixels into a living
              artwork.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Xframe" variant="secondary">
                Xframe
              </Button>
              
            </div>
          </div>
          <div className="">
            <Spline
              scene="https://prod.spline.design/vjLftE5r-WDNIKfk/scene.splinecode"
              className="w-full rounded-image object-cover"
            />
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
