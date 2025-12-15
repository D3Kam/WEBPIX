"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

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
              Comfortable tool for creators of all levels
            </p>
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card className="flex flex-col">
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-small font-semibold">Select</p>
                <h3 className="mb-2 text-h5 font-bold">Xpixel selector</h3>
                <p>Intuitive grid system for precise pixel selection</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Link to="/xpixel">
                  <Button
                    title="Xpixel"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Xpixel
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="/WEBPIX/media/images/square_frame_with_pixels.png"
                alt="Relume placeholder image 1"
              />
            </div>
          </Card>
          <Card className="flex flex-col">
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-small font-semibold">Upload</p>
                <h3 className="mb-2 text-h5 font-bold">Own and control your digital space</h3>
                <p>Drag and preview your artwork with ease</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Link to="/xpixel">
                  <Button
                    title="Xpixel"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Xpixel
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="/WEBPIX/media/images/uploading_it_to_web.png"
                alt="Relume placeholder image 1"
              />
            </div>
          </Card>
          <Card className="flex flex-col">
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-small font-semibold">Xpixel tokens</p>
                <h3 className="mb-2 text-h5 font-bold">Additional value</h3>
                <p>Get rewarded for collaboration</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Link to="/how-it-works">
                  <Button
                    title="How it works"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    How it works
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="/WEBPIX/media/images/Xpixel_crypto_token.png"
                alt="Relume placeholder image 1"
              />
            </div>
          </Card>
          <Card className="flex flex-col">
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-small font-semibold">Maturity</p>
                <h3 className="mb-2 text-h5 font-bold">Rise of Xpixel</h3>
                <p>Undergoing Phase 0</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Link to="/xpixel">
                  <Button
                    title="Xpixel"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Xpixel
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="/WEBPIX/media/images/phase_0.png"
                alt="Relume placeholder image 1"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
