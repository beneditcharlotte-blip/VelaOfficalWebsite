import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export default function Footer() {
  const t = useTranslations('footer')

  return (
    <footer>
      <div className="container">
        <div className="ft-top">
          <div className="ft-brand">
            <div className="ft-logo">Vela.</div>
            <div className="ft-tagline">{t('tagline')}</div>
          </div>
          <div className="ft-cols">
            <div className="ft-col">
              <h5>{t('columns.product')}</h5>
              <Link href="/#starreading">{t('productLinks.starreading')}</Link>
              <Link href="/#birthchart">{t('productLinks.birthchart')}</Link>
              <Link href="/#journal">{t('productLinks.journal')}</Link>
              <Link href="/#pricing">{t('productLinks.pricing')}</Link>
            </div>
            <div className="ft-col">
              <h5>{t('columns.company')}</h5>
              <Link href="/about">{t('companyLinks.about')}</Link>
              <Link href="/blog">{t('companyLinks.blog')}</Link>
              <Link href="/careers">{t('companyLinks.careers')}</Link>
              <Link href="/press">{t('companyLinks.press')}</Link>
            </div>
            <div className="ft-col">
              <h5>{t('columns.support')}</h5>
              <Link href="/help">{t('supportLinks.help')}</Link>
              <Link href="/privacy">{t('supportLinks.privacy')}</Link>
              <Link href="/terms">{t('supportLinks.terms')}</Link>
            </div>
          </div>
        </div>
        <div className="ft-bot">
          <div className="ft-copy">{t('copyright')}</div>
          <div className="ft-badges">
            <span className="ft-badge">{t('badges.appStore')}</span>
            <span className="ft-badge">{t('badges.soc2')}</span>
            <span className="ft-badge">{t('badges.gdpr')}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
