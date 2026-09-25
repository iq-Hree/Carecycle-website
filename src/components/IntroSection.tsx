import { useScrollReveal } from '../hooks/useScrollReveal'
import { TodayScreen } from './ScreenMockups'

export default function IntroSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="intro section" id="features" ref={ref}>
      <div className="container">
        <div className={`intro__card card reveal ${isVisible ? 'visible' : ''}`}>
          <div className="intro__copy">
            <span className="eyebrow">Make room for you</span>
            <h2 className="section-title">A little space for you. <span aria-hidden="true">💙</span></h2>
            <p>Your cycle can be different every month. CareCycle gives you a simple place to keep track of what matters to you — without overwhelming you with information.</p>
            <div className="intro__tiny-list">
              <span><i aria-hidden="true">✦</i> Track what you want to remember</span>
              <span><i aria-hidden="true">♡</i> Skip anything that doesn't feel useful</span>
            </div>
          </div>
          <div className="intro__preview" aria-label="A small preview of the CareCycle interface">
            <div className="intro__preview-glow" aria-hidden="true" />
            <div className="intro__mini-phone"><TodayScreen /></div>
            <div className="intro__preview-label"><span aria-hidden="true">✿</span> A calm place to check in</div>
          </div>
        </div>
      </div>
    </section>
  )
}
