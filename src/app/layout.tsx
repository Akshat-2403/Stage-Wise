import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StageWise — Your personal AI presentation coach",
  description: "Find your flow, sharpen your message, and practice every presentation with your personal AI coach.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
