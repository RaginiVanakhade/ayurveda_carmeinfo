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

  @keyframes marquee  { from{transform:translateX(0)} to{transform:translateX(-50%)} }
  @keyframes spin     { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
  @keyframes float    { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
  @keyframes pulse    { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.4)} }
  @keyframes fadeUp   { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
  @keyframes lineGrow { from{width:0} to{width:100%} }
  @keyframes glowPulse{ 0%,100%{box-shadow:0 0 0 0 rgba(90,90,42,0)} 50%{box-shadow:0 0 0 12px rgba(90,90,42,0.08)} }

  /* ── MARQUEE ── */
  .mq { background:var(--green-dark); padding:11px 0; overflow:hidden; }
  .mq-track { display:flex; animation:marquee 30s linear infinite; white-space:nowrap; }
  .mq-item { display:inline-flex; align-items:center; gap:10px; padding:0 28px; font-family:'Cinzel',serif; font-size:10px; letter-spacing:0.18em; text-transform:uppercase; color:rgba(255,255,255,0.7); }
  .mq-leaf { width:5px; height:5px; border-radius:50%; background:var(--green-light); opacity:0.5; }

  /* ── FULL-BLEED HERO ── */
  .phil-hero {
    min-height:88vh; position:relative; overflow:hidden;
    display:flex; align-items:center; justify-content:center;
    background:var(--green-dark);
  }
  .ph-bg { position:absolute; inset:0; background:url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400') center/cover no-repeat; opacity:0.15; }
  .ph-ring1 { position:absolute; width:700px; height:700px; border-radius:50%; border:1px solid rgba(255,255,255,0.05); top:50%; left:50%; transform:translate(-50%,-50%); animation:spin 80s linear infinite; }
  .ph-ring2 { position:absolute; width:520px; height:520px; border-radius:50%; border:1px solid rgba(255,255,255,0.07); top:50%; left:50%; transform:translate(-50%,-50%); animation:spin 55s linear infinite reverse; }
  .ph-ring3 { position:absolute; width:340px; height:340px; border-radius:50%; border:1px solid rgba(255,255,255,0.1); top:50%; left:50%; transform:translate(-50%,-50%); animation:spin 35s linear infinite; }
  .ph-center { position:relative; z-index:1; text-align:center; padding:40px 32px; max-width:820px; animation:fadeUp 1s ease both; }
  .ph-emblem { width:80px; height:80px; border-radius:50%; background:rgba(238,243,214,0.1); border:1px solid rgba(238,243,214,0.2); display:flex; align-items:center; justify-content:center; font-size:36px; margin:0 auto 28px; animation:float 5s ease-in-out infinite; }
  .ph-tag { font-family:'Cinzel',serif; font-size:10px; letter-spacing:0.28em; text-transform:uppercase; color:rgba(255,255,255,0.4); display:block; margin-bottom:20px; }
  .ph-title { font-family:'Cinzel',serif; font-size:clamp(38px,6vw,80px); font-weight:700; color:var(--white); line-height:1.04; margin-bottom:12px; }
  .ph-title em { display:block; font-style:italic; font-family:'Playfair Display',serif; color:var(--green-light); font-weight:400; font-size:0.82em; }
  .ph-line { width:0; height:1px; background:linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent); margin:24px auto; animation:lineGrow 1.2s 0.5s ease both; }
  .ph-sub { font-size:16px; color:rgba(255,255,255,0.55); font-style:italic; font-weight:300; line-height:1.8; font-family:'Playfair Display',serif; max-width:560px; margin:0 auto; }
  .ph-scroll { position:absolute; bottom:32px; left:50%; transform:translateX(-50%); display:flex; flex-direction:column; align-items:center; gap:6px; }
  .ph-scroll-line { width:1px; height:40px; background:linear-gradient(to bottom,rgba(255,255,255,0.4),transparent); animation:float 2s ease-in-out infinite; }
  .ph-scroll-lbl { font-family:'Cinzel',serif; font-size:9px; letter-spacing:0.2em; text-transform:uppercase; color:rgba(255,255,255,0.3); }

  /* ── THREE PILLARS — BIG IMMERSIVE ── */
  .pillars-wrap { }
  .pillar-row { display:grid; grid-template-columns:1fr 1fr; min-height:600px; }
  .pillar-row.flip { direction:rtl; }
  .pillar-row.flip > * { direction:ltr; }

  .pillar-img { position:relative; overflow:hidden; }
  .pillar-img img { width:100%; height:100%; object-fit:cover; display:block; filter:saturate(0.8); transition:filter 0.6s,transform 0.7s; }
  .pillar-row:hover .pillar-img img { filter:saturate(1.05); transform:scale(1.04); }
  .pillar-img-overlay { position:absolute; inset:0; }
  .p-body { background:var(--green-light); }
  .p-mind { background:var(--off-white); }
  .p-soul { background:var(--green-pale); }
  .pillar-body-o { background:linear-gradient(to right, rgba(59,59,26,0.3), transparent); }
  .pillar-mind-o { background:linear-gradient(to left, rgba(59,59,26,0.2), transparent); }
  .pillar-soul-o { background:linear-gradient(to right, rgba(59,59,26,0.25), transparent); }
  .pillar-row.flip .pillar-img-overlay { background:linear-gradient(to left, rgba(59,59,26,0.25), transparent) !important; }

  .pillar-content { display:flex; flex-direction:column; justify-content:center; padding:72px 64px; position:relative; overflow:hidden; }
  .pillar-num { font-family:'Cinzel',serif; font-size:120px; font-weight:700; color:rgba(59,59,26,0.06); position:absolute; top:-10px; right:20px; line-height:1; pointer-events:none; user-select:none; }
  .pillar-ico-wrap { margin-bottom:24px; }
  .pillar-ico { width:76px; height:76px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:34px; animation:glowPulse 3s ease-in-out infinite; }
  .p-body .pillar-ico { background:rgba(59,59,26,0.1); }
  .p-mind .pillar-ico { background:var(--green-light); }
  .p-soul .pillar-ico { background:rgba(59,59,26,0.08); }
  .pillar-tag { font-family:'Cinzel',serif; font-size:10px; letter-spacing:0.24em; text-transform:uppercase; color:var(--green); font-weight:600; display:block; margin-bottom:12px; }
  .pillar-title { font-family:'Cinzel',serif; font-size:clamp(28px,4vw,52px); font-weight:700; color:var(--text); line-height:1.1; margin-bottom:6px; }
  .pillar-title em { font-style:italic; font-family:'Playfair Display',serif; color:var(--green); font-weight:400; }
  .pillar-divider { width:44px; height:2px; background:linear-gradient(90deg,var(--green),var(--green-mid)); border-radius:2px; margin:18px 0 26px; }
  .pillar-desc { font-size:15px; color:var(--text-muted); line-height:1.9; font-weight:300; margin-bottom:14px; max-width:440px; }
  .pillar-quote { font-family:'Playfair Display',serif; font-size:clamp(14px,1.8vw,18px); font-style:italic; color:var(--text); border-left:3px solid var(--green); padding:4px 0 4px 18px; line-height:1.65; margin-top:20px; max-width:420px; }

  /* ── ANCIENT SYSTEM FULL DARK ── */
  .system-sec { background:var(--green-dark); padding:100px 32px; position:relative; overflow:hidden; }
  .sys-bg-ring1 { position:absolute; right:-120px; top:-120px; width:600px; height:600px; border-radius:50%; border:1px solid rgba(255,255,255,0.04); animation:spin 70s linear infinite; pointer-events:none; }
  .sys-bg-ring2 { position:absolute; left:-80px; bottom:-80px; width:400px; height:400px; border-radius:50%; border:1px solid rgba(255,255,255,0.03); animation:spin 50s linear infinite reverse; pointer-events:none; }
  .sys-inner { max-width:1280px; margin:0 auto; position:relative; z-index:1; }
  .sys-header { text-align:center; margin-bottom:72px; }
  .sys-tag { font-family:'Cinzel',serif; font-size:10px; letter-spacing:0.26em; text-transform:uppercase; color:rgba(255,255,255,0.35); display:block; margin-bottom:14px; }
  .sys-title { font-family:'Cinzel',serif; font-size:clamp(26px,4vw,52px); font-weight:700; color:var(--white); line-height:1.15; }
  .sys-title em { font-style:italic; font-family:'Playfair Display',serif; color:var(--green-light); font-weight:400; }
  .sys-line { width:48px; height:2px; background:linear-gradient(90deg,rgba(255,255,255,0.3),rgba(255,255,255,0.08)); border-radius:2px; margin:18px auto 0; }

  .sys-wheel { display:grid; grid-template-columns:repeat(3,1fr); gap:2px; }
  .sw-card {
    background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.08);
    padding:44px 36px; position:relative; overflow:hidden;
    transition:background 0.35s,transform 0.3s;
  }
  .sw-card:hover { background:rgba(255,255,255,0.09); transform:translateY(-4px); }
  .sw-card::before { content:attr(data-n); position:absolute; bottom:-10px; right:10px; font-family:'Cinzel',serif; font-size:90px; font-weight:700; color:rgba(255,255,255,0.04); line-height:1; pointer-events:none; }
  .sw-top { display:flex; align-items:center; gap:16px; margin-bottom:22px; }
  .sw-ico { width:56px; height:56px; background:rgba(238,243,214,0.1); border-radius:14px; display:flex; align-items:center; justify-content:center; font-size:26px; border:1px solid rgba(238,243,214,0.15); flex-shrink:0; transition:background 0.3s; }
  .sw-card:hover .sw-ico { background:rgba(238,243,214,0.18); }
  .sw-num-tag { font-family:'Cinzel',serif; font-size:10px; letter-spacing:0.18em; text-transform:uppercase; color:rgba(255,255,255,0.3); }
  .sw-title { font-family:'Cinzel',serif; font-size:18px; font-weight:600; color:var(--white); margin-bottom:14px; }
  .sw-desc { font-size:14px; color:rgba(255,255,255,0.58); line-height:1.8; font-weight:300; }
  .sw-tags { display:flex; flex-wrap:wrap; gap:7px; margin-top:20px; }
  .sw-tag-pill { font-size:10px; background:rgba(238,243,214,0.08); border:1px solid rgba(238,243,214,0.14); border-radius:50px; padding:4px 12px; color:rgba(238,243,214,0.65); font-family:'Cinzel',serif; letter-spacing:0.08em; }

  /* ── 107 MARMA FOCAL SECTION ── */
  .marma-sec { background:var(--white); padding:100px 32px; }
  .marma-inner { max-width:1280px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:center; }
  .marma-visual { position:relative; display:flex; align-items:center; justify-content:center; }
  .marma-core { width:280px; height:280px; border-radius:50%; background:linear-gradient(135deg,var(--green-dark),var(--green)); display:flex; flex-direction:column; align-items:center; justify-content:center; box-shadow:0 20px 60px rgba(59,59,26,0.3); animation:glowPulse 4s ease-in-out infinite; position:relative; z-index:2; }
  .mc-num { font-family:'Cinzel',serif; font-size:72px; font-weight:700; color:var(--white); line-height:1; }
  .mc-label { font-family:'Cinzel',serif; font-size:11px; letter-spacing:0.18em; text-transform:uppercase; color:rgba(255,255,255,0.7); margin-top:4px; }
  .marma-ring-outer { position:absolute; width:360px; height:360px; border-radius:50%; border:1px dashed rgba(90,90,42,0.18); animation:spin 40s linear infinite; }
  .marma-ring-mid   { position:absolute; width:430px; height:430px; border-radius:50%; border:1px dashed rgba(90,90,42,0.1); animation:spin 60s linear infinite reverse; }
  .marma-dot { position:absolute; width:10px; height:10px; border-radius:50%; background:var(--green); animation:pulse 2.5s ease-in-out infinite; }
  .marma-dot:nth-child(1) { top:10px; left:50%; transform:translateX(-50%); }
  .marma-dot:nth-child(2) { bottom:10px; left:50%; transform:translateX(-50%); animation-delay:-1.2s; }
  .marma-dot:nth-child(3) { left:10px; top:50%; transform:translateY(-50%); animation-delay:-0.6s; }
  .marma-dot:nth-child(4) { right:10px; top:50%; transform:translateY(-50%); animation-delay:-1.8s; }
  .marma-float { position:absolute; background:var(--white); border:1px solid var(--border); border-radius:12px; padding:12px 16px; box-shadow:0 8px 28px var(--shadow); }
  .mf-top    { top:-10px; right:20px; animation:float 4s ease-in-out infinite; }
  .mf-bottom { bottom:-10px; left:20px; animation:float 5s 1s ease-in-out infinite; }
  .mf-label { font-family:'Cinzel',serif; font-size:11px; font-weight:700; color:var(--green-dark); }
  .mf-sub   { font-size:10px; color:var(--text-muted); margin-top:2px; }
  .marma-text { }
  .marma-tag { font-family:'Cinzel',serif; font-size:10px; letter-spacing:0.22em; text-transform:uppercase; color:var(--green); font-weight:600; display:block; margin-bottom:12px; }
  .marma-title { font-family:'Cinzel',serif; font-size:clamp(24px,3.5vw,44px); font-weight:600; color:var(--text); line-height:1.18; }
  .marma-title em { font-style:italic; font-family:'Playfair Display',serif; color:var(--green); font-weight:500; }
  .marma-div { width:44px; height:2px; background:linear-gradient(90deg,var(--green),var(--green-mid)); border-radius:2px; margin:18px 0 26px; }
  .marma-desc { font-size:15px; color:var(--text-muted); line-height:1.88; font-weight:300; margin-bottom:14px; }
  .marma-points { display:flex; flex-direction:column; gap:14px; margin-top:28px; }
  .mp-item { display:flex; gap:16px; align-items:flex-start; }
  .mp-num { font-family:'Cinzel',serif; font-size:13px; font-weight:700; color:var(--white); background:var(--green); border-radius:8px; padding:6px 11px; flex-shrink:0; line-height:1; }
  .mp-text { font-size:14px; color:var(--text-muted); line-height:1.7; font-weight:300; padding-top:4px; }
  .mp-text strong { color:var(--text-mid); font-weight:700; }

  /* ── NADI DIAGNOSIS SPLIT ── */
  .nadi-sec { background:var(--green-pale); padding:100px 32px; }
  .nadi-inner { max-width:1280px; margin:0 auto; }
  .nadi-grid { display:grid; grid-template-columns:5fr 6fr; gap:80px; align-items:center; }
  .nadi-imgs { position:relative; height:540px; }
  .nadi-main { position:absolute; right:0; top:0; width:76%; height:460px; object-fit:cover; border-radius:20px 20px 64px 20px; box-shadow:0 20px 56px rgba(42,92,50,0.14); filter:saturate(0.85); display:block; }
  .nadi-sub { position:absolute; left:0; bottom:0; width:54%; height:270px; object-fit:cover; border-radius:20px; box-shadow:0 12px 36px rgba(42,92,50,0.12); border:4px solid var(--white); display:block; filter:saturate(0.9); }
  .nadi-badge { position:absolute; left:46%; top:42%; transform:translate(-50%,-50%); background:var(--green-dark); border-radius:50%; width:100px; height:100px; display:flex; flex-direction:column; align-items:center; justify-content:center; z-index:3; border:4px solid var(--green-pale); box-shadow:0 8px 28px rgba(59,59,26,0.3); }
  .nb-ico { font-size:28px; }
  .nb-label { font-size:8px; letter-spacing:0.1em; text-transform:uppercase; color:rgba(255,255,255,0.7); text-align:center; margin-top:3px; }
  .nadi-tag { font-family:'Cinzel',serif; font-size:10px; letter-spacing:0.22em; text-transform:uppercase; color:var(--green); font-weight:600; display:block; margin-bottom:12px; }
  .nadi-title { font-family:'Cinzel',serif; font-size:clamp(22px,3vw,40px); font-weight:600; color:var(--text); line-height:1.2; }
  .nadi-title em { font-style:italic; font-family:'Playfair Display',serif; color:var(--green); font-weight:500; }
  .nadi-div { width:44px; height:2px; background:linear-gradient(90deg,var(--green),var(--green-mid)); border-radius:2px; margin:18px 0 26px; }
  .nadi-desc { font-size:15px; color:var(--text-muted); line-height:1.88; font-weight:300; margin-bottom:14px; }
  .nadi-steps { display:flex; flex-direction:column; gap:0; margin-top:28px; }
  .ns-item { display:flex; gap:18px; padding:18px 0; border-bottom:1px solid var(--border); align-items:flex-start; }
  .ns-item:last-child { border-bottom:none; }
  .ns-step { width:36px; height:36px; border-radius:50%; background:var(--green-dark); color:var(--white); font-family:'Cinzel',serif; font-size:13px; font-weight:700; display:flex; align-items:center; justify-content:center; flex-shrink:0; margin-top:2px; }
  .ns-title { font-family:'Cinzel',serif; font-size:13px; font-weight:600; color:var(--text); margin-bottom:4px; }
  .ns-desc { font-size:13px; color:var(--text-muted); line-height:1.65; font-weight:300; }

  /* ── VALUES STRIP ── */
  .values-sec { background:var(--white); padding:80px 32px; }
  .values-inner { max-width:1280px; margin:0 auto; }
  .values-grid { display:grid; grid-template-columns:repeat(5,1fr); gap:0; border:1px solid var(--border); border-radius:20px; overflow:hidden; margin-top:52px; }
  .val-item { padding:36px 24px; text-align:center; border-right:1px solid var(--border); transition:background 0.3s; position:relative; overflow:hidden; }
  .val-item:last-child { border-right:none; }
  .val-item:hover { background:var(--green-pale); }
  .val-item::after { content:''; position:absolute; bottom:0; left:0; right:0; height:3px; background:linear-gradient(90deg,var(--green),var(--green-mid)); transform:scaleX(0); transform-origin:left; transition:transform 0.35s; }
  .val-item:hover::after { transform:scaleX(1); }
  .val-ico { font-size:32px; margin-bottom:14px; display:block; animation:float 4s ease-in-out infinite; }
  .val-item:nth-child(2) .val-ico { animation-delay:-0.8s; }
  .val-item:nth-child(3) .val-ico { animation-delay:-1.6s; }
  .val-item:nth-child(4) .val-ico { animation-delay:-2.4s; }
  .val-item:nth-child(5) .val-ico { animation-delay:-3.2s; }
  .val-title { font-family:'Cinzel',serif; font-size:13px; font-weight:600; color:var(--text); margin-bottom:8px; }
  .val-desc { font-size:12.5px; color:var(--text-muted); line-height:1.65; font-weight:300; }

  /* ── IMMERSIVE QUOTE SECTION ── */
  .quote-full { min-height:60vh; background:var(--green-dark); display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden; padding:80px 32px; }
  .qf-bg { position:absolute; inset:0; background:url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1400') center/cover no-repeat; opacity:0.1; }
  .qf-ring { position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); width:700px; height:700px; border-radius:50%; border:1px solid rgba(255,255,255,0.04); animation:spin 80s linear infinite; pointer-events:none; }
  .qf-inner { max-width:760px; text-align:center; position:relative; z-index:1; }
  .qf-mark { font-family:'Playfair Display',serif; font-size:120px; line-height:0.6; color:rgba(255,255,255,0.07); display:block; margin-bottom:24px; }
  .qf-text { font-family:'Playfair Display',serif; font-size:clamp(22px,3vw,36px); font-style:italic; color:var(--white); line-height:1.6; margin-bottom:36px; }
  .qf-attr { display:flex; align-items:center; justify-content:center; gap:14px; }
  .qf-line { width:40px; height:1px; background:rgba(255,255,255,0.22); }
  .qf-name { font-family:'Cinzel',serif; font-size:12px; letter-spacing:0.16em; text-transform:uppercase; color:rgba(255,255,255,0.38); }

  /* ── CTA HORIZONTAL ── */
  .cta-sec { background:var(--green-pale); padding:80px 32px; }
  .cta-inner { max-width:1280px; margin:0 auto; }
  .cta-bar { background:var(--green-dark); border-radius:22px; padding:52px 64px; display:flex; align-items:center; justify-content:space-between; gap:40px; flex-wrap:wrap; position:relative; overflow:hidden; }
  .cta-bar::before { content:''; position:absolute; right:-60px; top:50%; transform:translateY(-50%); width:300px; height:300px; border-radius:50%; border:1px solid rgba(255,255,255,0.04); animation:spin 50s linear infinite; pointer-events:none; }
  .cta-left { }
  .cta-tag { font-family:'Cinzel',serif; font-size:10px; letter-spacing:0.22em; text-transform:uppercase; color:rgba(255,255,255,0.4); display:block; margin-bottom:12px; }
  .cta-title { font-family:'Cinzel',serif; font-size:clamp(22px,3vw,38px); font-weight:700; color:var(--white); line-height:1.2; }
  .cta-title em { font-style:italic; font-family:'Playfair Display',serif; color:var(--green-light); font-weight:400; }
  .cta-desc { font-size:15px; color:rgba(255,255,255,0.55); font-weight:300; margin-top:10px; font-style:italic; max-width:480px; line-height:1.7; }
  .cta-btns { display:flex; gap:14px; flex-shrink:0; flex-wrap:wrap; position:relative; z-index:1; }
  .btn-white { background:var(--white); color:var(--green-dark); padding:14px 32px; border-radius:50px; border:none; font-family:'Cinzel',serif; font-size:11px; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; cursor:pointer; text-decoration:none; display:inline-block; transition:transform 0.25s; box-shadow:0 6px 20px rgba(0,0,0,0.18); }
  .btn-white:hover { transform:translateY(-2px); }
  .btn-outline-w { background:transparent; color:rgba(255,255,255,0.82); padding:13px 32px; border-radius:50px; border:1.5px solid rgba(255,255,255,0.28); font-family:'Cinzel',serif; font-size:11px; font-weight:600; letter-spacing:0.14em; text-transform:uppercase; cursor:pointer; text-decoration:none; display:inline-block; transition:background 0.25s,transform 0.25s; }
  .btn-outline-w:hover { background:rgba(255,255,255,0.1); transform:translateY(-2px); }

  /* ── RESPONSIVE ── */
  @media(max-width:1100px){
    .pillar-row { grid-template-columns:1fr; }
    .pillar-row.flip { direction:ltr; }
    .pillar-img { height:320px; }
    .marma-inner,.nadi-grid { grid-template-columns:1fr; }
    .marma-visual { margin-bottom:40px; }
    .nadi-imgs { max-width:480px; }
    .values-grid { grid-template-columns:repeat(3,1fr); }
    .values-grid .val-item:nth-child(3) { border-right:none; }
    .values-grid .val-item:nth-child(4) { border-top:1px solid var(--border); }
    .values-grid .val-item:nth-child(5) { border-top:1px solid var(--border); border-right:none; }
    .sys-wheel { grid-template-columns:1fr 1fr; }
    .cta-bar { flex-direction:column; align-items:flex-start; padding:44px 40px; }
  }
  @media(max-width:768px){
    .pillar-content { padding:48px 28px; }
    .sys-wheel { grid-template-columns:1fr; }
    .values-grid { grid-template-columns:1fr 1fr; }
    .values-grid .val-item:nth-child(2) { border-right:none; }
    .values-grid .val-item:nth-child(3) { border-right:1px solid var(--border); border-top:1px solid var(--border); }
    .values-grid .val-item:nth-child(4) { border-top:1px solid var(--border); border-right:none; }
    .values-grid .val-item:nth-child(5) { border-top:1px solid var(--border); grid-column:span 2; border-right:none; }
    .nadi-imgs { height:380px; }
    .marma-visual { height:340px; }
    .marma-core { width:220px; height:220px; }
    .mc-num { font-size:56px; }
    .marma-ring-outer { width:280px; height:280px; }
    .marma-ring-mid { display:none; }
  }
  @media(max-width:540px){
    .ph-ring1,.ph-ring2,.ph-ring3 { display:none; }
    .values-grid { grid-template-columns:1fr; }
    .values-grid .val-item { border-right:none; border-bottom:1px solid var(--border); }
    .cta-bar { padding:36px 28px; }
    .nadi-imgs { height:300px; }
  }
