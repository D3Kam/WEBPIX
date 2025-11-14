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

export function Faq5_1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-h2 font-bold md:mb-6">Faqs</h2>
          <p className="text-medium">
            Learn about wallet connections, payment methods, and the technical
            aspects of our platform.
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
                  Which wallets are supported?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  We support Phantom, Backpack, and Coinbase wallets for Solana
                  USDC payments. These provide secure, direct blockchain
                  transactions for crypto enthusiasts.
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
                  Do I need a crypto wallet?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  No. We offer guest checkout with card payments through Stripe.
                  Crypto wallets are optional but provide additional flexibility
                  for blockchain-native users.
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
                  What payment methods work?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  We accept major credit cards via Stripe and Solana USDC for
                  crypto payments. Choose the method most convenient for you.
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
                  Are there account requirements?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Account creation is optional. We offer passwordless signup and
                  only collect essential information for order fulfillment and
                  receipts.
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
                  How long are blocks reserved?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Blocks are soft-held for 15 minutes during checkout. If not
                  completed, they automatically release back to the available
                  canvas.
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
            Our support team is ready to provide clarity on your Xpixel journey.
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
