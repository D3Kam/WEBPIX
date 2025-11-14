"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Header62() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <p className="mb-3 font-semibold md:mb-4">Connect</p>
        <h1 className="mb-5 text-h1 font-bold md:mb-6">Get in touch</h1>
        <p className="text-medium">
          We're here to help you explore the digital art frontier on Solana
        </p>
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          <Button title="Email">Email</Button>
          <Button title="Phone" variant="secondary">
            Phone
          </Button>
        </div>
      </div>
    </section>
  );
}
