"use client"

import { useState } from "react"
import emailjs from "@emailjs/browser"

export default function ContactForm() {

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
  })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async () => {
    if (!formData.nome || !formData.email) return

    setSending(true)
    setError(false)

    try {
      await emailjs.send(
         "service_zvvqtms",
         "template_fnr2klo",
        {
          from_name: formData.nome,
          from_email: formData.email,
          telefone: formData.telefone,
        },
        "RLPpbcXvslucA_r_l"
      )
      setSent(true)
      setFormData({ nome: "", email: "", telefone: "" })
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <span className="text-5xl">✅</span>
        <p className="text-lg font-semibold text-zinc-900">Mensagem enviada!</p>
        <p className="text-sm text-zinc-500">Entraremos em contato em breve.</p>
        <button
          onClick={() => setSent(false)}
          className="mt-2 text-xs text-purple-600 underline"
        >
          Enviar outra mensagem
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-5">

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
          Nome completo
        </label>
        <input
          type="text"
          placeholder="Seu nome"
          value={formData.nome}
          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
          className="w-full rounded-xl border border-zinc-200 bg-white px-5 py-3.5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
          E-mail
        </label>
        <input
          type="email"
          placeholder="seu@email.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full rounded-xl border border-zinc-200 bg-white px-5 py-3.5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
          Telefone
        </label>
        <input
          type="tel"
          placeholder="(00) 00000-0000"
          value={formData.telefone}
          onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
          className="w-full rounded-xl border border-zinc-200 bg-white px-5 py-3.5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
        />
      </div>

      {error && (
        <p className="text-xs text-red-500">
          Erro ao enviar. Tente novamente.
        </p>
      )}

      <button
        onClick={handleSubmit}
        disabled={sending}
        className="mt-2 w-full rounded-xl bg-purple-600 py-4 text-sm font-semibold text-white transition hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-200 disabled:opacity-60"
      >
        {sending ? "Enviando..." : "Enviar mensagem →"}
      </button>

      <p className="text-center text-xs text-zinc-400">
        Seus dados não serão compartilhados com terceiros.
      </p>

    </div>
  )
}