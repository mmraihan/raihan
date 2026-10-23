import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingElements from "./components/FloatingElements";
import PageLoader from "./components/PageLoader";
import dynamic from "next/dynamic";

// Defer the chatbot bundle until after hydration
const Chatbot = dynamic(() => import("./components/Chatbot"));

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mubasshir Raihan",
  description:
    "Senior Software Engineer specializing in .NET, microservices, and AI-powered backend systems.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0e17" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark scroll-smooth ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-bg font-sans text-fg antialiased" suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              try {
                var saved = localStorage.getItem('theme');
                var theme = saved ? saved : 'dark';
                document.documentElement.classList.toggle('dark', theme === 'dark');
              } catch (e) {}
            })();
          `}}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-xl focus:bg-surface focus:px-4 focus:py-2 focus:text-fg focus:shadow-lg"
        >
          Skip to content
        </a>
        <ThemeProvider>
          <PageLoader />
          <FloatingElements />
          <Navbar />
          <main id="main-content" className="relative z-10 min-h-screen pt-16">
            {children}
          </main>
          <Footer />
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
