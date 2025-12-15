"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";
import { Check, Circle, Sparkles, Star, Wallet, Lock, Shield, Zap, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

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
  }
];

const WALLETS = [
  { name: "MetaMask", icon: "🦊", popular: true },
  { name: "Trust Wallet", icon: "🔷", popular: true },
  { name: "Phantom", icon: "👻", popular: true },
  { name: "Coinbase Wallet", icon: "🔵", popular: false },
  { name: "WalletConnect", icon: "🔗", popular: false }
];

export function Pricing6() {
  const [selectedSector, setSelectedSector] = useState(null);
  const [step, setStep] = useState(1); // 1: Select Sector, 2: Connect Wallet, 3: Confirm
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);

  const handleSectorSelect = (sector) => {
    setSelectedSector(sector);
    setStep(2);
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
      setSelectedSector(null);
      setSelectedWallet(null);
    } else if (step === 3) {
      setStep(2);
      setSelectedWallet(null);
    }
  };

  return (
    <section className="bg-gradient-to-b from-white via-neutral-lightest to-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-5xl">
        {/* Progress Steps */}
        {step > 1 && (
          <div className="mb-12 border-b border-neutral-dark/20 bg-brand-primary/5 rounded-lg p-6">
            <div className="flex items-center justify-center gap-4">
              <div className={`flex items-center gap-2 ${step >= 1 ? 'text-neutral-darkest' : 'text-neutral-dark'}`}>
                <div className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 1 ? 'bg-neutral-darkest text-white' : 'bg-neutral-dark/20 text-neutral-dark'}`}>
                  1
                </div>
                <span className="hidden font-medium sm:inline">Select Sector</span>
              </div>
              <div className="h-px w-12 bg-neutral-dark/20" />
              <div className={`flex items-center gap-2 ${step >= 2 ? 'text-neutral-darkest' : 'text-neutral-dark'}`}>
                <div className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 2 ? 'bg-neutral-darkest text-white' : 'bg-neutral-dark/20 text-neutral-dark'}`}>
                  2
                </div>
                <span className="hidden font-medium sm:inline">Connect Wallet</span>
              </div>
              <div className="h-px w-12 bg-neutral-dark/20" />
              <div className={`flex items-center gap-2 ${step >= 3 ? 'text-neutral-darkest' : 'text-neutral-dark'}`}>
                <div className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 3 ? 'bg-neutral-darkest text-white' : 'bg-neutral-dark/20 text-neutral-dark'}`}>
                  3
                </div>
                <span className="hidden font-medium sm:inline">Confirm</span>
              </div>
            </div>
          </div>
        )}

        {/* Step 1: Sector Selection */}
        {step === 1 && (
          <>
            <div className="mx-auto mb-12 max-w-2xl text-center md:mb-18 lg:mb-20">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-primary/10 px-4 py-2 text-sm font-semibold text-brand-primary">
                <Sparkles className="h-4 w-4" />
                Transparent Pricing
              </div>
              <h1 className="mb-5 text-h1 font-bold md:mb-6">
                Choose Your Xpixel
              </h1>
              <p className="text-large text-neutral-dark">
                Each sector offers unique positioning and value on the Xpixel canvas.
                Select the space that matches your creative vision and budget.
              </p>
            </div>

            <Tabs defaultValue="sector0" className="w-full">
              {/* Enhanced Tab Navigation */}
              <TabsList className="mx-auto mb-12 grid w-full max-w-4xl grid-cols-2 gap-3 rounded-xl bg-white p-2 shadow-lg ring-1 ring-neutral-lighter md:grid-cols-4">
                {SECTORS.map((sector) => (
                  <TabsTrigger
                    key={sector.id}
                    value={`sector${sector.id}`}
                    className={`group relative flex flex-col items-center gap-2 rounded-lg px-4 py-4 text-sm font-semibold transition-all duration-200 data-[state=active]:bg-gradient-to-br data-[state=active]:from-${sector.color} data-[state=active]:to-${sector.color}/80 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=inactive]:bg-transparent data-[state=inactive]:hover:bg-neutral-lightest`}
                  >
                    <Circle className="h-5 w-5 transition-transform group-data-[state=active]:scale-110" />
                    <span className="text-xs font-bold">{sector.name}</span>
                    <span className="text-xs font-normal opacity-80">{sector.subtitle}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Sector Cards */}
              {SECTORS.map((sector) => (
                <TabsContent
                  key={sector.id}
                  value={`sector${sector.id}`}
                  className="container max-w-2xl data-[state=active]:animate-tabs"
                >
                  <Card className={`group relative overflow-hidden border-2 ${sector.borderColor} bg-white shadow-2xl transition-all duration-300 hover:shadow-${sector.color}/20`}>
                    {sector.id === 3 && (
                      <div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-3 py-1 text-xs font-bold text-amber-950 shadow-md">
                        MOST PRESTIGIOUS
                      </div>
                    )}

                    <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-${sector.color}/50 via-${sector.color} to-${sector.color}/50`} />

                    <div className="px-6 py-8 md:p-10">
                      <div className="mb-8 text-center">
                        <div className={`mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-${sector.color}/20 to-${sector.color}/10 px-5 py-2.5 ring-2 ring-${sector.color}/20`}>
                          <Circle className={`h-5 w-5 fill-${sector.color} ${sector.textColor}`} />
                          <span className={`text-sm font-bold ${sector.textColor}`}>{sector.name} - {sector.subtitle}</span>
                        </div>

                        <div className="my-6">
                          <div className="mb-3 flex items-baseline justify-center gap-2">
                            <span className="text-6xl font-black text-neutral-darkest">${sector.price}</span>
                            <span className="text-lg font-medium text-neutral-dark">USD</span>
                          </div>
                          <h2 className="text-2xl font-bold text-neutral-darkest">
                            {sector.id === 0 ? "Maximum Exposure" :
                             sector.id === 1 ? "Balanced Visibility" :
                             sector.id === 2 ? "Premium Position" :
                             "Elite Central Zone"}
                          </h2>
                        </div>

                        <p className="mx-auto max-w-lg text-base leading-relaxed text-neutral-dark">
                          {sector.description}
                        </p>
                      </div>

                      <div className="mb-8 space-y-4 rounded-xl bg-neutral-lightest/50 p-6">
                        {sector.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className={`flex-shrink-0 rounded-full ${sector.bgColor}/10 p-1.5`}>
                              <Check className={`h-4 w-4 ${sector.textColor}`} strokeWidth={3} />
                            </div>
                            <p className="text-sm font-medium text-neutral-darkest">{feature}</p>
                          </div>
                        ))}
                      </div>

                      <Button
                        onClick={() => handleSectorSelect(sector)}
                        variant="primary"
                        size="lg"
                        className={`w-full bg-gradient-to-r from-${sector.color} to-${sector.color}/90`}
                        iconRight={<Star className="h-5 w-5" />}
                      >
                        Select {sector.name}
                      </Button>
                    </div>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>

            {/* Trust Section */}
            <div className="mt-16 rounded-2xl bg-gradient-to-br from-neutral-lightest to-white p-8 shadow-lg ring-1 ring-neutral-lighter">
              <p className="text-center text-sm font-medium text-neutral-dark">
                ✨ All sectors come with <span className="font-bold text-neutral-darkest">permanent blockchain ownership</span>, instant visibility on the collaborative canvas, and a piece of digital art history.
              </p>
            </div>
          </>
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
                variant="ghost"
                onClick={handleBack}
                iconLeft={<ArrowLeft className="h-4 w-4" />}
              >
                Back to Sector Selection
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
                    variant="primary"
                    size="lg"
                    className="w-full"
                    onClick={handlePurchase}
                    iconRight={<Zap className="h-5 w-5" />}
                  >
                    Complete Purchase (Demo)
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={handleBack}
                    iconLeft={<ArrowLeft className="h-4 w-4" />}
                  >
                    Change Wallet
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}
