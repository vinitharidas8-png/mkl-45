import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/registry/mkl45/lib/utils";

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
  label?: string;
  sublabel?: string;
  glowColor?: "red" | "amber" | "orange" | "green";
}

export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, label, sublabel, glowColor = "red", ...props }, ref) => {
  const glowClasses = {
    red: "data-[state=checked]:bg-gradient-to-b data-[state=checked]:from-[#ef4444] data-[state=checked]:to-[#b91c1c] data-[state=checked]:shadow-[0_0_14px_3px_rgba(239,68,68,0.75),0_0_24px_6px_rgba(239,68,68,0.35),0_3px_6px_rgba(0,0,0,0.9),inset_0_1.5px_2px_rgba(255,255,255,0.6),inset_0_-1.5px_2px_rgba(0,0,0,0.5)]",
    orange: "data-[state=checked]:bg-gradient-to-b data-[state=checked]:from-[#f97316] data-[state=checked]:to-[#c2410c] data-[state=checked]:shadow-[0_0_14px_3px_rgba(249,115,22,0.75),0_0_24px_6px_rgba(249,115,22,0.35),0_3px_6px_rgba(0,0,0,0.9),inset_0_1.5px_2px_rgba(255,255,255,0.6),inset_0_-1.5px_2px_rgba(0,0,0,0.5)]",
    amber: "data-[state=checked]:bg-gradient-to-b data-[state=checked]:from-[#f59e0b] data-[state=checked]:to-[#b45309] data-[state=checked]:shadow-[0_0_14px_3px_rgba(245,158,11,0.75),0_0_24px_6px_rgba(245,158,11,0.35),0_3px_6px_rgba(0,0,0,0.9),inset_0_1.5px_2px_rgba(255,255,255,0.6),inset_0_-1.5px_2px_rgba(0,0,0,0.5)]",
    green: "data-[state=checked]:bg-gradient-to-b data-[state=checked]:from-[#10b981] data-[state=checked]:to-[#047857] data-[state=checked]:shadow-[0_0_14px_3px_rgba(16,185,129,0.75),0_0_24px_6px_rgba(16,185,129,0.35),0_3px_6px_rgba(0,0,0,0.9),inset_0_1.5px_2px_rgba(255,255,255,0.6),inset_0_-1.5px_2px_rgba(0,0,0,0.5)]",
  };

  return (
    <div className="inline-flex items-center gap-3 select-none">
      <SwitchPrimitive.Root
        ref={ref}
        className={cn(
          "peer relative inline-flex h-7 w-14 shrink-0 cursor-pointer items-center rounded-full p-[2px] transition-colors duration-200",
          "bg-[#0e0d0c] border border-black/90 shadow-[inset_0_3px_6px_rgba(0,0,0,0.95),inset_0_1px_2px_#000,0_1px_1px_rgba(255,255,255,0.12)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mkl-amb)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--mkl-surface)]",
          "disabled:cursor-not-allowed disabled:opacity-40",
          className
        )}
        {...props}
      >
        <SwitchPrimitive.Thumb
          className={cn(
            "pointer-events-none block h-5.5 w-5.5 rounded-full transition-all duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
            "border border-white/25",
            "data-[state=unchecked]:translate-x-0.5 data-[state=unchecked]:bg-gradient-to-b data-[state=unchecked]:from-[#6c6b65] data-[state=unchecked]:to-[#45443f] data-[state=unchecked]:shadow-[0_3px_5px_rgba(0,0,0,0.9),inset_0_1px_1.5px_rgba(255,255,255,0.45),inset_0_-1.5px_2px_rgba(0,0,0,0.6)]",
            "data-[state=checked]:translate-x-7",
            glowClasses[glowColor]
          )}
        />
      </SwitchPrimitive.Root>

      {(label || sublabel) && (
        <div className="flex flex-col leading-tight">
          {label && (
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--mkl-on-surface)]">
              {label}
            </span>
          )}
          {sublabel && (
            <span className="font-mono text-[10px] text-[var(--mkl-steel-1)]">
              {sublabel}
            </span>
          )}
        </div>
      )}
    </div>
  );
});

Switch.displayName = "Switch";
