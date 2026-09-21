import { Users, Handshake, TrendingUp } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const POINTS = [
  {
    icon: Users,
    title: 'Travel partners are our customers',
    body: 'We do not compete with agencies for travellers. We exist to make agencies stronger — you stay the trusted face for your customer, always.',
  },
  {
    icon: Handshake,
    title: 'Relationships over transactions',
    body: 'B2C is a one-time sale. B2B is a lasting relationship. We invest in your success because your growth is our growth.',
  },
  {
    icon: TrendingUp,
    title: 'Scale through your network, not around it',
    body: 'Rather than chasing customers one by one, we empower a Pan-India network of agencies to sell Lakshadweep with confidence.',
  },
]

export function WhyB2B() {
  return (
    <section className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow="Why B2B, not B2C"
          title="We back the agency — not bypass it"
          intro="Our entire model is designed around travel partners. Here is why we choose to grow with agencies instead of selling directly to travellers."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {POINTS.map((point, i) => {
            const Icon = point.icon
            return (
              <Reveal key={point.title} delay={i * 100}>
                <div className="flex h-full flex-col gap-5 rounded-2xl border border-border bg-card p-8">
                  <span className="grid size-12 place-items-center rounded-2xl bg-accent/20 text-accent-foreground">
                    <Icon className="size-6" strokeWidth={1.8} />
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {point.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {point.body}
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
