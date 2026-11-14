import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/registry/mkl45/lib/utils";

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
  label?: string;
  sublabel?: string;
}

export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, label, sublabel, ...props }, ref) => {
  return (
    <div className="inline-flex items-center gap-3 select-none">
      <SwitchPrimitive.Root
        ref={ref}
        className={cn(
          "peer inline-flex h-6 w-12 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200",
          "bg-[var(--mkl-surface-lowest)] border border-[var(--mkl-surface-high)] shadow-[inset_0_2px_5px_#000]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mkl-amb)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--mkl-surface)]",
          "disabled:cursor-not-allowed disabled:opacity-40",
          "data-[state=checked]:bg-[var(--mkl-surface-high)] data-[state=checked]:border-[var(--mkl-amb)]/60",
          className
        )}
        {...props}
      >
        <SwitchPrimitive.Thumb
          className={cn(
            "pointer-events-none block h-5 w-5 rounded-full transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
            "bg-[var(--mkl-steel-1)] border border-white/40 shadow-[0_2px_4px_rgba(0,0,0,0.6)]",
            "data-[state=checked]:translate-x-6 data-[state=checked]:bg-[var(--mkl-acc)] data-[state=checked]:shadow-[0_0_8px_var(--mkl-acc)]",
            "data-[state=unchecked]:translate-x-0.5"
          )}
        />
      </SwitchPrimitive.Root>

      {(label || sublabel) && (
        <div className="flex flex-col leading-tight">
          {label && (
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--mkl-on-surface)]">
              {label}
            </span>
          )}
          {sublabel && (
            <span className="font-mono text-[10px] text-[var(--mkl-steel-1)]">
              {sublabel}
            </span>
          )}
        </div>
      )}
    </div>
  );
});

Switch.displayName = "Switch";
