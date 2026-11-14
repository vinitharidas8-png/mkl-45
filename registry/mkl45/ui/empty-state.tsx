import * as React from "react";
import { Radio } from "lucide-react";
import { cn } from "@/registry/mkl45/lib/utils";

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  code?: string;
}

export function EmptyState({
  className,
  title = "NO SIGNAL DETECTED",
  description = "Awaiting frequency lock from remote transmitter array.",
  code = "ERR-404-CARRIER-LOST",
  children,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "rounded-lg border-2 border-[var(--mkl-surface-high)] bg-[var(--mkl-lcd)] p-8 text-center font-mono text-xs text-[var(--mkl-lcd-ink)] lcd-screen shadow-[inset_0_3px_10px_#000] space-y-4",
        className
      )}
      {...props}
    >
      <div className="w-12 h-12 mx-auto rounded-full bg-[var(--mkl-surface-low)] border border-black/80 flex items-center justify-center text-[var(--mkl-amb)] shadow-[0_0_12px_rgba(242,176,30,0.3)]">
        <Radio className="w-6 h-6 animate-pulse" />
      </div>

      <div className="space-y-1">
        <div className="font-bold uppercase tracking-widest text-base lcd-glow">
          {title}
        </div>
        <p className="text-[var(--mkl-steel-1)] max-w-sm mx-auto leading-relaxed">
          {description}
        </p>
      </div>

      {code && (
        <span className="inline-block px-2.5 py-1 rounded bg-[var(--mkl-surface-low)] border border-black text-[10px] text-[var(--mkl-danger)] font-bold">
          [{code}]
        </span>
      )}

      {children && <div className="pt-2">{children}</div>}
    </div>
  );
}
