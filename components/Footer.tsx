"use client"

import { FaInstagram, FaYoutube, FaLinkedin, FaWhatsapp } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-zinc-50">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-8">

        {/* Parceiros */}
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-purple-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-purple-700">
            Parceiros
          </span>
          <p className="mt-3 text-sm text-zinc-400">Organizações que tornam nosso trabalho possível</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-10">
            <Image src="/images/parceiros/Benevity_logo.png" alt="Benevity" width={120} height={48} className="h-10 w-auto object-contain transition hover:scale-105" />
            <Image src="/images/parceiros/CHAMMAS.png" alt="Chammas" width={120} height={48} className="h-30 w-auto object-contain transition hover:scale-105" />
            <Image src="/images/parceiros/hotmart-logo.png" alt="Hotmart" width={120} height={48} className="h-10 w-auto object-contain transition hover:scale-105" />
            <Image src="/images/parceiros/Keevo_Branca.webp" alt="Keevo" width={120} height={48} className="h-10 w-auto object-contain transition hover:scale-105" />
            <Image src="/images/parceiros/Panere-cor.png" alt="Panere" width={120} height={48} className="h-20 w-auto object-contain transition hover:scale-105" />
            <Image src="/images/parceiros/InstitutoVilma.png" alt="Instituto Vilma" width={120} height={48} className="h-13 w-auto object-contain transition hover:scale-105" />
          </div>
        </div>

        <div className="border-t border-zinc-200" />

        {/* Apoiadores */}
        <div className="my-16 text-center">
          <span className="inline-block rounded-full bg-purple-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-purple-700">
            Apoiadores
          </span>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-10">
            <Image src="/images/apoiadores/BENDITA.png" alt="Bendita" width={120} height={48} className="h-10 w-auto object-contain transition hover:scale-105" />
            <Image src="/images/apoiadores/Elo-icon.png" alt="Elo" width={120} height={48} className="h-10 w-auto object-contain transition hover:scale-105" />
            <Image src="/images/apoiadores/Goodera_Logo.png" alt="Goodera" width={120} height={48} className="h-10 w-auto object-contain transition hover:scale-105" />
            <Image src="/images/apoiadores/multsaúde.png" alt="Multsaúde" width={100} height={40} className="h-8 w-auto object-contain transition hover:scale-105" />
            <Image src="/images/apoiadores/Alvorada.png" alt="Alvorada" width={120} height={48} className="h-10 w-auto object-contain transition hover:scale-105" />
            <Image src="/images/apoiadores/ASSIS.png" alt="Assis" width={120} height={48} className="h-10 w-auto object-contain transition hover:scale-105" />
          </div>
        </div>

        <div className="border-t border-zinc-200" />

        {/* Info + Redes */}
        <div className="mt-12 flex flex-col items-center gap-5 text-center">
          <p className="text-sm leading-7 text-zinc-500">
            Projeto Educacional Ninho | CNPJ: 29.005.234/0001-03
            <br />
            contato@projetoninho.org | (31) 99673-6912 (WhatsApp)
          </p>
          
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-zinc-200 py-6 text-center">
        <p className="text-xs text-zinc-400">
          © {new Date().getFullYear()} Projeto Educacional Ninho. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}