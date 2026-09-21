'use client'

import { useState, type FormEvent } from 'react'
import { Mail, Phone, MapPin, Anchor, Send } from 'lucide-react'
import { BRAND } from '@/lib/site-data'

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const agency = String(data.get('agency') ?? '')
    const name = String(data.get('name') ?? '')
    const message = String(data.get('message') ?? '')
    const body = encodeURIComponent(
      `Agency: ${agency}\nContact: ${name}\n\n${message}`,
    )
    const subject = encodeURIComponent(`Partnership enquiry — ${agency || name}`)
    window.location.href = `mailto:${BRAND.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <Anchor className="size-4" />
              Our roots
            </div>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground text-balance sm:text-4xl">
              We don&apos;t just sell Lakshadweep. It is our home.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground text-pretty">
              Our story begins on the islands themselves. As people rooted in this
              part of the country, we know its lagoons, its people and its rhythm in
              a way no outside operator can. That closeness is what lets us promise
              your customers an authentic, dependable experience — and lets us
              promise you a partner who genuinely cares.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-primary"
              >
                <span className="grid size-10 place-items-center rounded-full bg-secondary text-primary">
                  <Mail className="size-4.5" />
                </span>
                {BRAND.email}
              </a>
              <a
                href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-primary"
              >
                <span className="grid size-10 place-items-center rounded-full bg-secondary text-primary">
                  <Phone className="size-4.5" />
                </span>
                {BRAND.phone}
              </a>
              <p className="flex items-center gap-3 text-sm text-foreground">
                <span className="grid size-10 place-items-center rounded-full bg-secondary text-primary">
                  <MapPin className="size-4.5" />
                </span>
                Lakshadweep, Agatti Airport road
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-7 sm:p-9">
            <h3 className="font-serif text-2xl font-semibold text-foreground">
              Become a partner
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Tell us about your agency and we&apos;ll share B2B rates and
              ready-to-sell packages.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <Field label="Agency name" name="agency" placeholder="Your agency" required />
              <Field label="Your name" name="name" placeholder="Contact person" required />
              <Field label="Email or phone" name="contact" placeholder="How we reach you" required />
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us what you'd like to sell"
                  className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <Send className="size-4" />
                Send enquiry
              </button>
              {sent && (
                <p className="text-center text-sm text-primary" role="status">
                  Opening your email app to send the enquiry…
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  placeholder,
  required,
}: {
  label: string
  name: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type="text"
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  )
}
