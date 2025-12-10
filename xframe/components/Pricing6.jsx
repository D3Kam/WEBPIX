"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { Check, Circle, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";

export function Pricing6() {
  return (
    <section className="bg-gradient-to-b from-white via-neutral-lightest to-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-5xl">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-18 lg:mb-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-primary/10 px-4 py-2 text-sm font-semibold text-brand-primary">
            <Sparkles className="h-4 w-4" />
            Transparent Pricing
          </div>
          <h1 className="mb-5 text-h1 font-bold md:mb-6">
            Choose Your Xpixel
          </h1>
          <p className="text-large text-neutral-dark">
            Each sector offers unique positioning and value on the Xpixel canvas.
            Select the space that matches your creative vision and budget.
          </p>
        </div>

        <Tabs defaultValue="sector0" className="w-full">
          {/* Enhanced Tab Navigation */}
          <TabsList className="mx-auto mb-12 grid w-full max-w-4xl grid-cols-2 gap-3 rounded-xl bg-white p-2 shadow-lg ring-1 ring-neutral-lighter md:grid-cols-4">
            <TabsTrigger
              value="sector0"
              className="group relative flex flex-col items-center gap-2 rounded-lg px-4 py-4 text-sm font-semibold transition-all duration-200 data-[state=active]:bg-gradient-to-br data-[state=active]:from-brand-primary data-[state=active]:to-brand-primary/80 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=inactive]:bg-transparent data-[state=inactive]:hover:bg-neutral-lightest"
            >
              <Circle className="h-5 w-5 transition-transform group-data-[state=active]:scale-110" />
              <span className="text-xs font-bold">Sector 0</span>
              <span className="text-xs font-normal opacity-80">Outer Edge</span>
            </TabsTrigger>
            <TabsTrigger
              value="sector1"
              className="group relative flex flex-col items-center gap-2 rounded-lg px-4 py-4 text-sm font-semibold transition-all duration-200 data-[state=active]:bg-gradient-to-br data-[state=active]:from-brand-blue data-[state=active]:to-brand-blue/80 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=inactive]:bg-transparent data-[state=inactive]:hover:bg-neutral-lightest"
            >
              <Circle className="h-5 w-5 transition-transform group-data-[state=active]:scale-110" />
              <span className="text-xs font-bold">Sector 1</span>
              <span className="text-xs font-normal opacity-80">Outer Ring</span>
            </TabsTrigger>
            <TabsTrigger
              value="sector2"
              className="group relative flex flex-col items-center gap-2 rounded-lg px-4 py-4 text-sm font-semibold transition-all duration-200 data-[state=active]:bg-gradient-to-br data-[state=active]:from-brand-orange data-[state=active]:to-brand-orange/80 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=inactive]:bg-transparent data-[state=inactive]:hover:bg-neutral-lightest"
            >
              <Circle className="h-5 w-5 transition-transform group-data-[state=active]:scale-110" />
              <span className="text-xs font-bold">Sector 2</span>
              <span className="text-xs font-normal opacity-80">Middle Ring</span>
            </TabsTrigger>
            <TabsTrigger
              value="sector3"
              className="group relative flex flex-col items-center gap-2 rounded-lg px-4 py-4 text-sm font-semibold transition-all duration-200 data-[state=active]:bg-gradient-to-br data-[state=active]:from-brand-red data-[state=active]:to-brand-red/80 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=inactive]:bg-transparent data-[state=inactive]:hover:bg-neutral-lightest"
            >
              <Circle className="h-5 w-5 transition-transform group-data-[state=active]:scale-110" />
              <span className="text-xs font-bold">Sector 3</span>
              <span className="text-xs font-normal opacity-80">Inner Ring</span>
            </TabsTrigger>
          </TabsList>

          {/* Sector 0 - Enhanced Card */}
          <TabsContent
            value="sector0"
            className="container max-w-2xl data-[state=active]:animate-tabs"
          >
            <Card className="group relative overflow-hidden border-2 border-brand-primary bg-white shadow-2xl transition-all duration-300 hover:shadow-brand-primary/20">
              {/* Gradient Accent */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-primary/50 via-brand-primary to-brand-primary/50" />

              <div className="px-6 py-8 md:p-10">
                <div className="mb-8 text-center">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-primary/20 to-brand-primary/10 px-5 py-2.5 ring-2 ring-brand-primary/20">
                    <Circle className="h-5 w-5 fill-brand-primary text-brand-primary" />
                    <span className="text-sm font-bold text-brand-primary">Sector 0 - Outer Edge</span>
                  </div>

                  <div className="my-6">
                    <div className="mb-3 flex items-baseline justify-center gap-2">
                      <span className="text-6xl font-black text-neutral-darkest">$64</span>
                      <span className="text-lg font-medium text-neutral-dark">USD</span>
                    </div>
                    <h2 className="text-2xl font-bold text-neutral-darkest">Maximum Exposure</h2>
                  </div>

                  <p className="mx-auto max-w-lg text-base leading-relaxed text-neutral-dark">
                    The outermost sector with the largest area. Perfect for bold statements and high visibility on the collaborative canvas.
                  </p>
                </div>

                <div className="mb-8 space-y-4 rounded-xl bg-neutral-lightest/50 p-6">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 rounded-full bg-brand-primary/10 p-1.5">
                      <Check className="h-4 w-4 text-brand-primary" strokeWidth={3} />
                    </div>
                    <p className="text-sm font-medium text-neutral-darkest">Largest available canvas space</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 rounded-full bg-brand-primary/10 p-1.5">
                      <Check className="h-4 w-4 text-brand-primary" strokeWidth={3} />
                    </div>
                    <p className="text-sm font-medium text-neutral-darkest">Maximum visibility and exposure</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 rounded-full bg-brand-primary/10 p-1.5">
                      <Check className="h-4 w-4 text-brand-primary" strokeWidth={3} />
                    </div>
                    <p className="text-sm font-medium text-neutral-darkest">Ideal for large artwork and banners</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 rounded-full bg-brand-primary/10 p-1.5">
                      <Check className="h-4 w-4 text-brand-primary" strokeWidth={3} />
                    </div>
                    <p className="text-sm font-medium text-neutral-darkest">Border positioning advantage</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 rounded-full bg-brand-primary/10 p-1.5">
                      <Check className="h-4 w-4 text-brand-primary" strokeWidth={3} />
                    </div>
                    <p className="text-sm font-medium text-neutral-darkest">Lowest cost per pixel</p>
                  </div>
                </div>

                <Link to="/buy" className="block w-full">
                  <Button
                    title="Select Sector 0"
                    className="group relative h-14 w-full overflow-hidden bg-gradient-to-r from-brand-primary to-brand-primary/90 text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-brand-primary/30"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Select Sector 0
                      <Star className="h-5 w-5 transition-transform group-hover:rotate-12" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Button>
                </Link>
              </div>
            </Card>
          </TabsContent>

          {/* Sector 1 - Enhanced Card */}
          <TabsContent
            value="sector1"
            className="container max-w-2xl data-[state=active]:animate-tabs"
          >
            <Card className="group relative overflow-hidden border-2 border-brand-blue bg-white shadow-2xl transition-all duration-300 hover:shadow-brand-blue/20">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-blue/50 via-brand-blue to-brand-blue/50" />

              <div className="px-6 py-8 md:p-10">
                <div className="mb-8 text-center">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue/20 to-brand-blue/10 px-5 py-2.5 ring-2 ring-brand-blue/20">
                    <Circle className="h-5 w-5 fill-brand-blue text-brand-blue" />
                    <span className="text-sm font-bold text-brand-blue">Sector 1 - Outer Ring</span>
                  </div>

                  <div className="my-6">
                    <div className="mb-3 flex items-baseline justify-center gap-2">
                      <span className="text-6xl font-black text-neutral-darkest">$128</span>
                      <span className="text-lg font-medium text-neutral-dark">USD</span>
                    </div>
                    <h2 className="text-2xl font-bold text-neutral-darkest">Balanced Visibility</h2>
                  </div>

                  <p className="mx-auto max-w-lg text-base leading-relaxed text-neutral-dark">
                    Strategic positioning with excellent visibility. Great balance between space and prominence for your creative expression.
                  </p>
                </div>

                <div className="mb-8 space-y-4 rounded-xl bg-neutral-lightest/50 p-6">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 rounded-full bg-brand-blue/10 p-1.5">
                      <Check className="h-4 w-4 text-brand-blue" strokeWidth={3} />
                    </div>
                    <p className="text-sm font-medium text-neutral-darkest">Substantial canvas area</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 rounded-full bg-brand-blue/10 p-1.5">
                      <Check className="h-4 w-4 text-brand-blue" strokeWidth={3} />
                    </div>
                    <p className="text-sm font-medium text-neutral-darkest">Strong visual presence</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 rounded-full bg-brand-blue/10 p-1.5">
                      <Check className="h-4 w-4 text-brand-blue" strokeWidth={3} />
                    </div>
                    <p className="text-sm font-medium text-neutral-darkest">Excellent for medium-sized projects</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 rounded-full bg-brand-blue/10 p-1.5">
                      <Check className="h-4 w-4 text-brand-blue" strokeWidth={3} />
                    </div>
                    <p className="text-sm font-medium text-neutral-darkest">Closer to center attention</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 rounded-full bg-brand-blue/10 p-1.5">
                      <Check className="h-4 w-4 text-brand-blue" strokeWidth={3} />
                    </div>
                    <p className="text-sm font-medium text-neutral-darkest">Competitive pricing</p>
                  </div>
                </div>

                <Link to="/buy" className="block w-full">
                  <Button
                    title="Select Sector 1"
                    className="group relative h-14 w-full overflow-hidden bg-gradient-to-r from-brand-blue to-brand-blue/90 text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-brand-blue/30"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Select Sector 1
                      <Star className="h-5 w-5 transition-transform group-hover:rotate-12" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Button>
                </Link>
              </div>
            </Card>
          </TabsContent>

          {/* Sector 2 - Enhanced Card */}
          <TabsContent
            value="sector2"
            className="container max-w-2xl data-[state=active]:animate-tabs"
          >
            <Card className="group relative overflow-hidden border-2 border-brand-orange bg-white shadow-2xl transition-all duration-300 hover:shadow-brand-orange/20">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-orange/50 via-brand-orange to-brand-orange/50" />

              <div className="px-6 py-8 md:p-10">
                <div className="mb-8 text-center">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-orange/20 to-brand-orange/10 px-5 py-2.5 ring-2 ring-brand-orange/20">
                    <Circle className="h-5 w-5 fill-brand-orange text-brand-orange" />
                    <span className="text-sm font-bold text-brand-orange">Sector 2 - Middle Ring</span>
                  </div>

                  <div className="my-6">
                    <div className="mb-3 flex items-baseline justify-center gap-2">
                      <span className="text-6xl font-black text-neutral-darkest">$256</span>
                      <span className="text-lg font-medium text-neutral-dark">USD</span>
                    </div>
                    <h2 className="text-2xl font-bold text-neutral-darkest">Premium Position</h2>
                  </div>

                  <p className="mx-auto max-w-lg text-base leading-relaxed text-neutral-dark">
                    Prime real estate closer to the center. Higher value positioning for your artwork with enhanced prestige.
                  </p>
                </div>

                <div className="mb-8 space-y-4 rounded-xl bg-neutral-lightest/50 p-6">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 rounded-full bg-brand-orange/10 p-1.5">
                      <Check className="h-4 w-4 text-brand-orange" strokeWidth={3} />
                    </div>
                    <p className="text-sm font-medium text-neutral-darkest">Premium canvas positioning</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 rounded-full bg-brand-orange/10 p-1.5">
                      <Check className="h-4 w-4 text-brand-orange" strokeWidth={3} />
                    </div>
                    <p className="text-sm font-medium text-neutral-darkest">High attention zone</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 rounded-full bg-brand-orange/10 p-1.5">
                      <Check className="h-4 w-4 text-brand-orange" strokeWidth={3} />
                    </div>
                    <p className="text-sm font-medium text-neutral-darkest">Perfect for featured art pieces</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 rounded-full bg-brand-orange/10 p-1.5">
                      <Check className="h-4 w-4 text-brand-orange" strokeWidth={3} />
                    </div>
                    <p className="text-sm font-medium text-neutral-darkest">Close proximity to center</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 rounded-full bg-brand-orange/10 p-1.5">
                      <Check className="h-4 w-4 text-brand-orange" strokeWidth={3} />
                    </div>
                    <p className="text-sm font-medium text-neutral-darkest">Premium tier pricing</p>
                  </div>
                </div>

                <Link to="/buy" className="block w-full">
                  <Button
                    title="Select Sector 2"
                    className="group relative h-14 w-full overflow-hidden bg-gradient-to-r from-brand-orange to-brand-orange/90 text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-brand-orange/30"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Select Sector 2
                      <Star className="h-5 w-5 transition-transform group-hover:rotate-12" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Button>
                </Link>
              </div>
            </Card>
          </TabsContent>

          {/* Sector 3 - Enhanced Card */}
          <TabsContent
            value="sector3"
            className="container max-w-2xl data-[state=active]:animate-tabs"
          >
            <Card className="group relative overflow-hidden border-2 border-brand-red bg-white shadow-2xl transition-all duration-300 hover:shadow-brand-red/20">
              {/* Premium Badge */}
              <div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-3 py-1 text-xs font-bold text-amber-950 shadow-md">
                MOST PRESTIGIOUS
              </div>

              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-red/50 via-brand-red to-brand-red/50" />

              <div className="px-6 py-8 md:p-10">
                <div className="mb-8 text-center">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-red/20 to-brand-red/10 px-5 py-2.5 ring-2 ring-brand-red/20">
                    <Circle className="h-5 w-5 fill-brand-red text-brand-red" />
                    <span className="text-sm font-bold text-brand-red">Sector 3 - Inner Ring</span>
                  </div>

                  <div className="my-6">
                    <div className="mb-3 flex items-baseline justify-center gap-2">
                      <span className="text-6xl font-black text-neutral-darkest">$512</span>
                      <span className="text-lg font-medium text-neutral-dark">USD</span>
                    </div>
                    <h2 className="text-2xl font-bold text-neutral-darkest">Elite Central Zone</h2>
                  </div>

                  <p className="mx-auto max-w-lg text-base leading-relaxed text-neutral-dark">
                    Closest to the center with maximum prestige. The most sought-after canvas space for discerning artists.
                  </p>
                </div>

                <div className="mb-8 space-y-4 rounded-xl bg-neutral-lightest/50 p-6">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 rounded-full bg-brand-red/10 p-1.5">
                      <Check className="h-4 w-4 text-brand-red" strokeWidth={3} />
                    </div>
                    <p className="text-sm font-medium text-neutral-darkest">Elite positioning near center</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 rounded-full bg-brand-red/10 p-1.5">
                      <Check className="h-4 w-4 text-brand-red" strokeWidth={3} />
                    </div>
                    <p className="text-sm font-medium text-neutral-darkest">Maximum prestige and value</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 rounded-full bg-brand-red/10 p-1.5">
                      <Check className="h-4 w-4 text-brand-red" strokeWidth={3} />
                    </div>
                    <p className="text-sm font-medium text-neutral-darkest">Guaranteed focal point visibility</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 rounded-full bg-brand-red/10 p-1.5">
                      <Check className="h-4 w-4 text-brand-red" strokeWidth={3} />
                    </div>
                    <p className="text-sm font-medium text-neutral-darkest">Limited availability</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 rounded-full bg-brand-red/10 p-1.5">
                      <Check className="h-4 w-4 text-brand-red" strokeWidth={3} />
                    </div>
                    <p className="text-sm font-medium text-neutral-darkest">Highest investment value</p>
                  </div>
                </div>

                <Link to="/buy" className="block w-full">
                  <Button
                    title="Select Sector 3"
                    className="group relative h-14 w-full overflow-hidden bg-gradient-to-r from-brand-red to-brand-red/90 text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-brand-red/30"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Select Sector 3
                      <Star className="h-5 w-5 transition-transform group-hover:rotate-12" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Button>
                </Link>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Trust Section */}
        <div className="mt-16 rounded-2xl bg-gradient-to-br from-neutral-lightest to-white p-8 shadow-lg ring-1 ring-neutral-lighter">
          <p className="text-center text-sm font-medium text-neutral-dark">
            ✨ All sectors come with <span className="font-bold text-neutral-darkest">permanent blockchain ownership</span>, instant visibility on the collaborative canvas, and a piece of digital art history.
          </p>
        </div>
      </div>
    </section>
  );
}
