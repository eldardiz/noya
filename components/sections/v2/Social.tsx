import { brand } from '@/lib/brand'

// V2 variant of SocialSection — identical markup, new photos.
const tiles = [
  { src: '/assets/v2/sections/social-1.jpg', likes: '12.4k ♥' },
  { src: '/assets/v2/sections/social-2.jpg', likes: '8.1k ♥' },
  { src: '/assets/v2/sections/social-3.jpg', likes: '5.7k ♥' },
  { src: '/assets/v2/sections/social-4.jpg', likes: '19.3k ♥' },
]

export default function SocialV2() {
  return (
    <section className="section bg-beige">
      <div className="noise" />
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="script">{brand.social.tiktok}</span>
            <h2 className="display brown" data-words-pullup style={{ marginTop: 4 }}>Folgt uns</h2>
          </div>
          <div style={{ textAlign: 'right', maxWidth: 240 }}>
            <div className="sec-num">— TikTok · Instagram</div>
            <p className="body-copy brown" style={{ fontSize: 12, marginTop: 8, opacity: .7 }}>
              Was heute auf dem Pass passiert, sehen Sie dort zuerst.
            </p>
          </div>
        </div>

        <div className="social-grid" data-card-stagger>
          {tiles.map((t, i) => (
            <a className="social-tile" key={i} href={brand.social.tiktokUrl} data-card>
              <img src={t.src} alt="NOYA auf TikTok" />
              <span className="likes">{t.likes}</span>
            </a>
          ))}
        </div>

        <div className="sec-head" style={{ marginTop: 40 }}>
          <a className="btn" href={brand.social.tiktokUrl}>TikTok öffnen ↗</a>
          <div className="meta gold">{brand.social.tiktok} · {brand.social.followers} Follower</div>
        </div>
      </div>
    </section>
  )
}
