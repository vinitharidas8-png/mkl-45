"use client";

import * as React from "react";
import { cn } from "@/registry/mkl45/lib/utils";

export interface HoldToConfirmProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  holdDurationMs?: number;
  onConfirm?: () => void;
  label?: string;
}

export function HoldToConfirm({
  className,
  holdDurationMs = 2000,
  onConfirm,
  label = "HOLD 2S TO CONFIRM",
  ...props
}: HoldToConfirmProps) {
  const [progress, setProgress] = React.useState(0);
  const [isHolding, setIsHolding] = React.useState(false);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);
  const startRef = React.useRef<number>(0);

  const startHold = () => {
    setIsHolding(true);
    startRef.current = Date.now();
    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startRef.current;
      const current = Math.min(100, (elapsed / holdDurationMs) * 100);
      setProgress(current);
      if (current >= 100) {
        clearInterval(timerRef.current!);
        onConfirm?.();
        setIsHolding(false);
        setProgress(0);
      }
    }, 20);
  };

  const endHold = () => {
    setIsHolding(false);
    setProgress(0);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  return (
    <button
      type="button"
      onMouseDown={startHold}
      onMouseUp={endHold}
      onMouseLeave={endHold}
      onTouchStart={startHold}
      onTouchEnd={endHold}
      className={cn(
        "relative overflow-hidden inline-flex items-center justify-center h-12 px-5 font-mono text-xs font-black uppercase tracking-wider rounded-[4px] select-none",
        "bg-[var(--mkl-surface-low)] text-[var(--mkl-danger)] border border-[var(--mkl-danger)]/60 shadow-[0_4px_0_#400E0E,0_6px_12px_rgba(0,0,0,0.6)]",
        "active:translate-y-[2px] transition-all duration-80",
        className
      )}
      {...props}
    >
      {/* Progress fill animation bar */}
      <div
        className="absolute left-0 top-0 bottom-0 bg-[var(--mkl-danger)] opacity-30 transition-all duration-75 pointer-events-none"
        style={{ width: `${progress}%` }}
      />
      <span className="relative z-10 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[var(--mkl-danger)] animate-pulse" />
        {label} ({Math.round(progress)}%)
      </span>
    </button>
  );
}
