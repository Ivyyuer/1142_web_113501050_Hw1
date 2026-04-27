
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FullBackground from "../components/FullBackground";

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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-screen">
        
        {/* --- 1. 全域漸層背景層 --- */}
        <FullBackground />

        {/* --- 2. 頁面內容層 --- */}
        <main className="relative z-10 w-full h-full">
          {children}
        </main>

      </body>
    </html>
  );
}