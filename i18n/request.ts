import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale
  const locale: 'zh' | 'en' = routing.locales.includes(requested as 'zh' | 'en')
    ? (requested as 'zh' | 'en')
    : routing.defaultLocale

  const [nav, footer, common, home, about, blog, careers, help, press, privacy, terms] = await Promise.all([
    import(`../messages/${locale}/nav.json`).then((m) => m.default),
    import(`../messages/${locale}/footer.json`).then((m) => m.default),
    import(`../messages/${locale}/common.json`).then((m) => m.default).catch(() => ({})),
    import(`../messages/${locale}/home.json`).then((m) => m.default).catch(() => ({})),
    import(`../messages/${locale}/about.json`).then((m) => m.default).catch(() => ({})),
    import(`../messages/${locale}/blog.json`).then((m) => m.default).catch(() => ({})),
    import(`../messages/${locale}/careers.json`).then((m) => m.default).catch(() => ({})),
    import(`../messages/${locale}/help.json`).then((m) => m.default).catch(() => ({})),
    import(`../messages/${locale}/press.json`).then((m) => m.default).catch(() => ({})),
    import(`../messages/${locale}/privacy.json`).then((m) => m.default).catch(() => ({})),
    import(`../messages/${locale}/terms.json`).then((m) => m.default).catch(() => ({})),
  ])

  return {
    locale,
    messages: {
      nav,
      footer,
      common,
      home,
      about,
      blog,
      careers,
      help,
      press,
      privacy,
      terms,
    },
  }
})
