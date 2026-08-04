import type { Metadata } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
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

const siteName = "Kings Refleksi";
const siteUrl = "https://www.kingsrefleksi.com";
const siteDescription =
  "Pijat refleksi, bekam, totok wajah, dan perawatan relaksasi keluarga di 3 cabang Kings Refleksi Bogor & Bekasi. Reservasi mudah via WhatsApp. Kunjungi kami untuk pengalaman pijat sehat yang menenangkan.";

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
        alt: "Kings Refleksi — Pijat Refleksi & Keluarga di Bogor & Bekasi",
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
      <body className="flex min-h-full flex-col bg-surface font-sans text-on-surface antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem("theme");var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d)}catch(e){}})();`,
          }}
        />
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
