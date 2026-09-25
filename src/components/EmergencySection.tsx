import { useScrollReveal } from '../hooks/useScrollReveal'

export default function EmergencySection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="emergency section" id="emergency" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Here if you need it</span>
          <h2 className={`section-title reveal ${isVisible ? 'visible' : ''}`}>Help when you need it. <span aria-hidden="true">🫶</span></h2>
          <p className={`section-desc reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '100ms' }}>Hopefully you never need it. But when you do, CareCycle keeps your saved emergency contact close.</p>
        </div>

        <div className={`emergency__card reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
          <div className="emergency__halo" aria-hidden="true" />
          <div className="emergency__phone-icon" aria-hidden="true"><span>⌕</span></div>
          <div className="emergency__copy">
            <span className="emergency__label">Emergency</span>
            <h3>Someone you trust, one tap away.</h3>
            <p>Call your saved emergency contact using your phone&apos;s normal call function.</p>
            <button className="emergency__button" type="button">Add emergency number <span aria-hidden="true">→</span></button>
          </div>
          <span className="emergency__scribble" aria-hidden="true">♡</span>
        </div>
        <p className={`emergency__note reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '500ms' }}>Hopefully you never need the emergency feature — but it&apos;s there if you do.</p>
      </div>
    </section>
  )
}
