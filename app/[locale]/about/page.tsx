import { useTranslations } from 'next-intl'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Vela',
  description: 'We believe the ancient wisdom of the cosmos and daily introspection belong together.',
}

export default function About() {
  const t = useTranslations('about')

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <div className="tag">{t('hero.tag')}</div>
            <h1>{t('hero.h1.line1')} <em>{t('hero.h1.em')}</em> {t('hero.h1.line2')}</h1>
            <p>{t('hero.p')}</p>
          </div>
        </div>
      </section>

      <section className="mission">
        <div className="container">
          <div className="mission-inner">
            <div className="mission-left">
              <div className="tag">{t('mission.tag')}</div>
              <h2>{t('mission.h2.line1')} <em>{t('mission.h2.em')}</em> {t('mission.h2.line2')}</h2>
              <p>{t('mission.p1')}</p>
              <p>{t('mission.p2')}</p>
            </div>
            <div className="mission-right">
              <div className="mission-stat"><strong>1.2M+</strong><span>{t('mission.stats.entries')}</span></div>
              <div className="mission-stat"><strong>94%</strong><span>{t('mission.stats.aware')}</span></div>
              <div className="mission-stat"><strong>180+</strong><span>{t('mission.stats.countries')}</span></div>
              <div className="mission-stat"><strong>2022</strong><span>{t('mission.stats.founded')}</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <div className="values-head">
            <div className="tag">{t('values.tag')}</div>
            <h2>{t('values.h2.line1')} <em>{t('values.h2.em')}</em> {t('values.h2.line2')}</h2>
            <p>{t('values.p')}</p>
          </div>
          <div className="values-grid">
            <div className="val-card">
              <div className="val-icon">&#x2736;&#xFE0E;</div>
              <h3>{t('values.cards.depth.h3')}</h3>
              <p>{t('values.cards.depth.p')}</p>
            </div>
            <div className="val-card">
              <div className="val-icon">&#x263D;&#xFE0E;</div>
              <h3>{t('values.cards.privacy.h3')}</h3>
              <p>{t('values.cards.privacy.p')}</p>
            </div>
            <div className="val-card">
              <div className="val-icon">&#x2609;&#xFE0E;</div>
              <h3>{t('values.cards.ancient.h3')}</h3>
              <p>{t('values.cards.ancient.p')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <div className="team-head">
            <div className="tag">{t('team.tag')}</div>
            <h2>{t('team.h2.line1')} <em>{t('team.h2.em')}</em></h2>
            <p>{t('team.p')}</p>
          </div>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar ta-a">S</div>
              <div className="team-name">Sofia Andreou</div>
              <div className="team-role">{t('team.members.sofia.role')}</div>
              <div className="team-bio">{t('team.members.sofia.bio')}</div>
            </div>
            <div className="team-card">
              <div className="team-avatar ta-b">M</div>
              <div className="team-name">Marcus Webb</div>
              <div className="team-role">{t('team.members.marcus.role')}</div>
              <div className="team-bio">{t('team.members.marcus.bio')}</div>
            </div>
            <div className="team-card">
              <div className="team-avatar ta-c">R</div>
              <div className="team-name">Rania El-Amin</div>
              <div className="team-role">{t('team.members.rania.role')}</div>
              <div className="team-bio">{t('team.members.rania.bio')}</div>
            </div>
            <div className="team-card">
              <div className="team-avatar ta-d">L</div>
              <div className="team-name">Lena Park</div>
              <div className="team-role">{t('team.members.lena.role')}</div>
              <div className="team-bio">{t('team.members.lena.bio')}</div>
            </div>
            <div className="team-card">
              <div className="team-avatar ta-e">J</div>
              <div className="team-name">Jonas Bergström</div>
              <div className="team-role">{t('team.members.jonas.role')}</div>
              <div className="team-bio">{t('team.members.jonas.bio')}</div>
            </div>
            <div className="team-card">
              <div className="team-avatar ta-f">A</div>
              <div className="team-name">Aisha Nwosu</div>
              <div className="team-role">{t('team.members.aisha.role')}</div>
              <div className="team-bio">{t('team.members.aisha.bio')}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="story">
        <div className="container">
          <div className="story-inner">
            <div className="story-left">
              <div className="tag">{t('story.tag')}</div>
              <h2>{t('story.h2.line1')} <em>{t('story.h2.em')}</em></h2>
              <p>{t('story.p1')}</p>
              <p>{t('story.p2')}</p>
            </div>
            <div className="timeline">
              <div className="tl-item">
                <div className="tl-left"><div className="tl-dot"></div><div className="tl-line"></div></div>
                <div className="tl-body">
                  <div className="tl-year">{t('story.timeline.t2022.year')}</div>
                  <div className="tl-title">{t('story.timeline.t2022.title')}</div>
                  <div className="tl-desc">{t('story.timeline.t2022.desc')}</div>
                </div>
              </div>
              <div className="tl-item">
                <div className="tl-left"><div className="tl-dot"></div><div className="tl-line"></div></div>
                <div className="tl-body">
                  <div className="tl-year">{t('story.timeline.t2023early.year')}</div>
                  <div className="tl-title">{t('story.timeline.t2023early.title')}</div>
                  <div className="tl-desc">{t('story.timeline.t2023early.desc')}</div>
                </div>
              </div>
              <div className="tl-item">
                <div className="tl-left"><div className="tl-dot"></div><div className="tl-line"></div></div>
                <div className="tl-body">
                  <div className="tl-year">{t('story.timeline.t2023late.year')}</div>
                  <div className="tl-title">{t('story.timeline.t2023late.title')}</div>
                  <div className="tl-desc">{t('story.timeline.t2023late.desc')}</div>
                </div>
              </div>
              <div className="tl-item">
                <div className="tl-left"><div className="tl-dot"></div><div className="tl-line"></div></div>
                <div className="tl-body">
                  <div className="tl-year">{t('story.timeline.t2024.year')}</div>
                  <div className="tl-title">{t('story.timeline.t2024.title')}</div>
                  <div className="tl-desc">{t('story.timeline.t2024.desc')}</div>
                </div>
              </div>
              <div className="tl-item">
                <div className="tl-left"><div className="tl-dot"></div></div>
                <div className="tl-body">
                  <div className="tl-year">{t('story.timeline.today.year')}</div>
                  <div className="tl-title">{t('story.timeline.today.title')}</div>
                  <div className="tl-desc">{t('story.timeline.today.desc')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
