import * as React from "react";
import { cn } from "@/registry/mkl45/lib/utils";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  hazard?: boolean;
}

export function Skeleton({ className, hazard = true, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "rounded bg-[var(--mkl-surface-high)]/60 animate-pulse border border-black/40",
        hazard &&
          "bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.4)_0,rgba(0,0,0,0.4)_10px,transparent_10px,transparent_20px)]",
        className
      )}
      {...props}
    />
  );
}
