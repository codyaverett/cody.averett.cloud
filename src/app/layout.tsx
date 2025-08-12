import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cody Averett - Developer Portfolio & Blog",
  description: "The developer portfolio and blog of Cody Averett.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Analytics />
        <nav className="navbar">
          <div className="container">
            <Link href="/" className="logo">
              Cody Averett
            </Link>
            <ul className="nav-links">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/portfolio">Portfolio</Link>
              </li>
            </ul>
          </div>
        </nav>
        <main className="container">{children}</main>
        <footer className="footer">
          <div className="container">
            <p>&copy; 2025 Cody Averett. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
