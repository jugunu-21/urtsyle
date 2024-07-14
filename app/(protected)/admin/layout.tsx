"use client"
import { ThemeProvider } from 'next-themes';
import { Inter } from "next/font/google";
import { Sidetooltip } from '@/components/admin/product/productutils/layout/sidetooltip';
import React, { useEffect, useRef, useState } from 'react';
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    if (!footerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Adjust this value based on when you consider the footer "visible"
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
          <Sidetooltip />
          <div className={inter.className}>{children}</div>
        </div>
      </ThemeProvider>
    </>
  );
}


