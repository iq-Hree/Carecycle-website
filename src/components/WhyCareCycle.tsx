import { useScrollReveal } from '../hooks/useScrollReveal'

const reasons = [
  { icon: '🔒', title: 'Private', text: 'Your tracking information stays on your device.' },
  { icon: '🌷', title: 'Simple', text: 'Track only what feels useful to you.' },
  { icon: '🫶', title: 'Supportive', text: 'Keep trusted people and important support options close.' },
]

export default function WhyCareCycle() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="why section" id="why-carecycle" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">The CareCycle feeling</span>
          <h2 className={`section-title reveal ${isVisible ? 'visible' : ''}`}>A little more care, built in.</h2>
          <p className={`section-desc reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '100ms' }}>Everything here is designed to feel welcoming, uncomplicated, and yours.</p>
        </div>
        <div className="why__grid">
          {reasons.map((reason, index) => (
            <article className={`why__card card reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${200 + index * 140}ms` }} key={reason.title}>
              <span className="why__icon" aria-hidden="true">{reason.icon}</span>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
              <span className="why__arrow" aria-hidden="true">✦</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
