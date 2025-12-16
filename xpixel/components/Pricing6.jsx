"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Circle, Sparkles, Star, ShoppingCart, X, Plus, Minus, Shield, Zap, ArrowRight } from "lucide-react";

const SECTORS = [
  {
    id: 0,
    name: "Sector 0",
    subtitle: "Outer Edge",
    pricePerPixel: 64,
    totalBlocks: 396,
    color: "neutral-dark",
    bgColor: "bg-neutral-dark",
    textColor: "text-neutral-dark",
    borderColor: "border-neutral-dark",
    description: "Maximum canvas space with bold visibility",
    features: [
      "Largest available area",
      "Border positioning advantage",
      "Best value per pixel"
    ]
  },
  {
    id: 1,
    name: "Sector 1",
    subtitle: "Outer Ring",
    pricePerPixel: 128,
    totalBlocks: 2904,
    color: "neutral",
    bgColor: "bg-neutral",
    textColor: "text-neutral",
    borderColor: "border-neutral",
    description: "Strategic positioning with excellent exposure",
    features: [
      "Substantial canvas space",
      "Strong visual presence",
      "Balanced visibility"
    ]
  },
  {
    id: 2,
    name: "Sector 2",
    subtitle: "Middle Ring",
    pricePerPixel: 256,
    totalBlocks: 3300,
    color: "neutral-darker",
    bgColor: "bg-neutral-darker",
    textColor: "text-neutral-darker",
    borderColor: "border-neutral-darker",
    description: "Premium positioning closer to the focal point",
    features: [
      "Premium canvas location",
      "High attention zone",
      "Featured spotlight"
    ]
  },
  {
    id: 3,
    name: "Sector 3",
    subtitle: "Inner Ring",
    pricePerPixel: 512,
    totalBlocks: 3300,
    color: "brand-primary",
    bgColor: "bg-brand-primary",
    textColor: "text-brand-primary",
    borderColor: "border-brand-primary",
    description: "Elite central positioning with maximum prestige",
    features: [
      "Elite near-center placement",
      "Maximum visibility",
      "Limited availability"
    ]
  },
  {
    id: 4,
    name: "Sector 4",
    subtitle: "Center",
    pricePerPixel: 1024,
    totalBlocks: 100,
    color: "brand-primary",
    bgColor: "bg-brand-primary",
    textColor: "text-brand-primary",
    borderColor: "border-brand-primary",
    description: "The absolute center - ultimate prestige and focal point",
    features: [
      "Dead center placement",
      "Ultimate visibility",
      "Extreme scarcity"
    ],
    isUltimate: true,
    isLocked: true
  }
];

const PIXELS_PER_BLOCK = 100; // 10x10 pixels
const MAX_BLOCKS = 5;

