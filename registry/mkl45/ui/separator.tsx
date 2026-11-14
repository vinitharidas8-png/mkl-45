import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "@/registry/mkl45/lib/utils";

export interface SeparatorProps
  extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {
  variant?: "default" | "hazard" | "danger-hazard" | "groove";
  label?: string;
}

export const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(
  (
    {
      className,
      orientation = "horizontal",
      decorative = true,
      variant = "default",
      label,
      ...props
    },
    ref
  ) => {
    if (variant === "hazard" || variant === "danger-hazard") {
      return (
        <div className="relative w-full py-2">
          <div
            className={cn(
              "h-2 w-full rounded-[1px] shadow-[inset_0_1px_2px_#000]",
              variant === "danger-hazard" ? "hazard-stripes-danger" : "hazard-stripes",
              className
            )}
          />
        </div>
      );
    }

    if (label) {
      return (
        <div className="relative flex items-center py-2 select-none font-mono text-[10px] text-[var(--mkl-amb)]">
          <div className="flex-grow border-t border-[var(--mkl-surface-high)]" />
          <span className="flex-shrink mx-3 px-2 py-0.5 rounded bg-[var(--mkl-surface-low)] border border-[var(--mkl-surface-high)] font-bold tracking-widest uppercase">
            {label}
          </span>
          <div className="flex-grow border-t border-[var(--mkl-surface-high)]" />
        </div>
      );
    }

    return (
      <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={cn(
          "shrink-0 bg-[var(--mkl-surface-high)]",
          orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
          variant === "groove" && "shadow-[0_1px_0_rgba(255,255,255,0.08)]",
          className
        )}
        {...props}
      />
    );
  }
);
Separator.displayName = "Separator";
