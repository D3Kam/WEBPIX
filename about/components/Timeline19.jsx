"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "lucide-react";

export function Timeline19() {
  return (
    <section className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Journey</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Our path to digital art innovation
            </h2>
            <p className="text-medium">
              From a concept to a global digital art platform. Every milestone
              represents our commitment to creativity.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              <Button title="Timeline" variant="secondary">
                Timeline
              </Button>
              <Button
                title="Explore"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Explore
              </Button>
            </div>
          </div>
        </div>
        <div className="relative grid auto-cols-fr grid-cols-1 md:flex">
          <div className="relative grid auto-cols-fr grid-cols-[0.5fr_max-content_1fr] items-start gap-4 md:flex md:flex-col md:items-center md:gap-0">
            <div className="mb-8 w-full overflow-hidden md:mb-0 md:w-3/5">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="w-full rounded-image"
              />
            </div>
            <div className="relative flex flex-col items-center self-stretch md:mt-8 md:mb-4 md:w-full md:flex-row md:self-auto">
              <div className="absolute top-1.5 left-0 z-10 hidden h-1 w-16 bg-gradient-to-r from-scheme-background to-transparent md:block" />
              <div className="h-2 w-[3px] bg-scheme-text md:h-[3px] md:w-full" />
              <div className="z-20 size-3.75 flex-none rounded-full bg-scheme-text shadow-[0_0_0_8px_var(--color-scheme-background)]" />
              <div className="h-full w-[3px] bg-scheme-text md:h-[3px] md:w-full" />
            </div>
            <div className="pb-4 sm:pb-0 md:mb-0 md:px-3 md:text-center">
              <h3 className="mb-2 text-h5 font-bold">2021</h3>
              <p>
                First concept of collaborative pixel art developed. Initial
                blockchain integration begins.
              </p>
            </div>
          </div>
          <div className="relative grid auto-cols-fr grid-cols-[0.5fr_max-content_1fr] items-start gap-4 md:flex md:flex-col md:items-center md:gap-0">
            <div className="mb-8 w-full overflow-hidden md:mb-0 md:w-3/5">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 2"
                className="w-full rounded-image"
              />
            </div>
            <div className="relative flex flex-col items-center self-stretch md:mt-8 md:mb-4 md:w-full md:flex-row md:self-auto">
              <div className="h-2 w-[3px] bg-scheme-text md:h-[3px] md:w-full" />
              <div className="z-20 size-3.75 flex-none rounded-full bg-scheme-text shadow-[0_0_0_8px_var(--color-scheme-background)]" />
              <div className="h-full w-[3px] bg-scheme-text md:h-[3px] md:w-full" />
            </div>
            <div className="pb-4 sm:pb-0 md:mb-0 md:px-3 md:text-center">
              <h3 className="mb-2 text-h5 font-bold">2022</h3>
              <p>
                Beta platform launched. First artists join the xpixel community.
              </p>
            </div>
          </div>
          <div className="relative grid auto-cols-fr grid-cols-[0.5fr_max-content_1fr] items-start gap-4 md:flex md:flex-col md:items-center md:gap-0">
            <div className="mb-8 w-full overflow-hidden md:mb-0 md:w-3/5">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 3"
                className="w-full rounded-image"
              />
            </div>
            <div className="relative flex flex-col items-center self-stretch md:mt-8 md:mb-4 md:w-full md:flex-row md:self-auto">
              <div className="h-2 w-[3px] bg-scheme-text md:h-[3px] md:w-full" />
              <div className="z-20 size-3.75 flex-none rounded-full bg-scheme-text shadow-[0_0_0_8px_var(--color-scheme-background)]" />
              <div className="h-full w-[3px] bg-scheme-text md:h-[3px] md:w-full" />
            </div>
            <div className="pb-4 sm:pb-0 md:mb-0 md:px-3 md:text-center">
              <h3 className="mb-2 text-h5 font-bold">2023</h3>
              <p>
                Full platform release. Integrated Solana blockchain. Expanded
                global artist network.
              </p>
            </div>
          </div>
          <div className="relative grid auto-cols-fr grid-cols-[0.5fr_max-content_1fr] items-start gap-4 md:flex md:flex-col md:items-center md:gap-0">
            <div className="mb-8 w-full overflow-hidden md:mb-0 md:w-3/5">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 4"
                className="w-full rounded-image"
              />
            </div>
            <div className="relative flex flex-col items-center self-stretch md:mt-8 md:mb-4 md:w-full md:flex-row md:self-auto">
              <div className="h-2 w-[3px] bg-scheme-text md:h-[3px] md:w-full" />
              <div className="z-20 size-3.75 flex-none rounded-full bg-scheme-text shadow-[0_0_0_8px_var(--color-scheme-background)]" />
              <div className="h-full w-[3px] bg-scheme-text md:h-[3px] md:w-full" />
            </div>
            <div className="pb-4 sm:pb-0 md:mb-0 md:px-3 md:text-center">
              <h3 className="mb-2 text-h5 font-bold">2024</h3>
              <p>
                International expansion. New features. Growing global digital
                art community.
              </p>
            </div>
          </div>
          <div className="relative grid auto-cols-fr grid-cols-[0.5fr_max-content_1fr] items-start gap-4 md:flex md:flex-col md:items-center md:gap-0">
            <div className="mb-8 w-full overflow-hidden md:mb-0 md:w-3/5">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 5"
                className="w-full rounded-image"
              />
            </div>
            <div className="relative flex flex-col items-center self-stretch md:mt-8 md:mb-4 md:w-full md:flex-row md:self-auto">
              <div className="h-2 w-[3px] bg-scheme-text md:h-[3px] md:w-full" />
              <div className="z-20 size-3.75 flex-none rounded-full bg-scheme-text shadow-[0_0_0_8px_var(--color-scheme-background)]" />
              <div className="h-full w-[3px] bg-scheme-text md:h-[3px] md:w-full hidden md:block" />
              <div className="absolute top-1.5 right-0 z-0 hidden h-1 w-16 bg-gradient-to-l from-scheme-background to-transparent md:block" />
            </div>
            <div className="pb-4 sm:pb-0 md:mb-0 md:px-3 md:text-center">
              <h3 className="mb-2 text-h5 font-bold">2025</h3>
              <p>
                Vision of a truly decentralized, collaborative digital art
                ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
