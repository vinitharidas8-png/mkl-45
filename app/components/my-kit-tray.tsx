"use client";

import * as React from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { Terminal, Download, Copy, Check, Trash2, X, ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/registry/mkl45/ui/button";
import { cn } from "@/registry/mkl45/lib/utils";

interface KitTrayContextType {
  selectedComponents: string[];
  toggleComponent: (name: string) => void;
  clearKit: () => void;
  selectAll: (names: string[]) => void;
}

export const KitContext = React.createContext<KitTrayContextType>({
  selectedComponents: [],
  toggleComponent: () => {},
  clearKit: () => {},
  selectAll: () => {},
});

export function KitProvider({ children }: { children: React.ReactNode }) {
  const [selected, setSelected] = React.useState<string[]>([]);

  // Hydrate from localStorage or URL query param (?kit=button,dialog)
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const urlParams = new URLSearchParams(window.location.search);
    const urlKit = urlParams.get("kit");
    if (urlKit) {
      const items = urlKit.split(",").filter(Boolean);
      setSelected(items);
      return;
    }

    const saved = localStorage.getItem("mkl45-kit");
    if (saved) {
      try {
        setSelected(JSON.parse(saved));
      } catch {}
    }
  }, []);

  const toggleComponent = (name: string) => {
    setSelected((prev) => {
      const next = prev.includes(name)
        ? prev.filter((i) => i !== name)
        : [...prev, name];
      localStorage.setItem("mkl45-kit", JSON.stringify(next));

      // Sync to URL
      if (typeof window !== "undefined") {
        const url = new URL(window.location.href);
        if (next.length > 0) {
          url.searchParams.set("kit", next.join(","));
        } else {
          url.searchParams.delete("kit");
        }
        window.history.replaceState({}, "", url.toString());
      }
      return next;
    });
  };

  const clearKit = () => {
    setSelected([]);
    localStorage.removeItem("mkl45-kit");
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.delete("kit");
      window.history.replaceState({}, "", url.toString());
    }
  };

  const selectAll = (names: string[]) => {
    setSelected(names);
    localStorage.setItem("mkl45-kit", JSON.stringify(names));
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("kit", names.join(","));
      window.history.replaceState({}, "", url.toString());
    }
  };

  return (
    <KitContext.Provider
      value={{
        selectedComponents: selected,
        toggleComponent,
        clearKit,
        selectAll,
      }}
    >
      {children}
      <MyKitTray />
    </KitContext.Provider>
  );
}

export function useKit() {
  return React.useContext(KitContext);
}

export function MyKitTray() {
  const { selectedComponents, toggleComponent, clearKit } = useKit();
  const [isOpen, setIsOpen] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const [pm, setPm] = React.useState<"npm" | "pnpm" | "yarn" | "bun">("npm");

  if (selectedComponents.length === 0) return null;

  // Auto-resolve dependencies (theme, utils)
  const resolvedList = Array.from(
    new Set([...selectedComponents, "theme", "utils"])
  );

  const command =
    pm === "pnpm"
      ? `pnpm dlx shadcn@latest add ${selectedComponents.map((c) => `@mkl45/${c}`).join(" ")}`
      : pm === "bun"
      ? `bunx --bun shadcn@latest add ${selectedComponents.map((c) => `@mkl45/${c}`).join(" ")}`
      : `npx shadcn@latest add ${selectedComponents.map((c) => `@mkl45/${c}`).join(" ")}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadZip = async () => {
    const zip = new JSZip();
    const folder = zip.folder("mkl45-kit");

    for (const comp of selectedComponents) {
      try {
        const res = await fetch(`/r/${comp}.json`);
        if (res.ok) {
          const data = await res.json();
          for (const f of data.files || []) {
            folder?.file(f.target || `${comp}.tsx`, f.content || "");
          }
        }
      } catch (err) {
        console.error("Failed to package component:", comp, err);
      }
    }

    // Add theme.css and utils.ts
    try {
      const themeRes = await fetch("/r/theme.json");
      if (themeRes.ok) {
        const themeData = await themeRes.json();
        folder?.file("theme.css", themeData.files?.[0]?.content || "");
      }
      const utilsRes = await fetch("/r/utils.json");
      if (utilsRes.ok) {
        const utilsData = await utilsRes.json();
        folder?.file("utils.ts", utilsData.files?.[0]?.content || "");
      }
    } catch {}

    const blob = await zip.generateAsync({ type: "blob" });
    saveAs(blob, "mkl45-selected-kit.zip");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 max-w-4xl mx-auto pointer-events-none">
      <div className="pointer-events-auto rounded-lg border-2 border-[var(--mkl-amb)] bg-[var(--mkl-surface)] shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_12px_rgba(242,176,30,0.3)] overflow-hidden font-mono text-xs">
        {/* Top Toggle Strip */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[var(--mkl-surface-low)] border-b border-[var(--mkl-surface-high)]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--mkl-amb)] shadow-[0_0_8px_var(--mkl-amb)] animate-pulse" />
            <span className="font-bold uppercase tracking-wider text-[var(--mkl-on-surface)]">
              MY SELECTION KIT ({selectedComponents.length} COMPONENTS ARMED)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-1 text-[11px] text-[var(--mkl-amb)] hover:text-white"
            >
              {isOpen ? "COLLAPSE TRAY" : "EXPAND TELEMETRY"}
              {isOpen ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={clearKit}
              title="Clear selection"
              className="text-[var(--mkl-steel-1)] hover:text-[var(--mkl-danger)] ml-2"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Expanded Panel */}
        {isOpen && (
          <div className="p-4 bg-[var(--mkl-surface)] space-y-4 border-b border-[var(--mkl-surface-mid)]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] text-[var(--mkl-steel-1)]">ACTIVE PAYLOAD:</span>
              {selectedComponents.map((name) => (
                <span
                  key={name}
                  className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[var(--mkl-surface-high)] text-[var(--mkl-amb)] border border-[var(--mkl-surface-mid)] text-[10px]"
                >
                  {name}
                  <button onClick={() => toggleComponent(name)}>
                    <X className="w-3 h-3 hover:text-white" />
                  </button>
                </span>
              ))}
            </div>

            <div className="text-[10px] text-[var(--mkl-steel-2)]">
              // AUTO-INCLUDED REGISTRY DEPENDENCIES: theme.css, utils.ts, class-variance-authority, clsx, tailwind-merge
            </div>
          </div>
        )}

        {/* Command Terminal Bar */}
        <div className="p-3 bg-[var(--mkl-lcd)] text-[var(--mkl-lcd-ink)] lcd-screen flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 overflow-x-auto">
            <Terminal className="w-4 h-4 text-[var(--mkl-amb)] shrink-0" />
            <code className="whitespace-nowrap font-bold select-all tracking-wide text-xs">
              {command}
            </code>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Button
              variant="primary"
              size="sm"
              onClick={handleCopy}
              className="gap-1.5 shadow-[0_2px_0_#8E4417]"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span className="lcd-glow">COPIED</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>COPY COMMAND</span>
                </>
              )}
            </Button>

            <Button
              variant="secondary"
              size="sm"
              onClick={handleDownloadZip}
              className="gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD ZIP</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
