import * as React from "react";
import { cn } from "@/registry/mkl45/lib/utils";

export interface HexScrewProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "default" | "lg";
}

export const HexScrew: React.FC<HexScrewProps> = ({
  className,
  size = "default",
  ...props
}) => {
  const sizeClasses = {
    sm: "w-2.5 h-2.5",
    default: "w-3 h-3",
    lg: "w-4 h-4",
  };

  const innerSize = {
    sm: "w-1 h-1",
    default: "w-1.5 h-1.5",
    lg: "w-2 h-2",
  };

  return (
    <div
      className={cn(
        "rounded-full bg-[var(--mkl-surface-bright)] flex items-center justify-center shadow-[inset_0_1px_2px_#000,0_1px_1px_rgba(255,255,255,0.15)]",
        sizeClasses[size],
        className
      )}
      aria-hidden="true"
      {...props}
    >
      <div
        className={cn(
          "bg-[var(--mkl-surface-low)] rotate-45 border-[0.5px] border-black/60",
          innerSize[size]
        )}
      />
    </div>
  );
};

export interface ChassisPlateProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  serial?: string;
  spec?: string;
  hasScrews?: boolean;
  chamfer?: "none" | "sm" | "default" | "lg";
}

export const ChassisPlate = React.forwardRef<HTMLDivElement, ChassisPlateProps>(
  (
    {
      className,
      title,
      serial,
      spec,
      hasScrews = true,
      chamfer = "none",
      children,
      ...props
    },
    ref
  ) => {
    const chamferClass =
      chamfer === "sm"
        ? "chamfer-sm"
        : chamfer === "default"
        ? "chamfer"
        : chamfer === "lg"
        ? "chamfer-lg"
        : "rounded-lg";

    return (
      <div
        ref={ref}
        className={cn(
          "relative bg-[var(--mkl-surface)] border border-[var(--mkl-surface-high)] shadow-[0_12px_28px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.08)] p-5",
          chamferClass,
          className
        )}
        {...props}
      >
        {hasScrews && (
          <>
            <HexScrew className="absolute top-2.5 left-2.5" />
            <HexScrew className="absolute top-2.5 right-2.5" />
            <HexScrew className="absolute bottom-2.5 left-2.5" />
            <HexScrew className="absolute bottom-2.5 right-2.5" />
          </>
        )}

        {(title || serial || spec) && (
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-[var(--mkl-surface-mid)] font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--mkl-amb)] shadow-[0_0_6px_var(--mkl-amb)]" />
              {title && (
                <span className="font-bold uppercase tracking-wider text-[var(--mkl-on-surface)]">
                  {title}
                </span>
              )}
              {spec && (
                <span className="text-[var(--mkl-on-surface-variant)] opacity-75">
                  // {spec}
                </span>
              )}
            </div>
            {serial && (
              <span className="px-2 py-0.5 rounded bg-[var(--mkl-surface-low)] text-[var(--mkl-amb)] shadow-[inset_0_1px_2px_#000] text-[10px]">
                [{serial}]
              </span>
            )}
          </div>
        )}

        {children}
      </div>
    );
  }
);

ChassisPlate.displayName = "ChassisPlate";
