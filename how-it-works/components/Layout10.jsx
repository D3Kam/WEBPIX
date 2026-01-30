"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight, Image } from "lucide-react";

export function Layout10() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Upload</p>
            <h1 className="mb-5 text-h2 font-bold md:mb-6">
              Prepare your digital artwork
            </h1>
            <p className="mb-6 text-medium md:mb-8">
              Transform your image into a permanent digital artifact. Our
              platform supports high-quality uploads with instant previews.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <Image className="size-12 text-scheme-text" />
                </div>
                <h6 className="mb-3 text-h6 font-bold md:mb-4">
                  Quality Guaranteed
                </h6>
                <p>
                  Upload PNG, JPG, or GIF files up to 10MB. Your artwork is optimized for the blockchain while preserving every detail of your creative vision.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <Image className="size-12 text-scheme-text" />
                </div>
                <h6 className="mb-3 text-h6 font-bold md:mb-4">
                  Upload time
                </h6>
                <p>
                  After succesfull purchase of Xpixel you will be given 30 days to decide and upload your digital artifact. 
                </p>
                <p>
                In the event that Xpixel is fully completed, you will be granted a 14-day period to upload your content.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button
                title="Upload"
                variant="secondary"
                className="shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-primary/20"
              >
                Upload
              </Button>
              <Button
                title="Tips"
                variant="link"
                size="link"
                className="group font-semibold transition-all"
                iconRight={<ChevronRight className="text-scheme-text transition-transform group-hover:translate-x-1" />}
              >
                Tips
              </Button>
            </div>
          </div>
          <div>
            <img
              src="/WEBPIX/media/images/select_upload.png"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
