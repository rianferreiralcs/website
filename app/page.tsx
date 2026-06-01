"use client"
import Footer from "@/components/Footer"
<Footer />
import { useEffect, useState } from "react"
import { FaInstagram, FaYoutube, FaLinkedin, FaWhatsapp } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import HeroSlider from "@/components/HeroSlider"
import Image from "next/image"

type ModalStep = "escolha" | "direta" | "campanha" | "ir"

export default function Home() {

  const [modalOpen, setModalOpen] = useState(false)
  const [modalStep, setModalStep] = useState<ModalStep>("escolha")
  const [selectedAmount, setSelectedAmount] = useState("R$ 30")
  const [customAmount, setCustomAmount] = useState("")
  const [freq, setFreq] = useState<"unica" | "mensal">("unica")

  const openModal = (step: ModalStep = "escolha") => {
    setModalStep(step)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  useEffect(() => {
    const handler = () => openModal("escolha")
    window.addEventListener("openDonationModal", handler)
    return () => window.removeEventListener("openDonationModal", handler)
  }, [])

  return (
    <main>

      <HeroSlider />

      {/* FRASE DE IMPACTO */}
      <section className="bg-white -mt-25 pb-20 relative z-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-purple-600">
            Projeto Ninho
          </span>
          <h2 className="mt-6 text-4xl font-bold leading-tight text-zinc-900 md:text-5xl">
            Transformando vidas através da educação
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
            Acreditamos que cada criança merece a chance de construir um futuro melhor.
          </p>
        </div>
      </section>

      {/* GALERIA */}
      <section className="bg-white pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            navigation={true}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            breakpoints={{ 768: { slidesPerView: 3 } }}
          >
            <SwiperSlide>
              <Image src="/images/alunoarvore.jpg" alt="Criança estudando" width={1200} height={800} className="h-[400px] w-full rounded-3xl object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/images/alice.JPG" alt="Sala de aula" width={1200} height={800} className="h-[400px] w-full rounded-3xl object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/images/alunalivro.jpg" alt="Projeto Social" width={1200} height={800} className="h-[400px] w-full rounded-3xl object-cover" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section id="quem-somos" className="bg-zinc-50 py-24 overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-purple-600">
              Quem Somos
            </span>
            <h2 className="mt-6 text-4xl font-bold leading-tight text-zinc-900 md:text-6xl">
              Transformando vidas através da educação, acolhimento e oportunidades.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
              O Projeto Ninho nasceu para criar oportunidades reais para crianças, adolescentes e famílias em situação de vulnerabilidade social, promovendo educação de excelência, fortalecimento familiar e desenvolvimento comunitário.
            </p>
            <button
              onClick={() => openModal("escolha")}
              className="mt-8 inline-flex rounded-full bg-black px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition hover:opacity-80"
            >
              Fazer Doação
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-10">
            {[
              "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop",
            ].map((src, i) => (
              <div key={i} className="overflow-hidden rounded-3xl">
                <Image src={src} alt="Projeto Social" width={800} height={800} className="h-[180px] md:h-[220px] w-full object-cover transition duration-500 hover:scale-110" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSÃO */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-purple-600">
            Nossa Missão
          </span>
          <h2 className="mt-6 text-4xl font-bold text-zinc-900 md:text-5xl">
            Combatendo a desigualdade social através da educação
          </h2>
          <p className="mt-10 text-lg leading-9 text-zinc-600">
            Combatemos a desigualdade social e promovemos a mobilidade social ajudando famílias de baixa renda a quebrarem o ciclo da pobreza geracional por meio da educação formal de excelência, do engajamento familiar e do trabalho comunitário.
            <br /><br />
            Tornamos possível um novo e promissor destino para as novas gerações de cada família parceira.
          </p>
        </div>
      </section>

      {/* FOTO DESTAQUE */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <Image src="/images/crianca-estudando.jpg" alt="Criança estudando" width={1600} height={900} className="h-[300px] md:h-[500px] w-full object-cover" />
          </div>
        </div>
      </section>

      {/* SEÇÃO DOAÇÃO */}
      <section id="doar" className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-6xl px-6">

          <span className="inline-block rounded-full bg-purple-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-purple-700">
            Doe agora
          </span>
          <h2 className="mt-4 max-w-xl text-4xl font-bold leading-tight text-zinc-900 md:text-5xl">
            Transforme uma vida hoje
          </h2>
          <p className="mt-4 mb-12 max-w-lg text-base leading-7 text-zinc-500">
            Sua contribuição garante educação de excelência, acolhimento e oportunidades reais para crianças e famílias em vulnerabilidade.
          </p>

          <div className="grid gap-6 md:grid-cols-3">

            {/* Doação Direta */}
            <div className="flex flex-col gap-5 rounded-2xl border-2 border-purple-600 bg-white p-7">
              <span className="w-fit rounded-md bg-purple-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-purple-700">
                Mais popular
              </span>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-xl">🤍</div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900">Doação Direta</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  Escolha um valor e doe uma única vez ou quantas vezes quiser. Toda contribuição faz diferença.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["R$ 30", "R$ 50", "R$ 100", "R$ 250"].map((val) => (
                  <button
                    key={val}
                    onClick={() => setSelectedAmount(val)}
                    className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                      selectedAmount === val
                        ? "border-purple-600 bg-purple-600 text-white"
                        : "border-zinc-300 text-zinc-700 hover:border-purple-400"
                    }`}
                  >
                    {val}
                  </button>
                ))}
              </div>
              <button
                onClick={() => openModal("direta")}
                className="mt-auto w-full rounded-xl bg-purple-600 py-3.5 text-sm font-semibold text-white transition hover:bg-purple-700"
              >
                Fazer doação →
              </button>
            </div>

            {/* Campanha Solidária */}
            <div className="flex flex-col gap-5 rounded-2xl border border-zinc-200 bg-white p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-xl">👥</div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900">Campanha Solidária</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  Use seu aniversário ou evento da empresa para fazer o bem. Todos se divertem e nossas crianças ganham um futuro.
                </p>
              </div>
              <button
                onClick={() => openModal("campanha")}
                className="mt-auto w-full rounded-xl border border-zinc-300 bg-zinc-50 py-3.5 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100"
              >
                Criar campanha →
              </button>
            </div>

            {/* Imposto de Renda */}
            <div className="flex flex-col gap-5 rounded-2xl border border-zinc-200 bg-white p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-xl">📄</div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900">Imposto de Renda</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  Doe parte do seu IR sem pagar mais impostos nem ter sua restituição reduzida. Simples e seguro.
                </p>
              </div>
              <button
                onClick={() => openModal("ir")}
                className="mt-auto w-full rounded-xl border border-zinc-300 bg-zinc-50 py-3.5 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100"
              >
                Saiba como →
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* MODAL DE DOAÇÃO */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}
        >
          <div className="relative w-full max-w-lg rounded-2xl border border-zinc-200 bg-white p-8">

            <button
              onClick={closeModal}
              className="absolute right-4 top-4 text-zinc-400 hover:text-zinc-700 text-xl leading-none"
            >
              ✕
            </button>

            {/* TELA DE ESCOLHA */}
            {modalStep === "escolha" && (
              <>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">Como você quer ajudar?</h3>
                <p className="text-sm text-zinc-500 mb-6">Escolha a modalidade de doação</p>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => setModalStep("direta")}
                    className="flex items-start gap-4 rounded-xl border border-zinc-200 p-4 text-left transition hover:border-purple-400 hover:bg-purple-50"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-purple-100 text-lg">🤍</div>
                    <div>
                      <p className="font-semibold text-zinc-900">Doação Direta</p>
                      <p className="text-sm text-zinc-500">Escolha um valor e doe uma única vez ou mensalmente.</p>
                    </div>
                  </button>
                  <button
                    onClick={() => setModalStep("campanha")}
                    className="flex items-start gap-4 rounded-xl border border-zinc-200 p-4 text-left transition hover:border-blue-400 hover:bg-blue-50"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-blue-100 text-lg">👥</div>
                    <div>
                      <p className="font-semibold text-zinc-900">Campanha Solidária</p>
                      <p className="text-sm text-zinc-500">Use seu aniversário ou evento para arrecadar doações.</p>
                    </div>
                  </button>
                  <button
                    onClick={() => setModalStep("ir")}
                    className="flex items-start gap-4 rounded-xl border border-zinc-200 p-4 text-left transition hover:border-green-400 hover:bg-green-50"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-green-100 text-lg">📄</div>
                    <div>
                      <p className="font-semibold text-zinc-900">Imposto de Renda</p>
                      <p className="text-sm text-zinc-500">Doe parte do seu IR sem pagar mais impostos.</p>
                    </div>
                  </button>
                </div>
              </>
            )}

            {/* TELA DOAÇÃO DIRETA */}
            {modalStep === "direta" && (
              <>
                <button onClick={() => setModalStep("escolha")} className="mb-4 flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-600 transition">
                  ← Voltar
                </button>
                <h3 className="text-xl font-bold text-zinc-900">Doação Direta</h3>
                <p className="mt-1 mb-6 text-sm text-zinc-500">Escolha o valor e a frequência da sua doação.</p>

                <div className="mb-5 flex rounded-full bg-zinc-100 p-1">
                  <button
                    onClick={() => setFreq("unica")}
                    className={`flex-1 rounded-full py-2 text-sm font-medium transition ${freq === "unica" ? "bg-purple-600 text-white" : "text-zinc-500"}`}
                  >
                    Única
                  </button>
                  <button
                    onClick={() => setFreq("mensal")}
                    className={`flex-1 rounded-full py-2 text-sm font-medium transition ${freq === "mensal" ? "bg-purple-600 text-white" : "text-zinc-500"}`}
                  >
                    Mensal
                  </button>
                </div>

                <div className="mb-5 flex flex-wrap gap-2">
                  {["R$ 30", "R$ 50", "R$ 100", "R$ 250", "R$ 500"].map((val) => (
                    <button
                      key={val}
                      onClick={() => { setSelectedAmount(val); setCustomAmount("") }}
                      className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                        selectedAmount === val && !customAmount
                          ? "border-purple-600 bg-purple-600 text-white"
                          : "border-zinc-300 text-zinc-700 hover:border-purple-400"
                      }`}
                    >
                      {val}
                    </button>
                  ))}
                </div>

                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-zinc-400">
                  Outro valor
                </label>
                <input
                  type="number"
                  placeholder="R$ 0,00"
                  value={customAmount}
                  onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount("") }}
                  className="mb-5 w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-900 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                />

                <button
                  onClick={() => { window.open("http://souninho.projetoninho.org/", "_blank"); closeModal() }}
                  className="w-full rounded-xl bg-purple-600 py-4 text-sm font-semibold text-white transition hover:bg-purple-700"
                >
                  Continuar →
                </button>
                <p className="mt-3 text-center text-xs text-zinc-400">🔒 Seus dados são protegidos e não serão compartilhados.</p>
              </>
            )}

            {/* TELA CAMPANHA SOLIDÁRIA */}
            {modalStep === "campanha" && (
              <>
                <button onClick={() => setModalStep("escolha")} className="mb-4 flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-600 transition">
                  ← Voltar
                </button>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl mb-4">👥</div>
                <h3 className="text-xl font-bold text-zinc-900">Campanha Solidária</h3>
                <p className="mt-2 mb-6 text-sm leading-6 text-zinc-500">
                  Use seu aniversário, evento da empresa ou qualquer ocasião especial para arrecadar doações para o Projeto Ninho. Todos se divertem e nossas crianças ganham um futuro melhor.
                </p>
                <button
                  onClick={() => { window.open("http://souninho.projetoninho.org/", "_blank"); closeModal() }}
                  className="w-full rounded-xl bg-blue-600 py-4 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Criar minha campanha →
                </button>
                <p className="mt-3 text-center text-xs text-zinc-400">🔒 Seus dados são protegidos e não serão compartilhados.</p>
              </>
            )}

            {/* TELA IMPOSTO DE RENDA */}
            {modalStep === "ir" && (
              <>
                <button onClick={() => setModalStep("escolha")} className="mb-4 flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-600 transition">
                  ← Voltar
                </button>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl mb-4">📄</div>
                <h3 className="text-xl font-bold text-zinc-900">Doação pelo IR</h3>
                <p className="mt-2 mb-6 text-sm leading-6 text-zinc-500">
                  Você pode destinar parte do seu Imposto de Renda ao Projeto Ninho sem pagar mais impostos e sem reduzir sua restituição. É simples, seguro e faz uma diferença enorme na vida das nossas crianças.
                </p>
                <div className="mb-6 rounded-xl bg-green-50 border border-green-100 p-4 text-sm text-green-800">
                  💡 Pessoas físicas podem deduzir até <strong>6%</strong> do IR devido. Pessoas jurídicas até <strong>1%</strong>.
                </div>
                <button
                  onClick={() => { window.open("http://souninho.projetoninho.org/", "_blank"); closeModal() }}
                  className="w-full rounded-xl bg-green-600 py-4 text-sm font-semibold text-white transition hover:bg-green-700"
                >
                  Saiba como fazer →
                </button>
                <p className="mt-3 text-center text-xs text-zinc-400">🔒 Seus dados são protegidos e não serão compartilhados.</p>
              </>
            )}

          </div>
        </div>
      )}

      {/* CONTATO */}
      <section id="contato" className="bg-white py-24 relative overflow-hidden">
        <div className="pointer-events-none absolute -top-20 -right-20 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,#ede9fe,transparent_70%)]" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,#f3e8ff,transparent_70%)]" />

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="mb-16">
            <span className="inline-block rounded-full bg-purple-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-purple-700">
              Contato
            </span>
            <h2 className="mt-5 max-w-xl text-4xl font-bold leading-tight text-zinc-900 md:text-5xl">
              Fale com a gente
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-zinc-500">
              Quer conhecer nosso trabalho, fazer uma doação ou se tornar parceiro? Estamos à disposição.
            </p>
          </div>

          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-zinc-900">Projeto Ninho</h3>
              <div className="mt-8 space-y-7">
                {[
                  { icon: "📍", label: "Endereço", value: "Rua Vinicius de Moraes, 465 - Moradas da Lapinha, Lagoa Santa - MG, 33400-000" },
                  { icon: "📞", label: "Telefone", value: "(31) 99673-6912" },
                  { icon: "✉️", label: "E-mail", value: "contato@projetoninho.org" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-purple-100 text-lg">{item.icon}</div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">{item.label}</p>
                      <p className="mt-1 text-sm font-medium text-zinc-800">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="my-10 h-0.5 w-10 rounded-full bg-purple-600" />

              <p className="mb-4 text-xs text-zinc-400">Nos acompanhe nas redes</p>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/ninhoprojetoeducacional/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 text-white transition hover:opacity-80"><FaInstagram size={17} /></a>
                <a href="https://www.youtube.com/channel/UChxnFm7LlPhkV2Y5bxunzCQ/featured" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600 text-white transition hover:opacity-80"><FaYoutube size={17} /></a>
                <a href="https://www.linkedin.com/company/projetoninho/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white transition hover:opacity-80"><FaLinkedin size={17} /></a>
                <a href="https://wa.me/5531996736912" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 text-white transition hover:opacity-80"><FaWhatsapp size={17} /></a>
                <a href="mailto:contato@projetoninho.org" className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600 text-white transition hover:opacity-80"><MdEmail size={17} /></a>
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-10">
              <h3 className="mb-7 text-xl font-bold text-zinc-900">Entre em contato</h3>
              <div className="space-y-5">
                {[
                  { label: "Nome completo", type: "text", placeholder: "Seu nome" },
                  { label: "E-mail", type: "email", placeholder: "seu@email.com" },
                  { label: "Telefone", type: "tel", placeholder: "(00) 00000-0000" },
                ].map((field) => (
                  <div key={field.label} className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-widest text-zinc-400">{field.label}</label>
                    <input type={field.type} placeholder={field.placeholder} className="w-full rounded-xl border border-zinc-200 bg-white px-5 py-3.5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-100" />
                  </div>
                ))}
                <button className="mt-2 w-full rounded-xl bg-purple-600 py-4 text-sm font-semibold text-white transition hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-200">
                  Enviar mensagem →
                </button>
                <p className="text-center text-xs text-zinc-400">Seus dados não serão compartilhados com terceiros.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </main>
  )
}