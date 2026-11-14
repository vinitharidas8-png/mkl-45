import type { Metadata } from "next";
import { Barlow_Condensed, JetBrains_Mono, VT323 } from "next/font/google";
import "./globals.css";
import "@/registry/mkl45/styles/theme.css";
import { KitProvider } from "@/app/components/my-kit-tray";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const vt323 = VT323({
  variable: "--font-vt323",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MKL-45 // INTERCEPTOR UI SYSTEM",
  description:
    "Open-source industrial field-radio React component library and shadcn-compatible registry.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${jetbrainsMono.variable} ${vt323.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--mkl-bg)] text-[var(--mkl-on-surface)] selection:bg-[var(--mkl-acc)] selection:text-white">
        <KitProvider>{children}</KitProvider>
      </body>
    </html>
  );
}
