import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('terms.meta')
  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function Terms() {
  const t = useTranslations('terms')

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
            <div className="legal-meta">{t('hero.meta')}</div>
          </div>
        </div>
      </section>

      <section className="legal-body section">
        <div className="container">
          <div className="legal-inner">
            <div className="legal-nav">
              <div className="ln-label">{t('nav.label')}</div>
              <a href="#agreement">{t('nav.agreement')}</a>
              <a href="#account">{t('nav.account')}</a>
              <a href="#content">{t('nav.content')}</a>
              <a href="#use">{t('nav.use')}</a>
              <a href="#subscription">{t('nav.subscription')}</a>
              <a href="#ip">{t('nav.ip')}</a>
              <a href="#disclaimer">{t('nav.disclaimer')}</a>
              <a href="#termination">{t('nav.termination')}</a>
              <a href="#contact">{t('nav.contact')}</a>
            </div>

            <div className="legal-content">
              <div className="lc-section" id="agreement">
                <h2>{t('sections.agreement.h2')}</h2>
                <p>{t('sections.agreement.p1')}</p>
                <p>{t('sections.agreement.p2')}</p>
                <p>{t('sections.agreement.p3')}</p>
              </div>

              <div className="lc-section" id="account">
                <h2>{t('sections.account.h2')}</h2>
                <p>{t('sections.account.p1')}</p>
                <p>
                  {t('sections.account.p2').split('support@vela.app')[0]}
                  <a href="mailto:support@vela.app">support@vela.app</a>
                  {t('sections.account.p2').split('support@vela.app')[1]}
                </p>
                <p>{t('sections.account.p3')}</p>
              </div>

              <div className="lc-section" id="content">
                <h2>{t('sections.content.h2')}</h2>
                <p>{t('sections.content.p1')}</p>
                <p>{t('sections.content.p2')}</p>
                <p>{t('sections.content.p3')}</p>
              </div>

              <div className="lc-section" id="use">
                <h2>{t('sections.use.h2')}</h2>
                <p>{t('sections.use.p1')}</p>
                <ul>
                  <li>{t('sections.use.items.reverse')}</li>
                  <li>{t('sections.use.items.scrape')}</li>
                  <li>{t('sections.use.items.access')}</li>
                  <li>{t('sections.use.items.unlawful')}</li>
                  <li>{t('sections.use.items.impersonate')}</li>
                </ul>
                <p>{t('sections.use.p2')}</p>
              </div>

              <div className="lc-section" id="subscription">
                <h2>{t('sections.subscription.h2')}</h2>
                <p>{t('sections.subscription.p1')}</p>
                <p>{t('sections.subscription.p2')}</p>
                <p>{t('sections.subscription.p3')}</p>
                <p>{t('sections.subscription.p4')}</p>
              </div>

              <div className="lc-section" id="ip">
                <h2>{t('sections.ip.h2')}</h2>
                <p>{t('sections.ip.p1')}</p>
                <p>{t('sections.ip.p2')}</p>
              </div>

              <div className="lc-section" id="disclaimer">
                <h2>{t('sections.disclaimer.h2')}</h2>
                <p>{t('sections.disclaimer.p1')}</p>
                <p>{t('sections.disclaimer.p2')}</p>
                <p>{t('sections.disclaimer.p3')}</p>
              </div>

              <div className="lc-section" id="termination">
                <h2>{t('sections.termination.h2')}</h2>
                <p>{t('sections.termination.p1')}</p>
                <p>{t('sections.termination.p2')}</p>
                <p>{t('sections.termination.p3')}</p>
              </div>

              <div className="lc-section" id="contact">
                <h2>{t('sections.contact.h2')}</h2>
                <p>{t('sections.contact.p1')}</p>
                <ul>
                  <li>
                    {t('sections.contact.items.email').split(': ')[0]}:{' '}
                    <a href="mailto:legal@vela.app">legal@vela.app</a>
                  </li>
                  <li>{t('sections.contact.items.post')}</li>
                </ul>
                <p>{t('sections.contact.p2')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
