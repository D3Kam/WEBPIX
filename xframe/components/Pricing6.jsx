"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { Check, Lock, Circle } from "lucide-react";

export function Pricing6() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-4xl">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Sector Selection</p>
          <h1 className="mb-5 text-h2 font-bold md:mb-6">Choose Your Xpixel Sector</h1>
          <p className="text-medium">
            Each sector offers unique positioning and visibility on the Xpixel canvas.
            Select the sector that best fits your creative vision.
          </p>
        </div>
        <Tabs defaultValue="sector0" className="w-full">
          <TabsList className="mx-auto mb-12 grid w-full max-w-3xl grid-cols-2 gap-2 rounded-lg border border-scheme-border bg-scheme-foreground p-2 md:grid-cols-4">
            <TabsTrigger
              value="sector0"
              className="flex flex-col items-center gap-1 rounded-md px-4 py-3 text-sm font-medium transition-all data-[state=active]:bg-brand-primary data-[state=active]:text-neutral-darkest data-[state=active]:shadow-sm data-[state=inactive]:bg-transparent data-[state=inactive]:hover:bg-neutral-lighter"
            >
              <Circle className="size-4" />
              <span>Sector 0</span>
              <span className="text-xs font-normal opacity-70">Outer Edge</span>
            </TabsTrigger>
            <TabsTrigger
              value="sector1"
              className="flex flex-col items-center gap-1 rounded-md px-4 py-3 text-sm font-medium transition-all data-[state=active]:bg-brand-blue data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=inactive]:bg-transparent data-[state=inactive]:hover:bg-neutral-lighter"
            >
              <Circle className="size-4" />
              <span>Sector 1</span>
              <span className="text-xs font-normal opacity-70">Outer Ring</span>
            </TabsTrigger>
            <TabsTrigger
              value="sector2"
              className="flex flex-col items-center gap-1 rounded-md px-4 py-3 text-sm font-medium transition-all data-[state=active]:bg-brand-orange data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=inactive]:bg-transparent data-[state=inactive]:hover:bg-neutral-lighter"
            >
              <Circle className="size-4" />
              <span>Sector 2</span>
              <span className="text-xs font-normal opacity-70">Middle Ring</span>
            </TabsTrigger>
            <TabsTrigger
              value="sector3"
              className="flex flex-col items-center gap-1 rounded-md px-4 py-3 text-sm font-medium transition-all data-[state=active]:bg-brand-red data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=inactive]:bg-transparent data-[state=inactive]:hover:bg-neutral-lighter"
            >
              <Circle className="size-4" />
              <span>Sector 3</span>
              <span className="text-xs font-normal opacity-70">Inner Ring</span>
            </TabsTrigger>
          </TabsList>

          {/* Sector 0 - Outer Edge */}
          <TabsContent
            value="sector0"
            className="container max-w-2xl data-[state=active]:animate-tabs"
          >
            <Card className="h-full border-2 border-brand-primary px-6 py-8 md:p-8">
              <div className="mb-6 text-center md:mb-8">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-brand-primary/10 px-4 py-2">
                  <Circle className="size-5 text-brand-primary" />
                  <span className="font-semibold text-brand-primary">Sector 0 - Outer Edge</span>
                </div>
                <h1 className="my-4 text-h1 font-bold">Maximum Exposure</h1>
                <p className="text-medium text-neutral-dark">
                  The outermost sector 10px wide - the outer edge of Xpixel. 
                </p>
              </div>
              <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-brand-primary" />
                  </div>
                  <p>Largest available canvas space</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-brand-primary" />
                  </div>
                  <p>Maximum visibility and exposure</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-brand-primary" />
                  </div>
                  <p>Ideal for large artwork and banners</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-brand-primary" />
                  </div>
                  <p>Border positioning advantage</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-brand-primary" />
                  </div>
                  <p>Lowest cost per pixel</p>
                </div>
              </div>
              <Button title="Select Sector 0" className="w-full bg-brand-primary hover:bg-brand-primary/90">
                Select Sector 0
              </Button>
            </Card>
          </TabsContent>

          {/* Sector 1 - Outer Ring */}
          <TabsContent
            value="sector1"
            className="container max-w-2xl data-[state=active]:animate-tabs"
          >
            <Card className="h-full border-2 border-brand-blue px-6 py-8 md:p-8">
              <div className="mb-6 text-center md:mb-8">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-2">
                  <Circle className="size-5 text-brand-blue" />
                  <span className="font-semibold text-brand-blue">Sector 1 - Outer Ring</span>
                </div>
                <h1 className="my-4 text-h1 font-bold">Balanced Visibility</h1>
                <p className="text-medium text-neutral-dark">
                  Strategic positioning with excellent visibility. Great balance between space and prominence.
                </p>
              </div>
              <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-brand-blue" />
                  </div>
                  <p>Substantial canvas area</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-brand-blue" />
                  </div>
                  <p>Strong visual presence</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-brand-blue" />
                  </div>
                  <p>Excellent for medium-sized projects</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-brand-blue" />
                  </div>
                  <p>Closer to center attention</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-brand-blue" />
                  </div>
                  <p>Competitive pricing</p>
                </div>
              </div>
              <Button title="Select Sector 1" className="w-full bg-brand-blue hover:bg-brand-blue/90">
                Select Sector 1
              </Button>
            </Card>
          </TabsContent>

          {/* Sector 2 - Middle Ring */}
          <TabsContent
            value="sector2"
            className="container max-w-2xl data-[state=active]:animate-tabs"
          >
            <Card className="h-full border-2 border-brand-orange px-6 py-8 md:p-8">
              <div className="mb-6 text-center md:mb-8">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-brand-orange/10 px-4 py-2">
                  <Circle className="size-5 text-brand-orange" />
                  <span className="font-semibold text-brand-orange">Sector 2 - Middle Ring</span>
                </div>
                <h1 className="my-4 text-h1 font-bold">Premium Position</h1>
                <p className="text-medium text-neutral-dark">
                  Prime real estate closer to the center. Higher value positioning for your artwork.
                </p>
              </div>
              <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-brand-orange" />
                  </div>
                  <p>Premium canvas positioning</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-brand-orange" />
                  </div>
                  <p>High attention zone</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-brand-orange" />
                  </div>
                  <p>Perfect for featured art pieces</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-brand-orange" />
                  </div>
                  <p>Close proximity to center</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-brand-orange" />
                  </div>
                  <p>Premium tier pricing</p>
                </div>
              </div>
              <Button title="Select Sector 2" className="w-full bg-brand-orange hover:bg-brand-orange/90">
                Select Sector 2
              </Button>
            </Card>
          </TabsContent>

          {/* Sector 3 - Inner Ring */}
          <TabsContent
            value="sector3"
            className="container max-w-2xl data-[state=active]:animate-tabs"
          >
            <Card className="h-full border-2 border-brand-red px-6 py-8 md:p-8">
              <div className="mb-6 text-center md:mb-8">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-brand-red/10 px-4 py-2">
                  <Circle className="size-5 text-brand-red" />
                  <span className="font-semibold text-brand-red">Sector 3 - Inner Ring</span>
                </div>
                <h1 className="my-4 text-h1 font-bold">Elite Central Zone</h1>
                <p className="text-medium text-neutral-dark">
                  Closest to the center with maximum prestige. The most sought-after canvas space.
                </p>
              </div>
              <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-brand-red" />
                  </div>
                  <p>Elite positioning near center</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-brand-red" />
                  </div>
                  <p>Maximum prestige and value</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-brand-red" />
                  </div>
                  <p>Guaranteed focal point visibility</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-brand-red" />
                  </div>
                  <p>Limited availability</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-brand-red" />
                  </div>
                  <p>Highest investment value</p>
                </div>
              </div>
              <Button title="Select Sector 3" className="w-full bg-brand-red hover:bg-brand-red/90">
                Select Sector 3
              </Button>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
