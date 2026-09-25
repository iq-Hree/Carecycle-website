export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a className="footer__brand" href="#top" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>CareCycle <span aria-hidden="true">🌸</span></a>
        <p>Made with care.</p>
        <p className="footer__motto">Your cycle. Your space. Your people.</p>
      </div>
    </footer>
  )
}
