"use client";

import * as React from "react";
import { Eye, Code2 } from "lucide-react";
import { cn } from "@/registry/mkl45/lib/utils";
import { CopyButton } from "./copy-button";

interface ComponentPreviewProps {
  children: React.ReactNode;
  code?: string;
  title?: string;
  className?: string;
}

export function ComponentPreview({
  children,
  code,
  title,
  className,
}: ComponentPreviewProps) {
  const [tab, setTab] = React.useState<"preview" | "code">("preview");

  return (
    <div
      className={cn(
        "rounded-lg border border-[var(--mkl-surface-high)] bg-[var(--mkl-surface)] overflow-hidden shadow-[0_14px_36px_rgba(0,0,0,0.55),inset_1px_1px_0_rgba(255,255,255,0.12),inset_-2px_-2px_0_rgba(0,0,0,0.6)] my-6",
        className
      )}
    >
      {/* Top Header Plate */}
      <div className="flex items-center justify-between border-b border-[var(--mkl-surface-mid)] bg-[var(--mkl-surface-low)] px-4 py-2.5">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--mkl-amb)] shadow-[0_0_6px_var(--mkl-amb)]" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--mkl-on-surface)]">
              {title || "LIVE TELEMETRY PREVIEW"}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Preview / Code Switcher */}
          <div className="flex items-center gap-1 bg-[var(--mkl-surface)] p-0.5 rounded border border-[var(--mkl-surface-mid)]">
            <button
              type="button"
              onClick={() => setTab("preview")}
              className={cn(
                "flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-bold tracking-wider uppercase transition-all duration-80 rounded-[2px]",
                tab === "preview"
                  ? "bg-[var(--mkl-acc)] text-white shadow-[0_2px_0_#8E4417]"
                  : "text-[var(--mkl-steel-1)] hover:text-white"
              )}
            >
              <Eye className="h-3 w-3" />
              PREVIEW
            </button>
            <button
              type="button"
              onClick={() => setTab("code")}
              className={cn(
                "flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-bold tracking-wider uppercase transition-all duration-80 rounded-[2px]",
                tab === "code"
                  ? "bg-[var(--mkl-acc)] text-white shadow-[0_2px_0_#8E4417]"
                  : "text-[var(--mkl-steel-1)] hover:text-white"
              )}
            >
              <Code2 className="h-3 w-3" />
              CODE
            </button>
          </div>

          {code && tab === "code" && <CopyButton value={code} />}
        </div>
      </div>

      {/* Viewport Content */}
      {tab === "preview" ? (
        <div className="relative min-h-[220px] p-8 flex items-center justify-center bg-[var(--mkl-bg)] bg-gradient-to-br from-[var(--mkl-bg)] to-[#C8BCA6] transition-colors overflow-x-auto">
          {children}
        </div>
      ) : (
        <div className="p-4 bg-[var(--mkl-lcd)] text-[var(--mkl-lcd-ink)] font-mono text-xs max-h-96 overflow-y-auto">
          <pre className="whitespace-pre overflow-x-auto">{code || "// No code available"}</pre>
        </div>
      )}
    </div>
  );
}
