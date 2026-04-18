import type { Metadata } from "next";
import { Roboto, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Rajashekar Bommera | Full-Stack Developer",
  description:
    "Professional portfolio for a full-stack developer focused on Next.js, React, Node.js, and AI agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${dmSerif.variable}`}>{children}</body>
    </html>
  );
}
