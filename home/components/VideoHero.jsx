"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Play, Pause, Volume2, VolumeX, ChevronDown } from "lucide-react";

export function VideoHero({ videoSrc = "/WEBPIX/media/videos/Xpixel_Digital_Mona.mp4" }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    // Auto-play video on mount
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      className="relative bg-neutral-darker text-white h-screen w-full"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <div className="relative flex h-full w-full flex-col items-center justify-center">
          {/* Video Background */}
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            loop
            muted={isMuted}
            playsInline
            autoPlay
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-darkest/60 via-neutral-darkest/40 to-neutral-darkest/60" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center px-6 py-8 text-center sm:px-8 md:p-16">
            <div className="w-full max-w-lg">
              <h1 className="mb-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl md:mb-6 leading-tight">
                Digital souls in each pixel
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white drop-shadow-lg leading-relaxed">
                Collaborate with the world by owning your pixel space in a
                massive, living digital Xpixel.
              </p>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 md:mt-8 w-full sm:w-auto px-4 sm:px-0">
              <Link to="/buy" className="w-full sm:w-auto">
                <Button
                  title="Get Xpixel"
                  variant="alternate"
                  className="w-full min-h-[56px] text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-brand-primary/30 active:scale-95"
                >
                  Get Xpixel
                </Button>
              </Link>
              <Link to="/how-it-works" className="w-full sm:w-auto">
                <Button
                  title="Learn more"
                  variant="secondary-alt"
                  className="w-full min-h-[56px] text-lg font-semibold border-2 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
                >
                  Learn more
                </Button>
              </Link>
            </div>
          </div>

          {/* Modern Video Controls */}
          <div
            className={`absolute bottom-6 right-6 sm:bottom-8 sm:right-8 flex gap-2 sm:gap-3 transition-all duration-300 ${
              showControls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-brand-primary/90 backdrop-blur-sm shadow-xl transition-all duration-300 hover:scale-110 hover:bg-brand-primary hover:shadow-2xl hover:shadow-brand-primary/50 active:scale-95"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <Pause className="h-5 w-5 sm:h-6 sm:w-6 text-neutral-darkest transition-transform group-hover:scale-110" fill="currentColor" />
              ) : (
                <Play className="h-5 w-5 sm:h-6 sm:w-6 text-neutral-darkest transition-transform group-hover:scale-110" fill="currentColor" />
              )}
              <div className="absolute -inset-1 rounded-full bg-brand-primary/20 blur-md transition-opacity group-hover:opacity-100 opacity-0" />
            </button>

            {/* Mute/Unmute Button */}
            <button
              onClick={toggleMute}
              className="group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:shadow-xl active:scale-95"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <VolumeX className="h-4 w-4 sm:h-5 sm:w-5 text-white transition-transform group-hover:scale-110" />
              ) : (
                <Volume2 className="h-4 w-4 sm:h-5 sm:w-5 text-white transition-transform group-hover:scale-110" />
              )}
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2 animate-bounce">
            <span className="text-white/80 text-xs sm:text-sm font-medium">Scroll to explore</span>
            <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-white/80" />
          </div>
        </div>
    </section>
  );
}
