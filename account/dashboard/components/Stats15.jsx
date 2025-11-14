"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Stats15() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container">
        <div className="grid grid-cols-1 items-center gap-y-12 lg:grid-cols-2 lg:gap-x-[4.75rem]">
          <div>
            <p className="mb-3 font-semibold text-white md:mb-4">Connections</p>
            <h2 className="mb-5 text-h2 font-bold text-white md:mb-6">
              Manage your digital identity and payment channels
            </h2>
            <p className="text-medium text-white">
              Secure your Xpixel experience by linking wallets and managing
              communication preferences. Control how you interact with our
              collaborative art platform.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button variant="secondary-alt">Connect</Button>
              <Button
                variant="link-alt"
                size="link"
                iconRight={<ChevronRight className="text-white" />}
              >
                Update
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-y-8 py-2 md:grid-cols-2 md:gap-x-8 md:gap-y-12">
            <div className="border-l border-white pl-8">
              <p className="mb-2 text-[3.5rem] leading-[1.3] font-bold text-white md:text-[4rem] lg:text-[5rem]">
                100%
              </p>
              <h3 className="text-h6 font-bold text-white">
                Wallet connections
              </h3>
            </div>
            <div className="border-l border-white pl-8">
              <p className="mb-2 text-[3.5rem] leading-[1.3] font-bold text-white md:text-[4rem] lg:text-[5rem]">
                75%
              </p>
              <h3 className="text-h6 font-bold text-white">Email management</h3>
            </div>
            <div className="border-l border-white pl-8">
              <p className="mb-2 text-[3.5rem] leading-[1.3] font-bold text-white md:text-[4rem] lg:text-[5rem]">
                50%
              </p>
              <h3 className="text-h6 font-bold text-white">Stripe receipts</h3>
            </div>
            <div className="border-l border-white pl-8">
              <p className="mb-2 text-[3.5rem] leading-[1.3] font-bold text-white md:text-[4rem] lg:text-[5rem]">
                25%
              </p>
              <h3 className="text-h6 font-bold text-white">
                Digital access points
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          className="size-full object-cover"
          alt="Relume placeholder background image"
        />
        <div className="absolute inset-0 bg-neutral-darkest/50" />
      </div>
    </section>
  );
}
