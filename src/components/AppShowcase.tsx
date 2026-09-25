import { useScrollReveal } from '../hooks/useScrollReveal'
import { AddPersonScreen, CalendarScreen, InsightsScreen, PhoneFrame, TodayScreen, TrackScreen, TrustCircleScreen } from './ScreenMockups'

const showcaseItems = [
  { key: 'today', label: 'Today', note: 'A gentle starting point', screen: <TodayScreen /> },
  { key: 'track', label: 'Track', note: 'Keep what matters to you', screen: <TrackScreen /> },
  { key: 'calendar', label: 'Calendar', note: 'Your history at a glance', screen: <CalendarScreen /> },
  { key: 'insights', label: 'Insights', note: 'Patterns, not conclusions', screen: <InsightsScreen /> },
  { key: 'circle', label: 'Trust Circle', note: 'Your people, close', screen: <TrustCircleScreen /> },
  { key: 'person', label: 'Add trusted person', note: 'A simple way to reach out', screen: <AddPersonScreen /> },
]

export default function AppShowcase() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="showcase section" id="showcase" ref={ref}>
      <div className="container">
        <div className="section-header showcase__header">
          <span className="eyebrow">A closer look</span>
          <h2 className={`section-title reveal ${isVisible ? 'visible' : ''}`}>A closer look inside CareCycle <span aria-hidden="true">✨</span></h2>
          <p className={`section-desc reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '100ms' }}>A calm, familiar place for the little things that add up.</p>
        </div>

        <div className="showcase__grid">
          {showcaseItems.map((item, index) => (
            <article className={`showcase__item showcase__item--${item.key} reveal-scale ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${180 + index * 120}ms` }} key={item.key}>
              <div className="showcase__label"><span>0{index + 1}</span><b>{item.label}</b><small>{item.note}</small></div>
              <PhoneFrame className={`showcase__phone showcase__phone--${item.key}`} label={`CareCycle ${item.label} screen preview`}>{item.screen}</PhoneFrame>
            </article>
          ))}
        </div>
        <div className={`showcase__footer reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '900ms' }}><span aria-hidden="true">✦</span> Small moments, thoughtfully kept.</div>
      </div>
    </section>
  )
}
