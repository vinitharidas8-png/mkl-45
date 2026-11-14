import * as React from "react";
import { cn } from "@/registry/mkl45/lib/utils";

export interface LCDScreenProps extends React.HTMLAttributes<HTMLDivElement> {
  scanlines?: boolean;
  glow?: boolean;
}

export const LCDScreen = React.forwardRef<HTMLDivElement, LCDScreenProps>(
  ({ className, scanlines = true, glow = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative bg-[var(--mkl-lcd)] text-[var(--mkl-lcd-ink)] font-mono p-3 rounded border border-black/80",
          "shadow-[inset_0_3px_8px_rgba(0,0,0,0.9),inset_0_1px_2px_#000]",
          scanlines && "lcd-screen",
          glow && "lcd-glow",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

LCDScreen.displayName = "LCDScreen";
