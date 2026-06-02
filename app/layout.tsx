import type { Metadata } from "next"
import { Geist } from "next/font/google"

import "./globals.css"

import Header from "@/components/Header"
import Footer from "@/components/Footer"

const geist = Geist({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Projeto Ninho — Transformando vidas através da educação",
  description: "O Projeto Ninho cria oportunidades reais para crianças e famílias em situação de vulnerabilidade social, promovendo educação de excelência, fortalecimento familiar e desenvolvimento comunitário em Lagoa Santa/MG.",
  keywords: ["projeto social", "ONG", "educação", "Lagoa Santa", "doação", "vulnerabilidade social", "Projeto Ninho"],
  openGraph: {
    title: "Projeto Ninho — Transformando vidas através da educação",
    description: "Ajude a construir um futuro melhor para crianças e famílias em vulnerabilidade social.",
    url: "https://www.projetoninho.org",
    siteName: "Projeto Ninho",
    images: [
      {
        url: "https://www.projetoninho.org/images/logoPadrao.png",
        width: 1200,
        height: 630,
        alt: "Projeto Ninho",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
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