"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React, { useEffect, useRef, useState } from "react";
import { ChevronRight, TrendingUp, Users, DollarSign, Activity, BarChart3, Zap, X, Minus, Maximize2 } from "lucide-react";
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

function MacOSWindowControls({ onClose, onMinimize, onMaximize }) {
  return (
    <div className="flex items-center gap-2 px-4 py-3 bg-neutral-lightest/80 backdrop-blur-sm border-b border-neutral-light/30">
      <button
        onClick={onClose}
        className="group h-3 w-3 rounded-full bg-[#FF5F56] hover:bg-[#FF4840] transition-all duration-200 flex items-center justify-center"
        aria-label="Close"
      >
        <X className="h-2 w-2 text-neutral-darkest opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>
      <button
        onClick={onMinimize}
        className="group h-3 w-3 rounded-full bg-[#FFBD2E] hover:bg-[#FFB000] transition-all duration-200 flex items-center justify-center"
        aria-label="Minimize"
      >
        <Minus className="h-2 w-2 text-neutral-darkest opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>
      <button
        onClick={onMaximize}
        className="group h-3 w-3 rounded-full bg-[#27C93F] hover:bg-[#1FB834] transition-all duration-200 flex items-center justify-center"
        aria-label="Maximize"
      >
        <Maximize2 className="h-2 w-2 text-neutral-darkest opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>
    </div>
  );
}

export function Layout410() {
  const windows = [
    {
      id: 'xpixel',
      label: 'Xpixel',
      color: 'text-brand-primary',
      bgColor: 'bg-white',
      tag: 'Xpixel',
      tagColor: 'text-brand-primary',
      title: "Let's create the digital Mona Lisa together",
      description: "Each pixel block becomes your digital real estate on the blockchain. Immutable. Permanent.",
      stats: [
        { icon: Users, label: "Active Users", value: 15420 },
        { icon: DollarSign, label: "Market Value", value: 2400000, prefix: "$" }
      ],
      media: { type: 'video', src: '/WEBPIX/media/videos/testimonials_mock.mp4' },
      mediaFirst: false
    },
    {
      id: 'nft',
      label: 'NFT',
      color: 'text-brand-blue',
      bgColor: 'bg-gradient-to-br from-brand-blue/20 to-brand-blue/10',
      tag: 'NFT',
      tagColor: 'text-brand-blue',
      title: "Current NFT market",
      description: "Digital art ownership on the blockchain is revolutionizing the art market.",
      stats: [
        { icon: BarChart3, label: "Market Cap", value: 23800000000, prefix: "$" },
        { icon: TrendingUp, label: "Yearly Growth", value: 127, suffix: "%" }
      ],
      media: { type: 'image', src: '/WEBPIX/media/images/NFT-img.png', alt: 'NFT image' },
      mediaFirst: false
    },
    {
      id: 'art',
      label: 'ART',
      color: 'text-brand-orange',
      bgColor: 'bg-gradient-to-br from-brand-orange/20 to-brand-orange/10',
      tag: 'ART',
      tagColor: 'text-brand-orange',
      title: "Current ART market",
      description: "The traditional and digital art market combined creates unprecedented opportunities.",
      stats: [
        { icon: DollarSign, label: "Forecast 2025", value: 67500000000, prefix: "$" },
        { icon: Activity, label: "Monthly Volume", value: 892000000, prefix: "$" }
      ],
      media: { type: 'image', src: '/WEBPIX/media/images/ART-img.png', alt: 'ART image' },
      mediaFirst: true
    },
    {
      id: 'pop',
      label: 'POP',
      color: 'text-brand-red',
      bgColor: 'bg-gradient-to-br from-brand-red/20 to-brand-red/10',
      tag: 'Popular Projects',
      tagColor: 'text-brand-red',
      title: "Iconic Art Milestones",
      description: "From Comedian to cryptopunks, art continues to push boundaries and redefine value.",
      stats: [
        { icon: Zap, label: "Record Sale", value: 6200000, prefix: "$" },
        { icon: TrendingUp, label: "Appreciation", value: 342, suffix: "%" }
      ],
      media: { type: 'image', src: '/WEBPIX/media/images/Ducktape_Banana.png', alt: 'Ducktape Banana image' },
      mediaFirst: false
    },
    {
      id: 'xpixel-final',
      label: 'Xpixel',
      color: 'text-brand-primary',
      bgColor: 'bg-gradient-to-br from-brand-primary/20 to-brand-primary/10',
      tag: 'Xpixel',
      tagColor: 'text-brand-primary',
      title: "The Digital Mona Lisa is in our hands",
      description: "Join thousands of creators building the next masterpiece together on the blockchain.",
      stats: [
        { icon: Users, label: "Contributors", value: 8420 },
        { icon: Activity, label: "Pixels Owned", value: 234567 }
      ],
      media: { type: 'image', src: '/WEBPIX/media/images/The_Digital_Mona_Lisa.png', alt: 'Digital Mona Lisa image' },
      mediaFirst: true
    }
  ];

  const handleClose = (id) => {
    console.log(`Close window: ${id}`);
  };

  const handleMinimize = (id) => {
    console.log(`Minimize window: ${id}`);
  };

  const handleMaximize = (id) => {
    console.log(`Maximize window: ${id}`);
  };

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

        <div className="grid gap-8 md:gap-10 lg:gap-12">
          {windows.map((window, index) => (
            <Card
              key={window.id}
              className="overflow-hidden bg-white shadow-2xl rounded-xl border-2 border-neutral-light/50 hover:shadow-brand-primary/20 transition-all duration-300"
            >
              {/* macOS Window Controls */}
              <MacOSWindowControls
                onClose={() => handleClose(window.id)}
                onMinimize={() => handleMinimize(window.id)}
                onMaximize={() => handleMaximize(window.id)}
              />

              {/* Window Content */}
              <div className={`grid grid-cols-1 md:grid-cols-2 ${window.bgColor}`}>
                {/* Content Side */}
                <div className={`flex flex-col justify-center p-6 md:p-8 lg:p-12 ${window.mediaFirst ? 'md:order-last' : 'md:order-first'}`}>
                  <p className={`mb-2 font-semibold ${window.tagColor}`}>{window.tag}</p>
                  <h2 className="text-h3 mb-5 font-bold text-neutral-darkest md:mb-6">
                    {window.title}
                  </h2>
                  <p className="text-neutral-dark mb-6">
                    {window.description}
                  </p>

                  {/* Statistics Grid */}
                  <div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-2">
                    {window.stats.map((stat, idx) => (
                      <StatCard
                        key={idx}
                        icon={stat.icon}
                        label={stat.label}
                        value={stat.value}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                        dark
                      />
                    ))}
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

                {/* Media Side */}
                <div className={`flex flex-col items-center justify-center ${window.mediaFirst ? 'md:order-first' : 'md:order-last'} ${window.media.type === 'video' ? 'bg-neutral-darkest' : ''}`}>
                  {window.media.type === 'video' ? (
                    <video
                      src={window.media.src}
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <img
                      src={window.media.src}
                      alt={window.media.alt}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
