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
const myFont = localFont({
  src: [
    {
      path: "../public/fonts/Apestron.otf", 
      weight: "400",
      style: "normal",
    },
    
        {
      path: "../public/fonts/Apestron.otf", 
      weight: "700",
      style: "normal",
    },
   
  ],
  variable: "--font-myfont", 
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
  className={` ${myFont.variable} antialiased`}
>
      
          <Providers>{children}</Providers>
      </body>
    </html>
  );
}


 