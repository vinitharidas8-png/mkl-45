"use client";

import * as React from "react";
import { cn } from "@/registry/mkl45/lib/utils";

export interface RotaryKnobProps {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (val: number) => void;
  label?: string;
  serial?: string;
  className?: string;
}

export function RotaryKnob({
  value = 50,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  label,
  serial = "ATTN-01",
  className,
}: RotaryKnobProps) {
  const [internalVal, setInternalVal] = React.useState(value);
  const knobRef = React.useRef<HTMLDivElement>(null);
  const isDragging = React.useRef(false);
  const startY = React.useRef(0);
  const startVal = React.useRef(value);

  const currentVal = value !== undefined ? value : internalVal;
  // Map value to angle (-135deg to +135deg = 270deg sweep)
  const percent = (currentVal - min) / (max - min);
  const angle = -135 + percent * 270;

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startY.current = e.clientY;
    startVal.current = currentVal;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    const deltaY = startY.current - e.clientY;
    const range = max - min;
    const change = (deltaY / 150) * range;
    let nextVal = Math.round((startVal.current + change) / step) * step;
    nextVal = Math.max(min, Math.min(max, nextVal));
    setInternalVal(nextVal);
    onChange?.(nextVal);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      className={cn(
        "inline-flex flex-col items-center p-3 rounded bg-[var(--mkl-surface)] border border-[var(--mkl-surface-high)] shadow-[0_6px_16px_rgba(0,0,0,0.5)] select-none",
        className
      )}
    >
      {(label || serial) && (
        <div className="flex items-center justify-between w-full pb-2 mb-2 border-b border-[var(--mkl-surface-mid)] font-mono text-[10px]">
          {label && (
            <span className="font-bold uppercase text-[var(--mkl-on-surface)]">
              {label}
            </span>
          )}
          {serial && (
            <span className="text-[var(--mkl-steel-1)]">[{serial}]</span>
          )}
        </div>
      )}

      {/* Physical knurled aluminum knob body */}
      <div className="p-1 rounded-full bg-[#0e0d0c] shadow-[inset_0_3px_8px_rgba(0,0,0,0.95),0_1px_1px_rgba(255,255,255,0.12)]">
        <div
          ref={knobRef}
          onMouseDown={handleMouseDown}
          className="relative w-16 h-16 rounded-full cursor-ns-resize flex items-center justify-center bg-gradient-to-b from-[#6c6b65] via-[#4d4c47] to-[#2e2d2a] border border-white/25 shadow-[0_6px_16px_rgba(0,0,0,0.85),inset_0_1px_2px_rgba(255,255,255,0.5),inset_0_-2px_4px_rgba(0,0,0,0.7)]"
        >
          {/* Knurled outer rim texture */}
          <div className="absolute inset-1 rounded-full border border-black/50 bg-[#161514] shadow-[inset_0_2px_4px_#000]" />

          {/* Center rotating core with indicator notch */}
          <div
            className="relative w-10 h-10 rounded-full bg-gradient-to-b from-[#2a2926] to-[#141312] border border-black/80 shadow-[inset_0_2px_4px_#000,0_1px_1px_rgba(255,255,255,0.2)] flex items-center justify-center transition-transform duration-75"
            style={{ transform: `rotate(${angle}deg)` }}
          >
            {/* High-visibility amber indicator notch */}
            <span className="absolute top-1 w-1 h-3.5 rounded-full bg-[var(--mkl-amb)] shadow-[0_0_8px_var(--mkl-amb)]" />
          </div>
        </div>
      </div>

      {/* Telemetry LCD readout under knob */}
      <div className="mt-3 px-2 py-0.5 rounded bg-[var(--mkl-lcd)] border border-black/80 font-mono text-[11px] text-[var(--mkl-lcd-ink)] lcd-glow shadow-[inset_0_1px_3px_#000]">
        VAL: {currentVal.toFixed(0)}
      </div>
    </div>
  );
}
