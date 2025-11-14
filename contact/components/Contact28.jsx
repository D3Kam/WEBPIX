"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Contact28() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mr-auto mb-12 flex max-w-lg flex-col justify-start text-left md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Locations</p>
          <h2 className="mb-5 text-h2 font-bold md:mb-6">Where we are</h2>
          <p className="text-medium">
            Digital art knows no boundaries, but we have physical spaces
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 items-center gap-x-12 gap-y-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col items-start justify-start text-left">
            <div className="mb-6 aspect-[3/2] md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                className="h-full w-full rounded-image object-cover"
                alt="Relume placeholder image"
              />
            </div>
            <h3 className="mb-3 text-h4 font-bold lg:mb-4">London</h3>
            <p className="text-center">
              Digital studio in the heart of creative London
            </p>
            <div className="mt-5 md:mt-6">
              <Button
                title="Find us"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Find us
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start text-left">
            <div className="mb-6 aspect-[3/2] md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                className="h-full w-full rounded-image object-cover"
                alt="Relume placeholder image"
              />
            </div>
            <h3 className="mb-3 text-h4 font-bold lg:mb-4">New York</h3>
            <p className="text-center">
              Creative hub connecting digital artists and blockchain innovators
            </p>
            <div className="mt-5 md:mt-6">
              <Button
                title="Find us"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Find us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
