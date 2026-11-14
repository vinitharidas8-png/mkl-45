"use client";

import * as React from "react";
import { Input } from "@/registry/mkl45/ui/input";
import { Textarea } from "@/registry/mkl45/ui/textarea";
import { Label } from "@/registry/mkl45/ui/label";
import { Checkbox } from "@/registry/mkl45/ui/checkbox";
import { Switch } from "@/registry/mkl45/ui/switch";
import { Slider } from "@/registry/mkl45/ui/slider";
import { RotaryKnob } from "@/registry/mkl45/ui/rotary-knob";
import { Alert } from "@/registry/mkl45/ui/alert";
import { Progress } from "@/registry/mkl45/ui/progress";
import { Spinner } from "@/registry/mkl45/ui/spinner";
import { Badge } from "@/registry/mkl45/ui/badge";
import { Button } from "@/registry/mkl45/ui/button";
import { ComponentPreview } from "@/app/components/component-preview";
import { InstallTabs } from "@/app/components/install-tabs";
import { ChassisPlate } from "@/registry/mkl45/ui/chassis-plate";

export default function InputDocsPage() {
  const [carrierFreq, setCarrierFreq] = React.useState("142.850_MHZ");
  const [rfGain, setRfGain] = React.useState(65);
  const [squelchActive, setSquelchActive] = React.useState(true);
  const [hoppingSync, setHoppingSync] = React.useState(true);

  const inputSample = `import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Demo() {
  return (
    <div className="space-y-2">
      <Label serial="CARRIER-TX">FREQUENCY CARRIER (MHZ)</Label>
      <Input placeholder="142.850_MHZ" />
    </div>
  );
}`;

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 font-mono text-xs text-[var(--mkl-amb)] mb-1">
          <span>// SPEC: 03 FORMS &amp; INPUT TRANSDUCERS</span>
          <span>•</span>
          <span>MIL-STD-810H</span>
        </div>
        <h1 className="font-sans text-3xl sm:text-4xl font-black uppercase tracking-wider text-white">
          INPUT &amp; TRANSDUCERS
        </h1>
        <p className="font-mono text-sm text-[var(--mkl-steel-1)] mt-2">
          Amber dot-matrix CRT input terminals, recessed textareas, mechanical toggle switches,
          latching checkboxes, rotary attenuators, and linear gain sliders.
        </p>
      </div>

      {/* Main Terminal Input Preview */}
      <ComponentPreview code={inputSample} title="LCD INPUT TERMINALS">
        <div className="w-full max-w-md space-y-4">
          <div className="space-y-1.5">
            <Label serial="TX-01">FREQUENCY CARRIER (MHZ)</Label>
            <Input
              value={carrierFreq}
              onChange={(e) => setCarrierFreq(e.target.value)}
              placeholder="ENTER MHZ..."
            />
          </div>

          <div className="space-y-1.5">
            <Label serial="ERR-CHECK">PARITY FRAME STATUS [SIMULATED ERROR]</Label>
            <Input error defaultValue="CRC_FAIL // 0x884F [FRAME MISALIGNMENT]" />
          </div>
        </div>
      </ComponentPreview>

      {/* Installation Tabs */}
      <div>
        <h2 className="font-sans text-xl font-bold uppercase tracking-wide text-white mb-2">
          INSTALLATION
        </h2>
        <InstallTabs componentName="input" sourceCode={inputSample} />
      </div>

      {/* Physical Switchgear & Potentiometers Demo */}
      <ChassisPlate title="SWITCHGEAR, ATTENUATORS &amp; SLIDERS" serial="POT-BANK-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Rotary & Switches */}
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <RotaryKnob
                label="RF Gain Attenuator"
                serial="GAIN-DB"
                value={rfGain}
                onChange={setRfGain}
              />
              <div className="space-y-4">
                <Switch
                  checked={squelchActive}
                  onCheckedChange={setSquelchActive}
                  label="EMERGENCY SQUELCH"
                  sublabel="LINE NOISE OVERRIDE"
                />
                <Checkbox
                  checked={hoppingSync}
                  onCheckedChange={(c) => setHoppingSync(!!c)}
                  label="FREQ HOPPING SYNC"
                  sublabel="LOCKED // MIL-SPEC"
                />
              </div>
            </div>
          </div>

          {/* Right: Linear Fader & Level Meter */}
          <div className="space-y-4">
            <Label serial="FADER-RF">OUTPUT POWER ATTENUATION (0W - 100W)</Label>
            <Slider defaultValue={[rfGain]} max={100} step={1} />
            <Progress value={rfGain} />
          </div>
        </div>
      </ChassisPlate>

      {/* Annunciators & Loaders Showcase */}
      <ChassisPlate title="ANNUNCIATORS, ALERTS &amp; LOADERS" serial="FEEDBACK-99">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Alert variant="warning" title="HIGH SWR DETECTED" code="ANT-04">
              Antenna impedance mismatch detected on carrier feedline. Auto-attenuation engaged.
            </Alert>
            <Alert variant="destructive" title="PROTOCOL ZERO-PURGE" code="PURGE-77">
              Cryptographic memory sanitization armed. Irreversible thermite erasure ready.
            </Alert>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-[var(--mkl-surface-mid)]">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[var(--mkl-steel-1)]">STATUS CHIPS:</span>
              <Badge variant="caution" dot>ONLINE</Badge>
              <Badge variant="danger" dot>PURGE</Badge>
              <Badge variant="secure" dot>LOCKED</Badge>
              <Badge variant="stencil">PASSIVE</Badge>
            </div>

            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-[var(--mkl-steel-1)]">CNC LOADERS:</span>
              <Spinner variant="gear" size="default" />
              <Spinner variant="dotted" size="default" />
              <Spinner variant="leds" />
            </div>
          </div>
        </div>
      </ChassisPlate>
    </div>
  );
}
