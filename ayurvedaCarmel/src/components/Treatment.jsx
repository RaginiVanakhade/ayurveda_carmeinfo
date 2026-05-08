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

  @keyframes marquee    { from{transform:translateX(0)} to{transform:translateX(-50%)} }
  @keyframes spin       { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
  @keyframes float      { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
  @keyframes pulse      { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.4)} }
  @keyframes fadeUp     { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
  @keyframes lineGrow   { from{width:0} to{width:200px} }
  @keyframes glowPulse  { 0%,100%{box-shadow:0 0 0 0 rgba(90,90,42,0)} 50%{box-shadow:0 0 0 14px rgba(90,90,42,0.07)} }
  @keyframes shimmer    { 0%{background-position:-200% 0} 100%{background-position:200% 0} }

  /* ── MARQUEE ── */
  .mq { background:var(--green-dark); padding:11px 0; overflow:hidden; }
  .mq-track { display:flex; animation:marquee 32s linear infinite; white-space:nowrap; }
  .mq-item { display:inline-flex; align-items:center; gap:10px; padding:0 28px; font-family:'Cinzel',serif; font-size:10px; letter-spacing:0.18em; text-transform:uppercase; color:rgba(255,255,255,0.7); }
  .mq-leaf { width:5px; height:5px; border-radius:50%; background:var(--green-light); opacity:0.5; }

  /* ── FULL-BLEED HERO ── */
  .treat-hero {
    min-height:90vh; position:relative; overflow:hidden;
    display:flex; align-items:center;
    background:var(--green-dark);
  }
  .th-bg { position:absolute; inset:0; background:url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1600') center/cover no-repeat; opacity:0.14; }
  .th-ring1 { position:absolute; width:800px; height:800px; border-radius:50%; border:1px solid rgba(255,255,255,0.04); top:50%; left:50%; transform:translate(-50%,-50%); animation:spin 90s linear infinite; pointer-events:none; }
  .th-ring2 { position:absolute; width:560px; height:560px; border-radius:50%; border:1px solid rgba(255,255,255,0.06); top:50%; left:50%; transform:translate(-50%,-50%); animation:spin 60s linear infinite reverse; pointer-events:none; }
  .th-ring3 { position:absolute; width:360px; height:360px; border-radius:50%; border:1px solid rgba(255,255,255,0.09); top:50%; left:50%; transform:translate(-50%,-50%); animation:spin 38s linear infinite; pointer-events:none; }

  .th-inner { max-width:1280px; margin:0 auto; padding:80px 32px; display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:center; width:100%; position:relative; z-index:1; }
  .th-text { animation:fadeUp 0.9s ease both; }
  .th-eyebrow { font-family:'Cinzel',serif; font-size:10px; letter-spacing:0.28em; text-transform:uppercase; color:rgba(255,255,255,0.4); display:block; margin-bottom:20px; }
  .th-title { font-family:'Cinzel',serif; font-size:clamp(38px,5.5vw,72px); font-weight:700; color:var(--white); line-height:1.05; margin-bottom:12px; }
  .th-title em { display:block; font-style:italic; font-family:'Playfair Display',serif; color:var(--green-light); font-weight:400; font-size:0.82em; }
  .th-line { width:0; height:1px; background:linear-gradient(90deg,rgba(255,255,255,0.4),transparent); margin:24px 0; animation:lineGrow 1.2s 0.4s ease both; }
  .th-desc { font-size:16px; color:rgba(255,255,255,0.55); font-style:italic; font-weight:300; line-height:1.85; font-family:'Playfair Display',serif; max-width:480px; margin-bottom:36px; }
  .th-badges { display:flex; flex-wrap:wrap; gap:10px; }
  .th-badge { display:flex; align-items:center; gap:7px; background:rgba(255,255,255,0.07); border:1px solid rgba(255,255,255,0.12); border-radius:50px; padding:8px 16px; font-family:'Cinzel',serif; font-size:9.5px; letter-spacing:0.12em; text-transform:uppercase; color:rgba(255,255,255,0.65); }
  .th-badge-dot { width:6px; height:6px; border-radius:50%; background:var(--green-light); animation:pulse 2.2s ease-in-out infinite; }

  .th-visual { position:relative; display:flex; align-items:center; justify-content:center; animation:fadeUp 1s 0.2s ease both; }
  .th-img { width:100%; max-width:520px; aspect-ratio:4/5; object-fit:cover; border-radius:20px 20px 80px 20px; display:block; filter:saturate(0.8); box-shadow:0 28px 72px rgba(0,0,0,0.35); }
  .th-float-1 { position:absolute; bottom:28px; left:-20px; background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.15); border-radius:14px; padding:14px 20px; text-align:center; animation:float 4s ease-in-out infinite; }
  .tf-num { font-family:'Cinzel',serif; font-size:28px; font-weight:700; color:var(--white); line-height:1; }
  .tf-lbl { font-size:9px; letter-spacing:0.14em; text-transform:uppercase; color:rgba(255,255,255,0.6); margin-top:3px; }
  .th-float-2 { position:absolute; top:28px; right:-16px; background:var(--green-light); border-radius:12px; padding:12px 18px; animation:float 5s 1.5s ease-in-out infinite; }
  .tf2-ico { font-size:24px; }
  .tf2-lbl { font-family:'Cinzel',serif; font-size:9px; letter-spacing:0.12em; text-transform:uppercase; color:var(--green-dark); margin-top:4px; font-weight:700; }

  /* ── STATS STRIP ── */
  .stats-strip { background:var(--white); }
  .stats-row { max-width:1280px; margin:0 auto; display:grid; grid-template-columns:repeat(4,1fr); border-left:1px solid var(--border); transform:none; }
  .stat-box { padding:36px 28px; border-right:1px solid var(--border); border-bottom:1px solid var(--border); border-top:1px solid var(--border); transition:background 0.3s; }
  .stat-box:hover { background:var(--green-pale); }
  .stat-ico { font-size:24px; margin-bottom:10px; display:block; }
  .stat-num { font-family:'Cinzel',serif; font-size:clamp(26px,3.5vw,40px); font-weight:700; color:var(--green-dark); line-height:1; }
  .stat-lbl { font-size:11px; letter-spacing:0.1em; text-transform:uppercase; color:var(--text-muted); margin-top:5px; }

  /* ── SECTION SHARED ── */
  .sec { padding:96px 32px; }
  .sec-inner { max-width:1280px; margin:0 auto; }
  .stag { font-family:'Cinzel',serif; font-size:10px; letter-spacing:0.22em; text-transform:uppercase; color:var(--green); font-weight:600; display:block; margin-bottom:10px; }
  .stitle { font-family:'Cinzel',serif; font-size:clamp(24px,3.8vw,44px); font-weight:600; color:var(--text); line-height:1.2; }
  .stitle em { font-style:italic; font-family:'Playfair Display',serif; color:var(--green); font-weight:500; }
  .gline { width:52px; height:3px; background:linear-gradient(90deg,var(--green),var(--green-mid)); border-radius:2px; margin:16px 0 48px; }
  .center { text-align:center; }
  .center .gline { margin:16px auto 48px; }

  /* ── SPECIAL FOCUS (SURGERY ALT) ── */
  .special-sec { background:var(--green-dark); padding:80px 32px; position:relative; overflow:hidden; }
  .special-sec::before { content:''; position:absolute; right:-100px; top:-100px; width:500px; height:500px; border-radius:50%; border:1px solid rgba(255,255,255,0.04); animation:spin 60s linear infinite; pointer-events:none; }
  .special-inner { max-width:1280px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:72px; align-items:center; position:relative; z-index:1; }
  .sp-tag { font-family:'Cinzel',serif; font-size:10px; letter-spacing:0.24em; text-transform:uppercase; color:rgba(255,255,255,0.4); display:block; margin-bottom:14px; }
  .sp-title { font-family:'Cinzel',serif; font-size:clamp(24px,3.5vw,42px); font-weight:700; color:var(--white); line-height:1.15; margin-bottom:8px; }
  .sp-title em { font-style:italic; font-family:'Playfair Display',serif; color:var(--green-light); font-weight:400; }
  .sp-line { width:44px; height:2px; background:linear-gradient(90deg,rgba(255,255,255,0.4),rgba(255,255,255,0.1)); border-radius:2px; margin:18px 0 26px; }
  .sp-desc { font-size:15px; color:rgba(255,255,255,0.58); line-height:1.88; font-weight:300; margin-bottom:24px; font-style:italic; font-family:'Playfair Display',serif; }
  .sp-items { display:flex; flex-direction:column; gap:14px; }
  .sp-item { display:flex; align-items:center; gap:14px; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); border-radius:12px; padding:14px 18px; transition:background 0.3s; }
  .sp-item:hover { background:rgba(255,255,255,0.11); }
  .sp-bullet { width:36px; height:36px; background:var(--green-light); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:16px; flex-shrink:0; }
  .sp-text { font-family:'Cinzel',serif; font-size:13px; font-weight:600; color:rgba(255,255,255,0.85); }
  .sp-visual { position:relative; }
  .sp-img { width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:18px; display:block; filter:saturate(0.75); opacity:0.85; }
  .sp-badge { position:absolute; bottom:-16px; right:-16px; background:var(--green-light); border-radius:14px; padding:18px 22px; text-align:center; border:4px solid var(--green-dark); animation:float 4s ease-in-out infinite; }
  .spb-num { font-family:'Cinzel',serif; font-size:24px; font-weight:700; color:var(--green-dark); line-height:1; }
  .spb-lbl { font-size:9px; letter-spacing:0.12em; text-transform:uppercase; color:var(--green); margin-top:3px; font-weight:700; }

  /* ── MAIN TREATMENT GRID ── */
  .treats-sec { background:var(--off-white); }
  .treats-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
  .treat-card {
    background:var(--white); border:1px solid var(--border); border-radius:20px;
    overflow:hidden; box-shadow:0 4px 20px var(--shadow);
    transition:transform 0.35s,box-shadow 0.35s,border-color 0.35s;
    position:relative;
  }
  .treat-card:hover { transform:translateY(-10px); box-shadow:0 24px 60px rgba(42,92,50,0.15); border-color:rgba(90,90,42,0.28); }
  .treat-card-media { height:210px; overflow:hidden; position:relative; }
  .treat-card-media img { width:100%; height:100%; object-fit:cover; filter:saturate(0.82); transition:transform 0.6s,filter 0.5s; }
  .treat-card:hover .treat-card-media img { transform:scale(1.08); filter:saturate(1.05); }
  .tc-cat { position:absolute; top:14px; left:14px; background:var(--green-dark); color:var(--white); font-family:'Cinzel',serif; font-size:9px; letter-spacing:0.14em; text-transform:uppercase; padding:5px 14px; border-radius:50px; z-index:1; }
  .tc-num { position:absolute; top:14px; right:14px; background:rgba(255,255,255,0.15); backdrop-filter:blur(6px); color:var(--white); font-family:'Cinzel',serif; font-size:10px; font-weight:700; padding:5px 12px; border-radius:50px; border:1px solid rgba(255,255,255,0.2); z-index:1; }
  .treat-card-body { padding:22px 24px 26px; }
  .tc-ico { font-size:28px; margin-bottom:12px; display:block; }
  .tc-title { font-family:'Cinzel',serif; font-size:15px; font-weight:600; color:var(--text); margin-bottom:10px; line-height:1.3; }
  .tc-desc { font-size:13.5px; color:var(--text-muted); line-height:1.75; font-weight:300; margin-bottom:16px; }
  .tc-pills { display:flex; flex-wrap:wrap; gap:7px; }
  .tc-pill { font-size:11.5px; background:var(--green-pale); border:1px solid rgba(90,90,42,0.16); border-radius:50px; padding:5px 13px; color:var(--green-dark); font-weight:600; transition:background 0.2s; }
  .treat-card:hover .tc-pill { background:var(--green-light); }

  /* ── METHODOLOGY ── */
  .method-sec { background:var(--white); }
  .method-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:0; border:1px solid var(--border); border-radius:20px; overflow:hidden; box-shadow:0 8px 32px var(--shadow); }
  .method-card { padding:48px 36px; border-right:1px solid var(--border); position:relative; overflow:hidden; transition:background 0.3s; }
  .method-card:last-child { border-right:none; }
  .method-card:hover { background:var(--green-pale); }
  .method-card::after { content:''; position:absolute; top:0; left:0; right:0; height:3px; background:linear-gradient(90deg,var(--green),var(--green-mid)); transform:scaleX(0); transform-origin:left; transition:transform 0.4s; }
  .method-card:hover::after { transform:scaleX(1); }
  .mc-bg-num { position:absolute; bottom:-12px; right:12px; font-family:'Cinzel',serif; font-size:100px; font-weight:700; color:rgba(59,59,26,0.04); line-height:1; pointer-events:none; user-select:none; }
  .mc-num-badge { width:52px; height:52px; border-radius:50%; background:linear-gradient(135deg,var(--green-dark),var(--green)); color:var(--white); font-family:'Cinzel',serif; font-size:16px; font-weight:700; display:flex; align-items:center; justify-content:center; margin-bottom:20px; animation:glowPulse 3.5s ease-in-out infinite; }
  .method-card:nth-child(2) .mc-num-badge { animation-delay:-1.2s; }
  .method-card:nth-child(3) .mc-num-badge { animation-delay:-2.4s; }
  .mc-ico { font-size:42px; display:block; margin-bottom:16px; animation:float 4s ease-in-out infinite; }
  .method-card:nth-child(2) .mc-ico { animation-delay:-1.3s; }
  .method-card:nth-child(3) .mc-ico { animation-delay:-2.6s; }
  .mc-title { font-family:'Cinzel',serif; font-size:20px; font-weight:600; color:var(--text); margin-bottom:14px; }
  .mc-desc { font-size:14.5px; color:var(--text-muted); line-height:1.82; font-weight:300; margin-bottom:18px; }
  .mc-points { display:flex; flex-direction:column; gap:9px; }
  .mc-point { display:flex; align-items:center; gap:9px; font-size:13px; color:var(--text-mid); font-weight:600; }
  .mc-chk { width:20px; height:20px; background:var(--green-light); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:10px; color:var(--green); flex-shrink:0; font-weight:800; }

  /* ── HOW IT WORKS STEPS ── */
  .steps-sec { background:var(--green-pale); }
  .steps-inner { max-width:1280px; margin:0 auto; padding:0; }
  .steps-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:0; position:relative; margin-top:52px; }
  .steps-grid::before { content:''; position:absolute; top:38px; left:12%; right:12%; height:1px; background:linear-gradient(90deg,transparent,var(--green),transparent); }
  .step-item { text-align:center; padding:0 20px 40px; }
  .step-num { width:76px; height:76px; border-radius:50%; background:linear-gradient(135deg,var(--green-dark),var(--green)); color:var(--white); font-family:'Cinzel',serif; font-size:22px; font-weight:700; display:flex; align-items:center; justify-content:center; margin:0 auto 22px; box-shadow:0 8px 28px rgba(59,59,26,0.28); position:relative; z-index:1; transition:transform 0.3s cubic-bezier(0.34,1.56,0.64,1),box-shadow 0.3s; }
  .step-item:hover .step-num { transform:scale(1.12); box-shadow:0 14px 40px rgba(59,59,26,0.38); }
  .step-ico { font-size:28px; display:block; margin-bottom:14px; }
  .step-item h4 { font-family:'Cinzel',serif; font-size:14px; font-weight:600; color:var(--text); margin-bottom:10px; }
  .step-item p { font-size:13px; color:var(--text-muted); line-height:1.7; font-weight:300; }

  /* ── WHY US STRIP ── */
  .why-sec { background:var(--white); }
  .why-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
  .why-card {
    background:var(--off-white); border:1px solid var(--border); border-radius:16px;
    padding:32px 28px; transition:transform 0.3s,box-shadow 0.3s,background 0.3s,border-color 0.3s;
    position:relative; overflow:hidden;
  }
  .why-card::before { content:''; position:absolute; top:0; left:0; right:0; height:3px; background:linear-gradient(90deg,var(--green),var(--green-mid)); transform:scaleX(0); transform-origin:left; transition:transform 0.35s; }
  .why-card:hover::before { transform:scaleX(1); }
  .why-card:hover { transform:translateY(-6px); box-shadow:0 18px 44px rgba(42,92,50,0.1); background:var(--green-pale); border-color:rgba(90,90,42,0.22); }
  .why-ico { width:52px; height:52px; background:var(--green-light); border-radius:14px; display:flex; align-items:center; justify-content:center; font-size:22px; margin-bottom:16px; transition:background 0.3s,transform 0.3s; }
  .why-card:hover .why-ico { background:var(--green); transform:rotate(5deg) scale(1.08); }
  .why-card h4 { font-family:'Cinzel',serif; font-size:14px; font-weight:600; color:var(--text); margin-bottom:8px; }
  .why-card p { font-size:13.5px; color:var(--text-muted); line-height:1.72; font-weight:300; }

  /* ── TESTIMONIALS ── */
  .testi-sec { background:var(--green-pale); }
  .testi-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:22px; }
  .testi-card { background:var(--white); border-radius:18px; padding:32px 28px; border-top:3px solid var(--green); box-shadow:0 4px 20px var(--shadow); transition:transform 0.3s,box-shadow 0.3s; }
  .testi-card:hover { transform:translateY(-6px); box-shadow:0 20px 48px rgba(42,92,50,0.12); }
  .testi-q { font-family:'Playfair Display',serif; font-size:60px; line-height:0.6; color:var(--green-light); margin-bottom:12px; }
  .testi-stars { color:var(--green-mid); font-size:14px; margin-bottom:12px; }
  .testi-text { font-size:14.5px; font-style:italic; color:var(--text-muted); line-height:1.78; margin-bottom:22px; font-weight:300; }
  .testi-foot { display:flex; align-items:center; gap:12px; }
  .testi-av { width:44px; height:44px; border-radius:50%; background:linear-gradient(135deg,var(--green-mid),var(--green)); display:flex; align-items:center; justify-content:center; font-family:'Cinzel',serif; font-size:17px; font-weight:600; color:var(--white); flex-shrink:0; }
  .testi-nm { font-family:'Cinzel',serif; font-size:13px; font-weight:600; color:var(--text); }
  .testi-rl { font-size:11px; color:var(--green); margin-top:2px; letter-spacing:0.06em; }

  /* ── QUOTE BANNER ── */
  .quote-sec { background:var(--green-dark); padding:80px 32px; position:relative; overflow:hidden; }
  .qs-ring { position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); width:700px; height:700px; border-radius:50%; border:1px solid rgba(255,255,255,0.04); animation:spin 80s linear infinite; pointer-events:none; }
  .qs-inner { max-width:800px; margin:0 auto; text-align:center; position:relative; z-index:1; }
  .qs-mark { font-family:'Playfair Display',serif; font-size:110px; line-height:0.6; color:rgba(255,255,255,0.07); display:block; margin-bottom:20px; }
  .qs-text { font-family:'Playfair Display',serif; font-size:clamp(19px,2.6vw,28px); font-style:italic; color:var(--white); line-height:1.65; margin-bottom:30px; }
  .qs-attr { display:flex; align-items:center; justify-content:center; gap:14px; }
  .qs-line { width:40px; height:1px; background:rgba(255,255,255,0.22); }
  .qs-name { font-family:'Cinzel',serif; font-size:11px; letter-spacing:0.14em; text-transform:uppercase; color:rgba(255,255,255,0.38); }

  /* ── CTA ── */
  .cta-sec { background:var(--off-white); padding:96px 32px; }
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
  .cf-num { font-family:'Cinzel',serif; font-size:22px; font-weight:700; color:var(--white); }
  .cf-lbl { font-size:9px; letter-spacing:0.14em; text-transform:uppercase; color:rgba(255,255,255,0.6); margin-top:3px; }

  /* ── RESPONSIVE ── */
  @media(max-width:1100px){
    .th-inner { grid-template-columns:1fr; }
    .th-visual { display:none; }
    .special-inner { grid-template-columns:1fr; }
    .sp-visual { display:none; }
    .treats-grid { grid-template-columns:repeat(2,1fr); }
    .method-grid { grid-template-columns:1fr; }
    .method-card { border-right:none; border-bottom:1px solid var(--border); }
    .method-card:last-child { border-bottom:none; }
    .cta-card { grid-template-columns:1fr; }
    .cta-img { height:240px; }
    .stats-row { grid-template-columns:repeat(2,1fr); }
  }
  @media(max-width:768px){
    .treats-grid { grid-template-columns:1fr; }
    .steps-grid { grid-template-columns:repeat(2,1fr); }
    .steps-grid::before { display:none; }
    .testi-grid { grid-template-columns:1fr; }
    .why-grid { grid-template-columns:1fr 1fr; }
  }
  @media(max-width:540px){
    .sec { padding:64px 20px; }
    .steps-grid { grid-template-columns:1fr; }
    .why-grid { grid-template-columns:1fr; }
    .cta-text { padding:44px 28px; }
    .stats-row { grid-template-columns:1fr 1fr; }
  }
