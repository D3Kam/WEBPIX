"use client";

import { Button } from "@/components/ui/button";
import { BackgroundCard } from "@/components/ui/card";
import React from "react";

export function Header98() {
  return (
    <section className="px-[5%] py-12 md:py-16 lg:py-20">
      <BackgroundCard className="relative container">
        <div className="relative z-10 flex min-h-[32rem] flex-col items-center justify-center p-8 text-center md:min-h-[40rem] md:p-16">
          <div className="w-full max-w-lg">
            <h1 className="mb-5 text-h1 font-bold text-white md:mb-6">
              Create your digital art legacy
            </h1>
            <p className="text-medium text-white">
              Three simple steps transform your vision into an on-chain
              masterpiece. Join a global community of creators and collectors
              building something unprecedented.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            <Button title="Start" variant="alternate">
              Start
            </Button>
            <Button title="Learn" variant="secondary-alt">
              Learn
            </Button>
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
      </BackgroundCard>
    </section>
  );
}
