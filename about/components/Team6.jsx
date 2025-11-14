"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { Dribbble, Linkedin, Twitter } from "lucide-react";

export function Team6() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Creators</p>
          <h2 className="mb-5 text-h2 font-bold md:mb-6">Our team</h2>
          <p className="text-medium">
            Passionate creators building the future of digital art
          </p>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-x-8 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex flex-col text-center">
            <div className="mb-5 flex flex-col flex-nowrap text-center md:mb-6">
              <div className="mx-auto w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 1"
                  className="aspect-square size-full rounded-image object-cover"
                />
              </div>
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-large font-semibold">Alex Rodriguez</h5>
              <h6 className="text-medium">Founder and CEO</h6>
            </div>
            <p>
              Blockchain pioneer with ten years of digital art experience.
              Believes in democratizing creative expression.
            </p>
            <div className="mt-5 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center md:mt-6">
              <a href="#">
                <Linkedin className="size-6 text-scheme-text" />
              </a>
              <a href="#">
                <Twitter className="size-6 p-0.5 text-scheme-text" />
              </a>
              <a href="#">
                <Dribbble className="size-6 text-scheme-text" />
              </a>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="mb-5 flex flex-col flex-nowrap text-center md:mb-6">
              <div className="mx-auto w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 1"
                  className="aspect-square size-full rounded-image object-cover"
                />
              </div>
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-large font-semibold">Maria Chen</h5>
              <h6 className="text-medium">Lead Developer</h6>
            </div>
            <p>
              Expert in Solana blockchain development. Transforms complex code
              into seamless user experiences.
            </p>
            <div className="mt-5 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center md:mt-6">
              <a href="#">
                <Linkedin className="size-6 text-scheme-text" />
              </a>
              <a href="#">
                <Twitter className="size-6 p-0.5 text-scheme-text" />
              </a>
              <a href="#">
                <Dribbble className="size-6 text-scheme-text" />
              </a>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="mb-5 flex flex-col flex-nowrap text-center md:mb-6">
              <div className="mx-auto w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 1"
                  className="aspect-square size-full rounded-image object-cover"
                />
              </div>
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-large font-semibold">David Kim</h5>
              <h6 className="text-medium">Creative Director</h6>
            </div>
            <p>
              Visual storyteller bridging traditional art with digital
              innovation. Designs pixel experiences that resonate.
            </p>
            <div className="mt-5 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center md:mt-6">
              <a href="#">
                <Linkedin className="size-6 text-scheme-text" />
              </a>
              <a href="#">
                <Twitter className="size-6 p-0.5 text-scheme-text" />
              </a>
              <a href="#">
                <Dribbble className="size-6 text-scheme-text" />
              </a>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="mb-5 flex flex-col flex-nowrap text-center md:mb-6">
              <div className="mx-auto w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 1"
                  className="aspect-square size-full rounded-image object-cover"
                />
              </div>
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-large font-semibold">Sarah Thompson</h5>
              <h6 className="text-medium">Community Manager</h6>
            </div>
            <p>
              Connects artists, collectors, and creators. Builds bridges between
              technology and human creativity.
            </p>
            <div className="mt-5 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center md:mt-6">
              <a href="#">
                <Linkedin className="size-6 text-scheme-text" />
              </a>
              <a href="#">
                <Twitter className="size-6 p-0.5 text-scheme-text" />
              </a>
              <a href="#">
                <Dribbble className="size-6 text-scheme-text" />
              </a>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="mb-5 flex flex-col flex-nowrap text-center md:mb-6">
              <div className="mx-auto w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 1"
                  className="aspect-square size-full rounded-image object-cover"
                />
              </div>
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-large font-semibold">Michael Wong</h5>
              <h6 className="text-medium">Technical Lead</h6>
            </div>
            <p>
              Solana blockchain expert ensuring secure, transparent, and
              efficient pixel transactions.
            </p>
            <div className="mt-5 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center md:mt-6">
              <a href="#">
                <Linkedin className="size-6 text-scheme-text" />
              </a>
              <a href="#">
                <Twitter className="size-6 p-0.5 text-scheme-text" />
              </a>
              <a href="#">
                <Dribbble className="size-6 text-scheme-text" />
              </a>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="mb-5 flex flex-col flex-nowrap text-center md:mb-6">
              <div className="mx-auto w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 1"
                  className="aspect-square size-full rounded-image object-cover"
                />
              </div>
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-large font-semibold">Elena Rodriguez</h5>
              <h6 className="text-medium">Marketing Director</h6>
            </div>
            <p>
              Storyteller who amplifies the vision of digital art and blockchain
              innovation.
            </p>
            <div className="mt-5 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center md:mt-6">
              <a href="#">
                <Linkedin className="size-6 text-scheme-text" />
              </a>
              <a href="#">
                <Twitter className="size-6 p-0.5 text-scheme-text" />
              </a>
              <a href="#">
                <Dribbble className="size-6 text-scheme-text" />
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-14 w-full max-w-md text-center md:mt-20 lg:mt-24">
          <h4 className="mb-3 text-h4 font-bold md:mb-4">We're hiring</h4>
          <p className="text-medium">
            Join our mission to revolutionize digital art
          </p>
          <div className="mt-5 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center md:mt-6">
            <Button title="Open positions" variant="secondary">
              Open positions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
