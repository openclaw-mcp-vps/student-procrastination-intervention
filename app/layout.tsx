import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FocusGuard – Stop Procrastinating, Start Studying",
  description: "Detect and intervene on student procrastination patterns with smart reminders and personalized nudges."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0f157cf7-41af-473e-bf36-c032c938c749"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
