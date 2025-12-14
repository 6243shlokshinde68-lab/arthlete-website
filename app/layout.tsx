import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Keeping existing fonts
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
  title: "Arthlete | The Fitness Journey Starts Here",
  description: "Join Arthlete, the premier fitness app for elite athletes. Track workouts, analyze progress, and achieve your peak performance.",
  keywords: "fitness, sports code, athlete tracker, workout app, gym logger",
  icons: {
    icon: '/arthlete-logo.png',
    shortcut: '/arthlete-logo.png',
    apple: '/arthlete-logo.png',
  },
  openGraph: {
    title: "Arthlete | The Fitness Journey Starts Here",
    description: "Join Arthlete, the premier fitness app for elite athletes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-neutral-900`}
      >
        {children}
      </body>
    </html>
  );
}
