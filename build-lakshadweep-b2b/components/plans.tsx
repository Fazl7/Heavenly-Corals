import { Check, Minus, Star } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { PLAN_TIERS, PLAN_MATRIX, type PlanCell } from '@/lib/site-data'
import { cn } from '@/lib/utils'

function Cell({ value, featured }: { value: PlanCell; featured: boolean }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center">
        <span className="sr-only">Included</span>
        <Check
          className={cn('size-4.5', featured ? 'text-primary' : 'text-primary/80')}
          strokeWidth={2.5}
          aria-hidden
        />
      </span>
    )
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center text-muted-foreground/50">
        <span className="sr-only">Not included</span>
        <Minus className="size-4" aria-hidden />
      </span>
    )
  }
  const isOptional = value === 'Optional'
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold',
        isOptional
          ? 'bg-accent/25 text-accent-foreground'
          : 'bg-secondary text-secondary-foreground',
      )}
    >
      {value}
    </span>
  )
}

export function Plans() {
  return (
    <section id="packages" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow="Ready-to-sell packages"
          title="Compare our three island packages"
          intro="Standard covers the essentials, Premium adds comfort and adventure, and Luxury brings resort stays with exclusive premium experiences. Every tier is fully coordinated on the ground by our local team."
        />

        <Reveal className="mt-12">
          <div className="overflow-x-auto rounded-3xl border border-border bg-card shadow-sm">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <caption className="sr-only">
                Feature comparison across Standard, Premium and Luxury packages
              </caption>
              <thead>
                <tr>
                  <th scope="col" className="w-[28%] p-5 align-bottom sm:p-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      What&apos;s included
                    </span>
                  </th>
                  {PLAN_TIERS.map((tier) => (
                    <th
                      key={tier.name}
                      scope="col"
                      className={cn(
                        'p-5 text-center align-bottom sm:p-6',
                        tier.featured && 'bg-primary/8',
                      )}
                    >
                      {tier.featured && (
                        <span className="mb-2 inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-0.5 text-[11px] font-semibold text-primary-foreground">
                          <Star className="size-3 fill-current" aria-hidden />
                          Most popular
                        </span>
                      )}
                      <span className="block font-serif text-xl font-semibold text-foreground">
                        {tier.name}
                      </span>
                      <span
                        className={cn(
                          'mt-1 block text-xs font-medium',
                          tier.featured ? 'text-primary' : 'text-muted-foreground',
                        )}
                      >
                        {tier.positioning}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PLAN_MATRIX.map((row, ri) => (
                  <tr
                    key={row.feature}
                    className={cn('border-t border-border', ri % 2 === 1 && 'bg-muted/40')}
                  >
                    <th
                      scope="row"
                      className="p-4 text-sm font-medium text-foreground sm:px-6"
                    >
                      {row.feature}
                    </th>
                    {row.values.map((value, ci) => (
                      <td
                        key={ci}
                        className={cn(
                          'p-4 text-center text-sm sm:px-6',
                          PLAN_TIERS[ci].featured && 'bg-primary/8',
                        )}
                      >
                        <Cell value={value} featured={Boolean(PLAN_TIERS[ci].featured)} />
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="border-t border-border">
                  <td className="p-5 sm:p-6" />
                  {PLAN_TIERS.map((tier) => (
                    <td
                      key={tier.name}
                      className={cn('p-5 text-center sm:p-6', tier.featured && 'bg-primary/8')}
                    >
                      <a
                        href="#contact"
                        className={cn(
                          'inline-flex w-full items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-transform hover:-translate-y-0.5',
                          tier.featured
                            ? 'bg-primary text-primary-foreground'
                            : 'border border-primary/40 text-primary hover:bg-primary/5',
                        )}
                      >
                        Request rates
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Check className="size-4 text-primary" strokeWidth={2.5} aria-hidden />
            Included
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="rounded-full bg-accent/25 px-2 py-0.5 font-semibold text-accent-foreground">
              Optional
            </span>
            Available as an add-on
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Minus className="size-4 text-muted-foreground/50" aria-hidden />
            Not included
          </span>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Every package includes transparent B2B pricing and dedicated ground
          support. Custom itineraries are available on request.
        </p>
      </div>
    </section>
  )
}
