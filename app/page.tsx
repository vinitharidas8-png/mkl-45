"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Terminal, Layers, ShieldCheck, Sparkles, Radio, Cpu, Activity, RefreshCw } from "lucide-react";
import { Button } from "@/registry/mkl45/ui/button";
import { ChassisPlate } from "@/registry/mkl45/ui/chassis-plate";
import { LCDScreen } from "@/registry/mkl45/ui/lcd-screen";
import { Kbd } from "@/registry/mkl45/ui/kbd";
import { Switch } from "@/registry/mkl45/ui/switch";
import { Slider } from "@/registry/mkl45/ui/slider";
import { RotaryKnob } from "@/registry/mkl45/ui/rotary-knob";
import { Badge } from "@/registry/mkl45/ui/badge";
import { Progress } from "@/registry/mkl45/ui/progress";
import { HoldToConfirm } from "@/registry/mkl45/ui/hold-to-confirm";
import { SiteHeader } from "@/app/components/site-header";
import { SearchCommand } from "@/app/components/search-command";
import { CopyButton } from "@/app/components/copy-button";

export default function LandingPage() {
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [activeMode, setActiveMode] = React.useState("INTERCEPT");
  const [txPower, setTxPower] = React.useState(true);
  const [squelch, setSquelch] = React.useState(false);
  const [rfGain, setRfGain] = React.useState(65);
  const [rotaryVal, setRotaryVal] = React.useState(42);
  const [purgeTriggered, setPurgeTriggered] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--mkl-bg)]">
      <SiteHeader onOpenSearch={() => setSearchOpen(true)} />

      {/* Hero Transceiver Rig Section */}
      <section className="relative overflow-hidden py-12 sm:py-20 border-b-4 border-[var(--mkl-surface-high)]">
        {/* Background Hazard Stripe Accent */}
        <div className="absolute top-0 left-0 right-0 h-2 hazard-stripes opacity-90 shadow-md" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          {/* Unit Callout Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--mkl-steel-2)]/30 pb-4">
            <div className="flex items-center gap-2.5 font-mono text-xs text-[var(--mkl-surface)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--mkl-acc)] shadow-[0_0_8px_var(--mkl-acc)] animate-pulse" />
              <span className="font-black uppercase tracking-widest">
                UNIT 73 - COMM SEC // DECK SERIAL #44-8902-B
              </span>
            </div>
            <div className="flex items-center gap-3 font-mono text-xs">
              <span className="px-2.5 py-0.5 rounded bg-[var(--mkl-surface)] text-[var(--mkl-amb)] font-bold shadow-[inset_0_1px_3px_#000]">
                MIL-STD-810H // HARDWARE REV: 8.4
              </span>
              <span className="text-[var(--mkl-surface)] font-bold">// SECURE BUS</span>
            </div>
          </div>

          {/* Main Hero Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[var(--mkl-surface)] text-[var(--mkl-amb)] font-mono text-xs border border-[var(--mkl-amb)]/40 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[var(--mkl-amb)] shadow-[0_0_8px_var(--mkl-amb)]" />
                <span className="tracking-wide">SHADCN/UI ARCHITECTURE • ZERO RUNTIME WRAPPERS</span>
              </div>

              <h1 className="font-sans text-5xl sm:text-7xl font-black uppercase tracking-tight text-[var(--mkl-surface)] leading-none">
                HARDENED REACT <br />
                <span className="text-[var(--mkl-acc)]">KEYCAPS &amp; CHASSIS</span>
              </h1>

              <p className="font-mono text-base text-[var(--mkl-surface)] max-w-xl leading-relaxed font-medium">
                MKL-45 is an open-source React component library built like shadcn/ui.
                Engineered with cold-rolled steel armor plates, 3D stadium slot switches,
                amber phosphor CRT displays, hazard warning striping, and mechanical switchgear
                that actuates with genuine 80ms down-stroke travel.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <Link href="/docs">
                  <Button variant="primary" size="lg">
                    INITIALIZE SYSTEM <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/components">
                  <Button variant="default" size="lg">
                    BROWSE ALL HARDWARE
                  </Button>
                </Link>
              </div>

              {/* Quick CLI Installation Snippet */}
              <div className="pt-2 max-w-lg">
                <div className="flex items-center justify-between px-3.5 py-2.5 rounded bg-[#0e0d0c] border border-black/90 shadow-[inset_0_3px_6px_rgba(0,0,0,0.95),0_1px_1px_rgba(255,255,255,0.15)] font-mono text-xs">
                  <div className="flex items-center gap-2 text-[var(--mkl-amb)] overflow-hidden">
                    <Terminal className="w-4 h-4 shrink-0 text-[var(--mkl-acc)]" />
                    <span className="truncate select-all">npx shadcn@latest add http://mkl45.dev/r/button.json</span>
                  </div>
                  <CopyButton value="npx shadcn@latest add http://mkl45.dev/r/button.json" />
                </div>
              </div>
            </div>

            {/* Right Interactive Chassis Transceiver Bench */}
            <div className="lg:col-span-5">
              <ChassisPlate
                title="FIELD TRANSCEIVER BENCH"
                serial="MOD-84-COMM"
                spec="MIL-STD-810H"
                hasScrews
                className="space-y-5"
              >
                {/* LCD Display Readout */}
                <LCDScreen className="space-y-1.5 p-3.5">
                  <div className="flex items-center justify-between text-[11px] opacity-80">
                    <span>FREQ: 142.850 MHZ // LOCK</span>
                    <span>RSSI: -42.8 dBm</span>
                  </div>
                  <div className="text-xl font-bold tracking-wider lcd-glow">
                    {purgeTriggered ? "EMERGENCY PURGE EXECUTED" : `STATUS: ACTIVE // [MODE: ${activeMode}]`}
                  </div>
                  <div className="flex items-center justify-between text-[10px] opacity-70">
                    <span>PWR BUS: {txPower ? "28.4V DC [ACTIVE]" : "ISOLATED [STANDBY]"}</span>
                    <span>SQUELCH: {squelch ? "OVERRIDE [ENGAGED]" : "AUTO-FILTER"}</span>
                  </div>
                </LCDScreen>

                {/* Exact 3D Milled Stadium Switches from Reference */}
                <div className="p-3.5 rounded bg-[#0e0d0c] border border-black/90 shadow-[inset_0_3px_7px_rgba(0,0,0,0.95),0_1px_1px_rgba(255,255,255,0.12)] space-y-3">
                  <span className="font-mono text-[10px] font-bold uppercase text-[var(--mkl-amb)] tracking-wider">
                    // HIGH-VOLTAGE ACTUATOR BAY (CLICK SWITCHGEAR)
                  </span>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    {/* Switch 1: Main Transmitter Power (Red Glow) */}
                    <Switch
                      checked={txPower}
                      onCheckedChange={setTxPower}
                      glowColor="red"
                      label="MAIN TRANSMITTER POWER"
                      sublabel="28V DC BUS ACTIVE"
                    />

                    {/* Switch 2: Emergency Squelch Override */}
                    <Switch
                      checked={squelch}
                      onCheckedChange={setSquelch}
                      glowColor="red"
                      label="EMERGENCY SQUELCH"
                      sublabel="DISPERSES INTERFERENCE"
                    />
                  </div>
                </div>

                {/* Interactive Tactical Mode Gang Keybank */}
                <div className="space-y-2">
                  <span className="font-mono text-[10px] uppercase text-[var(--mkl-steel-1)]">
                    // TACTICAL MODE GANG (AUTHENTIC 80MS TRAVEL)
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {["STANDBY", "MONITOR", "INTERCEPT", "JAMMING"].map((mode) => (
                      <Button
                        key={mode}
                        size="sm"
                        variant={activeMode === mode ? "primary" : "secondary"}
                        isLatched={activeMode === mode}
                        hasLed
                        isLedActive={activeMode === mode}
                        ledColor={mode === "JAMMING" ? "red" : "amber"}
                        onClick={() => {
                          setActiveMode(mode);
                          setPurgeTriggered(false);
                        }}
                      >
                        {mode}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* RF Fader & Attenuator Controls */}
                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-[var(--mkl-surface-mid)]">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] uppercase text-[var(--mkl-steel-1)]">
                      RF OUTPUT: {rfGain}W
                    </span>
                    <Slider
                      value={[rfGain]}
                      onValueChange={(val) => setRfGain(val[0])}
                      max={100}
                      step={5}
                      ticks={false}
                    />
                  </div>
                  <div className="flex items-center justify-end">
                    <RotaryKnob
                      value={rotaryVal}
                      onChange={setRotaryVal}
                      label="ATTENUATOR"
                      serial="AT-01"
                    />
                  </div>
                </div>

                {/* Emergency Purge Row */}
                <div className="flex items-center justify-between pt-2 border-t border-[var(--mkl-surface-mid)]">
                  <HoldToConfirm
                    label="HOLD TO ZERO-PURGE"
                    holdDurationMs={1500}
                    onConfirm={() => setPurgeTriggered(true)}
                  />
                  <div className="flex items-center gap-2 font-mono text-xs text-[var(--mkl-steel-1)]">
                    <span>HUD RECON:</span>
                    <Kbd>CMD</Kbd> + <Kbd>K</Kbd>
                  </div>
                </div>
              </ChassisPlate>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Module Tactical Hardware Showcase (Stitch Design Studio Rig) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="font-mono text-xs font-black uppercase text-[var(--mkl-acc)] tracking-widest">
            // HARDWARE RECON SPECIFICATION
          </span>
          <h2 className="font-sans text-3xl sm:text-5xl font-black uppercase tracking-wide text-[var(--mkl-surface)]">
            STITCH-INSPIRED PHYSICAL 3D RIG
          </h2>
          <p className="font-mono text-xs text-[var(--mkl-surface)]">
            Explore the hardened physical components with authentic specular rims, milled stadium cavities,
            tactile travel physics, and CRT vector displays.
          </p>
        </div>

        {/* 6-Module Command Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Module 01: Mechanical Keycaps */}
          <ChassisPlate title="01 // MECHANICAL KEYCAPS" serial="PBT-ENGRAVED" hasScrews className="space-y-4">
            <p className="font-mono text-xs text-[var(--mkl-steel-1)]">
              Tactile high-profile actuation with dual-shot casting, 3D bottom drop shadow, and chamfered travel edges.
            </p>
            <div className="p-4 rounded bg-[#0e0d0c] border border-black/90 shadow-[inset_0_3px_6px_rgba(0,0,0,0.95)] flex flex-wrap gap-2.5 items-center justify-center">
              <Button size="sm" variant="default">PBT KEY</Button>
              <Button size="sm" variant="secondary" hasLed isLedActive ledColor="amber">TACTICAL</Button>
              <Button size="sm" variant="primary">CERAKOTE</Button>
              <Button size="sm" variant="destructive">PURGE</Button>
            </div>
            <div className="flex justify-between font-mono text-[10px] text-[var(--mkl-steel-2)] pt-2 border-t border-[var(--mkl-surface-mid)]">
              <span>DOWN-STROKE: 80MS</span>
              <Link href="/docs/components/button" className="text-[var(--mkl-amb)] hover:underline">
                SPECS →
              </Link>
            </div>
          </ChassisPlate>

          {/* Module 02: 3D Stadium Switches */}
          <ChassisPlate title="02 // TRANSDUCER SWITCHES" serial="MIL-SW-84" hasScrews className="space-y-4">
            <p className="font-mono text-xs text-[var(--mkl-steel-1)]">
              Recessed stadium slot cavities with tactile cylindrical knobs and radiant neon phosphor underglow bloom.
            </p>
            <div className="p-4 rounded bg-[#0e0d0c] border border-black/90 shadow-[inset_0_3px_6px_rgba(0,0,0,0.95)] space-y-3">
              <Switch defaultChecked glowColor="red" label="MAIN CARRIER POWER" sublabel="28V DC BUS ACTIVE" />
              <Switch defaultChecked glowColor="amber" label="AUXILIARY TELEMETRY" sublabel="HIGH-GAIN SENSOR LINK" />
            </div>
            <div className="flex justify-between font-mono text-[10px] text-[var(--mkl-steel-2)] pt-2 border-t border-[var(--mkl-surface-mid)]">
              <span>LENS BLOOM: 24PX</span>
              <Link href="/docs/components/switch" className="text-[var(--mkl-amb)] hover:underline">
                SPECS →
              </Link>
            </div>
          </ChassisPlate>

          {/* Module 03: Knurled Attenuators & Faders */}
          <ChassisPlate title="03 // ANALOG ATTENUATORS" serial="POT-RACK-01" hasScrews className="space-y-4">
            <p className="font-mono text-xs text-[var(--mkl-steel-1)]">
              Solid aluminum dial with diamond knurling and milled 60mm linear fader slider channel.
            </p>
            <div className="p-4 rounded bg-[#0e0d0c] border border-black/90 shadow-[inset_0_3px_6px_rgba(0,0,0,0.95)] space-y-4">
              <Slider defaultValue={[65]} ticks />
              <div className="flex justify-center">
                <RotaryKnob value={55} label="MIC SENSITIVITY" serial="VOX-02" />
              </div>
            </div>
            <div className="flex justify-between font-mono text-[10px] text-[var(--mkl-steel-2)] pt-2 border-t border-[var(--mkl-surface-mid)]">
              <span>SWEEP: 270 DEGREES</span>
              <Link href="/docs/components/rotary-knob" className="text-[var(--mkl-amb)] hover:underline">
                SPECS →
              </Link>
            </div>
          </ChassisPlate>

          {/* Module 04: Phosphor LCD Screens */}
          <ChassisPlate title="04 // PHOSPHOR CRT DISPLAYS" serial="CRT-VECT-04" hasScrews className="space-y-4">
            <p className="font-mono text-xs text-[var(--mkl-steel-1)]">
              High-contrast raster scanline CRT displays with inner lens reflections and cathode glow.
            </p>
            <LCDScreen className="space-y-1 p-3.5">
              <div className="flex justify-between text-[10px] opacity-75">
                <span>BEACON: LOCKED</span>
                <span>FFT: 1024 BINS</span>
              </div>
              <div className="text-base font-bold tracking-widest lcd-glow">
                SIGNAL INTERCEPT READY
              </div>
              <div className="text-[10px] opacity-75">
                CARRIER: 142.850 MHz // QAM-64
              </div>
            </LCDScreen>
            <div className="flex justify-between font-mono text-[10px] text-[var(--mkl-steel-2)] pt-2 border-t border-[var(--mkl-surface-mid)]">
              <span>SCANLINES: 2PX CSS</span>
              <Link href="/docs/components/lcd-screen" className="text-[var(--mkl-amb)] hover:underline">
                SPECS →
              </Link>
            </div>
          </ChassisPlate>

          {/* Module 05: Armor Chassis & Bolted Plates */}
          <ChassisPlate title="05 // COLD-ROLLED ARMOR PLATES" serial="CHASSIS-MOD" hasScrews className="space-y-4">
            <p className="font-mono text-xs text-[var(--mkl-steel-1)]">
              Heavy structural enclosure plates with 45° corner chamfers and socket machine screws.
            </p>
            <div className="p-4 rounded bg-[var(--mkl-surface-high)] border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.6)] space-y-2">
              <div className="flex items-center justify-between font-mono text-xs text-white">
                <span>ALLOY COMPOSITION:</span>
                <span className="text-[var(--mkl-amb)] font-bold">STEEL 4140</span>
              </div>
              <div className="flex items-center justify-between font-mono text-xs text-white">
                <span>SURFACE RELIEF:</span>
                <span className="text-[var(--mkl-emerald)] font-bold">MILLED 3D</span>
              </div>
            </div>
            <div className="flex justify-between font-mono text-[10px] text-[var(--mkl-steel-2)] pt-2 border-t border-[var(--mkl-surface-mid)]">
              <span>SCREW SIZES: 3MM HEX</span>
              <Link href="/docs/components/chassis-plate" className="text-[var(--mkl-amb)] hover:underline">
                SPECS →
              </Link>
            </div>
          </ChassisPlate>

          {/* Module 06: Stamped Badges & Chevron Telemetry */}
          <ChassisPlate title="06 // STATUS ANNUNCIATORS" serial="ANNUNC-BAY" hasScrews className="space-y-4">
            <p className="font-mono text-xs text-[var(--mkl-steel-1)]">
              Stamped metal condition badges and 12-segment illuminated amber chevron progress meters.
            </p>
            <div className="p-4 rounded bg-[#0e0d0c] border border-black/90 shadow-[inset_0_3px_6px_rgba(0,0,0,0.95)] space-y-3">
              <div className="flex flex-wrap gap-2">
                <Badge variant="caution">CAUTION</Badge>
                <Badge variant="secure">SECURE</Badge>
                <Badge variant="danger">OFFLINE</Badge>
              </div>
              <Progress value={75} />
            </div>
            <div className="flex justify-between font-mono text-[10px] text-[var(--mkl-steel-2)] pt-2 border-t border-[var(--mkl-surface-mid)]">
              <span>SEGMENTS: 12-BAR</span>
              <Link href="/docs/components/progress" className="text-[var(--mkl-amb)] hover:underline">
                SPECS →
              </Link>
            </div>
          </ChassisPlate>
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
              CSS-Only 3D Texture Engine
            </h3>
            <p className="font-mono text-xs text-[var(--mkl-steel-1)] leading-relaxed">
              Zero static screenshot assets in the component payload. Every stadium bevel, chamfer,
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
        <div className="w-full h-1 hazard-stripes mb-6" />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--mkl-amb)] shadow-[0_0_8px_var(--mkl-amb)]" />
            <span>MKL-45 INTERCEPTOR UI // MIL-SPEC SYSTEM 8.4</span>
          </div>
          <div className="flex items-center gap-4 text-[var(--mkl-steel-2)]">
            <span>TAC-GRID: SUB-CHASSIS D9</span>
            <span>•</span>
            <span>BUILT FOR MISSION-CRITICAL FRONTENDS</span>
          </div>
        </div>
      </footer>

      <SearchCommand open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  );
}