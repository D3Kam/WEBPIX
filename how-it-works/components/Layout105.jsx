"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight, Image } from "lucide-react";

export function Layout105() {
  return (
    <section className="bg-brand-primary px-[5%] py-16 text-white md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Tagline</p>
            <h3 className="text-h2 font-bold">
              Community guidelines for digital art
            </h3>
          </div>
          <div>
            <p className="mb-5 text-medium md:mb-4">
              We maintain a respectful, creative environment. All submissions
              undergo review to ensure quality and appropriateness.
            </p>
            <div className="grid grid-cols-1 gap-4 py-0 md:gap-6 md:py-2">
              <ul className="grid grid-cols-1 gap-4 py-2">
                <li className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Image className="size-6 text-scheme-text" />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </li>
                <li className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Image className="size-6 text-scheme-text" />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </li>
                <li className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Image className="size-6 text-scheme-text" />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </li>
              </ul>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button variant="secondary">Review</Button>
              <Button
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Guidelines
              </Button>
            </div>
          </div>
        </div>
        <img
          src="/public/media/images/upload_guidelines.png"
          className="w-full rounded-image object-cover"
          alt="Relume placeholder image"
        />
      </div>
    </section>
  );
}
