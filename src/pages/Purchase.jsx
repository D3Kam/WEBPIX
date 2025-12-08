"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar3 } from "@/components/shared/Navbar3";
import { Footer1 } from "@/components/shared/Footer1";
import { Check, Lock, Wallet, Circle, ArrowRight, Shield, Zap } from "lucide-react";

const SECTORS = [
  {
    id: 0,
    name: "Sector 0",
    subtitle: "Outer Edge",
    price: 64,
    color: "brand-primary",
    bgColor: "bg-brand-primary",
    textColor: "text-brand-primary",
    borderColor: "border-brand-primary",
    description: "Maximum canvas space with bold visibility",
    features: [
      "Largest available area",
      "Border positioning advantage",
      "Perfect for expansive artwork",
      "Best value per pixel"
    ]
  },
  {
    id: 1,
    name: "Sector 1",
    subtitle: "Outer Ring",
    price: 128,
    color: "brand-blue",
    bgColor: "bg-brand-blue",
    textColor: "text-brand-blue",
    borderColor: "border-brand-blue",
    description: "Strategic positioning with excellent exposure",
    features: [
      "Substantial canvas space",
      "Strong visual presence",
      "Balanced visibility",
      "Great for medium projects"
    ]
  },
  {
    id: 2,
    name: "Sector 2",
    subtitle: "Middle Ring",
    price: 256,
    color: "brand-orange",
    bgColor: "bg-brand-orange",
    textColor: "text-brand-orange",
    borderColor: "border-brand-orange",
    description: "Premium positioning closer to the focal point",
    features: [
      "Premium canvas location",
      "High attention zone",
      "Close to center",
      "Featured artwork spotlight"
    ]
  },
  {
    id: 3,
    name: "Sector 3",
    subtitle: "Inner Ring",
    price: 512,
    color: "brand-red",
    bgColor: "bg-brand-red",
    textColor: "text-brand-red",
    borderColor: "border-brand-red",
    description: "Elite central positioning with maximum prestige",
    features: [
      "Elite near-center placement",
      "Maximum visibility",
      "Guaranteed focal attention",
      "Limited availability"
    ]
  },
  {
    id: 4,
    name: "Center",
    subtitle: "Reserved",
    price: 1024,
    color: "neutral-dark",
    bgColor: "bg-neutral-dark",
    textColor: "text-neutral-dark",
    borderColor: "border-neutral-dark",
    description: "The heart of the canvas - Reserved for future release",
    features: [
      "Ultimate prestige",
      "Maximum value",
      "Coming soon",
      "Limited to 1 owner"
    ],
    locked: true
  }
];

const WALLETS = [
  { name: "MetaMask", icon: "🦊", popular: true },
  { name: "Trust Wallet", icon: "🔷", popular: true },
  { name: "Phantom", icon: "👻", popular: true },
  { name: "Coinbase Wallet", icon: "🔵", popular: false },
  { name: "WalletConnect", icon: "🔗", popular: false }
];

