import { PARTNERS } from '@/lib/site-data'

export function PartnersCarousel() {
  const items = [...PARTNERS, ...PARTNERS]

  return (
    <section className="border-y border-border bg-background py-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by travel agencies across India
        </p>
      </div>

      <div className="marquee-mask mt-8 flex overflow-hidden">
        <ul className="animate-marquee flex shrink-0 items-center gap-4 pr-4" aria-hidden="true">
          {items.map((name, i) => (
            <li
              key={`${name}-${i}`}
              className="flex items-center gap-2.5 whitespace-nowrap rounded-full border border-border bg-secondary/50 px-6 py-3"
            >
              <span className="size-2 rounded-full bg-primary/60" />
              <span className="font-serif text-base font-medium text-foreground/80">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <ul className="sr-only">
        {PARTNERS.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </section>
  )
}
