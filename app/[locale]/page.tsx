import { useTranslations } from 'next-intl'
import BirthChart from '@/components/BirthChart'
import WeekStrip from '@/components/WeekStrip'
import PlanetList from '@/components/PlanetList'

const GooglePlayIcon = () => (
  <svg className="ic-gplay" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M3.18 23.76c.35.2.76.22 1.14.08L16.9 12 13.1 8.2 3.18 23.76zm17.14-10.54c.5-.28.82-.8.82-1.22s-.32-.94-.82-1.22l-2.68-1.54-3.18 3.18 3.18 3.18 2.68-1.38zM1.3.58C1.1.9 1 1.28 1 1.7v20.6c0 .42.1.8.3 1.12l.08.08 11.54-11.54v-.26L1.38.5 1.3.58zm11.8 11.24L4.32.14A1.32 1.32 0 0 0 3.18.22L13.1 10.14l-1.5-1.5z" />
  </svg>
)

const AppleIcon = () => (
  <svg className="ic-apple" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
)

function StarRating({ count }: { count: number }) {
  return (
    <div className="t-stars">
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i} style={i > count ? { color: 'var(--faint)' } : {}}>★</span>
      ))}
    </div>
  )
}

export default function Home() {
  const t = useTranslations('home')

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-left">
              <div className="hero-eyebrow">{t('hero.eyebrow')}</div>
              <h1 className="hero-h1">
                {t('hero.h1.line1')}
                <br />
                <em>{t('hero.h1.em')}</em>
              </h1>
              <p className="hero-p">{t('hero.p')}</p>
              <div className="hero-actions">
                <a href="#" className="btn-primary">
                  <AppleIcon />
                  <span className="appstore-txt">
                    <small>{t('hero.cta.downloadOn')}</small>
                    <strong>{t('hero.cta.appStore')}</strong>
                  </span>
                </a>
                <a href="#" className="btn-primary">
                  <GooglePlayIcon />
                  <span className="appstore-txt">
                    <small>{t('hero.cta.getItOn')}</small>
                    <strong>{t('hero.cta.googlePlay')}</strong>
                  </span>
                </a>
              </div>
              <p className="hero-privacy">{t('hero.privacy')}</p>
              <div className="hero-social">
                <div className="hero-avatars">
                  <span className="av1">R</span>
                  <span className="av2">M</span>
                  <span className="av3">S</span>
                  <span className="av4">+</span>
                </div>
                <span className="hero-social-label">{t('hero.social.label')}</span>
                <span className="hero-social-count">{t('hero.social.count')}</span>
              </div>
            </div>
            <div className="hero-right">
              <div className="cw1">
                <div className="icard c1">
                  <div className="ic-tag-row">
                    <div className="ic-badge">&#x263D;&#xFE0E;</div>
                    <span className="ic-lbl">{t('hero.cards.c1.label')}</span>
                  </div>
                  <p className="ic-body">{t('hero.cards.c1.body')}</p>
                  <div className="ic-meta">
                    <span className="ic-astro">{t('hero.cards.c1.astro')}</span>
                    <span className="ic-pct">82%</span>
                  </div>
                </div>
              </div>
              <div className="cw2">
                <div className="icard c2">
                  <div className="ic-tag-row">
                    <div className="ic-badge">&#x2736;&#xFE0E;</div>
                    <span className="ic-lbl">{t('hero.cards.c2.label')}</span>
                  </div>
                  <p className="ic-body">{t('hero.cards.c2.body')}</p>
                  <div className="ic-meta">
                    <span className="ic-astro">{t('hero.cards.c2.astro')}</span>
                    <span className="ic-pct">+12 orbit</span>
                  </div>
                </div>
              </div>
              <div className="cw3">
                <div className="icard c3">
                  <div className="ic-tag-row">
                    <div className="ic-badge">&#x2606;&#xFE0E;</div>
                    <span className="ic-lbl">{t('hero.cards.c3.label')}</span>
                  </div>
                  <p className="ic-body">{t('hero.cards.c3.body')}</p>
                  <div className="ic-meta">
                    <span className="ic-astro">{t('hero.cards.c3.astro')}</span>
                  </div>
                </div>
              </div>
              <div className="cw4">
                <div className="icard c4">
                  <div className="ic-tag-row">
                    <div className="ic-badge">&#x25CE;&#xFE0E;</div>
                    <span className="ic-lbl">{t('hero.cards.c4.label')}</span>
                  </div>
                  <p className="ic-body">{t('hero.cards.c4.body')}</p>
                  <div className="ic-meta">
                    <span className="ic-astro">{t('hero.cards.c4.astro')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-hint">
          <div className="scroll-dot"></div>
          <span>{t('hero.scroll')}</span>
        </div>
      </section>

      <div className="marquee-wrap">
        <div className="marquee-track">
          <span>{t('marquee')} <em>·</em> </span>
          <span>{t('marquee')} <em>·</em> </span>
          <span>{t('marquee')} <em>·</em> </span>
          <span>{t('marquee')} <em>·</em> </span>
        </div>
      </div>

      <div className="stats-bar">
        <div className="container">
          <div className="stats-inner">
            <div className="stat-item">
              <div className="stat-num">{t('stats.readings.num')}<span className="stat-unit">{t('stats.readings.unit')}</span></div>
              <div className="stat-label">{t('stats.readings.label')}</div>
            </div>
            <div className="stat-div"></div>
            <div className="stat-item">
              <div className="stat-num">{t('stats.users.num')}<span className="stat-unit">{t('stats.users.unit')}</span></div>
              <div className="stat-label">{t('stats.users.label')}</div>
            </div>
            <div className="stat-div"></div>
            <div className="stat-item">
              <div className="stat-num">{t('stats.countries.num')}<span className="stat-unit">{t('stats.countries.unit')}</span></div>
              <div className="stat-label">{t('stats.countries.label')}</div>
            </div>
            <div className="stat-div"></div>
            <div className="stat-item">
              <div className="stat-num">{t('stats.rating.num')}<span className="stat-unit">{t('stats.rating.unit')}</span></div>
              <div className="stat-label">{t('stats.rating.label')}</div>
            </div>
          </div>
        </div>
      </div>

      <section className="starreading section" id="starreading">
        <div className="container">
          <div className="sr-inner">
            <div className="sr-left">
              <div className="tag">{t('starreading.tag')}</div>
              <h2 className="section-h">
                {t('starreading.h2.line1')}
                <br />
                <em>{t('starreading.h2.em')}</em>
              </h2>
              <p className="section-p">{t('starreading.p')}</p>
              <div className="feature-list">
                <div className="fi">
                  <div className="fi-icon">
                    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></svg>
                  </div>
                  <div>
                    <h4>{t('starreading.features.dimensions.h4')}</h4>
                    <p>{t('starreading.features.dimensions.p')}</p>
                  </div>
                </div>
                <div className="fi">
                  <div className="fi-icon">
                    <svg viewBox="0 0 24 24"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
                  </div>
                  <div>
                    <h4>{t('starreading.features.moon.h4')}</h4>
                    <p>{t('starreading.features.moon.p')}</p>
                  </div>
                </div>
                <div className="fi">
                  <div className="fi-icon">
                    <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                  </div>
                  <div>
                    <h4>{t('starreading.features.intention.h4')}</h4>
                    <p>{t('starreading.features.intention.p')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sr-visual">
              <div className="rc rc-main">
                <div className="rc-main-label">{t('starreading.card.label')}</div>
                <div className="rc-main-planet">
                  <span className="rc-main-planet-sym">&#x2643;&#xFE0E;</span> {t('starreading.card.planet')}
                </div>
                <div className="rc-main-h">
                  {t('starreading.card.h.line1')}
                  <br />
                  around you — <em>{t('starreading.card.h.em')}</em>
                </div>
                <div className="rc-main-sub">{t('starreading.card.sub')}</div>
                <div className="rc-main-foot">
                  <span className="rc-main-tag">{t('starreading.card.tag')}</span>
                  <div className="rc-main-dot"></div>
                </div>
              </div>
              <div className="rc-grid">
                <div className="rc-dim active">
                  <div className="rc-dim-sym">&#x2640;&#xFE0E;</div>
                  <div className="rc-dim-name">{t('starreading.card.dims.fortune.name')}</div>
                  <div className="rc-dim-bar"><div className="rc-dim-fill" style={{ width: '88%' }}></div></div>
                  <div className="rc-dim-val">{t('starreading.card.dims.fortune.val')}</div>
                </div>
                <div className="rc-dim active">
                  <div className="rc-dim-sym">&#x263D;&#xFE0E;</div>
                  <div className="rc-dim-name">{t('starreading.card.dims.love.name')}</div>
                  <div className="rc-dim-bar"><div className="rc-dim-fill" style={{ width: '72%' }}></div></div>
                  <div className="rc-dim-val">{t('starreading.card.dims.love.val')}</div>
                </div>
                <div className="rc-dim">
                  <div className="rc-dim-sym">&#x2642;&#xFE0E;</div>
                  <div className="rc-dim-name">{t('starreading.card.dims.career.name')}</div>
                  <div className="rc-dim-bar"><div className="rc-dim-fill" style={{ width: '90%' }}></div></div>
                  <div className="rc-dim-val">{t('starreading.card.dims.career.val')}</div>
                </div>
                <div className="rc-dim">
                  <div className="rc-dim-sym">&#x2644;&#xFE0E;</div>
                  <div className="rc-dim-name">{t('starreading.card.dims.rest.name')}</div>
                  <div className="rc-dim-bar"><div className="rc-dim-fill" style={{ width: '48%' }}></div></div>
                  <div className="rc-dim-val">{t('starreading.card.dims.rest.val')}</div>
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
              <div className="tag">{t('weeklyrhythm.tag')}</div>
              <h2>
                {t('weeklyrhythm.h2.line1')}
                <br />
                <em>{t('weeklyrhythm.h2.em')}</em>
              </h2>
            </div>
            <p>{t('weeklyrhythm.p')}</p>
          </div>
          <WeekStrip />
          <div className="week-note">
            {t('weeklyrhythm.note.prefix')} <em>{t('weeklyrhythm.note.em')}</em>
          </div>
        </div>
      </section>

      <section className="birthchart section" id="birthchart">
        <div className="container">
          <div className="bc-inner">
            <div className="bc-visual"><BirthChart /></div>
            <div className="bc-right">
              <div className="tag">{t('birthchart.tag')}</div>
              <h2 className="section-h">
                {t('birthchart.h2.line1')}
                <br />
                <em>{t('birthchart.h2.em')}</em>
              </h2>
              <p className="section-p">{t('birthchart.p')}</p>
              <PlanetList />
              <div className="bc-features">
                <div className="bcf">
                  <div className="bcf-sym">&#x25C9;&#xFE0E;</div>
                  <div className="bcf-title">{t('birthchart.features.natal.title')}</div>
                  <div className="bcf-desc">{t('birthchart.features.natal.desc')}</div>
                </div>
                <div className="bcf">
                  <div className="bcf-sym">&#x25C8;&#xFE0E;</div>
                  <div className="bcf-title">{t('birthchart.features.transits.title')}</div>
                  <div className="bcf-desc">{t('birthchart.features.transits.desc')}</div>
                </div>
                <div className="bcf">
                  <div className="bcf-sym">&#x25CE;&#xFE0E;</div>
                  <div className="bcf-title">{t('birthchart.features.synastry.title')}</div>
                  <div className="bcf-desc">{t('birthchart.features.synastry.desc')}</div>
                </div>
                <div className="bcf">
                  <div className="bcf-sym">&#x25C7;&#xFE0E;</div>
                  <div className="bcf-title">{t('birthchart.features.forecast.title')}</div>
                  <div className="bcf-desc">{t('birthchart.features.forecast.desc')}</div>
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
                  <div className="j-ui-date">{t('journal.ui.date')}</div>
                  <div className="j-streak">
                    <div className="j-streak-pip"></div>{t('journal.ui.streak')}
                  </div>
                </div>
                <div className="j-entry-label">{t('journal.ui.entryLabel')}</div>
                <div className="j-entry">
                  {t('journal.ui.entry')}<span className="j-cursor"></span>
                </div>
                <div className="j-response-label">
                  <span className="j-response-label-sym">&#x2736;&#xFE0E;</span> {t('journal.ui.aiLabel')}
                </div>
                <div className="j-bubble">{t('journal.ui.bubble')}</div>
                <div className="j-chips">
                  <span className="j-chip">{t('journal.ui.chips.c1')}</span>
                  <span className="j-chip">{t('journal.ui.chips.c2')}</span>
                  <span className="j-chip">{t('journal.ui.chips.c3')}</span>
                </div>
                <div className="j-btns">
                  <button className="j-btn-p">{t('journal.ui.btn1')}</button>
                  <button className="j-btn-s">{t('journal.ui.btn2')}</button>
                </div>
                <p className="journal-privacy">🔒 {t('journal.ui.privacy')}</p>
              </div>
            </div>
            <div className="j-right">
              <div className="tag">{t('journal.tag')}</div>
              <h2 className="section-h">
                {t('journal.h2.line1')}
                <br />
                <em>{t('journal.h2.em')}</em>
              </h2>
              <p className="section-p">{t('journal.p')}</p>
              <div className="j-steps">
                <div className="js-item">
                  <div className="js-num">01</div>
                  <div className="js-body"><h4>{t('journal.steps.s1.h4')}</h4><p>{t('journal.steps.s1.p')}</p></div>
                </div>
                <div className="js-item">
                  <div className="js-num">02</div>
                  <div className="js-body"><h4>{t('journal.steps.s2.h4')}</h4><p>{t('journal.steps.s2.p')}</p></div>
                </div>
                <div className="js-item">
                  <div className="js-num">03</div>
                  <div className="js-body"><h4>{t('journal.steps.s3.h4')}</h4><p>{t('journal.steps.s3.p')}</p></div>
                </div>
                <div className="js-item">
                  <div className="js-num">04</div>
                  <div className="js-body"><h4>{t('journal.steps.s4.h4')}</h4><p>{t('journal.steps.s4.p')}</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features3 section">
        <div className="container">
          <div className="f3-head">
            <div className="tag" style={{ justifyContent: 'center' }}>{t('features.tag')}</div>
            <h2 className="section-h" style={{ textAlign: 'center', maxWidth: '480px', margin: '0 auto' }}>
              {t('features.h2.line1')}
              <br />
              <em>{t('features.h2.em')}</em>
            </h2>
          </div>
          <div className="f3-grid">
            <div className="f3-card">
              <div className="f3-icon">
                <svg viewBox="0 0 24 24"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /><circle cx="12" cy="12" r="1" /></svg>
              </div>
              <h3>{t('features.cards.moon.h3')}</h3>
              <p>{t('features.cards.moon.p')}</p>
              <a href={t('features.cards.moon.href')} className="f3-link">{t('features.cards.moon.link')}</a>
            </div>
            <div className="f3-card dark">
              <div className="f3-icon">
                <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              </div>
              <h3>{t('features.cards.ai.h3')}</h3>
              <p>{t('features.cards.ai.p')}</p>
              <a href={t('features.cards.ai.href')} className="f3-link">{t('features.cards.ai.link')}</a>
            </div>
            <div className="f3-card">
              <div className="f3-icon">
                <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
              </div>
              <h3>{t('features.cards.journal.h3')}</h3>
              <p>{t('features.cards.journal.p')}</p>
              <a href={t('features.cards.journal.href')} className="f3-link">{t('features.cards.journal.link')}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials section">
        <div className="container">
          <div className="t-head">
            <div className="tag" style={{ justifyContent: 'center' }}>{t('testimonials.tag')}</div>
            <h2>{t('testimonials.h2.line1')} <em>{t('testimonials.h2.em')}</em></h2>
            <p>{t('testimonials.p')}</p>
          </div>
          <div className="t-grid">
            <div className="t-card">
              <StarRating count={t.raw('testimonials.cards.t1.stars') as number} />
              <div className="t-quote">{t('testimonials.cards.t1.quote')}</div>
              <div className="t-author">
                <div className="t-av ta1">S</div>
                <div><div className="t-name">{t('testimonials.cards.t1.name')}</div><div className="t-handle">{t('testimonials.cards.t1.handle')}</div></div>
              </div>
              <div className="t-platform">{t('testimonials.cards.t1.platform')}</div>
            </div>
            <div className="t-card">
              <StarRating count={t.raw('testimonials.cards.t2.stars') as number} />
              <div className="t-quote">{t('testimonials.cards.t2.quote')}</div>
              <div className="t-author">
                <div className="t-av ta2">M</div>
                <div><div className="t-name">{t('testimonials.cards.t2.name')}</div><div className="t-handle">{t('testimonials.cards.t2.handle')}</div></div>
              </div>
              <div className="t-platform">{t('testimonials.cards.t2.platform')}</div>
            </div>
            <div className="t-card">
              <StarRating count={t.raw('testimonials.cards.t3.stars') as number} />
              <div className="t-quote">{t('testimonials.cards.t3.quote')}</div>
              <div className="t-author">
                <div className="t-av ta3">L</div>
                <div><div className="t-name">{t('testimonials.cards.t3.name')}</div><div className="t-handle">{t('testimonials.cards.t3.handle')}</div></div>
              </div>
              <div className="t-platform">{t('testimonials.cards.t3.platform')}</div>
            </div>
          </div>
          <div className="t-big">
            <div className="t-big-q">
              {t('testimonials.big.quote')} <em>{t('testimonials.big.em')}</em>{t('testimonials.big.quoteEnd')}
            </div>
            <div className="t-big-a">
              <div className="t-big-av">J</div>
              <div className="t-big-name">{t('testimonials.big.name')}</div>
              <div className="t-big-sign">{t('testimonials.big.sign')}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing section" id="pricing">
        <div className="container">
          <div className="price-head">
            <h2>{t('pricing.h2.line1')}<br /><em>{t('pricing.h2.em')}</em></h2>
            <p>{t('pricing.p')}</p>
          </div>
          <div className="price-grid">
            <div className="plan">
              <div className="plan-name">{t('pricing.plans.free.name')}</div>
              <div className="plan-price">$0<sup>/mo</sup></div>
              <div className="plan-period">{t('pricing.plans.free.period')}</div>
              <div className="plan-div"></div>
              <ul className="plan-feats">
                {(t.raw('pricing.plans.free.features') as string[]).map((f: string) => <li key={f}>{f}</li>)}
              </ul>
              <button className="btn-plan btn-ol">{t('pricing.plans.free.cta')}</button>
            </div>
            <div className="plan pop">
              <div className="plan-badge">{t('pricing.plans.seeker.badge')}</div>
              <div className="plan-name">{t('pricing.plans.seeker.name')}</div>
              <div className="plan-price">$11<sup>/mo</sup></div>
              <div className="plan-period">{t('pricing.plans.seeker.period')}</div>
              <div className="plan-div"></div>
              <ul className="plan-feats">
                {(t.raw('pricing.plans.seeker.features') as string[]).map((f: string) => <li key={f}>{f}</li>)}
              </ul>
              <button className="btn-plan btn-lt">{t('pricing.plans.seeker.cta')}</button>
              <p className="plan-trial">{t('pricing.plans.seeker.trial')}</p>
            </div>
            <div className="plan">
              <div className="plan-name">{t('pricing.plans.founder.name')}</div>
              <div className="plan-price">$99<sup>/yr</sup></div>
              <div className="plan-period">{t('pricing.plans.founder.period')}</div>
              <div className="plan-div"></div>
              <ul className="plan-feats">
                {(t.raw('pricing.plans.founder.features') as string[]).map((f: string) => <li key={f}>{f}</li>)}
              </ul>
              <button className="btn-plan btn-ol">{t('pricing.plans.founder.cta')}</button>
              <p className="plan-trial">{t('pricing.plans.founder.trial')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section section">
        <div className="container">
          <div className="faq-head">
            <div className="tag" style={{ justifyContent: 'center' }}>{t('faq.tag')}</div>
            <h2 className="section-h" style={{ textAlign: 'center' }}>
              {t('faq.h2.line1')}<br /><em>{t('faq.h2.em')}</em>
            </h2>
          </div>
          <div className="faq-list">
            {(t.raw('faq.items') as { q: string; a: string }[]).map((item, i) => (
              <div key={i} className="faq-item">
                <div className="faq-q">{item.q}</div>
                <div className="faq-a">{item.a}</div>
              </div>
            ))}
          </div>
          <div className="faq-foot">
            <a href={t('faq.helpHref')} className="btn-ghost">{t('faq.helpLink')}</a>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div className="tag">{t('ctaband.tag')}</div>
          <h2>{t('ctaband.h2.line1')}<br /><em>{t('ctaband.h2.em')}</em></h2>
          <p>{t('ctaband.p')}</p>
          <div className="cta-row" style={{ gap: '16px', flexWrap: 'wrap' }}>
            <a href="#" className="btn-primary">
              <AppleIcon />
              <span className="appstore-txt">
                <small>{t('ctaband.downloadOn')}</small>
                <strong>{t('ctaband.appStore')}</strong>
              </span>
            </a>
            <a href="#" className="btn-primary" style={{ background: 'rgba(245,237,248,.09)', border: '.5px solid rgba(245,237,248,.16)' }}>
              <GooglePlayIcon />
              <span className="appstore-txt">
                <small>{t('ctaband.getItOn')}</small>
                <strong>{t('ctaband.googlePlay')}</strong>
              </span>
            </a>
          </div>
          <p className="cta-note">{t('ctaband.note')}</p>
        </div>
      </section>
    </>
  )
}
