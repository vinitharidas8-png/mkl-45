import * as React from "react";
import { notFound } from "next/navigation";
import { ComponentPreview } from "@/app/components/component-preview";
import { InstallTabs } from "@/app/components/install-tabs";
import { ChassisPlate } from "@/registry/mkl45/ui/chassis-plate";
import { Badge } from "@/registry/mkl45/ui/badge";

// Import all registry UI components
import { Button } from "@/registry/mkl45/ui/button";
import { ButtonGroup } from "@/registry/mkl45/ui/button-group";
import { Kbd } from "@/registry/mkl45/ui/kbd";
import { Toggle } from "@/registry/mkl45/ui/toggle";
import { HoldToConfirm } from "@/registry/mkl45/ui/hold-to-confirm";
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
import { Skeleton } from "@/registry/mkl45/ui/skeleton";
import { EmptyState } from "@/registry/mkl45/ui/empty-state";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/registry/mkl45/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/registry/mkl45/ui/tabs";
import { Popover, PopoverTrigger, PopoverContent } from "@/registry/mkl45/ui/popover";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut } from "@/registry/mkl45/ui/dropdown-menu";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/registry/mkl45/ui/tooltip";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/registry/mkl45/ui/breadcrumb";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/registry/mkl45/ui/accordion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/registry/mkl45/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/registry/mkl45/ui/table";
import { Chart } from "@/registry/mkl45/ui/chart";
import { Separator } from "@/registry/mkl45/ui/separator";
import { LCDScreen } from "@/registry/mkl45/ui/lcd-screen";

interface ComponentSpec {
  name: string;
  title: string;
  category: string;
  specCode: string;
  description: string;
  codeSnippet: string;
  renderDemo: () => React.ReactNode;
  propsTable: { name: string; type: string; defaultVal: string; desc: string }[];
}

