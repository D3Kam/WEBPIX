"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "lucide-react";
import { Spline } from "lucide-react";

export function Layout155() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container flex flex-col items-center text-center">
        <div className="w-full">
        
          <xframe>
            
            <div class="section-title" data-aos="fade-up">
              <h2>Xframe</h2>
              <p><span>Try Xframe </span> <span class="description-title">of Xpixel</span></p>
            </div>
            
            <div id="frame"></div>
              <div class="preview-settings">
                <div class="controls">
                
                <div class="positions">
                  <h2>Position</h2>
                  <div>
                    <button onclick="repositionArea('top-left')">↖️</button>
                    <button onclick="repositionArea('top-middle')">⬆️</button>
                    <button onclick="repositionArea('top-right')">↗️</button>
                    <button onclick="repositionArea('middle-left')">⬅️</button>
                    <button onclick="repositionArea('middle-middle')">⏺️</button>
                    <button onclick="repositionArea('middle-right')">➡️</button>
                    <button onclick="repositionArea('bottom-left')">↙️</button>
                    <button onclick="repositionArea('bottom-middle')">⬇️</button>
                    <button onclick="repositionArea('bottom-right')">↘️</button>
                  </div>
                </div>
              
                
                <div class="controls">
                  <div class="area-size">
                    <h2>Custom Size</h2>
                    <p>Width: <input type="number" id="customWidth" placeholder="Width"/></p>
                    <p>Height: <input type="number" id="customHeight" placeholder="Height"/></p>
                    
                    <button onclick="markCustom()">Show custom area</button>
                  </div>
                  
                </div>
                
                <div class="upload-section">
                  <input
                    type="file"
                    id="imageUpload"
                    class="file-input-visually-hidden"
                    accept="image/*"
                    onchange="uploadImage(event)"
                  />
                  <label for="imageUpload" class="btn btn-accent btn-upload">
                    <i class="bi bi-upload" aria-hidden="true"></i>
                    <span>Upload image</span>
                  </label>
                  <span id="fileName" class="file-name" aria-live="polite"></span>
                </div>
              </div>
          </xframe>
        </div>
        
        </div>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <div className="mx-auto w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Canvas</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Create your digital artwork on the blockchain
            </h2>
            <p className="text-medium">
              Drag and place your pixels with precision. Select your sector,
              resize your block, and watch your vision come to life on the
              Solana network.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Button title="Select" variant="secondary">
                Select
              </Button>
              <Button
                title="Zoom"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Zoom
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
