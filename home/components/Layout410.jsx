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
          <p className="mb-3 font-semibold md:mb-4">Get familiar</p>
          <h1 className="text-h2 mb-5 font-bold md:mb-6">
            Our digital canvas awaits
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
              <p className="mb-2 font-semibold">Xpixel</p>
              <h2 className="text-h3 mb-5 font-bold md:mb-6">
                Let's create the digital Mona Lisa together
              </h2>
              <p>
                Each pixel block becomes your digital real estate on the
                blockchain. Immutable. Permanent.
              </p>
              <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                <Button variant="secondary">Xframe</Button>
                <Button
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  How it works
                </Button>
              </div>
            </div>
            <div className="order-last flex flex-col items-center justify-center md:order-first">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Testimonials video"
              />
            </div>
          </Card>
          <Card
            className="grid grid-cols-1 content-center overflow-hidden bg-white md:sticky md:mb-[15vh] md:h-[70vh] md:grid-cols-2"
            style={{ top: "18%" }}
          >
            <div className="order-first flex flex-col justify-center p-6 md:p-8 lg:p-12 md:order-first">
              <p className="mb-2 font-semibold">NFT</p>
              <h2 className="text-h3 mb-5 font-bold md:mb-6">
                Current NFT market 
              </h2>
              <p>
                Each pixel block becomes your digital real estate on the
                blockchain. Immutable. Permanent.
              </p>
              <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                <Button variant="secondary">Xframe</Button>
                <Button
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  How it works
                </Button>
              </div>
            </div>
            <div className="order-last flex flex-col items-center justify-center md:order-last">
              <img
                src="/public/media/images/NFT-img.png"
                alt="NFT image"
              />
            </div>
          </Card>
          <Card
            className="grid grid-cols-1 content-center overflow-hidden bg-white md:sticky md:mb-[15vh] md:h-[70vh] md:grid-cols-2"
            style={{ top: "21%" }}
          >
            <div className="order-first flex flex-col justify-center p-6 md:p-8 lg:p-12 md:order-last">
              <p className="mb-2 font-semibold">ART</p>
              <h2 className="text-h3 mb-5 font-bold md:mb-6">
                Current ART market 
              </h2>
              <p>
                Each pixel block becomes your digital real estate on the
                blockchain. Immutable. Permanent.
              </p>
              <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                <Button variant="secondary">Xframe</Button>
                <Button
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  How it works
                </Button>
              </div>
            </div>
            <div className="order-last flex flex-col items-center justify-center md:order-first">
              <img
                src="/public/media/images/ART-img.png"
                alt="ART image"
              />
            </div>
          </Card>
          <Card
            className="grid grid-cols-1 content-center overflow-hidden bg-white md:sticky md:mb-[15vh] md:h-[70vh] md:grid-cols-2"
            style={{ top: "24%" }}
          >
            <div className="order-first flex flex-col justify-center p-6 md:p-8 lg:p-12 md:order-first">
              <p className="mb-2 font-semibold">"ART"</p>
              <h2 className="text-h3 mb-5 font-bold md:mb-6">
                Popular projects
              </h2>
              <p>
                Each pixel block becomes your digital real estate on the
                blockchain. Immutable. Permanent.
              </p>
              <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                <Button variant="secondary">Xframe</Button>
                <Button
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  How it works
                </Button>
              </div>
            </div>
            <div className="order-last flex flex-col items-center justify-center md:order-last">
              <img
                src="/public/media/images/Ducktape_Banana.png"
                alt="Ducktape Banana image"
              />
            </div>
          </Card>
          <Card
            className="grid grid-cols-1 content-center overflow-hidden bg-white md:sticky md:mb-[15vh] md:h-[70vh] md:grid-cols-2"
            style={{ top: "21%" }}
          >
            <div className="order-first flex flex-col justify-center p-6 md:p-8 lg:p-12 md:order-last">
              <p className="mb-2 font-semibold">Xpixel</p>
              <h2 className="text-h3 mb-5 font-bold md:mb-6">
                The Digital Mona Lisa is in our hands
              </h2>
              <p>
                Each pixel block becomes your digital real estate on the
                blockchain. Immutable. Permanent.
              </p>
              <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                <Button variant="secondary">Xframe</Button>
                <Button
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  How it works
                </Button>
              </div>
            </div>
            <div className="order-last flex flex-col items-center justify-center md:order-first">
              <img
                src="/public/media/images/The_Digital_Mona_Lisa.png"
                alt="Digital Mona Lisa image"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
