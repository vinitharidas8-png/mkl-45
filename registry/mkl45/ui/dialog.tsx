"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/registry/mkl45/lib/utils";
import { HexScrew } from "./chassis-plate";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogPortal = DialogPrimitive.Portal;
export const DialogClose = DialogPrimitive.Close;

export const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/75 backdrop-blur-sm",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

export const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    serial?: string;
    hazardHeader?: boolean;
    hasScrews?: boolean;
  }
>(({ className, children, serial = "MODAL-OVL-055", hazardHeader = true, hasScrews = true, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%]",
        "bg-[var(--mkl-surface)] border-2 border-[var(--mkl-surface-high)] rounded-lg shadow-[0_24px_50px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)]",
        "duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
        "overflow-hidden font-mono text-xs",
        className
      )}
      {...props}
    >
      {/* Optional Top Diagonal Hazard Striping Band */}
      {hazardHeader && <div className="h-2 w-full hazard-stripes" />}

      <div className="relative p-6">
        {hasScrews && (
          <>
            <HexScrew className="absolute top-2.5 left-2.5" />
            <HexScrew className="absolute top-2.5 right-2.5" />
            <HexScrew className="absolute bottom-2.5 left-2.5" />
            <HexScrew className="absolute bottom-2.5 right-2.5" />
          </>
        )}

        {/* Top Header Information Strip */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[var(--mkl-surface-mid)] font-mono text-[10px] text-[var(--mkl-amb)]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--mkl-amb)] shadow-[0_0_6px_var(--mkl-amb)]" />
            <span className="font-bold tracking-widest uppercase">
              ARMORED ENCLOSURE INTERLOCK
            </span>
          </div>
          {serial && (
            <span className="text-[var(--mkl-steel-1)]">
              [{serial}]
            </span>
          )}
        </div>

        {children}

        {/* Tactical Close Keycap */}
        <DialogPrimitive.Close className="absolute right-4 top-4 rounded-[3px] bg-[var(--mkl-key-dark)] border border-[var(--mkl-surface-high)] p-1 text-[var(--mkl-steel-1)] hover:text-white shadow-[0_2px_0_#000] active:translate-y-[1px] transition-all focus:outline-none focus:ring-1 focus:ring-[var(--mkl-amb)]">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </div>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

export const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col space-y-1.5 text-left mb-4", className)}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

export const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 pt-4 border-t border-[var(--mkl-surface-mid)] mt-4",
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

export const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "font-sans text-xl font-black uppercase tracking-wide text-white leading-none",
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

export const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("font-mono text-xs text-[var(--mkl-steel-1)] leading-relaxed mt-1", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
