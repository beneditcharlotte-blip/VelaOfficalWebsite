import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('help.meta')
  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function Help() {
  const t = useTranslations('help')

  const faqGroups = ['getting_started', 'star_readings', 'journal_ai', 'account_billing'] as const
  const faqItems = ['q1', 'q2', 'q3'] as const

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <div className="tag">{t('hero.tag')}</div>
            <h1>
              {t('hero.h1.line1')} <em>{t('hero.h1.em')}</em>
            </h1>
            <p>{t('hero.p')}</p>
          </div>
        </div>
      </section>

      <section className="help-search-bar">
        <div className="container">
          <div className="hs-inner">
            <div className="hs-icon">&#x2315;&#xFE0E;</div>
            <input className="hs-input" type="text" placeholder={t('search.placeholder')} readOnly />
          </div>
        </div>
      </section>

      <section className="faq section">
        <div className="container">
          {faqGroups.map((group) => (
            <div className="faq-group" key={group}>
              <div className="faq-category">{t(`faqs.${group}.category`)}</div>
              <div className="faq-list">
                {faqItems.map((item) => (
                  <div className="faq-item" key={item}>
                    <div className="faq-q">{t(`faqs.${group}.${item}`)}</div>
                    <div className="faq-a">{t(`faqs.${group}.a${item[1]}`)}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="help-contact">
        <div className="container">
          <div className="hc-inner">
            <div className="hc-left">
              <div className="tag">{t('contact.tag')}</div>
              <h2>
                {t('contact.h2.line1')} <em>{t('contact.h2.em')}</em>
              </h2>
              <p>{t('contact.p')}</p>
            </div>
            <div className="hc-right">
              <div className="hc-card">
                <div className="hc-icon">&#x2709;&#xFE0E;</div>
                <h4>{t('contact.email.h4')}</h4>
                <p>{t('contact.email.p')}</p>
                <a href="mailto:support@vela.app">{t('contact.email.link')}</a>
              </div>
              <div className="hc-card">
                <div className="hc-icon">&#x2736;&#xFE0E;</div>
                <h4>{t('contact.community.h4')}</h4>
                <p>{t('contact.community.p')}</p>
                <a href="#">{t('contact.community.link')}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
