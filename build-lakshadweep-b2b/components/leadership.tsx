import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { LEADERSHIP } from '@/lib/site-data'

export function Leadership() {
  return (
    <section id="leadership" className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The people behind the islands"
          title="Led by islanders who know Lakshadweep by heart"
          intro="We are not a faraway agency selling a place we have never lived. Our founders carry the islands in their roots — and that is the difference you feel in every booking."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {LEADERSHIP.map((person, i) => (
            <Reveal key={person.name} delay={i * 120}>
              <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card sm:flex-row">
                <div className="relative h-64 w-full shrink-0 sm:h-auto sm:w-44">
                  <Image
                    src={person.image}
                    alt={`Portrait of ${person.name}, ${person.role}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 176px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {person.role}
                  </p>
                  <p className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="size-3.5" />
                    {person.location}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {person.note}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
