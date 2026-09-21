import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { TRAVELLERS_LOVE } from '@/lib/site-data'

export function Destination() {
  return (
    <section id="destination" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="A destination worth selling"
          title="Lakshadweep — India's island paradise"
          intro="Turquoise lagoons, pristine beaches, vibrant coral reefs and a peaceful island atmosphere. It offers travellers what crowded destinations often cannot — natural beauty, exclusivity and an authentic island experience."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-6">
          <Reveal className="sm:col-span-4">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
              <Image
                src="/images/beach.png"
                alt="Pristine white-sand beach and turquoise lagoon in Lakshadweep"
                fill
                sizes="(max-width: 640px) 100vw, 66vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </Reveal>
          <Reveal className="sm:col-span-2" delay={100}>
            <div className="relative aspect-[16/10] h-full overflow-hidden rounded-2xl sm:aspect-auto">
              <Image
                src="/images/coral.png"
                alt="Colourful coral reef and tropical fish underwater in Lakshadweep"
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-14">
          <h3 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
            Why travellers love Lakshadweep
          </h3>
          <ul className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {TRAVELLERS_LOVE.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 60}>
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-lg font-semibold text-primary">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal className="mt-14">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-secondary/60 p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Why it matters for travel agencies
            </p>
            <p className="mt-4 max-w-3xl font-serif text-xl leading-snug text-foreground text-balance sm:text-2xl">
              Customers increasingly want unique domestic experiences over
              conventional tourist destinations.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-3 text-sm font-medium text-muted-foreground">
              <span className="rounded-full bg-background px-4 py-2 text-foreground shadow-sm">
                Unique destination
              </span>
              <span className="text-primary">+</span>
              <span className="rounded-full bg-background px-4 py-2 text-foreground shadow-sm">
                Attractive packages
              </span>
              <span className="text-primary">+</span>
              <span className="rounded-full bg-background px-4 py-2 text-foreground shadow-sm">
                Reliable ground support
              </span>
              <span className="text-primary">=</span>
              <span className="rounded-full bg-primary px-4 py-2 font-semibold text-primary-foreground">
                Better customer experience
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
