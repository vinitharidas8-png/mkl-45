import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import { Button } from "@/registry/mkl45/ui/button";
import { ChassisPlate } from "@/registry/mkl45/ui/chassis-plate";
import { CopyButton } from "@/app/components/copy-button";

export default function InstallationDocsPage() {
  const compJson = `{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "registries": {
    "@mkl45": "https://mkl-45.vercel.app/r/{name}.json"
  }
}`;

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-2 font-mono text-xs text-[var(--mkl-amb)] mb-1">
          <span>// SPEC: 00 SYSTEM INITIALIZATION</span>
          <span>•</span>
          <span>MIL-STD-810H</span>
        </div>
        <h1 className="font-sans text-3xl sm:text-4xl font-black uppercase tracking-wider text-white">
          INSTALLATION &amp; REGISTRY SETUP
        </h1>
        <p className="font-mono text-sm text-[var(--mkl-steel-1)] mt-2">
          How to configure the MKL-45 registry provider in your existing React / Next.js / Vite codebase and install components with the official shadcn CLI.
        </p>
      </div>

      {/* Step 1 */}
      <ChassisPlate title="STEP 01: INITIALIZE SHADCN CLI" serial="CLI-INIT-01">
        <div className="space-y-3 font-mono text-xs">
          <p className="text-[var(--mkl-steel-1)]">
            If your project does not have shadcn initialized yet, run:
          </p>
          <div className="p-3 rounded bg-[var(--mkl-surface-low)] border border-[var(--mkl-surface-mid)] text-[var(--mkl-amb)] flex items-center justify-between">
            <code>npx shadcn@latest init</code>
            <CopyButton value="npx shadcn@latest init" />
          </div>
        </div>
      </ChassisPlate>

      {/* Step 2 */}
      <ChassisPlate title="STEP 02: CONFIGURE @MKL45 REGISTRY NAMESPACE" serial="CONFIG-JSON">
        <div className="space-y-3 font-mono text-xs">
          <p className="text-[var(--mkl-steel-1)]">
            Add the <code className="text-[var(--mkl-amb)]">@mkl45</code> registry to your <code className="text-[var(--mkl-amb)]">components.json</code>:
          </p>
          <div className="relative p-4 rounded bg-[var(--mkl-surface-low)] border border-[var(--mkl-surface-mid)] text-[var(--mkl-on-surface)] overflow-x-auto">
            <div className="absolute top-2 right-2">
              <CopyButton value={compJson} />
            </div>
            <pre className="text-[11px] text-[var(--mkl-amb)]">{compJson}</pre>
          </div>
        </div>
      </ChassisPlate>

      {/* Step 3 */}
      <ChassisPlate title="STEP 03: INSTALL HARDWARE COMPONENTS" serial="PAYLOAD-ADD">
        <div className="space-y-4 font-mono text-xs">
          <p className="text-[var(--mkl-steel-1)]">
            Add any selection of components with one command:
          </p>
          <div className="p-3 rounded bg-[var(--mkl-lcd)] text-[var(--mkl-lcd-ink)] lcd-screen flex items-center justify-between">
            <code>npx shadcn@latest add @mkl45/button @mkl45/dialog @mkl45/input</code>
            <CopyButton value="npx shadcn@latest add @mkl45/button @mkl45/dialog @mkl45/input" />
          </div>
          <p className="text-[10px] text-[var(--mkl-steel-2)]">
            // Dependencies (theme tokens, utils, and Radix behaviors) are automatically downloaded and placed in your component directory.
          </p>
        </div>
      </ChassisPlate>

      <div className="pt-2">
        <Link href="/docs/components/button">
          <Button variant="primary">
            PROCEED TO BUTTON SPECIFICATIONS <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
