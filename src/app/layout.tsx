import type { Metadata, Viewport } from "next";
import { Playfair_Display, Alex_Brush, Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { ReduxProvider } from "@/lib/ReduxProvider";
import WebVitals from "@/components/WebVitals";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const alexBrush = Alex_Brush({
  variable: "--font-alex-brush",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const siteName = "The King's Reflexology";
const siteUrl = "https://kingsrefleksi.com";
const siteDescription =
  "Pijat refleksi, bekam, totok wajah, dan perawatan relaksasi keluarga di 3 cabang The King's Reflexology Bogor & Bekasi. Reservasi mudah via WhatsApp. Kunjungi kami untuk pengalaman pijat sehat yang menenangkan.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Pijat Refleksi & Keluarga di Bogor & Bekasi`,
    template: `%s — ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "pijat refleksi",
    "pijat refleksi Bogor",
    "pijat refleksi Bekasi",
    "refleksi Bogor Bekasi",
    "pijat keluarga Bogor",
    "bekam Bogor",
    "totok wajah Bogor",
    "ear candle Bekasi",
    "terapi pijat tradisional",
    "spa keluarga Bogor Bekasi",
    "The King's Reflexology",
  ],
  creator: siteName,
  publisher: siteName,
  category: "Pijat Refleksi & Perawatan Tubuh",
  formatDetection: {
    telephone: true,
    email: false,
    address: false,
    date: false,
    url: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: ["en_US"],
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
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Pijat Refleksi & Keluarga di Bogor & Bekasi`,
    description: siteDescription,
    site: "@kingsrefleksi",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "The King's Reflexology — Pijat Refleksi & Keluarga di Bogor & Bekasi",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  appleWebApp: {
    capable: true,
    title: siteName,
    statusBarStyle: "default",
  },
  manifest: "/manifest.webmanifest",
  other: {
    "geo.region": "ID-JB",
    "geo.placename": "Bogor",
    "geo.position": "-6.5567;106.8398",
    ICBM: "-6.5567, 106.8397",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${playfair.variable} ${alexBrush.variable} ${manrope.variable}`} suppressHydrationWarning>
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
            __html: `(function(){try{var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content","#000000")}catch(e){}})();`,
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
