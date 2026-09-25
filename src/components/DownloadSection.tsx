import { useScrollReveal } from '../hooks/useScrollReveal'
import { APP_DOWNLOAD_URL } from '../config'

export default function DownloadSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="download section" id="download" ref={ref}>
      <div className="download__glow" aria-hidden="true" />
      <div className="container">
        <div className={`download__inner reveal ${isVisible ? 'visible' : ''}`}>
          <span className="eyebrow">A little space to take with you</span>
          <h2>Ready to make CareCycle yours? <span aria-hidden="true">💗</span></h2>
          <p>A little space to understand your cycle, take care of yourself, and keep support close.</p>
          <a className="download__button" href={APP_DOWNLOAD_URL} download>
            <span>Download CareCycle</span><b aria-hidden="true">↓</b>
            <i className="download__sparkle download__sparkle--one" aria-hidden="true">✦</i>
            <i className="download__sparkle download__sparkle--two" aria-hidden="true">✦</i>
          </a>
          <div className="download__availability"><span aria-hidden="true">◉</span> Android app available <b>🌸</b></div>
          <small className="download__fine-print">The APK is downloaded directly from this site. Make sure you have a compatible Android device before installing.</small>
        </div>
      </div>
    </section>
  )
}
