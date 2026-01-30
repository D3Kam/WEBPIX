"use client";

import React, { useEffect, useRef } from "react";
import { MapPin } from "lucide-react";

export function MapSection() {
  const mapRef = useRef(null);

  // Generate random ping marker positions
  const generateMarkers = () => {
    const markers = [];
    const numMarkers = 15; // Number of random ping markers

    for (let i = 0; i < numMarkers; i++) {
      markers.push({
        id: i,
        left: `${Math.random() * 90 + 5}%`, // Random position between 5% and 95%
        top: `${Math.random() * 80 + 10}%`, // Random position between 10% and 90%
        delay: Math.random() * 2 // Random animation delay
      });
    }

    return markers;
  };

  const markers = generateMarkers();

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-b from-neutral-lightest/50 to-white">
      <div className="container">
        <div className="mb-12 md:mb-16 lg:mb-20 text-center">
          <p className="mb-3 font-semibold text-brand-primary md:mb-4">Global Reach</p>
          <h2 className="mb-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold md:mb-6 leading-tight">
            Creators Worldwide
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-dark leading-relaxed max-w-2xl mx-auto">
            Join a vibrant community of digital artists from around the globe, contributing to the world's collaborative pixel masterpiece
          </p>
        </div>

        <div
          ref={mapRef}
          className="relative size-full justify-self-end overflow-hidden rounded-2xl shadow-2xl"
        >
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-map-image.jpeg"
            alt="Global map showing Xpixel creators"
            className="aspect-3/2 h-[25rem] w-full object-cover md:h-[30rem] lg:h-[35rem]"
          />

          {/* Overlay gradient for better marker visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-darkest/40 via-transparent to-neutral-darkest/20" />

          {/* Random ping markers */}
          {markers.map((marker) => (
            <div
              key={marker.id}
              className="absolute animate-ping-slow"
              style={{
                left: marker.left,
                top: marker.top,
                animationDelay: `${marker.delay}s`
              }}
            >
              <MapPin
                className="h-6 w-6 text-brand-primary drop-shadow-[0_0_8px_rgba(3,255,206,0.8)]"
                fill="currentColor"
              />
            </div>
          ))}

          {/* Static markers (non-animated for depth) */}
          {markers.slice(0, 5).map((marker) => (
            <div
              key={`static-${marker.id}`}
              className="absolute opacity-60"
              style={{
                left: `${parseFloat(marker.left) + 10}%`,
                top: `${parseFloat(marker.top) + 5}%`
              }}
            >
              <MapPin
                className="h-5 w-5 text-brand-primary/80"
                fill="currentColor"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes ping-slow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.3);
          }
        }

        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
}
