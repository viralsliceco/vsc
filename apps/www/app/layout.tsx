import { Geist, Geist_Mono } from "next/font/google"

import "@workspace/ui/globals.css"
import { Providers } from "@/components/providers"

import { Analytics } from "@vercel/analytics/next"
import { Metadata, Viewport } from "next"

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap',
  preload: true,
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: 'swap',
  preload: false,
})

export const metadata: Metadata = {
  title: {
    default: "Drive Explosive Growth with Viral Marketing - Viral Slice Co.",
    template: "%s | Viral Slice Co."
  },
  description: "Transform your brand with viral marketing that drives explosive growth. Viral Slice Co. creates content that captivates audiences and delivers measurable results for businesses worldwide.",
  keywords: [
    "viral marketing",
    "content marketing", 
    "social media marketing",
    "brand growth",
    "viral content creation",
    "digital marketing agency",
    "influencer marketing",
    "content strategy",
    "brand awareness",
    "marketing ROI"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://viralsliceco.com",
    siteName: "Viral Slice Co.",
    title: "Drive Explosive Growth with Viral Marketing - Viral Slice Co.",
    description: "Transform your brand with viral marketing that drives explosive growth. Viral Slice Co. creates content that captivates audiences and delivers measurable results for businesses worldwide.",
    images: [
      {
        url: "/vsc-large.png",
        width: 1200,
        height: 630,
        alt: "Viral Slice Co. - Drive Explosive Growth with Viral Marketing",
        type: "image/png",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@viralsliceco",
    creator: "@viralsliceco",
    title: "Drive Explosive Growth with Viral Marketing - Viral Slice Co.",
    description: "Transform your brand with viral marketing that drives explosive growth. Viral Slice Co. creates content that captivates audiences and delivers measurable results.",
    images: [
      {
        url: "/vsc-large.png",
        alt: "Viral Slice Co. - Drive Explosive Growth with Viral Marketing",
      }
    ],
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
  alternates: {
    canonical: "https://viralsliceco.com",
  },
  metadataBase: new URL("https://viralsliceco.com"),
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/icons/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512", 
        url: "/icons/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/icons/site.webmanifest",
  authors: [{ name: "Viral Slice Co.", url: "https://viralsliceco.com" }],
  creator: "Viral Slice Co.",
  publisher: "Viral Slice Co.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "marketing",
  classification: "Business",
  applicationName: "Viral Slice Co.",
  appleWebApp: {
    capable: true,
    title: "Viral Slice Co.",
    statusBarStyle: "black-translucent",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  other: {
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/icons/browserconfig.xml",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
