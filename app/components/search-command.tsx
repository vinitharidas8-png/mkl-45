"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Search, Terminal, ArrowRight, X } from "lucide-react";
import { DOCS_NAV } from "./site-sidebar";

interface SearchCommandProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchCommand({ open, onOpenChange }: SearchCommandProps) {
  const router = useRouter();
  const [query, setQuery] = React.useState("");

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
      if (e.key === "Escape" && open) {
        onOpenChange(false);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  if (!open) return null;

  // Flatten searchable nav items
  const allItems = DOCS_NAV.flatMap((g) =>
    g.items.map((i) => ({ ...i, group: g.title }))
  );

  const filtered = query.trim()
    ? allItems.filter(
        (i) =>
          i.title.toLowerCase().includes(query.toLowerCase()) ||
          i.group.toLowerCase().includes(query.toLowerCase())
      )
    : allItems.slice(0, 8);

  const handleSelect = (href: string) => {
    onOpenChange(false);
    setQuery("");
    router.push(href);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/70 backdrop-blur-sm animate-in fade-in-0 duration-150">
      <div className="relative w-full max-w-xl rounded-lg bg-[var(--mkl-surface)] border-2 border-[var(--mkl-surface-high)] shadow-[0_24px_48px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)] overflow-hidden">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-[var(--mkl-surface-mid)] bg-[var(--mkl-surface-low)] px-4 py-2 font-mono text-xs text-[var(--mkl-amb)]">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5" />
            <span className="font-bold tracking-widest uppercase">
              MKL-45 // COMMAND RECON HUD [CMD+K]
            </span>
          </div>
          <button
            onClick={() => onOpenChange(false)}
            className="text-[var(--mkl-steel-1)] hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Input Field */}
        <div className="flex items-center px-4 py-3 border-b border-[var(--mkl-surface-mid)] bg-[var(--mkl-surface)]">
          <Search className="w-4 h-4 text-[var(--mkl-amb)] mr-3 shrink-0" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a component name, spec, or category..."
            className="w-full bg-transparent font-mono text-sm text-[var(--mkl-on-surface)] placeholder:text-[var(--mkl-steel-2)] outline-none"
          />
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 font-mono text-xs">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-[var(--mkl-steel-1)]">
              // NO RECON RESULTS FOUND FOR &quot;{query}&quot;
            </div>
          ) : (
            <div className="space-y-1">
              {filtered.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => handleSelect(item.href)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded text-left text-[var(--mkl-on-surface)] hover:bg-[var(--mkl-surface-high)] hover:text-[var(--mkl-amb)] transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--mkl-acc)] opacity-70 group-hover:opacity-100 group-hover:bg-[var(--mkl-amb)]" />
                    <span className="font-bold">{item.title}</span>
                    <span className="text-[10px] text-[var(--mkl-steel-1)]">
                      // {item.group}
                    </span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Help Bar */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-[var(--mkl-surface-mid)] bg-[var(--mkl-surface-low)] font-mono text-[10px] text-[var(--mkl-steel-1)]">
          <span>NAVIGATION: [↑/↓] RECON SELECT</span>
          <span>DISARM: [ESC]</span>
        </div>
      </div>
    </div>
  );
}
