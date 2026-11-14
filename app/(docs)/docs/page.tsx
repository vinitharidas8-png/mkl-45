import Link from "next/link";
import { ArrowRight, Terminal, Shield, Zap, Sparkles } from "lucide-react";
import { Button } from "@/registry/mkl45/ui/button";
import { ChassisPlate } from "@/registry/mkl45/ui/chassis-plate";
import { LCDScreen } from "@/registry/mkl45/ui/lcd-screen";
import { Kbd } from "@/registry/mkl45/ui/kbd";

export default function DocsIndexPage() {
  return (
    <div className="space-y-10">
      {/* Hero Intro Plate */}
      <ChassisPlate
        title="MKL-45 INTERCEPTOR SPECIFICATION"
        serial="MK45-SYS-INIT"
        spec="MIL-STD-810H REV 8.4"
      >
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[var(--mkl-surface-low)] text-[var(--mkl-amb)] font-mono text-xs border border-[var(--mkl-amb)]/30">
            <span className="w-2 h-2 rounded-full bg-[var(--mkl-amb)] shadow-[0_0_6px_var(--mkl-amb)] animate-pulse" />
            <span>OPERATIONAL STATUS: READY FOR COMBAT DEPLOYMENT</span>
          </div>

          <h1 className="font-sans text-4xl sm:text-5xl font-black uppercase tracking-wider text-white">
            MKL-45 INTERCEPTOR UI
          </h1>

          <p className="font-mono text-sm sm:text-base text-[var(--mkl-steel-1)] max-w-2xl leading-relaxed">
            An open-source, hardened field-radio React component library built with Next.js,
            TypeScript, Tailwind CSS, and Radix UI primitives. Designed exactly like
            shadcn/ui: preview live components, select what you need, and copy raw source
            directly into your repository.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link href="/docs/installation">
              <Button variant="primary" size="lg">
                INSTALLATION & SETUP <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
            <Link href="/components">
              <Button variant="secondary" size="lg">
                BROWSE 55+ COMPONENTS
              </Button>
            </Link>
          </div>
        </div>
      </ChassisPlate>

      {/* Live Hardware Telemetry Banner */}
      <LCDScreen className="space-y-2">
        <div className="flex items-center justify-between text-xs border-b border-[var(--mkl-lcd-ghost)] pb-1.5">
          <span className="text-[var(--mkl-amb)] font-bold">// HARDWARE TELEMETRY STREAM</span>
          <span>FREQ: 142.850 MHZ // SEC-CLEARANCE: LVL-4</span>
        </div>
        <p className="text-sm">
          MKL-45 delivers real physical weight: 80ms down-stroke travel on mechanical keycaps,
          45-degree CNC chamfers, amber dot-matrix CRT readouts, and bi-stable LED status jewels.
        </p>
      </LCDScreen>

      {/* Core Architectural Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ChassisPlate hasScrews={false} className="p-4">
          <div className="space-y-2">
            <div className="w-8 h-8 rounded bg-[var(--mkl-surface-high)] flex items-center justify-center text-[var(--mkl-acc)]">
              <Shield className="w-4 h-4" />
            </div>
            <h3 className="font-sans text-lg font-bold uppercase text-white tracking-wide">
              You Own The Code
            </h3>
            <p className="font-mono text-xs text-[var(--mkl-steel-1)] leading-relaxed">
              No bloated npm black-boxes. Components live directly in your codebase so you can
              modify styles, behavior, and tokens freely.
            </p>
          </div>
        </ChassisPlate>

        <ChassisPlate hasScrews={false} className="p-4">
          <div className="space-y-2">
            <div className="w-8 h-8 rounded bg-[var(--mkl-surface-high)] flex items-center justify-center text-[var(--mkl-amb)]">
              <Terminal className="w-4 h-4" />
            </div>
            <h3 className="font-sans text-lg font-bold uppercase text-white tracking-wide">
              shadcn CLI Native
            </h3>
            <p className="font-mono text-xs text-[var(--mkl-steel-1)] leading-relaxed">
              Compatible with the official shadcn CLI. Run <code className="text-[var(--mkl-amb)]">npx shadcn add @mkl45/button</code> or direct JSON URLs.
            </p>
          </div>
        </ChassisPlate>

        <ChassisPlate hasScrews={false} className="p-4">
          <div className="space-y-2">
            <div className="w-8 h-8 rounded bg-[var(--mkl-surface-high)] flex items-center justify-center text-[var(--mkl-emerald)]">
              <Zap className="w-4 h-4" />
            </div>
            <h3 className="font-sans text-lg font-bold uppercase text-white tracking-wide">
              Radix Accessibility
            </h3>
            <p className="font-mono text-xs text-[var(--mkl-steel-1)] leading-relaxed">
              Built on Radix UI primitives. Full keyboard navigation, ARIA attributes, focus
              trapping, and screen reader readiness out of the box.
            </p>
          </div>
        </ChassisPlate>
      </div>

      {/* Quick Start Teletype Block */}
      <ChassisPlate title="QUICK VERIFICATION COMMAND" serial="SHADCN-CLI">
        <div className="space-y-3 font-mono text-xs">
          <p className="text-[var(--mkl-steel-1)]">
            Install any component into your project with a single terminal command:
          </p>
          <div className="p-3 rounded bg-[var(--mkl-surface-low)] border border-[var(--mkl-surface-mid)] text-[var(--mkl-amb)] select-all">
            <code>npx shadcn@latest add https://mkl-45.vercel.app/r/button.json</code>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-[var(--mkl-steel-2)]">
            <span>KEYBOARD RECON PALETTE: PRESS</span>
            <Kbd>CMD</Kbd> + <Kbd>K</Kbd>
          </div>
        </div>
      </ChassisPlate>
    </div>
  );
}
