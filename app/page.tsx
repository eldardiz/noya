import '@/styles/v2.css'
import HeroV2 from '@/components/sections/HeroV2'
import AboutV2 from '@/components/sections/v2/About'
import FruhstuckV2 from '@/components/sections/v2/Fruhstuck'
import AmbienteV2 from '@/components/sections/v2/Ambiente'
import SpeisenV2 from '@/components/sections/v2/Speisen'
import PlaylistV2 from '@/components/sections/v2/Playlist'
import SocialV2 from '@/components/sections/v2/Social'
import PrivatisationV2 from '@/components/sections/v2/Privatisation'
import AnfahrtV2 from '@/components/sections/v2/Anfahrt'
import FinalCtaV2 from '@/components/sections/v2/FinalCta'
import FooterV2 from '@/components/sections/v2/Footer'
// Image-less sections shared with the V2 base
import DaypartSection from '@/components/sections/DaypartSection'
import MarqueeSection from '@/components/sections/MarqueeSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'

export default function HomePage() {
  return (
    <main className="v2-page">
      <HeroV2 />
      <AboutV2 />
      <DaypartSection />
      <FruhstuckV2 />
      <AmbienteV2 />
      <MarqueeSection />
      <SpeisenV2 />
      <PlaylistV2 />
      <TestimonialsSection />
      <SocialV2 />
      <PrivatisationV2 />
      <AnfahrtV2 />
      <FinalCtaV2 />
      <FooterV2 />
    </main>
  )
}
