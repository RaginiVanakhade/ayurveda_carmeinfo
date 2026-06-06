
const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Nunito:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Playfair+Display:ital,wght@0,500;0,600;1,400;1,500&display=swap');`;

const CSS = `
  :root {
    /* BASE (from navbar, softened) */
  --green:        #5a5a2a;   /* lighter olive */
  --green-dark:   #3B3B1A;   /* same as navbar primary */
  --green-mid:    #8A784E;   /* navbar accent */
  --green-light:  #EEF3D6;   /* light cream tint */
  --green-pale:   #F6F8EA;   /* soft background */

  /* SUPPORT */
  --gold:         #8A784E;
  --white:        #ffffff;
  --off-white:    #FBFDF5;
  --cream:        #F4F7E6;

  /* TEXT */
  --text:         #2f2f1a;
  --text-mid:     #5a5a2a;
  --text-muted:   #7a7a52;

  /* UI */
  --border:       rgba(59,59,26,0.12);
  --shadow:       rgba(59,59,26,0.12);
  }

  * { margin:0; padding:0; box-sizing:border-box; }
  body {
    font-family: 'Nunito', sans-serif;
    background: var(--white);
    color: var(--text);
    overflow-x: hidden;
  }

  @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
  @keyframes fadeIn { from{opacity:0} to{opacity:1} }
  @keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
  @keyframes spinSlow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
  @keyframes pulse { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.3);opacity:0.6} }
  @keyframes leafDrift { 0%,100%{transform:rotate(-4deg) translateY(0)} 50%{transform:rotate(4deg) translateY(-6px)} }
  @keyframes marqueeScroll { from{transform:translateX(0)} to{transform:translateX(-50%)} }


  /* ── HERO ── */
  .hero {
    background:linear-gradient(140deg, #ffffff 0%, var(--green-pale) 55%, #e4f5e6 100%);
    min-height:90vh;
    position:relative; overflow:hidden;
    display:flex; align-items:center;
  }
  .hero-bg-circle {
    position:absolute;
    right: -60px; top:50%;
    transform:translateY(-50%);
    width:560px; height:560px;
    border-radius:50%;
    background:radial-gradient(circle, rgba(58,125,68,0.07) 0%, transparent 70%);
    pointer-events:none;
  }
  .hero-bg-ring {
    position:absolute;
    right:30px; top:50%;
    transform:translateY(-50%);
    width:400px; height:400px;
    border-radius:50%;
    border:1px dashed rgba(58,125,68,0.18);
    animation:spinSlow 40s linear infinite;
    pointer-events:none;
  }
  .hero-inner {
    max-width:1280px; margin:0 auto; padding:70px 32px;
    display:grid; grid-template-columns:1fr 1fr; gap:48px;
    align-items:center; width:100%; position:relative; z-index:1;
  }
  .hero-text { animation:fadeUp 0.9s ease both; }
  .hero-badge {
    display:inline-flex; align-items:center; gap:8px;
    background:var(--green-light); border:1px solid rgba(58,125,68,0.28);
    border-radius:50px; padding:7px 18px;
    font-size:11px; font-family:'Cinzel',serif; letter-spacing:0.14em;
    text-transform:uppercase; color:var(--green-dark); margin-bottom:18px;
  }
  .hero-badge-dot { width:6px; height:6px; border-radius:50%; background:var(--green); animation:pulse 2s ease-in-out infinite; }
  .hero-eyebrow { font-size:16px; font-weight:300; color:var(--text-muted); margin-bottom:6px; }
  .hero h1 {
    font-family:'Cinzel',serif; font-size:clamp(32px,4.5vw,60px);
    font-weight:700; line-height:1.12; color:var(--text); margin-bottom:6px;
  }
  .hero h1 em { font-style:italic; font-family:'Playfair Display',serif; color:var(--green); font-weight:500; }
  .hero-desc { font-size:16px; color:var(--text-muted); line-height:1.8; max-width:500px; font-style:italic; margin:18px 0 34px; font-weight:300; }
  .hero-btns { display:flex; gap:14px; flex-wrap:wrap; margin-bottom:40px; }

  .btn-green {
    background:linear-gradient(135deg,var(--green),var(--green-mid));
    color:var(--white); padding:14px 34px; border-radius:50px; border:none;
    font-family:'Cinzel',serif; font-size:11px; font-weight:700; letter-spacing:0.14em;
    text-transform:uppercase; cursor:pointer; text-decoration:none; display:inline-block;
    box-shadow:0 8px 24px rgba(58,125,68,0.35); transition:transform 0.25s,box-shadow 0.25s;
  }
  .btn-green:hover { transform:translateY(-3px); box-shadow:0 14px 36px rgba(58,125,68,0.45); }
  .btn-ghost {
    background:var(--white); color:var(--green-dark); padding:13px 34px; border-radius:50px;
    border:1.5px solid rgba(58,125,68,0.4); font-family:'Cinzel',serif; font-size:11px;
    font-weight:600; letter-spacing:0.14em; text-transform:uppercase; cursor:pointer;
    text-decoration:none; display:inline-block; transition:background 0.25s,border-color 0.25s,transform 0.25s;
  }
  .btn-ghost:hover { background:var(--green-light); border-color:var(--green); transform:translateY(-3px); }

  .hero-trust { display:flex; gap:28px; flex-wrap:wrap; }
  .trust-item { display:flex; align-items:center; gap:10px; }
  .trust-icon {
    width:38px; height:38px; background:var(--white); border-radius:50%;
    display:flex; align-items:center; justify-content:center; font-size:18px;
    box-shadow:0 4px 14px var(--shadow); flex-shrink:0;
  }
  .trust-num { font-family:'Cinzel',serif; font-size:16px; font-weight:700; color:var(--green-dark); line-height:1; }
  .trust-label { font-size:11px; color:var(--text-muted); letter-spacing:0.05em; }

  .hero-visual { position:relative; display:flex; align-items:center; justify-content:center; animation:fadeIn 1.1s 0.3s ease both; }
  .hero-img-main {
    width:100%; max-width:520px; aspect-ratio:5/4; object-fit:cover;
    border-radius:24px 24px 80px 24px; display:block;
    // box-shadow:0 24px 64px rgba(42,92,50,0.18);
  }
  .hero-float-1 {
    position:absolute; bottom:24px; left:-24px;
    background:var(--white); border-radius:14px; padding:14px 18px;
    box-shadow:0 8px 32px rgba(42,92,50,0.14);
    display:flex; align-items:center; gap:12px;
    border-left:3px solid var(--green);
    animation:floatY 4s ease-in-out infinite;
  }
  .float-icon { font-size:26px; }
  .float-big { font-family:'Cinzel',serif; font-size:15px; font-weight:700; color:var(--green-dark); line-height:1; }
  .float-small { font-size:11px; color:var(--text-muted); margin-top:2px; }
  .hero-float-2 {
    position:absolute; top:20px; right:-16px;
    background:var(--green); border-radius:12px; padding:12px 18px;
    box-shadow:0 8px 24px rgba(58,125,68,0.4); text-align:center;
    animation:floatY 5s 1.5s ease-in-out infinite;
  }
  .f2-num { font-family:'Cinzel',serif; font-size:22px; font-weight:700; color:var(--white); line-height:1; }
  .f2-label { font-size:9px; letter-spacing:0.12em; text-transform:uppercase; color:rgba(255,255,255,0.78); margin-top:3px; }

  /* ── FEATURES GRID ── */
  .feat-wrap { background:var(--white); padding:0 32px; }
  .feat-grid {
    max-width:1280px; margin:0 auto;
    display:grid; grid-template-columns:repeat(4,1fr); gap:0;
    border:1px solid var(--border); border-radius:16px; overflow:hidden;
    box-shadow:0 6px 28px var(--shadow); transform:translateY(-38px);
  }
  .feat-box {
    padding:28px 22px; display:flex; align-items:flex-start; gap:14px;
    border-right:1px solid var(--border); background:var(--white); transition:background 0.25s;
  }
  .feat-box:last-child { border-right:none; }
  .feat-box:hover { background:var(--green-pale); }
  .feat-ico {
    width:48px; height:48px; background:var(--green-light); border-radius:12px;
    display:flex; align-items:center; justify-content:center; font-size:22px; flex-shrink:0;
    transition:background 0.25s,transform 0.3s;
  }
  .feat-box:hover .feat-ico { background:var(--green); transform:scale(1.08); }
  .feat-title { font-family:'Cinzel',serif; font-size:13px; font-weight:600; color:var(--text); margin-bottom:4px; line-height:1.3; }
  .feat-desc { font-size:12.5px; color:var(--text-muted); line-height:1.55; }

  /* ── MARQUEE ── */
  .marquee { background:var(--green); padding:13px 0; overflow:hidden; }
  .marquee-track { display:flex; animation:marqueeScroll 30s linear infinite; white-space:nowrap; }
  .m-item { display:inline-flex; align-items:center; gap:10px; padding:0 32px; font-family:'Cinzel',serif; font-size:11px; letter-spacing:0.16em; text-transform:uppercase; color:rgba(255,255,255,0.9); }
  .m-sep { color:rgba(255,255,255,0.35); font-size:16px; }

  /* ── SECTIONS ── */
  .section { padding:88px 32px; }
  .section-inner { max-width:1280px; margin:0 auto; }
  .stag { font-family:'Cinzel',serif; font-size:10px; letter-spacing:0.22em; text-transform:uppercase; color:var(--green); font-weight:600; display:block; margin-bottom:10px; }
  .stitle { font-family:'Cinzel',serif; font-size:clamp(24px,3.8vw,44px); font-weight:600; color:var(--text); line-height:1.2; }
  .stitle em { font-style:italic; font-family:'Playfair Display',serif; color:var(--green); font-weight:500; }
  .gline { width:52px; height:3px; background:linear-gradient(90deg,var(--green),var(--green-mid)); border-radius:2px; margin:16px 0 44px; }
  .center { text-align:center; }
  .center .gline { margin:16px auto 44px; }

  /* ── ABOUT ── */
  .about-sec { background:var(--off-white); }
  .about-grid { display:grid; grid-template-columns:1fr 1fr; gap:72px; align-items:center; }
  .about-imgs { position:relative; height:490px; }
  .about-main { position:absolute; left:0; top:0; width:72%; height:430px; object-fit:cover; border-radius:20px 20px 20px 64px; box-shadow:0 20px 56px rgba(42,92,50,0.16); }
  .about-sub { position:absolute; right:0; bottom:0; width:52%; height:260px; object-fit:cover; border-radius:18px; box-shadow:0 12px 36px rgba(42,92,50,0.13); border:4px solid var(--white); }
  .about-badge {
    position:absolute; left:50%; top:50%; transform:translate(-50%,-50%);
    background:var(--green); border-radius:50%; width:110px; height:110px;
    display:flex; flex-direction:column; align-items:center; justify-content:center;
    box-shadow:0 10px 30px rgba(58,125,68,0.4); z-index:2; border:4px solid var(--white);
  }
  .ab-num { font-family:'Cinzel',serif; font-size:22px; font-weight:700; color:var(--white); line-height:1; }
  .ab-label { font-size:8px; letter-spacing:0.12em; text-transform:uppercase; color:rgba(255,255,255,0.8); text-align:center; padding:0 6px; margin-top:4px; }
  .about-quote { font-family:'Playfair Display',serif; font-size:clamp(16px,2vw,21px); font-style:italic; color:var(--text); line-height:1.6; border-left:3px solid var(--green); padding-left:20px; margin:22px 0; }
  .about-desc { font-size:15px; color:var(--text-muted); line-height:1.85; font-weight:300; margin-bottom:14px; }
  .checks { display:flex; flex-direction:column; gap:10px; margin:22px 0; }
  .check-row { display:flex; align-items:center; gap:10px; font-size:14px; color:var(--text-mid); font-weight:600; }
  .chk { width:22px; height:22px; background:var(--green-light); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:11px; color:var(--green); flex-shrink:0; font-weight:800; }

  /* ── TREATMENTS ── */
  .treat-sec { background:var(--white); }
  .treat-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
  .treat-card {
    background:var(--white); border:1px solid var(--border); border-radius:16px;
    overflow:hidden; box-shadow:0 4px 20px var(--shadow);
    transition:transform 0.3s,box-shadow 0.3s,border-color 0.3s;
  }
  .treat-card:hover { transform:translateY(-8px); box-shadow:0 20px 52px rgba(42,92,50,0.14); border-color:rgba(58,125,68,0.3); }
  .treat-media { height:190px; overflow:hidden; position:relative; background:var(--green-light); }
  .treat-media img { width:100%; height:100%; object-fit:cover; transition:transform 0.5s; filter:saturate(0.9); }
  .treat-card:hover .treat-media img { transform:scale(1.07); filter:saturate(1.05); }
  .treat-badge { position:absolute; top:12px; left:12px; background:var(--green); color:var(--white); font-family:'Cinzel',serif; font-size:9px; letter-spacing:0.14em; text-transform:uppercase; padding:5px 12px; border-radius:50px; }
  .treat-body { padding:20px 22px 22px; }
  .treat-body h3 { font-family:'Cinzel',serif; font-size:14px; font-weight:600; color:var(--text); margin-bottom:10px; line-height:1.4; }
  .treat-tags { display:flex; flex-wrap:wrap; gap:6px; }
  .ttag { font-size:11px; background:var(--green-pale); border:1px solid rgba(58,125,68,0.18); border-radius:50px; padding:4px 11px; color:var(--green-dark); font-weight:600; }

  /* ── PHILOSOPHY ── */
  .phil-sec { background:var(--green-pale); }
  .phil-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
  .phil-card {
    background:var(--white); border:1px solid var(--border); border-radius:20px;
    padding:40px 32px; text-align:center; box-shadow:0 4px 20px var(--shadow);
    transition:transform 0.3s,box-shadow 0.3s; position:relative; overflow:hidden;
  }
  .phil-card::after { content:''; position:absolute; bottom:0; left:0; right:0; height:3px; background:linear-gradient(90deg,var(--green),var(--green-mid)); transform:scaleX(0); transform-origin:left; transition:transform 0.35s; }
  .phil-card:hover::after { transform:scaleX(1); }
  .phil-card:hover { transform:translateY(-6px); box-shadow:0 20px 48px rgba(42,92,50,0.12); }
  .phil-ico { width:70px; height:70px; background:var(--green-light); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:30px; margin:0 auto 20px; transition:background 0.3s,transform 0.3s; animation:leafDrift 4s ease-in-out infinite; }
  .phil-card:nth-child(2) .phil-ico { animation-delay:-1.4s; }
  .phil-card:nth-child(3) .phil-ico { animation-delay:-2.8s; }
  .phil-card:hover .phil-ico { background:var(--green); transform:scale(1.1); animation:none; }
  .phil-card h3 { font-family:'Cinzel',serif; font-size:16px; font-weight:600; color:var(--text); margin-bottom:12px; }
  .phil-card p { font-size:14px; color:var(--text-muted); line-height:1.75; font-weight:300; }

  /* ── STEPS ── */
  .steps-sec { background:var(--white); }
  .steps-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:0; position:relative; }
  .steps-grid::before { content:''; position:absolute; top:32px; left:10%; right:10%; height:1.5px; background:linear-gradient(90deg,transparent,var(--green),transparent); }
  .step-item { text-align:center; padding:0 20px 32px; position:relative; }
  .step-num {
    width:64px; height:64px; border-radius:50%;
    background:linear-gradient(135deg,var(--green),var(--green-mid));
    color:var(--white); font-family:'Cinzel',serif; font-size:20px; font-weight:700;
    display:flex; align-items:center; justify-content:center; margin:0 auto 18px;
    box-shadow:0 8px 24px rgba(58,125,68,0.3);
    transition:transform 0.3s cubic-bezier(0.34,1.56,0.64,1),box-shadow 0.3s;
    position:relative; z-index:1;
  }
  .step-item:hover .step-num { transform:scale(1.12); box-shadow:0 14px 36px rgba(58,125,68,0.42); }
  .step-item h4 { font-family:'Cinzel',serif; font-size:14px; font-weight:600; color:var(--text); margin-bottom:8px; }
  .step-item p { font-size:13px; color:var(--text-muted); line-height:1.6; font-weight:300; }

  /* ── HEALER ── */
  .healer-sec { background:var(--off-white); }
  .healer-grid { display:grid; grid-template-columns:5fr 7fr; gap:72px; align-items:center; }
  .healer-img-wrap { position:relative; }
  .healer-img { width:100%; aspect-ratio:3/4; object-fit:cover; border-radius:20px 20px 80px 20px; display:block; box-shadow:0 20px 56px rgba(42,92,50,0.15); filter:saturate(0.88); }
  .healer-ribbon {
    position:absolute; bottom:28px; right:-16px;
    background:var(--green); color:var(--white); border-radius:12px; padding:16px 22px;
    text-align:center; box-shadow:0 8px 28px rgba(58,125,68,0.4);
  }
  .hr-num { font-family:'Cinzel',serif; font-size:28px; font-weight:700; line-height:1; }
  .hr-label { font-size:9px; letter-spacing:0.14em; text-transform:uppercase; color:rgba(255,255,255,0.8); margin-top:4px; }
  .healer-name { font-family:'Cinzel',serif; font-size:clamp(22px,3vw,36px); font-weight:700; color:var(--text); margin-bottom:4px; }
  .healer-role { font-size:12px; letter-spacing:0.16em; text-transform:uppercase; color:var(--green); font-weight:600; margin-bottom:18px; }
  .healer-quote { font-family:'Playfair Display',serif; font-size:clamp(15px,2vw,20px); font-style:italic; color:var(--text); border-left:3px solid var(--green); padding-left:18px; margin:14px 0 20px; line-height:1.6; }
  .healer-desc { font-size:15px; color:var(--text-muted); line-height:1.85; font-weight:300; margin-bottom:12px; }
  .h-stats { display:flex; border:1px solid var(--border); border-radius:14px; overflow:hidden; background:var(--white); box-shadow:0 4px 16px var(--shadow); margin-top:28px; }
  .h-stat { flex:1; padding:18px 12px; text-align:center; border-right:1px solid var(--border); }
  .h-stat:last-child { border-right:none; }
  .h-num { font-family:'Cinzel',serif; font-size:22px; font-weight:700; color:var(--green-dark); line-height:1; }
  .h-lbl { font-size:10px; letter-spacing:0.1em; text-transform:uppercase; color:var(--text-muted); margin-top:5px; }

  /* ── WHY US ── */
  .why-sec { background:var(--white); }
  .why-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:22px; }
  .why-card {
    background:var(--off-white); border:1px solid var(--border); border-radius:16px;
    padding:32px 28px; transition:transform 0.3s,box-shadow 0.3s,background 0.3s,border-color 0.3s;
    position:relative; overflow:hidden;
  }
  .why-card::before { content:''; position:absolute; top:0; left:0; right:0; height:3px; background:linear-gradient(90deg,var(--green),var(--green-mid)); transform:scaleX(0); transform-origin:left; transition:transform 0.35s; }
  .why-card:hover::before { transform:scaleX(1); }
  .why-card:hover { transform:translateY(-6px); box-shadow:0 18px 44px rgba(42,92,50,0.1); background:var(--green-pale); border-color:rgba(58,125,68,0.25); }
  .why-ico { width:50px; height:50px; background:var(--green-light); border-radius:14px; display:flex; align-items:center; justify-content:center; font-size:22px; margin-bottom:16px; transition:background 0.3s,transform 0.3s; }
  .why-card:hover .why-ico { background:var(--green); transform:rotate(5deg) scale(1.08); }
  .why-card h4 { font-family:'Cinzel',serif; font-size:14px; font-weight:600; color:var(--text); margin-bottom:8px; }
  .why-card p { font-size:13.5px; color:var(--text-muted); line-height:1.7; font-weight:300; }

  /* ── TESTIMONIALS ── */
  .testi-sec { background:var(--green-pale); }
  .testi-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
  .testi-card { background:var(--white); border-radius:16px; padding:32px 28px; border-top:3px solid var(--green); box-shadow:0 4px 20px var(--shadow); transition:transform 0.3s,box-shadow 0.3s; }
  .testi-card:hover { transform:translateY(-6px); box-shadow:0 18px 44px rgba(42,92,50,0.12); }
  .testi-q { font-family:'Playfair Display',serif; font-size:52px; line-height:0.6; color:var(--green-light); margin-bottom:12px; }
  .testi-stars { color:var(--gold); font-size:14px; margin-bottom:10px; }
  .testi-text { font-size:14.5px; font-style:italic; color:var(--text-muted); line-height:1.75; margin-bottom:20px; font-weight:300; }
  .testi-foot { display:flex; align-items:center; gap:12px; }
  .testi-av { width:42px; height:42px; border-radius:50%; background:linear-gradient(135deg,var(--green-mid),var(--green)); display:flex; align-items:center; justify-content:center; font-family:'Cinzel',serif; font-size:16px; font-weight:600; color:var(--white); flex-shrink:0; }
  .testi-nm { font-family:'Cinzel',serif; font-size:13px; font-weight:600; color:var(--text); }
  .testi-rl { font-size:11px; color:var(--green); margin-top:2px; letter-spacing:0.06em; }


  /* ── RESPONSIVE ── */
  @media(max-width:1024px) {
    .hero-inner { grid-template-columns:1fr 1fr; gap:28px; }
    .feat-grid { grid-template-columns:repeat(2,1fr); }
    .about-grid,.healer-grid { grid-template-columns:1fr; gap:48px; }
    .about-imgs { max-width:480px; }
    .treat-grid { grid-template-columns:repeat(2,1fr); }
    .steps-grid { grid-template-columns:repeat(2,1fr); }
    .steps-grid::before { display:none; }
    .footer-inner { grid-template-columns:1fr 1fr; }
  }
  @media(max-width:768px) {
    .hero-inner { grid-template-columns:1fr; }
    .hero-visual { display:none; }
    .phil-grid,.why-grid,.testi-grid { grid-template-columns:1fr; }
    .treat-grid { grid-template-columns:1fr; }
    .feat-grid { transform:translateY(-20px); grid-template-columns:1fr 1fr; }
    .topbar-right { display:none; }
  }
  @media(max-width:540px) {
    .section { padding:64px 20px; }
    .feat-grid { grid-template-columns:1fr; }
    .steps-grid { grid-template-columns:1fr; }
    .footer-inner { grid-template-columns:1fr; gap:28px; }
    .nav-links { display:none; }
    .healer-grid { grid-template-columns:1fr; gap:40px; }
  }
`;
const features = [
  {
    icon: "🌿",
    title: "Pain Management",
    desc: "Natural therapies designed to help relieve chronic and acute body pain."
  },
  {
    icon: "🧠",
    title: "Nerve Rejuvenation",
    desc: "Therapeutic techniques that support healthy nerve function and recovery."
  },
  {
    icon: "😌",
    title: "Stress Relief",
    desc: "Relaxation therapies that help restore mental calmness and emotional balance."
  },
  {
    icon: "💪",
    title: "Physical Recovery",
    desc: "Support for mobility, flexibility, rehabilitation, and overall wellness."
  }
];
const treatments = [
  {
    cat: "Pain Relief",
    title: "Pain Relief Therapy",
    img: "https://www.aryavaidyasala.com/wp-content/uploads/2025/10/detoxify-body-with-ayurvedic-treatment.jpg",
    tags: ["Back Pain","Neck Pain","Shoulder Stiffness","Knee Pain","Joint Pain","Sciatica"]
  },
  {
    cat: "Recovery",
    title: "Sports Injury & Rehabilitation",
    img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600",
    tags: ["Muscle Strain","Ligament Injury","Body Stiffness","Flexibility","Recovery"]
  },
  {
    cat: "Wellness",
    title: "Stress & Wellness Therapy",
    img: "https://www.northumberlandheights.com/wp-content/uploads/2025/11/The-Transformative-Power-of-Ayurvedic-Spa-Treatments-Why-Every-Canadian-Needs-This-Ancient-Wellness-Practice.jpg",
    tags: ["Stress Relief","Better Sleep","Mental Relaxation","Energy Balance"]
  },
  {
    cat: "Rejuvenation",
    title: "Rejuvenation Therapy",
    img: "https://soulvacation.in/wp-content/uploads/2025/03/Ayurvedic-Rejuvenation-Therapies.png",
    tags: ["Herbal Oils","Vitality","Circulation","Body Revitalization"]
  },
  {
    cat: "Nerve Care",
    title: "Nerve Support Therapy",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRTSJ3Y3NLLxcgWjgpOObLgdjlqIlcMwO-Pw&s",
    tags: ["Nerve Recovery","Mobility","Body Balance","Coordination"]
  },
  {
    cat: "Holistic Care",
    title: "Holistic Wellness Therapy",
    img: "data:image/jpeg;base64,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",
    tags: ["Natural Healing","Mind-Body Balance","Wellness","Energy Restoration"]
  }
];
const philCards = [
  {
    icon: "🌿",
    title: "Body Wellness",
    desc: "Support healthy muscles, joints, flexibility, and circulation through traditional therapeutic techniques."
  },
  {
    icon: "✨",
    title: "Energy Balance",
    desc: "Stimulate vital energy pathways and marma points to encourage natural healing and restoration."
  },
  {
    icon: "🕊️",
    title: "Mind Relaxation",
    desc: "Promote stress relief, calmness, and overall mental well-being through holistic wellness practices."
  }
];
const steps = [
  {
    n: "01",
    title: "Consultation",
    desc: "Understand your health concerns and wellness goals."
  },
  {
    n: "02",
    title: "Assessment",
    desc: "Evaluate body condition, energy balance, and therapy requirements."
  },
  {
    n: "03",
    title: "Therapy Session",
    desc: "Apply specialized marma techniques and herbal therapies."
  },
  {
    n: "04",
    title: "Recovery & Wellness",
    desc: "Support long-term health, flexibility, and overall vitality."
  }
];
const whyCards = [
  {
    icon: "🌿",
    title: "Traditional Healing",
    desc: "Authentic therapy methods inspired by generations of healing wisdom."
  },
  {
    icon: "👤",
    title: "Personalized Sessions",
    desc: "Every treatment plan is customized according to individual wellness requirements."
  },
  {
    icon: "🪔",
    title: "Natural Herbal Therapies",
    desc: "Traditional techniques combined with herbal oil therapies."
  },
  {
    icon: "✨",
    title: "Holistic Wellness",
    desc: "Care designed to support both physical and mental well-being."
  },
  {
    icon: "🏆",
    title: "Experienced Care",
    desc: "Guided by trained professionals experienced in traditional wellness therapies."
  },
  {
    icon: "🧘",
    title: "Healing Environment",
    desc: "A peaceful atmosphere designed to encourage relaxation and recovery."
  }
];
const testimonials = [
  {
    init: "1",
    name: "Pain Relief",
    role: "Therapy Benefit",
    text: "Helps reduce body pain and stiffness while supporting natural mobility and flexibility."
  },
  {
    init: "2",
    name: "Body Rejuvenation",
    role: "Therapy Benefit",
    text: "Promotes relaxation, improved circulation, flexibility, and overall wellness."
  },
  {
    init: "3",
    name: "Stress Relief",
    role: "Therapy Benefit",
    text: "Encourages mental calmness, recovery, and balanced well-being."
  }
];
 import Random from "../components/Random"
