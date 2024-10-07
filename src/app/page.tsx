import Contact from '@/components/Contact'
import HowItWorks from '@/components/HowItWorks'
import Intro from '@/components/Intro'
import Plans from '@/components/Plans'
export default function LandingPage() {
  return (
    <main className="globy__main">
      <Intro />
      <HowItWorks />
      <Plans />
      <Contact />
    </main>
  )
}
