import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://naniwanog.jp'),
  title: {
    template: '%s | NaniwaNOG',
    default: 'NaniwaNOG',
  },
  description:
    'NaniwaNOGとは、Naniwa Network Operators\' Groupを意味し、インターネットに於ける技術的事項、および、それにまつわるオペレーションに関する事項を議論、検討、紹介することにより関西エリアを中心としたインターネット技術者、および、利用者に貢献することを目的としたグループです。',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ja'>
      <body>
        {children}
      </body>
    </html>
  )
}
