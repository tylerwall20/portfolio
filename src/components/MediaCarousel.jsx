import { useState, useEffect, useRef } from 'react'

const media = [
  // Add your media files to public/MOTARCaseStudy/ and list them here
  // Examples:
  // { type: 'image', src: '/MOTARCaseStudy/iitsec-demo.jpg', caption: 'IITSEC 2024 — Live Demo' },
  // { type: 'video', src: '/MOTARCaseStudy/overview.mp4', caption: 'Platform Overview' },

  // Placeholders — replace with real assets
  { type: 'image', src: '/MOTARCaseStudy/SDKDeviceSync.jpg', caption: 'Device Authentication with the SDK' },
  { type: 'image', src: '/MOTARCaseStudy/MOTARHub.png', caption: 'MOTAR 3D Asset Hub' },
  { type: 'image', src: '/MOTARCaseStudy/3DModelHolodeck.jpg', caption: 'Asset Streaming of 3D Model and Video' },
  { type: 'image', src: '/MOTARCaseStudy/MultiplayerAssetStreaming.png', caption: 'Multiplayer Asset Streaming' },
  { type: 'embed', src: 'https://player.vimeo.com/video/1047575031?h=390a5c1dd2', caption: 'IITSEC 2024 Suspicious Package Defusal' },
]

