import type { Metadata } from "next";
import "@ilhamirfan/styles/global.scss"
import "@ilhamirfan/styles/button.scss"

import localFont from 'next/font/local'

const myFont = localFont({
  src: '../public/font/GeneralSans-Variable.woff2',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "goforumrah.com",
  description: "developer test case by Ilham Bachtiar Irfani",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={myFont.className}>
      <body >{children}</body>
    </html>
  );
}
