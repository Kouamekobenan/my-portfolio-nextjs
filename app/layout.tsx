import { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://my-portfolio-nextjs-beta-hazel.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)",  color: "#020617" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nelson Kouame — Développeur FullStack | Portfolio",
    template: "%s | Nelson Kouame",
  },
  description:
    "Nelson Kouame, Développeur FullStack basé à Abidjan, Côte d'Ivoire. Spécialisé en React, Next.js, TypeScript, Node.js et NestJS. Disponible pour freelance.",
  icons: {
    icon:      "/images/logo-12.png",
    shortcut:  "/images/logo-12.png",
    apple:     "/images/logo-12.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <head>
        {/* Initialise le thème ET la langue AVANT le premier rendu — évite le flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{
              var l=window.location.pathname.split('/')[1];
              if(l==='fr'||l==='en')document.documentElement.lang=l;
              var t=localStorage.getItem('theme');
              var d=window.matchMedia('(prefers-color-scheme:dark)').matches;
              if(t==='dark'||(!t&&d)){document.documentElement.classList.add('dark')}
              else{document.documentElement.classList.remove('dark')}
            }catch(e){}})()`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&family=Poppins:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-slate-950 transition-colors duration-300`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
