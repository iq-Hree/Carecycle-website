import { useScrollReveal } from '../hooks/useScrollReveal'
import { AddPersonScreen, PhoneFrame, TrustCircleScreen } from './ScreenMockups'

export default function TrustCircleSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="trust section" id="trust-circle" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Your people, close by</span>
          <h2 className={`section-title reveal ${isVisible ? 'visible' : ''}`}>Keep your people close. <span aria-hidden="true">💗</span></h2>
          <p className={`section-desc reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '100ms' }}>Add the people you trust so you can quickly ask for support when you need it.</p>
        </div>

        <div className="trust__layout">
          <div className={`trust__diagram reveal-scale ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '180ms' }} aria-label="You connected to trusted people">
            <div className="trust__diagram-orbit trust__diagram-orbit--one" aria-hidden="true" />
            <div className="trust__diagram-orbit trust__diagram-orbit--two" aria-hidden="true" />
            <div className="trust__you"><span aria-hidden="true">💙</span><b>YOU</b></div>
            <div className="trust__line trust__line--one" aria-hidden="true"><i>♡</i></div>
            <div className="trust__line trust__line--two" aria-hidden="true"><i>♡</i></div>
            <div className="trust__person trust__person--one"><span>👩🏻</span><b>Someone kind</b></div>
            <div className="trust__person trust__person--two"><span>🧑🏻</span><b>Someone safe</b></div>
            <div className="trust__diagram-note"><span aria-hidden="true">✿</span><b>Up to 5 people</b><small>your circle, your choice</small></div>
          </div>

          <div className="trust__screens">
            <div className={`reveal-scale ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '360ms' }}>
              <div className="trust__screen-label"><span>01</span> Trust Circle</div>
              <PhoneFrame className="trust__phone" label="CareCycle Trust Circle screen preview"><TrustCircleScreen /></PhoneFrame>
            </div>
            <div className={`reveal-scale ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '520ms' }}>
              <div className="trust__screen-label"><span>02</span> Add trusted person</div>
              <PhoneFrame className="trust__phone trust__phone--add" label="CareCycle Add Trusted Person screen preview"><AddPersonScreen /></PhoneFrame>
            </div>
          </div>
        </div>

        <div className={`trust__details reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '760ms' }}>
          <div><span aria-hidden="true">◉</span><b>Choose your people</b><small>Name, relationship, and contact details.</small></div>
          <div><span aria-hidden="true">⌁</span><b>Choose a way to reach them</b><small>WhatsApp is an external communication method where available.</small></div>
          <div><span aria-hidden="true">♡</span><b>Keep support close</b><small>Ask when you need a little extra care.</small></div>
        </div>
      </div>
    </section>
  )
}
