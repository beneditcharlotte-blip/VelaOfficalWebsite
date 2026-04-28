import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Vela',
  description: 'How Vela collects, uses, and protects your personal information.',
}

export default function Privacy() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <div className="tag">Privacy Policy</div>
            <h1>Your data, <em>your terms</em></h1>
            <p>We believe privacy is a right, not a feature. This policy explains exactly what we collect, why, and how you stay in control.</p>
            <div className="legal-meta">Last updated: April 2026 · Effective: April 1, 2026</div>
          </div>
        </div>
      </section>

      <section className="legal-body section">
        <div className="container">
          <div className="legal-inner">
            <div className="legal-nav">
              <div className="ln-label">Contents</div>
              <a href="#collect">What we collect</a>
              <a href="#use">How we use it</a>
              <a href="#store">How we store it</a>
              <a href="#share">Who we share with</a>
              <a href="#rights">Your rights</a>
              <a href="#cookies">Cookies</a>
              <a href="#children">Children</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="legal-content">
              <div className="lc-section" id="collect">
                <h2>What we collect</h2>
                <p>We collect only what we need to provide Vela's services. This includes:</p>
                <ul>
                  <li><strong>Account information</strong> — your email address and, optionally, your name.</li>
                  <li><strong>Birth data</strong> — date, time, and place of birth, used solely to generate your birth chart and personalise readings.</li>
                  <li><strong>Journal entries</strong> — the text you write in the app. These are encrypted at rest and never used for advertising.</li>
                  <li><strong>Usage data</strong> — anonymised information about how you use the app (screens visited, features used) to help us improve the product.</li>
                  <li><strong>Device information</strong> — device type, OS version, and crash logs for technical support.</li>
                </ul>
                <p>We do not collect your location beyond what you provide for birth chart purposes. We do not access your contacts, camera, or microphone.</p>
              </div>

              <div className="lc-section" id="use">
                <h2>How we use it</h2>
                <p>Your data is used to:</p>
                <ul>
                  <li>Generate your personalised daily star readings and birth chart analysis.</li>
                  <li>Power the AI journal companion — your entries are processed to provide contextual responses.</li>
                  <li>Send you optional notifications (daily reading reminders, moon phase alerts).</li>
                  <li>Improve Vela's features through anonymised, aggregated usage analysis.</li>
                  <li>Provide customer support when you contact us.</li>
                </ul>
                <p>We do not use your data for advertising, and we do not sell it to third parties. Ever.</p>
              </div>

              <div className="lc-section" id="store">
                <h2>How we store it</h2>
                <p>All data is stored on servers located in the United States and the European Union. Journal entries are encrypted at rest using AES-256. Data in transit is protected by TLS 1.3.</p>
                <p>We retain your data for as long as your account is active. If you delete your account, your data is permanently removed within 90 days. Anonymised, aggregated usage statistics may be retained indefinitely.</p>
                <p>Vela is SOC 2 Type II certified and undergoes annual third-party security audits.</p>
              </div>

              <div className="lc-section" id="share">
                <h2>Who we share with</h2>
                <p>We share data with a small number of trusted service providers who help us operate Vela:</p>
                <ul>
                  <li><strong>Cloud infrastructure</strong> — AWS and Google Cloud for hosting and storage.</li>
                  <li><strong>AI processing</strong> — anonymised journal context is processed by our AI provider under strict data processing agreements.</li>
                  <li><strong>Analytics</strong> — anonymised usage data via Mixpanel.</li>
                  <li><strong>Payment processing</strong> — handled entirely by Apple. We never see your payment details.</li>
                </ul>
                <p>All third-party providers are bound by data processing agreements and are prohibited from using your data for their own purposes.</p>
                <p>We may disclose data if required by law, but we will notify you unless legally prohibited from doing so.</p>
              </div>

              <div className="lc-section" id="rights">
                <h2>Your rights</h2>
                <p>Depending on your location, you have the right to:</p>
                <ul>
                  <li><strong>Access</strong> — request a copy of all data we hold about you.</li>
                  <li><strong>Correction</strong> — update inaccurate or incomplete data.</li>
                  <li><strong>Deletion</strong> — request permanent deletion of your account and all associated data.</li>
                  <li><strong>Portability</strong> — receive your data in a machine-readable format.</li>
                  <li><strong>Objection</strong> — opt out of any processing based on legitimate interests.</li>
                </ul>
                <p>To exercise any of these rights, email us at <a href="mailto:privacy@vela.app">privacy@vela.app</a>. We respond within 30 days.</p>
              </div>

              <div className="lc-section" id="cookies">
                <h2>Cookies</h2>
                <p>The Vela app does not use advertising cookies. Our website uses strictly necessary cookies for authentication and session management, and optional analytics cookies (which you can decline).</p>
              </div>

              <div className="lc-section" id="children">
                <h2>Children</h2>
                <p>Vela is not directed at children under 13. We do not knowingly collect data from anyone under 13. If you believe a child has provided us with personal information, contact us at <a href="mailto:privacy@vela.app">privacy@vela.app</a> and we will delete it promptly.</p>
              </div>

              <div className="lc-section" id="contact">
                <h2>Contact</h2>
                <p>For privacy questions, data requests, or concerns:</p>
                <ul>
                  <li>Email: <a href="mailto:privacy@vela.app">privacy@vela.app</a></li>
                  <li>Post: Vela Inc., 340 Pine Street, Suite 800, San Francisco, CA 94104</li>
                </ul>
                <p>For EU residents, our Data Protection Officer can be reached at <a href="mailto:dpo@vela.app">dpo@vela.app</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
