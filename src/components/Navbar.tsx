import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'

const links = [
  { label: 'Features', target: 'features' },
  { label: 'Privacy', target: 'privacy' },
  { label: 'Support', target: 'support' },
  { label: 'Download', target: 'download' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const goTo = (target: string) => {
    setMenuOpen(false)
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className={`site-nav ${scrolled ? 'site-nav--scrolled' : ''}`} aria-label="Main navigation">
      <div className="container site-nav__inner">
        <a className="site-nav__brand" href="#top" onClick={(event) => { event.preventDefault(); setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          <span>CareCycle</span>
          <b aria-hidden="true">✿</b>
        </a>

        <div className="site-nav__links">
          {links.map((link) => (
            <button key={link.target} type="button" onClick={() => goTo(link.target)} className={link.label === 'Download' ? 'site-nav__download' : ''}>
              {link.label}
            </button>
          ))}
        </div>

        <button
          className={`site-nav__toggle ${menuOpen ? 'is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span /><span />
        </button>
      </div>

      <div id="mobile-navigation" className={`site-nav__mobile ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <p>Take a little care, one tap at a time.</p>
        <div>
          {links.map((link, index) => (
            <button key={link.target} type="button" onClick={() => goTo(link.target)} style={{ '--menu-index': index } as CSSProperties}>
              <span>0{index + 1}</span>{link.label}<b aria-hidden="true">↗</b>
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
