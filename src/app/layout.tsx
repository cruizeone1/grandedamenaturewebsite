import { Cormorant_Garamond, Inter } from "next/font/google";
import type { Metadata } from "next";
import { siteSettings } from "@/content/site-settings";
import { CartProvider } from "@/lib/cart";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MiniCart } from "@/components/MiniCart";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://grandedamenaturewebsite.pages.dev"),
  title: {
    default: siteSettings.seo.defaultTitle,
    template: `%s · ${siteSettings.brandName}`,
  },
  description: siteSettings.seo.defaultDescription,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteSettings.brandName,
    title: siteSettings.seo.defaultTitle,
    description: siteSettings.seo.defaultDescription,
    images: [{ url: siteSettings.seo.ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteSettings.seo.defaultTitle,
    description: siteSettings.seo.defaultDescription,
    images: [siteSettings.seo.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-paper text-ink font-body antialiased">
        <CartProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-forest focus:px-4 focus:py-2 focus:text-paper"
          >
            Skip to content
          </a>
          <AnnouncementBar />
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <MiniCart />
        </CartProvider>
      </body>
    </html>
  );
}
