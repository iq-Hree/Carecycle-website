import { useScrollReveal } from '../hooks/useScrollReveal'

const supportOptions = [
  { icon: '👋', title: 'Ask someone to check on me', text: 'Let someone know you could use a little care.' },
  { icon: '🩹', title: 'Need menstrual supplies', text: 'Ask for the things you need, without explaining everything.' },
  { icon: '💬', title: 'Need someone to talk to', text: 'Choose a person and a way to reach them.' },
  { icon: '⌂', title: 'Need help getting home', text: 'Keep a trusted person close when plans change.' },
]

export default function SupportSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="support section" id="support" ref={ref}>
      <div className="support__wash" aria-hidden="true" />
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Support, your way</span>
          <h2 className={`section-title reveal ${isVisible ? 'visible' : ''}`}>You don&apos;t always have to handle things alone. <span aria-hidden="true">💙</span></h2>
          <p className={`section-desc reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '100ms' }}>Choose what you need and who you&apos;d like to ask.</p>
        </div>

        <div className="support__grid">
          {supportOptions.map((option, index) => (
            <article className={`support__card card reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${220 + index * 130}ms` }} key={option.title}>
              <span className="support__icon" aria-hidden="true">{option.icon}</span>
              <div><h3>{option.title}</h3><p>{option.text}</p></div>
              <span className="support__arrow" aria-hidden="true">›</span>
            </article>
          ))}
        </div>
        <div className={`support__note reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '820ms' }}><span aria-hidden="true">♡</span><p>Your people can be a little closer when you need them.</p></div>
      </div>
    </section>
  )
}
