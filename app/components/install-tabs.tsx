"use client";

import * as React from "react";
import { Terminal, Copy, Check } from "lucide-react";
import { cn } from "@/registry/mkl45/lib/utils";

export type PackageManager = "npm" | "pnpm" | "yarn" | "bun";

interface InstallTabsProps {
  componentName: string;
  sourceCode?: string;
  className?: string;
}

export function InstallTabs({
  componentName,
  sourceCode,
  className,
}: InstallTabsProps) {
  const [activeTab, setActiveTab] = React.useState<"cli" | "manual">("cli");
  const [pm, setPm] = React.useState<PackageManager>("npm");
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    const saved = localStorage.getItem("mkl45-pm") as PackageManager;
    if (saved && ["npm", "pnpm", "yarn", "bun"].includes(saved)) {
      setPm(saved);
    }
  }, []);

  const handlePmChange = (newPm: PackageManager) => {
    setPm(newPm);
    localStorage.setItem("mkl45-pm", newPm);
  };

  const getCliCommand = () => {
    const registryUrl = `https://mkl-45.vercel.app/r/${componentName}.json`;
    switch (pm) {
      case "pnpm":
        return `pnpm dlx shadcn@latest add ${registryUrl}`;
      case "yarn":
        return `npx shadcn@latest add ${registryUrl}`;
      case "bun":
        return `bunx --bun shadcn@latest add ${registryUrl}`;
      case "npm":
      default:
        return `npx shadcn@latest add ${registryUrl}`;
    }
  };

  const command = getCliCommand();

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "rounded-md border border-[var(--mkl-surface-high)] bg-[var(--mkl-surface)] overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.5)] my-4",
        className
      )}
    >
      {/* Top Header / Switcher Bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-[var(--mkl-surface-mid)] bg-[var(--mkl-surface-low)] px-3 py-2 gap-2">
        {/* Method Switcher */}
        <div className="flex items-center gap-1 bg-[var(--mkl-surface)] p-1 rounded border border-[var(--mkl-surface-mid)]">
          <button
            type="button"
            onClick={() => setActiveTab("cli")}
            className={cn(
              "px-3 py-1 text-xs font-mono font-bold tracking-wider uppercase transition-all duration-80 rounded-[2px]",
              activeTab === "cli"
                ? "bg-[var(--mkl-acc)] text-white shadow-[0_2px_0_#8E4417]"
                : "text-[var(--mkl-steel-1)] hover:text-white"
            )}
          >
            CLI COMMAND
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("manual")}
            className={cn(
              "px-3 py-1 text-xs font-mono font-bold tracking-wider uppercase transition-all duration-80 rounded-[2px]",
              activeTab === "manual"
                ? "bg-[var(--mkl-acc)] text-white shadow-[0_2px_0_#8E4417]"
                : "text-[var(--mkl-steel-1)] hover:text-white"
            )}
          >
            MANUAL INSTALL
          </button>
        </div>

        {/* Package Manager Options (if CLI active) */}
        {activeTab === "cli" && (
          <div className="flex items-center gap-1 font-mono text-xs">
            {(["npm", "pnpm", "yarn", "bun"] as PackageManager[]).map((pkg) => (
              <button
                key={pkg}
                type="button"
                onClick={() => handlePmChange(pkg)}
                className={cn(
                  "px-2 py-0.5 uppercase transition-all duration-80 text-[11px] rounded-[2px]",
                  pm === pkg
                    ? "bg-[var(--mkl-surface-bright)] text-[var(--mkl-amb)] font-bold border border-[var(--mkl-amb)]/40 shadow-[0_0_6px_rgba(242,176,30,0.2)]"
                    : "text-[var(--mkl-steel-1)] hover:text-[var(--mkl-key)]"
                )}
              >
                {pkg}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Panel Body */}
      {activeTab === "cli" ? (
        <div className="relative p-4 font-mono text-xs bg-[var(--mkl-lcd)] text-[var(--mkl-lcd-ink)] lcd-screen flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 overflow-x-auto py-1">
            <Terminal className="h-4 w-4 text-[var(--mkl-amb)] shrink-0" />
            <code className="whitespace-nowrap font-bold tracking-wide select-all">
              {command}
            </code>
          </div>
          <button
            type="button"
            onClick={() => handleCopy(command)}
            className="shrink-0 relative inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-black uppercase tracking-wider rounded-[3px] bg-[var(--mkl-key-dark)] text-[var(--mkl-key)] border border-[var(--mkl-surface-high)] shadow-[0_2px_0_#000] active:translate-y-[1px] hover:border-[var(--mkl-amb)] transition-all"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-[var(--mkl-amb)]" />
                <span className="text-[10px] text-[var(--mkl-amb)] lcd-glow">COPIED</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span className="text-[10px]">COPY</span>
              </>
            )}
          </button>
        </div>
      ) : (
        <div className="p-4 space-y-4 font-mono text-xs text-[var(--mkl-steel-1)]">
          <p className="text-[var(--mkl-on-surface)]">
            1. Copy the source code into your project at{" "}
            <code className="text-[var(--mkl-amb)]">components/ui/{componentName}.tsx</code>
          </p>
          {sourceCode && (
            <div className="relative rounded border border-[var(--mkl-surface-mid)] bg-[var(--mkl-surface-lowest)] max-h-72 overflow-y-auto p-3 font-mono text-[11px] text-[var(--mkl-key)]">
              <button
                type="button"
                onClick={() => handleCopy(sourceCode)}
                className="absolute top-2 right-2 px-2 py-1 text-[10px] font-bold rounded bg-[var(--mkl-surface-high)] text-white hover:bg-[var(--mkl-acc)]"
              >
                COPY CODE
              </button>
              <pre className="whitespace-pre overflow-x-auto">{sourceCode}</pre>
            </div>
          )}
          <p>
            2. Ensure you have installed required dependencies:{" "}
            <code className="text-[var(--mkl-amb)]">class-variance-authority clsx tailwind-merge</code>
          </p>
        </div>
      )}
    </div>
  );
}
