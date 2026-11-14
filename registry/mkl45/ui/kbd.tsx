import * as React from "react";
import { cn } from "@/registry/mkl45/lib/utils";

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {}

export const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <kbd
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center h-5 min-w-[20px] px-1.5 text-[10px] font-mono font-bold uppercase rounded-[2px]",
          "bg-[var(--mkl-key-dark)] text-[var(--mkl-key)] border-t border-l border-[var(--mkl-surface-high)] border-r border-b border-black",
          "shadow-[0_2px_0_#0F0E0C] select-none",
          className
        )}
        {...props}
      >
        {children}
      </kbd>
    );
  }
);

Kbd.displayName = "Kbd";
