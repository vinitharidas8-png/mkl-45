"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "@/registry/mkl45/lib/utils";

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;

export const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & {
    title?: string;
    serial?: string;
  }
>(({ className, align = "center", sideOffset = 6, title, serial, children, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border-2 border-[var(--mkl-surface-high)] bg-[var(--mkl-surface)] p-4 font-mono text-xs text-[var(--mkl-on-surface)]",
        "shadow-[0_16px_32px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)] outline-none",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        className
      )}
      {...props}
    >
      {(title || serial) && (
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-[var(--mkl-surface-mid)] font-mono text-[10px] text-[var(--mkl-amb)]">
          {title && <span className="font-bold uppercase">{title}</span>}
          {serial && <span className="text-[var(--mkl-steel-1)]">[{serial}]</span>}
        </div>
      )}
      {children}
    </PopoverPrimitive.Content>
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;