`;

const mqItems = ["Philosophy","Body · Mind · Soul","Marma Therapy","Kalaripayattu","Nadi Assessment","Drug-Free Healing","107 Vital Points","Kerala Wisdom","Ancient Science","Holistic Balance"];

const pillars = [
  {
    bg:"p-body", overlayClass:"pillar-body-o", flip:false, num:"01",
    ico:"🌿", tag:"First Pillar",
    title:<>The <em>Body</em></>,
    img:"https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=900",
    desc1:"The body is not merely a physical machine — it is an intelligent system with the innate capacity to heal itself when its energy pathways are clear. In Kalaripayattu tradition, the body holds 107 vital Marma points — junctions of life force that govern every organ, tissue, and system.",
    desc2:"Marma Therapy precisely activates these points to release blockages, restore prana flow, and reawaken the body's own healing intelligence. Unlike symptomatic treatments, Marma works at the root level — addressing why the body is struggling, not just where it hurts.",
    quote:"The body speaks in the language of sensation — Marma Therapy listens."
  },
  {
    bg:"p-mind", overlayClass:"pillar-mind-o", flip:true, num:"02",
    ico:"🕊️", tag:"Second Pillar",
    title:<>The <em>Mind</em></>,
    img:"https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900",
    desc1:"Chronic pain is rarely just physical. The mind amplifies or sustains suffering through stress, anxiety, emotional holding, and unconscious breath patterns. Without addressing the mental dimension, physical treatment can only go so far.",
    desc2:"Through Pranayama and breathwork, Ever Ayur Life brings the nervous system out of chronic stress activation. Controlled breath directly shifts the body from a state of tension and inflammation into one of restoration, calm, and accelerated healing.",
    quote:"Still the breath, still the mind — and the body begins to remember how to heal."
  },
  {
    bg:"p-soul", overlayClass:"pillar-soul-o", flip:false, num:"03",
    ico:"✨", tag:"Third Pillar",
    title:<>The <em>Soul</em></>,
    img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900",
    desc1:"Kalaripayattu is not just a healing system — it is a spiritual tradition. At its heart is the belief that true health is harmony between the individual and the universal life force. Physical and mental healing, without this dimension, remains incomplete.",
    desc2:"Spiritual alignment in Ever Ayur Life's approach means connecting the patient's healing to a deeper sense of meaning, purpose, and vitality. This dimension of care — rarely found in modern medicine — is what produces transformations that science struggles to explain.",
    quote:"When the soul is aligned, the body heals in ways medicine cannot predict."
  }
];

const systemCards = [
  { n:"01", ico:"🥋", title:"Kalaripayattu Tradition", desc:"The ancient Kerala martial art that is also the world's oldest complete healing system — combining combat, movement, breath, and Marma therapy into one unified science of the body.", tags:["Kerala Heritage","Martial Arts","Healing Science"] },
  { n:"02", ico:"🌊", title:"Nadi (Pulse) Diagnosis", desc:"Before treatment begins, the healer reads the patient's pulse — a sophisticated diagnostic system that reveals the state of the entire body, its imbalances, and the precise nature of treatment required.", tags:["Traditional Diagnosis","Pulse Reading","Body Constitution"] },
  { n:"03", ico:"💫", title:"Prana & Energy Flow", desc:"Prana — the vital life force — flows through the body along specific channels. When blocked or imbalanced, disease and pain arise. Marma therapy directly addresses these energetic blockages.", tags:["Life Force","Energy Pathways","107 Marma Points"] },
  { n:"04", ico:"⚖️", title:"Tridosha Balance", desc:"Ayurvedic philosophy recognizes three doshas — Vata, Pitta, Kapha — whose imbalance underlies all disease. Treatment at Ever Ayur Life is calibrated to restore each patient's unique doshic balance.", tags:["Vata","Pitta","Kapha"] },
  { n:"05", ico:"🧘", title:"Yoga as Medicine", desc:"Yoga in the Kalaripayattu tradition is not exercise — it is medicine. Prescribed postures and sequences are individually calibrated to restore structural balance and stimulate specific healing pathways.", tags:["Therapeutic Yoga","Body Alignment","Healing Sequences"] },
  { n:"06", ico:"💨", title:"Pranayama Science", desc:"Breath is the bridge between body and mind. The ancient science of Pranayama uses controlled breathing patterns to directly regulate the nervous system, reduce inflammation, and accelerate cellular healing.", tags:["Breathwork","Nervous System","Cellular Healing"] },
];

const nadiSteps = [
  { n:"01", title:"Pulse Reading", desc:"The healer reads three positions on each wrist, each revealing the state of a different organ system and dosha." },
  { n:"02", title:"Constitution Assessment", desc:"The patient's unique Prakriti (body constitution) is identified — determining which treatments, sequences, and breathing patterns will be most effective." },
  { n:"03", title:"Imbalance Mapping", desc:"Specific energy blockages and doshic imbalances are mapped — pinpointing exactly which Marma points require activation." },
  { n:"04", title:"Personalized Protocol", desc:"A fully individualized treatment protocol is designed — never a generic formula, but a precise prescription based on what was read in the pulse." },
];

const values = [
  { ico:"🌿", title:"Naturopathy", desc:"Healing through nature's own intelligence, never against it." },
  { ico:"🚫", title:"Non-Invasive", desc:"No needles, no knives, no medicines — pure touch and breath." },
  { ico:"🎯", title:"Root-Cause Focus", desc:"We treat why the body struggles, not just where it hurts." },
  { ico:"🧬", title:"Individuality", desc:"Every person's constitution is unique — every treatment must be too." },
  { ico:"📖", title:"Ancient Lineage", desc:"Carrying forward 5,000 years of unbroken healing knowledge." },
];

export default function Philosophy() {
  return (
    <>
      <style>{FONTS + CSS}</style>

      {/* MARQUEE */}
      <div className="mq">
        <div className="mq-track">
          {[...mqItems,...mqItems,...mqItems].map((t,i)=>(
            <span className="mq-item" key={i}>{t}<span className="mq-leaf"/></span>
          ))}
        </div>
      </div>

      {/* FULL-BLEED HERO */}
      <section className="phil-hero">
        <div className="ph-bg"/>
        <div className="ph-ring1"/><div className="ph-ring2"/><div className="ph-ring3"/>
        <div className="ph-center">
          <div className="ph-emblem">🌿</div>
          <span className="ph-tag">Our Philosophy</span>
          <h1 className="ph-title">
            Body. Mind.
            <em>Soul.</em>
          </h1>
          <div className="ph-line" style={{width:"200px"}}/>
          <p className="ph-sub">"True healing is not the absence of disease — it is the restoration of harmony between body, mind, and soul."</p>
        </div>
        <div className="ph-scroll">
          <span className="ph-scroll-lbl">Scroll</span>
          <div className="ph-scroll-line"/>
        </div>
      </section>

      {/* THREE PILLARS */}
      <div className="pillars-wrap">
        {pillars.map((p,i)=>(
          <div className={`pillar-row ${p.flip ? 'flip' : ''}`} key={i}>
            <div className="pillar-img">
              <img src={p.img} alt={`Pillar ${p.num}`}/>
              <div className={`pillar-img-overlay ${p.overlayClass}`}/>
            </div>
            <div className={`pillar-content ${p.bg}`}>
              <div className="pillar-num">{p.num}</div>
              <div className="pillar-ico-wrap">
                <div className="pillar-ico">{p.ico}</div>
              </div>
              <span className="pillar-tag">{p.tag}</span>
              <h2 className="pillar-title">{p.title}</h2>
              <div className="pillar-divider"/>
              <p className="pillar-desc">{p.desc1}</p>
              <p className="pillar-desc">{p.desc2}</p>
              <blockquote className="pillar-quote">{p.quote}</blockquote>
            </div>
          </div>
        ))}
      </div>

      {/* ANCIENT SYSTEM */}
      <section className="system-sec">
        <div className="sys-bg-ring1"/><div className="sys-bg-ring2"/>
        <div className="sys-inner">
          <div className="sys-header">
            <span className="sys-tag">The Ancient Science</span>
            <h2 className="sys-title">Kalaripayattu — A Complete <em>Healing System</em></h2>
            <div className="sys-line"/>
          </div>
          <div className="sys-wheel">
            {systemCards.map((c,i)=>(
              <div className="sw-card" key={i} data-n={c.n}>
                <div className="sw-top">
                  <div className="sw-ico">{c.ico}</div>
                  <div className="sw-num-tag">{c.n}</div>
                </div>
                <div className="sw-title">{c.title}</div>
                <div className="sw-desc">{c.desc}</div>
                <div className="sw-tags">
                  {c.tags.map((t,j)=><span className="sw-tag-pill" key={j}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 107 MARMA POINTS */}
      <section className="marma-sec">
        <div className="marma-inner">
          <div className="marma-visual">
            <div className="marma-ring-mid"/>
            <div className="marma-ring-outer">
              <div className="marma-dot"/>
              <div className="marma-dot"/>
              <div className="marma-dot"/>
              <div className="marma-dot"/>
            </div>
            <div className="marma-core">
              <div className="mc-num">107</div>
              <div className="mc-label">Marma Points</div>
            </div>
            <div className="marma-float mf-top">
              <div className="mf-label">🌿 Life Force</div>
              <div className="mf-sub">Prana activation</div>
            </div>
            <div className="marma-float mf-bottom">
              <div className="mf-label">✋ Precise Touch</div>
              <div className="mf-sub">Drug-free healing</div>
            </div>
          </div>
          <div className="marma-text">
            <span className="marma-tag">The 107 Vital Points</span>
            <h2 className="marma-title">Where <em>Life Force</em><br/>Meets the Body</h2>
            <div className="marma-div"/>
            <p className="marma-desc">Marma points are the junctions of life force (prana) in the physical body — 107 specific locations where concentrated energy governs the function of every organ, tissue, and system. In Kalaripayattu tradition, mastery of these points is both a combat science and a healing science.</p>
            <p className="marma-desc">When Marma points become blocked — through injury, stress, poor posture, or disease — pain, stiffness, and dysfunction arise. Activating these points with precise, trained touch releases the blockage and allows the body's natural healing intelligence to flow freely.</p>
            <div className="marma-points">
              {[
                {n:"107",text:<><strong>Vital energy points</strong> mapped by Kalaripayattu masters across thousands of years of observation</>},
                {n:"3",text:<><strong>Categories of Marma</strong> — muscular, vascular, and neural — each requiring different activation techniques</>},
                {n:"0",text:<><strong>Medicines required</strong> — healing occurs entirely through the activation of the body's own intelligence</>},
                {n:"18+",text:<><strong>Years of mastery</strong> refining the precise touch and depth required for each of the 107 points</>},
              ].map((m,i)=>(
                <div className="mp-item" key={i}>
                  <div className="mp-num">{m.n}</div>
                  <div className="mp-text">{m.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NADI DIAGNOSIS */}
      <section className="nadi-sec">
        <div className="nadi-inner">
          <div className="nadi-grid">
            <div className="nadi-imgs">
              <img className="nadi-main" src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=700" alt="Nadi Diagnosis"/>
              <img className="nadi-sub" src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600" alt="Ayurvedic herbs"/>
              <div className="nadi-badge">
                <div className="nb-ico">🫀</div>
                <div className="nb-label">Nadi Reading</div>
              </div>
            </div>
            <div>
              <span className="nadi-tag">Before Treatment Begins</span>
              <h2 className="nadi-title">The Art of <em>Nadi</em><br/>Pulse Diagnosis</h2>
              <div className="nadi-div"/>
              <p className="nadi-desc">Before a single Marma point is touched, Unni Gurukkal reads the patient's Nadi — the pulse. This ancient diagnostic art, refined over thousands of years, reveals far more than modern pulse measurement: it reads the state of every organ system, the patient's doshic constitution, and the precise imbalances that need to be addressed.</p>
              <p className="nadi-desc">This is why no two patients at Ever Ayur Life receive the same treatment — even if they have the same diagnosis. The Nadi never lies.</p>
              <div className="nadi-steps">
                {nadiSteps.map((s,i)=>(
                  <div className="ns-item" key={i}>
                    <div className="ns-step">{s.n}</div>
                    <div><div className="ns-title">{s.title}</div><div className="ns-desc">{s.desc}</div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="values-sec">
        <div className="values-inner">
          <div style={{textAlign:"center"}}>
            <span style={{fontFamily:"'Cinzel',serif",fontSize:"10px",letterSpacing:"0.22em",textTransform:"uppercase",color:"var(--green)",fontWeight:600,display:"block",marginBottom:"10px"}}>Our Core Values</span>
            <h2 style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(24px,3.5vw,42px)",fontWeight:600,color:"var(--text)",lineHeight:1.2}}>Principles That <span style={{fontStyle:"italic",fontFamily:"'Playfair Display',serif",color:"var(--green)",fontWeight:500}}>Guide</span> Every Session</h2>
          </div>
          <div className="values-grid">
            {values.map((v,i)=>(
              <div className="val-item" key={i}>
                <span className="val-ico">{v.ico}</span>
                <div className="val-title">{v.title}</div>
                <div className="val-desc">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL QUOTE */}
      <div className="quote-full">
        <div className="qf-bg"/>
        <div className="qf-ring"/>
        <div className="qf-inner">
          <span className="qf-mark">"</span>
          <p className="qf-text">The body has the power to heal itself. The purpose of treatment is not to force that healing — it is to remove every obstacle that stands in its way, and then to step back and watch the body do what it was always designed to do.</p>
          <div className="qf-attr">
            <div className="qf-line"/>
            <span className="qf-name">Unni Gurukkal · Ever Ayur Life</span>
            <div className="qf-line"/>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="cta-sec">
        <div className="cta-inner">
          <div className="cta-bar">
            <div className="cta-left">
              <span className="cta-tag">Experience the Philosophy</span>
              <h2 className="cta-title">Ready to Begin Your <em>Healing Journey?</em></h2>
              <p className="cta-desc">"Book your free Nadi assessment today — and experience what 18+ years of Kalaripayattu mastery, personalized to your body, can do."</p>
            </div>
            <div className="cta-btns">
              <a href="/contact" className="btn-white">Book Free Nadi Assessment</a>
              <a href="/treatment" className="btn-outline-w">Explore Treatments</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
