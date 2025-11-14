"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

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
                <p>Blocks selected</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Countdown active</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Secure placement</p>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Confirm" variant="secondary">
                Confirm
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
        </div>
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
          className="w-full rounded-image object-cover"
          alt="Relume placeholder image"
        />
      </div>
    </section>
  );
}
