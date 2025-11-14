"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { Plus } from "lucide-react";

export function Faq5() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-h2 font-bold md:mb-6">Faqs</h2>
          <p className="text-medium">
            Dive into the essential details about purchasing and creating pixel
            spaces on Xpixel.
          </p>
        </div>
        <Accordion type="multiple">
          <div className="grid items-start justify-items-stretch gap-4">
            <Card>
              <AccordionItem
                value="item-0"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <Plus className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                >
                  How do I buy pixel blocks?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Select your desired sector and block size on the canvas.
                  Choose between 10×10 or 25×25 pixel blocks. Each sector has
                  different pricing and availability. Complete your purchase
                  through card or crypto payment options.
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-1"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <Plus className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                >
                  What are the sector differences?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Sectors range from the outer 10px edge to the center. Prices
                  increase from £64 to £1,024 based on location. Outer sectors
                  are more affordable, while center blocks are premium and
                  limited.
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-2"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <Plus className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                >
                  Can I change my image?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  You have 30 days after purchase to upload your image. Once
                  placed, the artwork becomes part of the permanent on-chain
                  canvas. Choose carefully and creatively.
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-3"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <Plus className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                >
                  Are there content restrictions?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Yes. Images must be original, legal, and follow community
                  guidelines. Offensive, explicit, or copyrighted content is
                  prohibited. We reserve the right to moderate submissions.
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-4"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <Plus className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                >
                  How secure are my payments?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  We use Stripe for card payments and Solana wallet adapters for
                  crypto. Transactions are immediate and secure. We minimize
                  data collection and comply with GDPR standards.
                </AccordionContent>
              </AccordionItem>
            </Card>
          </div>
        </Accordion>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-h4 font-bold md:mb-4">
            Still have questions?
          </h4>
          <p className="text-medium">
            Our team is ready to help you navigate your Xpixel experience.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
