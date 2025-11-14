"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Header62() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <p className="mb-3 font-semibold md:mb-4">Dashboard</p>
        <h1 className="mb-5 text-h1 font-bold md:mb-6">Your pixel journey</h1>
        <p className="text-medium">
          Track your digital art investments, manage placements, and explore the
          canvas you've helped create with Xpixel.
        </p>
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          <Button title="Manage">Manage</Button>
          <Button title="Explore" variant="secondary">
            Explore
          </Button>
        </div>
      </div>
    </section>
  );
}