export default function Home() {

  return (
    <>
      <style>{FONTS + CSS}</style>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-circle" />
        <div className="hero-bg-ring" />
        <div className="hero-inner">
         <div className="hero-text">
  <div className="hero-badge">
    <span className="hero-badge-dot" />
    Traditional Kalari Nadi Marma Therapy
  </div>

  <p className="hero-eyebrow">Welcome to</p>

  <h1>
    <em>Kalari Nadi</em> Marma Therapy
  </h1>

  <p className="hero-desc">
    Experience the ancient healing wisdom of Ayurveda combined with
    traditional Kalaripayattu therapeutic practices. Restore balance to
    your body, mind, and energy system through specialized marma point
    therapy, herbal oil treatments, muscle alignment techniques, and
    natural healing methods passed down through generations.
  </p>

  <div className="hero-btns">
    <a href="/contact" className="btn-green">
      Book Your Consultation
    </a>

    <a href="/treatment" className="btn-ghost">
      Explore Therapies
    </a>
  </div>

  <div className="hero-trust">
    {[
      {
        icon: "🌿",
        num: "100%",
        label: "Natural Healing",
      },
      {
        icon: "💆",
        num: "4+",
        label: "Specialized Therapies",
      },
      {
        icon: "✨",
        num: "1",
        label: "Holistic Wellness Goal",
      },
    ].map((t, i) => (
      <div className="trust-item" key={i}>
        <div className="trust-icon">{t.icon}</div>
        <div>
          <div className="trust-num">{t.num}</div>
          <div className="trust-label">{t.label}</div>
        </div>
      </div>
    ))}
  </div>
</div>
          <div className="hero-visual">
            <img className="hero-img-main" src="https://png.pngtree.com/png-vector/20250405/ourmid/pngtree-a-mix-of-cinnamon-dried-ginger-black-cardamom-javitri-long-pepper-png-image_15928176.png" alt="Ayurvedic herbs" />
          <div className="hero-float-1">
  <span className="float-icon">🌿</span>
  <div>
    <div className="float-big">Natural Healing</div>
    <div className="float-small">
      Traditional Marma Therapy
    </div>
  </div>
</div>
           <div className="hero-float-2">
  <div className="f2-num">100%</div>
  <div className="f2-label">Holistic Wellness</div>
</div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <div className="feat-wrap">
        <div className="feat-grid">
          {features.map((f,i)=>(
            <div className="feat-box" key={i}>
              <div className="feat-ico">{f.icon}</div>
              <div><div className="feat-title">{f.title}</div><div className="feat-desc">{f.desc}</div></div>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section className="section about-sec">
        <div className="section-inner">
          <div className="about-grid">
            <div className="about-imgs">
              <img className="about-main" src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=700" alt="Ayurveda" />
              <img className="about-sub" src="https://static.vecteezy.com/system/resources/thumbnails/075/207/262/small/a-mortar-and-mortar-with-spices-and-herbs-on-a-wooden-table-photo.jpg" alt="Herbs" />
              <div className="about-badge"><div className="ab-num">18+</div><div className="ab-label">Years of Healing</div></div>
            </div>
            <div>
              <span className="stag">About Kalari Nadi Marma Therapy</span>
              <h2 className="stitle">Ancient Healing Wisdom<br />for <em> Modern Wellness</em></h2>
              <div className="gline" />
              <blockquote className="about-quote">"The body has the power to heal itself — the purpose of treatment is to awaken that power."</blockquote>
              <p className="about-desc">At Ever Ayur Life, we practice <strong>Kalaripayattu Nadi Marma Therapy</strong> — Kerala's sacred healing tradition that activates the body's 107 vital energy points to restore natural balance and eliminate pain.</p>
              <p className="about-desc">Our mission: help you live a pain-free, vibrant life without medicines or surgery. Every session is personalized, treating not just symptoms but the whole person.</p>
              <div className="checks">
                {["100% Drug-Free Treatment","No Surgery Approach","Personalized Therapy for Every Individual","Treating the Person, Not Just the Disease"].map((c,i)=>(
                  <div className="check-row" key={i}><div className="chk">✓</div>{c}</div>
                ))}
              </div>
              <a href="/about" className="btn-green" style={{marginTop:"8px"}}>Learn More About Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* TREATMENTS */}
      <section className="section treat-sec">
        <div className="section-inner">
          <div className="center"><span className="stag">What We Heal</span><h2 className="stitle">Ayurvedic <em>Treatments</em> We Offer</h2><div className="gline" /></div>
          <div className="treat-grid">
            {treatments.map((t,i)=>(
              <div className="treat-card" key={i}>
                <div className="treat-media"><img src={t.img} alt={t.title} /><div className="treat-badge">{t.cat}</div></div>
                <div className="treat-body">
                  <h3>{t.title}</h3>
                  <div className="treat-tags">{t.tags.map((tag,j)=><span className="ttag" key={j}>{tag}</span>)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section phil-sec">
        <div className="section-inner">
          <div className="center"><span className="stag">Our Core Philosophy</span><h2 className="stitle">Three Pillars of <em>True Healing</em></h2><div className="gline" /></div>
          <div className="phil-grid">
            {philCards.map((p,i)=>(
              <div className="phil-card" key={i}>
                <div className="phil-ico">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="section steps-sec">
        <div className="section-inner">
          <div className="center"><span className="stag">How It Works</span><h2 className="stitle">Our <em>4-Step</em> Healing Process</h2><div className="gline" /></div>
          <div className="steps-grid">
            {steps.map((s,i)=>(
              <div className="step-item" key={i}>
                <div className="step-num">{s.n}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HEALER */}
      <section className="section healer-sec">
        <div className="section-inner">
          <div className="healer-grid">
            <div className="healer-img-wrap">
              <img className="healer-img" src="https://trinaya.co.in/images/Prishtavasthy.jpg" alt="Healer" />
              <div className="healer-ribbon"><div className="hr-num">6000+</div><div className="hr-label">Patients Healed</div></div>
            </div>
            <div>
              <span className="stag">Meet Your Healer</span>
              <h2 className="healer-name">Unni Gurukkal</h2>
              <div className="healer-role">Master · Kalaripayattu Nadi Marma Therapy</div>
              <blockquote className="healer-quote">"The body has the power to heal itself — the purpose of treatment is to awaken that power."</blockquote>
              <p className="healer-desc">With 18+ years of dedicated practice, Unni Gurukkal has mastered Kerala's ancient healing arts, transforming 6,000+ lives across conditions that conventional medicine had declared untreatable.</p>
              <p className="healer-desc">Each patient receives individualized attention through traditional Nadi (pulse) diagnosis, with treatment plans uniquely crafted for their constitution and condition.</p>
              <div className="h-stats">
                {[
  { num:"100%", lbl:"Natural Care" },
  { num:"4+", lbl:"Therapies" },
  { num:"1", lbl:"Wellness Goal" },
  { num:"∞", lbl:"Care & Support" }
].map((s,i)=>(
                  <div className="h-stat" key={i}><div className="h-num">{s.num}</div><div className="h-lbl">{s.lbl}</div></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section why-sec">
        <div className="section-inner">
          <div className="center"><span className="stag">Why Choose Us</span><h2 className="stitle">The Ever Ayur Life <em>Difference</em></h2><div className="gline" /></div>
          <div className="why-grid">
            {whyCards.map((w,i)=>(
              <div className="why-card" key={i}>
                <div className="why-ico">{w.icon}</div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section testi-sec">
        <div className="section-inner">
          <div className="center"><span className="stag">Patient Stories</span><h2 className="stitle">Real Healing, <em>Real Lives</em></h2><div className="gline" /></div>
          <div className="testi-grid">
            {testimonials.map((t,i)=>(
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

    <Random/>
    </>
  );
}
