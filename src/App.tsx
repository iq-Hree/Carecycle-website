import Navbar from './components/Navbar'
import Hero from './components/Hero'
import IntroSection from './components/IntroSection'
import TrackingSection from './components/TrackingSection'
import CheckInSection from './components/CheckInSection'
import CalendarSection from './components/CalendarSection'
import InsightsSection from './components/InsightsSection'
import PrivacySection from './components/PrivacySection'
import EmergencySection from './components/EmergencySection'
import SupportSection from './components/SupportSection'
import TrustCircleSection from './components/TrustCircleSection'
import AppShowcase from './components/AppShowcase'
import WhyCareCycle from './components/WhyCareCycle'
import DownloadSection from './components/DownloadSection'
import GiftMessage from './components/GiftMessage'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <IntroSection />
        <TrackingSection />
        <CheckInSection />
        <CalendarSection />
        <InsightsSection />
        <PrivacySection />
        <EmergencySection />
        <SupportSection />
        <TrustCircleSection />
        <AppShowcase />
        <WhyCareCycle />
        <DownloadSection />
        <GiftMessage />
      </main>
      <Footer />
    </div>
  )
}

export default App
