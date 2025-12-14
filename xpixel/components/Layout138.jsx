"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "lucide-react";

export function Layout138() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <p className="mb-3 font-semibold md:mb-4">Guarantee</p>
        <h2 className="mb-5 text-h2 font-bold md:mb-6">
          Your digital artwork, your peace of mind
        </h2>
        <p className="mb-5 text-medium md:mb-6">
          We provide secure transactions and clear guidelines for digital
          content. Your creative expression is protected.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 py-2">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
            alt="Webflow logo 1"
            className="max-h-14"
          />
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
            alt="Relume logo 1"
            className="max-h-14"
          />
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
            alt="Webflow logo 2"
            className="max-h-14"
          />
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
            alt="Relume logo 2"
            className="max-h-14"
          />
        </div>
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          <Button title="Learn more" variant="secondary">
            Learn more
          </Button>
          <Button
            title="Terms"
            variant="link"
            size="link"
            iconRight={<ChevronRight className="text-scheme-text" />}
          >
            Terms
          </Button>
        </div>
      </div>
    </section>
  );
}
