"use client";

import * as React from "react";
import Link from "next/link";
import { Search, Plus, Check } from "lucide-react";
import { Button } from "@/registry/mkl45/ui/button";
import { Input } from "@/registry/mkl45/ui/input";
import { Badge } from "@/registry/mkl45/ui/badge";
import { ChassisPlate } from "@/registry/mkl45/ui/chassis-plate";
import { SiteHeader } from "@/app/components/site-header";
import { SearchCommand } from "@/app/components/search-command";
import { useKit } from "@/app/components/my-kit-tray";

const COMPONENT_CATALOG = [
  { name: "button", title: "Button Keycap", category: "Actions", desc: "7 finish variants, 4 sizes, 80ms down-stroke travel" },
  { name: "kbd", title: "Kbd Tag", category: "Actions", desc: "Miniature double-shot hotkey indicator" },
  { name: "button-group", title: "Button Group", category: "Actions", desc: "Continuous recessed switchbank tray" },
  { name: "toggle", title: "Toggle Key", category: "Actions", desc: "Two-state latched push switch with LED" },
  { name: "hold-to-confirm", title: "Hold-To-Confirm", category: "Actions", desc: "Interlocked safety key with radial hold progress" },
  { name: "input", title: "Input Terminal", category: "Forms", desc: "Amber dot-matrix CRT text entry well" },
  { name: "textarea", title: "Textarea Screen", category: "Forms", desc: "Multiline scanline terminal display" },
  { name: "label", title: "Label Stencil", category: "Forms", desc: "Laser-etched metal label plate with serials" },
  { name: "checkbox", title: "Checkbox Stud", category: "Forms", desc: "Latching square key switch with amber LED" },
  { name: "switch", title: "Toggle Switch", category: "Forms", desc: "Heavy physical toggle lever with spring settle" },
  { name: "slider", title: "Linear Fader Slider", category: "Forms", desc: "Knurled potentiometer slider with ruler ticks" },
  { name: "rotary-knob", title: "Rotary Attenuator", category: "Forms", desc: "270-degree knurled aluminum potentiometer" },
  { name: "alert", title: "Alert Plate", category: "Feedback", desc: "Tactical plate with diagonal hazard striping" },
  { name: "progress", title: "Chevron Progress", category: "Feedback", desc: "12-segment illuminated amber chevron meter" },
  { name: "spinner", title: "CNC Loaders", category: "Feedback", desc: "Gears, dotted CRT rings, and tri-state LEDs" },
  { name: "skeleton", title: "Hatched Skeleton", category: "Feedback", desc: "Diagonal cross-hatched placeholder plate" },
  { name: "badge", title: "Tactical Badge", category: "Feedback", desc: "Stamped metal chips and condition chips" },
  { name: "empty-state", title: "Empty CRT Screen", category: "Feedback", desc: "Raster phosphor telemetry screen with scanlines" },
  { name: "dialog", title: "Bolted Dialog", category: "Overlays", desc: "Bolted enclosure with hazard stripes and screws" },
  { name: "popover", title: "BNC Pinout Popover", category: "Overlays", desc: "Bolted pinout tag with telemetry borders" },
  { name: "dropdown-menu", title: "Dropdown Menu", category: "Overlays", desc: "Engraved alloy rows with hotkey indicators" },
  { name: "tooltip", title: "Stencil Tooltip", category: "Overlays", desc: "Micro-lens identification label tags" },
  { name: "tabs", title: "Ganged Ops Tabs", category: "Navigation", desc: "Interlocked switchbank with active amber LEDs" },
  { name: "breadcrumb", title: "Chevron Breadcrumb", category: "Navigation", desc: "Navigation vector path with glowing active segment" },
  { name: "accordion", title: "Inspection Hatch", category: "Navigation", desc: "Sliding hardware inspection hatch accordion" },
  { name: "card", title: "Chassis Card", category: "Data", desc: "Bolted armor plate cards with hazard accents" },
  { name: "table", title: "Logistics Manifest", category: "Data", desc: "Hardened zebra data table with amber headers" },
  { name: "chart", title: "Dot-Matrix CRT Chart", category: "Data", desc: "Oscilloscope vector paths & FFT spectrum bars" },
  { name: "separator", title: "Hazard Separator", category: "Layout", desc: "Heavy dividers with diagonal hazard stripes" },
  { name: "chassis-plate", title: "Chassis Armor Plate", category: "Layout", desc: "Cold-rolled structural enclosure plate with hex screws" },
  { name: "lcd-screen", title: "Phosphor CRT / LCD", category: "Layout", desc: "High-contrast phosphor display with raster scanlines" },
];

