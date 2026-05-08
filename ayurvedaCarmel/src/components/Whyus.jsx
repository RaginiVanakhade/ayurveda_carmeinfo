const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Nunito:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Playfair+Display:ital,wght@0,500;0,600;1,400;1,500&display=swap');`;

const CSS = `
  :root {
    --green:       #5a5a2a;
    --green-dark:  #3B3B1A;
    --green-mid:   #8A784E;
    --green-light: #EEF3D6;
    --green-pale:  #F6F8EA;
    --white:       #ffffff;
    --off-white:   #FBFDF5;
    --text:        #2f2f1a;
    --text-mid:    #5a5a2a;
    --text-muted:  #7a7a52;
    --border:      rgba(59,59,26,0.12);
    --shadow:      rgba(59,59,26,0.10);
  }
  * { margin:0; padding:0; box-sizing:border-box; }
  body { font-family:'Nunito',sans-serif; background:var(--white); color:var(--text); overflow-x:hidden; }

  @keyframes marquee   { from{transform:translateX(0)} to{transform:translateX(-50%)} }
  @keyframes spin      { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
  @keyframes float     { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
  @keyframes pulse     { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.4)} }
  @keyframes fadeUp    { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
  @keyframes fadeLeft  { from{opacity:0;transform:translateX(-28px)} to{opacity:1;transform:translateX(0)} }
  @keyframes lineGrow  { from{width:0} to{width:220px} }
  @keyframes glowPulse { 0%,100%{box-shadow:0 0 0 0 rgba(90,90,42,0)} 50%{box-shadow:0 0 0 14px rgba(90,90,42,0.07)} }
  @keyframes leafDrift { 0%,100%{transform:rotate(-3deg) translateY(0)} 50%{transform:rotate(3deg) translateY(-7px)} }
  @keyframes countUp   { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }

  /* ── MARQUEE ── */
  .mq { background:var(--green-dark); padding:11px 0; overflow:hidden; }
  .mq-track { display:flex; animation:marquee 34s linear infinite; white-space:nowrap; }
  .mq-item { display:inline-flex; align-items:center; gap:10px; padding:0 28px; font-family:'Cinzel',serif; font-size:10px; letter-spacing:0.18em; text-transform:uppercase; color:rgba(255,255,255,0.7); }
  .mq-leaf { width:5px; height:5px; border-radius:50%; background:var(--green-light); opacity:0.5; }

  /* ── SPLIT HERO ── */
  .why-hero { display:grid; grid-template-columns:1fr 1fr; min-height:92vh; }

  .wh-left { background:var(--green-dark); position:relative; overflow:hidden; display:flex; flex-direction:column; justify-content:flex-end; padding:60px 60px 72px; }
  .wh-bg   { position:absolute; inset:0; background:url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900') center/cover no-repeat; opacity:0.15; }
  .wh-ring1 { position:absolute; top:-60px; left:-60px; width:380px; height:380px; border-radius:50%; border:1px solid rgba(255,255,255,0.06); animation:spin 60s linear infinite; pointer-events:none; }
  .wh-ring2 { position:absolute; bottom:40px; right:-80px; width:280px; height:280px; border-radius:50%; border:1px solid rgba(255,255,255,0.04); animation:spin 40s linear infinite reverse; pointer-events:none; }
  .wh-eyebrow { font-family:'Cinzel',serif; font-size:10px; letter-spacing:0.28em; text-transform:uppercase; color:rgba(255,255,255,0.4); display:block; margin-bottom:20px; position:relative; z-index:1; }
  .wh-title { font-family:'Cinzel',serif; font-size:clamp(36px,4.8vw,66px); font-weight:700; color:var(--white); line-height:1.07; position:relative; z-index:1; animation:fadeLeft 0.9s ease both; }
  .wh-title em { display:block; font-style:italic; font-family:'Playfair Display',serif; color:var(--green-light); font-weight:400; font-size:0.84em; }
  .wh-divider { width:48px; height:2px; background:linear-gradient(90deg,rgba(255,255,255,0.5),rgba(255,255,255,0.1)); border-radius:2px; margin:26px 0; position:relative; z-index:1; }
  .wh-para { font-size:15px; color:rgba(255,255,255,0.58); line-height:1.88; font-weight:300; max-width:400px; position:relative; z-index:1; font-style:italic; font-family:'Playfair Display',serif; animation:fadeLeft 0.9s 0.15s ease both; }
  .wh-badges { display:flex; gap:10px; flex-wrap:wrap; margin-top:36px; position:relative; z-index:1; }
  .wh-badge { display:flex; align-items:center; gap:7px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.13); border-radius:50px; padding:8px 16px; font-family:'Cinzel',serif; font-size:9.5px; letter-spacing:0.12em; text-transform:uppercase; color:rgba(255,255,255,0.68); }
  .wh-badge-dot { width:6px; height:6px; border-radius:50%; background:var(--green-light); animation:pulse 2.2s ease-in-out infinite; }

  .wh-right { display:grid; grid-template-rows:1fr auto; background:var(--green-pale); }
  .wh-img-wrap { overflow:hidden; }
  .wh-img-wrap img { width:100%; height:100%; object-fit:cover; display:block; filter:saturate(0.82); transition:transform 0.7s; }
  .wh-img-wrap:hover img { transform:scale(1.04); filter:saturate(1); }
  .wh-stats { display:grid; grid-template-columns:repeat(3,1fr); background:var(--white); }
  .wh-stat { padding:28px 20px; border-right:1px solid var(--border); transition:background 0.3s; }
  .wh-stat:last-child { border-right:none; }
  .wh-stat:hover { background:var(--green-pale); }
  .wh-stat-ico { font-size:18px; margin-bottom:7px; display:block; }
  .wh-stat-num { font-family:'Cinzel',serif; font-size:clamp(22px,3vw,34px); font-weight:700; color:var(--green-dark); line-height:1; }
  .wh-stat-lbl { font-size:11px; letter-spacing:0.1em; text-transform:uppercase; color:var(--text-muted); margin-top:5px; }

  /* ── SECTION SHARED ── */
  .sec { padding:96px 32px; }
  .sec-inner { max-width:1280px; margin:0 auto; }
  .stag { font-family:'Cinzel',serif; font-size:10px; letter-spacing:0.22em; text-transform:uppercase; color:var(--green); font-weight:600; display:block; margin-bottom:10px; }
  .stitle { font-family:'Cinzel',serif; font-size:clamp(24px,3.8vw,44px); font-weight:600; color:var(--text); line-height:1.2; }
  .stitle em { font-style:italic; font-family:'Playfair Display',serif; color:var(--green); font-weight:500; }
  .gline { width:52px; height:3px; background:linear-gradient(90deg,var(--green),var(--green-mid)); border-radius:2px; margin:16px 0 48px; }
  .center { text-align:center; }
  .center .gline { margin:16px auto 48px; }

  /* ── BENTO GRID ── */
  .bento-sec { background:var(--white); }
  .bento { display:grid; grid-template-columns:repeat(6,1fr); grid-auto-rows:200px; gap:16px; margin-top:52px; }
  .bc { border-radius:20px; padding:30px; overflow:hidden; position:relative; transition:transform 0.3s,box-shadow 0.3s; cursor:default; }
  .bc:hover { transform:translateY(-6px); box-shadow:0 20px 50px rgba(42,92,50,0.13); }
  .bc.large  { grid-column:span 3; grid-row:span 2; }
  .bc.medium { grid-column:span 3; }
  .bc.wide   { grid-column:span 4; }
  .bc.small  { grid-column:span 2; }
  .bc-dark  { background:var(--green-dark); }
  .bc-pale  { background:var(--green-pale); border:1px solid var(--border); }
  .bc-light { background:var(--green-light); border:1px solid rgba(90,90,42,0.14); }
  .bc-off   { background:var(--off-white); border:1px solid var(--border); }
  .bc-mid   { background:var(--green-mid); }
  .bc-ico { font-size:30px; margin-bottom:14px; display:block; }
  .bc.large .bc-ico { font-size:46px; }
  .bc-title { font-family:'Cinzel',serif; font-size:14px; font-weight:600; color:var(--text); margin-bottom:8px; line-height:1.3; }
  .bc-dark .bc-title, .bc-mid .bc-title { color:var(--white); }
  .bc-desc { font-size:13px; color:var(--text-muted); line-height:1.68; font-weight:300; }
  .bc-dark .bc-desc, .bc-mid .bc-desc { color:rgba(255,255,255,0.62); }
  .bc.large .bc-title { font-size:22px; }
  .bc.large .bc-desc { font-size:14.5px; }
  .bc-num { font-family:'Cinzel',serif; font-size:clamp(30px,4.5vw,52px); font-weight:700; color:var(--green-dark); line-height:1; animation:countUp 0.8s ease both; }
  .bc-dark .bc-num, .bc-mid .bc-num { color:var(--white); }
  .bc-light .bc-num { color:var(--green-dark); }
  .bc-num-lbl { font-size:11px; letter-spacing:0.1em; text-transform:uppercase; color:var(--text-muted); margin-top:5px; }
  .bc-dark .bc-num-lbl, .bc-mid .bc-num-lbl { color:rgba(255,255,255,0.48); }
  .bc-light .bc-num-lbl { color:var(--green); }
  .bc-tag-row { display:flex; flex-wrap:wrap; gap:7px; margin-top:14px; }
  .bc-tag { font-size:10px; background:rgba(255,255,255,0.14); color:var(--white); font-family:'Cinzel',serif; letter-spacing:0.1em; text-transform:uppercase; padding:4px 11px; border-radius:50px; border:1px solid rgba(255,255,255,0.16); }
  .bc-pale .bc-tag, .bc-off .bc-tag { background:rgba(59,59,26,0.08); color:var(--green-dark); border-color:rgba(59,59,26,0.14); }
  .bc-light .bc-tag { background:rgba(59,59,26,0.1); color:var(--green-dark); border-color:rgba(59,59,26,0.16); }

  /* ── COMPARISON ZIGZAG ── */
  .compare-sec { background:var(--off-white); }
  .compare-block { display:grid; grid-template-columns:1fr 1fr; min-height:480px; border-radius:24px; overflow:hidden; border:1px solid var(--border); box-shadow:0 8px 36px var(--shadow); margin-bottom:28px; }
  .compare-block:last-child { margin-bottom:0; }
  .cb-bad  { background:rgba(180,120,80,0.08); padding:52px 52px; display:flex; flex-direction:column; justify-content:center; border-right:1px solid var(--border); }
  .cb-good { background:var(--white); padding:52px 52px; display:flex; flex-direction:column; justify-content:center; }
  .cb-label { display:inline-flex; align-items:center; gap:8px; font-family:'Cinzel',serif; font-size:9px; letter-spacing:0.2em; text-transform:uppercase; padding:6px 14px; border-radius:50px; margin-bottom:24px; width:fit-content; }
  .cb-label.bad  { background:rgba(180,100,50,0.12); color:#7a4020; border:1px solid rgba(180,100,50,0.2); }
  .cb-label.good { background:var(--green-light); color:var(--green-dark); border:1px solid rgba(90,90,42,0.2); }
  .cb-title { font-family:'Cinzel',serif; font-size:clamp(18px,2.5vw,26px); font-weight:600; color:var(--text); line-height:1.2; margin-bottom:18px; }
  .cb-title em { font-style:italic; font-family:'Playfair Display',serif; color:var(--green); font-weight:500; }
  .cb-items { display:flex; flex-direction:column; gap:12px; }
  .cb-item { display:flex; align-items:flex-start; gap:12px; font-size:14px; line-height:1.65; font-weight:300; }
  .cb-item.neg { color:var(--text-muted); }
  .cb-item.pos { color:var(--text-mid); font-weight:600; }
  .cb-dot-bad  { width:22px; height:22px; border-radius:50%; background:rgba(180,100,50,0.15); display:flex; align-items:center; justify-content:center; font-size:11px; flex-shrink:0; margin-top:1px; }
  .cb-dot-good { width:22px; height:22px; border-radius:50%; background:var(--green-light); display:flex; align-items:center; justify-content:center; font-size:11px; flex-shrink:0; margin-top:1px; color:var(--green); font-weight:800; }

  /* ── DEEP DIVE CARDS ── */
  .deep-sec { background:var(--green-pale); }
  .deep-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:22px; }
  .deep-card {
    background:var(--white); border:1px solid var(--border); border-radius:20px;
    overflow:hidden; box-shadow:0 4px 18px var(--shadow);
    transition:transform 0.35s,box-shadow 0.35s,border-color 0.35s;
    position:relative;
  }
  .deep-card:hover { transform:translateY(-8px); box-shadow:0 22px 56px rgba(42,92,50,0.14); border-color:rgba(90,90,42,0.28); }
  .deep-card-top { height:160px; overflow:hidden; position:relative; }
  .deep-card-top img { width:100%; height:100%; object-fit:cover; filter:saturate(0.8); transition:transform 0.6s,filter 0.5s; }
  .deep-card:hover .deep-card-top img { transform:scale(1.07); filter:saturate(1.05); }
  .dc-overlay { position:absolute; inset:0; background:linear-gradient(to top, rgba(59,59,26,0.5), transparent); }
  .dc-ico-wrap { position:absolute; bottom:14px; left:18px; width:52px; height:52px; background:var(--white); border-radius:14px; display:flex; align-items:center; justify-content:center; font-size:24px; box-shadow:0 4px 14px rgba(0,0,0,0.18); }
  .deep-card-body { padding:22px 24px 28px; }
  .dc-num { font-family:'Cinzel',serif; font-size:10px; letter-spacing:0.18em; color:var(--green); font-weight:700; margin-bottom:8px; display:block; }
  .dc-title { font-family:'Cinzel',serif; font-size:16px; font-weight:600; color:var(--text); margin-bottom:10px; line-height:1.3; }
  .dc-desc { font-size:13.5px; color:var(--text-muted); line-height:1.78; font-weight:300; margin-bottom:16px; }
  .dc-tags { display:flex; flex-wrap:wrap; gap:6px; }
  .dc-tag { font-size:11px; background:var(--green-pale); border:1px solid rgba(90,90,42,0.15); border-radius:50px; padding:4px 12px; color:var(--green-dark); font-weight:600; }
  .deep-card:hover .dc-tag { background:var(--green-light); }

  /* ── PROOF / NUMBERS DARK ── */
  .proof-sec { background:var(--green-dark); padding:100px 32px; position:relative; overflow:hidden; }
  .proof-ring1 { position:absolute; right:-120px; top:-120px; width:600px; height:600px; border-radius:50%; border:1px solid rgba(255,255,255,0.04); animation:spin 70s linear infinite; pointer-events:none; }
  .proof-ring2 { position:absolute; left:-80px; bottom:-80px; width:400px; height:400px; border-radius:50%; border:1px solid rgba(255,255,255,0.03); animation:spin 50s linear infinite reverse; pointer-events:none; }
  .proof-inner { max-width:1280px; margin:0 auto; position:relative; z-index:1; }
  .proof-header { display:grid; grid-template-columns:1fr 1fr; gap:72px; align-items:center; margin-bottom:72px; }
  .proof-tag { font-family:'Cinzel',serif; font-size:10px; letter-spacing:0.26em; text-transform:uppercase; color:rgba(255,255,255,0.38); display:block; margin-bottom:14px; }
  .proof-title { font-family:'Cinzel',serif; font-size:clamp(26px,4vw,50px); font-weight:700; color:var(--white); line-height:1.1; }
  .proof-title em { font-style:italic; font-family:'Playfair Display',serif; color:var(--green-light); font-weight:400; }
  .proof-line { width:44px; height:2px; background:linear-gradient(90deg,rgba(255,255,255,0.35),rgba(255,255,255,0.08)); border-radius:2px; margin:18px 0 24px; }
  .proof-desc { font-size:15px; color:rgba(255,255,255,0.55); line-height:1.85; font-weight:300; font-style:italic; font-family:'Playfair Display',serif; }
  .proof-quote-side { }
  .pq-mark { font-family:'Playfair Display',serif; font-size:80px; line-height:0.6; color:rgba(255,255,255,0.08); margin-bottom:18px; display:block; }
  .pq-text { font-family:'Playfair Display',serif; font-size:clamp(16px,2.2vw,22px); font-style:italic; color:rgba(255,255,255,0.8); line-height:1.65; margin-bottom:20px; }
  .pq-attr { display:flex; align-items:center; gap:12px; }
  .pq-line { width:32px; height:1px; background:rgba(255,255,255,0.22); }
  .pq-name { font-family:'Cinzel',serif; font-size:10px; letter-spacing:0.14em; text-transform:uppercase; color:rgba(255,255,255,0.35); }
  .proof-numbers { display:grid; grid-template-columns:repeat(4,1fr); gap:2px; }
  .pn-box { background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.08); padding:36px 28px; text-align:center; position:relative; overflow:hidden; transition:background 0.3s,transform 0.3s; }
  .pn-box:hover { background:rgba(255,255,255,0.1); transform:translateY(-4px); }
  .pn-box::before { content:attr(data-ico); position:absolute; top:-10px; right:10px; font-size:80px; opacity:0.06; line-height:1; }
  .pn-ico { font-size:28px; display:block; margin-bottom:14px; }
  .pn-num { font-family:'Cinzel',serif; font-size:clamp(32px,4vw,52px); font-weight:700; color:var(--white); line-height:1; }
  .pn-lbl { font-size:11px; letter-spacing:0.1em; text-transform:uppercase; color:rgba(255,255,255,0.4); margin-top:7px; }
  .pn-sub { font-size:12px; color:rgba(255,255,255,0.35); margin-top:6px; font-style:italic; }

  /* ── TESTIMONIALS ── */
  .testi-sec { background:var(--white); }
  .testi-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:22px; }
  .testi-card { background:var(--off-white); border-radius:18px; padding:32px 28px; border-top:3px solid var(--green); border:1px solid var(--border); border-top:3px solid var(--green); box-shadow:0 4px 18px var(--shadow); transition:transform 0.3s,box-shadow 0.3s; }
  .testi-card:hover { transform:translateY(-6px); box-shadow:0 20px 50px rgba(42,92,50,0.12); }
  .testi-q { font-family:'Playfair Display',serif; font-size:60px; line-height:0.6; color:var(--green-light); margin-bottom:12px; }
  .testi-stars { color:var(--green-mid); font-size:14px; margin-bottom:12px; }
  .testi-text { font-size:14.5px; font-style:italic; color:var(--text-muted); line-height:1.78; margin-bottom:22px; font-weight:300; }
  .testi-foot { display:flex; align-items:center; gap:12px; }
  .testi-av { width:44px; height:44px; border-radius:50%; background:linear-gradient(135deg,var(--green-mid),var(--green)); display:flex; align-items:center; justify-content:center; font-family:'Cinzel',serif; font-size:17px; font-weight:600; color:var(--white); flex-shrink:0; }
  .testi-nm { font-family:'Cinzel',serif; font-size:13px; font-weight:600; color:var(--text); }
  .testi-rl { font-size:11px; color:var(--green); margin-top:2px; letter-spacing:0.06em; }

  /* ── MISSION ZIGZAG ── */
  .mission-sec { background:var(--off-white); }
  .mission-grid { display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:center; }
  .mission-imgs { display:grid; grid-template-columns:1fr 1fr; grid-template-rows:220px 220px; gap:14px; }
  .mi { border-radius:14px; overflow:hidden; box-shadow:0 10px 32px var(--shadow); }
  .mi img { width:100%; height:100%; object-fit:cover; display:block; filter:saturate(0.82); transition:transform 0.55s,filter 0.4s; }
  .mi:hover img { transform:scale(1.06); filter:saturate(1.05); }
  .mi:nth-child(1) { border-radius:14px 14px 14px 48px; }
  .mi:nth-child(2) { border-radius:14px 48px 14px 14px; grid-row:span 2; margin-top:28px; }
  .mi:nth-child(2) img { height:calc(220px*2 + 14px + 28px); }
  .mi:nth-child(3) { border-radius:48px 14px 14px 14px; }
  .mission-quote { font-family:'Playfair Display',serif; font-size:clamp(16px,2vw,21px); font-style:italic; color:var(--text); line-height:1.6; border-left:3px solid var(--green); padding-left:20px; margin:22px 0; }
  .mission-desc { font-size:15px; color:var(--text-muted); line-height:1.88; font-weight:300; margin-bottom:14px; }
  .checks { display:flex; flex-direction:column; gap:10px; margin:22px 0; }
  .check-row { display:flex; align-items:center; gap:10px; font-size:14px; color:var(--text-mid); font-weight:600; }
  .chk { width:22px; height:22px; background:var(--green-light); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:11px; color:var(--green); flex-shrink:0; font-weight:800; }
  .btn-green { background:linear-gradient(135deg,var(--green),var(--green-mid)); color:var(--white); padding:14px 34px; border-radius:50px; border:none; font-family:'Cinzel',serif; font-size:11px; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; cursor:pointer; text-decoration:none; display:inline-block; box-shadow:0 8px 24px rgba(58,125,68,0.3); transition:transform 0.25s,box-shadow 0.25s; }
  .btn-green:hover { transform:translateY(-3px); box-shadow:0 14px 36px rgba(58,125,68,0.42); }

  /* ── CTA ── */
  .cta-sec { background:var(--green-pale); padding:96px 32px; }
  .cta-inner { max-width:1280px; margin:0 auto; }
  .cta-card { background:var(--green-dark); border-radius:28px; overflow:hidden; display:grid; grid-template-columns:1fr 1fr; min-height:380px; }
  .cta-text { padding:60px 56px; display:flex; flex-direction:column; justify-content:center; }
  .cta-tag { font-family:'Cinzel',serif; font-size:10px; letter-spacing:0.22em; text-transform:uppercase; color:rgba(255,255,255,0.4); display:block; margin-bottom:14px; }
  .cta-title { font-family:'Cinzel',serif; font-size:clamp(22px,3.2vw,40px); font-weight:700; color:var(--white); line-height:1.15; margin-bottom:14px; }
  .cta-title em { font-style:italic; font-family:'Playfair Display',serif; color:var(--green-light); font-weight:400; }
  .cta-desc { font-size:15px; color:rgba(255,255,255,0.55); line-height:1.75; font-weight:300; margin-bottom:36px; font-style:italic; max-width:420px; }
  .cta-btns { display:flex; gap:14px; flex-wrap:wrap; }
  .btn-white { background:var(--white); color:var(--green-dark); padding:14px 32px; border-radius:50px; border:none; font-family:'Cinzel',serif; font-size:11px; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; cursor:pointer; text-decoration:none; display:inline-block; transition:transform 0.25s; box-shadow:0 6px 20px rgba(0,0,0,0.18); }
  .btn-white:hover { transform:translateY(-2px); }
  .btn-outline-w { background:transparent; color:rgba(255,255,255,0.82); padding:13px 32px; border-radius:50px; border:1.5px solid rgba(255,255,255,0.28); font-family:'Cinzel',serif; font-size:11px; font-weight:600; letter-spacing:0.14em; text-transform:uppercase; cursor:pointer; text-decoration:none; display:inline-block; transition:background 0.25s,transform 0.25s; }
  .btn-outline-w:hover { background:rgba(255,255,255,0.1); transform:translateY(-2px); }
  .cta-img { overflow:hidden; position:relative; }
  .cta-img img { width:100%; height:100%; object-fit:cover; display:block; filter:saturate(0.75); opacity:0.65; }
  .cta-img::before { content:''; position:absolute; inset:0; background:linear-gradient(to right, var(--green-dark) 0%, transparent 40%); z-index:1; }
  .cta-float { position:absolute; bottom:28px; right:28px; z-index:2; background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.15); border-radius:12px; padding:14px 20px; text-align:center; animation:float 4s ease-in-out infinite; }
  .cf-num { font-family:'Cinzel',serif; font-size:20px; font-weight:700; color:var(--white); }
  .cf-lbl { font-size:9px; letter-spacing:0.14em; text-transform:uppercase; color:rgba(255,255,255,0.6); margin-top:3px; }

  /* ── RESPONSIVE ── */
  @media(max-width:1100px){
    .why-hero { grid-template-columns:1fr; min-height:auto; }
    .wh-right { grid-template-rows:340px auto; }
    .bento { grid-template-columns:repeat(4,1fr); }
    .bc.large { grid-column:span 2; }
    .compare-block { grid-template-columns:1fr; }
    .cb-bad { border-right:none; border-bottom:1px solid var(--border); }
    .proof-header { grid-template-columns:1fr; gap:40px; }
    .proof-numbers { grid-template-columns:repeat(2,1fr); }
    .mission-grid { grid-template-columns:1fr; }
    .mission-imgs { display:none; }
    .cta-card { grid-template-columns:1fr; }
    .cta-img { height:220px; }
    .deep-grid { grid-template-columns:repeat(2,1fr); }
  }
  @media(max-width:768px){
    .bento { grid-template-columns:repeat(2,1fr); grid-auto-rows:160px; }
    .bc.large,.bc.wide { grid-column:span 2; }
    .bc.small { grid-column:span 1; }
    .testi-grid { grid-template-columns:1fr; }
    .deep-grid { grid-template-columns:1fr; }
    .wh-stats { grid-template-columns:1fr; }
    .wh-stat { border-right:none; border-bottom:1px solid var(--border); }
  }
  @media(max-width:540px){
    .sec { padding:64px 20px; }
    .bento { grid-template-columns:1fr; }
    .bc.large,.bc.medium,.bc.wide,.bc.small { grid-column:span 1; }
    .cta-text { padding:44px 28px; }
    .cb-bad,.cb-good { padding:36px 28px; }
    .proof-numbers { grid-template-columns:1fr 1fr; }
    .wh-left { padding:48px 28px 60px; }
  }
`;

