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

  @keyframes fadeUp   { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
  @keyframes fadeLeft { from{opacity:0;transform:translateX(-22px)} to{opacity:1;transform:translateX(0)} }
  @keyframes spin     { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
  @keyframes float    { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
  @keyframes pulse    { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.4);opacity:0.5} }
  @keyframes marquee  { from{transform:translateX(0)} to{transform:translateX(-50%)} }

  .mq { background:var(--green-dark); padding:11px 0; overflow:hidden; }
  .mq-track { display:flex; animation:marquee 28s linear infinite; white-space:nowrap; }
  .mq-item { display:inline-flex; align-items:center; gap:10px; padding:0 28px; font-family:'Cinzel',serif; font-size:10px; letter-spacing:0.18em; text-transform:uppercase; color:rgba(255,255,255,0.75); }
  .mq-dot { width:4px; height:4px; border-radius:50%; background:rgba(255,255,255,0.3); }

  /* SPLIT HERO */
  .split-hero { display:grid; grid-template-columns:1fr 1fr; min-height:92vh; }
  .sh-left { background:var(--green-dark); display:flex; flex-direction:column; justify-content:flex-end; padding:60px 56px 70px; position:relative; overflow:hidden; }
  .sh-left-img { position:absolute; inset:0; background:url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=900') center/cover no-repeat; opacity:0.22; }
  .sh-left-ring { position:absolute; top:-40px; left:-40px; width:300px; height:300px; border-radius:50%; border:1px solid rgba(255,255,255,0.07); animation:spin 50s linear infinite; pointer-events:none; }
  .sh-left-ring2 { position:absolute; bottom:40px; right:-60px; width:240px; height:240px; border-radius:50%; border:1px solid rgba(255,255,255,0.05); animation:spin 35s linear infinite reverse; pointer-events:none; }
  .sh-eyebrow { font-family:'Cinzel',serif; font-size:10px; letter-spacing:0.26em; text-transform:uppercase; color:rgba(255,255,255,0.45); margin-bottom:20px; position:relative; z-index:1; }
  .sh-big { font-family:'Cinzel',serif; font-size:clamp(36px,4.8vw,68px); font-weight:700; color:var(--white); line-height:1.05; position:relative; z-index:1; animation:fadeLeft 0.9s ease both; }
  .sh-big em { display:block; font-style:italic; font-family:'Playfair Display',serif; color:var(--green-light); font-weight:400; font-size:0.88em; }
  .sh-divider { width:48px; height:2px; background:linear-gradient(90deg,rgba(255,255,255,0.5),rgba(255,255,255,0.1)); margin:26px 0; position:relative; z-index:1; }
  .sh-para { font-size:15px; color:rgba(255,255,255,0.6); line-height:1.85; font-weight:300; max-width:380px; position:relative; z-index:1; animation:fadeLeft 0.9s 0.15s ease both; }
  .sh-badge-row { display:flex; gap:12px; margin-top:36px; flex-wrap:wrap; position:relative; z-index:1; }
  .sh-badge { display:flex; align-items:center; gap:8px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.13); border-radius:50px; padding:8px 16px; }
  .sh-badge-dot { width:6px; height:6px; border-radius:50%; background:var(--green-light); animation:pulse 2.2s ease-in-out infinite; }
  .sh-badge span { font-family:'Cinzel',serif; font-size:10px; letter-spacing:0.12em; text-transform:uppercase; color:rgba(255,255,255,0.7); }
  .sh-right { display:grid; grid-template-rows:1fr auto; background:var(--green-pale); }
  .sh-img-top { overflow:hidden; }
  .sh-img-top img { width:100%; height:100%; object-fit:cover; display:block; filter:saturate(0.85); transition:transform 0.7s; }
  .sh-img-top:hover img { transform:scale(1.04); filter:saturate(1); }
  .sh-stats-row { display:grid; grid-template-columns:repeat(3,1fr); background:var(--white); }
  .sh-stat { padding:28px 20px; border-right:1px solid var(--border); }
  .sh-stat:last-child { border-right:none; }
  .sh-stat-num { font-family:'Cinzel',serif; font-size:clamp(24px,3vw,36px); font-weight:700; color:var(--green-dark); line-height:1; }
  .sh-stat-lbl { font-size:11px; letter-spacing:0.1em; text-transform:uppercase; color:var(--text-muted); margin-top:5px; }
  .sh-stat-ico { font-size:18px; margin-bottom:6px; }

  /* ZIGZAG */
  .zz-block { display:grid; grid-template-columns:1fr 1fr; min-height:500px; }
  .zz-block.reverse { direction:rtl; }
  .zz-block.reverse > * { direction:ltr; }
  .zz-img { overflow:hidden; position:relative; }
  .zz-img img { width:100%; height:100%; object-fit:cover; display:block; filter:saturate(0.85); transition:filter 0.5s; }
  .zz-img:hover img { filter:saturate(1.05); }
  .zz-overlay { position:absolute; inset:0; background:linear-gradient(to right, rgba(59,59,26,0.15), transparent); }
  .zz-block.reverse .zz-overlay { background:linear-gradient(to left, rgba(59,59,26,0.15), transparent); }
  .zz-content { display:flex; flex-direction:column; justify-content:center; padding:64px 56px; }
  .zz-block:nth-child(odd) .zz-content { background:var(--off-white); }
  .zz-block:nth-child(even) .zz-content { background:var(--green-pale); }
  .zz-tag { font-family:'Cinzel',serif; font-size:10px; letter-spacing:0.22em; text-transform:uppercase; color:var(--green); font-weight:600; display:block; margin-bottom:12px; }
  .zz-title { font-family:'Cinzel',serif; font-size:clamp(22px,2.8vw,34px); font-weight:600; color:var(--text); line-height:1.2; margin-bottom:6px; }
  .zz-title em { font-style:italic; font-family:'Playfair Display',serif; color:var(--green); font-weight:500; }
  .zz-line { width:40px; height:2px; background:linear-gradient(90deg,var(--green),var(--green-mid)); border-radius:2px; margin:14px 0 22px; }
  .zz-desc { font-size:14.5px; color:var(--text-muted); line-height:1.85; font-weight:300; margin-bottom:12px; }
  .zz-quote { font-family:'Playfair Display',serif; font-size:clamp(14px,1.8vw,18px); font-style:italic; color:var(--text); line-height:1.65; border-left:3px solid var(--green); padding:4px 0 4px 18px; margin:20px 0; }
  .zz-checks { display:flex; flex-direction:column; gap:9px; margin:18px 0; }
  .zz-check { display:flex; align-items:center; gap:9px; font-size:13.5px; color:var(--text-mid); font-weight:600; }
  .zz-chk { width:20px; height:20px; background:var(--green-light); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:10px; color:var(--green); flex-shrink:0; font-weight:800; }

  /* TIMELINE */
  .timeline-sec { background:var(--green-dark); padding:96px 32px; position:relative; overflow:hidden; }
  .timeline-sec::after { content:''; position:absolute; right:-120px; top:-120px; width:500px; height:500px; border-radius:50%; border:1px solid rgba(255,255,255,0.04); animation:spin 60s linear infinite; pointer-events:none; }
  .tl-inner { max-width:1280px; margin:0 auto; display:grid; grid-template-columns:360px 1fr; gap:80px; align-items:start; position:relative; z-index:1; }
  .tl-left { position:sticky; top:80px; }
  .tl-tag { font-family:'Cinzel',serif; font-size:10px; letter-spacing:0.22em; text-transform:uppercase; color:rgba(255,255,255,0.4); display:block; margin-bottom:14px; }
  .tl-name { font-family:'Cinzel',serif; font-size:clamp(28px,3.5vw,46px); font-weight:700; color:var(--white); line-height:1.1; margin-bottom:8px; }
  .tl-role { font-size:12px; letter-spacing:0.16em; text-transform:uppercase; color:var(--green-light); margin-bottom:24px; }
  .tl-img-wrap { position:relative; margin-bottom:28px; }
  .tl-img { width:100%; aspect-ratio:4/5; object-fit:cover; border-radius:16px 16px 56px 16px; display:block; filter:saturate(0.82); }
  .tl-ribbon { position:absolute; bottom:-16px; right:-16px; background:linear-gradient(135deg,var(--green),var(--green-mid)); border-radius:12px; padding:14px 18px; text-align:center; border:3px solid var(--green-dark); animation:float 4s ease-in-out infinite; }
  .tr-num { font-family:'Cinzel',serif; font-size:24px; font-weight:700; color:var(--white); line-height:1; }
  .tr-lbl { font-size:8px; letter-spacing:0.12em; text-transform:uppercase; color:rgba(255,255,255,0.75); margin-top:3px; }
  .tl-stat-row { display:grid; grid-template-columns:repeat(2,1fr); gap:1px; background:rgba(255,255,255,0.08); border-radius:12px; overflow:hidden; margin-top:32px; }
  .tl-stat { background:rgba(255,255,255,0.05); padding:16px; text-align:center; }
  .tl-stat-n { font-family:'Cinzel',serif; font-size:20px; font-weight:700; color:var(--white); }
  .tl-stat-l { font-size:9px; letter-spacing:0.1em; text-transform:uppercase; color:rgba(255,255,255,0.45); margin-top:3px; }
  .tl-items { display:flex; flex-direction:column; gap:0; }
  .tl-item { display:grid; grid-template-columns:72px 1fr; }
  .tl-spine { display:flex; flex-direction:column; align-items:center; }
  .tl-node { width:14px; height:14px; border-radius:50%; background:var(--green-light); border:3px solid var(--green); flex-shrink:0; margin-top:4px; }
  .tl-vline { width:2px; flex:1; background:rgba(255,255,255,0.1); min-height:28px; }
  .tl-item:last-child .tl-vline { display:none; }
  .tl-year { font-family:'Cinzel',serif; font-size:11px; font-weight:700; color:rgba(255,255,255,0.35); text-align:center; padding-top:1px; letter-spacing:0.08em; }
  .tl-card { background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); border-radius:14px; padding:22px 26px; margin:0 0 20px 16px; transition:background 0.3s,transform 0.3s; }
  .tl-card:hover { background:rgba(255,255,255,0.1); transform:translateX(6px); }
  .tl-card h4 { font-family:'Cinzel',serif; font-size:14px; font-weight:600; color:var(--white); margin-bottom:8px; }
  .tl-card p { font-size:13.5px; color:rgba(255,255,255,0.6); line-height:1.7; font-weight:300; }
  .tl-card-tag { display:inline-block; background:rgba(238,243,214,0.12); color:var(--green-light); font-family:'Cinzel',serif; font-size:9px; letter-spacing:0.12em; text-transform:uppercase; padding:4px 10px; border-radius:50px; margin-bottom:10px; }

  /* TREATMENTS */
  .treat-sec { background:var(--white); padding:96px 32px; }
  .treat-inner { max-width:1280px; margin:0 auto; }
  .treat-layout { display:grid; grid-template-columns:300px 1fr; gap:64px; align-items:start; }
  .treat-sticky { position:sticky; top:80px; }
  .treat-tag { font-family:'Cinzel',serif; font-size:10px; letter-spacing:0.22em; text-transform:uppercase; color:var(--green); display:block; margin-bottom:12px; }
  .treat-title { font-family:'Cinzel',serif; font-size:clamp(22px,3vw,36px); font-weight:600; color:var(--text); line-height:1.2; }
  .treat-title em { font-style:italic; font-family:'Playfair Display',serif; color:var(--green); font-weight:500; }
  .treat-divider { width:40px; height:2px; background:linear-gradient(90deg,var(--green),var(--green-mid)); border-radius:2px; margin:16px 0 22px; }
  .treat-intro { font-size:14px; color:var(--text-muted); line-height:1.8; font-weight:300; }
  .treat-special { background:var(--green-pale); border:1px solid rgba(58,58,26,0.15); border-radius:14px; padding:20px; margin-top:28px; }
  .ts-label { font-family:'Cinzel',serif; font-size:10px; letter-spacing:0.14em; text-transform:uppercase; color:var(--green); margin-bottom:8px; font-weight:600; }
  .ts-text { font-size:13px; color:var(--text-muted); line-height:1.7; font-weight:300; }
  .treat-groups { display:flex; flex-direction:column; gap:20px; }
  .treat-group { border:1px solid var(--border); border-radius:16px; overflow:hidden; transition:box-shadow 0.3s; }
  .treat-group:hover { box-shadow:0 12px 36px var(--shadow); }
  .tg-header { display:flex; align-items:center; gap:14px; padding:18px 22px; background:var(--off-white); border-bottom:1px solid var(--border); }
  .tg-ico { width:42px; height:42px; background:var(--green-light); border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:20px; flex-shrink:0; }
  .tg-name { font-family:'Cinzel',serif; font-size:13px; font-weight:600; color:var(--text); }
  .tg-count { margin-left:auto; font-family:'Cinzel',serif; font-size:10px; color:var(--text-muted); background:var(--green-light); border-radius:50px; padding:3px 10px; }
  .tg-pills { display:flex; flex-wrap:wrap; gap:8px; padding:16px 22px; }
  .tg-pill { font-size:12px; background:var(--white); border:1px solid rgba(58,58,26,0.15); border-radius:50px; padding:5px 13px; color:var(--text-mid); font-weight:600; transition:background 0.2s; cursor:default; }
  .treat-group:hover .tg-pill { background:var(--green-pale); }

  /* METHODS */
  .method-sec { background:var(--green-pale); padding:96px 32px; }
  .method-inner { max-width:1280px; margin:0 auto; }
  .method-steps { display:grid; grid-template-columns:repeat(3,1fr); position:relative; margin-top:52px; }
  .method-steps::before { content:''; position:absolute; top:40px; left:16%; right:16%; height:1px; background:linear-gradient(90deg,transparent,var(--green),transparent); }
  .ms-item { text-align:center; padding:0 24px; }
  .ms-num-wrap { position:relative; display:inline-flex; align-items:center; justify-content:center; margin-bottom:24px; }
  .ms-ring { width:80px; height:80px; border-radius:50%; border:1.5px solid rgba(58,58,26,0.15); position:absolute; animation:spin 20s linear infinite; }
  .ms-num { width:64px; height:64px; border-radius:50%; background:linear-gradient(135deg,var(--green-dark),var(--green)); color:var(--white); font-family:'Cinzel',serif; font-size:18px; font-weight:700; display:flex; align-items:center; justify-content:center; position:relative; z-index:1; }
  .ms-item:nth-child(2) .ms-ring { animation-direction:reverse; animation-duration:25s; }
  .ms-item:nth-child(3) .ms-ring { animation-duration:30s; }
  .ms-ico { font-size:36px; margin-bottom:14px; display:block; animation:float 4s ease-in-out infinite; }
  .ms-item:nth-child(2) .ms-ico { animation-delay:-1.3s; }
  .ms-item:nth-child(3) .ms-ico { animation-delay:-2.6s; }
  .ms-title { font-family:'Cinzel',serif; font-size:16px; font-weight:600; color:var(--text); margin-bottom:12px; }
  .ms-desc { font-size:14px; color:var(--text-muted); line-height:1.75; font-weight:300; }

  /* QUOTE BANNER */
  .qb { background:var(--green-dark); padding:80px 32px; position:relative; overflow:hidden; }
  .qb-ring { position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); width:600px; height:600px; border-radius:50%; border:1px solid rgba(255,255,255,0.04); animation:spin 60s linear infinite; pointer-events:none; }
  .qb-inner { max-width:900px; margin:0 auto; text-align:center; position:relative; z-index:1; }
  .qb-icon { font-family:'Playfair Display',serif; font-size:100px; line-height:0.65; color:rgba(255,255,255,0.08); display:block; margin-bottom:20px; }
  .qb-text { font-family:'Playfair Display',serif; font-size:clamp(20px,2.8vw,30px); font-style:italic; color:var(--white); line-height:1.6; margin-bottom:28px; }
  .qb-dash { display:flex; align-items:center; justify-content:center; gap:14px; }
  .qb-line { width:40px; height:1px; background:rgba(255,255,255,0.25); }
  .qb-attr { font-family:'Cinzel',serif; font-size:11px; letter-spacing:0.14em; text-transform:uppercase; color:rgba(255,255,255,0.4); }

  /* BENTO WHY */
  .why-sec { background:var(--white); padding:96px 32px; }
  .why-inner { max-width:1280px; margin:0 auto; }
  .bento { display:grid; grid-template-columns:repeat(6,1fr); grid-auto-rows:190px; gap:14px; margin-top:52px; }
  .bc { border-radius:18px; padding:26px; overflow:hidden; position:relative; transition:transform 0.3s; }
  .bc:hover { transform:scale(1.02); }
  .bc.large  { grid-column:span 3; grid-row:span 2; }
  .bc.medium { grid-column:span 3; }
  .bc.wide   { grid-column:span 4; }
  .bc.small  { grid-column:span 2; }
  .bc-dark  { background:var(--green-dark); }
  .bc-pale  { background:var(--green-pale); border:1px solid var(--border); }
  .bc-light { background:var(--green-light); }
  .bc-off   { background:var(--off-white); border:1px solid var(--border); }
  .bc-ico { font-size:28px; margin-bottom:12px; display:block; }
  .bc.large .bc-ico { font-size:44px; }
  .bc-title { font-family:'Cinzel',serif; font-size:14px; font-weight:600; color:var(--text); margin-bottom:8px; line-height:1.3; }
  .bc-dark .bc-title { color:var(--white); }
  .bc-desc { font-size:13px; color:var(--text-muted); line-height:1.65; font-weight:300; }
  .bc-dark .bc-desc { color:rgba(255,255,255,0.6); }
  .bc.large .bc-title { font-size:20px; }
  .bc.large .bc-desc { font-size:14px; }
  .bc-num { font-family:'Cinzel',serif; font-size:clamp(28px,4vw,48px); font-weight:700; color:var(--green-dark); line-height:1; }
  .bc-dark .bc-num { color:var(--white); }
  .bc-num-lbl { font-size:11px; letter-spacing:0.1em; text-transform:uppercase; color:var(--text-muted); margin-top:4px; }
  .bc-dark .bc-num-lbl { color:rgba(255,255,255,0.45); }

  /* MISSION */
  .mission-sec { background:var(--green-pale); padding:96px 32px; }
  .mission-inner { max-width:1280px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:72px; align-items:start; }
  .mission-imgs { display:grid; grid-template-columns:1fr 1fr; grid-template-rows:210px 210px; gap:14px; }
  .mi { border-radius:14px; overflow:hidden; box-shadow:0 10px 32px var(--shadow); }
  .mi img { width:100%; height:100%; object-fit:cover; display:block; filter:saturate(0.85); transition:transform 0.55s,filter 0.4s; }
  .mi:hover img { transform:scale(1.06); filter:saturate(1.05); }
  .mi:nth-child(1) { border-radius:14px 14px 14px 48px; }
  .mi:nth-child(2) { border-radius:14px 48px 14px 14px; grid-row:span 2; margin-top:28px; }
  .mi:nth-child(2) img { height:calc(210px*2 + 14px + 28px); }
  .mi:nth-child(3) { border-radius:48px 14px 14px 14px; }
  .mp-list { display:flex; flex-direction:column; gap:0; margin-top:32px; }
  .mp-row { display:flex; gap:16px; align-items:flex-start; padding:18px 0; border-bottom:1px solid var(--border); }
  .mp-row:last-child { border-bottom:none; }
  .mp-ico { width:44px; height:44px; background:var(--white); border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:20px; flex-shrink:0; box-shadow:0 4px 12px var(--shadow); }
  .mp-title { font-family:'Cinzel',serif; font-size:13px; font-weight:600; color:var(--text); margin-bottom:4px; }
  .mp-desc { font-size:13px; color:var(--text-muted); line-height:1.65; font-weight:300; }

  /* CTA */
  .cta-sec { background:var(--white); padding:96px 32px; }
  .cta-inner { max-width:1280px; margin:0 auto; }
  .cta-card { background:var(--green-dark); border-radius:28px; overflow:hidden; display:grid; grid-template-columns:1fr 1fr; min-height:360px; }
  .cta-text-side { padding:60px 52px; display:flex; flex-direction:column; justify-content:center; }
  .cta-tag { font-family:'Cinzel',serif; font-size:10px; letter-spacing:0.22em; text-transform:uppercase; color:rgba(255,255,255,0.4); display:block; margin-bottom:14px; }
  .cta-title { font-family:'Cinzel',serif; font-size:clamp(24px,3.2vw,42px); font-weight:700; color:var(--white); line-height:1.15; margin-bottom:16px; }
  .cta-title em { font-style:italic; font-family:'Playfair Display',serif; color:var(--green-light); font-weight:400; }
  .cta-desc { font-size:15px; color:rgba(255,255,255,0.6); line-height:1.75; font-weight:300; margin-bottom:36px; font-style:italic; max-width:420px; }
  .cta-btns { display:flex; gap:14px; flex-wrap:wrap; }
  .btn-white { background:var(--white); color:var(--green-dark); padding:13px 30px; border-radius:50px; border:none; font-family:'Cinzel',serif; font-size:11px; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; cursor:pointer; text-decoration:none; display:inline-block; transition:transform 0.25s; box-shadow:0 6px 20px rgba(0,0,0,0.2); }
  .btn-white:hover { transform:translateY(-2px); }
  .btn-outline-w { background:transparent; color:rgba(255,255,255,0.85); padding:12px 30px; border-radius:50px; border:1.5px solid rgba(255,255,255,0.3); font-family:'Cinzel',serif; font-size:11px; font-weight:600; letter-spacing:0.14em; text-transform:uppercase; cursor:pointer; text-decoration:none; display:inline-block; transition:background 0.25s,transform 0.25s; }
  .btn-outline-w:hover { background:rgba(255,255,255,0.1); transform:translateY(-2px); }
  .cta-img-side { overflow:hidden; position:relative; }
  .cta-img-side img { width:100%; height:100%; object-fit:cover; display:block; filter:saturate(0.8); opacity:0.7; }
  .cta-img-side::before { content:''; position:absolute; inset:0; background:linear-gradient(to right, var(--green-dark) 0%, transparent 40%); z-index:1; }
  .cta-float { position:absolute; bottom:32px; right:32px; z-index:2; background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.15); border-radius:12px; padding:14px 20px; text-align:center; animation:float 4s ease-in-out infinite; }
  .cf-num { font-family:'Cinzel',serif; font-size:22px; font-weight:700; color:var(--white); }
  .cf-lbl { font-size:9px; letter-spacing:0.14em; text-transform:uppercase; color:rgba(255,255,255,0.6); margin-top:3px; }

  /* RESPONSIVE */
  @media(max-width:1100px){
    .split-hero { grid-template-columns:1fr; min-height:auto; }
    .sh-right { grid-template-rows:360px auto; }
    .tl-inner { grid-template-columns:1fr; }
    .tl-left { position:static; }
    .treat-layout { grid-template-columns:1fr; }
    .treat-sticky { position:static; }
    .mission-inner { grid-template-columns:1fr; }
    .cta-card { grid-template-columns:1fr; }
    .cta-img-side { height:240px; }
    .bento { grid-template-columns:repeat(4,1fr); }
    .bc.large { grid-column:span 2; }
  }
  @media(max-width:768px){
    .zz-block { grid-template-columns:1fr; }
    .zz-block.reverse { direction:ltr; }
    .zz-img { height:260px; }
    .method-steps { grid-template-columns:1fr; }
    .method-steps::before { display:none; }
    .bento { grid-template-columns:1fr 1fr; grid-auto-rows:160px; }
    .bc.large,.bc.wide { grid-column:span 2; }
    .mission-imgs { grid-template-columns:1fr 1fr; }
    .mi:nth-child(2) { grid-row:auto; margin-top:0; }
    .mi:nth-child(2) img { height:210px; }
    .sh-stats-row { grid-template-columns:1fr; }
    .sh-stat { border-right:none; border-bottom:1px solid var(--border); }
  }
  @media(max-width:540px){
    .zz-content { padding:44px 24px; }
    .sh-left { padding:44px 28px 56px; }
    .bento { grid-template-columns:1fr; }
    .bc.large,.bc.medium,.bc.wide,.bc.small { grid-column:span 1; }
    .mission-imgs { display:none; }
  }
