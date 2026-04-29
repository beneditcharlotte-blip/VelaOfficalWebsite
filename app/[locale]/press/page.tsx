import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('press.meta')
  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function Press() {
  const t = useTranslations('press')

  const outlets = ['nyt', 'wired', 'guardian', 'refinery29', 'fastcompany', 'vogue'] as const
  const articles = ['nyt', 'wired', 'fastcompany', 'guardian', 'refinery29', 'vogue'] as const
  const assets = ['logos', 'screenshots', 'photos', 'guidelines', 'factsheet'] as const
  const contactCards = ['press', 'partnership', 'speaking'] as const

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="tag">{t('hero.tag')}</div>
          <h1>
            {t('hero.h1.line1')} <em>{t('hero.h1.em')}</em>
          </h1>
          <p>{t('hero.p')}</p>
        </div>
      </section>

      <section className="logowall">
        <div className="container">
          <div className="logowall-label">{t('logowall.label')}</div>
          <div className="logos">
            {outlets.map((outlet) => (
              <div className="logo-item" key={outlet}>
                {t(`logowall.outlets.${outlet}`)}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="press-stats">
        <div className="container">
          <div className="press-stats-inner">
            <div className="ps-item">
              <div className="ps-num">
                {t('stats.mau.num')}
                <span className="ps-unit">{t('stats.mau.unit')}</span>
              </div>
              <div className="ps-label">{t('stats.mau.label')}</div>
            </div>
            <div className="ps-div"></div>
            <div className="ps-item">
              <div className="ps-num">
                {t('stats.countries.num')}
                <span className="ps-unit">{t('stats.countries.unit')}</span>
              </div>
              <div className="ps-label">{t('stats.countries.label')}</div>
            </div>
            <div className="ps-div"></div>
            <div className="ps-item">
              <div className="ps-num">
                {t('stats.rating.num')}
                <span className="ps-unit">{t('stats.rating.unit')}</span>
              </div>
              <div className="ps-label">{t('stats.rating.label')}</div>
            </div>
            <div className="ps-div"></div>
            <div className="ps-item">
              <div className="ps-num">{t('stats.founded.num')}</div>
              <div className="ps-label">{t('stats.founded.label')}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="coverage">
        <div className="container">
          <div className="coverage-head">
            <div className="tag">{t('coverage.tag')}</div>
            <h2>
              {t('coverage.h2.line1')} <em>{t('coverage.h2.em')}</em>
            </h2>
          </div>
          <div className="coverage-grid">
            {articles.map((article) => (
              <div className="cov-card" key={article}>
                <div className="cov-pub">{t(`coverage.articles.${article}.pub`)}</div>
                <div className="cov-quote">
                  "{t(`coverage.articles.${article}.quote`)}<em>{t(`coverage.articles.${article}.em`)}</em>
                  {t(`coverage.articles.${article}.quote_end`)}"
                </div>
                <div className="cov-meta">
                  <span className="cov-date">{t(`coverage.articles.${article}.date`)}</span>
                  <span className="cov-link">{t(`coverage.articles.${article}.link`)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="presskit">
        <div className="container">
          <div className="presskit-inner">
            <div className="presskit-left">
              <div className="tag">{t('presskit.tag')}</div>
              <h2>
                {t('presskit.h2.line1')} <em>{t('presskit.h2.em')}</em>
              </h2>
              <p>{t('presskit.p')}</p>
              <div className="pk-btn">{t('presskit.btn')}</div>
            </div>
            <div className="presskit-right">
              {assets.map((asset, idx) => (
                <div className="pk-asset" key={asset}>
                  <div className="pk-asset-icon">{['◈', '⊡', '◉', '≡', '◆'][idx]}</div>
                  <div>
                    <div className="pk-asset-name">{t(`presskit.assets.${asset}.name`)}</div>
                    <div className="pk-asset-desc">{t(`presskit.assets.${asset}.desc`)}</div>
                  </div>
                  <div className="pk-asset-dl">{idx < 3 ? '↓ ZIP' : '↓ PDF'}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="press-contact">
        <div className="container">
          <div className="press-contact-inner">
            <div className="pc-left">
              <div className="tag">{t('contact.tag')}</div>
              <h2>
                {t('contact.h2.line1')} <em>{t('contact.h2.em')}</em>
              </h2>
              <p>{t('contact.p')}</p>
            </div>
            <div className="pc-right">
              {contactCards.map((card) => (
                <div className="pc-card" key={card}>
                  <h4>{t(`contact.cards.${card}.h4`)}</h4>
                  <p>{t(`contact.cards.${card}.p`)}</p>
                  <a href={`mailto:${t(`contact.cards.${card}.link`)}`}>{t(`contact.cards.${card}.link`)}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
