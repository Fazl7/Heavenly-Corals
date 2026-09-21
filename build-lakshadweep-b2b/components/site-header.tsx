'use client'

import { useEffect, useState } from 'react'
import { Menu, X, Waves } from 'lucide-react'
import { BRAND, NAV_LINKS } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled
          ? 'border-b border-border/70 bg-background/85 backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8 lg:h-20">
        <a
          href="#home"
          className={cn(
            'flex items-center gap-2.5 font-serif text-lg font-semibold tracking-tight transition-colors',
            scrolled ? 'text-foreground' : 'text-white',
          )}
        >
          <span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground">
            <Waves className="size-4.5" strokeWidth={2} />
          </span>
          {BRAND.name}
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                scrolled ? 'text-muted-foreground' : 'text-white/85 hover:text-white',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className={cn(
            'hidden rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm transition-colors lg:inline-flex',
            scrolled
              ? 'bg-primary text-primary-foreground hover:bg-primary/90'
              : 'bg-white text-primary hover:bg-white/90',
          )}
        >
          Become a Partner
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className={cn(
            'grid size-10 place-items-center rounded-full transition-colors lg:hidden',
            scrolled || open ? 'text-foreground' : 'text-white',
          )}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-b border-border bg-background lg:hidden">
          <nav
            className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8"
            aria-label="Mobile"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-base font-semibold text-primary-foreground"
            >
              Become a Partner
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
