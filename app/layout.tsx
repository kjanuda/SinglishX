

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./component/navabr";
import Footer from "./component/footer";

export const metadata: Metadata = {
  title: "SinglishX (සිංහල Singlish Typer) - Sinhala Unicode Converter",

  description:
    "SinglishX is a Sinhala Unicode Typing and Real-time Unicode Converter platform developed by Januda J. Kodithuwakku. Type Sinhala easily using Singlish typing, Sinhala keyboard, Helakuru-style typing, and real-time Sinhala Unicode conversion.",

  keywords: [
    "SinglishX",
    "සිංහල",
    "Singlish Typer",
    "Sinhala Unicode",
    "Sinhala Unicode Converter",
    "Sinhala Typing",
    "Type in Sinhala",
    "Real Time Unicode Converter",
    "Singlish typing",
    "Sinhala online keyboard",
    "Helakuru",
    "Sinhala font converter",
    "Unicode Sinhala typing",
    "Sinhala Unicode Typing",
    "UCSC",
    "University of Colombo",
    "University of Moratuwa",
    "University of Peradeniya",
    "Engineering Faculty",
    "Januda",
    "Januda J Kodithuwakku",
    "Januda Janandith",
    "Singlish.lk",
    "online keyboard Sinhala",
    "Sinhala realtime typing",
    "Sinhala language tools",
    "Sinhala AI typing",
    "Sri Lanka Sinhala typing",
  ],

  authors: [
    {
      name: "Januda J. Kodithuwakku",
    },
  ],

  creator: "Januda J. Kodithuwakku",
  publisher: "SinglishX",

  metadataBase: new URL("https://singlishx.netlify.app/"),

  verification: {
    google: "google01a98f4cbe16d4f9",
  },

  openGraph: {
    title: "SinglishX - Sinhala Unicode Typing Platform",
    description:
      "Type Sinhala easily with SinglishX. Sinhala Unicode Converter, Real-time Sinhala Typing, Helakuru-style typing and Sinhala keyboard tools.",
    url: "https://singlishx.netlify.app/",
    siteName: "SinglishX",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SinglishX - Sinhala Unicode Typing",
    description:
      "Sinhala Unicode Converter and Real-time Sinhala Typing platform by Januda J. Kodithuwakku.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}