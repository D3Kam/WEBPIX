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
                  Subheading one
                </h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <Image className="size-12 text-scheme-text" />
                </div>
                <h6 className="mb-3 text-h6 font-bold md:mb-4">
                  Subheading two
                </h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Upload" variant="secondary">
                Upload
              </Button>
              <Button
                title="Tips"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Tips
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
