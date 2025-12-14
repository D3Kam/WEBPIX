"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "lucide-react";

export function Layout109() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Upload</p>
            <h3 className="text-h2 font-bold">
              Bring your piece to the digital canvas
            </h3>
          </div>
          <div>
            <p className="mb-5 text-medium md:mb-6">
              Upload your image with ease. Preview your piece
              in Xpixel.
            </p>
            <ul className="my-4 list-disc pl-5">
              <li className="my-1 self-start pl-2">
                <p>High resolution recommended</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>PNG and JPEG formats accepted</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Max file size 10MB</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>No harmful content</p>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
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
