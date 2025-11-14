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

export function Faq5_3() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-h2 font-bold md:mb-6">Faqs</h2>
          <p className="text-medium">
            Discover how receipts, accounts, and transaction details work on
            Xpixel.
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
                  How do receipts work?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Receipts are sent immediately via email after purchase. Both
                  card and crypto transactions generate digital receipts for
                  your records.
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
                  Do I need an account?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Account creation is optional. We offer guest checkout and
                  passwordless signup. Only essential information is collected
                  for order processing.
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
                  Can I download receipts?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  All transaction receipts are available in your account
                  dashboard. You can download and save them for personal
                  records.
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
                  What payment info is stored?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  We minimize data collection. Only necessary details for
                  transaction and communication are retained, following strict
                  GDPR guidelines.
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
                  How secure are transactions?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  We use Stripe and Solana wallet adapters with bank-grade
                  encryption. Your financial information remains protected
                  throughout the purchase process.
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
            Our support team is ready to provide clarity on your transaction
            details.
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
