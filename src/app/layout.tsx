import type { Metadata } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  "Pijat refleksi, bekam, dan totok wajah dengan 3 cabang di Bogor & Bekasi. Kunjungi kami untuk relaksasi keluarga.";

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
  },
  twitter: {
    card: "summary",
    title: `${siteName} — Pijat Refleksi & Keluarga di Bogor & Bekasi`,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${bodoniModa.variable} ${manrope.variable}`}>
      <body className="flex min-h-full flex-col bg-surface font-sans text-on-surface antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem("theme");var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d)}catch(e){}})();`,
          }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