export function Pricing6() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (sector) => {
    if (getTotalBlocks() >= MAX_BLOCKS) {
      alert(`Maximum ${MAX_BLOCKS} blocks (10x10 pixels each) allowed per purchase`);
      return;
    }

    const existingItem = cart.find(item => item.sector.id === sector.id);
    if (existingItem) {
      updateQuantity(sector.id, existingItem.quantity + 1);
    } else {
      setCart([...cart, { sector, quantity: 1 }]);
      setIsCartOpen(true);
    }
  };

  const removeFromCart = (sectorId) => {
    setCart(cart.filter(item => item.sector.id !== sectorId));
  };

  const updateQuantity = (sectorId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(sectorId);
      return;
    }

    const otherBlocks = cart
      .filter(item => item.sector.id !== sectorId)
      .reduce((sum, item) => sum + item.quantity, 0);

    if (otherBlocks + newQuantity > MAX_BLOCKS) {
      alert(`Maximum ${MAX_BLOCKS} blocks total allowed`);
      return;
    }

    setCart(cart.map(item =>
      item.sector.id === sectorId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const getTotalBlocks = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((sum, item) => sum + (item.sector.pricePerPixel * item.quantity), 0);
  };

  const getTotalPixels = () => {
    return getTotalBlocks() * PIXELS_PER_BLOCK;
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty");
      return;
    }

    const summary = cart.map(item =>
      `${item.sector.name}: ${item.quantity} block(s) (${item.quantity * PIXELS_PER_BLOCK} pixels) - $${item.sector.pricePerPixel * item.quantity}`
    ).join('\n');

    alert(`🎨 Demo Checkout\n\n${summary}\n\nTotal: ${getTotalBlocks()} blocks (${getTotalPixels()} pixels)\nPrice: $${getTotalPrice()}\n\n(This is a demo - no actual transaction will occur)`);
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-b from-white via-neutral-lightest to-white">
      <div className="container max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-primary/10 px-4 py-2 text-sm font-semibold text-brand-primary">
            <Sparkles className="h-4 w-4" />
            Transparent Pricing
          </div>
          <h1 className="mb-5 text-h1 font-bold md:mb-6">
            Choose Your Sector
          </h1>
          <p className="text-large text-neutral-dark">
            Select sectors and add 10×10 pixel blocks to your cart. Maximum {MAX_BLOCKS} blocks per purchase.
          </p>
        </div>

        {/* Sector Selection Status */}
        {cart.length > 0 && (
          <div className="mx-auto mb-8 max-w-3xl rounded-xl bg-gradient-to-r from-brand-primary/10 to-brand-blue/10 p-6 border-2 border-brand-primary/20">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h3 className="font-bold text-lg mb-2">Your Selection</h3>
                <div className="flex flex-wrap gap-2">
                  {cart.map((item) => (
                    <div
                      key={item.sector.id}
                      className={`inline-flex items-center gap-2 rounded-full ${item.sector.bgColor} px-3 py-1 text-white font-semibold text-sm`}
                    >
                      <Circle className="h-3 w-3 fill-white" />
                      <span>{item.sector.name}</span>
                      <span className="bg-white/20 rounded-full px-2 py-0.5 text-xs">×{item.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-neutral-dark mb-1">Total Blocks</div>
                <div className="text-3xl font-black text-brand-primary">{getTotalBlocks()}/{MAX_BLOCKS}</div>
              </div>
            </div>
          </div>
        )}

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Sector Cards */}
          <div className="lg:col-span-2">
            <div className="grid gap-6 sm:grid-cols-2">
              {SECTORS.map((sector) => {
                const cartItem = cart.find(item => item.sector.id === sector.id);
                const isSelected = !!cartItem;
                const quantity = cartItem?.quantity || 0;

                // Get explicit classes based on sector color to avoid Tailwind purging
                const getBgClass = () => {
                  if (!isSelected) return 'bg-white';
                  switch(sector.color) {
                    case 'brand-primary': return 'bg-gradient-to-br from-brand-primary/5 to-white ring-2 ring-brand-primary';
                    case 'neutral-dark': return 'bg-gradient-to-br from-neutral-dark/5 to-white ring-2 ring-neutral-dark';
                    case 'neutral': return 'bg-gradient-to-br from-neutral/5 to-white ring-2 ring-neutral';
                    case 'neutral-darker': return 'bg-gradient-to-br from-neutral-darker/5 to-white ring-2 ring-neutral-darker';
                    default: return 'bg-white';
                  }
                };

                const soldBlocks = cart.find(item => item.sector.id === sector.id)?.quantity || 0;
                const remainingBlocks = sector.totalBlocks - soldBlocks;

                return (
                  <Card
                    key={sector.id}
                    className={`group relative overflow-hidden border-2 ${sector.borderColor} transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${getBgClass()} ${sector.isLocked ? 'opacity-60' : ''}`}
                  >
                    {sector.isLocked && (
                      <div className="absolute inset-0 bg-neutral-darkest/20 backdrop-blur-[1px] z-20 flex items-center justify-center">
                        <div className="bg-neutral-darkest/90 px-6 py-3 rounded-lg text-white font-bold text-lg">
                          🔒 LOCKED
                        </div>
                      </div>
                    )}

                    {isSelected && !sector.isLocked && (
                      <div className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-green-400 to-green-600 p-2 shadow-lg z-10 animate-in zoom-in">
                        <Check className="h-4 w-4 text-white" strokeWidth={3} />
                      </div>
                    )}

                    {isSelected && quantity > 0 && !sector.isLocked && (
                      <div className={`absolute right-4 top-4 rounded-full ${sector.bgColor} px-4 py-2 text-white font-bold shadow-lg z-10`}>
                        ×{quantity}
                      </div>
                    )}

                    {!isSelected && sector.id === 3 && !sector.isLocked && (
                      <div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-3 py-1 text-xs font-bold text-amber-950 shadow-md z-10">
                        ELITE
                      </div>
                    )}
                    {!isSelected && sector.isUltimate && sector.isLocked && (
                      <div className="absolute right-4 top-4 rounded-full bg-neutral-darkest/80 px-3 py-1 text-xs font-bold text-white shadow-md z-10">
                        LOCKED
                      </div>
                    )}

                  <div className={`absolute inset-x-0 top-0 h-1 ${
                    sector.color === 'brand-primary' ? 'bg-gradient-to-r from-brand-primary/50 via-brand-primary to-brand-primary/50' :
                    sector.color === 'neutral-dark' ? 'bg-gradient-to-r from-neutral-dark/50 via-neutral-dark to-neutral-dark/50' :
                    sector.color === 'neutral' ? 'bg-gradient-to-r from-neutral/50 via-neutral to-neutral/50' :
                    'bg-gradient-to-r from-neutral-darker/50 via-neutral-darker to-neutral-darker/50'
                  }`} />

                  <div className="p-6">
                    <div className="mb-6">
                      <div className={`mb-3 inline-flex items-center gap-2 rounded-full px-4 py-2 ${
                        sector.color === 'brand-primary' ? 'bg-brand-primary/10' :
                        sector.color === 'neutral-dark' ? 'bg-neutral-dark/10' :
                        sector.color === 'neutral' ? 'bg-neutral/10' :
                        'bg-neutral-darker/10'
                      }`}>
                        <Circle className={`h-4 w-4 ${
                          sector.color === 'brand-primary' ? 'fill-brand-primary text-brand-primary' :
                          sector.color === 'neutral-dark' ? 'fill-neutral-dark text-neutral-dark' :
                          sector.color === 'neutral' ? 'fill-neutral text-neutral' :
                          'fill-neutral-darker text-neutral-darker'
                        }`} />
                        <span className={`text-sm font-bold ${
                          sector.color === 'brand-primary' ? 'text-brand-primary' :
                          sector.color === 'neutral-dark' ? 'text-neutral-dark' :
                          sector.color === 'neutral' ? 'text-neutral' :
                          'text-neutral-darker'
                        }`}>{sector.name}</span>
                      </div>

                      <div className="mb-3 flex items-center justify-between">
                        <div className="text-xs text-neutral-dark bg-neutral-lighter px-3 py-1 rounded-full font-semibold">
                          {remainingBlocks.toLocaleString()} blocks available
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="mb-1 flex items-baseline gap-2">
                          <span className="text-4xl font-black text-neutral-darkest">${sector.pricePerPixel}</span>
                          <span className="text-sm font-medium text-neutral-dark">per block</span>
                        </div>
                        <p className="text-xs text-neutral-dark">10×10 pixels ({PIXELS_PER_BLOCK} total)</p>
                      </div>

                      <p className="mb-4 text-sm text-neutral-dark">{sector.description}</p>

                      <ul className="space-y-2">
                        {sector.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs">
                            <Check className={`mt-0.5 h-3 w-3 flex-shrink-0 ${
                              sector.color === 'brand-primary' ? 'text-brand-primary' :
                              sector.color === 'neutral-dark' ? 'text-neutral-dark' :
                              sector.color === 'neutral' ? 'text-neutral' :
                              'text-neutral-darker'
                            }`} strokeWidth={3} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      onClick={() => addToCart(sector)}
                      variant="primary"
                      className={`w-full ${
                        sector.color === 'brand-primary' ? 'bg-gradient-to-r from-brand-primary to-brand-primary/90' :
                        sector.color === 'neutral-dark' ? 'bg-gradient-to-r from-neutral-dark to-neutral-dark/90' :
                        sector.color === 'neutral' ? 'bg-gradient-to-r from-neutral to-neutral/90' :
                        'bg-gradient-to-r from-neutral-darker to-neutral-darker/90'
                      }`}
                      iconRight={<Plus className="h-4 w-4" />}
                      disabled={getTotalBlocks() >= MAX_BLOCKS || sector.isLocked}
                    >
                      {sector.isLocked ? '🔒 Locked' : 'Add to Cart'}
                    </Button>
                  </div>
                </Card>
                );
              })}
            </div>
          </div>

          {/* Cart Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="border-2 border-brand-primary/20 bg-white shadow-xl">
                <div className="border-b border-neutral-lighter p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">Your Cart</h3>
                    <div className="flex items-center gap-2 rounded-full bg-brand-primary px-3 py-1">
                      <ShoppingCart className="h-4 w-4 text-white" />
                      <span className="text-sm font-bold text-white">{getTotalBlocks()}/{MAX_BLOCKS}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {cart.length === 0 ? (
                    <div className="py-8 text-center">
                      <ShoppingCart className="mx-auto mb-3 h-12 w-12 text-neutral-light" />
                      <p className="text-sm text-neutral-dark">Your cart is empty</p>
                      <p className="mt-1 text-xs text-neutral">Add blocks to get started</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {cart.map((item) => (
                        <div
                          key={item.sector.id}
                          className={`rounded-lg border-2 ${item.sector.borderColor} bg-gradient-to-br from-${item.sector.color}/5 to-transparent p-4`}
                        >
                          <div className="mb-3 flex items-start justify-between">
                            <div>
                              <div className="flex items-center gap-2">
                                <Circle className={`h-3 w-3 fill-${item.sector.color} ${item.sector.textColor}`} />
                                <span className="font-bold text-sm">{item.sector.name}</span>
                              </div>
                              <p className="mt-1 text-xs text-neutral-dark">
                                {item.quantity * PIXELS_PER_BLOCK} pixels
                              </p>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.sector.id)}
                              className="rounded-full p-1 hover:bg-neutral-darker/10 transition-colors"
                            >
                              <X className="h-4 w-4 text-neutral-dark" />
                            </button>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => updateQuantity(item.sector.id, item.quantity - 1)}
                                className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-lighter hover:bg-neutral-light transition-colors"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="w-8 text-center font-bold">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.sector.id, item.quantity + 1)}
                                className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-lighter hover:bg-neutral-light transition-colors"
                                disabled={getTotalBlocks() >= MAX_BLOCKS}
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>
                            <span className="font-bold">
                              ${item.sector.pricePerPixel * item.quantity}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {cart.length > 0 && (
                    <>
                      <div className="my-6 space-y-3 border-y border-neutral-lighter py-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-neutral-dark">Total Blocks</span>
                          <span className="font-semibold">{getTotalBlocks()} blocks</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-neutral-dark">Total Pixels</span>
                          <span className="font-semibold">{getTotalPixels()} pixels</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">Total Price</span>
                          <span className="text-2xl font-black text-brand-primary">${getTotalPrice()}</span>
                        </div>
                      </div>

                      <div className="mb-4 rounded-lg bg-brand-blue/10 p-3">
                        <div className="flex items-start gap-2">
                          <Shield className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-blue" />
                          <p className="text-xs text-neutral-dark">
                            Demo mode - No actual transaction will occur
                          </p>
                        </div>
                      </div>

                      <Button
                        onClick={handleCheckout}
                        variant="primary"
                        size="lg"
                        className="w-full"
                        iconRight={<Zap className="h-5 w-5" />}
                      >
                        Proceed to Checkout
                      </Button>
                    </>
                  )}
                </div>
              </Card>

              {/* Trust Badge */}
              <div className="mt-6 rounded-xl bg-gradient-to-br from-neutral-lightest to-white p-6 shadow-md ring-1 ring-neutral-lighter">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-brand-primary/10 p-2">
                    <Star className="h-5 w-5 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-bold text-sm">Blockchain Secured</h4>
                    <p className="text-xs text-neutral-dark">
                      Permanent ownership recorded on Ethereum blockchain
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
