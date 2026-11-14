"use client";

import * as React from "react";
import { cn } from "@/registry/mkl45/lib/utils";

export interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "bar" | "line" | "oscilloscope";
  data?: number[];
  title?: string;
  serial?: string;
  color?: "amber" | "emerald" | "cyan";
}

export function Chart({
  className,
  type = "bar",
  data = [12, 45, 68, 92, 74, 55, 83, 62, 40, 78, 95, 30, 60, 88],
  title,
  serial = "FFT-16-BAND",
  color = "amber",
  ...props
}: ChartProps) {
  const maxVal = Math.max(...data, 100);

  const colorStyles = {
    amber: {
      bar: "bg-[var(--mkl-amb)] shadow-[0_0_8px_var(--mkl-amb)]",
      line: "#F2B01E",
      text: "text-[var(--mkl-amb)]",
    },
    emerald: {
      bar: "bg-[#00E676] shadow-[0_0_8px_#00E676]",
      line: "#00E676",
      text: "text-[#00E676]",
    },
    cyan: {
      bar: "bg-[var(--mkl-cyan)] shadow-[0_0_8px_var(--mkl-cyan)]",
      line: "#0288D1",
      text: "text-[var(--mkl-cyan)]",
    },
  };

  const selectedTheme = colorStyles[color];

  return (
    <div
      className={cn(
        "rounded-lg border-2 border-[var(--mkl-surface-high)] bg-[var(--mkl-lcd)] p-4 font-mono text-xs shadow-[inset_0_3px_10px_#000] lcd-screen",
        className
      )}
      {...props}
    >
      {/* Top Telemetry Header */}
      <div className="flex items-center justify-between pb-2 mb-3 border-b border-[var(--mkl-lcd-ghost)] text-[10px]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--mkl-amb)] shadow-[0_0_6px_var(--mkl-amb)] animate-pulse" />
          <span className={cn("font-bold uppercase tracking-wider", selectedTheme.text)}>
            {title || "CRT-MONITOR // ANALOG RF RASTER"}
          </span>
        </div>
        <span className="text-[var(--mkl-steel-1)]">[{serial}]</span>
      </div>

      {/* Render Chart Mode */}
      {type === "bar" ? (
        <div className="flex items-end gap-1.5 h-32 pt-2 px-1 border-b border-[var(--mkl-lcd-ghost)]">
          {data.map((val, idx) => {
            const heightPercent = Math.min(100, Math.max(8, (val / maxVal) * 100));
            return (
              <div
                key={idx}
                className="flex-1 flex flex-col justify-end items-center h-full group relative"
              >
                <div
                  style={{ height: `${heightPercent}%` }}
                  className={cn("w-full rounded-[1px] transition-all duration-150", selectedTheme.bar)}
                />
              </div>
            );
          })}
        </div>
      ) : (
        /* Oscilloscope Vector Line Path */
        <div className="h-32 w-full flex items-center justify-center relative overflow-hidden">
          {/* Phosphor Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,176,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,176,0,0.08)_1px,transparent_1px)] bg-[size:16px_16px]" />

          <svg className="w-full h-full relative z-10" viewBox="0 0 400 100" preserveAspectRatio="none">
            <path
              d="M 0 50 Q 50 10, 100 50 T 200 50 T 300 50 T 400 50"
              fill="none"
              stroke={selectedTheme.line}
              strokeWidth="2.5"
              className="drop-shadow-[0_0_8px_rgba(255,176,0,0.8)]"
            />
            <path
              d="M 0 50 Q 40 85, 90 50 T 180 50 T 270 50 T 400 50"
              fill="none"
              stroke={selectedTheme.line}
              strokeWidth="1.2"
              strokeDasharray="4 2"
              opacity="0.6"
            />
          </svg>
        </div>
      )}

      {/* Bottom CRT Readout Scale */}
      <div className="flex items-center justify-between pt-2 text-[10px] text-[var(--mkl-steel-1)]">
        <span>TIMEBASE: 50μs/DIV</span>
        <span>RF-IN: 50Ω BALANCED</span>
        <span className={cn("font-bold", selectedTheme.text)}>SYNC: LOCKED</span>
      </div>
    </div>
  );
}
