import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Outdoor Renovations | Premium Landscape Design & Build — Austin, TX",
    template: "%s | Outdoor Renovations",
  },
  description:
    "Outdoor Renovations transforms residential and commercial properties across the Austin metro with expert landscape design, hardscaping, custom carpentry, and white-glove property management. 16+ years of experience. Licensed, bonded, and insured.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Outdoor Renovations",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${poppins.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
