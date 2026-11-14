"use client";

import * as React from "react";
import { SiteHeader } from "@/app/components/site-header";
import { SiteSidebar } from "@/app/components/site-sidebar";
import { SearchCommand } from "@/app/components/search-command";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchOpen, setSearchOpen] = React.useState(false);

  return (
    <div className="relative min-h-screen flex flex-col bg-[var(--mkl-bg)]">
      {/* Top Universal Transceiver Bar */}
      <SiteHeader onOpenSearch={() => setSearchOpen(true)} />

      {/* Main Rack Deck Layout */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 flex">
        {/* Left Nav Bay */}
        <SiteSidebar />

        {/* Center Documentation Console */}
        <main className="flex-1 py-8 lg:px-8 min-w-0 max-w-4xl">
          {children}
        </main>
      </div>

      {/* Global Cmd+K Palette */}
      <SearchCommand open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  );
}
