import { Waves } from 'lucide-react'
import { BRAND, NAV_LINKS } from '@/lib/site-data'

export function SiteFooter() {
  return (
    <footer className="bg-[#3b2540] text-white/80">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5 font-serif text-lg font-semibold text-white">
              <span className="grid size-9 place-items-center rounded-full bg-[#ffc47c] text-[#3b2540]">
                <Waves className="size-4.5" strokeWidth={2} />
              </span>
              {BRAND.name}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              To become India&apos;s most trusted B2B travel partner for
              Lakshadweep — connecting agencies across India with seamless,
              reliable island travel solutions.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
              Explore
            </p>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/75 transition-colors hover:text-[#ffc47c]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
              Get in touch
            </p>
            <a
              href={`mailto:${BRAND.email}`}
              className="text-sm text-white/75 transition-colors hover:text-[#ffc47c]"
            >
              {BRAND.email}
            </a>
            <a
              href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
              className="text-sm text-white/75 transition-colors hover:text-[#ffc47c]"
            >
              {BRAND.phone}
            </a>
            <p className="text-sm text-white/75">Lakshadweep · Malappuram, Kerala</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <p>From every corner of India to the islands of Lakshadweep.</p>
        </div>
      </div>
    </footer>
  )
}
