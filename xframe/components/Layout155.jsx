"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import { ChevronRight, Upload } from "lucide-react";

export function Layout155() {
  useEffect(() => {
    // Load and initialize frame.js
    const script = document.createElement('script');
    script.src = '/js/frame.js';
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
        <div className="w-full">

          <div>

            <div className="section-title" data-aos="fade-up">
              <h2 className="text-h2 font-bold mb-4">Xframe</h2>
              
            </div>

            <div id="frame"></div>
              <div className="preview-settings">
                <div className="controls">

                <div className="positions">
                  <h2>Position</h2>
                  <div>
                    <button onClick={() => handleReposition('top-left')}>↖️</button>
                    <button onClick={() => handleReposition('top-middle')}>⬆️</button>
                    <button onClick={() => handleReposition('top-right')}>↗️</button>
                    <button onClick={() => handleReposition('middle-left')}>⬅️</button>
                    <button onClick={() => handleReposition('middle-middle')}>⏺️</button>
                    <button onClick={() => handleReposition('middle-right')}>➡️</button>
                    <button onClick={() => handleReposition('bottom-left')}>↙️</button>
                    <button onClick={() => handleReposition('bottom-middle')}>⬇️</button>
                    <button onClick={() => handleReposition('bottom-right')}>↘️</button>
                  </div>
                </div>


                <div className="upload-section">
                  <input
                    type="file"
                    id="imageUpload"
                    className="file-input-visually-hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                  <label htmlFor="imageUpload" className="btn btn-accent btn-upload">
                    <Upload className="inline-block mr-2" aria-hidden="true" />
                    <span>Upload image</span>
                  </label>
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
              <Button
                title="GetXpixel"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Get Xpixel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
