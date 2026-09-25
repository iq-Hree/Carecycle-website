import { useScrollReveal } from '../hooks/useScrollReveal'

export default function GiftMessage() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="gift" id="gift" ref={ref}>
      <div className="container">
        <div className={`gift__inner reveal ${isVisible ? 'visible' : ''}`}>
          <span className="gift__heart" aria-hidden="true">♡</span>
          <span className="gift__label">A little gift</span>
          <p>This is a little gift from someone very special to me. <span aria-label="love">❤️</span></p>
        </div>
      </div>
    </section>
  )
}
