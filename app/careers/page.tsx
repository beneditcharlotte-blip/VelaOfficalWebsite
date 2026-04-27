import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers — Vela',
  description: "Join a small team building something quietly radical. We're hiring for attitude, curiosity, and craft.",
}

export default function Careers() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="tag">Join the team</div>
          <h1>Help us build something <em>quietly radical</em></h1>
          <p>
            We're a small, fully remote team of 12. We move slowly on purpose, care deeply about craft, and believe
            that how we work matters as much as what we build.
          </p>
        </div>
      </section>

      <section className="perks">
        <div className="container">
          <div className="perks-head">
            <div className="tag">Life at Vela</div>
            <h2>
              How we <em>take care</em> of each other
            </h2>
            <p>We've built the conditions we wish we'd had at every job before this one.</p>
          </div>
          <div className="perks-grid">
            <div className="perk">
              <div className="perk-icon">&#x1F30D;</div>
              <h4>Fully remote, always</h4>
              <p>Work from wherever you do your best thinking. No return-to-office surprises, ever.</p>
            </div>
            <div className="perk">
              <div className="perk-icon">&#x231B;</div>
              <h4>Async by default</h4>
              <p>Minimal meetings. Deep work is protected. We document well and trust each other to move forward.</p>
            </div>
            <div className="perk">
              <div className="perk-icon">&#x1F4C5;</div>
              <h4>Flexible time off</h4>
              <p>Unlimited PTO with a mandatory 20-day minimum. Rest is part of the work here.</p>
            </div>
            <div className="perk">
              <div className="perk-icon">&#x2728;</div>
              <h4>Equipment budget</h4>
              <p>$2,500 on day one to build a workspace that genuinely serves you.</p>
            </div>
            <div className="perk">
              <div className="perk-icon">&#x1F4DA;</div>
              <h4>Learning & growth</h4>
              <p>$1,500 per year for books, courses, conferences, or whatever helps you grow.</p>
            </div>
            <div className="perk">
              <div className="perk-icon">&#x2665;</div>
              <h4>Health & wellbeing</h4>
              <p>Full medical, dental, and vision. Plus a $100/month wellness stipend — use it however you define wellbeing.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="culture">
        <div className="container">
          <div className="culture-inner">
            <div className="culture-left">
              <div className="tag">Our culture</div>
              <h2>
                Built for <em>people who think deeply</em>
              </h2>
              <p>
                We don't optimise for speed of execution. We optimise for getting things right — which sometimes means
                slowing down, sitting with ambiguity, and changing direction when the evidence calls for it.
              </p>
              <p>
                Curiosity is the one thing we never negotiate on. Everyone here asks questions first and reaches for
                conclusions second.
              </p>
            </div>
            <div className="culture-right">
              <div className="culture-card">
                <div className="cc-sym">&#x2736;&#xFE0E;</div>
                <div className="cc-title">Craft over speed</div>
                <div className="cc-desc">We'd rather ship one thing that lasts than ten things we're embarrassed by.</div>
              </div>
              <div className="culture-card">
                <div className="cc-sym">&#x263D;&#xFE0E;</div>
                <div className="cc-title">Honest disagreement</div>
                <div className="cc-desc">We say what we mean, kindly. Silence is not consensus here.</div>
              </div>
              <div className="culture-card">
                <div className="cc-sym">&#x2609;&#xFE0E;</div>
                <div className="cc-title">Autonomy with context</div>
                <div className="cc-desc">You know the why. The how is yours to figure out.</div>
              </div>
              <div className="culture-card">
                <div className="cc-sym">&#x25CE;&#xFE0E;</div>
                <div className="cc-title">Rest as a value</div>
                <div className="cc-desc">Burnout is a design failure. We take it seriously and prevent it before it happens.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="roles">
        <div className="container">
          <div className="roles-head">
            <div className="tag">Open positions</div>
            <h2>
              Where we're <em>looking</em>
            </h2>
            <p>We hire for attitude, curiosity, and craft — in that order.</p>
          </div>

          <div className="roles-dept">
            <div className="dept-label">Engineering</div>
            <div className="role-row">
              <div>
                <div className="role-title">Senior iOS Engineer</div>
                <div className="role-tags">
                  <span className="role-tag">Full-time</span>
                  <span className="role-tag">Remote</span>
                  <span className="role-tag">Swift</span>
                </div>
              </div>
              <div className="role-right">
                <span className="role-loc">Anywhere</span>
                <span className="role-arrow">→</span>
              </div>
            </div>
            <div className="role-row">
              <div>
                <div className="role-title">ML Engineer — Personalization</div>
                <div className="role-tags">
                  <span className="role-tag">Full-time</span>
                  <span className="role-tag">Remote</span>
                  <span className="role-tag">Python</span>
                </div>
              </div>
              <div className="role-right">
                <span className="role-loc">Anywhere</span>
                <span className="role-arrow">→</span>
              </div>
            </div>
          </div>

          <div className="roles-dept">
            <div className="dept-label">Design</div>
            <div className="role-row">
              <div>
                <div className="role-title">Product Designer — Onboarding</div>
                <div className="role-tags">
                  <span className="role-tag">Full-time</span>
                  <span className="role-tag">Remote</span>
                  <span className="role-tag">Figma</span>
                </div>
              </div>
              <div className="role-right">
                <span className="role-loc">Anywhere</span>
                <span className="role-arrow">→</span>
              </div>
            </div>
          </div>

          <div className="roles-dept">
            <div className="dept-label">Content & Community</div>
            <div className="role-row">
              <div>
                <div className="role-title">Astrology Content Writer</div>
                <div className="role-tags">
                  <span className="role-tag">Part-time</span>
                  <span className="role-tag">Remote</span>
                  <span className="role-tag">Contract</span>
                </div>
              </div>
              <div className="role-right">
                <span className="role-loc">Anywhere</span>
                <span className="role-arrow">→</span>
              </div>
            </div>
            <div className="role-row">
              <div>
                <div className="role-title">Community Manager</div>
                <div className="role-tags">
                  <span className="role-tag">Full-time</span>
                  <span className="role-tag">Remote</span>
                </div>
              </div>
              <div className="role-right">
                <span className="role-loc">Anywhere</span>
                <span className="role-arrow">→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div className="tag">Don't see your role?</div>
          <h2>
            We love <em>unexpected people</em>
          </h2>
          <p>
            If you believe in what we're building and think you belong here — even if there's no open role that fits —
            we'd love to hear from you.
          </p>
          <a href="mailto:team@aura.app" className="cta-btn">
            Send us a note →
          </a>
        </div>
      </section>
    </>
  )
}
