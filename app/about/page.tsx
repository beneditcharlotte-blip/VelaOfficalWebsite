import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Vela',
  description: 'We believe the ancient wisdom of the cosmos and daily introspection belong together.',
}

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <div className="tag">Our story</div>
            <h1>Built for those who seek <em>meaning</em> in every moment</h1>
            <p>
              Vela was born from a simple belief — that the ancient wisdom of the cosmos and the intimacy of daily
              journalling belong together. We're a small team of designers, engineers, and astrology practitioners who
              believe introspection is a practice, not a moment.
            </p>
          </div>
        </div>
      </section>

      <section className="mission">
        <div className="container">
          <div className="mission-inner">
            <div className="mission-left">
              <div className="tag">Mission</div>
              <h2>
                To make <em>self-awareness</em> a daily ritual
              </h2>
              <p>
                Most of us rush through our days without pausing to notice how we feel, what we need, or where we're
                headed. Vela is the quiet corner you return to — where the planets overhead and the words in your heart
                meet.
              </p>
              <p>
                We combine astrological intelligence with empathetic AI to offer something rare: a companion that knows
                both the sky and your soul.
              </p>
            </div>
            <div className="mission-right">
              <div className="mission-stat">
                <strong>1.2M+</strong>
                <span>Daily journal entries written</span>
              </div>
              <div className="mission-stat">
                <strong>94%</strong>
                <span>Users report feeling more self-aware after 30 days</span>
              </div>
              <div className="mission-stat">
                <strong>180+</strong>
                <span>Countries where Vela is used</span>
              </div>
              <div className="mission-stat">
                <strong>2022</strong>
                <span>Founded in San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <div className="values-head">
            <div className="tag">What we believe</div>
            <h2>
              Principles we <em>live</em> by
            </h2>
            <p>Three ideas shape everything we build.</p>
          </div>
          <div className="values-grid">
            <div className="val-card">
              <div className="val-icon">&#x2736;&#xFE0E;</div>
              <h3>Depth over distraction</h3>
              <p>
                We refuse to gamify introspection. Every feature exists to slow you down, not speed you up — to help
                you go deeper into what actually matters to you.
              </p>
            </div>
            <div className="val-card">
              <div className="val-icon">&#x263D;&#xFE0E;</div>
              <h3>Privacy as a right</h3>
              <p>
                Your journal is yours. We never sell your data, never train on your words without permission, and never
                use your vulnerabilities to serve ads. Full stop.
              </p>
            </div>
            <div className="val-card">
              <div className="val-icon">&#x2609;&#xFE0E;</div>
              <h3>Ancient meets modern</h3>
              <p>
                We take astrology seriously without being dogmatic. The stars are a language — one that millions have
                used for centuries to find pattern and meaning in chaos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <div className="team-head">
            <div className="tag">The people</div>
            <h2>
              Meet the <em>team</em>
            </h2>
            <p>
              A quiet group of builders, dreamers, and practitioners. We work remotely across four time zones and meet
              under the same sky.
            </p>
          </div>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar ta-a">S</div>
              <div className="team-name">Sofia Andreou</div>
              <div className="team-role">Co-founder & CEO</div>
              <div className="team-bio">Former product lead at Headspace. Scorpio rising, obsessive about ritual design and quiet UX.</div>
            </div>
            <div className="team-card">
              <div className="team-avatar ta-b">M</div>
              <div className="team-name">Marcus Webb</div>
              <div className="team-role">Co-founder & CTO</div>
              <div className="team-bio">Previously at DeepMind. Built the AI layer that makes Vela's journalling feel like it actually listens.</div>
            </div>
            <div className="team-card">
              <div className="team-avatar ta-c">R</div>
              <div className="team-name">Rania El-Amin</div>
              <div className="team-role">Head of Astrology</div>
              <div className="team-bio">
                Certified astrologer with 14 years of practice. She ensures our star data is as poetic as it is
                accurate.
              </div>
            </div>
            <div className="team-card">
              <div className="team-avatar ta-d">L</div>
              <div className="team-name">Lena Park</div>
              <div className="team-role">Lead Designer</div>
              <div className="team-bio">
                Crafts every pixel with the patience of a Virgo. Previously at Figma. Believes good design is
                invisible.
              </div>
            </div>
            <div className="team-card">
              <div className="team-avatar ta-e">J</div>
              <div className="team-name">Jonas Bergström</div>
              <div className="team-role">Head of Growth</div>
              <div className="team-bio">
                Data-driven but soul-first. Grew our community from 0 to 1.2 million through word of mouth and
                patience.
              </div>
            </div>
            <div className="team-card">
              <div className="team-avatar ta-f">A</div>
              <div className="team-name">Aisha Nwosu</div>
              <div className="team-role">Community & Support</div>
              <div className="team-bio">
                The warmth behind every reply. Gemini sun, deeply committed to making every user feel truly heard.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="story">
        <div className="container">
          <div className="story-inner">
            <div className="story-left">
              <div className="tag">How we got here</div>
              <h2>
                A quiet idea that <em>grew</em>
              </h2>
              <p>
                Vela started as a side project — a personal journalling tool Sofia built for herself during a difficult
                year. She shared it with ten friends. Then a hundred. Then it became something none of us could have
                predicted.
              </p>
              <p>We've stayed small on purpose. Growth for us means depth, not scale.</p>
            </div>
            <div className="timeline">
              <div className="tl-item">
                <div className="tl-left">
                  <div className="tl-dot"></div>
                  <div className="tl-line"></div>
                </div>
                <div className="tl-body">
                  <div className="tl-year">2022</div>
                  <div className="tl-title">First prototype</div>
                  <div className="tl-desc">
                    Sofia and Marcus build a rough journalling app with basic birth chart data in a San Francisco
                    apartment.
                  </div>
                </div>
              </div>
              <div className="tl-item">
                <div className="tl-left">
                  <div className="tl-dot"></div>
                  <div className="tl-line"></div>
                </div>
                <div className="tl-body">
                  <div className="tl-year">Early 2023</div>
                  <div className="tl-title">Beta launch & first 10,000 users</div>
                  <div className="tl-desc">
                    Shared quietly on Reddit and Substack. Zero paid marketing. The community grew entirely through
                    word of mouth.
                  </div>
                </div>
              </div>
              <div className="tl-item">
                <div className="tl-left">
                  <div className="tl-dot"></div>
                  <div className="tl-line"></div>
                </div>
                <div className="tl-body">
                  <div className="tl-year">Late 2023</div>
                  <div className="tl-title">AI journalling companion</div>
                  <div className="tl-desc">
                    Launched the empathetic AI layer — the feature that makes Vela feel like a friend who knows both
                    you and the sky.
                  </div>
                </div>
              </div>
              <div className="tl-item">
                <div className="tl-left">
                  <div className="tl-dot"></div>
                  <div className="tl-line"></div>
                </div>
                <div className="tl-body">
                  <div className="tl-year">2024</div>
                  <div className="tl-title">1 million seekers</div>
                  <div className="tl-desc">
                    Reached one million monthly active users and expanded the team from 3 to 12 people, all fully
                    remote.
                  </div>
                </div>
              </div>
              <div className="tl-item">
                <div className="tl-left">
                  <div className="tl-dot"></div>
                </div>
                <div className="tl-body">
                  <div className="tl-year">Today</div>
                  <div className="tl-title">Still just beginning</div>
                  <div className="tl-desc">
                    New features in birth chart readings, weekly rhythms, and community reflection — all coming
                    quietly, when the timing is right.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
