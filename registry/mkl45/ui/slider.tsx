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
        <SliderPrimitive.Track className="relative h-2.5 w-full grow overflow-hidden rounded-sm bg-[var(--mkl-surface-lowest)] border border-[var(--mkl-surface-high)] shadow-[inset_0_2px_4px_#000]">
          <SliderPrimitive.Range className="absolute h-full bg-[var(--mkl-acc)] shadow-[0_0_6px_var(--mkl-acc)]" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="block h-6 w-3.5 rounded-[2px] bg-[var(--mkl-key)] border border-[var(--mkl-steel-edge)] shadow-[0_3px_6px_rgba(0,0,0,0.6)] transition-transform duration-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mkl-amb)] active:scale-110 cursor-grab active:cursor-grabbing" />
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
