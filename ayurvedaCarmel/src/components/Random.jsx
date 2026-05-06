/**
 * HealingIcons.jsx — Ever Ayur Life (Animated Version)
 */

import { useEffect, useRef, useState } from 'react';

const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Jost:wght@300;400;500&display=swap');`;

const CSS = `
.eal-ic * { box-sizing: border-box; margin: 0; padding: 0; }

/* ── FULL ROW ─────────────────────────────── */
.eal-ic-row {
  display: flex;
  align-items: stretch;
  justify-content: center;
  background: #ffffff;
  padding: 28px 16px 0;
  font-family: 'Jost', sans-serif;
  flex-wrap: wrap;
}

/* ── SINGLE CARD ──────────────────────────── */
.eal-ic-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 0 20px 20px;
  position: relative;
  flex: 1;
  min-width: 110px;
  max-width: 160px;
  cursor: pointer;

  /* animation base */
  opacity: 0;
  transform: translateY(20px);
}

/* hover */
.eal-ic-card:hover { transform: translateY(-5px); }

/* divider */
.eal-ic-card + .eal-ic-card::before {
  content: '';
  position: absolute;
  left: 0; top: 8px; bottom: 16px;
  width: 1px;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(26,62,22,0.22) 35%,
    rgba(26,62,22,0.22) 65%,
    transparent
  );
}

/* ── ENTRY ANIMATION ───────────────────────── */
.eal-ic-card.from-left { transform: translateX(-60px); }
.eal-ic-card.from-right { transform: translateX(60px); }

.eal-ic-card.show {
  opacity: 1;
  transform: translateX(0) translateY(0);
  transition:
    transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.6s ease;
}

/* ── IMAGE ───────────────────────── */
.eal-ic-img-wrap {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid rgba(26,62,22,0.3);
  overflow: hidden;
  flex-shrink: 0;
  transition: border-color 0.28s, transform 0.28s;
  position: relative;
}
.eal-ic-img-wrap.no-circle {
  border: none;
  border-radius: 0;
}
.eal-ic-card:hover .eal-ic-img-wrap {
  border-color: rgba(26,62,22,0.65);
  transform: scale(1.04);
}
.eal-ic-card:hover .eal-ic-img-wrap.no-circle {
  transform: scale(1.06);
}
.eal-ic-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.82) brightness(0.88);
  transition: filter 0.3s;
}
.eal-ic-card:hover .eal-ic-img-wrap img {
  filter: saturate(1) brightness(0.95);
}
.eal-ic-img-wrap::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(26,62,22,0.12);
}

/* ── LABEL ───────────────────────── */
.eal-ic-label {
  font-family: 'Cinzel', serif;
  font-size: 9.5px;
  font-weight: 600;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #1a3e16;
  text-align: center;
  line-height: 1.6;
}

/* ── STRIP ───────────────────────── */
.eal-ic-strip {
  width: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0 15px;
  border-top: 1px solid rgba(26,62,22,0.1);
  margin-top: 6px;
  font-family: 'Cinzel', serif;
  font-size: 10px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #8A784E;
}
.eal-ic-strip-dot {
  width: 5px; height: 5px;
  border-radius: 50%;
  background: #8A784E;
  margin: 0 14px;
}

/* ── MOBILE ───────────────────────── */
@media (max-width: 600px) {
  .eal-ic-card { min-width: 90px; padding: 0 10px 16px; }
  .eal-ic-img-wrap { width: 64px; height: 64px; }
  .eal-ic-label { font-size: 8px; }
}
`;

/* SVG */
const LeafSVG = ({ flip = false }) => (
  <svg width="24" height="14" viewBox="0 0 24 14"
    style={{ transform: flip ? 'scaleX(-1)' : 'none', margin: '0 7px' }}>
    <path d="M2 13 C4 6 11 1 22 2 C11 4 6 8 2 13Z" fill="#8A784E"/>
  </svg>
);

/* DATA */
const CARDS = [
  { id: 'natural', src: 'https://hiddenmantra.com/wp-content/uploads/2024/08/Indias-Gift-to-the-World-Yoga-and-Ayurveda-1024x682-1.webp', lines: ['Natural','Healing'], circle: true },
  { id: 'holistic', src: 'https://chellaramwellness.org/wp-content/uploads/2024/02/Ayurveda2.jpg', lines: ['Holistic','Wellness'] },
  { id: 'marma', src: 'https://ayuskamarishikesh.com/wp-content/uploads/2025/07/theraphy-marma-300x300.jpg', lines: ['Marma','Therapy'] },
  { id: 'kalari', src: 'https://www.keralatourism.org/_next/image/?url=http://127.0.0.1/ktadmin/img/pages/mobile/talapotichil-1729349693_4203ff365614268d05d4.webp&w=3840&q=75', lines: ['Kalari','Tradition'] },
  { id: 'pain', src: 'https://www.lifelineherbal.com.au/webroot/images/listings/99ea4162-a7f0-e900-a84d-a97fce920714_1200_480.jpg', lines: ['Pain Relief','Without Surgery'], circle: true }
];

/* CARD */
function IconCard({ src, lines, circle, index }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setShow(true);
    }, { threshold: 0.3 });

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const dir = index % 2 === 0 ? 'from-left' : 'from-right';

  return (
    <div
      ref={ref}
      className={`eal-ic-card ${dir} ${show ? 'show' : ''}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className={`eal-ic-img-wrap${circle ? '' : ' no-circle'}`}>
        <img src={src} alt="" />
      </div>

      <div className="eal-ic-label">
        {lines.map((l, i) => <span key={i}>{l}</span>)}
      </div>
    </div>
  );
}

/* MAIN */
export default function HealingIconsRow() {
  return (
    <>
      <style>{FONTS + CSS}</style>

      <div>
        <div className="eal-ic-row">
          {CARDS.map((c, i) => (
            <IconCard key={c.id} {...c} index={i} />
          ))}
        </div>

        <div className="eal-ic-strip">
          <LeafSVG />
          Healing
          <span className="eal-ic-strip-dot" />
          Balance
          <span className="eal-ic-strip-dot" />
          Longevity
          <LeafSVG flip />
        </div>
      </div>
    </>
  );
}