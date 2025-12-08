"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React from "react";

export function Cta52() {
  return (
    <section className="bg-brand-primary px-[5%] py-16 text-white md:py-24 lg:py-28">
      <div className="container">
        <Card className="flex flex-col items-center bg-white p-8 text-neutral-darkest md:p-12 lg:p-16">
          <div className="max-w-lg text-center">
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Ready to claim your pixel space
            </h2>
            <p className="text-medium">
              Join the digital art revolution and secure your spot on the
              blockchain canvas
            </p>
          </div>
          <div className="mx-auto mt-6 max-w-sm md:mt-8">
            <form className="mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4">
              <Input id="email" type="email" placeholder="Enter your email" />
              <Button
                title="Sign up"
                size="sm"
                className="items-center justify-center px-6 py-3"
              >
                Sign up
              </Button>
            </form>
            <p className="text-tiny">
              By signing up, you agree to our terms and conditions
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
