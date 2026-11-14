import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/registry/mkl45/lib/utils";

export const badgeVariants = cva(
  "inline-flex items-center gap-1.5 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider rounded-[2px] select-none border shadow-[0_1px_2px_#000]",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--mkl-surface-low)] text-[var(--mkl-on-surface)] border-[var(--mkl-surface-high)]",
        caution:
          "bg-[var(--mkl-amb-dim)] text-[var(--mkl-amb)] border-[var(--mkl-amb)] shadow-[0_0_6px_rgba(242,176,30,0.3)]",
        danger:
          "bg-[#400E0E] text-[var(--mkl-danger-light)] border-[var(--mkl-danger)] shadow-[0_0_6px_rgba(211,47,47,0.3)]",
        secure:
          "bg-[var(--mkl-emerald-dim)] text-[var(--mkl-emerald-light)] border-[var(--mkl-emerald)] shadow-[0_0_6px_rgba(46,125,50,0.3)]",
        stencil:
          "bg-transparent text-[var(--mkl-steel-1)] border-[var(--mkl-steel-2)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean;
}

export function Badge({
  className,
  variant,
  dot = false,
  children,
  ...props
}: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, className }))} {...props}>
      {dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-current shadow-[0_0_4px_currentColor]" />
      )}
      {children}
    </div>
  );
}
