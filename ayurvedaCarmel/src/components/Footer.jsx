const FOOTER_FONTS = `@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@200;300;400;500&display=swap');`;

const FOOTER_CSS = `
.ft2 * { box-sizing: border-box; margin: 0; padding: 0; }
.ft2 {
  font-family: 'Jost', sans-serif;
  background: #1e1e0a;
  color: #E7EFC7;
  width: 100%;
}

/* MARQUEE */
.ft2-marquee-wrap {
  border-top: 1px solid rgba(138,120,78,0.35);
  border-bottom: 1px solid rgba(138,120,78,0.15);
  overflow: hidden;
  padding: 6px 0;
  background: rgba(138,120,78,0.06);
}
.ft2-marquee {
  display: flex;
  white-space: nowrap;
  animation: ft2-scroll 22s linear infinite;
}
.ft2-marquee-inner { display: flex; flex-shrink: 0; }
.ft2-tag {
  font-family: 'Jost', sans-serif;
  font-size: 9px;
  font-weight: 300;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(231,239,199,0.4);
  padding: 0 22px;
}
.ft2-tag-dot { color: #8A784E; padding: 0 3px; }
@keyframes ft2-scroll { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }

/* HERO */
.ft2-hero {
  padding: 28px 40px 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  border-bottom: 1px solid rgba(138,120,78,0.12);
}
.ft2-wordmark {
  font-family: 'Cormorant Garamond', serif;
  font-size: 36px;
  font-weight: 300;
  line-height: 1;
  color: #E7EFC7;
  letter-spacing: -0.01em;
}
.ft2-wordmark em { font-style: italic; color: #8A784E; }
.ft2-tagline {
  font-size: 8.5px;
  font-weight: 300;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: rgba(174,200,164,0.55);
  margin-top: 4px;
}
.ft2-hero-right {
  display: flex;
  align-items: center;
  gap: 28px;
}
.ft2-stats-row { display: flex; gap: 22px; }
.ft2-stat2 { text-align: right; }
.ft2-stat2-num {
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px;
  font-weight: 300;
  color: #AEC8A4;
  line-height: 1;
}
.ft2-stat2-lbl {
  font-size: 8px;
  font-weight: 300;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(138,120,78,0.65);
  margin-top: 2px;
}
.ft2-cta-main {
  display: inline-block;
  padding: 9px 22px;
  border: 1px solid rgba(138,120,78,0.5);
  font-family: 'Jost', sans-serif;
  font-size: 8.5px;
  font-weight: 400;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #E7EFC7;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.3s, border-color 0.3s;
  background: transparent;
  white-space: nowrap;
}
.ft2-cta-main:hover {
  background: rgba(138,120,78,0.18);
  border-color: rgba(138,120,78,0.9);
}

/* 3-COL BODY */
.ft2-body {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr 0.9fr;
  padding: 0 40px;
  border-bottom: 1px solid rgba(138,120,78,0.12);
}
.ft2-col {
  padding: 20px 30px 20px 0;
  border-right: 1px solid rgba(138,120,78,0.1);
}
.ft2-col:nth-child(2) { padding-left: 30px; padding-right: 30px; }
.ft2-col:last-child { border-right: none; padding-left: 30px; padding-right: 0; }
.ft2-col-label {
  font-size: 8.5px;
  font-weight: 400;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #8A784E;
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.ft2-col-label::after {
  content: '';
  flex: 1;
  height: 1px;
  background: rgba(138,120,78,0.2);
}

/* CONTACT */
.ft2-contact-list { display: flex; flex-direction: column; gap: 8px; }
.ft2-contact-item { display: flex; flex-direction: column; gap: 1px; }
.ft2-contact-type {
  font-size: 8px;
  font-weight: 400;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(138,120,78,0.65);
}
.ft2-contact-val {
  font-family: 'Cormorant Garamond', serif;
  font-size: 13.5px;
  font-weight: 300;
  color: rgba(231,239,199,0.65);
  letter-spacing: 0.02em;
}
.ft2-social-row { display: flex; gap: 5px; margin-top: 14px; }
.ft2-soc2 {
  width: 26px; height: 26px;
  border: 1px solid rgba(138,120,78,0.25);
  display: flex; align-items: center; justify-content: center;
  font-size: 11px;
  cursor: pointer;
  text-decoration: none;
  transition: border-color 0.2s, background 0.2s;
}
.ft2-soc2:hover { border-color: rgba(138,120,78,0.7); background: rgba(138,120,78,0.1); }

/* NAV */
.ft2-nav-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; }
.ft2-nav-item {
  display: block;
  font-family: 'Cormorant Garamond', serif;
  font-size: 13.5px;
  font-weight: 300;
  font-style: italic;
  color: rgba(231,239,199,0.42);
  text-decoration: none;
  padding: 3.5px 0;
  letter-spacing: 0.02em;
  border-bottom: 1px solid transparent;
  transition: color 0.2s, border-color 0.2s;
}
.ft2-nav-item:hover { color: #E7EFC7; border-bottom-color: rgba(138,120,78,0.3); }

/* HOURS */
.ft2-hours-list { display: flex; flex-direction: column; }
.ft2-hrow2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5.5px 0;
  border-bottom: 1px solid rgba(138,120,78,0.08);
}
.ft2-hrow2:last-child { border-bottom: none; }
.ft2-day2 {
  font-size: 10px;
  font-weight: 300;
  color: rgba(231,239,199,0.38);
  letter-spacing: 0.04em;
}
.ft2-time2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 12.5px;
  font-weight: 300;
  color: #AEC8A4;
  letter-spacing: 0.02em;
}
.ft2-live-dot {
  display: inline-block;
  width: 4px; height: 4px;
  border-radius: 50%;
  background: #AEC8A4;
  margin-right: 5px;
  vertical-align: middle;
  animation: ft2-pulse 2s ease-in-out infinite;
}
@keyframes ft2-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.3;transform:scale(0.7)} }

/* RESPONSIVE */
@media (max-width: 768px) {
  .ft2-hero { flex-direction: column; align-items: flex-start; padding: 20px 20px 16px; }
  .ft2-hero-right { flex-direction: column; align-items: flex-start; gap: 14px; }
  .ft2-body { grid-template-columns: 1fr; padding: 0 20px; }
  .ft2-col { border-right: none; border-bottom: 1px solid rgba(138,120,78,0.1); padding: 16px 0; }
  .ft2-col:nth-child(2), .ft2-col:last-child { padding-left: 0; }
  .ft2-img-row { grid-template-columns: repeat(3,1fr); padding: 0 20px; }
  .ft2-img-cell:nth-child(n+4) { display: none; }
  .ft2-bottom { padding: 8px 20px; }
}
`;

