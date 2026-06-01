import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import DaypartSection from '@/components/sections/DaypartSection'
import FruhstuckSection from '@/components/sections/FruhstuckSection'
import SpeisenSection from '@/components/sections/SpeisenSection'
import MarqueeSection from '@/components/sections/MarqueeSection'
import AmbienteSection from '@/components/sections/AmbienteSection'
import PlaylistSection from '@/components/sections/PlaylistSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import SocialSection from '@/components/sections/SocialSection'
import PrivatisationSection from '@/components/sections/PrivatisationSection'
import AnfahrtSection from '@/components/sections/AnfahrtSection'
import FinalCtaSection from '@/components/sections/FinalCtaSection'
import Footer from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <DaypartSection />
      <FruhstuckSection />
      <AmbienteSection />
      <MarqueeSection />
      <SpeisenSection />
      <PlaylistSection />
      <TestimonialsSection />
      <SocialSection />
      <PrivatisationSection />
      <AnfahrtSection />
      <FinalCtaSection />
      <Footer />
    </main>
  )
}
