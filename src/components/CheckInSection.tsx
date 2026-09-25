import { useEffect, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const groups = [
  { label: 'Mood', options: ['Great', 'Good', 'Okay', 'Low', 'Difficult'], active: 0 },
  { label: 'Energy', options: ['High', 'Good', 'Moderate', 'Low', 'Very low'], active: 2 },
  { label: 'Pain', options: ['None', 'Mild', 'Moderate', 'Strong', 'Severe'], active: 0 },
]

export default function CheckInSection() {
  const { ref, isVisible } = useScrollReveal()
  const [active, setActive] = useState<Record<string, number>>({ Mood: -1, Energy: -1, Pain: -1 })

  useEffect(() => {
    if (!isVisible) return
    const timers = [
      window.setTimeout(() => setActive((current) => ({ ...current, Mood: 0 })), 500),
      window.setTimeout(() => setActive((current) => ({ ...current, Energy: 2 })), 900),
      window.setTimeout(() => setActive((current) => ({ ...current, Pain: 0 })), 1300),
    ]
    return () => timers.forEach((timer) => window.clearTimeout(timer))
  }, [isVisible])

  return (
    <section className="checkin section" id="check-in" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">A tiny daily ritual</span>
          <h2 className={`section-title reveal ${isVisible ? 'visible' : ''}`}>How are you feeling today? <span aria-hidden="true">🌸</span></h2>
          <p className={`section-desc reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '100ms' }}>Only add what feels useful.</p>
        </div>

        <div className={`checkin__layout reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '180ms' }}>
          <div className="checkin__demo">
            <div className="checkin__demo-top"><span className="checkin__demo-brand">CARE CYCLE</span><span>Today <i aria-hidden="true">♡</i></span></div>
            {groups.map((group) => (
              <div className="checkin__group" key={group.label}>
                <div className="checkin__group-heading"><h3>{group.label}</h3><span>{active[group.label] === group.active ? 'selected' : 'optional'}</span></div>
                <div className="checkin__options">
                  {group.options.map((option, index) => <span className={`checkin__option ${active[group.label] === index ? 'is-selected' : ''}`} key={option}>{option}</span>)}
                </div>
              </div>
            ))}
            <div className="checkin__note"><span>Personal note</span><p>Anything you'd like to remember?</p></div>
            <div className="checkin__save">Save check-in <span aria-hidden="true">→</span></div>
          </div>
          <div className="checkin__reassurance">
            <span className="checkin__reassurance-icon" aria-hidden="true">♡</span>
            <h3>Your comfort matters.</h3>
            <p>There is no perfect way to check in. Add a little, add a lot, or simply come back tomorrow.</p>
            <div className="checkin__reassurance-line" />
            <small>Made to fit into your day, not take it over.</small>
          </div>
        </div>
      </div>
    </section>
  )
}
