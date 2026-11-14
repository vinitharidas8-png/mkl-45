import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "@/registry/mkl45/lib/utils";

export interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  serial?: string;
}

export const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, serial, children, ...props }, ref) => {
  return (
    <div className="flex items-center justify-between mb-1.5 font-mono">
      <LabelPrimitive.Root
        ref={ref}
        className={cn(
          "text-xs font-bold uppercase tracking-wider text-[var(--mkl-on-surface)] select-none cursor-pointer",
          "peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          className
        )}
        {...props}
      >
        {children}
      </LabelPrimitive.Root>
      {serial && (
        <span className="text-[10px] text-[var(--mkl-steel-1)] opacity-70">
          [{serial}]
        </span>
      )}
    </div>
  );
});

Label.displayName = "Label";
