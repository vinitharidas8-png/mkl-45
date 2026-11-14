"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Radio, Search, Moon, Sun } from "lucide-react";
import { cn } from "@/registry/mkl45/lib/utils";
import * as React from "react";

export function SiteHeader({ onOpenSearch }: { onOpenSearch?: () => void }) {
  const pathname = usePathname();
  const [isDark, setIsDark] = React.useState(false);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--mkl-surface-high)] bg-[var(--mkl-surface-low)] shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
      <div className="flex h-16 items-center justify-between px-4 sm:px-8 max-w-7xl mx-auto">
        {/* Brand identity */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-[4px] bg-[var(--mkl-acc)] flex items-center justify-center border-t border-l border-[var(--mkl-acc-light)] border-r border-b border-[var(--mkl-acc-dark)] shadow-[0_2px_0_#8E4417]">
              <Radio className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-sans text-lg font-black tracking-widest uppercase text-white group-hover:text-[var(--mkl-acc)] transition-colors">
                MKL-45
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--mkl-steel-1)]">
                INTERCEPTOR UI // REV 8.4
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 font-mono text-xs">
            {[
              { name: "DOCS", href: "/docs" },
              { name: "COMPONENTS", href: "/components" },
              { name: "THEMES", href: "/themes" },
              { name: "BLOCKS", href: "/blocks" },
            ].map((link) => {
              const active = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-3 py-1.5 uppercase font-bold tracking-wider rounded-[3px] transition-all duration-80",
                    active
                      ? "bg-[var(--mkl-acc)] text-white shadow-[0_2px_0_#8E4417]"
                      : "text-[var(--mkl-steel-1)] hover:text-white hover:bg-[var(--mkl-surface)]"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-3">
          {/* Quick Search Keycap */}
          <button
            type="button"
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 rounded-[4px] bg-[var(--mkl-surface)] border border-[var(--mkl-surface-high)] text-[var(--mkl-steel-1)] hover:text-white hover:border-[var(--mkl-steel-1)] text-xs font-mono shadow-[inset_0_1px_3px_#000] transition-colors"
          >
            <Search className="w-3.5 h-3.5 text-[var(--mkl-amb)]" />
            <span className="hidden sm:inline">SEARCH SPECS...</span>
            <kbd className="hidden sm:inline-block ml-2 px-1 py-0.5 rounded text-[10px] bg-[var(--mkl-surface-low)] text-[var(--mkl-amb)] border border-black/80 shadow-[0_1px_0_#000]">
              ⌘K
            </kbd>
          </button>

          {/* Light/Dark Toggle Keycap */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="h-9 w-9 rounded-[4px] flex items-center justify-center bg-[var(--mkl-key-dark)] border border-[var(--mkl-surface-high)] text-[var(--mkl-amb)] shadow-[0_2px_0_#000] active:translate-y-[1px] hover:border-[var(--mkl-amb)] transition-all"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* GitHub Source Link */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="h-9 px-3 rounded-[4px] flex items-center gap-2 bg-[var(--mkl-key-dark)] border border-[var(--mkl-surface-high)] text-[var(--mkl-key)] font-mono text-xs font-bold shadow-[0_2px_0_#000] active:translate-y-[1px] hover:text-white transition-all"
          >
            <span className="hidden md:inline">GITHUB</span>
          </a>
        </div>
      </div>
    </header>
  );
}
