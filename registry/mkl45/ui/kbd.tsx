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
          "bg-gradient-to-b from-[#3a3937] to-[#1c1b1a] text-[var(--mkl-key)] border-t border-l border-white/20 border-r border-b border-black",
          "shadow-[0_2.5px_0_#0a0908,0_3px_5px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.25)] select-none",
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
