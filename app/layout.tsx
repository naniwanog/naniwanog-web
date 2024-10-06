import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./component/Header";
import Footer from "./component/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://naniwanog.jp"),
  title: {
    template: "%s | NaniwaNOG",
    default: "NaniwaNOG",
  },
  description:
    "NaniwaNOGとは、Naniwa Network Operators‘ Groupを意味し、インターネットに於ける技術的事項、および、それにまつわるオペレーションに関する事項を議論、検討、紹介することにより関西エリアを中心としたインターネット技術者、および、利用者に貢献することを目的としたグループです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