`;

const mqItems = ["Heritage","18+ Years","Marma Therapy","No Surgery","6000+ Healed","Kerala Tradition","Drug-Free Healing","Nadi Assessment","Kalaripayattu","Ancient Wisdom"];

const journey = [
  { year:"2006", title:"The Beginning", desc:"Unni Gurukkal began formal study of Kalaripayattu Nadi Marma under senior masters in Kerala, immersing deeply in both the martial and healing traditions.", tag:"Foundation" },
  { year:"2010", title:"First Clinic Opens", desc:"The first clinic opened in Thiruvananthapuram. Early results — especially with chronic pain and arthritis — quickly built a reputation for drug-free, lasting recovery.", tag:"Growth" },
  { year:"2015", title:"Neurological Breakthroughs", desc:"Expanded to treat Parkinson's disease, stroke rehabilitation, and nerve compression disorders. Cases declared untreatable by conventional medicine began showing remarkable improvement.", tag:"Milestone" },
  { year:"2024", title:"6000+ Lives Healed", desc:"The milestone of 6,000+ patients reached. Ever Ayur Life became a destination for patients from across Kerala, Karnataka, Tamil Nadu, and beyond.", tag:"Today" },
];

const treatments = [
  { ico:"🦴", name:"Pain & Musculoskeletal Care", count:"6 conditions", pills:["Chronic & Acute Pain","Neck Pain / Cervical Spondylosis","Frozen Shoulder","Back Pain / Spine Issues","Hip Pain / Arm Pain","Compression Fracture"] },
  { ico:"🦵", name:"Degenerative Conditions", count:"5 conditions", pills:["Osteoarthritis","Osteoporosis","Rheumatoid Arthritis","Joint Pain & Stiffness","Walking Imbalance"] },
  { ico:"🧠", name:"Nerve & Neurological Disorders", count:"4 conditions", pills:["Nerve Compression Issues","Carpal Tunnel Syndrome","Parkinson's Disease","Stroke / Hemiplegia"] },
  { ico:"🌸", name:"Women's Health", count:"3 conditions", pills:["Menstrual Disorders","Painful / Irregular Periods","Hormonal Imbalance"] },
  { ico:"💚", name:"General Health Conditions", count:"6 conditions", pills:["Headache / Migraine","Burning Sensation","Limb Pain (Hands & Legs)","Age-related Weakness","Knee Pain & Swelling","Difficulty in Walking"] },
  { ico:"🔄", name:"Surgery Alternatives", count:"5 conditions", pills:["Severe Back Pain","Shoulder & Neck Immobility","Disc Issues","Knee Replacement Cases","Erectile Dysfunction"] },
];

const methods = [
  { n:"01", ico:"✋", title:"Marma Therapy", desc:"Precise activation of 107 vital energy points from the Kalaripayattu tradition. Releases deep blockages, restores prana flow, and triggers the body's innate self-healing intelligence." },
  { n:"02", ico:"🧘", title:"Yoga", desc:"Individually prescribed posture sequences that restore structural balance, flexibility, and strength — adapted to each patient's constitution, condition, and healing stage." },
  { n:"03", ico:"💨", title:"Pranayama", desc:"Ancient breathing protocols that calm the nervous system, reduce inflammation, accelerate cellular healing, and restore the vital breath force that modern medicine rarely addresses." },
];

const missions = [
  { ico:"🌿", title:"Pain-Free Living", desc:"Help every patient live pain-free without lifelong dependence on medicines, injections, or surgery." },
  { ico:"🌱", title:"Preserve Healing Heritage", desc:"Protect and pass on the ancient knowledge of Kalaripayattu Nadi Marma — Kerala's most sacred healing tradition." },
  { ico:"⚖️", title:"Holistic Balance", desc:"Restore true health by treating the whole person — body, mind, and soul — not just isolated symptoms." },
  { ico:"📚", title:"Empower Communities", desc:"Educate patients and families in natural preventive health so that healing becomes a way of life." },
];

export default function About() {
  return (
    <>
      <style>{FONTS + CSS}</style>

      {/* MARQUEE */}
      <div className="mq">
        <div className="mq-track">
          {[...mqItems,...mqItems,...mqItems].map((t,i)=>(
            <span className="mq-item" key={i}>{t}<span className="mq-dot"/></span>
          ))}
        </div>
      </div>

      {/* SPLIT HERO */}
      <div className="split-hero">
        <div className="sh-left">
          <div className="sh-left-img"/>
          <div className="sh-left-ring"/>
          <div className="sh-left-ring2"/>
          <p className="sh-eyebrow">About Ever Ayur Life</p>
          <h1 className="sh-big">Ancient<br/><em>Wisdom.</em>Real Results.</h1>
          <div className="sh-divider"/>
          <p className="sh-para">We practice Kalaripayattu Nadi Marma Therapy — Kerala's sacred healing tradition that activates the body's 107 vital energy points to restore natural balance, eliminate pain, and awaken the body's self-healing intelligence.</p>
          <div className="sh-badge-row">
            <div className="sh-badge"><span className="sh-badge-dot"/><span>Drug-Free Healing</span></div>
            <div className="sh-badge"><span className="sh-badge-dot"/><span>Kerala Tradition</span></div>
            <div className="sh-badge"><span className="sh-badge-dot"/><span>No Surgery</span></div>
          </div>
        </div>
        <div className="sh-right">
          <div className="sh-img-top">
            <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900" alt="Marma Therapy"/>
          </div>
          <div className="sh-stats-row">
            {[{ico:"🌿",num:"18+",lbl:"Years of Mastery"},{ico:"👥",num:"6000+",lbl:"Patients Healed"},{ico:"🚫",num:"0",lbl:"Medicines Used"}].map((s,i)=>(
              <div className="sh-stat" key={i}>
                <div className="sh-stat-ico">{s.ico}</div>
                <div className="sh-stat-num">{s.num}</div>
                <div className="sh-stat-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ZIGZAG STORY */}
      <div>
        <div className="zz-block">
          <div className="zz-img">
            <img src="https://shadharawellness.com/wp-content/uploads/2025/05/tharpana.jpg" alt="Kerala tradition"/>
            <div className="zz-overlay"/>
          </div>
          <div className="zz-content">
            <span className="zz-tag">Our Story</span>
            <h2 className="zz-title">Rooted in <em>Kerala's</em><br/>Sacred Healing Arts</h2>
            <div className="zz-line"/>
            <blockquote className="zz-quote">"When the body feels pain, true healing comes when body, mind, and soul are restored together."</blockquote>
            <p className="zz-desc">At <strong>Ever Ayur Life</strong>, we practice <strong>Kalaripayattu Nadi Marma Therapy</strong> — Kerala's ancient tradition that activates the body's 107 vital energy points to restore natural balance and eliminate pain at its root, not just its surface.</p>
            <p className="zz-desc">Our mission: help you live a pain-free, vibrant life without medicines or surgery. Every session is deeply personalized, treating not just symptoms but the whole person.</p>
            <div className="zz-checks">
              {["100% Drug-Free — Zero Side Effects","No Surgery Approach for Chronic Conditions","Personalized Assessment for Every Individual","Kalaripayattu — Kerala's Living Healing Tradition"].map((c,i)=>(
                <div className="zz-check" key={i}><div className="zz-chk">✓</div>{c}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="zz-block reverse">
          <div className="zz-img">
            <img src="https://spalotusrelaxation.com/wp-content/uploads/2024/09/massage.jpg" alt="Ayurvedic herbs"/>
            <div className="zz-overlay"/>
          </div>
          <div className="zz-content">
            <span className="zz-tag">Our Philosophy</span>
            <h2 className="zz-title">Treating the <em>Person,</em><br/>Not Just the Disease</h2>
            <div className="zz-line"/>
            <p className="zz-desc">Most healthcare systems treat symptoms. At Ever Ayur Life, we treat the <strong>whole person</strong> — because physical pain rarely exists in isolation. It is bound up with mental stress, emotional patterns, and spiritual imbalance.</p>
            <p className="zz-desc">Every treatment begins with a traditional Nadi (pulse) diagnosis — reading the body's intelligence before ever making contact with a Marma point, ensuring each session moves the patient toward their unique natural state of balance.</p>
            <blockquote className="zz-quote">"The body has the power to heal itself — the purpose of treatment is to awaken that power."</blockquote>
            <div className="zz-checks">
              {["Body — Marma activation of 107 vital energy points","Mind — Pranayama and breath restoration","Soul — Kalaripayattu's spiritual alignment tradition"].map((c,i)=>(
                <div className="zz-check" key={i}><div className="zz-chk">✓</div>{c}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* TIMELINE HEALER */}
      <section className="timeline-sec">
        <div className="tl-inner">
          <div className="tl-left">
            <span className="tl-tag">Meet Your Healer</span>
            <h2 className="tl-name">Unni<br/>Gurukkal</h2>
            <div className="tl-role">Master · Kalaripayattu Nadi Marma</div>
            <div className="tl-img-wrap">
              <img className="tl-img" src="https://img.punjabijagran.com/webstories/119546/benefits-of-foot-massage-1735451545.webp" alt="Unni Gurukkal"/>
              <div className="tl-ribbon">
                <div className="tr-num">6000+</div>
                <div className="tr-lbl">Patients Healed</div>
              </div>
            </div>
            <div className="tl-stat-row">
              {[{n:"18+",l:"Years Exp."},{n:"6000+",l:"Patients"},{n:"100%",l:"Drug-Free"},{n:"0",l:"Medicines"}].map((s,i)=>(
                <div className="tl-stat" key={i}><div className="tl-stat-n">{s.n}</div><div className="tl-stat-l">{s.l}</div></div>
              ))}
            </div>
          </div>
          <div>
            <div className="tl-items">
              {journey.map((m,i)=>(
                <div className="tl-item" key={i}>
                  <div>
                    <div className="tl-year">{m.year}</div>
                    <div className="tl-spine">
                      <div className="tl-node"/>
                      <div className="tl-vline"/>
                    </div>
                  </div>
                  <div className="tl-card">
                    <span className="tl-card-tag">{m.tag}</span>
                    <h4>{m.title}</h4>
                    <p>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TREATMENTS */}
      <section className="treat-sec">
        <div className="treat-inner">
          <div className="treat-layout">
            <div className="treat-sticky">
              <span className="treat-tag">What We Heal</span>
              <h2 className="treat-title">Conditions We <em>Treat</em></h2>
              <div className="treat-divider"/>
              <p className="treat-intro">From chronic pain and neurological disorders to conditions where surgery is prescribed — Kalaripayattu Nadi Marma Therapy addresses the root cause, not just the symptom.</p>
              <div className="treat-special">
                <div className="ts-label">⚡ Special Focus</div>
                <div className="ts-text">For cases where surgery is advised — knee replacement, spinal disc issues, frozen shoulder — Ever Ayur Life offers a proven natural alternative without knives, risk, or recovery time.</div>
              </div>
            </div>
            <div className="treat-groups">
              {treatments.map((t,i)=>(
                <div className="treat-group" key={i}>
                  <div className="tg-header">
                    <div className="tg-ico">{t.ico}</div>
                    <div className="tg-name">{t.name}</div>
                    <div className="tg-count">{t.count}</div>
                  </div>
                  <div className="tg-pills">
                    {t.pills.map((p,j)=><span className="tg-pill" key={j}>{p}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* METHODS */}
      <section className="method-sec">
        <div className="method-inner">
          <div style={{textAlign:"center"}}>
            <span className="zz-tag" style={{display:"block",marginBottom:"10px"}}>Treatment Methodology</span>
            <h2 className="zz-title" style={{fontSize:"clamp(24px,3.5vw,42px)"}}>Three Pillars of Our <em>Healing Method</em></h2>
          </div>
          <div className="method-steps">
            {methods.map((m,i)=>(
              <div className="ms-item" key={i}>
                <div className="ms-num-wrap">
                  <div className="ms-ring"/>
                  <div className="ms-num">{m.n}</div>
                </div>
                <span className="ms-ico">{m.ico}</span>
                <h3 className="ms-title">{m.title}</h3>
                <p className="ms-desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE BANNER */}
      <div className="qb">
        <div className="qb-ring"/>
        <div className="qb-inner">
          <span className="qb-icon">"</span>
          <p className="qb-text">Treatment here is not just therapy — it feels like returning to a new life. After years of chronic pain and failed treatments, Ever Ayur Life gave me my freedom back without a single medicine.</p>
          <div className="qb-dash">
            <div className="qb-line"/>
            <span className="qb-attr">Patient · Ever Ayur Life · Thiruvananthapuram</span>
            <div className="qb-line"/>
          </div>
        </div>
      </div>

      {/* BENTO WHY */}
      <section className="why-sec">
        <div className="why-inner">
          <div style={{textAlign:"center"}}>
            <span className="treat-tag" style={{color:"var(--green)",display:"block",marginBottom:"10px"}}>Why Choose Us</span>
            <h2 className="treat-title" style={{fontSize:"clamp(24px,3.5vw,42px)"}}>The Ever Ayur Life <em>Difference</em></h2>
          </div>
          <div className="bento">
            <div className="bc large bc-dark">
              <span className="bc-ico">🚫</span>
              <div className="bc-title">100% Drug-Free Healing</div>
              <div className="bc-desc">Zero medicines, zero injections, zero side effects. Every transformation happens through natural intelligence alone. The body knows how to heal — we simply awaken it.</div>
            </div>
            <div className="bc medium bc-pale">
              <div className="bc-num">18+</div>
              <div className="bc-num-lbl">Years of Mastery</div>
            </div>
            <div className="bc medium bc-light">
              <div className="bc-num">6000+</div>
              <div className="bc-num-lbl">Patients Healed</div>
            </div>
            <div className="bc wide bc-off">
              <span className="bc-ico">🔪</span>
              <div className="bc-title">Surgery Alternative</div>
              <div className="bc-desc">For conditions where surgery is prescribed, Marma therapy offers a deeply effective natural path — without knives, risk, or recovery time.</div>
            </div>
            <div className="bc small bc-pale">
              <span className="bc-ico">🧬</span>
              <div className="bc-title">Personalized Care</div>
              <div className="bc-desc">Each plan crafted from a traditional Nadi pulse assessment.</div>
            </div>
            <div className="bc small bc-dark">
              <div className="bc-num">107</div>
              <div className="bc-num-lbl">Marma Points</div>
            </div>
            <div className="bc small bc-off">
              <span className="bc-ico">📜</span>
              <div className="bc-title">Authentic Tradition</div>
              <div className="bc-desc">Passed down through Kerala's Kalaripayattu lineage.</div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="mission-sec">
        <div className="mission-inner">
          <div>
            <span className="zz-tag">Our Mission</span>
            <h2 className="zz-title" style={{fontSize:"clamp(22px,3vw,38px)"}}>Committed to<br/><em>Natural Health</em> for All</h2>
            <div className="zz-line"/>
            <p className="zz-desc">Our mission is not merely to treat symptoms — it is to guide every patient toward lasting freedom from pain, medicine, and surgical intervention through the intelligence of nature and ancient tradition.</p>
            <p className="zz-desc">We believe the body, when properly supported, has the capacity to heal itself from conditions that modern medicine considers chronic or irreversible.</p>
            <div className="mp-list">
              {missions.map((m,i)=>(
                <div className="mp-row" key={i}>
                  <div className="mp-ico">{m.ico}</div>
                  <div><div className="mp-title">{m.title}</div><div className="mp-desc">{m.desc}</div></div>
                </div>
              ))}
            </div>
          </div>
          <div className="mission-imgs">
            <div className="mi"><img src="https://5.imimg.com/data5/SELLER/Default/2025/2/487810855/RF/AS/LK/23146979/advanced-kalari-marma-therapy-course-trivandrum-500x500.jpg" alt="Healing"/></div>
            <div className="mi"><img src="https://tigrisvalley.com/wp-content/uploads/2024/08/image-5.png" alt="Ayurveda"/></div>
            <div className="mi"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQURQInml5z8ANtHbAuJijoHmX8O5Gzu4Ie3Q&s" alt="Therapy"/></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-sec">
        <div className="cta-inner">
          <div className="cta-card">
            <div className="cta-text-side">
              <span className="cta-tag">Begin Your Journey</span>
              <h2 className="cta-title">Ready to Heal <em>Naturally?</em></h2>
              <p className="cta-desc">"Experience 18+ years of Kalaripayattu Nadi Marma mastery. Book your free Nadi assessment and take the first step toward a pain-free, medicine-free life."</p>
              <div className="cta-btns">
                <a href="/contact" className="btn-white">Book Free Nadi Assessment</a>
                <a href="/treatment" className="btn-outline-w">Explore Treatments</a>
              </div>
            </div>
            <div className="cta-img-side">
              <img src="https://cdn.shopify.com/s/files/1/0784/9725/1578/articles/ayr_0bdecce9-7cb7-4df0-94f0-19261758ec6b_800x.jpg?v=1775022208" alt="Nature healing"/>
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
