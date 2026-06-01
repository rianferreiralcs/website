"use client"

/*
  IMPORTAÇÃO DO COMPONENTE DE IMAGEM DO NEXT

  O next/image otimiza:
  - performance
  - carregamento
  - SEO
*/
import Image from "next/image"

/*
  IMPORTAÇÃO DO SWIPER

  Swiper = biblioteca de slider/carrossel
*/
import { Swiper, SwiperSlide } from "swiper/react"

/*
  MÓDULOS DO SWIPER

  Autoplay = troca automática
  Pagination = bolinhas
  Navigation = setas laterais
*/
import { Autoplay, Pagination, Navigation } from "swiper/modules"

/*
  CSS DO SWIPER

  Necessário para o slider funcionar corretamente
*/
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

/*
  COMPONENTE HERO SLIDER

  Banner principal do site
*/
export default function HeroSlider() {

  return (

    /*
      SECTION PRINCIPAL

      min-h-screen = altura mínima da tela inteira
    */
    <section className="min-h-screen">

      {/*
        COMPONENTE SWIPER

        slidesPerView={1}
        Mostra 1 slide por vez

        loop={true}
        Slider infinito

        autoplay
        Troca automática

        pagination
        Bolinhas clicáveis

        navigation
        Setas laterais

        h-full
        Altura total
      */}
      <Swiper

        modules={[Autoplay, Pagination, Navigation]}

        slidesPerView={1}

        loop={true}

        autoplay={{
          delay: 4000,
        }}

        pagination={{
          clickable: true,
        }}

        navigation={true}

        className="h-[750px]"
      >

        {/* ================================= */}
        {/* SLIDE 1 */}
        {/* ================================= */}

        <SwiperSlide>

          {/*
            CONTAINER DO SLIDE

            relative = permite posicionamentos absolutos
            min-h-screen = ocupa tela toda
            w-full = largura total
          */}
          <div className="relative min-h-screen w-full">

            {/* ================================= */}
            {/* IMAGEM DE FUNDO */}
            {/* ================================= */}

            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop"

              alt="Banner"

              /*
                fill = ocupa container inteiro
              */
              fill

              /*
                object-cover = encaixa sem deformar
              */
              className="object-cover"
            />

            {/* ================================= */}
            {/* OVERLAY ESCURO */}
            {/* ================================= */}

            {/*
              absolute = fica sobre a imagem
              inset-0 = ocupa tudo
              bg-black/50 = preto transparente
            */}
            <div className="absolute inset-0 bg-[#3d2562]/70" />

            {/* ================================= */}
            {/* CONTEÚDO */}
            {/* ================================= */}

            <div className="absolute inset-0 z-10 flex items-center">

              {/*
                CONTAINER CENTRAL

                mx-auto = centraliza
                max-w-7xl = largura máxima
                px-4 md:px-6 = responsividade
              */}
              <div className="mx-auto max-w-7xl px-4 md:px-6">

                {/* ================================= */}
                {/* TÍTULO */}
                {/* ================================= */}

                <h1

                  /*
                    text-4xl = celular
                    md:text-5xl = tablet
                    lg:text-7xl = desktop
                  */
                  className="max-w-3xl text-4xl font-bold leading-tight text-[#fffbfb] md:text-5xl lg:text-7xl"
                >

                  Transformando vidas através da educação

                </h1>

                {/* ================================= */}
                {/* PARÁGRAFO */}
                {/* ================================= */}

                <p

                  /*
                    text-base = celular
                    md:text-xl = desktop
                  */
                  className="mt-6 max-w-2xl text-base text-[#ebebeb] md:text-xl"
                >

                  Construindo oportunidades para crianças e famílias.

                </p>

                {/* ================================= */}
                {/* BOTÃO */}
                {/* ================================= */}

                <a
                  href="#quem-somos"

                  /*
                    mt-10 = margem superior
                    inline-block = ocupa só conteúdo
                    rounded-full = arredondado
                    bg-white = fundo branco

                    px-6 py-3 = celular
                    md:px-8 md:py-4 = desktop
                  */
                  className="mt-10 inline-block rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:opacity-80 md:px-8 md:py-4"
                >

                  Conheça o projeto

                </a>

              </div>

            </div>

          </div>

        </SwiperSlide>

        {/* ================================= */}
        {/* SLIDE 2 */}
        {/* ================================= */}

        <SwiperSlide>

          <div className="relative min-h-screen w-full">

            <Image
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1600&auto=format&fit=crop"
              alt="Banner"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/50" />

            <div className="absolute inset-0 z-10 flex items-center">

              <div className="mx-auto max-w-7xl px-4 md:px-6">

                <h1 className="max-w-3xl text-4xl font-bold leading-tight text-[#fffbfb] md:text-5xl lg:text-7xl">

                  Juntos podemos mudar o futuro

                </h1>

              </div>

            </div>

          </div>

        </SwiperSlide>

        {/* ================================= */}
        {/* SLIDE 3 */}
        {/* ================================= */}

        <SwiperSlide>

          <div className="relative min-h-screen w-full">

            <Image
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop"
              alt="Banner"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/50" />

            <div className="absolute inset-0 z-10 flex items-center">

              <div className="mx-auto max-w-7xl px-4 md:px-6">

                <h1 className="max-w-3xl text-4xl font-bold leading-tight text-[#fffbfb] md:text-5xl lg:text-7xl">

                  Educação transforma realidades

                </h1>

              </div>

            </div>

          </div>

        </SwiperSlide>

      </Swiper>

    </section>
  )
}