import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { ReduxProvider } from "@/lib/ReduxProvider";
import WebVitals from "@/components/WebVitals";
import "./globals.css";

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni-moda",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const siteName = "The King's Reflexology";
const siteUrl = "https://www.kingsrefleksi.com";
const siteDescription =
  "Pijat refleksi, bekam, totok wajah, dan perawatan relaksasi keluarga di 3 cabang The King's Reflexology Bogor & Bekasi. Reservasi mudah via WhatsApp. Kunjungi kami untuk pengalaman pijat sehat yang menenangkan.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#fcf9f5",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Pijat Refleksi & Keluarga di Bogor & Bekasi`,
    template: `%s — ${siteName}`,
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName,
    url: siteUrl,
    title: `${siteName} — Pijat Refleksi & Keluarga di Bogor & Bekasi`,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "The King's Reflexology — Pijat Refleksi & Keluarga di Bogor & Bekasi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Pijat Refleksi & Keluarga di Bogor & Bekasi`,
    description: siteDescription,
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
    <html lang="id" className={`${bodoniModa.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className="flex min-h-full flex-col bg-surface font-sans text-on-surface antialiased">
        <WebVitals />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem("theme");var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d);var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content",d?"#12100e":"#fcf9f5")}catch(e){}})();`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(!window.CSS||!CSS.supports||!CSS.supports("scroll-behavior","smooth")){document.addEventListener("click",function(e){var t=e.target;var a=t&&t.closest?t.closest('a[href^="#"]'):null;if(!a)return;var id=a.getAttribute("href");if(!id||id==="#")return;var el=document.querySelector(id);if(!el)return;var h=window._headerOffset||104;var top=Math.round(el.getBoundingClientRect().top+window.pageYOffset-h);e.preventDefault();window.scrollTo({top:top,behavior:"smooth"});},false)}}catch(e){}})();`,
          }}
        />
        <ReduxProvider>
          <SmoothScroll>
            <Navbar />
            {children}
            <Footer />
          </SmoothScroll>
        </ReduxProvider>
      </body>
    </html>
  );
}
