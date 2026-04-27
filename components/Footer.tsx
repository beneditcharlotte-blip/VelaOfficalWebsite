import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="ft-top">
          <div className="ft-brand">
            <div className="ft-logo">Vela.</div>
            <div className="ft-tagline">Navigate by starlight. Know yourself by the stars.</div>
          </div>
          <div className="ft-cols">
            <div className="ft-col">
              <h5>Product</h5>
              <a href="/#starreading">Star Reading</a>
              <a href="/#birthchart">Birth Chart</a>
              <a href="/#journal">Journal</a>
              <a href="/#pricing">Pricing</a>
            </div>
            <div className="ft-col">
              <h5>Company</h5>
              <Link href="/about">About</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/careers">Careers</Link>
              <Link href="/press">Press</Link>
            </div>
            <div className="ft-col">
              <h5>Support</h5>
              <a href="#">Help Centre</a>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>
        <div className="ft-bot">
          <div className="ft-copy">© 2026 Vela Inc. All rights reserved.</div>
          <div className="ft-badges">
            <span className="ft-badge">App Store</span>
            <span className="ft-badge">SOC 2</span>
            <span className="ft-badge">GDPR</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
