"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Header62() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <p className="mb-3 font-semibold md:mb-4">Answers</p>
        <h1 className="mb-5 text-h1 font-bold md:mb-6">
          Frequently asked questions
        </h1>
        <p className="text-medium">
          Find clear and direct answers to common questions about purchasing
          pixel spaces and creating your digital artwork on Xpixel.
        </p>
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          <Button title="Get started">Get started</Button>
          <Button title="Learn more" variant="secondary">
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
}
