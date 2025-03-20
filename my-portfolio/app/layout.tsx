"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/layout/header";
import ThemeProviders from "@/components/providers/ThemeProvider";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SplashScreen from "@/components/loadingScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  const isHome = pathName === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    console.log(isLoading && isHome);
    // if (isLoading) {
    //   return;
    // }
  }, [isLoading]);

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "flex min-h-screen flex-col font-sans antialiased"
        )}
      >
        <ThemeProviders>
          {isLoading && isHome ? (
            <SplashScreen finishLoading={() => setIsLoading(false)} />
          ) : (
            <>
              <Header />
              {children}
            </>
          )}
        </ThemeProviders>
      </body>
    </html>
  );
}
