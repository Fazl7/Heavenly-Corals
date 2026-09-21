import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  className,
}: {
  eyebrow?: string
  title: string
  intro?: string
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            'flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary',
            align === 'center' && 'justify-center',
          )}
        >
          <span className="h-px w-6 bg-primary/50" />
          {eyebrow}
        </div>
      )}
      <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground text-balance sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
          {intro}
        </p>
      )}
    </div>
  )
}
