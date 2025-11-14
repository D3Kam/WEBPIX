"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { Check } from "relume-icons";

export function Pricing6() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Tagline</p>
          <h1 className="mb-5 text-h2 font-bold md:mb-6">Pricing plan</h1>
          <p className="text-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <Tabs defaultValue="monthly">
          <TabsList className="mx-auto mb-12 w-fit items-center justify-center rounded-button border border-scheme-border bg-scheme-foreground p-1 group-data-[slot=card-flat]:border-transparent">
            <TabsTrigger
              value="monthly"
              className="rounded-button data-[state=active]:bg-scheme-background data-[state=active]:font-medium data-[state=inactive]:bg-transparent"
            >
              Monthly
            </TabsTrigger>
            <TabsTrigger
              value="yearly"
              className="rounded-button data-[state=active]:bg-scheme-background data-[state=active]:font-medium data-[state=inactive]:bg-transparent"
            >
              Yearly
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="monthly"
            className="container max-w-md data-[state=active]:animate-tabs"
          >
            <Card className="h-full px-6 py-8 md:p-8">
              <div className="mb-6 text-center md:mb-8">
                <h6 className="text-h6 font-bold">Basic plan</h6>
                <h1 className="my-2 text-h1 font-bold">$19/mo</h1>
              </div>
              <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Feature text goes here</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Feature text goes here</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Feature text goes here</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Feature text goes here</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Feature text goes here</p>
                </div>
              </div>
              <Button title="Get started" className="w-full">
                Get started
              </Button>
            </Card>
          </TabsContent>
          <TabsContent
            value="yearly"
            className="container max-w-md data-[state=active]:animate-tabs"
          >
            <Card className="h-full px-6 py-8 md:p-8">
              <div className="mb-6 text-center md:mb-8">
                <h6 className="text-h6 font-bold">Basic plan</h6>
                <h1 className="my-2 text-h1 font-bold">$180/yr</h1>
                <p className="mt-2 font-medium">
                  Save 20% with the annual plan
                </p>
              </div>
              <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Feature text goes here</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Feature text goes here</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Feature text goes here</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Feature text goes here</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Feature text goes here</p>
                </div>
              </div>
              <Button title="Get started" className="w-full">
                Get started
              </Button>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
