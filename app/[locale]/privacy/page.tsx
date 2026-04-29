import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('privacy.meta')
  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function Privacy() {
  const t = useTranslations('privacy')

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
              <a href="#collect">{t('nav.collect')}</a>
              <a href="#use">{t('nav.use')}</a>
              <a href="#store">{t('nav.store')}</a>
              <a href="#share">{t('nav.share')}</a>
              <a href="#rights">{t('nav.rights')}</a>
              <a href="#cookies">{t('nav.cookies')}</a>
              <a href="#children">{t('nav.children')}</a>
              <a href="#contact">{t('nav.contact')}</a>
            </div>

            <div className="legal-content">
              <div className="lc-section" id="collect">
                <h2>{t('sections.collect.h2')}</h2>
                <p>{t('sections.collect.p1')}</p>
                <ul>
                  <li>
                    <strong>{t('sections.collect.items.account').split(' — ')[0]}</strong> —{' '}
                    {t('sections.collect.items.account').split(' — ')[1]}
                  </li>
                  <li>
                    <strong>{t('sections.collect.items.birth').split(' — ')[0]}</strong> —{' '}
                    {t('sections.collect.items.birth').split(' — ')[1]}
                  </li>
                  <li>
                    <strong>{t('sections.collect.items.journal').split(' — ')[0]}</strong> —{' '}
                    {t('sections.collect.items.journal').split(' — ')[1]}
                  </li>
                  <li>
                    <strong>{t('sections.collect.items.usage').split(' — ')[0]}</strong> —{' '}
                    {t('sections.collect.items.usage').split(' — ')[1]}
                  </li>
                  <li>
                    <strong>{t('sections.collect.items.device').split(' — ')[0]}</strong> —{' '}
                    {t('sections.collect.items.device').split(' — ')[1]}
                  </li>
                </ul>
                <p>{t('sections.collect.p2')}</p>
              </div>

              <div className="lc-section" id="use">
                <h2>{t('sections.use.h2')}</h2>
                <p>{t('sections.use.p1')}</p>
                <ul>
                  <li>{t('sections.use.items.readings')}</li>
                  <li>{t('sections.use.items.ai')}</li>
                  <li>{t('sections.use.items.notifications')}</li>
                  <li>{t('sections.use.items.improve')}</li>
                  <li>{t('sections.use.items.support')}</li>
                </ul>
                <p>{t('sections.use.p2')}</p>
              </div>

              <div className="lc-section" id="store">
                <h2>{t('sections.store.h2')}</h2>
                <p>{t('sections.store.p1')}</p>
                <p>{t('sections.store.p2')}</p>
                <p>{t('sections.store.p3')}</p>
              </div>

              <div className="lc-section" id="share">
                <h2>{t('sections.share.h2')}</h2>
                <p>{t('sections.share.p1')}</p>
                <ul>
                  <li>
                    <strong>{t('sections.share.items.cloud').split(' — ')[0]}</strong> —{' '}
                    {t('sections.share.items.cloud').split(' — ')[1]}
                  </li>
                  <li>
                    <strong>{t('sections.share.items.ai').split(' — ')[0]}</strong> —{' '}
                    {t('sections.share.items.ai').split(' — ')[1]}
                  </li>
                  <li>
                    <strong>{t('sections.share.items.analytics').split(' — ')[0]}</strong> —{' '}
                    {t('sections.share.items.analytics').split(' — ')[1]}
                  </li>
                  <li>
                    <strong>{t('sections.share.items.payment').split(' — ')[0]}</strong> —{' '}
                    {t('sections.share.items.payment').split(' — ')[1]}
                  </li>
                </ul>
                <p>{t('sections.share.p2')}</p>
                <p>{t('sections.share.p3')}</p>
              </div>

              <div className="lc-section" id="rights">
                <h2>{t('sections.rights.h2')}</h2>
                <p>{t('sections.rights.p1')}</p>
                <ul>
                  <li>
                    <strong>{t('sections.rights.items.access').split(' — ')[0]}</strong> —{' '}
                    {t('sections.rights.items.access').split(' — ')[1]}
                  </li>
                  <li>
                    <strong>{t('sections.rights.items.correction').split(' — ')[0]}</strong> —{' '}
                    {t('sections.rights.items.correction').split(' — ')[1]}
                  </li>
                  <li>
                    <strong>{t('sections.rights.items.deletion').split(' — ')[0]}</strong> —{' '}
                    {t('sections.rights.items.deletion').split(' — ')[1]}
                  </li>
                  <li>
                    <strong>{t('sections.rights.items.portability').split(' — ')[0]}</strong> —{' '}
                    {t('sections.rights.items.portability').split(' — ')[1]}
                  </li>
                  <li>
                    <strong>{t('sections.rights.items.objection').split(' — ')[0]}</strong> —{' '}
                    {t('sections.rights.items.objection').split(' — ')[1]}
                  </li>
                </ul>
                <p>
                  {t('sections.rights.p2').split('privacy@vela.app')[0]}
                  <a href="mailto:privacy@vela.app">privacy@vela.app</a>
                  {t('sections.rights.p2').split('privacy@vela.app')[1]}
                </p>
              </div>

              <div className="lc-section" id="cookies">
                <h2>{t('sections.cookies.h2')}</h2>
                <p>{t('sections.cookies.p')}</p>
              </div>

              <div className="lc-section" id="children">
                <h2>{t('sections.children.h2')}</h2>
                <p>
                  {t('sections.children.p').split('privacy@vela.app')[0]}
                  <a href="mailto:privacy@vela.app">privacy@vela.app</a>
                  {t('sections.children.p').split('privacy@vela.app')[1]}
                </p>
              </div>

              <div className="lc-section" id="contact">
                <h2>{t('sections.contact.h2')}</h2>
                <p>{t('sections.contact.p')}</p>
                <ul>
                  <li>
                    {t('sections.contact.items.email').split(': ')[0]}:{' '}
                    <a href="mailto:privacy@vela.app">privacy@vela.app</a>
                  </li>
                  <li>{t('sections.contact.items.post')}</li>
                </ul>
                <p>
                  {t('sections.contact.dpo').split('dpo@vela.app')[0]}
                  <a href="mailto:dpo@vela.app">dpo@vela.app</a>
                  {t('sections.contact.dpo').split('dpo@vela.app')[1]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
