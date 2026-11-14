"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/registry/mkl45/lib/utils";

interface CopyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

export function CopyButton({ value, className, ...props }: CopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    if (hasCopied) {
      const timeout = setTimeout(() => setHasCopied(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [hasCopied]);

  return (
    <button
      type="button"
      className={cn(
        "relative inline-flex items-center justify-center gap-1.5 px-2.5 py-1 text-xs font-mono font-bold tracking-wider uppercase transition-all duration-80 select-none",
        "bg-[var(--mkl-surface-low)] text-[var(--mkl-key)] border border-[var(--mkl-surface-high)] rounded-[2px]",
        "shadow-[0_2px_0_#0F0E0C] active:translate-y-[1px] active:shadow-none hover:text-white hover:border-[var(--mkl-steel-1)]",
        hasCopied && "text-[var(--mkl-amb)] border-[var(--mkl-amb)] shadow-[0_0_8px_rgba(242,176,30,0.4)]",
        className
      )}
      onClick={() => {
        navigator.clipboard.writeText(value);
        setHasCopied(true);
      }}
      {...props}
    >
      {hasCopied ? (
        <>
          <Check className="h-3.5 w-3.5 text-[var(--mkl-amb)]" />
          <span className="text-[10px] text-[var(--mkl-amb)] lcd-glow">COPIED</span>
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5 opacity-70" />
          <span className="text-[10px]">COPY</span>
        </>
      )}
    </button>
  );
}
