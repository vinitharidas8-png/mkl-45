"use client";

import Link from "next/link";
import { ArrowRight, Terminal, Layers, ShieldCheck, Download, Sparkles } from "lucide-react";
import { Button } from "@/registry/mkl45/ui/button";
import { ChassisPlate } from "@/registry/mkl45/ui/chassis-plate";
import { LCDScreen } from "@/registry/mkl45/ui/lcd-screen";
import { Kbd } from "@/registry/mkl45/ui/kbd";
import { SiteHeader } from "@/app/components/site-header";
import { SearchCommand } from "@/app/components/search-command";
import * as React from "react";

export default function LandingPage() {
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [activeMode, setActiveMode] = React.useState("INTERCEPT");

  return (
    <div className="min-h-screen flex flex-col bg-[var(--mkl-bg)]">
      <SiteHeader onOpenSearch={() => setSearchOpen(true)} />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24 border-b-4 border-[var(--mkl-surface-high)]">
        {/* Background Hazard Stripe Accent */}
        <div className="absolute top-0 left-0 right-0 h-2 hazard-stripes opacity-80" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          {/* Unit Callout Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--mkl-steel-2)]/40 pb-4">
            <div className="flex items-center gap-2 font-mono text-xs text-[var(--mkl-surface)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--mkl-acc)] animate-ping" />
              <span className="font-black uppercase tracking-widest">
                UNIT 73 // COMM SEC // SUB-STATION ALPHA
              </span>
            </div>
            <div className="flex items-center gap-3 font-mono text-xs">
              <span className="px-2 py-0.5 rounded bg-[var(--mkl-surface)] text-[var(--mkl-amb)] font-bold shadow-[inset_0_1px_2px_#000]">
                SERIAL: MK45-HERO-001
              </span>
              <span className="text-[var(--mkl-surface)] font-bold">// REV 8.4</span>
            </div>
          </div>

          {/* Main Hero Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[var(--mkl-surface)] text-[var(--mkl-amb)] font-mono text-xs border border-[var(--mkl-amb)]/30 shadow-md">
                <span className="w-2 h-2 rounded-full bg-[var(--mkl-amb)] shadow-[0_0_8px_var(--mkl-amb)]" />
                <span>OPEN SOURCE INDUSTRIAL FIELD-RADIO COMPONENT SYSTEM</span>
              </div>

              <h1 className="font-sans text-5xl sm:text-7xl font-black uppercase tracking-tight text-[var(--mkl-surface)] leading-none">
                HARDENED REACT <br />
                <span className="text-[var(--mkl-acc)]">KEYCAPS &amp; CHASSIS</span>
              </h1>

              <p className="font-mono text-base text-[var(--mkl-surface)] max-w-xl leading-relaxed font-medium">
                MKL-45 is an open-source React component library built like shadcn/ui.
                Crafted with cut-corner cold-rolled steel plates, amber phosphor CRT screens,
                hazard striping, and mechanical switchgear that depresses with authentic 80ms down-stroke travel.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="/docs">
                  <Button variant="primary" size="lg">
                    INITIALIZE SYSTEM <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/docs/components/button">
                  <Button variant="default" size="lg">
                    VIEW SPECIFICATIONS
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Interactive Chassis Showcase */}
            <div className="lg:col-span-5">
              <ChassisPlate
                title="FIELD TRANSCEIVER BENCH"
                serial="MOD-84"
                spec="MIL-STD-810H"
                chamfer="default"
                className="space-y-6"
              >
                {/* LCD Display */}
                <LCDScreen className="space-y-1">
                  <div className="flex items-center justify-between text-[11px] opacity-80">
                    <span>FREQ: 142.850 MHZ</span>
                    <span>BEACON: LOCKED</span>
                  </div>
                  <div className="text-lg font-bold tracking-wider">
                    STATUS: ACTIVE // READY TO TRANSMIT
                  </div>
                </LCDScreen>

                {/* Interactive Keybank */}
                <div className="space-y-2">
                  <span className="font-mono text-[10px] uppercase text-[var(--mkl-steel-1)]">
                    // TACTICAL MODE GANG (CLICK TO ACTUATE)
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {["STANDBY", "MONITOR", "INTERCEPT", "JAMMING"].map((mode) => (
                      <Button
                        key={mode}
                        variant={activeMode === mode ? "primary" : "secondary"}
                        isLatched={activeMode === mode}
                        hasLed
                        isLedActive={activeMode === mode}
                        ledColor="amber"
                        onClick={() => setActiveMode(mode)}
                      >
                        {mode}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Emergency Purge Row */}
                <div className="flex items-center justify-between pt-2 border-t border-[var(--mkl-surface-mid)]">
                  <Button variant="destructive" size="sm">
                    ZERO-PURGE
                  </Button>
                  <div className="flex items-center gap-2 font-mono text-xs text-[var(--mkl-steel-1)]">
                    <span>HOTKEY:</span>
                    <Kbd>CMD</Kbd> + <Kbd>K</Kbd>
                  </div>
                </div>
              </ChassisPlate>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Matrix */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="font-mono text-xs font-black uppercase text-[var(--mkl-acc)] tracking-widest">
            // METROLOGY &amp; SPECIFICATIONS
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-black uppercase tracking-wide text-[var(--mkl-surface)]">
            WHY MKL-45 IS DIFFERENT
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ChassisPlate hasScrews className="p-6 space-y-3">
            <div className="w-10 h-10 rounded bg-[var(--mkl-surface-low)] flex items-center justify-center text-[var(--mkl-acc)] border border-[var(--mkl-surface-high)] shadow-[0_2px_4px_#000]">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-sans text-xl font-black uppercase text-white tracking-wide">
              shadcn / Copy-In Model
            </h3>
            <p className="font-mono text-xs text-[var(--mkl-steel-1)] leading-relaxed">
              No runtime wrappers or closed npm packages. Components are copied directly into
              your codebase so you own every line of code, CSS variable, and variant definition.
            </p>
          </ChassisPlate>

          <ChassisPlate hasScrews className="p-6 space-y-3">
            <div className="w-10 h-10 rounded bg-[var(--mkl-surface-low)] flex items-center justify-center text-[var(--mkl-amb)] border border-[var(--mkl-surface-high)] shadow-[0_2px_4px_#000]">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-sans text-xl font-black uppercase text-white tracking-wide">
              CSS-Only Texture Engine
            </h3>
            <p className="font-mono text-xs text-[var(--mkl-steel-1)] leading-relaxed">
              Zero static screenshot assets in the component payload. Every bevel, chamfer,
              hazard stripe, and LCD scanline is synthesized using pure modern CSS and SVG shaders.
            </p>
          </ChassisPlate>

          <ChassisPlate hasScrews className="p-6 space-y-3">
            <div className="w-10 h-10 rounded bg-[var(--mkl-surface-low)] flex items-center justify-center text-[var(--mkl-emerald)] border border-[var(--mkl-surface-high)] shadow-[0_2px_4px_#000]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-sans text-xl font-black uppercase text-white tracking-wide">
              Battle-Tested A11y
            </h3>
            <p className="font-mono text-xs text-[var(--mkl-steel-1)] leading-relaxed">
              Every interactive element is powered by Radix UI primitives. Full keyboard
              navigation, focus trapping, high contrast ratios (9.5:1 on amber CRT), and full ARIA semantics.
            </p>
          </ChassisPlate>
        </div>
      </section>

      {/* Footer Plate */}
      <footer className="mt-auto border-t-2 border-[var(--mkl-surface-high)] bg-[var(--mkl-surface-low)] py-8 font-mono text-xs text-[var(--mkl-steel-1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--mkl-amb)]" />
            <span>MKL-45 INTERCEPTOR UI // MIL-SPEC SYSTEM 8.4</span>
          </div>
          <span>BUILT FOR MISSION-CRITICAL FRONTENDS</span>
        </div>
      </footer>

      <SearchCommand open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  );
}
