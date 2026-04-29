'use client'

import { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { Link, usePathname, useRouter } from '@/i18n/navigation'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [navBg, setNavBg] = useState(false)
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY > 10)
    }

    const handleClick = (e: MouseEvent) => {
      const ham = document.getElementById('ham')
      const mmenu = document.getElementById('mmenu')
      if (ham && mmenu && !ham.contains(e.target as Node) && !mmenu.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('click', handleClick)
    }
  }, [])

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  const switchLocale = (next: 'zh' | 'en') => {
    router.replace(pathname, { locale: next })
  }

  return (
    <>
      <nav
        id="nav"
        style={{
          background: navBg ? 'rgba(245,237,232,0.88)' : 'rgba(245,237,232,0.55)',
          boxShadow: navBg ? '0 1px 20px rgba(100,80,100,0.06)' : 'none',
        }}
      >
        <Link href="/" className="nav-logo">
          {t('brand')}
        </Link>
        <div className="nav-links">
          <Link href="/#starreading">{t('links.starreading')}</Link>
          <Link href="/#birthchart">{t('links.birthchart')}</Link>
          <Link href="/#journal">{t('links.journal')}</Link>
          <Link href="/#pricing">{t('links.pricing')}</Link>
          <a href="#" className="nav-cta">
            <svg className="ic-apple" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            {t('cta.appStore')}
          </a>
          <div className="locale-switcher">
            <button
              className={locale === 'zh' ? 'active' : ''}
              onClick={() => switchLocale('zh')}
              aria-label="繁體中文"
            >
              {t('locale.zh')}
            </button>
            <span className="locale-div">|</span>
            <button
              className={locale === 'en' ? 'active' : ''}
              onClick={() => switchLocale('en')}
              aria-label="English"
            >
              {t('locale.en')}
            </button>
          </div>
        </div>
        <div
          className={`ham ${menuOpen ? 'open' : ''}`}
          id="ham"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mmenu">
        <Link href="/#starreading" onClick={closeMenu}>{t('links.starreading')}</Link>
        <Link href="/#birthchart" onClick={closeMenu}>{t('links.birthchart')}</Link>
        <Link href="/#journal" onClick={closeMenu}>{t('links.journal')}</Link>
        <Link href="/#pricing" onClick={closeMenu}>{t('links.pricing')}</Link>
        <div className="locale-switcher m-locale-switcher">
          <button
            className={locale === 'zh' ? 'active' : ''}
            onClick={() => { switchLocale('zh'); closeMenu() }}
            aria-label="繁體中文"
          >
            {t('locale.zh')}
          </button>
          <span className="locale-div">|</span>
          <button
            className={locale === 'en' ? 'active' : ''}
            onClick={() => { switchLocale('en'); closeMenu() }}
            aria-label="English"
          >
            {t('locale.en')}
          </button>
        </div>
        <a href="#" className="m-cta" onClick={closeMenu}>
          {t('mobileCta')}
        </a>
      </div>
    </>
  )
}
