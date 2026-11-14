import Link from "next/link";
import { ChassisPlate } from "@/registry/mkl45/ui/chassis-plate";
import { LCDScreen } from "@/registry/mkl45/ui/lcd-screen";
import { Button } from "@/registry/mkl45/ui/button";

export default function ThemingDocsPage() {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-2 font-mono text-xs text-[var(--mkl-amb)] mb-1">
          <span>// SPEC: 01 METROLOGY &amp; TOKENS</span>
          <span>•</span>
          <span>MIL-STD-810H</span>
        </div>
        <h1 className="font-sans text-3xl sm:text-4xl font-black uppercase tracking-wider text-white">
          DESIGN TOKENS &amp; ACTUATION PHYSICS
        </h1>
        <p className="font-mono text-sm text-[var(--mkl-steel-1)] mt-2">
          Physical layout specifications, cold-rolled steel surface gradients, chamfer geometries, and mechanical key travel actuation timings.
        </p>
      </div>

      <ChassisPlate title="COLOR TOKEN MATRIX" serial="PALETTE-SYS">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
          <div className="p-3 rounded bg-[var(--mkl-surface-low)] border border-[var(--mkl-surface-high)] space-y-2">
            <div className="h-10 rounded bg-[#D8CCB6]" />
            <div className="font-bold text-white">SAND CANVAS</div>
            <div className="text-[10px] text-[var(--mkl-steel-1)]">#D8CCB6</div>
          </div>

          <div className="p-3 rounded bg-[var(--mkl-surface-low)] border border-[var(--mkl-surface-high)] space-y-2">
            <div className="h-10 rounded bg-[#D9712F]" />
            <div className="font-bold text-white">CERAKOTE ORANGE</div>
            <div className="text-[10px] text-[var(--mkl-steel-1)]">#D9712F</div>
          </div>

          <div className="p-3 rounded bg-[var(--mkl-surface-low)] border border-[var(--mkl-surface-high)] space-y-2">
            <div className="h-10 rounded bg-[#F2B01E]" />
            <div className="font-bold text-white">HAZARD AMBER</div>
            <div className="text-[10px] text-[var(--mkl-steel-1)]">#F2B01E</div>
          </div>

          <div className="p-3 rounded bg-[var(--mkl-surface-low)] border border-[var(--mkl-surface-high)] space-y-2">
            <div className="h-10 rounded bg-[#150E00] border border-black/80" />
            <div className="font-bold text-white">LCD DISPLAY RESIN</div>
            <div className="text-[10px] text-[var(--mkl-steel-1)]">#150E00</div>
          </div>
        </div>
      </ChassisPlate>

      <ChassisPlate title="ACTUATION DYNAMICS &amp; MOTION PHYSICS" serial="TRAVEL-SPEC">
        <div className="space-y-3 font-mono text-xs text-[var(--mkl-steel-1)] leading-relaxed">
          <p>
            <strong className="text-white">Keycap Travel (80ms):</strong> Mechanical keys feature 80ms down-stroke travel (<code className="text-[var(--mkl-amb)]">translateY(3px)</code>) with instant drop-shadow collapse from 4px down to 1px.
          </p>
          <p>
            <strong className="text-white">Toggle Switch Settle (300ms):</strong> Rotary knobs and toggle switches settle with an authentic spring overshoot using <code className="text-[var(--mkl-amb)]">cubic-bezier(0.34, 1.56, 0.64, 1)</code>.
          </p>
          <p>
            <strong className="text-white">Prefers-Reduced-Motion:</strong> All mechanical animations, transitions, and scans gracefully collapse to instant transitions when reduced motion is detected.
          </p>
        </div>
      </ChassisPlate>
    </div>
  );
}
