import { useScrollReveal } from '../hooks/useScrollReveal'
import { PhoneFrame, TrackScreen } from './ScreenMockups'

const trackingFeatures = [
  { icon: '◌', title: 'Period', text: 'Start and end dates' },
  { icon: '◒', title: 'Flow', text: 'Light · Medium · Heavy' },
  { icon: '☺', title: 'Mood', text: 'Great · Good · Okay · Low · Difficult' },
  { icon: '⌁', title: 'Energy', text: 'High · Good · Moderate · Low · Very low' },
  { icon: '♡', title: 'Pain', text: 'None · Mild · Moderate · Strong · Severe' },
  { icon: '✎', title: 'Symptoms & notes', text: 'A personal note, if you want' },
]

export default function TrackingSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="tracking section" id="tracking" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">A gentle kind of tracking</span>
          <h2 className={`section-title reveal ${isVisible ? 'visible' : ''}`}>Track your cycle, your way. <span aria-hidden="true">🌷</span></h2>
          <p className={`section-desc reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '100ms' }}>Log your period, flow, symptoms, mood, energy, pain, and anything else you&apos;d like to remember.</p>
        </div>

        <div className="tracking__layout">
          <div className={`tracking__phone-wrap reveal-scale ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '180ms' }}>
            <div className="tracking__phone-label"><span aria-hidden="true">✦</span> Your private log</div>
            <PhoneFrame className="tracking__phone" label="CareCycle Track screen preview"><TrackScreen /></PhoneFrame>
            <div className="tracking__under-note"><span aria-hidden="true">♡</span> No pressure to fill every field.</div>
          </div>

          <div className="tracking__steps" aria-label="What you can track">
            {trackingFeatures.map((feature, index) => (
              <div className={`tracking__step reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${300 + index * 120}ms` }} key={feature.title}>
                <span className="tracking__step-number">0{index + 1}</span>
                <span className="tracking__step-icon" aria-hidden="true">{feature.icon}</span>
                <span className="tracking__step-copy"><b>{feature.title}</b><small>{feature.text}</small></span>
                <span className="tracking__step-arrow" aria-hidden="true">↗</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
