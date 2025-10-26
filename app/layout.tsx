import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "./providers";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const apestron = localFont({
  src: [
    {
      path: "../public/fonts/Apestron.ttf", 
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Apestron.ttf", 
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-apestron", 
});

// Yapari Variable Font (Recommended - single file for all weights)
const yapari = localFont({
  src: "../public/fonts/Yapari-Free-font/Yapari-Variable-Trial/Yapari-Variable-Trial-VF.ttf",
  variable: "--font-yapari",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cipher",
  description: "Privacy-first crypto wallet analyst",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${apestron.variable} ${yapari.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}