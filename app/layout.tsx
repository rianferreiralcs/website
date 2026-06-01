import type { Metadata } from "next"
import { Geist } from "next/font/google"

import "./globals.css"

import Header from "@/components/Header"
import Footer from "@/components/Footer"

const geist = Geist({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Projeto Ninho",
  description: "Transformando vidas através da educação",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geist.className} bg-white text-black`}>

        <Header />

        {children}

        <Footer />

      </body>
    </html>
  )
}