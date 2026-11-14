"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/registry/mkl45/lib/utils";

export interface NavGroup {
  title: string;
  items: {
    title: string;
    href: string;
    isNew?: boolean;
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
      { title: "Kbd Legend", href: "/docs/components/kbd" },
      { title: "Button Group", href: "/docs/components/button-group" },
      { title: "Toggle Key", href: "/docs/components/toggle" },
      { title: "Toggle Group", href: "/docs/components/toggle-group" },
      { title: "Split Keycap", href: "/docs/components/split-button" },
      { title: "Hold-To-Confirm", href: "/docs/components/hold-to-confirm" },
      { title: "Distress FAB", href: "/docs/components/fab" },
    ],
  },
  {
    title: "FORMS & TRANSDUCERS",
    items: [
      { title: "Input Terminal", href: "/docs/components/input" },
      { title: "Textarea Screen", href: "/docs/components/textarea" },
      { title: "Label Plate", href: "/docs/components/label" },
      { title: "Input Group", href: "/docs/components/input-group" },
      { title: "Search Transducer", href: "/docs/components/search" },
      { title: "Password Cipher", href: "/docs/components/password-input" },
      { title: "OTP Crypto Cell", href: "/docs/components/input-otp" },
      { title: "Checkbox Stud", href: "/docs/components/checkbox" },
      { title: "Radio Keybank", href: "/docs/components/radio-group" },
      { title: "Toggle Switch", href: "/docs/components/switch" },
      { title: "Linear Fader (Slider)", href: "/docs/components/slider" },
      { title: "Bandpass Range Slider", href: "/docs/components/range-slider" },
      { title: "Rotary Attenuator", href: "/docs/components/rotary-knob" },
      { title: "Select Bay", href: "/docs/components/select" },
      { title: "Combobox Filter", href: "/docs/components/combobox" },
      { title: "Date Transducer", href: "/docs/components/date-input" },
      { title: "Cassette File Slot", href: "/docs/components/file-upload" },
      { title: "Validated Form", href: "/docs/components/form" },
    ],
  },
  {
    title: "FEEDBACK & ANNUNCIATORS",
    items: [
      { title: "Alert Plate", href: "/docs/components/alert" },
      { title: "Teletype Toast", href: "/docs/components/toast" },
      { title: "Chevron Progress", href: "/docs/components/progress" },
      { title: "CNC Spinner & Gears", href: "/docs/components/spinner" },
      { title: "Hatched Skeleton", href: "/docs/components/skeleton" },
      { title: "Tactical Badge", href: "/docs/components/badge" },
      { title: "Status Chip", href: "/docs/components/status-chip" },
      { title: "Empty CRT Screen", href: "/docs/components/empty-state" },
    ],
  },
  {
    title: "OVERLAYS & HATCHES",
    items: [
      { title: "Bolted Dialog", href: "/docs/components/dialog" },
      { title: "Zero-Purge Alert Dialog", href: "/docs/components/alert-dialog" },
      { title: "Slide Hatch Drawer", href: "/docs/components/drawer" },
      { title: "Side Rack Sheet", href: "/docs/components/sheet" },
      { title: "BNC Popover", href: "/docs/components/popover" },
      { title: "Stencil Tooltip", href: "/docs/components/tooltip" },
      { title: "ID Clearance Card", href: "/docs/components/hover-card" },
      { title: "Engraved Dropdown", href: "/docs/components/dropdown-menu" },
      { title: "Context Menu", href: "/docs/components/context-menu" },
      { title: "Menubar Rail", href: "/docs/components/menubar" },
      { title: "Terminal Command HUD", href: "/docs/components/command" },
    ],
  },
  {
    title: "NAVIGATION & ROUTING",
    items: [
      { title: "Ganged Ops Tabs", href: "/docs/components/tabs" },
      { title: "Mega-Drop Bay Menu", href: "/docs/components/navigation-menu" },
      { title: "Chevron Breadcrumb", href: "/docs/components/breadcrumb" },
      { title: "Track-Skip Pagination", href: "/docs/components/pagination" },
      { title: "19-inch Rack Sidebar", href: "/docs/components/sidebar" },
      { title: "Mission Stepper", href: "/docs/components/stepper" },
      { title: "Sliding Hatch Accordion", href: "/docs/components/accordion" },
      { title: "Collapsible Module", href: "/docs/components/collapsible" },
      { title: "Bottom Tactical Rail", href: "/docs/components/bottom-nav" },
    ],
  },
  {
    title: "DATA & TELEMETRY",
    items: [
      { title: "Chassis Card", href: "/docs/components/card" },
      { title: "Logistics Manifest Table", href: "/docs/components/table" },
      { title: "Telemetry Data Table", href: "/docs/components/data-table" },
      { title: "Operator Avatar", href: "/docs/components/avatar" },
      { title: "Avatar Group", href: "/docs/components/avatar-group" },
      { title: "Punch-Grid Calendar", href: "/docs/components/calendar" },
      { title: "Date Range Selector", href: "/docs/components/date-range-picker" },
      { title: "Dot-Matrix CRT Charts", href: "/docs/components/chart" },
      { title: "Cassette Reel Carousel", href: "/docs/components/carousel" },
      { title: "Route Timeline", href: "/docs/components/timeline" },
      { title: "Barcode Spec Sheet", href: "/docs/components/description-list" },
      { title: "Routing Tree View", href: "/docs/components/tree-view" },
    ],
  },
  {
    title: "LAYOUT & CHASSIS",
    items: [
      { title: "Hazard Separator", href: "/docs/components/separator" },
      { title: "Optical Reticle Aspect Ratio", href: "/docs/components/aspect-ratio" },
      { title: "Fader Scroll Area", href: "/docs/components/scroll-area" },
      { title: "Milled Resizable Panels", href: "/docs/components/resizable" },
      { title: "Stenciled Typography", href: "/docs/components/typography" },
      { title: "Chassis Armor Plate", href: "/docs/components/chassis-plate" },
      { title: "LCD Display Well", href: "/docs/components/lcd-screen" },
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
                  <li key={item.href}>
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
