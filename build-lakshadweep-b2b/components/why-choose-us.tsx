import {
  Compass,
  BadgeIndianRupee,
  LifeBuoy,
  Package,
  Zap,
  ShieldCheck,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { WHY_CHOOSE_US } from '@/lib/site-data'

const ICONS = [Compass, BadgeIndianRupee, LifeBuoy, Package, Zap, ShieldCheck]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why choose us"
          title="Built on service, trust and the people of the islands"
          intro="Choosing the right destination partner matters. We make selling Lakshadweep simple, reliable and profitable — backed by a team that lives and breathes these islands."
        />

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <Reveal key={item.title} delay={(i % 3) * 80}>
                <div className="group flex h-full flex-col gap-4 bg-card p-7 transition-colors hover:bg-primary/[0.04]">
                  <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" strokeWidth={1.8} />
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