`;

const mqItems = ["Treatments","Marma Therapy","Drug-Free Healing","Pain Care","Joint Health","Neurology","Women's Health","No Surgery","6000+ Healed","Kalaripayattu","Kerala Tradition","Pranayama","Yoga"];

const treatCards = [
  {
    cat:"Pain Care", num:"6 conditions", ico:"🦴",
    img:"https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=700",
    title:"Pain & Musculoskeletal Care",
    desc:"Chronic and acute pain conditions rooted in structural imbalance, nerve tension, or muscular dysfunction — addressed at the source through precise Marma activation.",
    pills:["Chronic & Acute Body Pain","Neck Pain / Cervical Spondylosis","Frozen Shoulder","Back Pain / Spine Issues","Hip Pain / Arm Pain","Compression Fracture"],
  },
  {
    cat:"Joint Health", num:"5 conditions", ico:"🦵",
    img:"https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=700",
    title:"Degenerative Conditions",
    desc:"Progressive joint and bone degeneration — conditions often deemed irreversible — restored through energy reactivation and structured natural therapy.",
    pills:["Osteoarthritis","Osteoporosis","Rheumatoid Arthritis","Joint Pain & Stiffness","Walking Imbalance"],
  },
  {
    cat:"Neurology", num:"4 conditions", ico:"🧠",
    img:"https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=700",
    title:"Nerve & Neurological Disorders",
    desc:"Nerve compression, neurological degeneration, and post-stroke recovery — Marma therapy's documented impact on neurological pathways makes these highly treatable.",
    pills:["Nerve Compression Issues","Carpal Tunnel Syndrome","Parkinson's Disease","Stroke / Hemiplegia"],
  },
  {
    cat:"Women's Health", num:"3 conditions", ico:"🌸",
    img:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700",
    title:"Women's Health & Hormonal Wellness",
    desc:"Hormonal and menstrual imbalances treated through targeted Marma points that directly regulate the endocrine system and restore natural cycle rhythm.",
    pills:["Menstrual Disorders","Painful Periods","Irregular Bleeding"],
  },
  {
    cat:"General Health", num:"6 conditions", ico:"💚",
    img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700",
    title:"General Health Conditions",
    desc:"Everyday conditions that erode quality of life — from persistent migraines to age-related weakness — resolved through holistic constitutional treatment.",
    pills:["Headache / Migraine","Burning Sensation","Limb Pain (Hands & Legs)","Age-related Weakness","Difficulty in Walking","Knee Pain & Swelling"],
  },
  {
    cat:"Mind & Vitality", num:"2 conditions", ico:"🌿",
    img:"https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=700",
    title:"Vitality & Mental Wellness",
    desc:"Depression and erectile dysfunction — conditions with deep psycho-physical roots — treated through the combined power of Marma, Pranayama, and Yoga.",
    pills:["Erectile Dysfunction","Depression"],
  },
];

const methods = [
  {
    n:"01", ico:"✋",
    title:"Marma Therapy",
    desc:"The cornerstone of every treatment at Ever Ayur Life. Marma Therapy precisely activates 107 vital energy points — junctions of prana in the body — to release blockages, restore natural flow, and reawaken the body's own healing intelligence without any medicines.",
    points:["107 Vital Energy Points","Drug-Free & Non-Invasive","Rooted in Kalaripayattu Tradition"],
  },
  {
    n:"02", ico:"🧘",
    title:"Yoga",
    desc:"Not fitness yoga — therapeutic yoga. Individually prescribed posture sequences that restore structural balance, improve flexibility, decompress compressed joints, and stimulate specific healing pathways. Every sequence is uniquely calibrated to the patient's constitution and condition.",
    points:["Individually Prescribed Sequences","Structural Realignment","Healing Pathway Activation"],
  },
  {
    n:"03", ico:"💨",
    title:"Pranayama",
    desc:"Breath is the bridge between body and mind. Ancient Pranayama protocols directly regulate the nervous system, reduce systemic inflammation, accelerate cellular repair, and restore the vital breath force that modern medicine rarely addresses. A silent accelerator of every healing.",
    points:["Nervous System Regulation","Reduces Inflammation","Accelerates Cellular Healing"],
  },
];

const steps = [
  { n:"01", ico:"🫀", title:"Nadi Assessment", desc:"Unni Gurukkal reads your pulse (Nadi) — a traditional diagnostic that reveals your unique body constitution, organ state, and specific imbalances." },
  { n:"02", ico:"🗺️", title:"Treatment Mapping", desc:"Based on the Nadi reading, a personalized treatment protocol is mapped — identifying exactly which Marma points, yoga sequences, and breathing techniques apply to you." },
  { n:"03", ico:"✋", title:"Marma Activation", desc:"Precise stimulation of the relevant vital energy points — releasing blockages, restoring prana flow, and triggering the body's self-healing mechanisms." },
  { n:"04", ico:"🌱", title:"Yoga & Pranayama", desc:"Prescribed movement sequences and breathing protocols that consolidate and deepen the healing initiated through Marma, ensuring lasting recovery." },
];

const whyCards = [
  { ico:"🚫", title:"100% Drug-Free", desc:"Zero medicines, zero injections, zero side effects — healing happens entirely through natural intelligence." },
  { ico:"🔪", title:"Surgery Alternative", desc:"For conditions where surgery is prescribed — knee replacement, disc issues, frozen shoulder — Marma offers a proven natural path." },
  { ico:"📜", title:"18+ Years Mastery", desc:"Decades perfecting ancient Kalaripayattu Nadi Marma with consistent, documented results across thousands of patients." },
  { ico:"👥", title:"6000+ Healed", desc:"Proven outcomes across arthritis, neurological disorders, chronic pain, and conditions conventional medicine had declared untreatable." },
  { ico:"🧬", title:"Fully Personalized", desc:"Every treatment plan is individually crafted from a deep traditional assessment — never a generic formula." },
  { ico:"⚖️", title:"Holistic Tradition", desc:"Body, mind, and soul treated together — physical therapy, yoga, and pranayama as one unified healing science." },
];

const testimonials = [
  { init:"R", name:"Ramesh Nair", role:"Chronic Back Pain · Kochi", text:"After 6 years of back pain and being advised surgery, 3 months of Marma therapy changed everything. I now walk freely and live completely without pain." },
  { init:"S", name:"Sunitha Pillai", role:"Rheumatoid Arthritis · Thrissur", text:"I was dependent on painkillers every single day. After 8 weeks I am completely medicine-free. Results beyond anything I imagined possible." },
  { init:"A", name:"Arun Kumar", role:"Parkinson's Disease · Bangalore", text:"The tremors have reduced significantly. Unni Gurukkal's expertise in neurological Marma therapy is extraordinary. My family is forever grateful." },
];

const surgeryAlts = [
  { ico:"🦴", text:"Severe Back Pain — Disc Issues" },
  { ico:"🦵", text:"Knee Replacement Cases" },
  { ico:"💪", text:"Frozen Shoulder & Neck Immobility" },
  { ico:"🧠", text:"Spinal Cord Compression" },
  { ico:"⚡", text:"Nerve Compression Disorders" },
];

export default function Treatment() {
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

      {/* HERO */}
      <section className="treat-hero">
        <div className="th-bg" />
        <div className="th-ring1" /><div className="th-ring2" /><div className="th-ring3" />
        <div className="th-inner">
          <div className="th-text">
            <span className="th-eyebrow">Kalaripayattu Nadi Marma · Kerala</span>
            <h1 className="th-title">
              Our Treatments
              <em>Heal Without Medicine.</em>
            </h1>
            <div className="th-line" />
            <p className="th-desc">"When the body feels pain, true healing comes from treatments that restore body, mind, and soul together — without a single medicine."</p>
            <div className="th-badges">
              {["Drug-Free Healing","18+ Years Mastery","6000+ Healed","No Surgery","107 Marma Points"].map((b, i) => (
                <div className="th-badge" key={i}><span className="th-badge-dot" />{b}</div>
              ))}
            </div>
          </div>
          <div className="th-visual">
            <img className="th-img" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800" alt="Marma Healing" />
            <div className="th-float-1">
              <div className="tf-num">6000+</div>
              <div className="tf-lbl">Patients Healed</div>
            </div>
            <div className="th-float-2">
              <div className="tf2-ico">🚫</div>
              <div className="tf2-lbl">Drug-Free</div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <div className="stats-strip">
        <div className="stats-row">
          {[
            { ico:"🌿", num:"18+", lbl:"Years of Mastery" },
            { ico:"👥", num:"6000+", lbl:"Patients Healed" },
            { ico:"✋", num:"107", lbl:"Marma Points" },
            { ico:"🚫", num:"0", lbl:"Medicines Used" },
          ].map((s, i) => (
            <div className="stat-box" key={i}>
              <span className="stat-ico">{s.ico}</span>
              <div className="stat-num">{s.num}</div>
              <div className="stat-lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* MAIN TREATMENTS */}
      <section className="sec treats-sec">
        <div className="sec-inner">
          <div className="center">
            <span className="stag">What We Heal</span>
            <h2 className="stitle">Conditions We <em>Treat</em></h2>
            <div className="gline" />
          </div>
          <div className="treats-grid">
            {treatCards.map((t, i) => (
              <div className="treat-card" key={i}>
                <div className="treat-card-media">
                  <img src={t.img} alt={t.title} />
                  <div className="tc-cat">{t.cat}</div>
                  <div className="tc-num">{t.num}</div>
                </div>
                <div className="treat-card-body">
                  <span className="tc-ico">{t.ico}</span>
                  <h3 className="tc-title">{t.title}</h3>
                  <p className="tc-desc">{t.desc}</p>
                  <div className="tc-pills">
                    {t.pills.map((p, j) => <span className="tc-pill" key={j}>{p}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIAL FOCUS — SURGERY ALTERNATIVE */}
      <section className="special-sec">
        <div className="special-inner">
          <div>
            <span className="sp-tag">Special Focus</span>
            <h2 className="sp-title">When Surgery Is<br/><em>Not the Answer</em></h2>
            <div className="sp-line" />
            <p className="sp-desc">"For conditions where people are told surgery is the only option — Ever Ayur Life offers a proven, natural alternative. Marma therapy restores what surgery cannot: the body's own healing intelligence."</p>
            <div className="sp-items">
              {surgeryAlts.map((s, i) => (
                <div className="sp-item" key={i}>
                  <div className="sp-bullet">{s.ico}</div>
                  <div className="sp-text">{s.text}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="sp-visual">
            <img className="sp-img" src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800" alt="Natural Healing" />
            <div className="sp-badge">
              <div className="spb-num">0</div>
              <div className="spb-lbl">Surgeries Needed</div>
            </div>
          </div>
        </div>
      </section>

      {/* TREATMENT METHODOLOGY */}
      <section className="sec method-sec">
        <div className="sec-inner">
          <div className="center">
            <span className="stag">Treatment Methodology</span>
            <h2 className="stitle">Three Pillars of Our <em>Healing Method</em></h2>
            <div className="gline" />
          </div>
          <div className="method-grid">
            {methods.map((m, i) => (
              <div className="method-card" key={i}>
                <div className="mc-bg-num">{m.n}</div>
                <div className="mc-num-badge">{m.n}</div>
                <span className="mc-ico">{m.ico}</span>
                <h3 className="mc-title">{m.title}</h3>
                <p className="mc-desc">{m.desc}</p>
                <div className="mc-points">
                  {m.points.map((p, j) => (
                    <div className="mc-point" key={j}><div className="mc-chk">✓</div>{p}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="sec steps-sec">
        <div className="sec-inner steps-inner">
          <div className="center">
            <span className="stag">How It Works</span>
            <h2 className="stitle">Your <em>4-Step</em> Healing Journey</h2>
            <div className="gline" />
          </div>
          <div className="steps-grid">
            {steps.map((s, i) => (
              <div className="step-item" key={i}>
                <div className="step-num">{s.n}</div>
                <span className="step-ico">{s.ico}</span>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="sec why-sec">
        <div className="sec-inner">
          <div className="center">
            <span className="stag">Why Choose Us</span>
            <h2 className="stitle">The Ever Ayur Life <em>Difference</em></h2>
            <div className="gline" />
          </div>
          <div className="why-grid">
            {whyCards.map((w, i) => (
              <div className="why-card" key={i}>
                <div className="why-ico">{w.ico}</div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
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

      {/* QUOTE BANNER */}
      <div className="quote-sec">
        <div className="qs-ring" />
        <div className="qs-inner">
          <span className="qs-mark">"</span>
          <p className="qs-text">Treatment here is not just therapy — it feels like returning to a new life. After years of chronic pain and failed treatments, Ever Ayur Life gave me my freedom back without a single medicine.</p>
          <div className="qs-attr">
            <div className="qs-line" />
            <span className="qs-name">Patient · Ever Ayur Life · Thiruvananthapuram</span>
            <div className="qs-line" />
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="cta-sec">
        <div className="cta-inner">
          <div className="cta-card">
            <div className="cta-text">
              <span className="cta-tag">Begin Your Healing</span>
              <h2 className="cta-title">Ready to Heal <em>Naturally?</em></h2>
              <p className="cta-desc">"Book your free Nadi assessment and experience 18+ years of Kalaripayattu mastery, personalized to your body and condition."</p>
              <div className="cta-btns">
                <a href="/contact" className="btn-white">Book Free Nadi Assessment</a>
                <a href="/about" className="btn-outline-w">About Our Healer</a>
              </div>
            </div>
            <div className="cta-img">
              <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900" alt="Natural Healing" />
              <div className="cta-float">
                <div className="cf-num">Drug-Free</div>
                <div className="cf-lbl">100% Natural</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
