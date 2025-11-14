"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { Call, ChevronRight, LocationOn, Mail } from "relume-icons";

export function Contact14() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Support</p>
          <h2 className="mb-5 text-h2 font-bold md:mb-6">Contact us</h2>
          <p className="text-medium">
            We're here to help you navigate your Xpixel journey.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-[0.5fr_1fr] md:gap-x-20 md:gap-y-16">
          <div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-10">
            <div>
              <div className="mb-3 md:mb-4">
                <Mail className="size-8 text-scheme-text" />
              </div>
              <h3 className="mb-2 text-h6 font-bold">Email</h3>
              <p className="mb-2">Direct line for pixel art inquiries</p>
              <a className="underline" href="#">
                info@xpixel.com
              </a>
            </div>
            <div>
              <div className="mb-3 md:mb-4">
                <Call className="size-8 text-scheme-text" />
              </div>
              <h3 className="mb-2 text-h6 font-bold">Phone</h3>
              <p className="mb-2">Quick support for urgent matters</p>
              <a className="underline" href="#">
                +1 (555) 123 4567
              </a>
            </div>
            <div>
              <div className="mb-3 md:mb-4">
                <LocationOn className="size-8 text-scheme-text" />
              </div>
              <h3 className="mb-2 text-h6 font-bold">Office</h3>
              <p className="mb-2">
                123 Digital Lane, San Francisco, California 94105
              </p>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Get directions"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Get directions
                </Button>
              </div>
            </div>
          </div>
          <a href="#" className="block size-full overflow-hidden">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-map-image.jpeg"
              alt="Relume placeholder map image"
              className="aspect-3/2 size-full rounded-image object-cover"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
