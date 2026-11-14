# MKL-45 INTERCEPTOR UI SYSTEM

**Standard:** MIL-STD-810H / Hardened Interceptor UI Architecture REV 8.4  
**Chassis Reference:** Unit 73 // Sub-Station Alpha // Comm-Sec D9  
**Registry Homepage:** [https://mkl-45.vercel.app](https://mkl-45.vercel.app)

---

## Overview

**MKL-45** is an open-source, ruggedized React component library and shadcn/ui-compatible registry engineered for mission-critical frontends. It delivers an analog-digital tactical transceiver aesthetic: cut-corner cold-rolled steel faceplates, Cerakote rust-orange enamel finishes, phosphor CRT/LCD scanline screens, and mechanical keycaps with authentic 80ms down-stroke travel and acoustic depression depth.

Like **shadcn/ui**, MKL-45 is **not** a black-box npm package. Components are copied directly into your codebase where you own, inspect, and modify the source code.

---

## Tech Stack

- **Framework:** Next.js (App Router) + TypeScript Strict Mode
- **Styling:** Tailwind CSS v4 + Pure CSS Variables (`theme.css`)
- **Behavior & Accessibility:** Radix UI Primitives (ARIA compliant, keyboard navigation, focus trapping)
- **Variants:** Class Variance Authority (`cva`) + `tailwind-merge` (`cn()`)
- **Icons:** Lucide Icons & Tactical Stencil SVGs
- **Deployment:** Vercel Static Export

---

## Quick Start (shadcn CLI)

### 1. Install via Direct Registry URL
Install any individual component directly into your project:

```bash
# Add tactile mechanical keycap button
npx shadcn@latest add https://mkl-45.vercel.app/r/button.json

# Add armored bolted dialog
npx shadcn@latest add https://mkl-45.vercel.app/r/dialog.json

# Add CRT amber data input terminal
npx shadcn@latest add https://mkl-45.vercel.app/r/input.json
```

### 2. Configure `@mkl45` Registry Namespace
Add the `@mkl45` registry provider to your `components.json`:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "registries": {
    "@mkl45": "https://mkl-45.vercel.app/r/{name}.json"
  }
}
```

Then install any selection of components using the short namespace:

```bash
npx shadcn@latest add @mkl45/button @mkl45/dialog @mkl45/input @mkl45/tabs @mkl45/chart
```

---

## Hardware Design Tokens

| Token | CSS Variable | Hex / Value | Function |
|---|---|---|---|
| **Sand Canvas** | `--mkl-bg` | `#D8CCB6` | Neutral chassis baseline deck |
| **Enamel Orange** | `--mkl-acc` | `#D9712F` | Primary triggers, critical actions |
| **Hazard Amber** | `--mkl-amb` | `#F2B01E` | Caution striping, LED jewels, warnings |
| **LCD Resins** | `--mkl-lcd` | `#150E00` | Recessed display screen wells |
| **Phosphor Ink** | `--mkl-lcd-ink`| `#FFB000` | Dot-matrix CRT text & scanlines |
| **Aged Steel** | `--mkl-steel-1`| `#A09F9A` | Cold-rolled armor faceplates |
| **PBT Bone** | `--mkl-key` | `#D9D7D0` | Alphanumeric mechanical keycaps |
| **Zero-Purge Red**| `--mkl-danger`| `#D32F2F` | Emergency override, thermite purge |
| **Key Travel** | `--mkl-tp` | `80ms` | Mechanical key depression down-stroke |

---

## One-Click "My Kit" Selection Tray

Visit `/components` on the documentation website to select multiple components. The persistent floating **My Kit** tray:
1. Automatically includes required registry dependencies (`theme.css`, `utils.ts`).
2. Generates a combined single installation CLI command for `npm`, `pnpm`, `yarn`, or `bun`.
3. Synchronizes your selection to the URL (`?kit=button,dialog,input`) for instant team sharing.
4. Provides a one-click **Download ZIP** button containing raw `.tsx` source files and CSS tokens.

---

## Repository Architecture

```
/registry/mkl45/ui/*.tsx          # Source of truth component library
/registry/mkl45/lib/utils.ts      # cn() class merge helper
/registry/mkl45/styles/theme.css  # Hardware tokens & texture shaders
/registry.json                    # shadcn registry manifest
/public/r/*.json                  # Generated registry JSON distribution items
/app/(docs)/...                   # Documentation site (Next.js App Router)
/scripts/build-registry.ts        # Bundler generating public/r/*.json
/scripts/validate-registry.ts     # Integrity validation script
```

---

## Development Scripts

```bash
# Start local docs server
npm run dev

# Rebuild public/r JSON registry distribution files
npm run registry:build

# Validate registry integrity and JSON schemas
npm run registry:validate

# Production export build
npm run build
```

---

**MKL-45** // MIL-STD-810H REV 8.4 // TRANSMIT COMM ACTIVE
