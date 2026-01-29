import type { Metadata, Viewport } from "next";
import {
  Cormorant_Garamond,
  Great_Vibes,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Arunika & Darshana - Wedding Invitation",
  description:
    "You are cordially invited to celebrate the wedding of Arunika & Darshana on April 11, 2026",
  keywords: ["wedding", "invitation", "Arunika", "Darshana", "Sri Lanka"],
  openGraph: {
    title: "Arunika & Darshana - Wedding Invitation",
    description: "Join us to celebrate our special day",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#FDF8F3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${greatVibes.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
