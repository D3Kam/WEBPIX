"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight, Image } from "lucide-react";

export function Layout16() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Place</p>
            <h1 className="mb-5 text-h2 font-bold md:mb-6">
              Confirm and immortalize your creation
            </h1>
            <p className="mb-5 text-medium md:mb-6">
              Position your artwork precisely on the canvas. Once confirmed,
              your pixels become part of a living, collaborative masterpiece.
            </p>
            <ul className="grid grid-cols-1 gap-4 py-2">
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <Image className="size-6 text-scheme-text" />
                </div>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <Image className="size-6 text-scheme-text" />
                </div>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <Image className="size-6 text-scheme-text" />
                </div>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Confirm" variant="secondary">
                Confirm
              </Button>
              <Button
                title="Preview"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Preview
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
