"use client";

import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/registry/mkl45/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/registry/mkl45/ui/tabs";
import { Popover, PopoverTrigger, PopoverContent } from "@/registry/mkl45/ui/popover";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
} from "@/registry/mkl45/ui/dropdown-menu";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/registry/mkl45/ui/tooltip";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/registry/mkl45/ui/breadcrumb";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/registry/mkl45/ui/accordion";
import { Button } from "@/registry/mkl45/ui/button";
import { ComponentPreview } from "@/app/components/component-preview";
import { InstallTabs } from "@/app/components/install-tabs";
import { ChassisPlate } from "@/registry/mkl45/ui/chassis-plate";

export default function OverlaysDocsPage() {
  const dialogSample = `import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function Demo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">LAUNCH ARMORED DIALOG</Button>
      </DialogTrigger>
      <DialogContent serial="FRAME-ID: 888-TX" hazardHeader>
        <DialogHeader>
          <DialogTitle>TARGET ACQUISITION LOCK</DialogTitle>
          <DialogDescription>
            Transceiver bay 02 will route burst transmission across prioritized high-angle arrays.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 font-mono text-xs text-[var(--mkl-amb)]">
          // CARRIER: 142.850 MHZ • EIRP: 45.0 WATT • QOS: 99.8%
        </div>
        <DialogFooter>
          <Button variant="secondary">DISARM</Button>
          <Button variant="primary">AUTHORIZE TRANSMIT</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}`;

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 font-mono text-xs text-[var(--mkl-amb)] mb-1">
          <span>// SPEC: 05 OVERLAYS &amp; 06 TACTICAL ROUTING</span>
          <span>•</span>
          <span>MIL-STD-810H</span>
        </div>
        <h1 className="font-sans text-3xl sm:text-4xl font-black uppercase tracking-wider text-white">
          OVERLAYS &amp; NAVIGATION
        </h1>
        <p className="font-mono text-sm text-[var(--mkl-steel-1)] mt-2">
          Bolted metal modal plates, ganged ops tabs with active LED jewels, popover pinout tags,
          stencil tooltips, chevron breadcrumbs, and sliding inspection hatch accordions.
        </p>
      </div>

      {/* Interactive Overlays Preview */}
      <ComponentPreview code={dialogSample} title="ARMORED MODAL OVERLAYS">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* Dialog Demo */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="primary">OPEN BOLTED DIALOG</Button>
            </DialogTrigger>
            <DialogContent serial="FRAME-ID: 888-TX" hazardHeader>
              <DialogHeader>
                <DialogTitle>TARGET ACQUISITION LOCK</DialogTitle>
                <DialogDescription>
                  Transceiver bay 02 will route burst transmission across prioritized high-angle arrays.
                  Confirm hardware handshake before engaging magnetic drive amplifiers.
                </DialogDescription>
              </DialogHeader>
              <div className="p-3 my-2 rounded bg-[var(--mkl-lcd)] border border-black/80 font-mono text-xs text-[var(--mkl-lcd-ink)] lcd-glow">
                CARRIER VECTOR: 142.850 MHZ // LOCK QUALITY: 99.8% QOS
              </div>
              <DialogFooter>
                <Button variant="secondary">DISARM</Button>
                <Button variant="primary">AUTHORIZE TRANSMIT</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Popover Demo */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="secondary">BNC PINOUT TAG</Button>
            </PopoverTrigger>
            <PopoverContent title="BNC-J12 AUX CONNECTOR" serial="PIN-50-OHM">
              <div className="space-y-2">
                <p className="text-[var(--mkl-steel-1)]">
                  Connector rated for 500V RMS dielectric breakdown. Hard gold-plated beryllium copper pin receptacle.
                </p>
                <div className="text-[10px] text-[var(--mkl-amb)] font-bold">
                  PIN 1: CORE SIG [ACTIVE] • PIN 2: SHIELD [EARTHED]
                </div>
              </div>
            </PopoverContent>
          </Popover>

          {/* Dropdown Menu Demo */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">[ SPECS MENU ▾ ]</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                FREQUENCY SYNTH <DropdownMenuShortcut>ALT+F</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                ENCRYPTION ENGINE <DropdownMenuShortcut>CTRL+E</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                ZERO-PURGE MEMORY <DropdownMenuShortcut>SHIFT+H</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Tooltip Demo */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost">HOVER SENSOR</Button>
              </TooltipTrigger>
              <TooltipContent>
                MIL-STD-188-110D COMPLIANT MODEM
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </ComponentPreview>

      {/* Installation Tabs */}
      <div>
        <h2 className="font-sans text-xl font-bold uppercase tracking-wide text-white mb-2">
          INSTALLATION
        </h2>
        <InstallTabs componentName="dialog" sourceCode={dialogSample} />
      </div>

      {/* Navigation & Tabs Showcase */}
      <ChassisPlate title="GANGED OPS TABS &amp; CHEVRON ROUTING" serial="NAV-BAY-06">
        <div className="space-y-6">
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">FLEET-NET [PACIFIC-02]</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">SUB-SECTOR 04</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#" active>
                CHANNEL 12B // PRIMARY BUS
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Tabs defaultValue="radar" className="w-full">
            <TabsList label="Tactical Dispatch Rail" serial="MEGA-DROP-BAYS">
              <TabsTrigger value="radar">BAY 01: RADAR &amp; EW</TabsTrigger>
              <TabsTrigger value="crypto">BAY 02: CRYPTO KEYS</TabsTrigger>
              <TabsTrigger value="sat">BAY 03: SAT-UPLINK</TabsTrigger>
              <TabsTrigger value="antenna">BAY 04: ANTENNA MATRIX</TabsTrigger>
            </TabsList>
            <TabsContent value="radar" className="space-y-3">
              <div className="font-bold text-[var(--mkl-amb)]">
                // HARDWARE DISPATCH: DIRECT DUAL-CHANNEL COAXIAL LINK
              </div>
              <p className="text-[var(--mkl-steel-1)] leading-relaxed">
                COAX-01 -&gt; L-BAND RX • RF FILTER MATRIX: 142.000 - 148.500 MHZ • BANDPASS ACTIVE • DIRECT MEMORY ACCESS MAPPED [0x7FA040]
              </p>
            </TabsContent>
            <TabsContent value="crypto" className="space-y-3">
              <div className="font-bold text-[var(--mkl-amb)]">// AES-256 SEED ROTATION MATRIX</div>
              <p className="text-[var(--mkl-steel-1)] leading-relaxed">
                Continuous rolling pseudo-random frequency hopping sequence aligned with GPS clock standard.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </ChassisPlate>

      {/* Sliding Hatches Accordion Showcase */}
      <ChassisPlate title="SLIDING HARDWARE INSPECTION HATCHES" serial="HATCH-ARRAY">
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger serial="WELL D-4">
              HATCH 01 // ANTENNA TUNER &amp; RF COUPLER DIAGNOSTICS
            </AccordionTrigger>
            <AccordionContent>
              VSWR RATIO: 1.14:1 (OPTIMAL TUNED) • FORWARD POWER: 85.4 W • MOTORIZED CAPACITOR: 64.2% • TUNER SENSOR TELEMETRY: 44.8 KSPS
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger serial="BAY E-1">
              HATCH 02 // CRYOGENIC LNA AMPLIFIER STAGE
            </AccordionTrigger>
            <AccordionContent>
              INSPECTION HATCH CLOSED // SAFETY SEAL INTACT • CHAMBER TEMP: -180C NOMINAL
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger serial="MIL-106">
              HATCH 03 // DUAL OPTICAL FIBER TRANSCEIVER LINK
            </AccordionTrigger>
            <AccordionContent>
              OPTICAL POWER ATTENUATION: -2.4 dB • SFP TRANSMITTER ACTIVE
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </ChassisPlate>
    </div>
  );
}
