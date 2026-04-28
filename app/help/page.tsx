import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Help Centre — Vela',
  description: 'Find answers to common questions about Vela, your star reading, birth chart, and AI journal.',
}

const faqs = [
  {
    category: 'Getting started',
    items: [
      {
        q: 'How do I set up my birth chart?',
        a: 'Open the app and go to Profile → Birth Chart. Enter your date, time, and place of birth. Vela uses this to personalise every reading and journal insight.',
      },
      {
        q: 'What if I don\'t know my exact birth time?',
        a: 'You can still use Vela without an exact birth time. We\'ll use a solar chart based on your birth date and location. Some house placements will be approximate, but your sun, moon, and planetary signs will be accurate.',
      },
      {
        q: 'Is Vela available on Android?',
        a: 'Vela is currently iOS only. Android is on our roadmap — join the waitlist in the app and we\'ll notify you the moment it launches.',
      },
    ],
  },
  {
    category: 'Star readings',
    items: [
      {
        q: 'When does my daily reading refresh?',
        a: 'Your reading refreshes at midnight in your local timezone. We recommend reading it in the morning as part of your daily ritual.',
      },
      {
        q: 'How personalised is my reading?',
        a: 'Every reading is generated from three sources: today\'s real-time planetary positions, your natal birth chart, and the emotional patterns you\'ve journalled over time. No two readings are the same.',
      },
      {
        q: 'What are the four dimensions — Fortune, Love, Career, Rest?',
        a: 'These are the four areas of daily life Vela tracks. Each is influenced by different planetary transits and your chart placements. Together they give you a complete picture of the day\'s energy.',
      },
    ],
  },
  {
    category: 'Journal & AI',
    items: [
      {
        q: 'Is my journal private?',
        a: 'Yes. Your journal entries are encrypted and never shared with third parties. We do not train our AI on your personal entries without explicit consent. Your words are yours.',
      },
      {
        q: 'How does the AI companion work?',
        a: 'Vela\'s AI reads your journal entry alongside your current planetary transits and birth chart. It reflects back patterns, themes, and astrological context — not generic advice, but something shaped by your specific sky.',
      },
      {
        q: 'Can I delete my journal entries?',
        a: 'Yes. Go to Journal → select any entry → tap the three-dot menu → Delete. Deleted entries are permanently removed within 30 days.',
      },
    ],
  },
  {
    category: 'Account & billing',
    items: [
      {
        q: 'How do I cancel my subscription?',
        a: 'Subscriptions are managed through the App Store. Go to Settings → Apple ID → Subscriptions → Vela → Cancel. Your access continues until the end of the current billing period.',
      },
      {
        q: 'Can I get a refund?',
        a: 'Refunds are handled by Apple. Visit reportaproblem.apple.com and select your Vela purchase. Apple typically processes refund requests within a few days.',
      },
      {
        q: 'What happens to my data if I delete the app?',
        a: 'Your account and data are retained for 90 days after deletion. To permanently delete your account and all associated data, go to Settings → Account → Delete Account before removing the app.',
      },
    ],
  },
]

export default function Help() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <div className="tag">Help Centre</div>
            <h1>How can we <em>help you?</em></h1>
            <p>Answers to the most common questions about Vela. Can't find what you're looking for? Reach us at support@vela.app — we respond within one business day.</p>
          </div>
        </div>
      </section>

      <section className="help-search-bar">
        <div className="container">
          <div className="hs-inner">
            <div className="hs-icon">&#x2315;&#xFE0E;</div>
            <input className="hs-input" type="text" placeholder="Search for an answer…" readOnly />
          </div>
        </div>
      </section>

      <section className="faq section">
        <div className="container">
          {faqs.map((group) => (
            <div className="faq-group" key={group.category}>
              <div className="faq-category">{group.category}</div>
              <div className="faq-list">
                {group.items.map((item) => (
                  <div className="faq-item" key={item.q}>
                    <div className="faq-q">{item.q}</div>
                    <div className="faq-a">{item.a}</div>
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
              <div className="tag">Still need help?</div>
              <h2>We're <em>here for you</em></h2>
              <p>Our support team is small, human, and genuinely cares. We don't use bots for support — every reply comes from a real person on the Vela team.</p>
            </div>
            <div className="hc-right">
              <div className="hc-card">
                <div className="hc-icon">&#x2709;&#xFE0E;</div>
                <h4>Email support</h4>
                <p>For account issues, billing questions, and anything else.</p>
                <a href="mailto:support@vela.app">support@vela.app</a>
              </div>
              <div className="hc-card">
                <div className="hc-icon">&#x2736;&#xFE0E;</div>
                <h4>Community</h4>
                <p>Connect with other Vela users, share readings, and ask questions.</p>
                <a href="#">Join the community →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
