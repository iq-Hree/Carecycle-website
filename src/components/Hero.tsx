import { useEffect, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { PhoneFrame, TodayScreen } from './ScreenMockups'

export default function Hero() {
  const { ref, isVisible } = useScrollReveal(0.05)
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setEntered(true), 120)
    return () => window.clearTimeout(timer)
  }, [])

  const goToFeatures = () => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="hero__wash hero__wash--one" aria-hidden="true" />
      <div className="hero__wash hero__wash--two" aria-hidden="true" />
      <div className="hero__inner container">
        <div className={`hero__copy ${isVisible && entered ? 'is-visible' : ''}`}>
          <span className="eyebrow">A little digital home</span>
          <h1>A little more care,<br /><em>every day.</em> <span className="hero__flower" aria-hidden="true">🌸</span></h1>
          <p>A simple, private space to understand your cycle, check in with yourself, and keep the people you trust a little closer.</p>
          <div className="hero__actions">
            <button className="btn-primary" type="button" onClick={goToFeatures}>Explore CareCycle <span aria-hidden="true">→</span></button>
            <button className="hero__text-link" type="button" onClick={goToFeatures}>See how it works <span aria-hidden="true">↓</span></button>
          </div>
          <div className="hero__quiet-note"><span aria-hidden="true">♡</span> Designed for your pace</div>
        </div>

        <div className={`hero__visual ${isVisible && entered ? 'is-visible' : ''}`} aria-label="CareCycle Today screen preview">
          <div className="hero__visual-glow" aria-hidden="true" />
          <span className="hero__decoration hero__decoration--heart" aria-hidden="true">♡</span>
          <span className="hero__decoration hero__decoration--sparkle" aria-hidden="true">✦</span>
          <span className="hero__decoration hero__decoration--flower" aria-hidden="true">✿</span>
          <span className="hero__decoration hero__decoration--dot" aria-hidden="true">○</span>
          <span className="hero__decoration hero__decoration--tiny-heart" aria-hidden="true">♡</span>
          <div className="hero__phone-wrap">
            <PhoneFrame className="hero__phone phone-float" label="CareCycle Today screen preview">
              <TodayScreen />
            </PhoneFrame>
          </div>
          <div className="hero__floating-note hero__floating-note--top"><span aria-hidden="true">✦</span><b>Only add what feels useful.</b></div>
          <div className="hero__floating-note hero__floating-note--bottom"><span aria-hidden="true">♡</span><b>Your cycle. Your space.</b></div>
        </div>
      </div>
      <div className="hero__scroll-cue" aria-hidden="true"><span>scroll gently</span><i /></div>
    </section>
  )
}
