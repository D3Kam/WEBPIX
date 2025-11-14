"use client";

import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { VideoIframe } from "@/components/ui/video-iframe";
import React from "react";
import { PlayCircle } from "relume-icons";

export function Stats47() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Placements</p>
          <h1 className="mb-5 text-h2 font-bold md:mb-6">
            Your digital canvas story unfolds here
          </h1>
          <p className="text-medium">
            Track every pixel you've claimed. Watch your art take shape across
            the Xpixel landscape.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-7 sm:gap-x-6 sm:gap-y-6 lg:grid-cols-[1fr_0.5fr] lg:gap-x-8 lg:gap-y-8">
          <div className="flex w-full flex-col items-center justify-center">
            <Dialog>
              <DialogTrigger className="relative flex size-full w-full items-center justify-center overflow-hidden rounded-image">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail.svg"
                  alt="Relume placeholder image"
                  className="aspect-[3/2] size-full rounded-image object-cover"
                />
                <span className="absolute inset-0 z-10 bg-neutral-darkest/50" />
                <PlayCircle className="absolute z-20 size-20 text-white" />
              </DialogTrigger>
              <DialogContent>
                <VideoIframe video="https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW" />
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex flex-col justify-center gap-x-6 gap-y-6 md:flex-row md:gap-y-8 lg:flex-col lg:gap-x-8">
            <Card className="flex w-full flex-col p-8">
              <h3 className="mb-5 text-h6 font-bold md:mb-6">
                My pixel placements
              </h3>
              <h1 className="text-right text-h1 font-bold">100%</h1>
              <div className="my-4 h-px w-full bg-scheme-border" />
              <p className="text-right">
                Sector coordinates reveal your creative footprint
              </p>
            </Card>
            <Card className="flex w-full flex-col p-8">
              <h3 className="mb-5 text-h6 font-bold md:mb-6">
                Digital art archive
              </h3>
              <h1 className="text-right text-h1 font-bold">50%</h1>
              <div className="my-4 h-px w-full bg-scheme-border" />
              <p className="text-right">
                Thumbnails capture the essence of your digital contribution
              </p>
            </Card>
            <Card className="flex w-full flex-col p-8">
              <h3 className="mb-5 text-h6 font-bold md:mb-6">
                Asset management
              </h3>
              <h1 className="text-right text-h1 font-bold">20%</h1>
              <div className="my-4 h-px w-full bg-scheme-border" />
              <p className="text-right">
                Explore the interconnected artwork you've helped create
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
