"use client";

import * as React from "react";
import { SiteHeader } from "@/app/components/site-header";
import { SearchCommand } from "@/app/components/search-command";
import { ChassisPlate } from "@/registry/mkl45/ui/chassis-plate";
import { Button } from "@/registry/mkl45/ui/button";
import { LCDScreen } from "@/registry/mkl45/ui/lcd-screen";
import { Slider } from "@/registry/mkl45/ui/slider";
import { CopyButton } from "@/app/components/copy-button";

export default function ThemesPage() {
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [accentColor, setAccentColor] = React.useState("#D9712F"); // Default Cerakote Rust Orange
  const [hazardColor, setHazardColor] = React.useState("#F2B01E"); // Default Hazard Amber

  const presets = [
    { name: "CERAKOTE RUST (DEFAULT)", acc: "#D9712F", amb: "#F2B01E" },
    { name: "TACTICAL OLIVE ENAMEL", acc: "#5D6A42", amb: "#D3B737" },
    { name: "MIDNIGHT INTERCEPT BLUE", acc: "#0288D1", amb: "#00E5FF" },
    { name: "DESERT CAMO TAN", acc: "#A67C52", amb: "#E0B66E" },
    { name: "EMERGENCY THERMITE RED", acc: "#D32F2F", amb: "#FF5252" },
  ];

  const applyPreset = (acc: string, amb: string) => {
    setAccentColor(acc);
    setHazardColor(amb);
    if (typeof document !== "undefined") {
      document.documentElement.style.setProperty("--mkl-acc", acc);
      document.documentElement.style.setProperty("--mkl-amb", amb);
    }
  };

  const cssExport = `/* MKL-45 CUSTOM HARDWARE COLORWAY */
:root {
  --mkl-acc: ${accentColor};
  --mkl-amb: ${hazardColor};
}`;

  return (
    <div className="min-h-screen flex flex-col bg-[var(--mkl-bg)]">
      <SiteHeader onOpenSearch={() => setSearchOpen(true)} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-10 space-y-8">
        <ChassisPlate title="TACTICAL THEME RESKIN BENCH" serial="THEME-CAL-09" spec="COLORWAY METROLOGY">
          <div className="space-y-3">
            <h1 className="font-sans text-3xl font-black uppercase text-white tracking-wide">
              HARDWARE ENAMEL &amp; SPECTRUM CUSTOMIZER
            </h1>
            <p className="font-mono text-xs text-[var(--mkl-steel-1)] max-w-2xl leading-relaxed">
              Dynamically reskin the entire component library in real time. Choose from standard issue military colorways or dial custom RGB enamel pigments and export your customized CSS token variables.
            </p>
          </div>
        </ChassisPlate>

        {/* Preset Selector Grid */}
        <div className="space-y-3">
          <span className="font-mono text-xs font-black uppercase tracking-wider text-[var(--mkl-amb)]">
            // STANDARD MIL-SPEC COLORWAY PRESETS
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {presets.map((p) => (
              <button
                key={p.name}
                onClick={() => applyPreset(p.acc, p.amb)}
                className="p-3.5 rounded bg-[var(--mkl-surface)] border border-[var(--mkl-surface-high)] text-left hover:border-[var(--mkl-amb)] transition-colors flex items-center justify-between"
              >
                <div className="space-y-1">
                  <div className="font-mono text-xs font-bold text-white uppercase">
                    {p.name}
                  </div>
                  <div className="font-mono text-[10px] text-[var(--mkl-steel-1)]">
                    ACC: {p.acc} • AMB: {p.amb}
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full border border-black/80" style={{ backgroundColor: p.acc }} />
                  <span className="w-4 h-4 rounded-full border border-black/80" style={{ backgroundColor: p.amb }} />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Live Hardware Verification Preview */}
        <ChassisPlate title="LIVE ENAMEL RESPONSIVENESS DEMO" serial="BENCH-LIVE">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary">PRIMARY COMMAND KEY</Button>
              <Button variant="secondary" hasLed isLedActive ledColor="amber">
                BI-STABLE STATUS LED
              </Button>
              <Button variant="default">PBT BONE DEFAULT</Button>
            </div>

            <LCDScreen className="space-y-1">
              <div className="text-[11px] opacity-80">ACTIVE COLOR MATRIX:</div>
              <div className="text-sm font-bold tracking-wider">
                --mkl-acc: {accentColor} // --mkl-amb: {hazardColor}
              </div>
            </LCDScreen>
          </div>
        </ChassisPlate>

        {/* CSS Token Export Block */}
        <ChassisPlate title="COMPILED CSS VARIABLE EXPORT" serial="OUTPUT-SPEC">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[var(--mkl-steel-1)]">
                Paste these overrides into your <code className="text-[var(--mkl-amb)]">globals.css</code> or theme file:
              </span>
              <CopyButton value={cssExport} />
            </div>
            <pre className="p-4 rounded bg-[var(--mkl-surface-low)] border border-[var(--mkl-surface-mid)] font-mono text-xs text-[var(--mkl-amb)] overflow-x-auto">
              {cssExport}
            </pre>
          </div>
        </ChassisPlate>
      </main>

      <SearchCommand open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  );
}
