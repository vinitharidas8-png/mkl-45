"use client";

import * as React from "react";
import { Button } from "@/registry/mkl45/ui/button";
import { ComponentPreview } from "@/app/components/component-preview";
import { InstallTabs } from "@/app/components/install-tabs";
import { ChassisPlate } from "@/registry/mkl45/ui/chassis-plate";
import { Kbd } from "@/registry/mkl45/ui/kbd";

export default function ButtonDocsPage() {
  const [latchedKey, setLatchedKey] = React.useState("STANDBY");
  const [isBeaconArmed, setIsBeaconArmed] = React.useState(true);

  const buttonSource = `import * as React from "react";
import { Button } from "@/components/ui/button";

export function Demo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="default">PBT Default</Button>
      <Button variant="primary">Cerakote Orange</Button>
      <Button variant="secondary" hasLed isLedActive ledColor="amber">
        Aux Route
      </Button>
      <Button variant="destructive">Zero-Purge</Button>
    </div>
  );
}`;

  return (
    <div className="space-y-8">
      {/* Title & Metadata Header */}
      <div>
        <div className="flex items-center gap-2 font-mono text-xs text-[var(--mkl-amb)] mb-1">
          <span>// SPEC: 02 ACTIONS &amp; SWITCHGEAR</span>
          <span>•</span>
          <span>MIL-STD-810H</span>
        </div>
        <h1 className="font-sans text-3xl sm:text-4xl font-black uppercase tracking-wider text-white">
          BUTTON KEYCAP
        </h1>
        <p className="font-mono text-sm text-[var(--mkl-steel-1)] mt-2">
          Tactile mechanical keycap buttons featuring 7 finish variants, 4 sizes, real
          mechanical down-stroke actuation (80ms sink), bi-stable status LED jewels, and
          recessed tray bezels.
        </p>
      </div>

      {/* Main Interactive Preview */}
      <ComponentPreview code={buttonSource} title="KEYCAP ACTUATION PROFILES">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button variant="default" sublabel="X-702">
            DATA COMM
          </Button>
          <Button variant="secondary" sublabel="CH-04">
            AUX ROUTE
          </Button>
          <Button variant="primary" sublabel="TX-RDY">
            INTERCEPT
          </Button>
          <Button variant="destructive" sublabel="CAUTION">
            ZERO-PURGE
          </Button>
          <Button variant="outline">[ FREQ SWEEP ]</Button>
          <Button variant="ghost">DIAG-TRACE</Button>
        </div>
      </ComponentPreview>

      {/* Installation Tabs */}
      <div>
        <h2 className="font-sans text-xl font-bold uppercase tracking-wide text-white mb-2">
          INSTALLATION
        </h2>
        <InstallTabs componentName="button" sourceCode={buttonSource} />
      </div>

      {/* Ganged Interlock & LED Jewels Demo */}
      <ChassisPlate title="GANGED KEYBANK & BI-STABLE STATUS LEDS" serial="BANK-01">
        <div className="space-y-4">
          <p className="font-mono text-xs text-[var(--mkl-steel-1)]">
            Buttons can function as interlocked radio mode switches with embedded status LED
            jewels that toggle on click:
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <div className="inline-flex p-2 rounded bg-[var(--mkl-surface-low)] border border-[var(--mkl-surface-high)] gap-1.5 shadow-[inset_0_2px_4px_#000]">
              {["STANDBY", "MONITOR", "INTERCEPT", "JAMMING"].map((mode) => (
                <Button
                  key={mode}
                  variant={latchedKey === mode ? "primary" : "secondary"}
                  isLatched={latchedKey === mode}
                  hasLed
                  isLedActive={latchedKey === mode}
                  ledColor="amber"
                  onClick={() => setLatchedKey(mode)}
                >
                  {mode}
                </Button>
              ))}
            </div>

            <Button
              variant="secondary"
              hasLed
              isLedActive={isBeaconArmed}
              ledColor="emerald"
              onClick={() => setIsBeaconArmed(!isBeaconArmed)}
            >
              BEACON POWER
            </Button>

            <Button variant="primary" isLoading>
              TRANSMIT
            </Button>
          </div>
        </div>
      </ChassisPlate>

      {/* Size Matrix */}
      <ChassisPlate title="SIZE SCALE & HOTKEY COMBINATIONS" serial="SCALE-03">
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm" variant="default">
            F1
          </Button>
          <Button size="default" variant="default">
            EXECUTE
          </Button>
          <Button size="lg" variant="primary">
            TRANSMIT [PTT]
          </Button>
          <div className="flex items-center gap-2 font-mono text-xs text-[var(--mkl-steel-1)] ml-auto">
            <span>OVERRIDE:</span>
            <Kbd>CTRL</Kbd> + <Kbd>SHIFT</Kbd> + <Kbd>K</Kbd>
          </div>
        </div>
      </ChassisPlate>

      {/* Props / Metrology Table */}
      <ChassisPlate title="PROPS & HARDWARE METROLOGY" serial="API-SPEC">
        <div className="overflow-x-auto font-mono text-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[var(--mkl-surface-mid)] text-[var(--mkl-amb)]">
                <th className="py-2 pr-4 font-bold">PROP</th>
                <th className="py-2 pr-4 font-bold">TYPE</th>
                <th className="py-2 pr-4 font-bold">DEFAULT</th>
                <th className="py-2 font-bold">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--mkl-surface-mid)] text-[var(--mkl-steel-1)]">
              <tr>
                <td className="py-2 pr-4 font-bold text-white">variant</td>
                <td className="py-2 pr-4 text-[var(--mkl-amb)]">&quot;default&quot; | &quot;secondary&quot; | &quot;primary&quot; | &quot;destructive&quot; | &quot;outline&quot; | &quot;ghost&quot; | &quot;link&quot;</td>
                <td className="py-2 pr-4">&quot;default&quot;</td>
                <td className="py-2">PBT bone, charcoal, cerakote orange, zero-purge red, recessed bezel, ghost, or link</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-bold text-white">size</td>
                <td className="py-2 pr-4 text-[var(--mkl-amb)]">&quot;sm&quot; | &quot;default&quot; | &quot;lg&quot; | &quot;icon&quot;</td>
                <td className="py-2 pr-4">&quot;default&quot;</td>
                <td className="py-2">Standard chassis keycap footprint sizes</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-bold text-white">hasLed</td>
                <td className="py-2 pr-4 text-[var(--mkl-amb)]">boolean</td>
                <td className="py-2 pr-4">false</td>
                <td className="py-2">Renders a bi-stable micro-lens LED jewel in the upper-right corner</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-bold text-white">isLedActive</td>
                <td className="py-2 pr-4 text-[var(--mkl-amb)]">boolean</td>
                <td className="py-2 pr-4">false</td>
                <td className="py-2">Luminance state for the embedded LED jewel with phosphor bloom</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-bold text-white">ledColor</td>
                <td className="py-2 pr-4 text-[var(--mkl-amb)]">&quot;amber&quot; | &quot;emerald&quot; | &quot;red&quot;</td>
                <td className="py-2 pr-4">&quot;amber&quot;</td>
                <td className="py-2">LED jewel phosphor spectrum</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-bold text-white">isLoading</td>
                <td className="py-2 pr-4 text-[var(--mkl-amb)]">boolean</td>
                <td className="py-2 pr-4">false</td>
                <td className="py-2">Displays the animated CNC spinner and BUSY state</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ChassisPlate>
    </div>
  );
}
