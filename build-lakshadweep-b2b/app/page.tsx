import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Destination } from '@/components/destination'
import { WhyChooseUs } from '@/components/why-choose-us'
import { StatsCounter } from '@/components/stats-counter'
import { Partnership } from '@/components/partnership'
import { PartnersCarousel } from '@/components/partners-carousel'
import { WhyB2B } from '@/components/why-b2b'
import { Plans } from '@/components/plans'
import { Leadership } from '@/components/leadership'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Destination />
        <WhyChooseUs />
        <StatsCounter />
        <Partnership />
        <PartnersCarousel />
        <WhyB2B />
        <Plans />
        <Leadership />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
