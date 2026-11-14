import * as React from "react";
import { cn } from "@/registry/mkl45/lib/utils";
import { HexScrew } from "./chassis-plate";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  serial?: string;
  hasScrews?: boolean;
  hazardBorder?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, serial, hasScrews = false, hazardBorder = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative rounded-lg border-2 border-[var(--mkl-surface-high)] bg-[var(--mkl-surface)] p-5 font-mono text-xs text-[var(--mkl-on-surface)]",
          "shadow-[0_12px_28px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)]",
          hazardBorder && "border-t-4 border-t-[var(--mkl-amb)]",
          className
        )}
        {...props}
      >
        {hasScrews && (
          <>
            <HexScrew className="absolute top-2 left-2" size="sm" />
            <HexScrew className="absolute top-2 right-2" size="sm" />
            <HexScrew className="absolute bottom-2 left-2" size="sm" />
            <HexScrew className="absolute bottom-2 right-2" size="sm" />
          </>
        )}

        {serial && (
          <div className="absolute top-3 right-3 text-[10px] text-[var(--mkl-steel-1)] font-mono">
            [{serial}]
          </div>
        )}

        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 pb-3 border-b border-[var(--mkl-surface-mid)] mb-3", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-sans text-lg font-black uppercase tracking-wider text-white leading-none", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("font-mono text-[11px] text-[var(--mkl-steel-1)] leading-relaxed", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("pt-1", className)} {...props} />
));
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center pt-3 border-t border-[var(--mkl-surface-mid)] mt-3", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";
