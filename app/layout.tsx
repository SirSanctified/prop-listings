import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";

const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700", "900"] });

export const metadata: Metadata = {
  title:
    "RealtyConnect | Your Premier Destination for Seamless Property Exploration and Acquisition",
  description:
    "Discover a vast, constantly-updated database of real estate listings across residential, commercial, and investment properties. Connect with trusted local agents who can guide you through every step of the home buying, selling, or renting process. Navigate the complex world of real estate with ease using RealtyConnect's innovative search tools, detailed property insights, and comprehensive resources.",
  icons: {
    icon: "/favicon.ico",
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
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_BASE_URL!,
    siteName: "RealtyConnect",
    description:
      "Discover a vast database of real estate listings, connect with trusted agents, and navigate the home buying/selling process with ease. Elevate your property journey with RealtyConnect.",
    title:
      "RealtyConnect | Your Premier Destination for Seamless Property Exploration and Acquisition",
    images: [
      {
        url: "/images/preview.png",
        alt: "RealtyConnect - Your Premier Destination for Seamless Property Exploration and Acquisition",
        width: 1200,
        height: 630,
      },
    ],
    determiner: "auto",
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(" bg-gray-200", lato.className)}
        suppressHydrationWarning
      >
        <Nav />
        <main className="mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
