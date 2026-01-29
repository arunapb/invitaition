import type { Metadata, Viewport } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import "./globals.css";

const lato = Lato({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  // Including italic since it might be nice for names
  style: ["normal", "italic"],
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
      <body className={`${lato.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
