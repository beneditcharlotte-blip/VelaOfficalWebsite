import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — Vela',
  description: 'The terms and conditions governing your use of Vela.',
}

export default function Terms() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <div className="tag">Terms of Service</div>
            <h1>Simple terms, <em>honestly written</em></h1>
            <p>These are the rules for using Vela. We've written them in plain language because we think you deserve to understand what you're agreeing to.</p>
            <div className="legal-meta">Last updated: April 2026 · Effective: April 1, 2026</div>
          </div>
        </div>
      </section>

      <section className="legal-body section">
        <div className="container">
          <div className="legal-inner">
            <nav className="legal-nav">
              <div className="ln-label">Contents</div>
              <a href="#agreement">The agreement</a>
              <a href="#account">Your account</a>
              <a href="#content">Your content</a>
              <a href="#use">Acceptable use</a>
              <a href="#subscription">Subscriptions</a>
              <a href="#ip">Intellectual property</a>
              <a href="#disclaimer">Disclaimer</a>
              <a href="#termination">Termination</a>
              <a href="#contact">Contact</a>
            </nav>

            <div className="legal-content">
              <div className="lc-section" id="agreement">
                <h2>The agreement</h2>
                <p>By downloading or using Vela, you agree to these Terms of Service. If you don't agree, please don't use the app.</p>
                <p>These terms apply to all versions of Vela, including the iOS app and any web properties operated by Vela Inc. ("Vela", "we", "us").</p>
                <p>We may update these terms from time to time. We'll notify you of significant changes via email or in-app notification. Continued use after changes means you accept the updated terms.</p>
              </div>

              <div className="lc-section" id="account">
                <h2>Your account</h2>
                <p>You must be at least 13 years old to use Vela. By creating an account, you confirm that you meet this requirement.</p>
                <p>You're responsible for keeping your account credentials secure. Don't share your password. If you suspect unauthorised access, contact us immediately at <a href="mailto:support@vela.app">support@vela.app</a>.</p>
                <p>You may only create one account per person. Accounts are non-transferable.</p>
              </div>

              <div className="lc-section" id="content">
                <h2>Your content</h2>
                <p>You own everything you write in your journal. Vela does not claim ownership of your entries.</p>
                <p>By using Vela, you grant us a limited licence to process your journal content for the sole purpose of providing the AI companion service. This licence does not extend to sharing, selling, or publishing your content.</p>
                <p>You are responsible for the content you create. Don't use Vela to store or transmit anything illegal, harmful, or that violates others' rights.</p>
              </div>

              <div className="lc-section" id="use">
                <h2>Acceptable use</h2>
                <p>You agree not to:</p>
                <ul>
                  <li>Attempt to reverse-engineer, decompile, or extract source code from Vela.</li>
                  <li>Use automated tools to scrape, crawl, or extract data from Vela.</li>
                  <li>Attempt to gain unauthorised access to Vela's systems or other users' accounts.</li>
                  <li>Use Vela for any unlawful purpose or in violation of any applicable laws.</li>
                  <li>Impersonate any person or entity, or misrepresent your affiliation with any person or entity.</li>
                </ul>
                <p>We reserve the right to suspend or terminate accounts that violate these rules.</p>
              </div>

              <div className="lc-section" id="subscription">
                <h2>Subscriptions & billing</h2>
                <p>Vela offers a free tier and paid subscription plans (Seeker and Founder). Paid subscriptions are billed through the Apple App Store.</p>
                <p>Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current billing period. To cancel, go to your Apple ID subscription settings.</p>
                <p>We do not offer refunds directly — refund requests are handled by Apple via reportaproblem.apple.com.</p>
                <p>We reserve the right to change subscription pricing with reasonable notice. Price changes will not affect your current billing period.</p>
              </div>

              <div className="lc-section" id="ip">
                <h2>Intellectual property</h2>
                <p>Vela, its logo, design, and all content created by us (readings, UI, copy) are owned by Vela Inc. and protected by copyright and trademark law.</p>
                <p>You may not reproduce, distribute, or create derivative works from Vela's content without our written permission.</p>
              </div>

              <div className="lc-section" id="disclaimer">
                <h2>Disclaimer</h2>
                <p>Vela is provided for personal reflection and entertainment purposes. Astrological readings are not a substitute for professional advice — medical, psychological, financial, or legal.</p>
                <p>We make no guarantees about the accuracy of astrological interpretations. The stars are a language, not a certainty.</p>
                <p>Vela is provided "as is" without warranties of any kind. We are not liable for any indirect, incidental, or consequential damages arising from your use of the app.</p>
              </div>

              <div className="lc-section" id="termination">
                <h2>Termination</h2>
                <p>You may delete your account at any time from Settings → Account → Delete Account.</p>
                <p>We may suspend or terminate your account if you violate these terms, with or without notice depending on the severity of the violation.</p>
                <p>Upon termination, your right to use Vela ends immediately. Your data will be deleted in accordance with our Privacy Policy.</p>
              </div>

              <div className="lc-section" id="contact">
                <h2>Contact</h2>
                <p>Questions about these terms? We're happy to explain anything in plain language.</p>
                <ul>
                  <li>Email: <a href="mailto:legal@vela.app">legal@vela.app</a></li>
                  <li>Post: Vela Inc., 340 Pine Street, Suite 800, San Francisco, CA 94104</li>
                </ul>
                <p>These terms are governed by the laws of the State of California, United States.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
