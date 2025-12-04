"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "lucide-react";

export function Layout1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Extra</p>
            <h1 className="mb-5 text-h2 font-bold md:mb-6">
              Additional piece of Xpixel
            </h1>
            <p className="text-medium">
              Get rewarded Xpixel tokens.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Play" variant="secondary">
                I want Xpixel
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
              src="/public/media/images/Xpixel_token.png"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
