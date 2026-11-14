import * as React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/registry/mkl45/lib/utils";

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  separator?: React.ReactNode;
}

export function Breadcrumb({
  className,
  separator = <ChevronRight className="w-3.5 h-3.5 text-[var(--mkl-amb)] shrink-0" />,
  children,
  ...props
}: BreadcrumbProps) {
  return (
    <nav
      aria-label="breadcrumb"
      className={cn(
        "inline-flex items-center gap-2 p-2 rounded bg-[var(--mkl-surface-lowest)] border border-[var(--mkl-surface-high)] font-mono text-xs shadow-[inset_0_1px_3px_#000] overflow-x-auto",
        className
      )}
      {...props}
    >
      <ol className="flex items-center gap-2">{children}</ol>
    </nav>
  );
}

export function BreadcrumbItem({
  className,
  ...props
}: React.LiHTMLAttributes<HTMLLIElement>) {
  return (
    <li
      className={cn("inline-flex items-center gap-2 text-[var(--mkl-steel-1)]", className)}
      {...props}
    />
  );
}

export function BreadcrumbLink({
  className,
  active,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { active?: boolean }) {
  return (
    <a
      className={cn(
        "font-bold uppercase tracking-wider transition-colors hover:text-white",
        active && "text-[var(--mkl-amb)] lcd-glow",
        className
      )}
      {...props}
    />
  );
}
