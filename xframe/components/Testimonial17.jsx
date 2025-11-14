"use client";

import { Card } from "@/components/ui/card";
import React from "react";
import { Star } from "lucide-react";

export function Testimonial17() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-h2 font-bold md:mb-6">What creators say</h2>
          <p className="text-medium">Real stories from the Xpixel community</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
            <div className="mb-5 flex gap-1 md:mb-6">
              <div className="shrink-0">
                <Star className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <Star className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <Star className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <Star className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <Star className="size-6 text-scheme-text" />
              </div>
            </div>
            <h5 className="text-medium">
              This platform transformed how I think about digital art.
            </h5>
            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <div className="mb-4 size-12 min-h-12 min-w-12 overflow-hidden rounded-full md:mr-4 md:mb-0">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Testimonial avatar"
                  className="size-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold">Sarah Johnson</p>
                <p>Digital artist, London</p>
              </div>
            </div>
          </Card>
          <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
            <div className="mb-5 flex gap-1 md:mb-6">
              <div className="shrink-0">
                <Star className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <Star className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <Star className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <Star className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <Star className="size-6 text-scheme-text" />
              </div>
            </div>
            <h5 className="text-medium">
              Xpixel is the future of collaborative creativity.
            </h5>
            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <div className="mb-4 size-12 min-h-12 min-w-12 overflow-hidden rounded-full md:mr-4 md:mb-0">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Testimonial avatar"
                  className="size-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold">Michael Chen</p>
                <p>Blockchain developer, Singapore</p>
              </div>
            </div>
          </Card>
          <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
            <div className="mb-5 flex gap-1 md:mb-6">
              <div className="shrink-0">
                <Star className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <Star className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <Star className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <Star className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <Star className="size-6 text-scheme-text" />
              </div>
            </div>
            <h5 className="text-medium">
              An incredible way to own a piece of digital history.
            </h5>
            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <div className="mb-4 size-12 min-h-12 min-w-12 overflow-hidden rounded-full md:mr-4 md:mb-0">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Testimonial avatar"
                  className="size-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold">Emma Rodriguez</p>
                <p>Art collector, New York</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
