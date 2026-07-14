import { Footer } from "@/lib/components/Footer";
import { Main } from "@/lib/components/ux/Main";
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
  title: "Tech Demo - Jesse A. Johnson (Fizzog)",
  description: "Carefully handcrafted for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Main className="min-h-screen px-6 pt-12">
          {children}
          <Footer />
        </Main>
      </body>
    </html>
  );
}
