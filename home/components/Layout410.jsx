"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "lucide-react";

export function Layout410() {
  return (
    <section className="bg-brand-primary px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="md:mb-18 mx-auto mb-12 w-full max-w-lg text-center lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Claim</p>
          <h1 className="text-h2 mb-5 font-bold md:mb-6">
            Your digital canvas awaits
          </h1>
          <p className="text-medium">
            Secure your unique pixel space in our collaborative art project
          </p>
        </div>
        <div className="relative grid auto-cols-fr grid-cols-1 gap-6 md:gap-0">
          <Card
            className="grid grid-cols-1 content-center overflow-hidden bg-white md:sticky md:mb-[15vh] md:h-[70vh] md:grid-cols-2"
            style={{ top: "15%" }}
          >
            <div className="order-first flex flex-col justify-center p-6 md:p-8 lg:p-12 md:order-last">
              <p className="mb-2 font-semibold">Own</p>
              <h2 className="text-h3 mb-5 font-bold md:mb-6">
                Own a permanent pixel spot
              </h2>
              <p>
                Each pixel block becomes your digital real estate on the
                blockchain. Immutable. Permanent.
              </p>
              <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                <Button variant="secondary">Explore</Button>
                <Button
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Details
                </Button>
              </div>
            </div>
            <div className="order-last flex flex-col items-center justify-center md:order-first">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
              />
            </div>
          </Card>
          <Card
            className="grid grid-cols-1 content-center overflow-hidden bg-white md:sticky md:mb-[15vh] md:h-[70vh] md:grid-cols-2"
            style={{ top: "18%" }}
          >
            <div className="order-first flex flex-col justify-center p-6 md:p-8 lg:p-12 md:order-first">
              <p className="mb-2 font-semibold">Own</p>
              <h2 className="text-h3 mb-5 font-bold md:mb-6">
                Own a permanent pixel spot
              </h2>
              <p>
                Each pixel block becomes your digital real estate on the
                blockchain. Immutable. Permanent.
              </p>
              <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                <Button variant="secondary">Explore</Button>
                <Button
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Details
                </Button>
              </div>
            </div>
            <div className="order-last flex flex-col items-center justify-center md:order-last">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 2"
              />
            </div>
          </Card>
          <Card
            className="grid grid-cols-1 content-center overflow-hidden bg-white md:sticky md:mb-[15vh] md:h-[70vh] md:grid-cols-2"
            style={{ top: "21%" }}
          >
            <div className="order-first flex flex-col justify-center p-6 md:p-8 lg:p-12 md:order-last">
              <p className="mb-2 font-semibold">Own</p>
              <h2 className="text-h3 mb-5 font-bold md:mb-6">
                Own a permanent pixel spot
              </h2>
              <p>
                Each pixel block becomes your digital real estate on the
                blockchain. Immutable. Permanent.
              </p>
              <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                <Button variant="secondary">Explore</Button>
                <Button
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Details
                </Button>
              </div>
            </div>
            <div className="order-last flex flex-col items-center justify-center md:order-first">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 3"
              />
            </div>
          </Card>
          <Card
            className="grid grid-cols-1 content-center overflow-hidden bg-white md:sticky md:mb-[15vh] md:h-[70vh] md:grid-cols-2"
            style={{ top: "24%" }}
          >
            <div className="order-first flex flex-col justify-center p-6 md:p-8 lg:p-12 md:order-first">
              <p className="mb-2 font-semibold">Own</p>
              <h2 className="text-h3 mb-5 font-bold md:mb-6">
                Own a permanent pixel spot
              </h2>
              <p>
                Each pixel block becomes your digital real estate on the
                blockchain. Immutable. Permanent.
              </p>
              <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                <Button variant="secondary">Explore</Button>
                <Button
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Details
                </Button>
              </div>
            </div>
            <div className="order-last flex flex-col items-center justify-center md:order-last">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 4"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
