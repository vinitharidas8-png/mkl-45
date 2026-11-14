"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/registry/mkl45/lib/utils";

export const Accordion = AccordionPrimitive.Root;

export const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "rounded border border-[var(--mkl-surface-high)] bg-[var(--mkl-surface)] mb-2 overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.5)]",
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

export const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
    serial?: string;
  }
>(({ className, serial, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between p-3.5 font-mono text-xs font-bold uppercase tracking-wider text-[var(--mkl-on-surface)] transition-all",
        "hover:bg-[var(--mkl-surface-high)]/50 [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--mkl-amb)] shadow-[0_0_4px_var(--mkl-amb)]" />
        <span>{children}</span>
        {serial && (
          <span className="text-[10px] text-[var(--mkl-steel-1)] font-normal">
            [{serial}]
          </span>
        )}
      </div>
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 text-[var(--mkl-amb)]" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

export const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden font-mono text-xs text-[var(--mkl-steel-1)] transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down border-t border-[var(--mkl-surface-mid)] bg-[var(--mkl-surface-low)]"
    {...props}
  >
    <div className={cn("p-4 leading-relaxed", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
