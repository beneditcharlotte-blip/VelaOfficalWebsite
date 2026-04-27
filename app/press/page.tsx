import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Press — Vela',
  description: 'Resources, coverage, and contact information for journalists and media partners.',
}

export default function Press() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="tag">Press & media</div>
          <h1>Vela in the <em>world</em></h1>
          <p>Resources, coverage, and contact information for journalists and media partners. We're happy to help — please reach out.</p>
        </div>
      </section>

      <section className="logowall">
        <div className="container">
          <div className="logowall-label">As featured in</div>
          <div className="logos">
            <div className="logo-item">The New York Times</div>
            <div className="logo-item">Wired</div>
            <div className="logo-item">The Guardian</div>
            <div className="logo-item">Refinery29</div>
            <div className="logo-item">Fast Company</div>
            <div className="logo-item">Vogue</div>
          </div>
        </div>
      </section>

      <section className="press-stats">
        <div className="container">
          <div className="press-stats-inner">
            <div className="ps-item">
              <div className="ps-num">
                1.2<span className="ps-unit">M</span>
              </div>
              <div className="ps-label">Monthly active users</div>
            </div>
            <div className="ps-div"></div>
            <div className="ps-item">
              <div className="ps-num">
                180<span className="ps-unit">+</span>
              </div>
              <div className="ps-label">Countries</div>
            </div>
            <div className="ps-div"></div>
            <div className="ps-item">
              <div className="ps-num">
                4.9<span className="ps-unit">★</span>
              </div>
              <div className="ps-label">App Store rating</div>
            </div>
            <div className="ps-div"></div>
            <div className="ps-item">
              <div className="ps-num">2022</div>
              <div className="ps-label">Founded</div>
            </div>
          </div>
        </div>
      </section>

      <section className="coverage">
        <div className="container">
          <div className="coverage-head">
            <div className="tag">Recent coverage</div>
            <h2>
              What people are <em>writing</em>
            </h2>
          </div>
          <div className="coverage-grid">
            <div className="cov-card">
              <div className="cov-pub">The New York Times</div>
              <div className="cov-quote">
                "Vela manages to make astrology feel <em>genuinely useful</em> — not by dumbing it down, but by weaving
                it into the texture of daily life."
              </div>
              <div className="cov-meta">
                <span className="cov-date">March 2026</span>
                <span className="cov-link">Read</span>
              </div>
            </div>
            <div className="cov-card">
              <div className="cov-pub">Wired</div>
              <div className="cov-quote">
                "The app that's quietly becoming the most <em>thoughtful</em> AI companion in the wellness space — and it
                barely raises its voice."
              </div>
              <div className="cov-meta">
                <span className="cov-date">January 2026</span>
                <span className="cov-link">Read</span>
              </div>
            </div>
            <div className="cov-card">
              <div className="cov-pub">Fast Company</div>
              <div className="cov-quote">
                "In an industry obsessed with engagement metrics, Vela is the rare product that{' '}
                <em>actively discourages</em> you from opening it too often."
              </div>
              <div className="cov-meta">
                <span className="cov-date">November 2025</span>
                <span className="cov-link">Read</span>
              </div>
            </div>
            <div className="cov-card">
              <div className="cov-pub">The Guardian</div>
              <div className="cov-quote">
                "A beautifully designed antidote to the anxiety machine — <em>introspection as a daily habit</em>,
                powered by the stars."
              </div>
              <div className="cov-meta">
                <span className="cov-date">October 2025</span>
                <span className="cov-link">Read</span>
              </div>
            </div>
            <div className="cov-card">
              <div className="cov-pub">Refinery29</div>
              <div className="cov-quote">
                "I've tried every journalling app. Vela is the only one I've kept open for <em>more than two weeks</em>."
              </div>
              <div className="cov-meta">
                <span className="cov-date">September 2025</span>
                <span className="cov-link">Read</span>
              </div>
            </div>
            <div className="cov-card">
              <div className="cov-pub">Vogue</div>
              <div className="cov-quote">
                "The aesthetic is flawless, but what keeps you coming back is the feeling that it{' '}
                <em>actually understands</em> you."
              </div>
              <div className="cov-meta">
                <span className="cov-date">August 2025</span>
                <span className="cov-link">Read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="presskit">
        <div className="container">
          <div className="presskit-inner">
            <div className="presskit-left">
              <div className="tag">Press kit</div>
              <h2>
                Everything you need, <em>in one place</em>
              </h2>
              <p>Logos, screenshots, founder photos, brand guidelines, and key facts about Vela — all in a single download. Updated April 2026.</p>
              <div className="pk-btn">↓ Download full press kit</div>
            </div>
            <div className="presskit-right">
              <div className="pk-asset">
                <div className="pk-asset-icon">◈</div>
                <div>
                  <div className="pk-asset-name">Logo pack</div>
                  <div className="pk-asset-desc">SVG, PNG — light & dark variants</div>
                </div>
                <div className="pk-asset-dl">↓ ZIP</div>
              </div>
              <div className="pk-asset">
                <div className="pk-asset-icon">⊡</div>
                <div>
                  <div className="pk-asset-name">App screenshots</div>
                  <div className="pk-asset-desc">iPhone 15 Pro — 12 screens, 300 dpi</div>
                </div>
                <div className="pk-asset-dl">↓ ZIP</div>
              </div>
              <div className="pk-asset">
                <div className="pk-asset-icon">◉</div>
                <div>
                  <div className="pk-asset-name">Founder photos</div>
                  <div className="pk-asset-desc">High-res portraits, press-ready</div>
                </div>
                <div className="pk-asset-dl">↓ ZIP</div>
              </div>
              <div className="pk-asset">
                <div className="pk-asset-icon">≡</div>
                <div>
                  <div className="pk-asset-name">Brand guidelines</div>
                  <div className="pk-asset-desc">Colours, typography, usage rules — PDF</div>
                </div>
                <div className="pk-asset-dl">↓ PDF</div>
              </div>
              <div className="pk-asset">
                <div className="pk-asset-icon">◆</div>
                <div>
                  <div className="pk-asset-name">Fact sheet</div>
                  <div className="pk-asset-desc">Key stats, timeline, team bios — PDF</div>
                </div>
                <div className="pk-asset-dl">↓ PDF</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="press-contact">
        <div className="container">
          <div className="press-contact-inner">
            <div className="pc-left">
              <div className="tag">Get in touch</div>
              <h2>
                We're easy to <em>reach</em>
              </h2>
              <p>
                We respond to all press enquiries within one business day. For urgent requests, email us directly and
                mark the subject line URGENT — we'll get back to you within a few hours.
              </p>
            </div>
            <div className="pc-right">
              <div className="pc-card">
                <h4>Press enquiries</h4>
                <p>Feature stories, interviews, product briefings, and fact-checking requests.</p>
                <a href="mailto:press@aura.app">press@aura.app</a>
              </div>
              <div className="pc-card">
                <h4>Partnership & collaboration</h4>
                <p>Brand partnerships, editorial collaborations, and co-marketing opportunities.</p>
                <a href="mailto:partners@aura.app">partners@aura.app</a>
              </div>
              <div className="pc-card">
                <h4>Speaking & events</h4>
                <p>Founder availability for panels, keynotes, and podcast appearances.</p>
                <a href="mailto:speaking@aura.app">speaking@aura.app</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
