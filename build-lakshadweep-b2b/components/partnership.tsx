import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const MODEL = [
  { step: 'You', text: 'You bring the customers and the trust you have built.' },
  { step: 'We', text: 'We bring the destination expertise and ground support.' },
  { step: 'Together', text: 'Together, we create the experience travellers remember.' },
]

export function Partnership() {
  return (
    <section id="partnership" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Why we choose travel agencies"
              title="Travel agencies are the strongest bridge to travellers"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground text-pretty">
              <p>
                Agencies already have established customer relationships, strong
                local goodwill, and years of trust within their communities. They
                understand their customers&apos; needs — while we bring the
                destination expertise and local operational support to deliver a
                memorable Lakshadweep experience.
              </p>
              <p>
                Instead of reaching customers one by one, we want to build a
                Pan-India network of trusted travel partners and grow together.
              </p>
            </div>
          </div>

          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/sunset.png"
                alt="Golden-hour sunset over a calm Lakshadweep lagoon with a wooden boat"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {MODEL.map((item, i) => (
            <Reveal key={item.step} delay={i * 100}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
                <span className="font-serif text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  {item.step}
                </span>
                <p className="mt-3 text-lg leading-snug text-foreground text-pretty">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <div className="overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12 sm:py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
              Our partnership model
            </p>
            <p className="mx-auto mt-5 max-w-3xl font-serif text-2xl font-medium leading-snug text-balance sm:text-3xl">
              Our goal is not simply to sell packages. It is to build long-term
              partnerships based on trust, service and mutual growth.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
            >
              Grow together with us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
