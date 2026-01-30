"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight, Image } from "lucide-react";

export function Layout10_1() {
  return (
    <section className="bg-brand-primary px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Select</p>
            <h1 className="mb-5 text-h2 font-bold md:mb-6">
              Select your place in Xpixel.
            </h1>
            <p className="mb-6 text-medium md:mb-8">
            Preview exactly how your selected area will appear on the canvas, then choose the sector that fits your vision.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <Image className="size-12 text-scheme-text" />
                </div>
                <h6 className="mb-3 text-h6 font-bold md:mb-4">
                  See the possible shapes
                </h6>
                <p>
                  There are various combinations of 10x10 pixels to choose from.
                  
                </p>
                <p>Move the selected shape across the Xpixel canvas to find your spot.</p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <Image className="size-12 text-scheme-text" />
                </div>
                <h6 className="mb-3 text-h6 font-bold md:mb-4">
                  Prewiev your artpiece
                </h6>
                <p>Upload your digital artwork to the Xpixel canvas and visualize it instantly.</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Learn" variant="secondary">
                Learn
              </Button>
              <Button
                title="Details"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Details
              </Button>
            </div>
          </div>
          <div>
            <img
              src="/WEBPIX/media/images/square_frame_with_pixels.png"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
