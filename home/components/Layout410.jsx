"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React, { useEffect, useRef, useState } from "react";
import { ChevronRight, TrendingUp, Users, DollarSign, Activity, BarChart3, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useCounter } from "@/hooks/use-counter";

function StatCard({ icon: Icon, label, value, suffix = "", prefix = "", dark = false }) {
  const [count, startCounting] = useCounter(value, 2000);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          startCounting();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible, startCounting]);

  return (
    <div ref={ref} className="flex items-center gap-3">
      <div className={`flex h-12 w-12 items-center justify-center rounded-full ${dark ? 'bg-neutral-darkest/10' : 'bg-white/10'} backdrop-blur-sm`}>
        <Icon className={`h-6 w-6 ${dark ? 'text-neutral-darkest' : 'text-white'}`} />
      </div>
      <div>
        <div className={`text-2xl font-bold ${dark ? 'text-neutral-darkest' : 'text-white'}`}>
          {prefix}{count.toLocaleString()}{suffix}
        </div>
        <div className={`text-sm ${dark ? 'text-neutral-dark' : 'text-white/80'}`}>{label}</div>
      </div>
    </div>
  );
}

export function Layout410() {
  const [watchedSlides, setWatchedSlides] = useState(new Set());
  const slideRefs = useRef([]);

  useEffect(() => {
    const observers = slideRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setWatchedSlides(prev => new Set([...prev, index]));
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (observer && slideRefs.current[index]) {
          observer.unobserve(slideRefs.current[index]);
        }
      });
    };
  }, []);

  const slides = [
    { label: 'Xpixel', color: 'text-brand-primary' },
    { label: 'NFT', color: 'text-brand-blue' },
    { label: 'ART', color: 'text-brand-orange' },
    { label: 'POP', color: 'text-brand-red' },
    { label: 'Xpixel', color: 'text-brand-primary' }
  ];

  return (
    <section className="bg-brand-primary px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="md:mb-18 mx-auto mb-12 w-full max-w-lg text-center lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Get familiar</p>
          <h1 className="text-h2 mb-5 font-bold md:mb-6">
            Our digital canvas awaits
          </h1>
          <p className="text-medium">
            Secure your unique pixel space in our collaborative art project
          </p>
        </div>
        <div className="relative grid auto-cols-fr grid-cols-1 gap-6 md:gap-0">
          <Card
            ref={(el) => (slideRefs.current[0] = el)}
            className="relative grid grid-cols-1 content-center overflow-hidden bg-white md:sticky md:mb-[15vh] md:h-[70vh] md:grid-cols-2"
            style={{ top: "15%" }}
          >
            {/* Label shown permanently after slide is watched */}
            {watchedSlides.has(0) && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
                <div className={`text-4xl md:text-6xl font-black ${slides[0].color} opacity-30 pointer-events-none`}>
                  {slides[0].label}
                </div>
              </div>
            )}
            <div className="order-first flex flex-col justify-center p-6 md:p-8 lg:p-12 md:order-last">
              <p className="mb-2 font-semibold text-brand-primary">Xpixel</p>
              <h2 className="text-h3 mb-5 font-bold text-neutral-darkest md:mb-6">
                Let's create the digital Mona Lisa together
              </h2>
              <p className="text-neutral-dark mb-6">
                Each pixel block becomes your digital real estate on the
                blockchain. Immutable. Permanent.
              </p>

              {/* Statistics Grid */}
              <div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-2">
                <StatCard icon={Users} label="Active Users" value={15420} dark />
                <StatCard icon={DollarSign} label="Market Value" value={2400000} prefix="$" dark />
              </div>

              <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                <Link to="/xpixel">
                  <Button
                    variant="secondary"
                    className="group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <span className="relative z-10">Xpixel</span>
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button
                    variant="link"
                    size="link"
                    className="text-neutral-darkest hover:text-brand-primary group"
                    iconRight={<ChevronRight className="text-neutral-darkest group-hover:text-brand-primary transition-transform group-hover:translate-x-1" />}
                  >
                    How it works
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-last flex flex-col items-center justify-center md:order-first bg-neutral-darkest">
              <video
                src="/WEBPIX/media/videos/testimonials_mock.mp4"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </Card>
          <Card
            ref={(el) => (slideRefs.current[1] = el)}
            className="relative grid grid-cols-1 content-center overflow-hidden bg-white md:sticky md:mb-[15vh] md:h-[70vh] md:grid-cols-2"
            style={{ top: "18%" }}
          >
            {/* Label shown permanently after slide is watched */}
            {watchedSlides.has(1) && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
                <div className={`text-4xl md:text-6xl font-black ${slides[1].color} opacity-30 pointer-events-none`}>
                  {slides[1].label}
                </div>
              </div>
            )}
            <div className="order-first flex flex-col justify-center p-6 md:p-8 lg:p-12 md:order-first bg-gradient-to-br from-brand-blue/20 to-brand-blue/10">
              <p className="mb-2 font-semibold text-brand-blue">NFT</p>
              <h2 className="text-h3 mb-5 font-bold md:mb-6">
                Current NFT market
              </h2>
              <p className="mb-6">
                Digital art ownership on the blockchain is revolutionizing the art market.
              </p>

              {/* NFT Statistics */}
              <div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-2">
                <StatCard icon={BarChart3} label="Market Cap" value={23800000000} prefix="$" dark />
                <StatCard icon={TrendingUp} label="Yearly Growth" value={127} suffix="%" dark />
              </div>

              <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                <Link to="/xpixel">
                  <Button variant="secondary" className="group shadow-lg hover:shadow-xl transition-all duration-300">
                    <span className="relative z-10">Xpixel</span>
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button
                    variant="link"
                    size="link"
                    className="group"
                    iconRight={<ChevronRight className="text-scheme-text transition-transform group-hover:translate-x-1" />}
                  >
                    How it works
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-last flex flex-col items-center justify-center md:order-last">
              <img
                src="/WEBPIX/media/images/NFT-img.png"
                alt="NFT image"
              />
            </div>
          </Card>
          <Card
            ref={(el) => (slideRefs.current[2] = el)}
            className="relative grid grid-cols-1 content-center overflow-hidden bg-white md:sticky md:mb-[15vh] md:h-[70vh] md:grid-cols-2"
            style={{ top: "21%" }}
          >
            {/* Label shown permanently after slide is watched */}
            {watchedSlides.has(2) && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
                <div className={`text-4xl md:text-6xl font-black ${slides[2].color} opacity-30 pointer-events-none`}>
                  {slides[2].label}
                </div>
              </div>
            )}
            <div className="order-first flex flex-col justify-center p-6 md:p-8 lg:p-12 md:order-last bg-gradient-to-br from-brand-orange/20 to-brand-orange/10">
              <p className="mb-2 font-semibold text-brand-orange">ART</p>
              <h2 className="text-h3 mb-5 font-bold md:mb-6">
                Current ART market
              </h2>
              <p className="mb-6">
                The traditional and digital art market combined creates unprecedented opportunities.
              </p>

              {/* ART Statistics */}
              <div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-2">
                <StatCard icon={DollarSign} label="Forecast 2025" value={67500000000} prefix="$" dark />
                <StatCard icon={Activity} label="Monthly Volume" value={892000000} prefix="$" dark />
              </div>

              <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                <Link to="/xpixel">
                  <Button variant="secondary" className="group shadow-lg hover:shadow-xl transition-all duration-300">
                    <span className="relative z-10">Xpixel</span>
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button
                    variant="link"
                    size="link"
                    className="group"
                    iconRight={<ChevronRight className="text-scheme-text transition-transform group-hover:translate-x-1" />}
                  >
                    How it works
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-last flex flex-col items-center justify-center md:order-first">
              <img
                src="/WEBPIX/media/images/ART-img.png"
                alt="ART image"
              />
            </div>
          </Card>
          <Card
            ref={(el) => (slideRefs.current[3] = el)}
            className="relative grid grid-cols-1 content-center overflow-hidden bg-white md:sticky md:mb-[15vh] md:h-[70vh] md:grid-cols-2"
            style={{ top: "24%" }}
          >
            {/* Label shown permanently after slide is watched */}
            {watchedSlides.has(3) && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
                <div className={`text-4xl md:text-6xl font-black ${slides[3].color} opacity-30 pointer-events-none`}>
                  {slides[3].label}
                </div>
              </div>
            )}
            <div className="order-first flex flex-col justify-center p-6 md:p-8 lg:p-12 md:order-first bg-gradient-to-br from-brand-red/20 to-brand-red/10">
              <p className="mb-2 font-semibold text-brand-red">Popular Projects</p>
              <h2 className="text-h3 mb-5 font-bold md:mb-6">
                Iconic Art Milestones
              </h2>
              <p className="mb-6">
                From Comedian to cryptopunks, art continues to push boundaries and redefine value.
              </p>

              {/* Popular Projects Statistics */}
              <div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-2">
                <StatCard icon={Zap} label="Record Sale" value={6200000} prefix="$" dark />
                <StatCard icon={TrendingUp} label="Appreciation" value={342} suffix="%" dark />
              </div>

              <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                <Link to="/xpixel">
                  <Button variant="secondary" className="group shadow-lg hover:shadow-xl transition-all duration-300">
                    <span className="relative z-10">Xpixel</span>
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button
                    variant="link"
                    size="link"
                    className="group"
                    iconRight={<ChevronRight className="text-scheme-text transition-transform group-hover:translate-x-1" />}
                  >
                    How it works
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-last flex flex-col items-center justify-center md:order-last">
              <img
                src="/WEBPIX/media/images/Ducktape_Banana.png"
                alt="Ducktape Banana image"
              />
            </div>
          </Card>
          <Card
            ref={(el) => (slideRefs.current[4] = el)}
            className="relative grid grid-cols-1 content-center overflow-hidden bg-white md:sticky md:mb-[15vh] md:h-[70vh] md:grid-cols-2"
            style={{ top: "21%" }}
          >
            {/* Label shown permanently after slide is watched */}
            {watchedSlides.has(4) && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
                <div className={`text-4xl md:text-6xl font-black ${slides[4].color} opacity-30 pointer-events-none`}>
                  {slides[4].label}
                </div>
              </div>
            )}
            <div className="order-first flex flex-col justify-center p-6 md:p-8 lg:p-12 md:order-last bg-gradient-to-br from-brand-primary/20 to-brand-primary/10">
              <p className="mb-2 font-semibold text-brand-primary">Xpixel</p>
              <h2 className="text-h3 mb-5 font-bold md:mb-6">
                The Digital Mona Lisa is in our hands
              </h2>
              <p className="mb-6">
                Join thousands of creators building the next masterpiece together on the blockchain.
              </p>

              {/* Xpixel Statistics */}
              <div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-2">
                <StatCard icon={Users} label="Contributors" value={8420} dark />
                <StatCard icon={Activity} label="Pixels Owned" value={234567} dark />
              </div>

              <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                <Link to="/xpixel">
                  <Button variant="secondary" className="group shadow-lg hover:shadow-xl transition-all duration-300">
                    <span className="relative z-10">Xpixel</span>
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button
                    variant="link"
                    size="link"
                    className="group"
                    iconRight={<ChevronRight className="text-scheme-text transition-transform group-hover:translate-x-1" />}
                  >
                    How it works
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-last flex flex-col items-center justify-center md:order-first">
              <img
                src="/WEBPIX/media/images/The_Digital_Mona_Lisa.png"
                alt="Digital Mona Lisa image"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
