import { useTranslations } from 'next-intl'
import BirthChart from '@/components/BirthChart'

export default function Blog() {
  const t = useTranslations('blog')

  const posts = [
    'p1', 'p2', 'p3', 'p4', 'p5', 'p6'
  ] as const

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="blog-hero-inner">
            <div className="page-hero-left">
              <div className="tag">{t('hero.tag')}</div>
              <h1>{t('hero.h1.line1')} <em>{t('hero.h1.em')}</em></h1>
              <p>{t('hero.p')}</p>
              <div className="blog-cats">
                <button className="cat-btn active">{t('hero.cats.all')}</button>
                <button className="cat-btn">{t('hero.cats.astrology')}</button>
                <button className="cat-btn">{t('hero.cats.journalling')}</button>
                <button className="cat-btn">{t('hero.cats.moon')}</button>
                <button className="cat-btn">{t('hero.cats.relationships')}</button>
                <button className="cat-btn">{t('hero.cats.seasons')}</button>
              </div>
            </div>
            <div className="blog-hero-chart">
              <BirthChart decorative />
            </div>
          </div>
        </div>
      </section>

      <section className="featured">
        <div className="container">
          <div className="feat-card">
            <div className="feat-img pi-1">
              <div className="feat-img-symbol">&#x2644;&#xFE0E;</div>
              <div className="feat-img-badge">Featured</div>
            </div>
            <div className="feat-body">
              <div className="tag">{t('featured.tag')}</div>
              <h2>{t('featured.h2.line1')} <em>{t('featured.h2.em')}</em></h2>
              <p>{t('featured.p')}</p>
              <div className="feat-meta">
                <div className="feat-av">R</div>
                <div>
                  <div className="feat-author">{t('featured.author')}</div>
                  <div className="feat-date">{t('featured.date')}</div>
                </div>
                <div className="feat-read">{t('featured.read')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="posts">
        <div className="container">
          <div className="posts-grid">
            {posts.map((k, idx) => (
              <div className="post-card" key={k}>
                <div className={`post-img pi-${idx === 5 ? 1 : idx + 2}`}>
                  <div className="post-img-sym">{['☽︎','♂︎','✍︎','♀︎','☉︎','♃︎'][idx]}</div>
                  <div className="post-cat">{t(`posts.${k}.cat`)}</div>
                </div>
                <div className="post-body">
                  <h3>{t(`posts.${k}.h3`)}</h3>
                  <p>{t(`posts.${k}.p`)}</p>
                  <div className="post-foot">
                    <span className="post-by">{t(`posts.${k}.by`)}</span>
                    <span className="post-time">{t(`posts.${k}.time`)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="newsletter">
        <div className="container">
          <div className="nl-inner">
            <div className="tag" style={{ justifyContent: 'center' }}>{t('newsletter.tag')}</div>
            <h2>{t('newsletter.h2.line1')} <em>{t('newsletter.h2.em')}</em></h2>
            <p>{t('newsletter.p')}</p>
            <div className="nl-form">
              <input className="nl-input" type="email" placeholder={t('newsletter.placeholder')} />
              <button className="nl-btn">{t('newsletter.cta')}</button>
            </div>
            <div className="nl-note">{t('newsletter.note')}</div>
          </div>
        </div>
      </section>
    </>
  )
}
