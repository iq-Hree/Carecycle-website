import { useScrollReveal } from '../hooks/useScrollReveal'
import { InsightsScreen, PhoneFrame } from './ScreenMockups'

const stats = [
  { label: 'Average cycle', value: '33 days' },
  { label: 'Median cycle', value: '33 days' },
  { label: 'Cycle range', value: '29–36 days' },
  { label: 'Variability', value: '3.5 days' },
]

const bars = [
  { label: '36', height: '78%' },
  { label: '29', height: '57%' },
  { label: '33', height: '69%' },
  { label: '34', height: '72%' },
  { label: '31', height: '62%' },
]

export default function InsightsSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="insights section" id="insights" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">A little perspective</span>
          <h2 className={`section-title reveal ${isVisible ? 'visible' : ''}`}>Your patterns, on your phone. <span aria-hidden="true">🔒</span></h2>
          <p className={`section-desc reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '100ms' }}>CareCycle can summarize patterns in the information you&apos;ve logged, directly on your device.</p>
        </div>

        <div className="insights__layout">
          <div className={`insights__phone-wrap reveal-scale ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '160ms' }}>
            <PhoneFrame className="insights__phone" label="CareCycle Insights screen preview"><InsightsScreen /></PhoneFrame>
            <span className="insights__lock-note" aria-hidden="true"><i>✦</i> Local summary</span>
          </div>
          <div className="insights__content">
            <div className="insights__stat-grid">
              {stats.map((stat, index) => (
                <div className={`insights__stat card reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${260 + index * 140}ms` }} key={stat.label}>
                  <span>{stat.label}</span><strong>{stat.value}</strong>
                </div>
              ))}
            </div>
            <div className={`insights__chart card reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '820ms' }}>
              <div className="insights__chart-heading"><div><span>Recent entries</span><h3>Your logged rhythm</h3></div><span className="insights__chart-lock" aria-hidden="true">🔒</span></div>
              <div className="insights__bars" aria-label="Example recent cycle entries">
                {bars.map((bar, index) => <div className="insights__bar-group" key={bar.label}><span>{bar.label}</span><i style={{ height: bar.height, transitionDelay: `${1050 + index * 100}ms` }} /></div>)}
              </div>
              <p className="insights__disclaimer">Based only on the data you&apos;ve logged. These are not medical conclusions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
