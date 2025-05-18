import '@/app/globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://naniwanog.jp'),
  title: {
    default: 'NaniwaNOG',
    template: '%s | NaniwaNOG',
  },
  description: 'NaniwaNOGとは、Naniwa Network Operators\' Groupを意味します。インターネットにおける技術的事項を議論することで、関西地域のネットワーク運用者および利用者に貢献することを目的とします。',
  openGraph: {
    title: 'NaniwaNOG',
    description: 'NaniwaNOGとは、Naniwa Network Operators\' Groupを意味します。インターネットにおける技術的事項を議論することで、関西地域のネットワーク運用者および利用者に貢献することを目的とします。',
    url: 'https://naniwanog.jp',
    siteName: 'NaniwaNOG',
    images: [
      {
        url: 'https://naniwanog.jp/ogp.png',
        width: 1200,
        height: 630,
        alt: 'NaniwaNOG Logo',
      },
    ],
    locale: 'ja-JP',
    type: 'website',
  },
}

export const runtime = "edge";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ja'>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
