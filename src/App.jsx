import Particles from './components/Particles'
import Nav from './components/Nav'
import Hero from './components/Hero'
import EquipeEstrategia from './components/EquipeEstrategia'
import TeamSupportMessage from './components/TeamSupportMessage'
import ExecutiveDashboard from './components/ExecutiveDashboard'
import IntelligenceCenter from './components/IntelligenceCenter'
import DonorJourney from './components/DonorJourney'
import CurrentReality from './components/CurrentReality'
import CostOfInaction from './components/CostOfInaction'
import FutureVision from './components/FutureVision'
import CommunicationFlow from './components/CommunicationFlow'
import InternationalDonations from './components/InternationalDonations'
import SeoGeo from './components/SeoGeo'
import NationalNGOVision from './components/NationalNGOVision'
import Roadmap from './components/Roadmap'
import Metrics from './components/Metrics'
import FinalCTA from './components/FinalCTA'

export default function App() {
  return (
    <div
      className="min-h-screen relative"
      style={{
        background: `
          radial-gradient(circle at 10% 5%, rgba(57,217,138,0.18), transparent 30%),
          radial-gradient(circle at 90% 0%, rgba(69,183,255,0.16), transparent 28%),
          radial-gradient(circle at 50% 55%, rgba(167,139,250,0.1), transparent 32%),
          linear-gradient(180deg, #07111f, #0b1728)
        `,
      }}
    >
      {/* Background grid */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7), transparent 85%)',
        }}
      />

      <Particles />
      <Nav />

      <main className="relative z-10 max-w-[1240px] mx-auto px-4 md:px-6 pb-24">
        <Hero />
        <EquipeEstrategia />
        <TeamSupportMessage />
        <ExecutiveDashboard />
        <IntelligenceCenter />
        <DonorJourney />
        <CurrentReality />
        <CostOfInaction />
        <FutureVision />
        <CommunicationFlow />
        <InternationalDonations />
        <SeoGeo />
        <NationalNGOVision />
        <Roadmap />
        <Metrics />
        <FinalCTA />
      </main>
    </div>
  )
}