export default function BrowseComponentsPage() {
  const [query, setQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("ALL");
  const [searchOpen, setSearchOpen] = React.useState(false);
  const { selectedComponents, toggleComponent, selectAll } = useKit();

  const categories = ["ALL", "Actions", "Forms", "Feedback", "Overlays", "Navigation", "Data", "Layout"];

  const filtered = COMPONENT_CATALOG.filter((comp) => {
    const matchesQuery =
      comp.title.toLowerCase().includes(query.toLowerCase()) ||
      comp.desc.toLowerCase().includes(query.toLowerCase()) ||
      comp.name.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = selectedCategory === "ALL" || comp.category === selectedCategory;
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[var(--mkl-bg)]">
      <SiteHeader onOpenSearch={() => setSearchOpen(true)} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-10 space-y-8">
        {/* Header Block */}
        <ChassisPlate title="COMPONENT REGISTRY BROWSER" serial="REG-55-PAYLOAD" spec="MIL-STD-810H">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <h1 className="font-sans text-3xl font-black uppercase text-white tracking-wide">
                SELECT &amp; ARRANGE COMPONENT KIT
              </h1>
              <p className="font-mono text-xs text-[var(--mkl-steel-1)] max-w-xl">
                Browse all hardened hardware components. Check &quot;Add to kit&quot; on any selection to generate a single unified shadcn CLI installation command.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="primary"
                size="sm"
                onClick={() => selectAll(COMPONENT_CATALOG.map((c) => c.name))}
              >
                SELECT ALL ({COMPONENT_CATALOG.length})
              </Button>
            </div>
          </div>
        </ChassisPlate>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto p-1 rounded bg-[var(--mkl-surface)] border border-[var(--mkl-surface-high)]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-[2px] font-bold uppercase transition-all duration-80 whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-[var(--mkl-acc)] text-white shadow-[0_2px_0_#8E4417]"
                    : "text-[var(--mkl-steel-1)] hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Filter Search */}
          <div className="w-full md:w-72">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="SEARCH HARDWARE..."
            />
          </div>
        </div>

        {/* Component Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((comp) => {
            const inKit = selectedComponents.includes(comp.name);
            return (
              <ChassisPlate
                key={comp.name}
                serial={`MOD-${comp.name.toUpperCase()}`}
                hasScrews={false}
                className="flex flex-col justify-between p-5 space-y-4 hover:border-[var(--mkl-amb)]/60 transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="caution">{comp.category}</Badge>
                    <span className="font-mono text-[10px] text-[var(--mkl-steel-2)]">
                      @{comp.name}
                    </span>
                  </div>
                  <h3 className="font-sans text-xl font-black uppercase text-white tracking-wide">
                    {comp.title}
                  </h3>
                  <p className="font-mono text-xs text-[var(--mkl-steel-1)] leading-relaxed">
                    {comp.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[var(--mkl-surface-mid)]">
                  <Link
                    href={`/docs/components/${comp.name}`}
                    className="font-mono text-xs font-bold text-[var(--mkl-amb)] hover:underline"
                  >
                    VIEW SPECS →
                  </Link>

                  <button
                    onClick={() => toggleComponent(comp.name)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[3px] font-mono text-xs font-bold uppercase tracking-wider transition-all duration-80 ${
                      inKit
                        ? "bg-[var(--mkl-amb)] text-[var(--mkl-surface)] shadow-[0_2px_0_#966A06]"
                        : "bg-[var(--mkl-surface-low)] text-[var(--mkl-key)] border border-[var(--mkl-surface-high)] hover:border-white shadow-[0_2px_0_#000]"
                    }`}
                  >
                    {inKit ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        IN KIT
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        ADD TO KIT
                      </>
                    )}
                  </button>
                </div>
              </ChassisPlate>
            );
          })}
        </div>
      </main>

      <SearchCommand open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  );
}
