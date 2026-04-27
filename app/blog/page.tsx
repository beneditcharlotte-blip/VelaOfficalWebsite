import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Vela',
  description: 'Stories from the cosmos. Astrology, introspection, and the art of paying attention.',
}

export default function Blog() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <div className="page-hero-left">
              <div className="tag">The Vela journal</div>
              <h1>Stories from <em>the cosmos</em></h1>
              <p>Astrology, introspection, and the art of paying attention. Written by the Vela team and the practitioners we admire.</p>
              <div className="blog-cats">
                <button className="cat-btn active">All</button>
                <button className="cat-btn">Astrology</button>
                <button className="cat-btn">Journalling</button>
                <button className="cat-btn">Moon phases</button>
                <button className="cat-btn">Relationships</button>
                <button className="cat-btn">Seasons</button>
              </div>
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
              <div className="tag">Astrology</div>
              <h2>Saturn returns and the <em>art of letting go</em></h2>
              <p>Between ages 27 and 30, Saturn completes its first full orbit since your birth. It brings reckoning — and with it, an invitation to build a life that is truly yours. Here's how to navigate the pressure without losing yourself.</p>
              <div className="feat-meta">
                <div className="feat-av">R</div>
                <div>
                  <div className="feat-author">Rania El-Amin</div>
                  <div className="feat-date">April 14, 2026 · 9 min read</div>
                </div>
                <div className="feat-read">Read</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="posts">
        <div className="container">
          <div className="posts-grid">
            <div className="post-card">
              <div className="post-img pi-2">
                <div className="post-img-sym">&#x263D;&#xFE0E;</div>
                <div className="post-cat">Moon phases</div>
              </div>
              <div className="post-body">
                <h3>What the new moon is really asking of you</h3>
                <p>New moons are not about grand gestures. They're about the quietest possible seed — the intention so fragile you can barely say it aloud.</p>
                <div className="post-foot">
                  <span className="post-by">Sofia Andreou</span>
                  <span className="post-time">6 min</span>
                </div>
              </div>
            </div>

            <div className="post-card">
              <div className="post-img pi-3">
                <div className="post-img-sym">&#x2642;&#xFE0E;</div>
                <div className="post-cat">Astrology</div>
              </div>
              <div className="post-body">
                <h3>Mars retrograde: why everything feels harder right now</h3>
                <p>When Mars moves backward through the sky, our forward momentum stalls. This isn't punishment. It's redirection.</p>
                <div className="post-foot">
                  <span className="post-by">Rania El-Amin</span>
                  <span className="post-time">7 min</span>
                </div>
              </div>
            </div>

            <div className="post-card">
              <div className="post-img pi-4">
                <div className="post-img-sym">&#x270D;&#xFE0E;</div>
                <div className="post-cat">Journalling</div>
              </div>
              <div className="post-body">
                <h3>Five prompts for when you don't know how you feel</h3>
                <p>Emotional ambiguity is normal. These five questions have a way of drawing out what you didn't know you needed to say.</p>
                <div className="post-foot">
                  <span className="post-by">Aisha Nwosu</span>
                  <span className="post-time">4 min</span>
                </div>
              </div>
            </div>

            <div className="post-card">
              <div className="post-img pi-5">
                <div className="post-img-sym">&#x2640;&#xFE0E;</div>
                <div className="post-cat">Relationships</div>
              </div>
              <div className="post-body">
                <h3>Venus in retrograde and what it means for love</h3>
                <p>Every 18 months, Venus retraces her steps. Relationships begun during this period often carry a peculiar intensity — and a particular lesson.</p>
                <div className="post-foot">
                  <span className="post-by">Rania El-Amin</span>
                  <span className="post-time">8 min</span>
                </div>
              </div>
            </div>

            <div className="post-card">
              <div className="post-img pi-6">
                <div className="post-img-sym">&#x2609;&#xFE0E;</div>
                <div className="post-cat">Seasons</div>
              </div>
              <div className="post-body">
                <h3>How to journal through the solstice</h3>
                <p>The solstice is a threshold. Light tips. Something ends. Something begins. Here's how we mark it in the journal.</p>
                <div className="post-foot">
                  <span className="post-by">Sofia Andreou</span>
                  <span className="post-time">5 min</span>
                </div>
              </div>
            </div>

            <div className="post-card">
              <div className="post-img pi-1">
                <div className="post-img-sym">&#x2643;&#xFE0E;</div>
                <div className="post-cat">Astrology</div>
              </div>
              <div className="post-body">
                <h3>Jupiter in Gemini: a year of ideas, noise, and choosing wisely</h3>
                <p>Abundance doesn't mean ease. Jupiter's expansive energy in Gemini brings opportunity — and the challenge of knowing which door to walk through.</p>
                <div className="post-foot">
                  <span className="post-by">Rania El-Amin</span>
                  <span className="post-time">10 min</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <div className="container">
          <div className="nl-inner">
            <div className="tag" style={{ justifyContent: 'center' }}>
              Stay close
            </div>
            <h2>
              Words from the sky, <em>weekly</em>
            </h2>
            <p>A quiet dispatch every Sunday morning — moon phase, a reflection prompt, and one piece of cosmic context for the week ahead. No noise, no ads.</p>
            <div className="nl-form">
              <input className="nl-input" type="email" placeholder="your@email.com" />
              <button className="nl-btn">Subscribe</button>
            </div>
            <div className="nl-note">Sent every Sunday. Unsubscribe any time.</div>
          </div>
        </div>
      </section>
    </>
  )
}
