"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "lucide-react";

export function Layout109_1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Summary</p>
            <h3 className="text-h2 font-bold">
              Your pixel journey starts here
            </h3>
          </div>
          <div>
            <p className="mb-5 text-medium md:mb-6">
              Review your selection and prepare to immortalize your artwork on
              the blockchain.
            </p>
            <ul className="my-4 list-disc pl-5">
              <li className="my-1 self-start pl-2">
                <p>Select the sector</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Get your Xpixels</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Get Xpixel Token</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Upload your piece within 30 days</p>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              
              <Button
                title="BuyXpixel"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                I want Xpixel
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
