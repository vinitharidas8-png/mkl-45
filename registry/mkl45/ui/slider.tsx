import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/registry/mkl45/lib/utils";

export interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  ticks?: boolean;
}

export const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, ticks = true, ...props }, ref) => {
  return (
    <div className="relative w-full py-2">
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex w-full touch-none select-none items-center",
          className
        )}
        {...props}
      >
        <SliderPrimitive.Track className="relative h-3 w-full grow overflow-hidden rounded-sm bg-[#0e0d0c] border border-black/90 shadow-[inset_0_3px_6px_rgba(0,0,0,0.95),inset_0_1px_2px_#000,0_1px_0_rgba(255,255,255,0.12)]">
          <SliderPrimitive.Range className="absolute h-full bg-gradient-to-r from-[var(--mkl-acc-dark)] to-[var(--mkl-acc)] shadow-[0_0_8px_var(--mkl-acc)]" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="relative block h-7 w-4 rounded-[2px] bg-gradient-to-b from-[#787670] via-[#565550] to-[#3a3935] border border-white/30 shadow-[0_4px_8px_rgba(0,0,0,0.85),inset_0_1px_1.5px_rgba(255,255,255,0.5),inset_0_-1.5px_2px_rgba(0,0,0,0.6)] transition-transform duration-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mkl-amb)] cursor-grab active:cursor-grabbing">
          {/* Tactile knurl ridges */}
          <span className="absolute inset-x-0.5 top-2.5 h-[1px] bg-white/40 shadow-[0_1px_0_rgba(0,0,0,0.8)]" />
          <span className="absolute inset-x-0.5 top-3.5 h-[1px] bg-white/40 shadow-[0_1px_0_rgba(0,0,0,0.8)]" />
        </SliderPrimitive.Thumb>
      </SliderPrimitive.Root>

      {/* Analog ruler tick marks underneath */}
      {ticks && (
        <div className="flex justify-between px-1.5 mt-2 font-mono text-[9px] text-[var(--mkl-steel-2)] select-none">
          <span>0</span>
          <span>25</span>
          <span>50</span>
          <span>75</span>
          <span>100</span>
        </div>
      )}
    </div>
  );
});

Slider.displayName = "Slider";
