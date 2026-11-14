import * as React from "react";
import { cn } from "@/registry/mkl45/lib/utils";

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  segments?: number;
}

export function Progress({
  className,
  value = 50,
  max = 100,
  segments = 12,
  ...props
}: ProgressProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  const activeSegments = Math.round((percentage / 100) * segments);

  return (
    <div className={cn("w-full space-y-1.5 font-mono", className)} {...props}>
      {/* 12-Segment Hardened Chevron Bar */}
      <div className="flex items-center gap-1 p-1 rounded bg-[var(--mkl-surface-lowest)] border border-[var(--mkl-surface-high)] shadow-[inset_0_2px_4px_#000]">
        {Array.from({ length: segments }).map((_, i) => {
          const isLit = i < activeSegments;
          return (
            <div
              key={i}
              className={cn(
                "h-4 flex-1 rounded-[1px] transition-all duration-100",
                isLit
                  ? "bg-[var(--mkl-amb)] shadow-[0_0_8px_var(--mkl-amb),inset_0_1px_1px_#FFF]"
                  : "bg-[var(--mkl-amb-dim)]/40 border border-black/40"
              )}
            />
          );
        })}
      </div>

      <div className="flex items-center justify-between text-[10px] text-[var(--mkl-steel-1)] px-0.5">
        <span>BUFFER LEVEL</span>
        <span className="text-[var(--mkl-amb)] font-bold">{Math.round(percentage)}%</span>
      </div>
    </div>
  );
}
