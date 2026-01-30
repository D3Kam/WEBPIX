"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { ChevronRight } from "lucide-react";

const useRelume = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const xPartOne = useTransform(scrollYProgress, [0, 1], ["1%", "5%"]);
  const xPartTwo = useTransform(scrollYProgress, [0, 1], ["-1%", "-5%"]);
  return {
    sectionRef,
    xPartOne,
    xPartTwo,
  };
};

export function Layout414() {
  const relumeData = useRelume();
  return (
    <section
      ref={relumeData.sectionRef}
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-8 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
            <div>
              <p className="mb-3 font-semibold md:mb-4">Maturity</p>
              <h2 className="text-h2 font-bold">See the maturity of Xpixel</h2>
            </div>
            <div>
              <p className="text-medium">
              See the maturity of Xpixel in a system where structure meets expression.
              Every pixel is governed by clear logic, yet together they form something larger than code.
              This is not an experiment, but a living canvas built to endure, evolve, and scale.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button title="Explore" variant="secondary">
                  Explore
                </Button>
                <Button
                  title="Guide"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Guide
                </Button>
              </div>
            </div>
          </div>
          <div className="flex w-screen flex-col items-center gap-4 overflow-hidden">
            <motion.div
              className="flex size-full flex-nowrap items-center justify-center gap-4"
              style={{ translateX: relumeData.xPartOne }}
            >
              <div className="w-[40vw] flex-none md:w-[30vw]">
                <img
                  className="aspect-[4/3] w-full rounded-image object-cover"
                  src="/WEBPIX/media/images/Ducktape_Banana.png"
                  alt="Relume placeholder image 1"
                />
              </div>
              <div className="w-[40vw] flex-none md:w-[30vw]">
                <img
                  className="aspect-[4/3] w-full rounded-image object-cover"
                  src="/WEBPIX/media/images/information_through_pixels.png"
                  alt="Relume placeholder image 2"
                />
              </div>
              <div className="w-[40vw] flex-none md:w-[30vw]">
                <img
                  className="aspect-[4/3] w-full rounded-image object-cover"
                  src="/WEBPIX/media/images/upload_review.webp"
                  alt="Relume placeholder image 3"
                />
              </div>
              <div className="w-[40vw] flex-none md:w-[30vw]">
                <img
                  className="aspect-[4/3] w-full rounded-image object-cover"
                  src="/WEBPIX/media/images/uploading_it_to_web.png"
                  alt="Relume placeholder image 4"
                />
              </div>
            </motion.div>
            <motion.div
              className="flex size-full flex-nowrap items-center justify-center gap-4"
              style={{ translateX: relumeData.xPartTwo }}
            >
              <div className="w-[40vw] flex-none md:w-[30vw]">
                <img
                  className="aspect-[4/3] w-full rounded-image object-cover"
                  src="/WEBPIX/media/images/information_through_pixels.png"
                  alt="Relume placeholder image 5"
                />
              </div>
              <div className="w-[40vw] flex-none md:w-[30vw]">
                <img
                  className="aspect-[4/3] w-full rounded-image object-cover"
                  src="/WEBPIX/media/images/pixel_selection.png"
                  alt="Relume placeholder image 6"
                />
              </div>
              <div className="w-[40vw] flex-none md:w-[30vw]">
                <img
                  className="aspect-[4/3] w-full rounded-image object-cover"
                  src="/WEBPIX/media/images/coordinates_screen.png"
                  alt="Relume placeholder image 7"
                />
              </div>
              <div className="w-[40vw] flex-none md:w-[30vw]">
                <img
                  className="aspect-[4/3] w-full rounded-image object-cover"
                  src="/WEBPIX/media/images/square_frame_with_pixels.png"
                  alt="Relume placeholder image 8"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
