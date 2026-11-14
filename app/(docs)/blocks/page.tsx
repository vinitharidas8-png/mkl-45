"use client";

import * as React from "react";
import { SiteHeader } from "@/app/components/site-header";
import { SearchCommand } from "@/app/components/search-command";
import { ChassisPlate } from "@/registry/mkl45/ui/chassis-plate";
import { Button } from "@/registry/mkl45/ui/button";
import { Input } from "@/registry/mkl45/ui/input";
import { Label } from "@/registry/mkl45/ui/label";
import { Checkbox } from "@/registry/mkl45/ui/checkbox";
import { Switch } from "@/registry/mkl45/ui/switch";
import { LCDScreen } from "@/registry/mkl45/ui/lcd-screen";
import { Chart } from "@/registry/mkl45/ui/chart";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/registry/mkl45/ui/table";
import { Badge } from "@/registry/mkl45/ui/badge";
import { CopyButton } from "@/app/components/copy-button";

export default function BlocksPage() {
  const [searchOpen, setSearchOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--mkl-bg)]">
      <SiteHeader onOpenSearch={() => setSearchOpen(true)} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-10 space-y-12">
        <ChassisPlate title="COMPOSITE BLOCKS REPOSITORY" serial="BLOCKS-COLLECTION" spec="FULL PRE-WIRED ASSEMBLIES">
          <div className="space-y-3">
            <h1 className="font-sans text-3xl font-black uppercase text-white tracking-wide">
              FULL HARDWARE COMPOSITIONS
            </h1>
            <p className="font-mono text-xs text-[var(--mkl-steel-1)] max-w-2xl leading-relaxed">
              Complete pre-assembled functional modules: military authentication consoles, operational telemetry dashboards, and transmitter settings bays ready to paste directly into your mission frontends.
            </p>
          </div>
        </ChassisPlate>

        {/* Block 1: Field Authentication Gate */}
        <div className="space-y-3">
          <div className="flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--mkl-amb)] shadow-[0_0_6px_var(--mkl-amb)]" />
              <span className="font-bold text-[var(--mkl-surface)] uppercase">
                BLOCK 01: SEC-COMM FIELD LOGIN TERMINAL
              </span>
            </div>
            <CopyButton value="npx shadcn@latest add https://mkl-45.vercel.app/r/block-login.json" />
          </div>

          <div className="p-8 rounded-lg bg-[var(--mkl-surface-lowest)] border-2 border-[var(--mkl-surface-high)] flex items-center justify-center">
            <ChassisPlate
              title="SECURITY CLEARANCE DETECTOR"
              serial="LVL-4-AUTH"
              spec="CRYPTO-STATION"
              className="w-full max-w-md space-y-4"
            >
              <LCDScreen className="space-y-1">
                <div className="text-[10px] opacity-75">STATION: INT-ALPHA-9 // SEC-CLEARANCE</div>
                <div className="text-sm font-bold">AWAITING CREDENTIAL HANDSHAKE...</div>
              </LCDScreen>

              <div className="space-y-3">
                <div className="space-y-1">
                  <Label serial="OP-ID">OPERATOR CALLSIGN</Label>
                  <Input defaultValue="VANGUARD-7" />
                </div>
                <div className="space-y-1">
                  <Label serial="SEED-44">CIPHER ACCESS KEY</Label>
                  <Input type="password" defaultValue="••••••••••••••••" />
                </div>
                <div className="flex items-center justify-between pt-1">
                  <Checkbox label="PERSIST BUS SESSION" sublabel="ENCRYPTED ON-CHIP" defaultChecked />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-[var(--mkl-surface-mid)]">
                <Button variant="secondary" className="w-1/2">ABORT</Button>
                <Button variant="primary" className="w-1/2">AUTHENTICATE</Button>
              </div>
            </ChassisPlate>
          </div>
        </div>

        {/* Block 2: Operational Telemetry Command Dashboard */}
        <div className="space-y-3">
          <div className="flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--mkl-amb)] shadow-[0_0_6px_var(--mkl-amb)]" />
              <span className="font-bold text-[var(--mkl-surface)] uppercase">
                BLOCK 02: HARDENED COMMS DASHBOARD
              </span>
            </div>
            <CopyButton value="npx shadcn@latest add https://mkl-45.vercel.app/r/block-dashboard.json" />
          </div>

          <div className="p-6 rounded-lg bg-[var(--mkl-surface-lowest)] border-2 border-[var(--mkl-surface-high)] space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ChassisPlate hasScrews={false} className="p-4 space-y-2">
                <span className="text-[10px] text-[var(--mkl-steel-1)] font-mono">TRANSMITTER CARRIER</span>
                <div className="text-2xl font-bold font-mono text-[var(--mkl-amb)] lcd-glow">142.850 MHz</div>
                <div className="text-[10px] text-[#00E676] font-mono">PLL FREQUENCY LOCKED</div>
              </ChassisPlate>

              <ChassisPlate hasScrews={false} className="p-4 space-y-2">
                <span className="text-[10px] text-[var(--mkl-steel-1)] font-mono">PEAK SIGNAL GAIN</span>
                <div className="text-2xl font-bold font-mono text-white">-68.4 dBm</div>
                <div className="text-[10px] text-[var(--mkl-steel-1)] font-mono">S/N RATIO: 34.2 dB</div>
              </ChassisPlate>

              <ChassisPlate hasScrews={false} className="p-4 space-y-2">
                <span className="text-[10px] text-[var(--mkl-steel-1)] font-mono">CHASSIS OPERATING TEMP</span>
                <div className="text-2xl font-bold font-mono text-[var(--mkl-acc)]">48.2°C</div>
                <div className="text-[10px] text-[var(--mkl-steel-1)] font-mono">FAN 2: 3200 RPM</div>
              </ChassisPlate>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Chart type="oscilloscope" title="RF INCOMING ANALOG WAVEFORM" color="emerald" />
              <Chart type="bar" title="16-BAND AUDIO SPECTRUM ATTENUATION" color="amber" />
            </div>
          </div>
        </div>
      </main>

      <SearchCommand open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  );
}
