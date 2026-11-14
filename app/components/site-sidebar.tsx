"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/registry/mkl45/lib/utils";

export interface NavGroup {
  title: string;
  items: {
    title: string;
    href: string;
    tag?: string;
  }[];
}

export const DOCS_NAV: NavGroup[] = [
  {
    title: "GETTING STARTED",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation & CLI", href: "/docs/installation" },
      { title: "Design Tokens & Physics", href: "/docs/theming" },
      { title: "Changelog", href: "/docs/changelog" },
    ],
  },
  {
    title: "ACTIONS & SWITCHGEAR",
    items: [
      { title: "Button Keycap", href: "/docs/components/button" },
      { title: "Kbd Legend Tag", href: "/docs/components/button" },
      { title: "Button Group", href: "/docs/components/button" },
      { title: "Toggle Key", href: "/docs/components/button" },
      { title: "Hold-To-Confirm", href: "/docs/components/button" },
    ],
  },
  {
    title: "FORMS & TRANSDUCERS",
    items: [
      { title: "Input Terminal", href: "/docs/components/input" },
      { title: "Textarea Screen", href: "/docs/components/input" },
      { title: "Label Plate", href: "/docs/components/input" },
      { title: "Checkbox Stud", href: "/docs/components/input" },
      { title: "Toggle Switch", href: "/docs/components/input" },
      { title: "Linear Fader Slider", href: "/docs/components/input" },
      { title: "Rotary Attenuator", href: "/docs/components/input" },
    ],
  },
  {
    title: "FEEDBACK & ANNUNCIATORS",
    items: [
      { title: "Alert Plate", href: "/docs/components/input" },
      { title: "Chevron Progress", href: "/docs/components/input" },
      { title: "CNC Spinner Loaders", href: "/docs/components/input" },
      { title: "Tactical Status Badge", href: "/docs/components/input" },
      { title: "Hatched Skeleton", href: "/docs/components/input" },
      { title: "Empty CRT Screen", href: "/docs/components/input" },
    ],
  },
  {
    title: "OVERLAYS & HATCHES",
    items: [
      { title: "Bolted Dialog", href: "/docs/components/dialog" },
      { title: "BNC Popover Tag", href: "/docs/components/dialog" },
      { title: "Dropdown Menu Bay", href: "/docs/components/dialog" },
      { title: "Stencil Tooltip", href: "/docs/components/dialog" },
    ],
  },
  {
    title: "NAVIGATION & ROUTING",
    items: [
      { title: "Ganged Ops Tabs", href: "/docs/components/dialog" },
      { title: "Chevron Breadcrumb", href: "/docs/components/dialog" },
      { title: "Inspection Hatch Accordion", href: "/docs/components/dialog" },
    ],
  },
  {
    title: "DATA & TELEMETRY",
    items: [
      { title: "Chassis Card", href: "/docs/components/data" },
      { title: "Logistics Manifest Table", href: "/docs/components/data" },
      { title: "Dot-Matrix CRT Charts", href: "/docs/components/data" },
      { title: "Hazard Separator", href: "/docs/components/data" },
    ],
  },
];

export function SiteSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 shrink-0 py-6 pr-4 hidden lg:block overflow-y-auto max-h-[calc(100vh-4rem)] sticky top-16 border-r border-[var(--mkl-surface-high)]">
      <div className="space-y-6">
        {DOCS_NAV.map((group) => (
          <div key={group.title} className="space-y-2">
            <h4 className="font-mono text-[10px] font-black uppercase tracking-widest text-[var(--mkl-amb)] px-3">
              // {group.title}
            </h4>
            <ul className="space-y-0.5 font-mono text-xs">
              {group.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center justify-between px-3 py-1.5 rounded transition-colors duration-80",
                        isActive
                          ? "bg-[var(--mkl-surface)] text-[var(--mkl-acc)] font-bold border-l-2 border-[var(--mkl-acc)] shadow-[inset_0_1px_2px_#000]"
                          : "text-[var(--mkl-steel-1)] hover:text-white hover:bg-[var(--mkl-surface)]"
                      )}
                    >
                      <span>{item.title}</span>
                      {item.tag && (
                        <span className="text-[9px] px-1 py-0.2 rounded bg-[var(--mkl-surface-high)] text-[var(--mkl-amb)]">
                          {item.tag}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
