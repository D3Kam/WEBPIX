"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Layout399() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-b from-white to-neutral-lightest/50">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold text-brand-primary md:mb-4">Features</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              How we make digital art simple
            </h2>
            <p className="text-medium text-neutral-dark">
              Comfortable tool for creators of all levels
            </p>
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card
            className="flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-brand-primary/20 cursor-pointer border-2 border-transparent hover:border-brand-primary/50"
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
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
            <div className="relative flex w-full flex-col items-center justify-center self-start overflow-hidden">
              <img
                src="/WEBPIX/media/images/square_frame_with_pixels.png"
                alt="Relume placeholder image 1"
                className={`transition-transform duration-300 ${hoveredCard === 0 ? 'scale-110' : 'scale-100'}`}
              />
              {hoveredCard === 0 && (
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 to-transparent" />
              )}
            </div>
          </Card>
          <Card
            className="flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-brand-primary/20 cursor-pointer border-2 border-transparent hover:border-brand-primary/50"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
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
            <div className="relative flex w-full flex-col items-center justify-center self-start overflow-hidden">
              <img
                src="/WEBPIX/media/images/uploading_it_to_web.png"
                alt="Relume placeholder image 1"
                className={`transition-transform duration-300 ${hoveredCard === 1 ? 'scale-110' : 'scale-100'}`}
              />
              {hoveredCard === 1 && (
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 to-transparent" />
              )}
            </div>
          </Card>
          <Card
            className="flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-brand-primary/20 cursor-pointer border-2 border-transparent hover:border-brand-primary/50"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
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
            <div className="relative flex w-full flex-col items-center justify-center self-start overflow-hidden">
              <img
                src="/WEBPIX/media/images/Xpixel_crypto_token.png"
                alt="Relume placeholder image 1"
                className={`transition-transform duration-300 ${hoveredCard === 2 ? 'scale-110' : 'scale-100'}`}
              />
              {hoveredCard === 2 && (
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 to-transparent" />
              )}
            </div>
          </Card>
          <Card
            className="flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-brand-primary/20 cursor-pointer border-2 border-transparent hover:border-brand-primary/50"
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
          >
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
            <div className="relative flex w-full flex-col items-center justify-center self-start overflow-hidden">
              <img
                src="/WEBPIX/media/images/phase_0.png"
                alt="Relume placeholder image 1"
                className={`transition-transform duration-300 ${hoveredCard === 3 ? 'scale-110' : 'scale-100'}`}
              />
              {hoveredCard === 3 && (
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 to-transparent" />
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
