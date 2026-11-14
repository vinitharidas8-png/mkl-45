import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/registry/mkl45/lib/utils";

export const buttonVariants = cva(
  [
    "relative inline-flex items-center justify-center select-none font-sans tracking-wider uppercase font-bold",
    "transition-all duration-80 ease-[cubic-bezier(0.2,0,0,1)]",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mkl-amb)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--mkl-surface)]",
    "disabled:pointer-events-none disabled:opacity-40 disabled:grayscale",
    "active:translate-y-[3px]",
  ],
  {
    variants: {
      variant: {
        // 01 Off-white PBT Keycap (Default)
        default: [
          "bg-[var(--mkl-key)] text-[var(--mkl-surface)] font-black",
          "border-t border-l border-white/60 border-r border-b border-[var(--mkl-key-shadow)]",
          "shadow-[0_4px_0_var(--mkl-key-shadow),0_6px_12px_rgba(0,0,0,0.45)] hover:brightness-105",
          "active:shadow-[0_1px_0_rgba(0,0,0,0.8),inset_0_2px_4px_rgba(0,0,0,0.5)]",
        ],
        // 02 Charcoal Tactical Keycap
        secondary: [
          "bg-[var(--mkl-key-dark)] text-[var(--mkl-steel-1)] font-bold",
          "border-t border-l border-[#3E3C38] border-r border-b border-black",
          "shadow-[0_4px_0_var(--mkl-key-dark-shadow),0_6px_12px_rgba(0,0,0,0.65)] hover:text-white hover:brightness-110",
          "active:shadow-[0_1px_0_rgba(0,0,0,0.8),inset_0_2px_4px_rgba(0,0,0,0.5)]",
        ],
        // 03 Cerakote Rust Orange (Primary Command)
        primary: [
          "bg-[var(--mkl-acc)] text-white font-extrabold",
          "border-t border-l border-[var(--mkl-acc-light)] border-r border-b border-[var(--mkl-acc-dark)]",
          "shadow-[0_4px_0_var(--mkl-acc-dark),0_6px_12px_rgba(217,113,47,0.35)] hover:brightness-110",
          "active:shadow-[0_1px_0_rgba(0,0,0,0.8),inset_0_2px_4px_rgba(0,0,0,0.5)]",
        ],
        // 04 Zero-Purge Emergency Red
        destructive: [
          "bg-[var(--mkl-danger)] text-white font-black",
          "border-t border-l border-[var(--mkl-danger-light)] border-r border-b border-[var(--mkl-danger-dark)]",
          "shadow-[0_4px_0_var(--mkl-danger-dark),0_6px_12px_rgba(211,47,47,0.4)] hover:brightness-110",
          "active:shadow-[0_1px_0_rgba(0,0,0,0.8),inset_0_2px_4px_rgba(0,0,0,0.5)]",
        ],
        // 05 Recessed Tray Bezel (Flush Key)
        outline: [
          "bg-[var(--mkl-surface-low)] text-[var(--mkl-amb)] font-mono font-medium",
          "border border-[var(--mkl-surface-mid)] shadow-[inset_0_3px_8px_rgba(0,0,0,0.8),inset_0_1px_2px_rgba(0,0,0,0.95)]",
          "hover:bg-[var(--mkl-surface-mid)]",
          "active:translate-y-0 active:bg-[var(--mkl-surface-high)]",
        ],
        // 06 Tactical Stencil Ghost
        ghost: [
          "bg-transparent text-[var(--mkl-steel-1)] border border-[var(--mkl-steel-2)]/40",
          "hover:bg-[var(--mkl-surface-high)]/40 hover:text-white",
          "active:translate-y-[1px]",
        ],
        // 07 Link / Reticle Link
        link: [
          "bg-transparent text-[var(--mkl-acc)] underline-offset-4 hover:underline font-mono lowercase tracking-normal",
          "active:translate-y-0",
        ],
      },
      size: {
        sm: "h-8 px-2.5 text-xs rounded-[3px] gap-1.5",
        default: "h-11 px-4 text-sm rounded-[4px] gap-2",
        lg: "h-14 px-6 text-base rounded-[6px] gap-3 tracking-widest",
        icon: "h-11 w-11 p-0 rounded-[4px]",
      },
      isLatched: {
        true: "translate-y-[3px] shadow-[0_1px_0_rgba(0,0,0,0.8),inset_0_2px_4px_rgba(0,0,0,0.5)] ring-1 ring-[var(--mkl-amb)]/60",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      isLatched: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  sublabel?: string;
  hasLed?: boolean;
  isLedActive?: boolean;
  ledColor?: "amber" | "emerald" | "red";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      sublabel,
      hasLed = false,
      isLedActive = false,
      ledColor = "amber",
      isLatched = false,
      isLoading = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const ledColorClasses = {
      amber: isLedActive
        ? "bg-[var(--mkl-amb)] shadow-[0_0_8px_#F2B01E,0_0_2px_#FFF]"
        : "bg-[var(--mkl-amb-dim)]",
      emerald: isLedActive
        ? "bg-[var(--mkl-emerald-light)] shadow-[0_0_8px_#00E676,0_0_2px_#FFF]"
        : "bg-[var(--mkl-emerald-dim)]",
      red: isLedActive
        ? "bg-[#FF1744] shadow-[0_0_8px_#FF1744,0_0_2px_#FFF]"
        : "bg-[#400E0E]",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(buttonVariants({ variant, size, isLatched, className }))}
        {...props}
      >
        {/* Concave keycap top glare overlay */}
        {variant !== "link" && variant !== "ghost" && (
          <span
            className="pointer-events-none absolute inset-x-1 top-0.5 h-1/3 rounded-t-sm bg-gradient-to-b from-white/20 to-transparent"
            aria-hidden="true"
          />
        )}

        {/* Optional Bi-Stable Status LED Jewel */}
        {hasLed && (
          <span
            className={cn(
              "absolute top-1.5 right-1.5 h-2 w-2 rounded-full border border-black/80 transition-colors duration-200",
              ledColorClasses[ledColor]
            )}
            aria-hidden="true"
          />
        )}

        {/* Loading Spinner */}
        {isLoading ? (
          <span className="flex items-center gap-2">
            <svg
              className="h-4 w-4 animate-spin text-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              />
            </svg>
            <span className="font-mono text-xs">BUSY</span>
          </span>
        ) : (
          <span className="flex flex-col items-center justify-center leading-none">
            {children}
            {sublabel && (
              <span className="mt-1 font-mono text-[9px] font-normal opacity-70 tracking-normal">
                {sublabel}
              </span>
            )}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