const REGISTRY_SPECS: Record<string, ComponentSpec> = {
  button: {
    name: "button",
    title: "BUTTON KEYCAP",
    category: "ACTIONS",
    specCode: "MIL-STD-810H // ACTUATION",
    description: "Tactile mechanical keycap button featuring 7 finish variants, 4 sizes, real down-stroke actuation (80ms sink), bi-stable status LED jewels, and recessed tray bezels.",
    codeSnippet: `import { Button } from "@/components/ui/button";

export function Demo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="default">PBT Default</Button>
      <Button variant="primary">Cerakote Orange</Button>
      <Button variant="secondary" hasLed isLedActive ledColor="amber">Aux Route</Button>
      <Button variant="destructive">Zero-Purge</Button>
    </div>
  );
}`,
    renderDemo: () => (
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button variant="default" sublabel="X-702">DATA COMM</Button>
        <Button variant="secondary" sublabel="CH-04" hasLed isLedActive ledColor="amber">AUX ROUTE</Button>
        <Button variant="primary" sublabel="TX-RDY">INTERCEPT</Button>
        <Button variant="destructive" sublabel="CAUTION">ZERO-PURGE</Button>
        <Button variant="outline">[ FREQ SWEEP ]</Button>
        <Button variant="ghost">DIAG-TRACE</Button>
      </div>
    ),
    propsTable: [
      { name: "variant", type: '"default" | "secondary" | "primary" | "destructive" | "outline" | "ghost" | "link"', defaultVal: '"default"', desc: "Visual keycap material finish" },
      { name: "size", type: '"sm" | "default" | "lg" | "icon"', defaultVal: '"default"', desc: "Chassis key footprint size" },
      { name: "hasLed", type: "boolean", defaultVal: "false", desc: "Embeds a bi-stable micro-lens LED jewel" },
      { name: "isLedActive", type: "boolean", defaultVal: "false", desc: "Illuminates the LED jewel with phosphor bloom" },
      { name: "ledColor", type: '"amber" | "emerald" | "red"', defaultVal: '"amber"', desc: "Phosphor spectrum of the LED jewel" },
    ],
  },

  "button-group": {
    name: "button-group",
    title: "BUTTON GROUP KEYBANK",
    category: "ACTIONS",
    specCode: "GANG-SWITCH-BANK",
    description: "Recessed metal tray housing interlocked or related switchgear buttons in a continuous chassis mount.",
    codeSnippet: `import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";

export function Demo() {
  return (
    <ButtonGroup label="PRIMARY FREQUENCY GANG" serial="BANK-01">
      <Button size="sm" variant="secondary">CH-1</Button>
      <Button size="sm" variant="primary">CH-2</Button>
      <Button size="sm" variant="secondary">CH-3</Button>
    </ButtonGroup>
  );
}`,
    renderDemo: () => (
      <ButtonGroup label="TRANSMITTER CHANNEL MATRIX" serial="GANG-4X">
        <Button size="sm" variant="secondary">STANDBY</Button>
        <Button size="sm" variant="secondary">MONITOR</Button>
        <Button size="sm" variant="primary" hasLed isLedActive ledColor="amber">INTERCEPT</Button>
        <Button size="sm" variant="secondary">JAMMING</Button>
      </ButtonGroup>
    ),
    propsTable: [
      { name: "label", type: "string", defaultVal: "undefined", desc: "Stenciled bank descriptor" },
      { name: "serial", type: "string", defaultVal: '"GANG-4X"', desc: "Chassis hardware serial" },
    ],
  },

  kbd: {
    name: "kbd",
    title: "KBD LEGEND TAG",
    category: "ACTIONS",
    specCode: "KEYCAP-LEGEND-TAG",
    description: "Miniature double-shot mechanical keycap legend tag for hotkey cues and terminal navigation prompts.",
    codeSnippet: `import { Kbd } from "@/components/ui/kbd";

export function Demo() {
  return (
    <div className="flex items-center gap-2 font-mono text-xs">
      <span>OVERRIDE:</span>
      <Kbd>CTRL</Kbd> + <Kbd>SHIFT</Kbd> + <Kbd>K</Kbd>
    </div>
  );
}`,
    renderDemo: () => (
      <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-[var(--mkl-surface)] font-bold">
        <div className="flex items-center gap-1.5">
          <span>RECON PALETTE:</span>
          <Kbd>CMD</Kbd> + <Kbd>K</Kbd>
        </div>
        <div className="flex items-center gap-1.5">
          <span>PURGE COMM:</span>
          <Kbd>ALT</Kbd> + <Kbd>F9</Kbd>
        </div>
      </div>
    ),
    propsTable: [
      { name: "className", type: "string", defaultVal: "undefined", desc: "Custom styling overrides" },
    ],
  },

  toggle: {
    name: "toggle",
    title: "TACTILE TOGGLE KEY",
    category: "ACTIONS",
    specCode: "LATCHING-SWITCH",
    description: "Bi-stable latching push key that depresses 3px into the chassis and illuminates an active LED jewel when engaged.",
    codeSnippet: `import { Toggle } from "@/components/ui/toggle";

export function Demo() {
  return (
    <Toggle hasLed defaultPressed>
      BEACON POWER
    </Toggle>
  );
}`,
    renderDemo: () => (
      <div className="flex items-center gap-4">
        <Toggle hasLed defaultPressed>BEACON POWER</Toggle>
        <Toggle hasLed>AUX SENSORS</Toggle>
      </div>
    ),
    propsTable: [
      { name: "hasLed", type: "boolean", defaultVal: "true", desc: "Renders status jewel" },
      { name: "pressed", type: "boolean", defaultVal: "undefined", desc: "Controlled latch state" },
    ],
  },

  "hold-to-confirm": {
    name: "hold-to-confirm",
    title: "HOLD-TO-CONFIRM TRIGGER",
    category: "ACTIONS",
    specCode: "DETENT-SAFETY-KEY",
    description: "Spring-loaded pressure detent key that requires continuous engagement for 2 seconds to execute destructive overrides.",
    codeSnippet: `import { HoldToConfirm } from "@/components/ui/hold-to-confirm";

export function Demo() {
  return (
    <HoldToConfirm
      holdDurationMs={2000}
      label="ZERO-PURGE MEMORY"
      onConfirm={() => alert("Purged!")}
    />
  );
}`,
    renderDemo: () => (
      <HoldToConfirm label="DETONATE CRYPTO KEYS" holdDurationMs={2000} />
    ),
    propsTable: [
      { name: "holdDurationMs", type: "number", defaultVal: "2000", desc: "Milliseconds required to trigger confirmation" },
      { name: "onConfirm", type: "() => void", defaultVal: "undefined", desc: "Callback executed upon completion" },
    ],
  },

  input: {
    name: "input",
    title: "INPUT TERMINAL",
    category: "FORMS",
    specCode: "CRT-DATA-WELL",
    description: "Recessed amber dot-matrix CRT data entry terminal with horizontal scanlines, focus bloom, and simulated parity error states.",
    codeSnippet: `import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Demo() {
  return (
    <div className="space-y-1.5 w-72">
      <Label serial="TX-01">FREQUENCY CARRIER (MHZ)</Label>
      <Input placeholder="142.850_MHZ" />
    </div>
  );
}`,
    renderDemo: () => (
      <div className="w-full max-w-sm space-y-3">
        <div className="space-y-1">
          <Label serial="TX-01">FREQUENCY CARRIER</Label>
          <Input defaultValue="142.850_MHZ" />
        </div>
        <div className="space-y-1">
          <Label serial="ERR-SIM">PARITY CHECK [SIMULATED ERROR]</Label>
          <Input error defaultValue="CRC_FAIL // 0x884F" />
        </div>
      </div>
    ),
    propsTable: [
      { name: "error", type: "boolean", defaultVal: "false", desc: "Highlights frame with red CRT error scanline" },
    ],
  },

  textarea: {
    name: "textarea",
    title: "TEXTAREA SCREEN",
    category: "FORMS",
    specCode: "CRT-TELETYPE-WELL",
    description: "Multiline amber phosphor teletype screen for log feeds, mission directives, and large cryptographic payloads.",
    codeSnippet: `import { Textarea } from "@/components/ui/textarea";

export function Demo() {
  return <Textarea placeholder="ENTER LOG DIRECTIVE..." />;
}`,
    renderDemo: () => (
      <div className="w-full max-w-md">
        <Textarea defaultValue={`10:42:01.09 SYNTHESIZER PLL LOCK ENGAGED ON 142.8500 MHZ\n10:42:04.22 FORWARD RACK DETECTED: TRANSCEIVER EXTENSION BUS READY\n10:42:15.89 AGC ATTENUATION MATRIX CALIBRATED`} />
      </div>
    ),
    propsTable: [
      { name: "error", type: "boolean", defaultVal: "false", desc: "Error condition state" },
    ],
  },

  label: {
    name: "label",
    title: "LABEL STENCIL",
    category: "FORMS",
    specCode: "LASER-STENCIL-PLATE",
    description: "Laser-etched metal label plate with serial notation for form transducers and hardware switchgear.",
    codeSnippet: `import { Label } from "@/components/ui/label";

export function Demo() {
  return <Label serial="RF-01">CARRIER FREQUENCY</Label>;
}`,
    renderDemo: () => (
      <div className="space-y-2 w-72">
        <Label serial="TX-MOD-01">TRANSMITTER CARRIER IDENTIFIER</Label>
        <Label serial="PIN-50">DIELECTRIC VOLTAGE TOLERANCE</Label>
      </div>
    ),
    propsTable: [
      { name: "serial", type: "string", defaultVal: "undefined", desc: "Engraved bracketed serial code" },
    ],
  },

  checkbox: {
    name: "checkbox",
    title: "CHECKBOX STUD",
    category: "FORMS",
    specCode: "RELAY-LATCH-STUD",
    description: "Square tactile latching key switch with recessed amber LED check indicator and Radix state machine.",
    codeSnippet: `import { Checkbox } from "@/components/ui/checkbox";

export function Demo() {
  return (
    <Checkbox label="RF PRE-AMP STAGE" sublabel="[ENGAGED +14dB]" defaultChecked />
  );
}`,
    renderDemo: () => (
      <div className="space-y-3 font-mono">
        <Checkbox label="RF PRE-AMP STAGE" sublabel="[ENGAGED +14dB]" defaultChecked />
        <Checkbox label="AUTO-BURST PURGE" sublabel="[DISARMED]" />
        <Checkbox label="FREQ HOPPING SYNC" sublabel="[LOCKED // MIL-SPEC]" defaultChecked />
      </div>
    ),
    propsTable: [
      { name: "label", type: "string", defaultVal: "undefined", desc: "Primary stenciled label" },
      { name: "sublabel", type: "string", defaultVal: "undefined", desc: "Secondary bracketed telemetry" },
    ],
  },

  switch: {
    name: "switch",
    title: "TOGGLE LEVER SWITCH",
    category: "FORMS",
    specCode: "MIL-DTL-3950-BAT",
    description: "Heavy physical toggle lever with authentic spring settle overshoot dynamics and Cerakote orange actuator.",
    codeSnippet: `import { Switch } from "@/components/ui/switch";

export function Demo() {
  return (
    <Switch label="EMERGENCY SQUELCH" sublabel="LINE NOISE OVERRIDE" defaultChecked />
  );
}`,
    renderDemo: () => (
      <div className="space-y-4">
        <Switch label="MAIN TRANSMITTER POWER" sublabel="28V DC BUS ACTIVE" defaultChecked />
        <Switch label="EMERGENCY SQUELCH OVERRIDE" sublabel="DISPERSES INTERFERENCE" />
      </div>
    ),
    propsTable: [
      { name: "checked", type: "boolean", defaultVal: "undefined", desc: "Controlled state" },
      { name: "label", type: "string", defaultVal: "undefined", desc: "Primary label text" },
    ],
  },

  slider: {
    name: "slider",
    title: "LINEAR FADER SLIDER",
    category: "FORMS",
    specCode: "POT-FADER-RACK",
    description: "Horizontal attenuation fader with knurled thumb and analog ruler tick markings.",
    codeSnippet: `import { Slider } from "@/components/ui/slider";

export function Demo() {
  return <Slider defaultValue={[65]} max={100} step={1} />;
}`,
    renderDemo: () => (
      <div className="w-full max-w-sm space-y-2">
        <Slider defaultValue={[65]} max={100} step={1} />
      </div>
    ),
    propsTable: [
      { name: "ticks", type: "boolean", defaultVal: "true", desc: "Renders ruler tick marks" },
    ],
  },

  "rotary-knob": {
    name: "rotary-knob",
    title: "ROTARY ATTENUATOR KNOB",
    category: "FORMS",
    specCode: "KNURLED-POT-270",
    description: "Rotational knurled aluminum potentiometer with 270-degree sweep, amber indicator notch, and LCD readout.",
    codeSnippet: `import { RotaryKnob } from "@/components/ui/rotary-knob";

export function Demo() {
  return <RotaryKnob label="RF GAIN" value={50} />;
}`,
    renderDemo: () => (
      <div className="flex items-center gap-6">
        <RotaryKnob label="RF GAIN ATTENUATOR" serial="STEP-07" value={45} />
        <RotaryKnob label="BAND REJECTION" serial="Q-NOTCH" value={85} />
      </div>
    ),
    propsTable: [
      { name: "value", type: "number", defaultVal: "50", desc: "Current rotary value" },
      { name: "onChange", type: "(val: number) => void", defaultVal: "undefined", desc: "Value update callback" },
    ],
  },

  alert: {
    name: "alert",
    title: "TACTICAL ALERT PLATE",
    category: "FEEDBACK",
    specCode: "ANNUNCIATOR-PLATE",
    description: "Cut-corner tactical alert plates with diagonal hazard-striping edge trims and system serials.",
    codeSnippet: `import { Alert } from "@/components/ui/alert";

export function Demo() {
  return (
    <Alert variant="warning" title="HIGH SWR DETECTED" code="ANT-04">
      Antenna impedance mismatch detected on carrier feedline.
    </Alert>
  );
}`,
    renderDemo: () => (
      <div className="w-full max-w-md space-y-3">
        <Alert variant="warning" title="HIGH SWR DETECTED" code="ANT-04">
          Antenna impedance mismatch detected on carrier feedline. Auto-attenuation engaged.
        </Alert>
        <Alert variant="destructive" title="PROTOCOL ZERO-PURGE" code="PURGE-77">
          Cryptographic memory sanitization armed. Irreversible thermite erasure ready.
        </Alert>
      </div>
    ),
    propsTable: [
      { name: "variant", type: '"default" | "warning" | "destructive" | "success"', defaultVal: '"default"', desc: "Urgency profile and hazard striping" },
      { name: "title", type: "string", defaultVal: "undefined", desc: "Alert banner title" },
    ],
  },

  progress: {
    name: "progress",
    title: "CHEVRON PROGRESS BAR",
    category: "FEEDBACK",
    specCode: "METER-12-CHEVRON",
    description: "12-segment illuminated amber phosphor chevron level meter with glowing fill.",
    codeSnippet: `import { Progress } from "@/components/ui/progress";

export function Demo() {
  return <Progress value={75} />;
}`,
    renderDemo: () => (
      <div className="w-full max-w-sm space-y-3">
        <Progress value={45} />
        <Progress value={85} />
      </div>
    ),
    propsTable: [
      { name: "value", type: "number", defaultVal: "50", desc: "Current fill percentage (0-100)" },
      { name: "segments", type: "number", defaultVal: "12", desc: "Total chevron segments" },
    ],
  },

  spinner: {
    name: "spinner",
    title: "CNC SPINNER LOADERS",
    category: "FEEDBACK",
    specCode: "ROTARY-LOADER-TRIO",
    description: "Industrial feedback loaders: rotating CNC gear, dotted amber ring, and tri-state bouncing LEDs.",
    codeSnippet: `import { Spinner } from "@/components/ui/spinner";

export function Demo() {
  return (
    <div className="flex items-center gap-4">
      <Spinner variant="gear" />
      <Spinner variant="dotted" />
      <Spinner variant="leds" />
    </div>
  );
}`,
    renderDemo: () => (
      <div className="flex items-center gap-6">
        <Spinner variant="gear" size="lg" />
        <Spinner variant="dotted" size="lg" />
        <Spinner variant="leds" />
      </div>
    ),
    propsTable: [
      { name: "variant", type: '"gear" | "dotted" | "leds"', defaultVal: '"gear"', desc: "Animation style" },
      { name: "size", type: '"sm" | "default" | "lg"', defaultVal: '"default"', desc: "Dimension footprint" },
    ],
  },

  skeleton: {
    name: "skeleton",
    title: "HATCHED SKELETON LOADER",
    category: "FEEDBACK",
    specCode: "SHIMMER-HATCH",
    description: "Hazard-hatched grey structural loading blocks with pulse scanning animation.",
    codeSnippet: `import { Skeleton } from "@/components/ui/skeleton";

export function Demo() {
  return <Skeleton className="h-20 w-full" hazard />;
}`,
    renderDemo: () => (
      <div className="w-full max-w-sm space-y-2">
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-8 w-1/2" />
      </div>
    ),
    propsTable: [
      { name: "hazard", type: "boolean", defaultVal: "true", desc: "Applies 45° diagonal hazard hatching" },
    ],
  },

  badge: {
    name: "badge",
    title: "TACTICAL STATUS BADGE",
    category: "FEEDBACK",
    specCode: "CHIP-ANNUNCIATOR",
    description: "Stamped metal status chips and condition annunciators with illuminated status dots.",
    codeSnippet: `import { Badge } from "@/components/ui/badge";

export function Demo() {
  return (
    <div className="flex gap-2">
      <Badge variant="caution" dot>ONLINE</Badge>
      <Badge variant="danger" dot>PURGE</Badge>
      <Badge variant="secure" dot>LOCKED</Badge>
    </div>
  );
}`,
    renderDemo: () => (
      <div className="flex flex-wrap gap-2">
        <Badge variant="caution" dot>ONLINE</Badge>
        <Badge variant="danger" dot>ZERO-PURGE</Badge>
        <Badge variant="secure" dot>AES-LOCKED</Badge>
        <Badge variant="stencil">PASSIVE RX</Badge>
      </div>
    ),
    propsTable: [
      { name: "variant", type: '"default" | "caution" | "danger" | "secure" | "stencil"', defaultVal: '"default"', desc: "Material and colorway" },
      { name: "dot", type: "boolean", defaultVal: "false", desc: "Renders illuminated LED status point" },
    ],
  },

  "empty-state": {
    name: "empty-state",
    title: "EMPTY CRT SCREEN",
    category: "FEEDBACK",
    specCode: "CARRIER-LOST-CRT",
    description: "Stenciled amber LCD empty state readout with scanlines and error code badging.",
    codeSnippet: `import { EmptyState } from "@/components/ui/empty-state";

export function Demo() {
  return <EmptyState title="NO SIGNAL DETECTED" code="ERR-404-LOST" />;
}`,
    renderDemo: () => (
      <div className="w-full max-w-md">
        <EmptyState title="NO SIGNAL DETECTED" description="Awaiting frequency lock from remote transmitter array." code="ERR-404-CARRIER-LOST" />
      </div>
    ),
    propsTable: [
      { name: "title", type: "string", defaultVal: '"NO SIGNAL DETECTED"', desc: "Heading text" },
      { name: "code", type: "string", defaultVal: '"ERR-404-CARRIER-LOST"', desc: "Diagnostic error badge" },
    ],
  },

  dialog: {
    name: "dialog",
    title: "BOLTED MODAL DIALOG",
    category: "OVERLAYS",
    specCode: "MODAL-OVL-055",
    description: "Bolted metal modal enclosure with 4 hex corner screws, diagonal hazard striping band, backdrop blur, and Radix focus trapping.",
    codeSnippet: `import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function Demo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">LAUNCH BOLTED DIALOG</Button>
      </DialogTrigger>
      <DialogContent serial="FRAME-ID: 888-TX" hazardHeader>
        <DialogHeader>
          <DialogTitle>TARGET ACQUISITION LOCK</DialogTitle>
          <DialogDescription>Confirm hardware handshake before engaging amplifiers.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="secondary">ABORT</Button>
          <Button variant="primary">AUTHORIZE</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}`,
    renderDemo: () => (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="primary">LAUNCH BOLTED DIALOG</Button>
        </DialogTrigger>
        <DialogContent serial="FRAME-ID: 888-TX" hazardHeader>
          <DialogHeader>
            <DialogTitle>TARGET ACQUISITION LOCK</DialogTitle>
            <DialogDescription>
              Transceiver bay 02 will route burst transmission across prioritized high-angle arrays.
            </DialogDescription>
          </DialogHeader>
          <div className="p-3 my-2 rounded bg-[var(--mkl-lcd)] border border-black/80 font-mono text-xs text-[var(--mkl-lcd-ink)] lcd-glow">
            CARRIER: 142.850 MHZ // LOCK QUALITY: 99.8% QOS
          </div>
          <DialogFooter>
            <Button variant="secondary">DISARM</Button>
            <Button variant="primary">AUTHORIZE TRANSMIT</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    ),
    propsTable: [
      { name: "hazardHeader", type: "boolean", defaultVal: "true", desc: "Renders top hazard stripe lip" },
      { name: "serial", type: "string", defaultVal: '"MODAL-OVL-055"', desc: "Chassis serial stamp" },
    ],
  },

  tabs: {
    name: "tabs",
    title: "GANGED OPS TABS",
    category: "NAVIGATION",
    specCode: "INTERLOCK-TAB-RAIL",
    description: "Interlocked mechanical switchbank tabs with active amber LED jewels and physical 80ms depression.",
    codeSnippet: `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export function Demo() {
  return (
    <Tabs defaultValue="radar">
      <TabsList label="TACTICAL DISPATCH" serial="BAYS-4X">
        <TabsTrigger value="radar">BAY 01: RADAR</TabsTrigger>
        <TabsTrigger value="crypto">BAY 02: CRYPTO</TabsTrigger>
      </TabsList>
      <TabsContent value="radar">COAX-01 -&gt; L-BAND RX</TabsContent>
    </Tabs>
  );
}`,
    renderDemo: () => (
      <Tabs defaultValue="radar" className="w-full max-w-md">
        <TabsList label="Tactical Dispatch Rail" serial="MEGA-DROP-BAYS">
          <TabsTrigger value="radar">BAY 01: RADAR</TabsTrigger>
          <TabsTrigger value="crypto">BAY 02: CRYPTO</TabsTrigger>
          <TabsTrigger value="sat">BAY 03: SAT-UPLINK</TabsTrigger>
        </TabsList>
        <TabsContent value="radar">COAX-01 -&gt; L-BAND RX • 142.000 MHZ ACTIVE</TabsContent>
        <TabsContent value="crypto">AES-256 ROLLING HOPPING SEED ACTIVE</TabsContent>
        <TabsContent value="sat">GEO-ORBIT SATCOM BEACON CONNECTED</TabsContent>
      </Tabs>
    ),
    propsTable: [
      { name: "defaultValue", type: "string", defaultVal: "undefined", desc: "Initially selected tab" },
    ],
  },

  popover: {
    name: "popover",
    title: "BNC PINOUT POPOVER",
    category: "OVERLAYS",
    specCode: "TAG-POPOVER-BNC",
    description: "Bolted pinout tag popover with hardware telemetry borders and callout pointer.",
    codeSnippet: `import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export function Demo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary">BNC PINOUT TAG</Button>
      </PopoverTrigger>
      <PopoverContent title="BNC AUX CONNECTOR">PIN 1: CORE SIG</PopoverContent>
    </Popover>
  );
}`,
    renderDemo: () => (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="secondary">INSPECT BNC PINOUT TAG</Button>
        </PopoverTrigger>
        <PopoverContent title="BNC-J12 AUX CONNECTOR" serial="PIN-50-OHM">
          <div className="space-y-1 text-xs">
            <p className="text-[var(--mkl-steel-1)]">Rated for 500V RMS dielectric breakdown.</p>
            <div className="text-[10px] text-[var(--mkl-amb)] font-bold">PIN 1: ACTIVE • PIN 2: EARTHED</div>
          </div>
        </PopoverContent>
      </Popover>
    ),
    propsTable: [
      { name: "title", type: "string", defaultVal: "undefined", desc: "Header tag label" },
    ],
  },

  "dropdown-menu": {
    name: "dropdown-menu",
    title: "DROPDOWN MENU BAY",
    category: "OVERLAYS",
    specCode: "ENGRAVED-ALLOY-MENU",
    description: "Engraved alloy rows with keyboard shortcuts, focus highlights, and etched laser separators.",
    codeSnippet: `import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function Demo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">[ ACTIONS ▾ ]</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>FREQUENCY SYNTH</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`,
    renderDemo: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">[ SPECS MENU ▾ ]</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>FREQUENCY SYNTH <DropdownMenuShortcut>ALT+F</DropdownMenuShortcut></DropdownMenuItem>
          <DropdownMenuItem>ENCRYPTION ENGINE <DropdownMenuShortcut>CTRL+E</DropdownMenuShortcut></DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>ZERO-PURGE MEMORY <DropdownMenuShortcut>SHIFT+H</DropdownMenuShortcut></DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    propsTable: [
      { name: "sideOffset", type: "number", defaultVal: "4", desc: "Pixel distance from trigger" },
    ],
  },

  tooltip: {
    name: "tooltip",
    title: "STENCIL TOOLTIP",
    category: "OVERLAYS",
    specCode: "STENCIL-TAG-HOVER",
    description: "Laser-stenciled identification label tag tooltip with instant display.",
    codeSnippet: `import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export function Demo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost">HOVER SENSOR</Button>
        </TooltipTrigger>
        <TooltipContent>MIL-STD-188-110D MODEM</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}`,
    renderDemo: () => (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost">HOVER SENSOR PIN</Button>
          </TooltipTrigger>
          <TooltipContent>MIL-STD-188-110D COMPLIANT MODEM</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
    propsTable: [
      { name: "sideOffset", type: "number", defaultVal: "4", desc: "Offset from target" },
    ],
  },

  breadcrumb: {
    name: "breadcrumb",
    title: "CHEVRON BREADCRUMB",
    category: "NAVIGATION",
    specCode: "VECTOR-PATH-TRAIL",
    description: "Tactical navigation vector trail with glowing active segment and chevron dividers.",
    codeSnippet: `import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";

export function Demo() {
  return (
    <Breadcrumb>
      <BreadcrumbItem><BreadcrumbLink href="#">FLEET-NET</BreadcrumbLink></BreadcrumbItem>
      <BreadcrumbItem><BreadcrumbLink href="#" active>CHANNEL 12B</BreadcrumbLink></BreadcrumbItem>
    </Breadcrumb>
  );
}`,
    renderDemo: () => (
      <Breadcrumb>
        <BreadcrumbItem><BreadcrumbLink href="#">FLEET-NET [PACIFIC]</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbItem><BreadcrumbLink href="#">SUB-SECTOR 04</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbItem><BreadcrumbLink href="#" active>CHANNEL 12B // PRIMARY BUS</BreadcrumbLink></BreadcrumbItem>
      </Breadcrumb>
    ),
    propsTable: [
      { name: "separator", type: "ReactNode", defaultVal: "<ChevronRight />", desc: "Divider element" },
    ],
  },

  accordion: {
    name: "accordion",
    title: "INSPECTION HATCH ACCORDION",
    category: "NAVIGATION",
    specCode: "HATCH-ARRAY-SLIDE",
    description: "Sliding hardware inspection hatch accordion with LED status indicators and rotating amber chevrons.",
    codeSnippet: `import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export function Demo() {
  return (
    <Accordion type="single" collapsible defaultValue="h1">
      <AccordionItem value="h1">
        <AccordionTrigger serial="WELL D-4">HATCH 01: ANTENNA</AccordionTrigger>
        <AccordionContent>VSWR RATIO: 1.14:1 (OPTIMAL)</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`,
    renderDemo: () => (
      <Accordion type="single" collapsible defaultValue="item-1" className="w-full max-w-md">
        <AccordionItem value="item-1">
          <AccordionTrigger serial="WELL D-4">HATCH 01 // ANTENNA TUNER</AccordionTrigger>
          <AccordionContent>VSWR RATIO: 1.14:1 (OPTIMAL TUNED) • FORWARD POWER: 85.4 W</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger serial="BAY E-1">HATCH 02 // CRYOGENIC LNA STAGE</AccordionTrigger>
          <AccordionContent>INSPECTION HATCH CLOSED // SAFETY SEAL INTACT</AccordionContent>
        </AccordionItem>
      </Accordion>
    ),
    propsTable: [
      { name: "type", type: '"single" | "multiple"', defaultVal: '"single"', desc: "Expansion behavior" },
    ],
  },

  card: {
    name: "card",
    title: "CHASSIS CARD",
    category: "DATA",
    specCode: "ARMOR-PLATE-CARD",
    description: "Bolted armor plate cards with corner hex screws, hazard warning top lips, and modular sections.",
    codeSnippet: `import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function Demo() {
  return (
    <Card serial="PWR-01" hazardBorder>
      <CardHeader><CardTitle>POWER REGULATOR</CardTitle></CardHeader>
      <CardContent>MAIN RAIL: 27.94 V</CardContent>
    </Card>
  );
}`,
    renderDemo: () => (
      <Card serial="PWR-01" hazardBorder className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>MAIN POWER REGULATOR</CardTitle>
          <CardDescription>Primary 28V DC bus regulation module</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-2 rounded bg-[var(--mkl-surface-lowest)] font-mono text-xs text-[var(--mkl-amb)]">
            MAIN RAIL: 27.94 V • HEAT SINK: 41.8°C NOMINAL
          </div>
        </CardContent>
      </Card>
    ),
    propsTable: [
      { name: "hazardBorder", type: "boolean", defaultVal: "false", desc: "Applies top hazard warning border" },
      { name: "hasScrews", type: "boolean", defaultVal: "false", desc: "Adds 4 corner hex screws" },
    ],
  },

  table: {
    name: "table",
    title: "LOGISTICS MANIFEST TABLE",
    category: "DATA",
    specCode: "ZEBRA-MANIFEST-LOG",
    description: "High-density logistics zebra table with amber column headers and metrology typography.",
    codeSnippet: `import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

export function Demo() {
  return (
    <Table>
      <TableHeader>
        <TableRow><TableHead>CHANNEL</TableHead><TableHead>FREQ</TableHead></TableRow>
      </TableHeader>
      <TableBody>
        <TableRow><TableCell>CH-01</TableCell><TableCell>142.85 MHz</TableCell></TableRow>
      </TableBody>
    </Table>
  );
}`,
    renderDemo: () => (
      <div className="w-full max-w-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>CHANNEL ID</TableHead>
              <TableHead>CARRIER FREQ</TableHead>
              <TableHead>STATUS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-bold">CH-094 // DELTA</TableCell>
              <TableCell>142.8500 MHz</TableCell>
              <TableCell><Badge variant="secure" dot>LOCKED</Badge></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold">CH-112 // OMEGA</TableCell>
              <TableCell>224.1125 MHz</TableCell>
              <TableCell><Badge variant="caution" dot>SYNC</Badge></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    ),
    propsTable: [
      { name: "className", type: "string", defaultVal: "undefined", desc: "Custom table styling overrides" },
    ],
  },

  chart: {
    name: "chart",
    title: "DOT-MATRIX CRT CHART",
    category: "DATA",
    specCode: "OSCILLOSCOPE-RASTER",
    description: "Analog oscilloscope vector raster paths and FFT spectrum analyzer bars with phosphor glow.",
    codeSnippet: `import { Chart } from "@/components/ui/chart";

export function Demo() {
  return <Chart type="oscilloscope" color="emerald" />;
}`,
    renderDemo: () => (
      <div className="w-full max-w-md">
        <Chart type="oscilloscope" title="RF INCOMING ANALOG WAVEFORM" color="emerald" />
      </div>
    ),
    propsTable: [
      { name: "type", type: '"bar" | "line" | "oscilloscope"', defaultVal: '"bar"', desc: "Telemetry visualization mode" },
      { name: "color", type: '"amber" | "emerald" | "cyan"', defaultVal: '"amber"', desc: "Phosphor CRT color" },
    ],
  },

  separator: {
    name: "separator",
    title: "HAZARD SEPARATOR",
    category: "LAYOUT",
    specCode: "DIVIDER-HAZARD-STRIP",
    description: "Heavy physical dividers with diagonal hazard striping and engraved circuit labels.",
    codeSnippet: `import { Separator } from "@/components/ui/separator";

export function Demo() {
  return (
    <div className="space-y-4">
      <Separator variant="hazard" />
      <Separator label="CIRCUIT ISOLATION" />
    </div>
  );
}`,
    renderDemo: () => (
      <div className="w-full max-w-md space-y-4">
        <Separator variant="hazard" />
        <Separator label="BUS ISOLATION BARRIER // 1000V DC" />
        <Separator variant="danger-hazard" />
      </div>
    ),
    propsTable: [
      { name: "variant", type: '"default" | "hazard" | "danger-hazard" | "groove"', defaultVal: '"default"', desc: "Visual divider style" },
      { name: "label", type: "string", defaultVal: "undefined", desc: "Centered stencil text tag" },
    ],
  },

  "chassis-plate": {
    name: "chassis-plate",
    title: "CHASSIS ARMOR PLATE",
    category: "LAYOUT",
    specCode: "COLD-ROLLED STEEL ENCLOSURE",
    description: "Hardened structural equipment plate featuring recessed corner hex screws, 45-degree corner chamfers, stamped military specplates, and tactile relief bevels.",
    codeSnippet: `import { ChassisPlate } from "@/components/ui/chassis-plate";

export function Demo() {
  return (
    <ChassisPlate
      title="SYSTEM CORE ENCLOSURE"
      serial="MOD-94"
      spec="MIL-STD-810H"
      hasScrews
    >
      <div className="font-mono text-xs text-[var(--mkl-steel-1)] p-2">
        TRANSCEIVER LOGIC ONLINE
      </div>
    </ChassisPlate>
  );
}`,
    renderDemo: () => (
      <div className="w-full max-w-md">
        <ChassisPlate
          title="FIELD TRANSCEIVER BENCH"
          serial="MOD-84"
          spec="MIL-STD-810H"
          hasScrews
        >
          <div className="space-y-2 p-2 font-mono text-xs text-[var(--mkl-steel-1)]">
            <div className="flex justify-between text-white">
              <span>POWER BUS:</span>
              <span className="text-[var(--mkl-emerald)]">28.4V DC NOMINAL</span>
            </div>
            <div className="flex justify-between text-white">
              <span>RF PA STAGE:</span>
              <span className="text-[var(--mkl-amb)]">ACTIVE // 50 OHM LOAD</span>
            </div>
          </div>
        </ChassisPlate>
      </div>
    ),
    propsTable: [
      { name: "title", type: "string", defaultVal: "undefined", desc: "Top stenciled chassis plate header" },
      { name: "serial", type: "string", defaultVal: "undefined", desc: "Military serial stamping" },
      { name: "spec", type: "string", defaultVal: "undefined", desc: "Compliance spec indicator" },
      { name: "hasScrews", type: "boolean", defaultVal: "true", desc: "Renders corner hex head machine screws" },
      { name: "chamfer", type: '"none" | "sm" | "default" | "lg"', defaultVal: '"default"', desc: "45-degree cut corner radius" },
    ],
  },

  "lcd-screen": {
    name: "lcd-screen",
    title: "PHOSPHOR CRT / LCD SCREEN",
    category: "LAYOUT",
    specCode: "SCANLINE-TELEMETRY-DISPLAY",
    description: "High-contrast tactical display well with amber/green phosphor raster scanlines, inner lens reflections, and cathode phosphor bloom.",
    codeSnippet: `import { LCDScreen } from "@/components/ui/lcd-screen";

export function Demo() {
  return (
    <LCDScreen scanlines glow className="space-y-1">
      <div className="text-xs">FREQ: 142.850 MHZ // LOCK</div>
      <div className="text-lg font-bold">CARRIER DETECTED</div>
    </LCDScreen>
  );
}`,
    renderDemo: () => (
      <div className="w-full max-w-md">
        <LCDScreen scanlines glow className="space-y-2 p-4">
          <div className="flex items-center justify-between text-xs opacity-80">
            <span>CH-04 // SPECTRUM RECON</span>
            <span>RSSI: -42 dBm</span>
          </div>
          <div className="text-xl font-bold tracking-widest">
            BEACON: ACQUIRED
          </div>
          <div className="text-xs opacity-70">
            BURST TRANSMISSION INTERCEPT IN PROGRESS
          </div>
        </LCDScreen>
      </div>
    ),
    propsTable: [
      { name: "scanlines", type: "boolean", defaultVal: "true", desc: "Enables CSS raster scanline CRT effect" },
      { name: "glow", type: "boolean", defaultVal: "true", desc: "Enables cathode phosphor glow filter" },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(REGISTRY_SPECS).map((slug) => ({ slug }));
}

export default async function ComponentDocPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const spec = REGISTRY_SPECS[slug];

  if (!spec) {
    notFound();
  }

  return (
    <div className="space-y-10">
      {/* Title & Metadata Header */}
      <div>
        <div className="flex items-center gap-2 font-mono text-xs text-[var(--mkl-amb)] mb-1">
          <span>// SPEC: {spec.category}</span>
          <span>•</span>
          <span>{spec.specCode}</span>
        </div>
        <h1 className="font-sans text-3xl sm:text-4xl font-black uppercase tracking-wider text-white">
          {spec.title}
        </h1>
        <p className="font-mono text-sm text-[var(--mkl-steel-1)] mt-2">
          {spec.description}
        </p>
      </div>

      {/* Main Interactive Preview */}
      <ComponentPreview code={spec.codeSnippet} title={`${spec.name.toUpperCase()} // LIVE PREVIEW`}>
        {spec.renderDemo()}
      </ComponentPreview>

      {/* Installation Tabs */}
      <div>
        <h2 className="font-sans text-xl font-bold uppercase tracking-wide text-white mb-2">
          INSTALLATION
        </h2>
        <InstallTabs componentName={spec.name} sourceCode={spec.codeSnippet} />
      </div>

      {/* Props & API Metrology Table */}
      <ChassisPlate title="PROPS & HARDWARE METROLOGY" serial={`${spec.name.toUpperCase()}-API`}>
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
              {spec.propsTable.map((prop) => (
                <tr key={prop.name}>
                  <td className="py-2 pr-4 font-bold text-white">{prop.name}</td>
                  <td className="py-2 pr-4 text-[var(--mkl-amb)]">{prop.type}</td>
                  <td className="py-2 pr-4">{prop.defaultVal}</td>
                  <td className="py-2">{prop.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ChassisPlate>
    </div>
  );
}
