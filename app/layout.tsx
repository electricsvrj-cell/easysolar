import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'Easy Solar Solution',
  description: 'Leading Australian solar installation company. Get premium residential and commercial solar systems with expert installation. Request your free quote today!',
  keywords: 'solar panels, solar installation, solar energy, Australia, residential solar, commercial solar, solar battery, 6.6kw solar, 10kw solar, 13kw solar',
}

import { ScrollToTop } from '@/components/scroll-to-top'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <ScrollToTop />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
