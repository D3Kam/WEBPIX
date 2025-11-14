"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "lucide-react";

export function Layout163() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container flex flex-col items-center text-center">
        <div className="w-full">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
            className="aspect-video size-full rounded-image object-cover"
            alt="Relume placeholder image"
          />
        </div>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <div className="mx-auto w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Success</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Your pixel space is secured
            </h2>
            <p className="mb-5 text-medium md:mb-6">
              You've successfully claimed your spot. Upload now or save for
              later.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 py-2">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                alt="Webflow logo 1"
                className="max-h-14"
              />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
                alt="Relume logo 1"
                className="max-h-14"
              />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                alt="Webflow logo 2"
                className="max-h-14"
              />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
                alt="Relume logo 2"
                className="max-h-14"
              />
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Button title="Upload" variant="secondary">
                Upload
              </Button>
              <Button
                title="Later"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Later
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
