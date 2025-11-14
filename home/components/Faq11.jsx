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
import { Add } from "relume-icons";

export function Faq11() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <h2 className="mb-5 text-h2 font-bold md:mb-6">FAQs</h2>
            <p className="text-medium">
              Common questions about our digital art platform
            </p>
          </div>
        </div>
        <Accordion type="multiple">
          <div className="grid w-full grid-cols-1 items-start gap-x-8 gap-y-4 md:grid-cols-2">
            <Card>
              <AccordionItem
                value="item-faq11_accordion"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                >
                  How do I buy a pixel?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Select a sector, choose your block size, and complete the
                  purchase. You'll have 30 days to upload your image.
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-faq11_accordion-2"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                >
                  What payment methods are accepted?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  We accept Stripe credit card payments and Solana USDC through
                  crypto wallets like Phantom and Coinbase.
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-faq11_accordion-3"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                >
                  Are there content restrictions?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Yes. Images must be original, legal, and appropriate. We
                  reserve the right to remove offensive content.
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-faq11_accordion-4"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                >
                  Can I resell my pixel space?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Currently, pixel spaces are non-transferable. Each purchase is
                  a unique, one-time digital art contribution.
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-faq11_accordion-5"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                >
                  How long will the canvas be live?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  The canvas is a permanent on-chain artwork. Once completed, it
                  will remain as a historical digital artifact.
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-faq11_accordion-6"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                >
                  Question text goes here
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Aenean faucibus nibh et justo
                  cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                  tristique posuere.
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-faq11_accordion-7"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                >
                  Question text goes here
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Aenean faucibus nibh et justo
                  cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                  tristique posuere.
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-faq11_accordion-8"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                >
                  Question text goes here
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Aenean faucibus nibh et justo
                  cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                  tristique posuere.
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-faq11_accordion-9"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                >
                  Question text goes here
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Aenean faucibus nibh et justo
                  cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                  tristique posuere.
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-faq11_accordion-10"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                >
                  Question text goes here
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Aenean faucibus nibh et justo
                  cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                  tristique posuere.
                </AccordionContent>
              </AccordionItem>
            </Card>
          </div>
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-h4 font-bold md:mb-4">Need more help?</h4>
          <p className="text-medium">
            Our support team is ready to answer your questions
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
