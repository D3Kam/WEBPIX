"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "lucide-react";

export function Layout399() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Features</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              How we make digital art simple
            </h2>
            <p className="text-medium">
              Powerful tools for creators of all levels
            </p>
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card className="flex flex-col">
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-small font-semibold">Select</p>
                <h3 className="mb-2 text-h5 font-bold">Xpixel selector</h3>
                <p>Intuitive grid system for precise pixel placement</p>
              </div>
              <div className="mt-5 md:mt-6">
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
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
          </Card>
          <Card className="flex flex-col">
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-small font-semibold">Upload</p>
                <h3 className="mb-2 text-h5 font-bold">Own and control your digital space</h3>
                <p>Drag, resize, and position your artwork with ease</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Learn"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Learn
                </Button>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
          </Card>
          <Card className="flex flex-col">
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-small font-semibold">Crypto tokens</p>
                <h3 className="mb-2 text-h5 font-bold">Additional value</h3>
                <p>Fast, secure blockchain transactions for global creators</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Connect"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Connect
                </Button>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
          </Card>
          <Card className="flex flex-col">
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-small font-semibold">Maturity</p>
                <h3 className="mb-2 text-h5 font-bold">Rise of Xpixel</h3>
                <p>Simple, secure payment method for everyone</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Pay"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Pay
                </Button>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
