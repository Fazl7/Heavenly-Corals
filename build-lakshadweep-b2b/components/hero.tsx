import Image from 'next/image'
import { ArrowRight, MapPin } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden">
      <Image
        src="/images/hero-lagoon.png"
        alt="Aerial view of a turquoise Lakshadweep lagoon with white-sand beach and coral reefs"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#3b2540]/70 via-[#3b2540]/35 to-[#3b2540]/80" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pt-24 pb-16 sm:px-8">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white/90 backdrop-blur-sm">
          <MapPin className="size-3.5" />
          Rooted in Lakshadweep · Serving agencies across India
        </div>

        <h1 className="mt-6 max-w-3xl font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-white text-balance sm:text-6xl lg:text-7xl">
          You have the customer.
          <br />
          <span className="text-[#ffc47c]">We have the destination.</span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 text-pretty sm:text-lg">
          A Lakshadweep-rooted B2B partner that makes selling the islands simple,
          reliable and profitable for travel agencies across India.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ffc47c] px-7 py-3.5 text-sm font-semibold text-[#3b2540] transition-transform hover:-translate-y-0.5"
          >
            Partner with us
            <ArrowRight className="size-4" />
          </a>
          <a
            href="#packages"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
          >
            View packages
          </a>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