const mqItems = ["Why Choose Us","Drug-Free Healing","18+ Years","No Surgery","6000+ Healed","Kalaripayattu","Marma Therapy","Kerala Tradition","Personalized Care","107 Marma Points","Ancient Wisdom","Proven Results"];

const deepCards = [
  {
    num:"REASON 01", ico:"🚫",
    img:"https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=700",
    title:"100% Drug-Free — Zero Side Effects",
    desc:"Every transformation at Ever Ayur Life happens through natural intelligence alone. No medicines, no injections, no chemicals. The body knows how to heal — our purpose is to awaken and support that power.",
    tags:["No Medicines","No Injections","No Side Effects","Natural Intelligence"],
  },
  {
    num:"REASON 02", ico:"🔪",
    img:"https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=700",
    title:"Surgery Alternative — Proven",
    desc:"For conditions where surgery is prescribed — knee replacement, disc issues, frozen shoulder — Kalaripayattu Nadi Marma Therapy provides a deeply effective natural path without knives, risk, or long recovery.",
    tags:["Knee Replacement Alt.","Disc Issues","Frozen Shoulder","No Risk"],
  },
  {
    num:"REASON 03", ico:"📜",
    img:"https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=700",
    title:"18+ Years of Mastered Tradition",
    desc:"Unni Gurukkal has devoted 18+ years to perfecting the ancient Kalaripayattu Nadi Marma healing tradition — not as a general practice, but with singular, deep mastery that produces consistent, lasting results.",
    tags:["18+ Years","Deep Mastery","Consistent Results","Kalaripayattu"],
  },
  {
    num:"REASON 04", ico:"👥",
    img:"https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=700",
    title:"6000+ Lives Healed",
    desc:"Over 6,000 patients across Kerala, Karnataka, Tamil Nadu and beyond — including cases that conventional medicine had declared chronic, irreversible, or only resolvable through surgery.",
    tags:["6000+ Patients","Pan-India","Untreatable Cases","Documented Results"],
  },
  {
    num:"REASON 05", ico:"🧬",
    img:"https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=700",
    title:"Fully Personalized Treatment",
    desc:"Before a single point is touched, Unni Gurukkal reads your Nadi (pulse) — a traditional diagnostic that reveals your constitution and unique imbalances. Every treatment plan is yours alone.",
    tags:["Nadi Assessment","Individual Protocol","Body Constitution","No Generic Formula"],
  },
  {
    num:"REASON 06", ico:"⚖️",
    img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700",
    title:"Holistic — Body, Mind & Soul",
    desc:"Physical pain rarely exists in isolation. Ever Ayur Life treats the whole person — Marma for the body, Pranayama for the mind, Kalaripayattu's spiritual tradition for the soul. True healing requires all three.",
    tags:["Marma Therapy","Pranayama","Yoga","Soul Alignment"],
  },
];

