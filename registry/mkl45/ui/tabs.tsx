"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/registry/mkl45/lib/utils";

export const Tabs = TabsPrimitive.Root;

export const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & {
    label?: string;
    serial?: string;
  }
>(({ className, label, serial, children, ...props }, ref) => (
  <div className="flex flex-col p-2 rounded bg-[var(--mkl-surface)] border border-[var(--mkl-surface-high)] shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
    {(label || serial) && (
      <div className="flex items-center justify-between pb-1.5 px-1 border-b border-[var(--mkl-surface-mid)] mb-2 font-mono text-[10px]">
        {label && (
          <span className="font-bold uppercase tracking-wider text-[var(--mkl-on-surface)]">
            {label}
          </span>
        )}
        {serial && (
          <span className="text-[var(--mkl-steel-1)]">[{serial}]</span>
        )}
      </div>
    )}
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        "inline-flex items-center gap-1.5 p-1 rounded bg-[var(--mkl-surface-low)] border border-[var(--mkl-surface-high)] shadow-[inset_0_2px_4px_#000] overflow-x-auto",
        className
      )}
      {...props}
    >
      {children}
    </TabsPrimitive.List>
  </div>
));
TabsList.displayName = TabsPrimitive.List.displayName;

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
    hasLed?: boolean;
  }
>(({ className, hasLed = true, children, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "relative inline-flex items-center justify-center gap-2 px-3.5 py-2 font-mono text-xs font-bold uppercase tracking-wider rounded-[3px] select-none",
      "text-[var(--mkl-steel-1)] transition-all duration-80",
      "hover:text-white hover:bg-[var(--mkl-surface-high)]/60",
      "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--mkl-amb)]",
      "disabled:pointer-events-none disabled:opacity-40",
      // Active latched key state: depressed key, rust orange enamel, amber LED active
      "data-[state=active]:bg-[var(--mkl-acc)] data-[state=active]:text-white data-[state=active]:shadow-[0_2px_0_#8E4417,inset_0_1px_2px_rgba(255,255,255,0.4)]",
      className
    )}
    {...props}
  >
    {hasLed && (
      <span
        className={cn(
          "w-1.5 h-1.5 rounded-full border border-black/80 transition-all duration-100",
          "bg-[var(--mkl-amb-dim)] group-data-[state=active]:bg-[var(--mkl-amb)] group-data-[state=active]:shadow-[0_0_6px_var(--mkl-amb)]",
          // Direct Radix attribute selector for active state
          "[[data-state=active]>&]:bg-[var(--mkl-amb)] [[data-state=active]>&]:shadow-[0_0_8px_#F2B01E,0_0_2px_#FFF]"
        )}
        aria-hidden="true"
      />
    )}
    <span>{children}</span>
  </TabsPrimitive.Trigger>
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

export const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-3 rounded-lg border border-[var(--mkl-surface-high)] bg-[var(--mkl-surface)] p-5 shadow-[0_8px_20px_rgba(0,0,0,0.5)] font-mono text-xs text-[var(--mkl-on-surface)]",
      "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--mkl-amb)]",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;
