"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cn } from "@/registry/mkl45/lib/utils";

export interface ToggleProps
  extends React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> {
  hasLed?: boolean;
}

export const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  ToggleProps
>(({ className, hasLed = true, children, ...props }, ref) => {
  return (
    <TogglePrimitive.Root
      ref={ref}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 px-3.5 py-2 font-mono text-xs font-bold uppercase tracking-wider rounded-[3px] select-none",
        "bg-[var(--mkl-key-dark)] text-[var(--mkl-steel-1)] border-t border-l border-[#3E3C38] border-r border-b border-black",
        "shadow-[0_4px_0_var(--mkl-key-dark-shadow),0_6px_12px_rgba(0,0,0,0.65)] hover:text-white transition-all duration-80",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mkl-amb)]",
        "data-[state=on]:translate-y-[3px] data-[state=on]:bg-[var(--mkl-surface-high)] data-[state=on]:text-[var(--mkl-amb)] data-[state=on]:shadow-[0_1px_0_rgba(0,0,0,0.8),inset_0_2px_4px_rgba(0,0,0,0.5)] data-[state=on]:border-[var(--mkl-amb)]/60",
        "disabled:pointer-events-none disabled:opacity-40",
        className
      )}
      {...props}
    >
      {hasLed && (
        <span
          className="w-1.5 h-1.5 rounded-full border border-black/80 transition-all bg-[var(--mkl-amb-dim)] [[data-state=on]>&]:bg-[var(--mkl-amb)] [[data-state=on]>&]:shadow-[0_0_8px_#F2B01E,0_0_2px_#FFF]"
          aria-hidden="true"
        />
      )}
      {children}
    </TogglePrimitive.Root>
  );
});
Toggle.displayName = "Toggle";