const compareBlocks = [
  {
    title1:"Conventional Medicine",
    title2:"Ever Ayur <em>Life</em>",
    bad: [
      { t:"Long-term dependence on medicines and painkillers" },
      { t:"Side effects that compound over time" },
      { t:"Surgery risks, recovery periods, and high cost" },
      { t:"Treats symptoms — the pain returns" },
      { t:"Same protocol applied to every patient" },
    ],
    good: [
      { t:"Zero medicines — healing through natural intelligence" },
      { t:"No side effects, no complications, no recovery time" },
      { t:"Natural alternative proven to avoid surgery" },
      { t:"Treats the root cause — lasting, permanent recovery" },
      { t:"Fully individualized from Nadi pulse assessment" },
    ],
  },
];

const proofNumbers = [
  { ico:"🌿", num:"18+", lbl:"Years of Mastery", sub:"Dedicated solely to Kalaripayattu Nadi Marma" },
  { ico:"👥", num:"6000+", lbl:"Patients Healed", sub:"Across Kerala, Karnataka & Tamil Nadu" },
  { ico:"✋", num:"107", lbl:"Marma Points", sub:"Activated with precision in every session" },
  { ico:"🚫", num:"0", lbl:"Medicines Used", sub:"100% drug-free across all treatments" },
];

