import type { Metadata, Viewport } from "next";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://meal-bridge.com"),
  title: {
    default: "MEAL Bridge Consulting LLC",
    template: "%s | MEAL Bridge",
  },
  description:
    "MEAL consulting, systems development, and professional learning for NGOs, UN agencies, public institutions, and development partners across MENA.",
  applicationName: "MEAL Bridge",
  keywords: [
    "MEAL consulting",
    "monitoring and evaluation",
    "accountability",
    "MEAL systems",
    "capacity development",
    "MENA",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    siteName: "MEAL Bridge Consulting LLC",
    locale: "en_US",
    title: "MEAL Bridge Consulting LLC",
    description: "Stronger MEAL systems. Better decisions. Greater impact.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "MEAL Bridge — stronger MEAL systems, better decisions, greater impact" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEAL Bridge Consulting LLC",
    description: "Stronger MEAL systems. Better decisions. Greater impact.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#072a52",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
