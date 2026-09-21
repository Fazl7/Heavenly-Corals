'use client'

import { useEffect, useRef, useState } from 'react'

export function CountUp({
  end,
  duration = 1800,
  suffix = '',
  prefix = '',
}: {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduce) {
      setValue(end)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true
        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setValue(Math.round(eased * end))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        observer.disconnect()
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [end, duration])

  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString('en-IN')}
      {suffix}
    </span>
  )
}
