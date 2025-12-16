"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import { ChevronRight, Upload } from "lucide-react";
import { Link } from "react-router-dom";

export function Layout155() {
  useEffect(() => {
    // Load and initialize frame.js
    const script = document.createElement('script');
    script.src = '/WEBPIX/js/frame.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleReposition = (position) => {
    if (window.repositionArea) {
      window.repositionArea(position);
    }
  };

  const handleImageUpload = (event) => {
    if (window.uploadImage) {
      window.uploadImage(event);
    }
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container flex flex-col items-center text-center">
      <div className="mt-12 md:mt-18 lg:mt-20">
          <div className="mx-auto w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Xpixel</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Try Xpixel
            </h2>
            <p className="text-medium">
              Select your sector,
              upload your piece, and watch the Digital Mona Lisa come to life .
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Link to="/buy">
                <Button
                  title="Get Xpixel"
                  variant="secondary"
                  className="shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-primary/20"
                >
                  Get Xpixel
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button
                  title="Learn How"
                  variant="link"
                  size="link"
                  className="group font-semibold transition-all"
                  iconRight={<ChevronRight className="text-scheme-text transition-transform group-hover:translate-x-1" />}
                >
                  Learn How
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full">

          <div className="mt-8">

            {/* Frame needs top padding for Sector 0 label */}
            <div className="pt-8">
              <div id="frame"></div>
            </div>
              <div className="preview-settings">
                <div className="controls">
                <div className="upload-section">
                  <input
                    type="file"
                    id="imageUpload"
                    className="file-input-visually-hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                  <div className="upload-button-wrapper group relative inline-block">
                    <label htmlFor="imageUpload" className="btn btn-accent btn-upload">
                      <Upload className="inline-block mr-2" aria-hidden="true" />
                      <span>Upload</span>
                    </label>
                    <div className="upload-tooltip absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 bg-neutral-darkest text-white text-sm rounded-lg p-3 shadow-xl z-10">
                      <div className="text-center">
                        This is a preview of how your artpiece would look like inside Xpixel
                      </div>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-neutral-darkest"></div>
                    </div>
                  </div>
                  <span id="fileName" className="file-name" aria-live="polite"></span>
                </div>
              </div>
          </div>
        </div>
        
        </div>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <div className="mx-auto w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Xpixel</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Be a part of digital artwork on the blockchain
            </h2>
            <p className="text-medium">
              Select your sector,
              upload your piece, and watch the Digital Mona Lisa come to life .
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Link to="/buy">
                <Button
                  title="Get Xpixel"
                  variant="secondary"
                  className="shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-primary/20"
                >
                  Get Xpixel
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button
                  title="Learn How"
                  variant="link"
                  size="link"
                  className="group font-semibold transition-all"
                  iconRight={<ChevronRight className="text-scheme-text transition-transform group-hover:translate-x-1" />}
                >
                  Learn How
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
