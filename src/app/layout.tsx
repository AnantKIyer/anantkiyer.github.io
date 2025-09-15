import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { StructuredData } from "@/components/structured-data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anant Kumar Iyer - Full Stack Developer & Designer",
  description: "Portfolio of Anant Kumar Iyer, a passionate full-stack developer specializing in modern web technologies, React, Next.js, and creating exceptional user experiences.",
  keywords: ["Anant Kumar Iyer", "Full Stack Developer", "React", "Next.js", "TypeScript", "Portfolio", "Web Developer"],
  authors: [{ name: "Anant Kumar Iyer" }],
  creator: "Anant Kumar Iyer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anantkiyer.github.io",
    title: "Anant Kumar Iyer - Full Stack Developer & Designer",
    description: "Portfolio of Anant Kumar Iyer, a passionate full-stack developer specializing in modern web technologies.",
    siteName: "Anant Kumar Iyer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anant Kumar Iyer - Full Stack Developer & Designer",
    description: "Portfolio of Anant Kumar Iyer, a passionate full-stack developer specializing in modern web technologies.",
    creator: "@anantkiyer",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <StructuredData />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
                  <div className="min-h-screen flex flex-col">
                    <Navigation />
                    <main className="flex-1">
                      {children}
                    </main>
                    <Footer />
                  </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
