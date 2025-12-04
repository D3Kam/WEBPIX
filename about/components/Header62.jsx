"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Header62() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <p className="mb-3 font-semibold md:mb-4">ART</p>
        <h1 className="mb-5 text-h1 font-bold md:mb-6">
          What is art?
        </h1>
        <p className="text-medium">
          We create collaborative art on the blockchain, transforming one
          million pixels into a living, breathing digital canvas
        </p>
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          <Button title="Explore">Explore</Button>
          <Button title="Learn" variant="secondary">
            Learn
          </Button>
        </div>
      </div>
    </section>
  );
}
