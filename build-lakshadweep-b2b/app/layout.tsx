import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Heavenly Corals — Your Trusted Lakshadweep B2B Travel Partner',
  description:
    'A Lakshadweep-rooted B2B destination partner for travel agencies across India. Competitive B2B pricing, ready-to-sell packages, reliable ground support, and long-term partnerships.',
  generator: 'v0.app',
  keywords: [
    'Lakshadweep',
    'B2B travel',
    'travel agency partner',
    'Lakshadweep packages',
    'destination management',
    'India travel B2B',
  ],
  openGraph: {
    title: 'Heavenly Corals — Your Trusted Lakshadweep B2B Travel Partner',
    description:
      'You have the customer. We have the destination. Partner with us and make Lakshadweep easier to sell.',
    type: 'website',
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0f5c66',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light ${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
