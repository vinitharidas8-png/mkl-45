import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { AlertCircle, AlertTriangle, Info, CheckCircle2 } from "lucide-react";
import { cn } from "@/registry/mkl45/lib/utils";

export const alertVariants = cva(
  "relative w-full rounded-md border p-4 shadow-[0_8px_20px_rgba(0,0,0,0.5)] font-mono text-xs overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--mkl-surface)] border-[var(--mkl-surface-high)] text-[var(--mkl-on-surface)]",
        warning:
          "bg-[var(--mkl-surface-low)] border-[var(--mkl-amb)]/60 text-[var(--mkl-on-surface)]",
        destructive:
          "bg-[var(--mkl-surface-low)] border-[var(--mkl-danger)]/80 text-[var(--mkl-on-surface)]",
        success:
          "bg-[var(--mkl-surface-low)] border-[var(--mkl-emerald)]/80 text-[var(--mkl-on-surface)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string;
  code?: string;
}

export function Alert({
  className,
  variant = "default",
  title,
  code,
  children,
  ...props
}: AlertProps) {
  const iconMap = {
    default: <Info className="w-4 h-4 text-[var(--mkl-steel-1)]" />,
    warning: <AlertTriangle className="w-4 h-4 text-[var(--mkl-amb)]" />,
    destructive: <AlertCircle className="w-4 h-4 text-[var(--mkl-danger)]" />,
    success: <CheckCircle2 className="w-4 h-4 text-[var(--mkl-emerald)]" />,
  };

  const isWarningOrDanger = variant === "warning" || variant === "destructive";

  return (
    <div className={cn(alertVariants({ variant, className }))} {...props}>
      {/* Tactical Hazard Edge Stripe */}
      {isWarningOrDanger && (
        <div
          className={cn(
            "absolute left-0 top-0 bottom-0 w-2",
            variant === "destructive" ? "hazard-stripes-danger" : "hazard-stripes"
          )}
        />
      )}

      <div className={cn("flex items-start gap-3", isWarningOrDanger && "pl-2")}>
        <div className="mt-0.5 shrink-0">{iconMap[variant || "default"]}</div>
        <div className="flex-1 space-y-1">
          {(title || code) && (
            <div className="flex items-center justify-between font-bold uppercase tracking-wider">
              {title && <span>{title}</span>}
              {code && (
                <span className="text-[10px] text-[var(--mkl-steel-1)]">
                  [{code}]
                </span>
              )}
            </div>
          )}
          <div className="text-[var(--mkl-steel-1)] leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
