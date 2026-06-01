"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Header() {

  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDonate = () => {
    window.dispatchEvent(new CustomEvent("openDonationModal"))
    setMenuOpen(false)
  }

  const navLinks = [
    { href: "#quem-somos", label: "Quem Somos" },
    { href: "#doar", label: "Como Ajudar" },
    { href: "#contato", label: "Fale Conosco" },
  ]

  return (
    <header
      className={`
        fixed top-0 left-0 z-50 w-full transition-all duration-300
        ${scrolled ? "bg-white shadow-sm" : "bg-transparent"}
      `}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* LOGO */}
        <a href="#inicio" className="flex items-center">
          <Image
            src={scrolled ? "/images/logoPadrao.png" : "/images/logoBranca.png"}
            alt="Projeto Ninho"
            width={140}
            height={60}
            className="h-[50px] w-[140px] object-contain transition-all"
          />
        </a>

        {/* MENU DESKTOP */}
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            
            <a key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition ${
                scrolled
                  ? "text-zinc-700 hover:text-zinc-900"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* BOTÃO DOE AGORA — destaque, igual Gerando Falcões */}
        <div className="hidden items-center gap-4 md:flex">
          <button
            onClick={handleDonate}
            className="rounded-full bg-purple-600 px-6 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-300"
          >
            Doe Agora
          </button>
        </div>

        {/* BOTÃO MENU MOBILE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden transition ${scrolled ? "text-zinc-800" : "text-white"}`}
        >
          <Menu size={28} />
        </button>

      </div>

      {/* OVERLAY MOBILE */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* MENU LATERAL MOBILE */}
      <div
        className={`
          fixed top-0 left-0 z-50 h-screen w-[85%] max-w-[320px] bg-white shadow-2xl transition-all duration-300 md:hidden
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >

        <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-5">
          <Image
            src="/images/logoPadrao.png"
            alt="Projeto Ninho"
            width={130}
            height={55}
            className="h-auto w-[130px]"
          />
          <button onClick={() => setMenuOpen(false)} className="text-zinc-500">
            <X size={26} />
          </button>
        </div>

        <nav className="flex flex-col px-6 py-6">
          {navLinks.map((link) => (
            
            <a  key={link.href}
              href={link.href}
              className="border-b border-zinc-100 py-4 text-base font-medium text-zinc-800 hover:text-purple-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="px-6 pt-2">
          <button
            onClick={handleDonate}
            className="w-full rounded-full bg-purple-600 py-4 text-center text-base font-bold uppercase tracking-wider text-white transition hover:bg-purple-700"
          >
            Doe Agora
          </button>
        </div>

      </div>

    </header>
  )
}