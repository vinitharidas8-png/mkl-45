import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@/registry/mkl45/lib/utils";

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  label?: string;
  sublabel?: string;
}

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, label, sublabel, ...props }, ref) => {
  return (
    <div className="inline-flex items-start gap-2.5 select-none">
      <CheckboxPrimitive.Root
        ref={ref}
        className={cn(
          "peer relative h-5 w-5 shrink-0 rounded-[3px] transition-all duration-80 mt-0.5",
          "bg-[var(--mkl-surface-low)] border border-[var(--mkl-surface-high)]",
          "shadow-[inset_0_2px_4px_#000,0_1px_0_rgba(255,255,255,0.05)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mkl-amb)] focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--mkl-surface)]",
          "disabled:cursor-not-allowed disabled:opacity-40",
          "data-[state=checked]:bg-[var(--mkl-surface-high)] data-[state=checked]:border-[var(--mkl-amb)] data-[state=checked]:shadow-[0_0_8px_rgba(242,176,30,0.35)]",
          className
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator className="flex items-center justify-center text-[var(--mkl-amb)]">
          <Check className="h-3.5 w-3.5 stroke-[3]" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

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

Checkbox.displayName = "Checkbox";
