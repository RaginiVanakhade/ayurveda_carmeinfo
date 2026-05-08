import { useState } from "react";

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
  *{margin:0;padding:0;box-sizing:border-box;}
  html{scroll-behavior:smooth;}
  body{font-family:'Nunito',sans-serif;background:var(--white);color:var(--text);overflow-x:hidden;}

  @keyframes marquee  {from{transform:translateX(0)}to{transform:translateX(-50%)}}
  @keyframes spinSlow {from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
  @keyframes floatY   {0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
  @keyframes fadeUp   {from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
  @keyframes pulseGlow{0%,100%{box-shadow:0 0 0 0 rgba(90,90,42,0)}50%{box-shadow:0 0 0 10px rgba(90,90,42,0.1)}}
  @keyframes checkBounce{0%{transform:scale(0)}60%{transform:scale(1.25)}100%{transform:scale(1)}}
  @keyframes blink    {0%,100%{opacity:1}50%{opacity:0.3}}
  @keyframes slideRight{from{opacity:0;transform:translateX(-20px)}to{opacity:1;transform:translateX(0)}}

  /* ── MARQUEE ── */
  .mq{background:var(--green-dark);padding:11px 0;overflow:hidden;}
  .mq-track{display:flex;animation:marquee 28s linear infinite;white-space:nowrap;}
  .mq-item{display:inline-flex;align-items:center;gap:10px;padding:0 28px;
    font-family:'Cinzel',serif;font-size:10px;letter-spacing:0.18em;
    text-transform:uppercase;color:rgba(255,255,255,0.65);}
  .mq-sep{width:4px;height:4px;border-radius:50%;background:rgba(238,243,214,0.35);}

  /* ═══════════════════════════════════
     HERO — full-width cinematic banner
  ═══════════════════════════════════ */
  .hero{
    position:relative;height:52vh;min-height:380px;
    background:var(--green-dark);overflow:hidden;
    display:flex;align-items:flex-end;
  }
  .hero-bg{
    position:absolute;inset:0;
    background:url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1600') center/cover no-repeat;
    opacity:0.14;
  }
  /* diagonal lines pattern */
  .hero-pattern{
    position:absolute;inset:0;
    background-image:repeating-linear-gradient(
      -45deg,
      rgba(238,243,214,0.03) 0px,
      rgba(238,243,214,0.03) 1px,
      transparent 1px,
      transparent 12px
    );
    pointer-events:none;
  }
  .hero-ring-l{position:absolute;left:-140px;top:-140px;width:520px;height:520px;border-radius:50%;border:1px solid rgba(238,243,214,0.05);animation:spinSlow 70s linear infinite;pointer-events:none;}
  .hero-ring-r{position:absolute;right:-100px;bottom:-100px;width:400px;height:400px;border-radius:50%;border:1px solid rgba(238,243,214,0.06);animation:spinSlow 50s linear infinite reverse;pointer-events:none;}

  .hero-inner{
    position:relative;z-index:2;
    max-width:1280px;margin:0 auto;width:100%;
    padding:0 60px 60px;
    display:grid;grid-template-columns:1fr auto;
    align-items:flex-end;gap:40px;
  }
  .hero-left{}
  .hero-eyebrow{
    font-family:'Cinzel',serif;font-size:10px;letter-spacing:0.28em;
    text-transform:uppercase;color:rgba(255,255,255,0.38);
    display:flex;align-items:center;gap:12px;margin-bottom:16px;
  }
  .hero-eyebrow::before{content:'';width:28px;height:1px;background:rgba(255,255,255,0.25);}
  .hero-title{
    font-family:'Cinzel',serif;
    font-size:clamp(38px,6vw,80px);
    font-weight:700;color:var(--white);line-height:1.02;
    letter-spacing:-0.01em;
  }
  .hero-title em{
    font-style:italic;font-family:'Playfair Display',serif;
    color:var(--green-light);font-weight:400;
  }
  .hero-right{text-align:right;padding-bottom:4px;}
  .hero-cta-label{
    font-family:'Cinzel',serif;font-size:9px;letter-spacing:0.22em;
    text-transform:uppercase;color:rgba(255,255,255,0.3);
    display:block;margin-bottom:10px;
  }
  .hero-scroll-hint{
    display:flex;flex-direction:column;align-items:center;gap:6px;
  }
  .hsh-text{font-family:'Cinzel',serif;font-size:9px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.3);}
  .hsh-line{width:1px;height:36px;background:linear-gradient(to bottom,rgba(255,255,255,0.3),transparent);animation:floatY 2s ease-in-out infinite;}

  /* ═══════════════════════════════════
     INFO CARDS — horizontal ticker row
  ═══════════════════════════════════ */
  .info-bar{background:var(--white);border-bottom:1px solid var(--border);}
  .info-bar-inner{
    max-width:1280px;margin:0 auto;
    display:grid;grid-template-columns:repeat(4,1fr);
    border-left:1px solid var(--border);
  }
  .ib-card{
    padding:32px 28px;border-right:1px solid var(--border);
    display:flex;gap:16px;align-items:flex-start;
    transition:background 0.3s;position:relative;overflow:hidden;
  }
  .ib-card::after{
    content:'';position:absolute;bottom:0;left:0;right:0;height:2px;
    background:linear-gradient(90deg,var(--green),var(--green-mid));
    transform:scaleX(0);transform-origin:left;transition:transform 0.35s;
  }
  .ib-card:hover{background:var(--green-pale);}
  .ib-card:hover::after{transform:scaleX(1);}
  .ib-ico{
    width:44px;height:44px;flex-shrink:0;border-radius:10px;
    background:var(--green-light);display:flex;align-items:center;
    justify-content:center;font-size:20px;
    transition:background 0.3s,transform 0.3s;
  }
  .ib-card:hover .ib-ico{background:var(--green);transform:scale(1.1);}
  .ib-label{font-family:'Cinzel',serif;font-size:9px;letter-spacing:0.2em;text-transform:uppercase;color:var(--text-muted);margin-bottom:5px;font-weight:600;}
  .ib-value{font-size:13.5px;color:var(--text);font-weight:600;line-height:1.5;}
  .ib-sub{font-size:12px;color:var(--text-muted);font-weight:300;margin-top:2px;}

  /* ═══════════════════════════════════
     FORM SECTION — dark full-width bg
     centered glass card
  ═══════════════════════════════════ */
  .form-sec{
    background:var(--green-dark);
    padding:80px 32px;position:relative;overflow:hidden;
  }
  .fs-dots{
    position:absolute;inset:0;
    background-image:radial-gradient(rgba(238,243,214,0.06) 1px,transparent 1px);
    background-size:30px 30px;pointer-events:none;
  }
  .fs-ring1{position:absolute;left:-200px;top:50%;transform:translateY(-50%);width:700px;height:700px;border-radius:50%;border:1px solid rgba(255,255,255,0.03);animation:spinSlow 90s linear infinite;pointer-events:none;}
  .fs-ring2{position:absolute;right:-150px;top:50%;transform:translateY(-50%);width:500px;height:500px;border-radius:50%;border:1px solid rgba(255,255,255,0.04);animation:spinSlow 65s linear infinite reverse;pointer-events:none;}

  .form-sec-inner{max-width:1100px;margin:0 auto;position:relative;z-index:2;}

  /* top label */
  .fs-top{text-align:center;margin-bottom:52px;}
  .fs-tag{font-family:'Cinzel',serif;font-size:10px;letter-spacing:0.28em;text-transform:uppercase;color:rgba(255,255,255,0.3);display:block;margin-bottom:14px;}
  .fs-title{font-family:'Cinzel',serif;font-size:clamp(26px,4vw,50px);font-weight:700;color:var(--white);line-height:1.12;}
  .fs-title em{font-style:italic;font-family:'Playfair Display',serif;color:var(--green-light);font-weight:400;}
  .fs-line{width:48px;height:2px;background:linear-gradient(90deg,rgba(255,255,255,0.25),rgba(255,255,255,0.08));border-radius:2px;margin:18px auto 0;}

  /* two-column layout: concern pills left, form right */
  .fs-layout{display:grid;grid-template-columns:300px 1fr;gap:28px;align-items:start;}

  /* left — concern selector as vertical list */
  .concern-panel{
    background:rgba(255,255,255,0.05);
    border:1px solid rgba(255,255,255,0.08);
    border-radius:16px;overflow:hidden;
  }
  .cp-header{
    padding:20px 24px;border-bottom:1px solid rgba(255,255,255,0.07);
    font-family:'Cinzel',serif;font-size:10px;letter-spacing:0.2em;
    text-transform:uppercase;color:rgba(255,255,255,0.35);
  }
  .cp-item{
    display:flex;align-items:center;gap:14px;
    padding:16px 24px;border-bottom:1px solid rgba(255,255,255,0.05);
    cursor:pointer;transition:background 0.25s;position:relative;
  }
  .cp-item:last-child{border-bottom:none;}
  .cp-item:hover{background:rgba(255,255,255,0.06);}
  .cp-item.sel{background:rgba(238,243,214,0.1);}
  .cp-item.sel::before{
    content:'';position:absolute;left:0;top:0;bottom:0;width:3px;
    background:linear-gradient(to bottom,var(--green),var(--green-mid));
  }
  .cp-ico{font-size:20px;flex-shrink:0;}
  .cp-name{font-family:'Cinzel',serif;font-size:12px;font-weight:600;color:rgba(255,255,255,0.75);letter-spacing:0.06em;}
  .cp-item.sel .cp-name{color:var(--green-light);}
  .cp-check{margin-left:auto;width:18px;height:18px;border-radius:50%;border:1.5px solid rgba(255,255,255,0.2);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:10px;color:transparent;transition:all 0.25s;}
  .cp-item.sel .cp-check{background:var(--green);border-color:var(--green);color:var(--white);}

  /* right — glass form card */
  .form-card{
    background:rgba(255,255,255,0.97);
    border-radius:16px;overflow:hidden;
    box-shadow:0 24px 64px rgba(0,0,0,0.25);
  }
  .fc-header{
    background:var(--green-pale);
    border-bottom:1px solid var(--border);
    padding:22px 32px;
    display:flex;align-items:center;justify-content:space-between;
  }
  .fc-h-title{font-family:'Cinzel',serif;font-size:13px;font-weight:700;color:var(--text);}
  .fc-h-badge{
    background:var(--green-dark);color:var(--white);
    font-family:'Cinzel',serif;font-size:9px;letter-spacing:0.14em;
    text-transform:uppercase;padding:6px 14px;border-radius:50px;
    display:flex;align-items:center;gap:7px;
  }
  .fc-badge-dot{width:5px;height:5px;border-radius:50%;background:var(--green-light);animation:blink 2s ease-in-out infinite;}

  .fc-body{padding:32px;}
  .fc-row{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px;}
  .fc-field{position:relative;}
  .fc-field.full{grid-column:span 2;}
  .fc-input,.fc-select,.fc-textarea{
    width:100%;background:var(--off-white);
    border:1.5px solid var(--border);border-radius:8px;
    padding:20px 16px 8px;
    font-family:'Nunito',sans-serif;font-size:14px;
    color:var(--text);outline:none;
    transition:border-color 0.25s,box-shadow 0.25s;
    appearance:none;resize:none;
  }
  .fc-input:focus,.fc-select:focus,.fc-textarea:focus{
    border-color:var(--green);background:var(--white);
    box-shadow:0 0 0 3px rgba(90,90,42,0.08);
  }
  .fc-textarea{min-height:100px;padding-top:24px;}
  .fc-lbl{
    position:absolute;top:14px;left:16px;
    font-family:'Cinzel',serif;font-size:9px;letter-spacing:0.16em;
    text-transform:uppercase;color:var(--text-muted);font-weight:600;
    transition:all 0.2s;pointer-events:none;
  }
  .fc-input:focus~.fc-lbl,
  .fc-input:not(:placeholder-shown)~.fc-lbl,
  .fc-select:focus~.fc-lbl,
  .fc-textarea:focus~.fc-lbl,
  .fc-textarea:not(:placeholder-shown)~.fc-lbl{
    top:6px;font-size:8px;color:var(--green);
  }

  /* time slot grid inside form */
  .fc-slot-label{font-family:'Cinzel',serif;font-size:9px;letter-spacing:0.2em;text-transform:uppercase;color:var(--text-muted);font-weight:600;display:block;margin:0 0 12px;}
  .fc-slots{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:20px;}
  .fc-slot{
    background:var(--white);border:1.5px solid var(--border);
    border-radius:7px;padding:9px 4px;cursor:pointer;text-align:center;
    transition:all 0.22s;
  }
  .fc-slot:hover{border-color:var(--green);background:var(--green-pale);}
  .fc-slot.on{border-color:var(--green-dark);background:var(--green-dark);}
  .fcs-t{font-family:'Cinzel',serif;font-size:11px;font-weight:700;color:var(--text-mid);}
  .fc-slot.on .fcs-t{color:var(--white);}
  .fcs-p{font-size:9px;color:var(--text-muted);margin-top:1px;}
  .fc-slot.on .fcs-p{color:rgba(255,255,255,0.6);}

  /* privacy row */
  .fc-privacy{
    display:flex;gap:10px;align-items:flex-start;
    background:var(--green-pale);border-radius:8px;
    padding:13px 16px;margin-bottom:20px;
  }
  .fcp-ico{font-size:15px;flex-shrink:0;margin-top:1px;}
  .fcp-txt{font-size:12px;color:var(--text-muted);line-height:1.6;font-weight:300;}

  /* submit */
  .fc-submit{
    width:100%;background:linear-gradient(135deg,var(--green-dark),var(--green));
    color:var(--white);border:none;border-radius:8px;
    padding:16px;font-family:'Cinzel',serif;font-size:11px;
    font-weight:700;letter-spacing:0.16em;text-transform:uppercase;
    cursor:pointer;transition:transform 0.25s,box-shadow 0.25s;
    box-shadow:0 6px 24px rgba(59,59,26,0.28);
    display:flex;align-items:center;justify-content:center;gap:10px;
  }
  .fc-submit:hover{transform:translateY(-2px);box-shadow:0 12px 36px rgba(59,59,26,0.38);}
  .fc-arrow{transition:transform 0.25s;}
  .fc-submit:hover .fc-arrow{transform:translateX(5px);}

  /* SUCCESS */
  .success-wrap{
    background:rgba(255,255,255,0.97);border-radius:16px;
    padding:60px 40px;text-align:center;
    box-shadow:0 24px 64px rgba(0,0,0,0.25);
    animation:fadeUp 0.6s ease both;
  }
  .sw-ring{
    width:88px;height:88px;border-radius:50%;
    background:linear-gradient(135deg,var(--green-dark),var(--green));
    display:flex;align-items:center;justify-content:center;
    font-size:38px;margin:0 auto 24px;
    box-shadow:0 10px 32px rgba(59,59,26,0.28);
    animation:checkBounce 0.6s 0.2s cubic-bezier(0.34,1.56,0.64,1) both;
  }
  .sw-title{font-family:'Cinzel',serif;font-size:clamp(22px,3vw,34px);font-weight:700;color:var(--text);margin-bottom:10px;}
  .sw-title em{font-style:italic;font-family:'Playfair Display',serif;color:var(--green);}
  .sw-desc{font-size:14px;color:var(--text-muted);line-height:1.8;font-weight:300;max-width:340px;margin:0 auto 28px;}
  .sw-summary{
    background:var(--green-pale);border:1px solid var(--border);
    border-radius:12px;padding:20px 24px;margin-bottom:28px;text-align:left;
  }
  .sws-tag{font-family:'Cinzel',serif;font-size:9px;letter-spacing:0.2em;text-transform:uppercase;color:var(--green);display:block;margin-bottom:12px;font-weight:600;}
  .sws-row{display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid var(--border);font-size:13px;}
  .sws-row:last-child{border-bottom:none;}
  .sws-k{color:var(--text-muted);font-weight:300;}
  .sws-v{font-family:'Cinzel',serif;font-size:11px;font-weight:700;color:var(--text);}
  .sw-again{background:var(--green-dark);color:var(--white);padding:12px 28px;border-radius:7px;border:none;font-family:'Cinzel',serif;font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;cursor:pointer;transition:transform 0.2s;}
  .sw-again:hover{transform:translateY(-2px);}

  /* ═══════════════════════════════════
     HOURS + MAP ROW
  ═══════════════════════════════════ */
  .hours-map-sec{background:var(--off-white);border-top:1px solid var(--border);}
  .hm-inner{max-width:1280px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;}

  /* hours side */
  .hm-hours{padding:56px 60px;border-right:1px solid var(--border);}
  .hm-tag{font-family:'Cinzel',serif;font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:var(--green);font-weight:600;display:block;margin-bottom:14px;}
  .hm-title{font-family:'Cinzel',serif;font-size:clamp(22px,3vw,34px);font-weight:700;color:var(--text);line-height:1.18;margin-bottom:32px;}
  .hm-title em{font-style:italic;font-family:'Playfair Display',serif;color:var(--green);}
  .hours-table{display:flex;flex-direction:column;gap:0;}
  .ht-row{display:flex;align-items:center;gap:16px;padding:14px 0;border-bottom:1px solid var(--border);}
  .ht-row:first-child{border-top:1px solid var(--border);}
  .ht-dot{width:8px;height:8px;border-radius:50%;background:var(--green);flex-shrink:0;animation:blink 2.5s ease-in-out infinite;}
  .ht-dot.off{background:var(--text-muted);animation:none;}
  .ht-day{font-family:'Cinzel',serif;font-size:12px;font-weight:600;color:var(--text);min-width:90px;}
  .ht-times{display:flex;gap:8px;flex-wrap:wrap;}
  .ht-badge{background:var(--green-light);border:1px solid rgba(90,90,42,0.15);border-radius:50px;padding:4px 12px;font-family:'Cinzel',serif;font-size:10px;font-weight:700;color:var(--green-dark);}

  /* stat pills below hours */
  .hm-stats{display:flex;gap:10px;flex-wrap:wrap;margin-top:32px;}
  .hms-pill{
    background:var(--white);border:1px solid var(--border);
    border-radius:50px;padding:10px 18px;
    display:flex;align-items:center;gap:8px;
    box-shadow:0 2px 10px var(--shadow);
  }
  .hms-ico{font-size:16px;}
  .hms-num{font-family:'Cinzel',serif;font-size:15px;font-weight:700;color:var(--green-dark);}
  .hms-lbl{font-size:11px;color:var(--text-muted);letter-spacing:0.04em;}

  /* map / location side */
  .hm-location{padding:56px 60px;display:flex;flex-direction:column;justify-content:space-between;}
  .hml-tag{font-family:'Cinzel',serif;font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:var(--green);font-weight:600;display:block;margin-bottom:14px;}
  .hml-title{font-family:'Cinzel',serif;font-size:clamp(22px,3vw,34px);font-weight:700;color:var(--text);line-height:1.18;margin-bottom:24px;}
  .hml-title em{font-style:italic;font-family:'Playfair Display',serif;color:var(--green);}

  /* fake map card */
  .map-card{
    background:var(--green-dark);border-radius:14px;
    overflow:hidden;position:relative;height:220px;
    box-shadow:0 12px 36px rgba(59,59,26,0.18);margin-bottom:20px;
  }
  .map-bg{
    position:absolute;inset:0;
    background:url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800') center/cover no-repeat;
    opacity:0.2;
  }
  /* grid lines for map feel */
  .map-grid{
    position:absolute;inset:0;
    background-image:
      linear-gradient(rgba(238,243,214,0.08) 1px,transparent 1px),
      linear-gradient(90deg,rgba(238,243,214,0.08) 1px,transparent 1px);
    background-size:40px 40px;
  }
  .map-pin{
    position:absolute;left:50%;top:50%;transform:translate(-50%,-60%);
    display:flex;flex-direction:column;align-items:center;z-index:2;
    animation:floatY 3s ease-in-out infinite;
  }
  .mp-dot{
    width:20px;height:20px;border-radius:50%;
    background:linear-gradient(135deg,var(--green-dark),var(--green));
    border:3px solid var(--white);
    box-shadow:0 4px 14px rgba(59,59,26,0.4);
  }
  .mp-stem{width:2px;height:14px;background:var(--white);opacity:0.7;}
  .mp-shadow{width:10px;height:4px;border-radius:50%;background:rgba(0,0,0,0.3);}
  .map-label{
    position:absolute;left:50%;top:50%;transform:translate(-40%,-160%);
    background:var(--white);border-radius:8px;padding:8px 14px;
    box-shadow:0 6px 20px rgba(0,0,0,0.2);z-index:3;white-space:nowrap;
  }
  .ml-name{font-family:'Cinzel',serif;font-size:11px;font-weight:700;color:var(--green-dark);}
  .ml-city{font-size:10px;color:var(--text-muted);}

  /* reach-us row */
  .reach-row{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}
  .rr-item{
    background:var(--white);border:1px solid var(--border);border-radius:10px;
    padding:14px;display:flex;align-items:center;gap:10px;
    transition:background 0.25s,transform 0.25s;
  }
  .rr-item:hover{background:var(--green-pale);transform:translateY(-2px);}
  .rr-ico{font-size:22px;flex-shrink:0;}
  .rr-title{font-family:'Cinzel',serif;font-size:11px;font-weight:600;color:var(--text);margin-bottom:2px;}
  .rr-sub{font-size:11px;color:var(--text-muted);font-weight:300;line-height:1.4;}

  /* ═══════════════════════════════════
     FAQ ACCORDION
  ═══════════════════════════════════ */
  .faq-sec{background:var(--white);padding:80px 32px;}
  .faq-inner{max-width:860px;margin:0 auto;}
  .faq-head{text-align:center;margin-bottom:52px;}
  .faq-tag{font-family:'Cinzel',serif;font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:var(--green);font-weight:600;display:block;margin-bottom:12px;}
  .faq-title{font-family:'Cinzel',serif;font-size:clamp(22px,3.5vw,40px);font-weight:700;color:var(--text);line-height:1.18;}
  .faq-title em{font-style:italic;font-family:'Playfair Display',serif;color:var(--green);}
  .faq-list{display:flex;flex-direction:column;gap:0;}
  .faq-item{border-bottom:1px solid var(--border);}
  .faq-item:first-child{border-top:1px solid var(--border);}
  .faq-q{
    display:flex;justify-content:space-between;align-items:center;
    padding:22px 0;cursor:pointer;gap:16px;
    transition:color 0.25s;
  }
  .faq-q:hover .fq-text{color:var(--green);}
  .fq-text{font-family:'Cinzel',serif;font-size:14px;font-weight:600;color:var(--text);line-height:1.4;}
  .fq-icon{
    width:32px;height:32px;border-radius:50%;flex-shrink:0;
    background:var(--green-pale);border:1px solid var(--border);
    display:flex;align-items:center;justify-content:center;
    font-size:16px;color:var(--green);
    transition:background 0.3s,transform 0.3s;
  }
  .faq-item.open .fq-icon{background:var(--green);color:var(--white);transform:rotate(45deg);}
  .faq-a{
    max-height:0;overflow:hidden;
    transition:max-height 0.4s ease,padding 0.3s ease;
  }
  .faq-item.open .faq-a{max-height:300px;padding-bottom:20px;}
  .fa-text{font-size:14px;color:var(--text-muted);line-height:1.82;font-weight:300;}

  /* ═══════════════════════════════════
     BOTTOM CTA BANNER
  ═══════════════════════════════════ */
  .cta-banner{
    background:var(--green-dark);padding:0;
    display:grid;grid-template-columns:1fr 1fr;
    min-height:300px;position:relative;overflow:hidden;
  }
  .cta-banner::before{
    content:'';position:absolute;inset:0;
    background-image:repeating-linear-gradient(-45deg,rgba(238,243,214,0.03) 0px,rgba(238,243,214,0.03) 1px,transparent 1px,transparent 14px);
    pointer-events:none;
  }
  .cb-left-panel{
    padding:60px;display:flex;flex-direction:column;justify-content:center;
    position:relative;z-index:1;
    border-right:1px solid rgba(255,255,255,0.07);
  }
  .cblp-tag{font-family:'Cinzel',serif;font-size:9px;letter-spacing:0.26em;text-transform:uppercase;color:rgba(255,255,255,0.3);display:block;margin-bottom:14px;}
  .cblp-title{font-family:'Cinzel',serif;font-size:clamp(24px,3.5vw,44px);font-weight:700;color:var(--white);line-height:1.12;margin-bottom:12px;}
  .cblp-title em{font-style:italic;font-family:'Playfair Display',serif;color:var(--green-light);font-weight:400;}
  .cblp-desc{font-size:14px;color:rgba(255,255,255,0.5);line-height:1.78;font-weight:300;font-style:italic;}
  .cb-right-panel{
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    gap:16px;padding:60px;position:relative;z-index:1;
  }
  .btn-w{background:var(--white);color:var(--green-dark);padding:16px 36px;border-radius:8px;border:none;font-family:'Cinzel',serif;font-size:11px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;cursor:pointer;text-decoration:none;display:inline-block;width:100%;text-align:center;max-width:300px;transition:transform 0.25s;box-shadow:0 6px 20px rgba(0,0,0,0.2);}
  .btn-w:hover{transform:translateY(-2px);}
  .btn-ow{background:transparent;color:rgba(255,255,255,0.75);padding:15px 36px;border-radius:8px;border:1.5px solid rgba(255,255,255,0.22);font-family:'Cinzel',serif;font-size:11px;font-weight:600;letter-spacing:0.16em;text-transform:uppercase;cursor:pointer;text-decoration:none;display:inline-block;width:100%;text-align:center;max-width:300px;transition:background 0.25s,transform 0.25s;}
  .btn-ow:hover{background:rgba(255,255,255,0.08);transform:translateY(-2px);}
  .cbrp-note{font-family:'Cinzel',serif;font-size:10px;letter-spacing:0.12em;color:rgba(255,255,255,0.25);}

  /* ── RESPONSIVE ── */
  @media(max-width:1100px){
    .info-bar-inner{grid-template-columns:1fr 1fr;}
    .hm-inner{grid-template-columns:1fr;}
    .hm-hours{border-right:none;border-bottom:1px solid var(--border);padding:48px 36px;}
    .hm-location{padding:48px 36px;}
    .cta-banner{grid-template-columns:1fr;}
    .cb-left-panel{border-right:none;border-bottom:1px solid rgba(255,255,255,0.07);padding:52px 40px;}
    .cb-right-panel{padding:44px 40px;}
    .btn-w,.btn-ow{max-width:360px;}
  }
  @media(max-width:768px){
    .hero-inner{grid-template-columns:1fr;padding:0 32px 48px;}
    .hero-right{display:none;}
    .info-bar-inner{grid-template-columns:1fr 1fr;}
    .fs-layout{grid-template-columns:1fr;}
    .concern-panel{display:grid;grid-template-columns:repeat(2,1fr);}
    .cp-header{grid-column:span 2;}
    .fc-row{grid-template-columns:1fr;}
    .fc-field.full{grid-column:span 1;}
    .fc-slots{grid-template-columns:repeat(4,1fr);}
    .hm-hours,.hm-location{padding:40px 28px;}
    .reach-row{grid-template-columns:1fr;}
    .hms-stats{flex-wrap:wrap;}
    .cb-left-panel,.cb-right-panel{padding:44px 28px;}
  }
  @media(max-width:540px){
    .info-bar-inner{grid-template-columns:1fr;}
    .ib-card{border-right:none;border-bottom:1px solid var(--border);}
    .fc-slots{grid-template-columns:repeat(2,1fr);}
    .fc-body{padding:20px;}
    .concern-panel{display:flex;flex-direction:column;}
    .hm-stats{flex-direction:column;}
    .faq-inner{padding:0 4px;}
  }
`;

const mqItems = ["Contact Us","Book Free Consultation","Thiruvananthapuram · Kerala","Nadi Assessment","Drug-Free Healing","Marma Therapy","18+ Years Mastery","6000+ Healed","Ever Ayur Life"];

const concerns = [
  {ico:"🤕",name:"Chronic Pain"},
  {ico:"🦴",name:"Joint & Spine"},
  {ico:"🧠",name:"Neurological"},
  {ico:"🌸",name:"Women's Health"},
  {ico:"🔄",name:"Surgery Alternative"},
  {ico:"💚",name:"General Wellness"},
  {ico:"🦵",name:"Arthritis"},
  {ico:"😮‍💨",name:"Stress & Fatigue"},
];

const slots = [
  {t:"08:00",p:"AM"},{t:"09:00",p:"AM"},{t:"10:00",p:"AM"},{t:"11:00",p:"AM"},
  {t:"03:30",p:"PM"},{t:"05:00",p:"PM"},{t:"06:00",p:"PM"},{t:"07:00",p:"PM"},
];

const hoursData = [
  {day:"Monday – Friday",times:["08:00 AM – 01:00 PM","03:30 PM – 07:00 PM"],open:true},
  {day:"Saturday – Sunday",times:["09:00 AM – 12:00 PM","04:30 PM – 07:00 PM"],open:true},
];

const infoCards = [
  {ico:"📧",label:"Email",value:"info@everayurlife.com",sub:"Reply within 24 hours"},
  {ico:"📞",label:"Phone",value:"+91 98765 43210",sub:"+91 91234 56789"},
  {ico:"📍",label:"Location",value:"Thiruvananthapuram",sub:"Kerala, India"},
  {ico:"⏰",label:"Open Today",value:"Open Now",sub:"Closes at 01:00 PM"},
];

const reachItems = [
  {ico:"🚗",title:"By Car",sub:"Free parking on premises"},
  {ico:"🚌",title:"By Bus",sub:"3 min walk from stop"},
  {ico:"✈️",title:"From Airport",sub:"14km · ~25 min drive"},
];

const faqs = [
  {q:"Is the first consultation really free?",a:"Yes — your first Nadi assessment session is completely free of charge. Unni Gurukkal will assess your pulse, understand your condition, and outline a personalized treatment plan with no obligation."},
  {q:"How long does a typical treatment session last?",a:"Sessions typically last between 45 minutes to 1.5 hours, depending on the condition and stage of treatment. Your first assessment session may take slightly longer."},
  {q:"Do I need to bring any medical reports?",a:"It helps to bring any existing reports, scans, or prescriptions, but they are not mandatory. The Nadi (pulse) reading itself provides comprehensive diagnostic insight into your condition."},
  {q:"Is Marma Therapy safe for all age groups?",a:"Yes. Kalaripayattu Nadi Marma Therapy is completely drug-free and non-invasive — it is safe for patients of all ages, from children to elderly patients. Each session is carefully tailored to the individual."},
  {q:"How many sessions are needed to see results?",a:"Many patients notice significant improvement within 3–5 sessions. For chronic or longstanding conditions, a course of 10–15 sessions is typically recommended for lasting results."},
  {q:"Can I visit without an appointment?",a:"Walk-ins are welcome during clinic hours, but we strongly recommend booking an appointment to ensure Unni Gurukkal is available and to minimize your waiting time."},
];

export default function Contact() {
  const [selConcern, setSelConcern] = useState(null);
  const [selSlot, setSelSlot] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({name:"",phone:"",email:"",city:"",message:""});

  const handleChange = e => setForm(f=>({...f,[e.target.name]:e.target.value}));
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true); };
  const reset = () => { setSubmitted(false); setForm({name:"",phone:"",email:"",city:"",message:""}); setSelConcern(null); setSelSlot(null); };

  return (
    <>
      <style>{FONTS + CSS}</style>

      {/* MARQUEE */}
      <div className="mq">
        <div className="mq-track">
          {[...mqItems,...mqItems,...mqItems].map((t,i)=>(
            <span className="mq-item" key={i}>{t}<span className="mq-sep"/></span>
          ))}
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg"/>
        <div className="hero-pattern"/>
        <div className="hero-ring-l"/>
        <div className="hero-ring-r"/>
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-eyebrow">Contact Us · Ever Ayur Life</div>
            <h1 className="hero-title">
              Let's Begin<br/>
              Your <em>Healing.</em>
            </h1>
          </div>
          <div className="hero-right">
            <span className="hero-cta-label">Scroll to form</span>
            <div className="hero-scroll-hint">
              <div className="hsh-line"/>
              <span className="hsh-text">↓</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── INFO BAR ── */}
      <div className="info-bar">
        <div className="info-bar-inner">
          {infoCards.map((c,i)=>(
            <div className="ib-card" key={i}>
              <div className="ib-ico">{c.ico}</div>
              <div>
                <div className="ib-label">{c.label}</div>
                <div className="ib-value">{c.value}</div>
                <div className="ib-sub">{c.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── FORM SECTION ── */}
      <section className="form-sec">
        <div className="fs-dots"/>
        <div className="fs-ring1"/><div className="fs-ring2"/>
        <div className="form-sec-inner">
          <div className="fs-top">
            <span className="fs-tag">Free Nadi Assessment · No Obligation</span>
            <h2 className="fs-title">Book Your <em>Free</em> Consultation</h2>
            <div className="fs-line"/>
          </div>
          <div className="fs-layout">

            {/* LEFT — concern selector */}
            <div className="concern-panel">
              <div className="cp-header">What brings you to us?</div>
              {concerns.map((c,i)=>(
                <div key={i}
                  className={`cp-item${selConcern===i?" sel":""}`}
                  onClick={()=>setSelConcern(i)}>
                  <span className="cp-ico">{c.ico}</span>
                  <span className="cp-name">{c.name}</span>
                  <div className="cp-check">{selConcern===i?"✓":""}</div>
                </div>
              ))}
            </div>

            {/* RIGHT — form card or success */}
            {submitted ? (
              <div className="success-wrap">
                <div className="sw-ring">✓</div>
                <h2 className="sw-title">Request <em>Received!</em></h2>
                <p className="sw-desc">Thank you! Unni Gurukkal's team will contact you within 24 hours to confirm your free Nadi assessment session.</p>
                <div className="sw-summary">
                  <span className="sws-tag">Your Booking Summary</span>
                  {[
                    {k:"Name",v:form.name||"—"},
                    {k:"Phone",v:form.phone||"—"},
                    {k:"Concern",v:selConcern!=null?concerns[selConcern].name:"—"},
                    {k:"Preferred Time",v:selSlot!=null?`${slots[selSlot].t} ${slots[selSlot].p}`:"—"},
                  ].map((r,i)=>(
                    <div className="sws-row" key={i}>
                      <span className="sws-k">{r.k}</span>
                      <span className="sws-v">{r.v}</span>
                    </div>
                  ))}
                </div>
                <button className="sw-again" onClick={reset}>Book Another Session</button>
              </div>
            ) : (
              <div className="form-card">
                <div className="fc-header">
                  <span className="fc-h-title">Appointment Details</span>
                  <div className="fc-h-badge">
                    <div className="fc-badge-dot"/>
                    Accepting Patients
                  </div>
                </div>
                <div className="fc-body">
                  <form onSubmit={handleSubmit}>
                    <div className="fc-row">
                      <div className="fc-field">
                        <input className="fc-input" type="text" name="name" placeholder=" " required value={form.name} onChange={handleChange}/>
                        <label className="fc-lbl">Full Name</label>
                      </div>
                      <div className="fc-field">
                        <input className="fc-input" type="tel" name="phone" placeholder=" " required value={form.phone} onChange={handleChange}/>
                        <label className="fc-lbl">Phone Number</label>
                      </div>
                      <div className="fc-field">
                        <input className="fc-input" type="email" name="email" placeholder=" " value={form.email} onChange={handleChange}/>
                        <label className="fc-lbl">Email (Optional)</label>
                      </div>
                      <div className="fc-field">
                        <select className="fc-select" defaultValue="">
                          <option value="" disabled/>
                          {["Thiruvananthapuram","Kochi","Thrissur","Bangalore","Chennai","Other"].map(c=>(
                            <option key={c}>{c}</option>
                          ))}
                        </select>
                        <label className="fc-lbl">Your City</label>
                      </div>
                      <div className="fc-field full">
                        <textarea className="fc-textarea" name="message" placeholder=" " value={form.message} onChange={handleChange}/>
                        <label className="fc-lbl">Describe Your Condition (Optional)</label>
                      </div>
                    </div>

                    <span className="fc-slot-label">Preferred Appointment Time</span>
                    <div className="fc-slots">
                      {slots.map((s,i)=>(
                        <div key={i} className={`fc-slot${selSlot===i?" on":""}`} onClick={()=>setSelSlot(i)}>
                          <div className="fcs-t">{s.t}</div>
                          <div className="fcs-p">{s.p}</div>
                        </div>
                      ))}
                    </div>

                    <div className="fc-privacy">
                      <span className="fcp-ico">🔒</span>
                      <p className="fcp-txt">Your details are completely private and only used to confirm your appointment. We never share your information with third parties.</p>
                    </div>

                    <button type="submit" className="fc-submit">
                      Book Free Nadi Assessment
                      <span className="fc-arrow">→</span>
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── HOURS + MAP ── */}
      <div className="hours-map-sec">
        <div className="hm-inner">
          <div className="hm-hours">
            <span className="hm-tag">Clinic Hours</span>
            <h2 className="hm-title">When We're <em>Open</em></h2>
            <div className="hours-table">
              {hoursData.map((h,i)=>(
                <div className="ht-row" key={i}>
                  <div className={`ht-dot${h.open?"":" off"}`}/>
                  <span className="ht-day">{h.day}</span>
                  <div className="ht-times">
                    {h.times.map((t,j)=><span className="ht-badge" key={j}>{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
            <div className="hm-stats">
              {[{ico:"🌿",num:"18+",lbl:"Years"},{ico:"👥",num:"6K+",lbl:"Healed"},{ico:"🚫",num:"0",lbl:"Medicines"}].map((s,i)=>(
                <div className="hms-pill" key={i}>
                  <span className="hms-ico">{s.ico}</span>
                  <span className="hms-num">{s.num}</span>
                  <span className="hms-lbl">{s.lbl}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hm-location">
            <div>
              <span className="hml-tag">How to Find Us</span>
              <h2 className="hml-title">We're in <em>Thiruvananthapuram</em></h2>
            </div>
            <div className="map-card">
              <div className="map-bg"/>
              <div className="map-grid"/>
              <div className="map-label">
                <div className="ml-name">Ever Ayur Life</div>
                <div className="ml-city">Thiruvananthapuram, Kerala</div>
              </div>
              <div className="map-pin">
                <div className="mp-dot"/>
                <div className="mp-stem"/>
                <div className="mp-shadow"/>
              </div>
            </div>
            <div className="reach-row">
              {reachItems.map((r,i)=>(
                <div className="rr-item" key={i}>
                  <span className="rr-ico">{r.ico}</span>
                  <div>
                    <div className="rr-title">{r.title}</div>
                    <div className="rr-sub">{r.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <section className="faq-sec">
        <div className="faq-inner">
          <div className="faq-head">
            <span className="faq-tag">Common Questions</span>
            <h2 className="faq-title">Frequently <em>Asked</em></h2>
          </div>
          <div className="faq-list">
            {faqs.map((f,i)=>(
              <div key={i} className={`faq-item${openFaq===i?" open":""}`}>
                <div className="faq-q" onClick={()=>setOpenFaq(openFaq===i?null:i)}>
                  <span className="fq-text">{f.q}</span>
                  <div className="fq-icon">+</div>
                </div>
                <div className="faq-a">
                  <p className="fa-text">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA BANNER ── */}
      <div className="cta-banner">
        <div className="cb-left-panel">
          <span className="cblp-tag">Still Have Questions?</span>
          <h2 className="cblp-title">Ready to Start <em>Healing Naturally?</em></h2>
          <p className="cblp-desc">"18+ years of Kalaripayattu mastery — personalized to your unique body, your unique condition, your unique healing journey."</p>
        </div>
        <div className="cb-right-panel">
          <a href="tel:+919876543210" className="btn-w">📞 Call Us Now</a>
          <a href="mailto:info@everayurlife.com" className="btn-ow">✉️ Send an Email</a>
          <span className="cbrp-note">Or scroll up to fill the booking form</span>
        </div>
      </div>
    </>
  );
}
