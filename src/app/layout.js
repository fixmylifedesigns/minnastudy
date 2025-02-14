import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Stickynote, Footer, Navigation } from "@/components/ui";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = {
  metadataBase: new URL("https://minnastudy.com"),
  title: {
    default:
      "MinnaStudy - Website & Software Tools for Teachers & Content Creators",
    template: "%s | MinnaStudy",
  },
  description:
    "MinnaStudy helps teachers and content creators build custom websites, software, and learning tools. We also offer interactive Japanese language resources and games.",
  keywords: [
    "website builder for teachers",
    "teaching website creation",
    "software for educators",
    "content creator tools",
    "Japanese learning platform",
    "Japanese teaching resources",
    "language education software",
    "online teaching tools",
    "MinnaStudy",
    "Minna No Nihongo",
    "interactive language learning",
    "e-learning platform",
  ],
  authors: [{ name: "MinnaStudy" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://minnastudy.com",
    siteName: "MinnaStudy",
    title:
      "MinnaStudy - Website & Software Tools for Teachers & Content Creators",
    description:
      "Build custom websites and software with MinnaStudy. Designed for teachers, content creators, and educators. Also offering Japanese language learning tools.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MinnaStudy - Website & Software Builder for Educators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    // site: "@YourTwitterHandle", // Add your Twitter handle
    title:
      "MinnaStudy - Website & Software Tools for Teachers & Content Creators",
    description:
      "Create custom teaching websites, software, and Japanese learning tools with MinnaStudy. Perfect for educators and content creators.",
    images: ["/og-image.png"], // Use a dedicated Twitter image
  },
  robots: {
    index: true,
    follow: true,
    sitemap: "https://minnastudy.com/sitemap.xml",
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "googlef030e8ea8cda5076",
    // bing: "your-bing-verification-code",
    // yandex: "your-yandex-verification-code",
    // pinterest: "your-pinterest-verification-code",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#ffffff",
  sitemap: "https://minnastudy.com/sitemap.xml",
  alternates: {
    canonical: "https://minnastudy.com",
    languages: {
      "en-US": "https://minnastudy.com/en-US",
      "ja-JP": "https://minnastudy.com/ja-JP",
    },
    hreflang: [
      { href: "https://minnastudy.com/en-US", lang: "en" },
      { href: "https://minnastudy.com/ja-JP", lang: "ja" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className="min-h-screen flex flex-col text-black"
        suppressHydrationWarning
      >
        <Navigation />
        <Stickynote />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
