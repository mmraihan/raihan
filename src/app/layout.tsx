import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import dynamic from "next/dynamic";

// Defer heavy, animation-heavy components to the client and after hydration
const FloatingElements = dynamic(() => import("./components/FloatingElements"));
const Chatbot = dynamic(() => import("./components/Chatbot"));
const PageLoader = dynamic(() => import("./components/PageLoader"));

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mubasshir Raihan",
  description:
    "Senior Software Engineer specializing in .NET, microservices, and AI-powered backend systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="transition-colors scroll-smooth" suppressHydrationWarning>
    <body className={`bg-white dark:bg-gray-900 transition-colors dark:text-white overflow-x-hidden ${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              try {
                var saved = localStorage.getItem('theme');
                var theme = saved ? saved : 'dark';
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            })();
          `}}
        />
        <ThemeProvider>
          <PageLoader />
          <FloatingElements />
          <Navbar />
          <main className="min-h-screen pt-16 sm:pt-20 md:pt-24 relative z-10 overflow-x-hidden">
            {children}
          </main>
          <Footer />
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
