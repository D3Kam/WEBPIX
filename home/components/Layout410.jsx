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

function MacOSWindowControls({ onClose, onMinimize, onMaximize, title }) {
  return (
    <div className="flex items-center justify-between gap-2 px-5 py-4 bg-gradient-to-b from-neutral-lightest via-neutral-lightest/95 to-neutral-lightest/90 backdrop-blur-md border-b-2 border-neutral-light/50 shadow-sm">
      <div className="flex items-center gap-2.5">
        <button
          onClick={onClose}
          className="group h-3.5 w-3.5 rounded-full bg-[#FF5F56] hover:bg-[#FF4840] transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow-md"
          aria-label="Close"
        >
          <X className="h-2.5 w-2.5 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={3} />
        </button>
        <button
          onClick={onMinimize}
          className="group h-3.5 w-3.5 rounded-full bg-[#FFBD2E] hover:bg-[#FFB000] transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow-md"
          aria-label="Minimize"
        >
          <Minus className="h-2.5 w-2.5 text-neutral-darkest/80 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={3} />
        </button>
        <button
          onClick={onMaximize}
          className="group h-3.5 w-3.5 rounded-full bg-[#27C93F] hover:bg-[#1FB834] transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow-md"
          aria-label="Maximize"
        >
          <Maximize2 className="h-2.5 w-2.5 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={3} />
        </button>
      </div>
      <div className="flex-1 text-center">
        <span className="text-sm font-semibold text-neutral-dark">{title}</span>
      </div>
      <div className="w-[60px]"></div> {/* Spacer for centering */}
    </div>
  );
}

export function Layout410() {
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [expandedWindows, setExpandedWindows] = useState(new Set());
  const [hasScrolledUp, setHasScrolledUp] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
        setHasScrolledUp(true); // Mark that user has scrolled up at least once
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
    setExpandedWindows(prev => {
      const newSet = new Set(prev);
      newSet.delete(id);
      return newSet;
    });
  };

  const handleMinimize = (id) => {
    setExpandedWindows(prev => {
      const newSet = new Set(prev);
      newSet.delete(id);
      return newSet;
    });
  };

  const handleMaximize = (id) => {
    setExpandedWindows(prev => new Set([...prev, id]));
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

        <div className={!hasScrolledUp && scrollDirection === 'down' ? 'relative grid auto-cols-fr grid-cols-1 gap-6 md:gap-0' : 'grid gap-4 md:gap-5 lg:gap-6'}>
          {windows.map((window, index) => {
            const topOffset = 15 + (index * 3); // 15%, 18%, 21%, 24%, 27%
            const isSticky = !hasScrolledUp && scrollDirection === 'down';
            const isExpanded = expandedWindows.has(window.id);
            const showMacOS = hasScrolledUp; // Show macOS controls once user has scrolled up

            return (
            <Card
              key={window.id}
              className={`overflow-hidden bg-white shadow-2xl rounded-2xl border-4 border-neutral-light/60 transition-all duration-500 ${isSticky ? 'md:sticky md:mb-[15vh] md:h-[70vh] content-center' : isExpanded ? 'hover:shadow-brand-primary/30' : ''}`}
              style={isSticky ? { top: `${topOffset}%` } : {}}
            >
              {/* macOS Window Controls - only show once user has scrolled up */}
              {showMacOS && (
                <MacOSWindowControls
                  title={window.label}
                  onClose={() => handleClose(window.id)}
                  onMinimize={() => handleMinimize(window.id)}
                  onMaximize={() => handleMaximize(window.id)}
                />
              )}

              {/* Window Content - hide when in macOS mode and not expanded */}
              {(!hasScrolledUp || isExpanded) && (
                <div className={`grid grid-cols-1 md:grid-cols-2 ${isSticky ? 'h-full' : ''} ${window.bgColor}`}>
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
                <div className={`flex flex-col items-center justify-center ${isSticky ? 'h-full' : ''} ${window.mediaFirst ? 'md:order-first' : 'md:order-last'} ${window.media.type === 'video' ? 'bg-neutral-darkest' : ''}`}>
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
              )}
            </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
