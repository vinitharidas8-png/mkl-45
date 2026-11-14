import * as React from "react";
import { cn } from "@/registry/mkl45/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          type={type}
          ref={ref}
          className={cn(
            "w-full h-11 px-3.5 rounded-[3px] font-mono text-xs text-[var(--mkl-lcd-ink)] select-text",
            "bg-[var(--mkl-lcd)] border border-black/90 shadow-[inset_0_3px_8px_rgba(0,0,0,0.95),inset_0_1px_2px_#000,0_1px_1px_rgba(255,255,255,0.12)]",
            "placeholder:text-[var(--mkl-lcd-ghost)] placeholder:font-mono",
            "focus:outline-none focus:border-[var(--mkl-amb)] focus:ring-1 focus:ring-[var(--mkl-amb)] focus:shadow-[inset_0_2px_6px_#000,0_0_8px_rgba(242,176,30,0.3)]",
            "disabled:opacity-40 disabled:cursor-not-allowed",
            "transition-all duration-80",
            error &&
              "border-[var(--mkl-danger)] text-[var(--mkl-danger-light)] focus:border-[var(--mkl-danger)] focus:ring-[var(--mkl-danger)] focus:shadow-[0_0_8px_rgba(211,47,47,0.4)]",
            className
          )}
          {...props}
        />
        {/* Subtle scanline overlay */}
        <span
          className="pointer-events-none absolute inset-0 rounded-[3px] opacity-40 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.4)_0px,rgba(0,0,0,0.4)_1px,transparent_1px,transparent_2px)]"
          aria-hidden="true"
        />
      </div>
    );
  }
);

Input.displayName = "Input";
