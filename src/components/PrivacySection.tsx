import { useScrollReveal } from '../hooks/useScrollReveal'

export default function PrivacySection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="privacy section" id="privacy" ref={ref}>
      <div className="privacy__orb privacy__orb--one" aria-hidden="true" />
      <div className="privacy__orb privacy__orb--two" aria-hidden="true" />
      <div className="container">
        <div className="section-header privacy__header">
          <span className="eyebrow">A promise, kept simple</span>
          <h2 className={`section-title reveal ${isVisible ? 'visible' : ''}`}>Your health information belongs with you. <span aria-hidden="true">🔐</span></h2>
          <p className={`section-desc reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '100ms' }}>CareCycle is designed so your cycle and check-in information stays locally on your phone.</p>
        </div>

        <div className={`privacy__visual reveal-scale ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '180ms' }}>
          <div className="privacy__shield" aria-hidden="true">
            <svg viewBox="0 0 240 270"><path d="M120 12c27 17 48 25 79 31v60c0 62-28 111-79 151-51-40-79-89-79-151V43c31-6 52-14 79-31Z" /><path d="M120 36c20 12 36 18 57 23v44c0 46-20 83-57 117-37-34-57-71-57-117V59c21-5 37-11 57-23Z" /></svg>
          </div>
          <div className="privacy__phone" aria-hidden="true">
            <div className="privacy__phone-top"><span /><span /></div>
            <div className="privacy__phone-lock">▣</div>
            <b>CareCycle</b>
            <small>your local space</small>
          </div>
          <div className="privacy__lock" aria-hidden="true">🔒</div>
          <div className="privacy__data-box"><span aria-hidden="true">♡</span><div><b>Your data stays here</b><small>on your device</small></div></div>
        </div>

        <div className="privacy__details">
          <div className={`privacy__detail card reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '620ms' }}>
            <span className="privacy__detail-icon" aria-hidden="true">▣</span>
            <h3>Local by design</h3>
            <p>Your tracking data stays on your device. CareCycle is designed around your cycle and check-in information being local.</p>
          </div>
          <div className={`privacy__detail card reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '760ms' }}>
            <span className="privacy__detail-icon" aria-hidden="true">♡</span>
            <h3>Communication stays clear</h3>
            <p>When you choose to contact someone through WhatsApp, the communication is handled by WhatsApp.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
