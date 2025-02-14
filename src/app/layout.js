import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/ui/nav";
import Link from "next/link";

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
    default: "MinnaStudy - Japanese Learning Tools, Games & Language Resources",
    template: "%s | MinnaStudy",
  },
  description:
    "MinnaStudy offers interactive Japanese learning tools, language games, and educational resources. Perfect for students, teachers, and language enthusiasts.",
  keywords: [
    "Japanese learning",
    "language games",
    "Japanese study tools",
    "learning Japanese",
    "Japanese language resources",
    "Japanese education",
    "language learning platform",
    "Japanese teaching tools",
    "Minna Study",
    "Minna No Nihongo",
    "MinnaStudy",
    "Creator Grant",
  ],
  authors: [{ name: "MinnaStudy" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://minnastudy.com",
    siteName: "MinnaStudy",
    title: "MinnaStudy - Japanese Learning Tools & Resources",
    description:
      "Interactive Japanese learning tools, games, and resources for students and teachers.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MinnaStudy - Japanese Learning Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MinnaStudy - Japanese Learning Tools & Resources",
    description:
      "Interactive Japanese learning tools, games, and resources for students and teachers.",
    images: ["/og-image.png"],
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://minnastudy.com",
    languages: {
      "en-US": "https://minnastudy.com/en-US",
      "ja-JP": "https://minnastudy.com/ja-JP",
    },
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
        <div className="w-full bg-yellow-400 text-black text-center py-2 font-semibold">
          🎉 Apply for our Creator Grant for a chance to get a free professional
          website!{" "}
          <Link href="/creatorgrant" className="underline">
            Learn more
          </Link>
        </div>
        <main className="flex-grow">{children}</main>
        {/* Footer */}
        <footer className="bg-gray-50 py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
              <p>&copy; 2025 MinnaStudy. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
