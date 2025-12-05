"use client";

import { Button } from "@/components/ui/button";
import { BackgroundCard } from "@/components/ui/card";
import React from "react";
import Spline from '@splinetool/react-spline';
import { Link } from "react-router-dom";

export function Header98() {
  return (
    <section className="bg-neutral-darker text-white px-[5%] py-12 md:py-16 lg:py-20">
      <BackgroundCard className="relative container overflow-hidden">
        <div className="relative z-10 flex min-h-[32rem] flex-col items-center justify-center p-8 text-center md:min-h-[40rem] md:p-16">
            {/* Spline 3D Background */}
          <div className="absolute inset-0 z-0">
            <Spline
              scene="https://prod.spline.design/fGdQtMAacVCY6vbv/scene.splinecode"
              className="size-full"
            />
            {/* Overlay for better text readability */}
            {/* <div className="absolute inset-0 bg-neutral-darkest/30" /> */}
          </div>

          <div className="w-full max-w-lg">
            <h1 className="mb-5 text-h1 font-bold text-white md:mb-6">
              Digital souls in every pixel
            </h1>
            <p className="text-medium text-white">
              Collaborate with the world by owning your pixel space in a
              massive, living digital Xpixel.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            <Link to="/buy">
              <Button
                title="Get Xpixel"
                variant="alternate"
                className="shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-brand-primary/30"
              >
                Get Xpixel
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button
                title="Learn more"
                variant="secondary-alt"
                className="border-2 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Learn more
              </Button>
            </Link>
          </div>
        </div>
        
      </BackgroundCard>
    </section>
  );
}
