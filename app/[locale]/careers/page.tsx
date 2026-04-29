import { useTranslations } from 'next-intl'

export default function Careers() {
  const t = useTranslations('careers')

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="tag">{t('hero.tag')}</div>
          <h1>{t('hero.h1.line1')} <em>{t('hero.h1.em')}</em></h1>
          <p>{t('hero.p')}</p>
        </div>
      </section>

      <section className="perks">
        <div className="container">
          <div className="perks-head">
            <div className="tag">{t('perks.tag')}</div>
            <h2>{t('perks.h2.line1')} <em>{t('perks.h2.em')}</em> {t('perks.h2.line2')}</h2>
            <p>{t('perks.p')}</p>
          </div>
          <div className="perks-grid">
            <div className="perk"><div className="perk-icon">&#x1F30D;</div><h4>{t('perks.items.remote.h4')}</h4><p>{t('perks.items.remote.p')}</p></div>
            <div className="perk"><div className="perk-icon">&#x231B;</div><h4>{t('perks.items.async.h4')}</h4><p>{t('perks.items.async.p')}</p></div>
            <div className="perk"><div className="perk-icon">&#x1F4C5;</div><h4>{t('perks.items.pto.h4')}</h4><p>{t('perks.items.pto.p')}</p></div>
            <div className="perk"><div className="perk-icon">&#x2728;</div><h4>{t('perks.items.equipment.h4')}</h4><p>{t('perks.items.equipment.p')}</p></div>
            <div className="perk"><div className="perk-icon">&#x1F4DA;</div><h4>{t('perks.items.learning.h4')}</h4><p>{t('perks.items.learning.p')}</p></div>
            <div className="perk"><div className="perk-icon">&#x2665;</div><h4>{t('perks.items.health.h4')}</h4><p>{t('perks.items.health.p')}</p></div>
          </div>
        </div>
      </section>

      <section className="culture">
        <div className="container">
          <div className="culture-inner">
            <div className="culture-left">
              <div className="tag">{t('culture.tag')}</div>
              <h2>{t('culture.h2.line1')} <em>{t('culture.h2.em')}</em></h2>
              <p>{t('culture.p1')}</p>
              <p>{t('culture.p2')}</p>
            </div>
            <div className="culture-right">
              <div className="culture-card"><div className="cc-sym">&#x2736;&#xFE0E;</div><div className="cc-title">{t('culture.cards.craft.title')}</div><div className="cc-desc">{t('culture.cards.craft.desc')}</div></div>
              <div className="culture-card"><div className="cc-sym">&#x263D;&#xFE0E;</div><div className="cc-title">{t('culture.cards.honest.title')}</div><div className="cc-desc">{t('culture.cards.honest.desc')}</div></div>
              <div className="culture-card"><div className="cc-sym">&#x2609;&#xFE0E;</div><div className="cc-title">{t('culture.cards.autonomy.title')}</div><div className="cc-desc">{t('culture.cards.autonomy.desc')}</div></div>
              <div className="culture-card"><div className="cc-sym">&#x25CE;&#xFE0E;</div><div className="cc-title">{t('culture.cards.rest.title')}</div><div className="cc-desc">{t('culture.cards.rest.desc')}</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="roles">
        <div className="container">
          <div className="roles-head">
            <div className="tag">{t('roles.tag')}</div>
            <h2>{t('roles.h2.line1')} <em>{t('roles.h2.em')}</em></h2>
            <p>{t('roles.p')}</p>
          </div>

          <div className="roles-dept">
            <div className="dept-label">{t('roles.depts.engineering')}</div>
            <div className="role-row"><div><div className="role-title">{t('roles.positions.ios')}</div><div className="role-tags"><span className="role-tag">{t('roles.tags.fulltime')}</span><span className="role-tag">{t('roles.tags.remote')}</span><span className="role-tag">Swift</span></div></div><div className="role-right"><span className="role-loc">{t('roles.tags.anywhere')}</span><span className="role-arrow">→</span></div></div>
            <div className="role-row"><div><div className="role-title">{t('roles.positions.ml')}</div><div className="role-tags"><span className="role-tag">{t('roles.tags.fulltime')}</span><span className="role-tag">{t('roles.tags.remote')}</span><span className="role-tag">Python</span></div></div><div className="role-right"><span className="role-loc">{t('roles.tags.anywhere')}</span><span className="role-arrow">→</span></div></div>
          </div>

          <div className="roles-dept">
            <div className="dept-label">{t('roles.depts.design')}</div>
            <div className="role-row"><div><div className="role-title">{t('roles.positions.designer')}</div><div className="role-tags"><span className="role-tag">{t('roles.tags.fulltime')}</span><span className="role-tag">{t('roles.tags.remote')}</span><span className="role-tag">Figma</span></div></div><div className="role-right"><span className="role-loc">{t('roles.tags.anywhere')}</span><span className="role-arrow">→</span></div></div>
          </div>

          <div className="roles-dept">
            <div className="dept-label">{t('roles.depts.content')}</div>
            <div className="role-row"><div><div className="role-title">{t('roles.positions.writer')}</div><div className="role-tags"><span className="role-tag">{t('roles.tags.parttime')}</span><span className="role-tag">{t('roles.tags.remote')}</span><span className="role-tag">{t('roles.tags.contract')}</span></div></div><div className="role-right"><span className="role-loc">{t('roles.tags.anywhere')}</span><span className="role-arrow">→</span></div></div>
            <div className="role-row"><div><div className="role-title">{t('roles.positions.community')}</div><div className="role-tags"><span className="role-tag">{t('roles.tags.fulltime')}</span><span className="role-tag">{t('roles.tags.remote')}</span></div></div><div className="role-right"><span className="role-loc">{t('roles.tags.anywhere')}</span><span className="role-arrow">→</span></div></div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div className="tag">{t('cta.tag')}</div>
          <h2>{t('cta.h2.line1')} <em>{t('cta.h2.em')}</em></h2>
          <p>{t('cta.p')}</p>
          <a href="mailto:team@aura.app" className="cta-btn">{t('cta.btn')}</a>
        </div>
      </section>
    </>
  )
}
