import { CountUp } from '@/components/count-up'
import { Reveal } from '@/components/reveal'
import { STATS } from '@/lib/site-data'

export function StatsCounter() {
  return (
    <section className="relative overflow-hidden bg-[#3b2540] py-16 sm:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, #fe6f9b 0, transparent 40%), radial-gradient(circle at 80% 70%, #ffc47c 0, transparent 40%)',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#d4f6ff]">
          A partnership already trusted
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-center font-serif text-2xl font-semibold text-white text-balance sm:text-3xl">
          Growing numbers, growing trust across India
        </h2>

        <dl className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100} className="text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-serif text-4xl font-semibold text-[#ffc47c] sm:text-5xl">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </dd>
              <p className="mt-2 text-sm text-white/75">{stat.label}</p>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