const testimonials = [
  { init:"R", name:"Ramesh Nair", role:"Chronic Back Pain · Kochi", text:"After 6 years of pain and being told surgery was the only option, 3 months of Marma therapy changed everything. I walk freely today, completely pain-free." },
  { init:"S", name:"Sunitha Pillai", role:"Rheumatoid Arthritis · Thrissur", text:"Daily painkillers for years. After 8 weeks at Ever Ayur Life I am completely medicine-free. The results were beyond anything I ever imagined possible." },
  { init:"A", name:"Arun Kumar", role:"Parkinson's Disease · Bangalore", text:"Tremors have reduced significantly. Unni Gurukkal's expertise in neurological Marma is truly extraordinary. Conventional medicine had no more answers — he did." },
];

export default function WhyUs() {
  return (
    <>
      <style>{FONTS + CSS}</style>

      {/* MARQUEE */}
      <div className="mq">
        <div className="mq-track">
          {[...mqItems, ...mqItems, ...mqItems].map((t, i) => (
            <span className="mq-item" key={i}>{t}<span className="mq-leaf" /></span>
          ))}
        </div>
      </div>

      {/* SPLIT HERO */}
      <div className="why-hero">
        <div className="wh-left">
          <div className="wh-bg" />
          <div className="wh-ring1" /><div className="wh-ring2" />
          <span className="wh-eyebrow">Why Choose Ever Ayur Life</span>
          <h1 className="wh-title">
            The Difference<br />
            <em>Is Real.</em>
          </h1>
          <div className="wh-divider" />
          <p className="wh-para">"Most treatments manage pain. We eliminate it — at the root, without medicines, without surgery, and without compromise."</p>
          <div className="wh-badges">
            {["Drug-Free Healing","18+ Years Mastery","Surgery Alternative","6000+ Healed","Fully Personalized"].map((b, i) => (
              <div className="wh-badge" key={i}><span className="wh-badge-dot" />{b}</div>
            ))}
          </div>
        </div>
        <div className="wh-right">
          <div className="wh-img-wrap">
            <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900" alt="Healing" />
          </div>
          <div className="wh-stats">
            {[
              { ico:"🌿", num:"18+", lbl:"Years of Mastery" },
              { ico:"👥", num:"6000+", lbl:"Patients Healed" },
              { ico:"🚫", num:"0", lbl:"Medicines Used" },
            ].map((s, i) => (
              <div className="wh-stat" key={i}>
                <span className="wh-stat-ico">{s.ico}</span>
                <div className="wh-stat-num">{s.num}</div>
                <div className="wh-stat-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BENTO GRID — QUICK OVERVIEW */}
      <section className="sec bento-sec">
        <div className="sec-inner">
          <div className="center">
            <span className="stag">The Ever Ayur Life Difference</span>
            <h2 className="stitle">Six Reasons to <em>Choose Us</em></h2>
            <div className="gline" />
          </div>
          <div className="bento">
            <div className="bc large bc-dark">
              <span className="bc-ico">🚫</span>
              <div className="bc-title">100% Drug-Free Healing</div>
              <div className="bc-desc">Zero medicines, zero injections, zero side effects. Every transformation happens through natural intelligence alone. The body knows how to heal — we simply awaken it.</div>
              <div className="bc-tag-row">
                <span className="bc-tag">No Medicines</span>
                <span className="bc-tag">No Side Effects</span>
                <span className="bc-tag">Natural Intelligence</span>
              </div>
            </div>
            <div className="bc medium bc-pale">
              <div className="bc-num">18+</div>
              <div className="bc-num-lbl">Years of Kalaripayattu Mastery</div>
            </div>
            <div className="bc medium bc-light">
              <div className="bc-num">6000+</div>
              <div className="bc-num-lbl">Patients Healed Across India</div>
            </div>
            <div className="bc wide bc-off">
              <span className="bc-ico">🔪</span>
              <div className="bc-title">Proven Surgery Alternative</div>
              <div className="bc-desc">For conditions where surgery is prescribed — knee replacement, disc issues, frozen shoulder — Marma therapy offers a deeply effective natural path without knives, risk, or recovery time.</div>
            </div>
            <div className="bc small bc-pale">
              <span className="bc-ico">🧬</span>
              <div className="bc-title">Fully Personalized</div>
              <div className="bc-desc">Each plan crafted from a traditional Nadi pulse assessment — never a generic formula.</div>
            </div>
            <div className="bc small bc-dark">
              <div className="bc-num">107</div>
              <div className="bc-num-lbl">Marma Points Activated</div>
            </div>
            <div className="bc small bc-off">
              <span className="bc-ico">⚖️</span>
              <div className="bc-title">Body, Mind & Soul</div>
              <div className="bc-desc">True healing through all three dimensions of the person.</div>
            </div>
            <div className="bc small bc-light">
              <span className="bc-ico">📜</span>
              <div className="bc-title">Authentic Lineage</div>
              <div className="bc-desc">Kerala's living Kalaripayattu heritage, passed down for generations.</div>
            </div>
          </div>
        </div>
      </section>

      {/* DEEP DIVE — 6 REASON CARDS */}
      <section className="sec deep-sec">
        <div className="sec-inner">
          <div className="center">
            <span className="stag">In Depth</span>
            <h2 className="stitle">Every Reason, <em>Explained</em></h2>
            <div className="gline" />
          </div>
          <div className="deep-grid">
            {deepCards.map((c, i) => (
              <div className="deep-card" key={i}>
                <div className="deep-card-top">
                  <img src={c.img} alt={c.title} />
                  <div className="dc-overlay" />
                  <div className="dc-ico-wrap">{c.ico}</div>
                </div>
                <div className="deep-card-body">
                  <span className="dc-num">{c.num}</span>
                  <h3 className="dc-title">{c.title}</h3>
                  <p className="dc-desc">{c.desc}</p>
                  <div className="dc-tags">
                    {c.tags.map((t, j) => <span className="dc-tag" key={j}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="sec compare-sec">
        <div className="sec-inner">
          <div className="center">
            <span className="stag">Side by Side</span>
            <h2 className="stitle">Conventional vs. <em>Ever Ayur Life</em></h2>
            <div className="gline" />
          </div>
          {compareBlocks.map((block, bi) => (
            <div className="compare-block" key={bi}>
              <div className="cb-bad">
                <div className="cb-label bad">✗ &nbsp; Conventional Medicine</div>
                <h3 className="cb-title">What Most Treatments Offer</h3>
                <div className="cb-items">
                  {block.bad.map((item, i) => (
                    <div className="cb-item neg" key={i}>
                      <div className="cb-dot-bad">✗</div>
                      {item.t}
                    </div>
                  ))}
                </div>
              </div>
              <div className="cb-good">
                <div className="cb-label good">✓ &nbsp; Ever Ayur Life</div>
                <h3 className="cb-title">What We <em>Promise</em></h3>
                <div className="cb-items">
                  {block.good.map((item, i) => (
                    <div className="cb-item pos" key={i}>
                      <div className="cb-dot-good">✓</div>
                      {item.t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROOF — NUMBERS DARK */}
      <section className="proof-sec">
        <div className="proof-ring1" /><div className="proof-ring2" />
        <div className="proof-inner">
          <div className="proof-header">
            <div>
              <span className="proof-tag">The Proof</span>
              <h2 className="proof-title">Results That <em>Speak</em><br/>for Themselves</h2>
              <div className="proof-line" />
              <p className="proof-desc">"18 years. 6,000 patients. Zero medicines. These are not claims — they are the accumulated results of a lifetime dedicated to one healing tradition, practiced with uncompromising integrity."</p>
            </div>
            <div className="proof-quote-side">
              <span className="pq-mark">"</span>
              <p className="pq-text">Treatment here is not just therapy — it feels like returning to a new life. After years of chronic pain and failed treatments, Ever Ayur Life gave me my freedom back without a single medicine.</p>
              <div className="pq-attr">
                <div className="pq-line" />
                <span className="pq-name">Patient · Ever Ayur Life · Thiruvananthapuram</span>
              </div>
            </div>
          </div>
          <div className="proof-numbers">
            {proofNumbers.map((p, i) => (
              <div className="pn-box" key={i} data-ico={p.ico}>
                <span className="pn-ico">{p.ico}</span>
                <div className="pn-num">{p.num}</div>
                <div className="pn-lbl">{p.lbl}</div>
                <div className="pn-sub">{p.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="sec testi-sec">
        <div className="sec-inner">
          <div className="center">
            <span className="stag">Patient Stories</span>
            <h2 className="stitle">Real Healing, <em>Real Lives</em></h2>
            <div className="gline" />
          </div>
          <div className="testi-grid">
            {testimonials.map((t, i) => (
              <div className="testi-card" key={i}>
                <div className="testi-q">"</div>
                <div className="testi-stars">★★★★★</div>
                <p className="testi-text">{t.text}</p>
                <div className="testi-foot">
                  <div className="testi-av">{t.init}</div>
                  <div><div className="testi-nm">{t.name}</div><div className="testi-rl">{t.role}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION — OUR COMMITMENT */}
      <section className="sec mission-sec">
        <div className="sec-inner">
          <div className="mission-grid">
            <div>
              <span className="stag">Our Commitment to You</span>
              <h2 className="stitle">Not Just Treated —<br/><em>Truly Healed</em></h2>
              <div className="gline" />
              <blockquote className="mission-quote">"The body has the power to heal itself — the purpose of treatment is to awaken that power."<br/><small style={{fontSize:"12px",opacity:0.6,fontFamily:"'Cinzel',serif",letterSpacing:"0.1em"}}>— Unni Gurukkal</small></blockquote>
              <p className="mission-desc">At Ever Ayur Life, we make one commitment above all others: you will leave healthier than you arrived — not just less symptomatic, but genuinely, sustainably healthier. No medicines to maintain. No procedures to repeat. No dependency to manage.</p>
              <p className="mission-desc">That commitment is possible because we treat the root cause, not the surface. Every session is guided by 18+ years of mastery, a deep traditional assessment, and a personalized protocol built for you alone.</p>
              <div className="checks">
                {[
                  "100% Drug-Free — Zero Side Effects, Always",
                  "Surgery Alternative with Proven Outcomes",
                  "Personalized from Nadi Assessment — Every Time",
                  "Treating the Whole Person: Body, Mind & Soul",
                  "18+ Years of Kalaripayattu Mastery Behind Every Session",
                ].map((c, i) => (
                  <div className="check-row" key={i}><div className="chk">✓</div>{c}</div>
                ))}
              </div>
              <a href="/contact" className="btn-green" style={{marginTop:"28px"}}>Book Your Free Nadi Assessment</a>
            </div>
            <div className="mission-imgs">
              <div className="mi"><img src="https://5.imimg.com/data5/SELLER/Default/2025/2/487810855/RF/AS/LK/23146979/advanced-kalari-marma-therapy-course-trivandrum-500x500.jpg" alt="Healing" /></div>
              <div className="mi"><img src="https://tigrisvalley.com/wp-content/uploads/2024/08/image-5.png" alt="Ayurveda" /></div>
              <div className="mi"><img src="https://shadharawellness.com/wp-content/uploads/2025/05/tharpana.jpg" alt="Therapy" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-sec">
        <div className="cta-inner">
          <div className="cta-card">
            <div className="cta-text">
              <span className="cta-tag">Take the First Step</span>
              <h2 className="cta-title">Ready to Experience the <em>Difference?</em></h2>
              <p className="cta-desc">"Book your free Nadi assessment — and discover what 18+ years of Kalaripayattu mastery, personalized entirely to your body, can truly do."</p>
              <div className="cta-btns">
                <a href="/contact" className="btn-white">Book Free Nadi Assessment</a>
                <a href="/treatment" className="btn-outline-w">Explore Treatments</a>
              </div>
            </div>
            <div className="cta-img">
              <img src="https://cdn.shopify.com/s/files/1/0784/9725/1578/articles/ayr_0bdecce9-7cb7-4df0-94f0-19261758ec6b_800x.jpg?v=1775022208" alt="Natural healing" />
              <div className="cta-float">
                <div className="cf-num">6000+</div>
                <div className="cf-lbl">Lives Healed</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