export default function MediaCarousel() {
  const [current, setCurrent] = useState(0)
  const [isLightbox, setIsLightbox] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)
  const total = media.length

  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'Escape') setIsLightbox(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const item = media[current]

  return (
    <>
      <style>{`
        .carousel-wrap {
          position: relative;
          margin-top: 1.5rem;
          user-select: none;
        }

        /* MAIN VIEWER */
        .carousel-main {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 4px;
          overflow: hidden;
          cursor: pointer;
        }

        .carousel-main img,
        .carousel-main video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* PLACEHOLDER */
        .carousel-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          background: repeating-linear-gradient(
            45deg,
            var(--surface),
            var(--surface) 10px,
            var(--bg2) 10px,
            var(--bg2) 20px
          );
        }

        .carousel-placeholder-label {
          font-family: var(--mono);
          font-size: 0.75rem;
          color: var(--muted);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          background: var(--surface);
          padding: 0.5rem 1rem;
          border: 1px solid var(--border);
          border-radius: 2px;
        }

        .carousel-placeholder-icon {
          color: var(--border);
          font-size: 2rem;
        }

        /* CAPTION */
        .carousel-caption {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 0.75rem 1rem;
          background: linear-gradient(transparent, rgba(10,10,15,0.9));
          font-family: var(--mono);
          font-size: 0.7rem;
          color: var(--bold);
          letter-spacing: 0.05em;
        }

        /* ARROWS */
        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(10,10,15,0.7);
          border: 1px solid var(--border);
          color: var(--text);
          width: 36px;
          height: 36px;
          border-radius: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          z-index: 2;
          font-size: 1rem;
        }

        .carousel-arrow:hover {
          border-color: var(--accent);
          color: var(--accent);
          background: rgba(10,10,15,0.95);
        }

        .carousel-arrow.left { left: 0.75rem; }
        .carousel-arrow.right { right: 0.75rem; }

        /* COUNTER */
        .carousel-counter {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          font-family: var(--mono);
          font-size: 0.65rem;
          color: var(--muted);
          background: rgba(10,10,15,0.7);
          padding: 0.25rem 0.6rem;
          border-radius: 2px;
          letter-spacing: 0.1em;
          z-index: 2;
        }

        /* EXPAND ICON */
        .carousel-expand {
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          font-family: var(--mono);
          font-size: 0.6rem;
          color: var(--muted);
          background: rgba(10,10,15,0.7);
          padding: 0.25rem 0.6rem;
          border-radius: 2px;
          letter-spacing: 0.1em;
          z-index: 2;
          text-transform: uppercase;
          cursor: pointer;
          transition: color 0.2s;
        }

        .carousel-expand:hover { color: var(--accent); }

        /* THUMBNAILS */
        .carousel-thumbs {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.75rem;
          overflow-x: auto;
          padding-bottom: 4px;
          scrollbar-width: none;
        }

        .carousel-thumbs::-webkit-scrollbar { display: none; }

        .carousel-thumb {
          flex-shrink: 0;
          width: 80px;
          height: 52px;
          border-radius: 2px;
          border: 1px solid var(--border);
          overflow: hidden;
          cursor: pointer;
          transition: border-color 0.2s, opacity 0.2s;
          opacity: 0.5;
          background: var(--surface);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .carousel-thumb.active {
          border-color: var(--accent);
          opacity: 1;
        }

        .carousel-thumb:hover { opacity: 0.8; }

        .carousel-thumb img,
        .carousel-thumb video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .carousel-thumb-placeholder {
          font-family: var(--mono);
          font-size: 0.5rem;
          color: var(--muted);
          letter-spacing: 0.05em;
          text-align: center;
          padding: 0.25rem;
          line-height: 1.3;
        }

        /* LIGHTBOX */
        .lightbox-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.92);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .lightbox-inner {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
        }

        .lightbox-inner img,
        .lightbox-inner video {
          max-width: 90vw;
          max-height: 85vh;
          object-fit: contain;
          border-radius: 4px;
        }

        .lightbox-close {
          position: absolute;
          top: -2rem;
          right: 0;
          font-family: var(--mono);
          font-size: 0.7rem;
          color: var(--muted);
          cursor: pointer;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: color 0.2s;
        }

        .lightbox-close:hover { color: var(--accent); }

        .lightbox-caption {
          font-family: var(--mono);
          font-size: 1rem;
          color: var(--bold);
          text-align: center;
          margin-top: 0.75rem;
          letter-spacing: 0.05em;
        }

        .lightbox-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(10,10,15,0.7);
          border: 1px solid var(--border);
          color: var(--text);
          width: 40px;
          height: 40px;
          border-radius: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          font-size: 1.2rem;
        }

        .lightbox-arrow:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        .lightbox-arrow.left { left: -3.5rem; }
        .lightbox-arrow.right { right: -3.5rem; }

        .lightbox-x {
          position: absolute;
          top: 0rem;
          right: -2rem;
          background: transparent;
          border: 1px solid var(--border);
          color: var(--muted);
          width: 28px;
          height: 28px;
          border-radius: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 0.75rem;
          transition: all 0.2s;
          line-height: 1;
        }

        .lightbox-x:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        @media (max-width: 1000px) {
          .lightbox-arrow.left { left: 0.5rem; }
          .lightbox-arrow.right { right: 0.5rem; }
          .lightbox-x { top: 0.5rem; right: 0.5rem; }
          .lightbox-close { display: none; }
        }
      `}</style>

      <div className="carousel-wrap">

        {/* MAIN VIEWER */}
        <div className="carousel-main" onClick={() => item.type !== 'placeholder' && setIsLightbox(true)}>

          {item.type === 'image' && (
            <img src={item.src} alt={item.caption} />
          )}

          {item.type === 'video' && (
            <video
              ref={videoRef}
              src={item.src}
              controls
              playsInline
              onClick={(e) => e.stopPropagation()}
            />
          )}

          {item.type === 'embed' && (
            <iframe
              src={item.src}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', inset: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
          )}

          {item.type !== 'embed' && (
            <div className="carousel-caption">{item.caption}</div>
          )}

          {item.type === 'placeholder' && (
            <div className="carousel-placeholder">
              <div className="carousel-placeholder-icon">⬚</div>
              <div className="carousel-placeholder-label">{item.label} — Coming Soon</div>
            </div>
          )}

          <div className="carousel-counter">{current + 1} / {total}</div>
          {item.type === 'image' && (
            <div className="carousel-expand">Expand</div>
          )}

          <button className="carousel-arrow left" onClick={(e) => { e.stopPropagation(); prev(); }}>‹</button>
          <button className="carousel-arrow right" onClick={(e) => { e.stopPropagation(); next(); }}>›</button>
        </div>

        {item.type === 'embed' && (
          <div style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.7rem',
            color: 'var(--bold)',
            letterSpacing: '0.05em',
            marginTop: '0.5rem',
            paddingLeft: '0.25rem'
          }}>
            {item.caption}
          </div>
        )}

        {/* THUMBNAILS */}
        <div className="carousel-thumbs">
          {media.map((m, i) => (
            <div
              key={i}
              className={`carousel-thumb ${i === current ? 'active' : ''}`}
              onClick={() => setCurrent(i)}
            >
              {m.type === 'image' && <img src={m.src} alt={m.caption} />}
              {m.type === 'video' && <video src={m.src} muted />}
              {m.type === 'placeholder' && (
                <div className="carousel-thumb-placeholder">{m.label}</div>
              )}
              {m.type === 'embed' && (
                <div className="carousel-thumb-placeholder">▶ Video</div>
              )}
            </div>
          ))}

          
        </div>
      </div>

      {/* LIGHTBOX */}
      {isLightbox && item.type === 'image' && (
        <div className="lightbox-overlay" onClick={() => setIsLightbox(false)}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-x" onClick={() => setIsLightbox(false)}>✕</button>
            <img src={item.src} alt={item.caption} />
            <div className="lightbox-caption">{item.caption}</div>
            <button className="lightbox-arrow left" onClick={prev}>‹</button>
            <button className="lightbox-arrow right" onClick={next}>›</button>
          </div>
        </div>
      )}
    </>
  )
}
