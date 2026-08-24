import type { Metadata } from "next";
import ThemeRegistry from "@/theme/ThemeRegistry";
import { profile } from "@/data/portfolio";

// Using a system font stack (defined in src/theme/theme.ts) instead of
// next/font/google so the production build never depends on reaching
// fonts.googleapis.com — no risk of a flaky/offline/proxied build failing.
// Swap in next/font/google (or next/font/local) here if you'd rather
// self-host a specific webfont like Inter.

export const metadata: Metadata = {
  title: `${profile.name} — Portfolio`,
  description: profile.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
