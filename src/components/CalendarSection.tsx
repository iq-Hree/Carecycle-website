import { useScrollReveal } from '../hooks/useScrollReveal'
import { CalendarScreen, PhoneFrame } from './ScreenMockups'

export default function CalendarSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="calendar section" id="calendar" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">A softer kind of history</span>
          <h2 className={`section-title reveal ${isVisible ? 'visible' : ''}`}>See your history at a glance. <span aria-hidden="true">🌙</span></h2>
          <p className={`section-desc reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '100ms' }}>Keep your past cycles together in one simple calendar, so your history is easy to understand.</p>
        </div>

        <div className="calendar__layout">
          <div className={`calendar__phone-wrap reveal-scale ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '180ms' }}>
            <PhoneFrame className="calendar__phone" label="CareCycle Calendar screen preview"><CalendarScreen /></PhoneFrame>
          </div>
          <div className={`calendar__story reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '360ms' }}>
            <div className="calendar__story-card">
              <span className="calendar__story-icon" aria-hidden="true">☾</span>
              <h3>Everything in one calm view.</h3>
              <p>Move through months and see your actual period days, estimated days, and check-in markers together.</p>
            </div>
            <div className="calendar__legend" aria-label="Calendar legend">
              <span><i className="calendar__legend-dot calendar__legend-dot--actual" />Actual period</span>
              <span><i className="calendar__legend-dot calendar__legend-dot--estimated" />Estimated period</span>
              <span><i className="calendar__legend-dot calendar__legend-dot--checkin" />Check-in indicator</span>
            </div>
            <div className="calendar__story-note"><span aria-hidden="true">✦</span> Your history stays easy to find.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
