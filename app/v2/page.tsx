import '@/styles/v2.css'
import HeroV2 from '@/components/sections/HeroV2'
// V2 variants (new photos)
import AboutV2 from '@/components/sections/v2/About'
import FruhstuckV2 from '@/components/sections/v2/Fruhstuck'
import AmbienteV2 from '@/components/sections/v2/Ambiente'
import SpeisenV2 from '@/components/sections/v2/Speisen'
import SocialV2 from '@/components/sections/v2/Social'
import PrivatisationV2 from '@/components/sections/v2/Privatisation'
import FinalCtaV2 from '@/components/sections/v2/FinalCta'
// Reused image-less V1 sections
import DaypartSection from '@/components/sections/DaypartSection'
import MarqueeSection from '@/components/sections/MarqueeSection'
import PlaylistSection from '@/components/sections/PlaylistSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import AnfahrtSection from '@/components/sections/AnfahrtSection'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'NOYA V2 — Vorschau',
  robots: { index: false, follow: false },
}

export default function V2Page() {
  return (
    <main>
      <HeroV2 />
      <AboutV2 />
      <DaypartSection />
      <FruhstuckV2 />
      <AmbienteV2 />
      <MarqueeSection />
      <SpeisenV2 />
      <PlaylistSection />
      <TestimonialsSection />
      <SocialV2 />
      <PrivatisationV2 />
      <AnfahrtSection />
      <FinalCtaV2 />
      <Footer />
    </main>
  )
}
