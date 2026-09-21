export const BRAND = {
  name: 'Heavenly Corals',
  tagline: 'Your Trusted Lakshadweep B2B Travel Partner',
  email: 'heavenlycorals.holidays@gmail.com',
  phone: '+91 8304080979',
}

export const NAV_LINKS = [
  { label: 'Destination', href: '#destination' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Partnership', href: '#partnership' },
  { label: 'Packages', href: '#packages' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact', href: '#contact' },
]

export const WHY_CHOOSE_US = [
  {
    title: 'Local Destination Expertise',
    body: 'We understand Lakshadweep from the ground level and know how to coordinate the destination efficiently.',
  },
  {
    title: 'Competitive B2B Pricing',
    body: 'Attractive B2B rates that help our travel partners create competitive packages and grow their margins.',
  },
  {
    title: 'Reliable Local Support',
    body: 'From arrival to departure, our team supports your customers throughout their Lakshadweep experience.',
  },
  {
    title: 'Ready-to-Sell Packages',
    body: 'Carefully designed packages that travel agencies can easily present and sell to their customers.',
  },
  {
    title: 'Quick Response & Assistance',
    body: 'Our team is available to coordinate bookings, requirements, and guest support efficiently.',
  },
  {
    title: 'Trust & Transparency',
    body: 'Clear communication, transparent pricing, and dependable service are at the heart of our partnerships.',
  },
]

export const TRAVELLERS_LOVE = [
  {
    title: 'Unspoiled Beauty',
    body: 'White-sand beaches and crystal-clear lagoons create a breathtaking tropical escape.',
  },
  {
    title: 'Coral & Marine Life',
    body: 'Rich coral reefs and fascinating marine life make it a favourite among underwater lovers.',
  },
  {
    title: 'Adventure & Experiences',
    body: 'Snorkelling, scuba diving, kayaking and island exploration give travellers memorable moments.',
  },
  {
    title: 'Peace & Privacy',
    body: 'A perfect choice for couples, families and groups seeking a getaway from busy city life.',
  },
  {
    title: 'Picture-Perfect Islands',
    body: 'Beautiful landscapes, lagoons and sunsets that travellers love to capture and share.',
  },
]

export const STATS = [
  { value: 320, suffix: '+', label: 'Travel agency partners' },
  { value: 12000, suffix: '+', label: 'Happy travellers served' },
  { value: 24, suffix: '', label: 'States reached across India' },
  { value: 98, suffix: '%', label: 'Partner satisfaction' },
]

export const PARTNERS = [
  'Coastline Voyages',
  'Meridian Travels',
  'Sahara Holidays',
  'Blue Horizon Tours',
  'Wanderlust India',
  'Serene Getaways',
  'Peak & Palm',
  'Compass Journeys',
  'Azure Trails',
  'Sunrise Expeditions',
]

export type PlanTier = {
  name: string
  positioning: string
  summary: string
  featured?: boolean
}

export const PLAN_TIERS: PlanTier[] = [
  {
    name: 'Standard',
    positioning: 'Essentials',
    summary: 'Everything needed for a complete island trip.',
  },
  {
    name: 'Premium',
    positioning: 'Comfort + Adventure',
    summary: 'Beach stay with the full range of water adventures.',
    featured: true,
  },
  {
    name: 'Luxury',
    positioning: 'Resort + Premium',
    summary: 'Resort comfort with exclusive premium experiences.',
  },
]

// Cell values: true = included, false = not included, string = custom label
export type PlanCell = boolean | string

export const PLAN_MATRIX: { feature: string; values: [PlanCell, PlanCell, PlanCell] }[] = [
  { feature: 'Stay', values: ['Homestay', 'Beach Homestay', 'Premium Resort'] },
  { feature: 'Permit Assistance', values: [true, true, true] },
  { feature: 'Pickup & Drop', values: [true, true, true] },
  { feature: 'Breakfast & Dinner', values: [true, true, true] },
  { feature: 'Sightseeing', values: [true, true, true] },
  { feature: 'Guide Support', values: [true, true, 'Dedicated'] },
  { feature: 'Snorkeling', values: [true, true, 'Premium'] },
  { feature: 'Kayaking', values: [true, true, true] },
  { feature: 'Kalpitti Island', values: [true, true, true] },
  { feature: 'Glass Boat', values: [true, true, true] },
  { feature: 'Turtle Watching', values: [true, true, true] },
  { feature: 'Short Boat Trip', values: [true, true, true] },
  { feature: 'Long Boat Trip', values: [false, true, true] },
  { feature: 'Banana Boat', values: [false, true, true] },
  { feature: 'Speed Boat Experience', values: [false, true, true] },
  { feature: 'Scuba Diving', values: ['Optional', 'Optional', true] },
  { feature: 'Parasailing', values: ['Optional', 'Optional', true] },
  { feature: 'Jet Ski', values: ['Optional', 'Optional', true] },
]

export const LEADERSHIP = [
  {
    name: 'Mohammed Sharook PT',
    role: 'Co-Founder & Managing Director',
    location: 'Malappuram, Kerala',
    image: '/images/Sharook.jpeg',
    note: 'Born and raised close to the sea, Sharook built Heavenly Corals to open Lakshadweep to travellers across India through a trusted network of agencies. He leads our on-ground operations personally, making sure every partner and every guest is looked after like family.',
  },
  {
    name: 'Naseeba Parvin AP',
    role: 'Co-Founder & Director',
    location: 'Agatti, Lakshadweep',
    image: '/images/Naseeba.jpeg',
    note: 'Naseeba is rooted in Agatti and knows the islands from the inside out. She oversees on-ground coordination and partner experience, making sure every agency we work with can book and sell Lakshadweep with complete confidence.',
  },
]
