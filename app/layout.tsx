import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Waterpark Booking",
  description: "Date-based booking + ticketing for a waterpark"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <Nav />
        <main className="mx-auto max-w-4xl p-4">{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
