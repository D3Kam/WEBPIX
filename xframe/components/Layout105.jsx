"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "lucide-react";

export function Layout105() {
  return (
    <section className="bg-brand-primary px-[5%] py-16 text-white md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Sectors</p>
            <h3 className="text-h2 font-bold">
              Your pixel selection at a glance
            </h3>
          </div>
          <div>
            <p className="mb-5 text-medium md:mb-4">
              Visualize the art. Manage
              your selections seamlessly.
            </p>
            <div className="grid grid-cols-1 gap-4 py-0 md:gap-6 md:py-2">
              <ul className="grid grid-cols-1 gap-4 py-2">
                <li className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <img
                      className="size-6 text-scheme-text"
                      src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/border_outer.svg"
                    />
                  </div>
                  <p>Sector 0 - Outer Edge</p>
                </li>
                <li className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <img
                      className="size-6 text-scheme-text"
                      src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/border_outer.svg"
                    />
                  </div>
                  <p>Sector 1 - Outer Ring</p>
                </li>
                <li className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <img
                      className="size-6 text-scheme-text"
                      src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/border_outer.svg"
                    />
                  </div>
                  <p>Sector 2 - Middle Ring</p>
                </li>
                <li className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <img
                      className="size-6 text-scheme-text"
                      src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/border_outer.svg"
                    />
                  </div>
                  <p>Sector 3 - Inner Ring</p>
                </li>
              </ul>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              
              <Button
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Preview sectors
              </Button>
            </div>
          </div>
        </div>
        {/* <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
          className="w-full rounded-image object-cover"
          alt="Relume placeholder image"
        /> */}
      </div>
    </section>
  );
}