export default function Purchase() {
  const [selectedSector, setSelectedSector] = useState(null);
  const [step, setStep] = useState(1); // 1: Select Sector, 2: Connect Wallet, 3: Confirm
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);

  const handleSectorSelect = (sector) => {
    if (sector.locked) return;
    setSelectedSector(sector);
    setStep(2);
  };

  const handleWalletConnect = async (wallet) => {
    setSelectedWallet(wallet);
    setIsConnecting(true);

    // Simulate wallet connection (Demo mode)
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsConnecting(false);
    setStep(3);
  };

  const handlePurchase = async () => {
    // Demo purchase - show success message
    alert(`🎨 Demo Purchase Successful!\n\nSector: ${selectedSector.name}\nPrice: $${selectedSector.price}\nWallet: ${selectedWallet.name}\n\n(This is a demo - no actual transaction occurred)`);

    // Reset
    setStep(1);
    setSelectedSector(null);
    setSelectedWallet(null);
  };

  return (
    <div className="min-h-screen bg-neutral-lightest">
      <Navbar3 />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary/10 via-brand-blue/10 to-brand-orange/10 px-[5%] py-12 md:py-16">
        <div className="container max-w-4xl text-center">
          <h1 className="mb-4 text-h1 font-bold">Claim Your Canvas Space</h1>
          <p className="text-large text-neutral-dark">
            Secure your unique position in the collaborative digital masterpiece. Choose your sector and become part of art history.
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="border-b border-brand-primary/20 bg-brand-primary px-[5%] py-6">
        <div className="container max-w-4xl">
          <div className="flex items-center justify-center gap-4">
            <div className={`flex items-center gap-2 ${step >= 1 ? 'text-white' : 'text-white/60'}`}>
              <div className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 1 ? 'bg-white text-brand-primary' : 'bg-white/20 text-white'}`}>
                1
              </div>
              <span className="hidden font-medium sm:inline">Select Sector</span>
            </div>
            <div className="h-px w-12 bg-white/20" />
            <div className={`flex items-center gap-2 ${step >= 2 ? 'text-white' : 'text-white/60'}`}>
              <div className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 2 ? 'bg-white text-brand-primary' : 'bg-white/20 text-white'}`}>
                2
              </div>
              <span className="hidden font-medium sm:inline">Connect Wallet</span>
            </div>
            <div className="h-px w-12 bg-white/20" />
            <div className={`flex items-center gap-2 ${step >= 3 ? 'text-white' : 'text-white/60'}`}>
              <div className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 3 ? 'bg-white text-brand-primary' : 'bg-white/20 text-white'}`}>
                3
              </div>
              <span className="hidden font-medium sm:inline">Confirm</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-[5%] py-16 md:py-24">
        <div className="container max-w-6xl">

          {/* Step 1: Sector Selection */}
          {step === 1 && (
            <div>
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-h2 font-bold">Choose Your Sector</h2>
                <p className="text-medium text-neutral-dark">
                  Each sector offers unique positioning and value. Select the space that matches your creative vision.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {SECTORS.map((sector) => (
                  <Card
                    key={sector.id}
                    className={`group relative cursor-pointer border-2 transition-all duration-300 ${
                      sector.locked
                        ? 'opacity-60 hover:shadow-lg'
                        : `hover:-translate-y-2 hover:shadow-2xl ${sector.borderColor}/20 hover:border-${sector.color} hover:shadow-${sector.color}/20`
                    }`}
                    onClick={() => handleSectorSelect(sector)}
                  >
                    {sector.locked && (
                      <div className="absolute right-4 top-4 rounded-full bg-neutral-dark px-3 py-1 text-xs font-semibold text-white">
                        <Lock className="mr-1 inline-block h-3 w-3" />
                        Locked
                      </div>
                    )}

                    <div className="p-6">
                      <div className={`mb-4 inline-flex items-center gap-2 rounded-full ${sector.bgColor}/10 px-4 py-2`}>
                        <Circle className={`h-4 w-4 ${sector.textColor}`} />
                        <span className={`font-semibold ${sector.textColor}`}>
                          {sector.name}
                        </span>
                      </div>

                      <div className="mb-4">
                        <div className="mb-2 flex items-baseline gap-2">
                          <span className="text-5xl font-black text-neutral-darkest">${sector.price}</span>
                          <span className="text-sm font-semibold text-neutral-dark">USD</span>
                        </div>
                        <p className="text-sm font-medium text-neutral">{sector.subtitle}</p>
                      </div>

                      <p className="mb-4 text-sm text-neutral-dark">{sector.description}</p>

                      <ul className="space-y-2">
                        {sector.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <Check className={`mt-0.5 h-4 w-4 flex-shrink-0 ${sector.textColor}`} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Wallet Connection */}
          {step === 2 && (
            <div>
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-h2 font-bold">Connect Your Wallet</h2>
                <p className="text-medium text-neutral-dark">
                  Choose your preferred Ethereum wallet to complete the purchase.
                </p>
              </div>

              {/* Selected Sector Summary */}
              <Card className="mb-8 bg-gradient-to-r from-neutral-lightest to-white">
                <div className="p-6">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-full ${selectedSector?.bgColor}/10`}>
                        <Circle className={`h-6 w-6 ${selectedSector?.textColor}`} />
                      </div>
                      <div>
                        <h3 className="font-bold">{selectedSector?.name} - {selectedSector?.subtitle}</h3>
                        <p className="text-sm text-neutral-dark">{selectedSector?.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-h3 font-bold">${selectedSector?.price}</div>
                      <p className="text-sm text-neutral">USD</p>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {WALLETS.map((wallet) => (
                  <Card
                    key={wallet.name}
                    className="group cursor-pointer border-2 border-transparent transition-all duration-300 hover:-translate-y-2 hover:border-brand-primary/30 hover:shadow-2xl hover:shadow-brand-primary/10"
                    onClick={() => handleWalletConnect(wallet)}
                  >
                    <div className="p-6 text-center">
                      <div className="mb-3 text-5xl transition-transform duration-300 group-hover:scale-110">{wallet.icon}</div>
                      <h3 className="mb-1 text-lg font-bold">{wallet.name}</h3>
                      {wallet.popular && (
                        <span className="inline-block rounded-full bg-gradient-to-r from-brand-primary to-brand-primary/80 px-3 py-1 text-xs font-semibold text-white shadow-md">
                          Popular
                        </span>
                      )}
                    </div>
                  </Card>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button
                  variant="link"
                  className="font-semibold transition-all hover:gap-2"
                  onClick={() => setStep(1)}
                >
                  ← Back to Sector Selection
                </Button>
              </div>

              {isConnecting && (
                <div className="mt-8 rounded-lg bg-brand-primary/10 p-6 text-center">
                  <div className="mb-2 text-lg font-semibold">Connecting to {selectedWallet?.name}...</div>
                  <p className="text-sm text-neutral-dark">Please approve the connection in your wallet</p>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div>
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-h2 font-bold">Confirm Purchase</h2>
                <p className="text-medium text-neutral-dark">
                  Review your selection and complete the transaction.
                </p>
              </div>

              <Card className="mx-auto max-w-2xl">
                <div className="p-8">
                  <div className="mb-8 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className={`flex h-20 w-20 items-center justify-center rounded-full ${selectedSector?.bgColor}/10`}>
                        <Circle className={`h-10 w-10 ${selectedSector?.textColor}`} />
                      </div>
                    </div>
                    <h3 className="mb-2 text-h3 font-bold">{selectedSector?.name}</h3>
                    <p className="text-neutral-dark">{selectedSector?.subtitle}</p>
                  </div>

                  <div className="mb-8 space-y-4 border-y border-neutral-lighter py-6">
                    <div className="flex justify-between">
                      <span className="text-neutral-dark">Sector</span>
                      <span className="font-semibold">{selectedSector?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-dark">Price</span>
                      <span className="font-semibold">${selectedSector?.price} USD</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-dark">Wallet</span>
                      <span className="font-semibold">{selectedWallet?.icon} {selectedWallet?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-dark">Network</span>
                      <span className="font-semibold">Ethereum</span>
                    </div>
                  </div>

                  <div className="mb-6 rounded-lg bg-brand-blue/10 p-4">
                    <div className="mb-2 flex items-center gap-2 font-semibold text-brand-blue">
                      <Shield className="h-5 w-5" />
                      Demo Mode
                    </div>
                    <p className="text-sm text-neutral-dark">
                      This is a demonstration. No actual blockchain transaction will occur. Your wallet will not be charged.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Button
                      className="group w-full bg-gradient-to-r from-brand-primary to-brand-blue shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-brand-primary/30"
                      size="lg"
                      onClick={handlePurchase}
                    >
                      <Zap className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                      Complete Purchase (Demo)
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full border-2 transition-all duration-300 hover:border-brand-primary/50 hover:bg-brand-primary/5 hover:shadow-md"
                      onClick={() => setStep(2)}
                    >
                      ← Change Wallet
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="border-t border-brand-primary/20 bg-brand-primary px-[5%] py-12 text-white">
        <div className="container max-w-4xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <Shield className="mx-auto mb-3 h-8 w-8 text-white" />
              <h3 className="mb-2 font-bold text-white">Secure Blockchain</h3>
              <p className="text-sm text-white/80">Your ownership is permanently recorded on Ethereum</p>
            </div>
            <div className="text-center">
              <Zap className="mx-auto mb-3 h-8 w-8 text-white" />
              <h3 className="mb-2 font-bold text-white">Instant Confirmation</h3>
              <p className="text-sm text-white/80">See your pixels appear on the canvas immediately</p>
            </div>
            <div className="text-center">
              <Wallet className="mx-auto mb-3 h-8 w-8 text-white" />
              <h3 className="mb-2 font-bold text-white">Your Wallet, Your Art</h3>
              <p className="text-sm text-white/80">Full ownership and control of your digital space</p>
            </div>
          </div>
        </div>
      </section>

      <Footer1 />
    </div>
  );
}
