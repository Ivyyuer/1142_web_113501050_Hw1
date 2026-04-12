import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yuer Yang's Portfolio",
  description: "This is Yuer Yang's Portfolio, you can find more about me here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-screen antialiased`}
    >
      <body className="h-screen flex flex-col ">
        <div className="flex flex-1 ">
          <div>
            

          </div>
          
          
          <div className="bg-white-200 w-full h-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
