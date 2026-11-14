import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Settings } from "lucide-react";
import { cn } from "@/registry/mkl45/lib/utils";

export const spinnerVariants = cva("animate-spin text-[var(--mkl-amb)]", {
  variants: {
    size: {
      sm: "h-4 w-4",
      default: "h-6 w-6",
      lg: "h-8 w-8",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {
  variant?: "gear" | "dotted" | "leds";
}

export function Spinner({
  className,
  size = "default",
  variant = "gear",
  ...props
}: SpinnerProps) {
  if (variant === "leds") {
    return (
      <div className={cn("inline-flex items-center gap-1.5", className)} {...props}>
        <span className="w-2 h-2 rounded-full bg-[var(--mkl-amb)] shadow-[0_0_6px_var(--mkl-amb)] animate-bounce [animation-delay:-0.3s]" />
        <span className="w-2 h-2 rounded-full bg-[var(--mkl-amb)] shadow-[0_0_6px_var(--mkl-amb)] animate-bounce [animation-delay:-0.15s]" />
        <span className="w-2 h-2 rounded-full bg-[var(--mkl-amb)] shadow-[0_0_6px_var(--mkl-amb)] animate-bounce" />
      </div>
    );
  }

  if (variant === "gear") {
    return (
      <div className={cn("inline-flex items-center justify-center", className)} {...props}>
        <Settings className={cn(spinnerVariants({ size }))} />
      </div>
    );
  }

  // Dotted Ring
  return (
    <div
      className={cn(
        "inline-block rounded-full border-2 border-t-[var(--mkl-amb)] border-r-[var(--mkl-amb)]/30 border-b-transparent border-l-transparent animate-spin shadow-[0_0_8px_rgba(242,176,30,0.4)]",
        size === "sm" ? "h-4 w-4" : size === "lg" ? "h-8 w-8" : "h-6 w-6",
        className
      )}
      {...props}
    />
  );
}
