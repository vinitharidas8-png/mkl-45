import * as React from "react";
import { cn } from "@/registry/mkl45/lib/utils";

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  serial?: string;
}

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, label, serial, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex flex-col p-2 rounded-md bg-[var(--mkl-surface)] border border-[var(--mkl-surface-high)] shadow-[inset_0_2px_4px_#000]",
          className
        )}
        {...props}
      >
        {(label || serial) && (
          <div className="flex items-center justify-between pb-1.5 px-0.5 border-b border-[var(--mkl-surface-mid)] mb-2 font-mono text-[10px]">
            {label && (
              <span className="uppercase text-[var(--mkl-steel-1)] font-bold tracking-wider">
                {label}
              </span>
            )}
            {serial && (
              <span className="text-[var(--mkl-steel-2)]">[{serial}]</span>
            )}
          </div>
        )}
        <div className="inline-flex items-center gap-1">{children}</div>
      </div>
    );
  }
);
ButtonGroup.displayName = "ButtonGroup";