const marqueeItems = [
  "Kalari Nadi Therapy", "Drug-Free Healing", "Kerala Heritage",
  "18+ Years Experience", "Marma Therapy", "No Surgery Needed",
  "6000+ Healed", "Thiruvananthapuram",
];

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Philosophy", path: "/philosophy" },
  { label: "Treatment", path: "/treatment" },
  { label: "Why Us", path: "/whyus" },
  { label: "Contact", path: "/contact" },
];

const treatLinks = [
  { label: "Chronic Pain", path: "/treatment" },
  { label: "Arthritis", path: "/treatment" },
  { label: "Neurology", path: "/treatment" },
  { label: "Women's Care", path: "/treatment" },
  { label: "No-Surgery", path: "/treatment" },
  { label: "Vitality", path: "/treatment" },
];

const hours = [
  { day: "Mon – Fri", time: "08:00 AM – 01:00 PM", live: true },
  { day: "Mon – Fri", time: "03:30 PM – 07:00 PM", live: false },
  { day: "Sat – Sun", time: "09:00 AM – 12:00 PM", live: false },
  { day: "Sat – Sun", time: "04:30 PM – 07:00 PM", live: false },
];

const stats = [
  { num: "18+", lbl: "Years" },
  { num: "6K+", lbl: "Healed" },
  { num: "0",   lbl: "Medicines" },
];

const socials = [
  { label: "Facebook",  icon: "📘" },
  { label: "Instagram", icon: "📸" },
  { label: "YouTube",   icon: "▶" },
  { label: "WhatsApp",  icon: "💬" },
];

export default function Footer() {
  const marqueeContent = marqueeItems.flatMap((item, i) => [
    <span key={`item-${i}`} className="ft2-tag">{item}</span>,
    <span key={`dot-${i}`} className="ft2-tag-dot">✦</span>,
  ]);

  return (
    <>
      <style>{FOOTER_FONTS + FOOTER_CSS}</style>
      <footer className="ft2">

        {/* MARQUEE */}
        <div className="ft2-marquee-wrap">
          <div className="ft2-marquee">
            <div className="ft2-marquee-inner">{marqueeContent}</div>
            <div className="ft2-marquee-inner" aria-hidden="true">{marqueeContent}</div>
          </div>
        </div>

        {/* HERO */}
        <div className="ft2-hero">
          <div>
            <div className="ft2-wordmark">Ever <em>Ayur</em> Life</div>
            <div className="ft2-tagline">Kalari · Nadi · Marma · Ayurveda</div>
          </div>
          <div className="ft2-hero-right">
            <div className="ft2-stats-row">
              {stats.map(s => (
                <div className="ft2-stat2" key={s.lbl}>
                  <div className="ft2-stat2-num">{s.num}</div>
                  <div className="ft2-stat2-lbl">{s.lbl}</div>
                </div>
              ))}
            </div>
            <a href="/contact" className="ft2-cta-main">Book Free Nadi Assessment</a>
          </div>
        </div>

        {/* 3-COL BODY */}
        <div className="ft2-body">

          {/* Contact */}
          <div className="ft2-col">
            <div className="ft2-col-label">Reach Us</div>
            <div className="ft2-contact-list">
              {[
                { type: "Email",    val: "info@everayurlife.com" },
                { type: "Phone",    val: "+91 98765 43210" },
                { type: "Alternate",val: "+91 91234 56789" },
                { type: "Location", val: "Thiruvananthapuram, Kerala" },
              ].map(c => (
                <div className="ft2-contact-item" key={c.type}>
                  <div className="ft2-contact-type">{c.type}</div>
                  <div className="ft2-contact-val">{c.val}</div>
                </div>
              ))}
            </div>
            <div className="ft2-social-row">
              {socials.map(s => (
                <a key={s.label} href="#" className="ft2-soc2" aria-label={s.label}>{s.icon}</a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="ft2-col">
            <div className="ft2-col-label">Explore</div>
            <div className="ft2-nav-grid">
              <div>
                {navLinks.map(l => (
                  <a key={l.path} href={l.path} className="ft2-nav-item">{l.label}</a>
                ))}
              </div>
              <div>
                {treatLinks.map(l => (
                  <a key={l.label} href={l.path} className="ft2-nav-item">{l.label}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="ft2-col">
            <div className="ft2-col-label">Hours</div>
            <div className="ft2-hours-list">
              {hours.map((h, i) => (
                <div className="ft2-hrow2" key={i}>
                  <span className="ft2-day2">{h.day}</span>
                  <span className="ft2-time2">
                    {h.live && <span className="ft2-live-dot" />}
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </footer>
    </>
  );
}
