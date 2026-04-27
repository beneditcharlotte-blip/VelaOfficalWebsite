import BirthChart from '@/components/BirthChart'
import WeekStrip from '@/components/WeekStrip'
import PlanetList from '@/components/PlanetList'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-left">
              <div className="hero-eyebrow">Daily emotional guidance</div>
              <h1 className="hero-h1">
                be the energy
                <br />
                you want to
                <br />
                <em>attract</em>
              </h1>
              <p className="hero-p">
                A serene space for your thoughts. Merge your daily diary with an empathetic AI companion, guided by the
                stars and your astrological path.
              </p>
              <div className="hero-actions">
                <a href="#" className="btn-primary">
                  <svg className="ic-apple" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <span className="appstore-txt">
                    <small>Download on the</small>
                    <strong>App Store</strong>
                  </span>
                </a>
                <a href="#starreading" className="btn-ghost">
                  See how it works
                </a>
              </div>
              <div className="hero-social">
                <div className="hero-avatars">
                  <span className="av1">R</span>
                  <span className="av2">M</span>
                  <span className="av3">S</span>
                  <span className="av4">+</span>
                </div>
                <span className="hero-social-label">Joined by</span>
                <span className="hero-social-count">12,400+ seekers this month</span>
              </div>
            </div>
            <div className="hero-right">
              <div className="cw1">
                <div className="icard c1">
                  <div className="ic-tag-row">
                    <div className="ic-badge">&#x263D;&#xFE0E;</div>
                    <span className="ic-lbl">Rest &amp; Mind</span>
                  </div>
                  <p className="ic-body">The noise is external. Give yourself permission to power down before the sun sets.</p>
                  <div className="ic-meta">
                    <span className="ic-astro">Waning Crescent</span>
                    <span className="ic-pct">82%</span>
                  </div>
                </div>
              </div>
              <div className="cw2">
                <div className="icard c2">
                  <div className="ic-tag-row">
                    <div className="ic-badge">&#x2736;&#xFE0E;</div>
                    <span className="ic-lbl">Purpose</span>
                  </div>
                  <p className="ic-body">Momentum is building quietly. Don't mistake a slow season for stagnation.</p>
                  <div className="ic-meta">
                    <span className="ic-astro">Mars Alignment</span>
                    <span className="ic-pct">+12 orbit</span>
                  </div>
                </div>
              </div>
              <div className="cw3">
                <div className="icard c3">
                  <div className="ic-tag-row">
                    <div className="ic-badge">&#x2606;&#xFE0E;</div>
                    <span className="ic-lbl">Resources</span>
                  </div>
                  <p className="ic-body">A sudden urge to acquire may be masking a deeper need for security.</p>
                  <div className="ic-meta">
                    <span className="ic-astro">Grounding Energy</span>
                  </div>
                </div>
              </div>
              <div className="cw4">
                <div className="icard c4">
                  <div className="ic-tag-row">
                    <div className="ic-badge">&#x25CE;&#xFE0E;</div>
                    <span className="ic-lbl">Clarity</span>
                  </div>
                  <p className="ic-body">Authenticity requires a cost. Speak the truth you've been carrying.</p>
                  <div className="ic-meta">
                    <span className="ic-astro">Jupiter IV</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-hint">
          <div className="scroll-dot"></div>
          <span>Scroll</span>
        </div>
      </section>

      <div className="marquee-wrap">
        <div className="marquee-track">
          <span>
            Daily Star Reading <em>·</em> Moon Cycles <em>·</em> Birth Chart <em>·</em> AI Journal <em>·</em> Weekly Rhythm{' '}
            <em>·</em> Planetary Transits <em>·</em> Inner Landscape <em>·</em> Slow Living <em>·</em>
          </span>
          <span>
            Daily Star Reading <em>·</em> Moon Cycles <em>·</em> Birth Chart <em>·</em> AI Journal <em>·</em> Weekly Rhythm{' '}
            <em>·</em> Planetary Transits <em>·</em> Inner Landscape <em>·</em> Slow Living <em>·</em>
          </span>
        </div>
      </div>

      <div className="stats-bar">
        <div className="container">
          <div className="stats-inner">
            <div className="stat-item">
              <div className="stat-num">
                2.4<span className="stat-unit">M</span>
              </div>
              <div className="stat-label">Readings delivered</div>
            </div>
            <div className="stat-div"></div>
            <div className="stat-item">
              <div className="stat-num">
                98<span className="stat-unit">%</span>
              </div>
              <div className="stat-label">Feel more aligned</div>
            </div>
            <div className="stat-div"></div>
            <div className="stat-item">
              <div className="stat-num">
                180<span className="stat-unit">+</span>
              </div>
              <div className="stat-label">Countries reached</div>
            </div>
            <div className="stat-div"></div>
            <div className="stat-item">
              <div className="stat-num">
                4.9<span className="stat-unit">★</span>
              </div>
              <div className="stat-label">App Store rating</div>
            </div>
          </div>
        </div>
      </div>

      <section className="starreading section" id="starreading">
        <div className="container">
          <div className="sr-inner">
            <div className="sr-left">
              <div className="tag">Star Reading</div>
              <h2 className="section-h">
                Your cosmos,
                <br />
                <em>every morning</em>
              </h2>
              <p className="section-p">
                Each day opens with a personalised reading shaped by today's planetary movements, your birth chart, and
                the emotional patterns you've journaled over time.
              </p>
              <div className="feature-list">
                <div className="fi">
                  <div className="fi-icon">
                    <svg viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                    </svg>
                  </div>
                  <div>
                    <h4>Four dimensions of guidance</h4>
                    <p>Fortune, Love, Career, and Rest — each reading covers the full picture of your day, drawn from real-time planetary data.</p>
                  </div>
                </div>
                <div className="fi">
                  <div className="fi-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                    </svg>
                  </div>
                  <div>
                    <h4>Moon phase awareness</h4>
                    <p>
                      Your energy ebbs and flows with the lunar cycle. Vela maps your mood against the current moon phase to surface deeper patterns.
                    </p>
                  </div>
                </div>
                <div className="fi">
                  <div className="fi-icon">
                    <svg viewBox="0 0 24 24">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <div>
                    <h4>Today's one intention</h4>
                    <p>
                      Distilled from your full reading — one clear, actionable intention to carry into your day. Simple, grounded, deeply personal.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="sr-visual">
              <div className="rc rc-main">
                <div className="rc-main-label">Today's Reading</div>
                <div className="rc-main-planet">
                  <span className="rc-main-planet-sym">&#x2643;&#xFE0E;</span> Jupiter transiting 1st House
                </div>
                <div className="rc-main-h">
                  There is a quiet light gathering
                  <br />
                  around you — <em>others sense it too.</em>
                </div>
                <div className="rc-main-sub">
                  This is a period for reaching out. Your presence carries more warmth than usual. Don't hold back the connection you've been sitting with.
                </div>
                <div className="rc-main-foot">
                  <span className="rc-main-tag">◆ Waning Crescent · Thursday</span>
                  <div className="rc-main-dot"></div>
                </div>
              </div>
              <div className="rc-grid">
                <div className="rc-dim active">
                  <div className="rc-dim-sym">&#x2640;&#xFE0E;</div>
                  <div className="rc-dim-name">Fortune</div>
                  <div className="rc-dim-bar">
                    <div className="rc-dim-fill" style={{ width: '88%' }}></div>
                  </div>
                  <div className="rc-dim-val">Flowing</div>
                </div>
                <div className="rc-dim active">
                  <div className="rc-dim-sym">&#x263D;&#xFE0E;</div>
                  <div className="rc-dim-name">Love</div>
                  <div className="rc-dim-bar">
                    <div className="rc-dim-fill" style={{ width: '72%' }}></div>
                  </div>
                  <div className="rc-dim-val">Open</div>
                </div>
                <div className="rc-dim">
                  <div className="rc-dim-sym">&#x2642;&#xFE0E;</div>
                  <div className="rc-dim-name">Career</div>
                  <div className="rc-dim-bar">
                    <div className="rc-dim-fill" style={{ width: '90%' }}></div>
                  </div>
                  <div className="rc-dim-val">Building</div>
                </div>
                <div className="rc-dim">
                  <div className="rc-dim-sym">&#x2644;&#xFE0E;</div>
                  <div className="rc-dim-name">Rest</div>
                  <div className="rc-dim-bar">
                    <div className="rc-dim-fill" style={{ width: '48%' }}></div>
                  </div>
                  <div className="rc-dim-val">Attend</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="week-rhythm section">
        <div className="container">
          <div className="wr-head">
            <div>
              <div className="tag">Weekly Rhythm</div>
              <h2>
                Flowing overall,
                <br />
                <em>Saturday needs care</em>
              </h2>
            </div>
            <p>See the energy of each day at a glance. Vela maps the whole week so you can plan with the cosmos, not against it.</p>
          </div>
          <WeekStrip />
          <div className="week-note">
            This week's theme · <em>Momentum meets stillness — trust the in-between</em>
          </div>
        </div>
      </section>

      <section className="birthchart section" id="birthchart">
        <div className="container">
          <div className="bc-inner">
            <div className="bc-visual">
              <BirthChart />
            </div>
            <div className="bc-right">
              <div className="tag">Birth Chart</div>
              <h2 className="section-h">
                Your personal
                <br />
                <em>cosmic blueprint</em>
              </h2>
              <p className="section-p">
                Built from your exact birth time, date, and place — your chart is the map of your character, your
                strengths, and the patterns that keep returning.
              </p>
              <PlanetList />
              <div className="bc-features">
                <div className="bcf">
                  <div className="bcf-sym">&#x25C9;&#xFE0E;</div>
                  <div className="bcf-title">Natal Chart</div>
                  <div className="bcf-desc">Full 12-house breakdown with all planetary positions at birth.</div>
                </div>
                <div className="bcf">
                  <div className="bcf-sym">&#x25C8;&#xFE0E;</div>
                  <div className="bcf-title">Transits</div>
                  <div className="bcf-desc">Live planetary movements mapped onto your natal chart right now.</div>
                </div>
                <div className="bcf">
                  <div className="bcf-sym">&#x25CE;&#xFE0E;</div>
                  <div className="bcf-title">Synastry</div>
                  <div className="bcf-desc">Compare two charts to reveal connection points and dynamics.</div>
                </div>
                <div className="bcf">
                  <div className="bcf-sym">&#x25C7;&#xFE0E;</div>
                  <div className="bcf-title">Annual Forecast</div>
                  <div className="bcf-desc">A full-year overview of major themes and turning points ahead.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="journal section" id="journal">
        <div className="container">
          <div className="j-inner">
            <div className="j-left">
              <div className="j-ui">
                <div className="j-ui-top">
                  <div className="j-ui-date">Thursday · April 23 · Waning Crescent</div>
                  <div className="j-streak">
                    <div className="j-streak-pip"></div>14-day streak
                  </div>
                </div>
                <div className="j-entry-label">Today's entry</div>
                <div className="j-entry">
                  "I felt scattered this morning. Like I'm moving in many directions but going nowhere at all. Maybe I need to let something go…<span className="j-cursor"></span>"
                </div>
                <div className="j-response-label">
                  <span className="j-response-label-sym">&#x2736;&#xFE0E;</span> Vela · AI companion
                </div>
                <div className="j-bubble">
                  This restlessness often surfaces when Venus squares your natal Saturn. It is not stagnation — it is
                  discernment in disguise. The pull in many directions is asking you which one actually belongs to you.
                </div>
                <div className="j-chips">
                  <span className="j-chip">Venus square Saturn</span>
                  <span className="j-chip">Release cycle</span>
                  <span className="j-chip">Waning energy</span>
                </div>
                <div className="j-btns">
                  <button className="j-btn-p">Record today's feeling</button>
                  <button className="j-btn-s">Continue the conversation</button>
                </div>
              </div>
            </div>
            <div className="j-right">
              <div className="tag">Journal &amp; AI</div>
              <h2 className="section-h">
                Write freely.
                <br />
                <em>Understand deeply.</em>
              </h2>
              <p className="section-p">
                Your journal is not just a record — it is a conversation. Vela reads what you write alongside the cosmos
                and reflects back what you might not yet see.
              </p>
              <div className="j-steps">
                <div className="js-item">
                  <div className="js-num">01</div>
                  <div className="js-body">
                    <h4>Write your daily entry</h4>
                    <p>Begin each morning with a few honest lines. No prompts required — just you and the page, at your own pace.</p>
                  </div>
                </div>
                <div className="js-item">
                  <div className="js-num">02</div>
                  <div className="js-body">
                    <h4>Receive your reading</h4>
                    <p>Vela's AI companion reads your words alongside today's planetary alignments and your birth chart data.</p>
                  </div>
                </div>
                <div className="js-item">
                  <div className="js-num">03</div>
                  <div className="js-body">
                    <h4>Continue the conversation</h4>
                    <p>Go deeper. Ask what a transit means for you, explore a recurring pattern, or simply be heard without judgment.</p>
                  </div>
                </div>
                <div className="js-item">
                  <div className="js-num">04</div>
                  <div className="js-body">
                    <h4>Watch patterns emerge</h4>
                    <p>Over time, Vela maps your emotional rhythms — surfacing themes, growth edges, and threads you keep returning to.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features3 section">
        <div className="container">
          <div className="f3-head">
            <div className="tag" style={{ justifyContent: 'center' }}>
              What's inside
            </div>
          </div>
          <div className="f3-grid">
            <div className="f3-card">
              <div className="f3-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                  <circle cx="12" cy="12" r="1" />
                </svg>
              </div>
              <h3>Moon &amp; Planet Tracker</h3>
              <p>Live updates on lunar phases and planetary positions, explained in plain language and personalised to your chart.</p>
              <div className="f3-link">Explore transits</div>
            </div>
            <div className="f3-card dark">
              <div className="f3-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3>AI Companion</h3>
              <p>
                An empathetic, always-available presence that holds your patterns, remembers your history, and meets you where you are today.
              </p>
              <div className="f3-link">Start a conversation</div>
            </div>
            <div className="f3-card">
              <div className="f3-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <h3>Insight Journal</h3>
              <p>Build a searchable archive of your thoughts, feelings, and astrological insights — your personal library of self-knowledge.</p>
              <div className="f3-link">Start writing</div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials section">
        <div className="container">
          <div className="t-head">
            <h2>
              What users <em>say</em>
            </h2>
            <p>Thousands of seekers have trusted Vela to guide them deeper.</p>
          </div>
          <div className="t-grid">
            <div className="t-card">
              <div className="t-stars">
                <span>★★★★★</span>
              </div>
              <div className="t-quote">"It's eerie how accurate this feels. Finally, a reading that doesn't feel generic."</div>
              <div className="t-author">
                <div className="t-av ta1">E</div>
                <div>
                  <div className="t-name">Elena Rossi</div>
                  <div className="t-handle">@elena_astro</div>
                </div>
              </div>
            </div>
            <div className="t-card">
              <div className="t-stars">
                <span>★★★★★</span>
              </div>
              <div className="t-quote">"The journal conversations have changed how I see patterns in my own life."</div>
              <div className="t-author">
                <div className="t-av ta2">M</div>
                <div>
                  <div className="t-name">Marcus Chen</div>
                  <div className="t-handle">@marcuschen</div>
                </div>
              </div>
            </div>
            <div className="t-card">
              <div className="t-stars">
                <span>★★★★★</span>
              </div>
              <div className="t-quote">"This isn't a casual app. This is a genuine tool for self-discovery."</div>
              <div className="t-author">
                <div className="t-av ta3">S</div>
                <div>
                  <div className="t-name">Sophie Williams</div>
                  <div className="t-handle">@sophiew</div>
                </div>
              </div>
            </div>
          </div>
          <div className="t-big">
            <div className="t-big-q">
              "I've used every astrology app out there. Vela is the only one that feels like it <em>actually listens.</em>"
            </div>
            <div className="t-big-a">
              <div className="t-big-av">J</div>
              <div className="t-big-name">Jade Patel</div>
              <div className="t-big-sign">Scorpio Rising</div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing section" id="pricing">
        <div className="container">
          <div className="price-head">
            <h2>
              Simple pricing,<br />
              <em>no surprises</em>
            </h2>
            <p>Choose the plan that works for you. Cancel anytime.</p>
          </div>
          <div className="price-grid">
            <div className="plan">
              <div className="plan-name">Free</div>
              <div className="plan-price">
                $0<sup>/mo</sup>
              </div>
              <div className="plan-period">Forever free</div>
              <div className="plan-div"></div>
              <ul className="plan-feats">
                <li>Daily star reading</li>
                <li>Birth chart access</li>
                <li>3 journal entries per week</li>
                <li>Basic moon phase calendar</li>
              </ul>
              <button className="btn-plan btn-ol">Get started</button>
            </div>
            <div className="plan pop">
              <div className="plan-badge">Most popular</div>
              <div className="plan-name">Seeker</div>
              <div className="plan-price">
                $11<sup>/mo</sup>
              </div>
              <div className="plan-period">Billed monthly</div>
              <div className="plan-div"></div>
              <ul className="plan-feats">
                <li>Everything in Free, plus:</li>
                <li>Unlimited journal entries</li>
                <li>AI-powered insights & follow-ups</li>
                <li>Full transits & synastry</li>
                <li>Monthly forecast</li>
                <li>Ad-free experience</li>
              </ul>
              <button className="btn-plan btn-lt">Subscribe now</button>
            </div>
            <div className="plan">
              <div className="plan-name">Founder</div>
              <div className="plan-price">
                $99<sup>/yr</sup>
              </div>
              <div className="plan-period">Save 25% annually</div>
              <div className="plan-div"></div>
              <ul className="plan-feats">
                <li>Everything in Seeker, plus:</li>
                <li>Early access to new features</li>
                <li>Founder community access</li>
                <li>Annual deep-dive reading</li>
                <li>Priority support</li>
              </ul>
              <button className="btn-plan btn-ol">Claim your spot</button>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div className="tag">Start today</div>
          <h2>
            Map your
            <br />
            <em>inner landscape</em>
          </h2>
          <p>Join thousands of seekers who begin each day with more clarity, more calm, and more alignment.</p>
          <div className="cta-row">
            <a href="#" className="btn-primary">
              <svg className="ic-apple" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <span className="appstore-txt">
                <small>Download on the</small>
                <strong>App Store</strong>
              </span>
            </a>
          </div>
          <p className="cta-note">Free to download · Available on iOS</p>
        </div>
      </section>
    </>
  )
}
