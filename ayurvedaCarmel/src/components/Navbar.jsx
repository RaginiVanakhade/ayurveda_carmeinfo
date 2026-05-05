import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Philosophy", path: "/philosophy" },
    { label: "Treatment", path: "/treatment" },
    { label: "Why Us", path: "/whyus" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Lato:wght@300;400;700&display=swap');

        :root {
          --forest:        #1a3a1a;
          --forest-mid:    #234a23;
          --forest-light:  #2d612d;
          --leaf:          #4a7c4a;
          --gold:          #b8891a;
          --gold-mid:      #d4a832;
          --gold-shine:    #f0c84a;
          --cream:         #f5f0e0;
          --cream-light:   #faf7ee;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── Navbar Shell ── */
        .eal-navbar {
          background: linear-gradient(180deg, var(--forest) 0%, var(--forest-mid) 100%);
          font-family: 'Lato', sans-serif;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow:
            0 4px 28px rgba(0, 0, 0, 0.35),
            0 1px 0 rgba(184, 137, 26, 0.45);
        }

        /* gold shimmer top bar */
        .eal-navbar::before {
          content: '';
          display: block;
          height: 3px;
          background: linear-gradient(
            90deg,
            var(--forest)     0%,
            var(--gold)       25%,
            var(--gold-shine) 50%,
            var(--gold)       75%,
            var(--forest)     100%
          );
        }

        .eal-inner {
          max-width: 1360px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          padding: 0 32px;
          height: 80px;
          gap: 20px;
        }

        /* ── Logo ── */
        .eal-logo {
          display: flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .eal-emblem {
          width: 58px;
          height: 58px;
          flex-shrink: 0;
        }

        .eal-logo-text {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .eal-title {
          font-family: 'Cinzel', serif;
          font-size: 17px;
          font-weight: 600;
          color: var(--cream-light);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          line-height: 1.2;
        }

        .eal-title em {
          color: var(--gold-mid);
          font-style: normal;
        }

        .eal-tagline {
          font-family: 'Lato', sans-serif;
          font-size: 8.5px;
          font-weight: 300;
          color: var(--gold);
          letter-spacing: 0.3em;
          text-transform: uppercase;
          padding-top: 4px;
          border-top: 0.5px solid rgba(184, 137, 26, 0.4);
        }

        /* vertical rule */
        .eal-vr {
          width: 1px;
          height: 36px;
          background: linear-gradient(to bottom, transparent, rgba(184, 137, 26, 0.5), transparent);
          flex-shrink: 0;
        }

        /* ── Nav Links ── */
        .eal-links {
          display: flex;
          align-items: center;
          gap: 2px;
          list-style: none;
          flex: 1;
        }

        .eal-links a {
          display: block;
          text-decoration: none;
          color: rgba(245, 240, 224, 0.8);
          font-family: 'Cinzel', serif;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 9px 12px;
          position: relative;
          transition: color 0.25s;
          white-space: nowrap;
        }

        /* gold underline */
        .eal-links a::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 12px;
          right: 12px;
          height: 1.5px;
          border-radius: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--gold-mid),
            transparent
          );
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.3s ease;
        }

        .eal-links a:hover {
          color: var(--gold-shine);
        }
        .eal-links a:hover::after {
          transform: scaleX(1);
        }

        .eal-links a.active {
          color: var(--gold-mid);
          font-weight: 600;
        }
        .eal-links a.active::after {
          transform: scaleX(1);
        }

        /* ── Book Now Button ── */
        .eal-book {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          text-decoration: none;
          font-family: 'Cinzel', serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--forest) !important;
          background: linear-gradient(
            135deg,
            var(--gold)       0%,
            var(--gold-mid)   50%,
            var(--gold-shine) 100%
          );
          padding: 11px 24px;
          border-radius: 30px;
          flex-shrink: 0;
          border: 1.5px solid rgba(240, 200, 74, 0.6);
          box-shadow:
            0 2px 14px rgba(184, 137, 26, 0.45),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
          white-space: nowrap;
          position: relative;
          overflow: hidden;
        }

        .eal-book::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 30px;
          background: linear-gradient(
            135deg,
            var(--gold-shine) 0%,
            var(--gold-mid)   100%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .eal-book:hover::before { opacity: 1; }

        .eal-book:hover {
          box-shadow: 0 6px 24px rgba(212, 168, 50, 0.55);
          transform: translateY(-2px);
          color: var(--forest) !important;
        }

        .eal-book-label {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        /* ── Hamburger ── */
        .eal-ham {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          margin-left: auto;
        }

        .eal-ham span {
          display: block;
          width: 24px;
          height: 2px;
          background: var(--cream);
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .eal-ham.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .eal-ham.open span:nth-child(2) { opacity: 0; }
        .eal-ham.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* ── Mobile Menu ── */
        .eal-mobile {
          display: none;
          background: var(--forest);
          border-top: 1px solid rgba(184, 137, 26, 0.2);
          padding: 8px 0 20px;
        }

        .eal-mobile.open { display: block; }

        .eal-mobile ul { list-style: none; }

        .eal-mobile a {
          display: block;
          padding: 12px 36px;
          font-family: 'Cinzel', serif;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--cream);
          text-decoration: none;
          border-left: 2.5px solid transparent;
          transition: border-color 0.2s, background 0.2s, color 0.2s;
        }

        .eal-mobile a:hover,
        .eal-mobile a.active {
          border-left-color: var(--gold-mid);
          background: rgba(184, 137, 26, 0.07);
          color: var(--gold-shine);
        }

        .eal-mobile-book {
          display: block;
          margin: 16px 36px 0;
          padding: 12px 20px;
          background: linear-gradient(135deg, var(--gold), var(--gold-mid));
          color: var(--forest) !important;
          font-family: 'Cinzel', serif;
          font-weight: 700;
          font-size: 10.5px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-align: center;
          text-decoration: none;
          border-radius: 30px;
          transition: opacity 0.2s, transform 0.2s;
        }

        .eal-mobile-book:hover {
          opacity: 0.88;
          transform: translateY(-1px);
        }

        @media (max-width: 960px) {
          .eal-links, .eal-book, .eal-vr { display: none; }
          .eal-ham { display: flex; }
        }
      `}</style>

      <nav className="eal-navbar">
        <div className="eal-inner">

          {/* Logo */}
          <NavLink to="/" className="eal-logo">
            <div className="eal-emblem">
              <svg viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg" width="58" height="58">
                {/* outer decorative ring */}
                <circle cx="29" cy="29" r="27" stroke="#b8891a" strokeWidth="1.2" fill="none" opacity="0.55"/>
                {/* inner thin ring */}
                <circle cx="29" cy="29" r="24" stroke="#b8891a" strokeWidth="0.5" fill="none" opacity="0.3"/>

                {/* leaf left */}
                <path d="M5 34 Q1 23 12 17 Q9 27 5 34Z" fill="#4a7c4a"/>
                <path d="M5 34 Q9 25 12 17" stroke="#2d612d" strokeWidth="0.8" fill="none"/>

                {/* leaf right */}
                <path d="M53 24 Q57 13 46 7 Q49 17 53 24Z" fill="#4a7c4a"/>
                <path d="M53 24 Q49 15 46 7" stroke="#2d612d" strokeWidth="0.8" fill="none"/>

                {/* EAL monogram */}
                <text
                  x="7" y="41"
                  fontFamily="Cinzel, serif"
                  fontSize="27"
                  fontWeight="700"
                  fill="#f5f0e0"
                  letterSpacing="-1"
                >E</text>
                <text
                  x="20" y="41"
                  fontFamily="Cinzel, serif"
                  fontSize="27"
                  fontWeight="700"
                  fill="#d4a832"
                  letterSpacing="-1"
                >A</text>
                <text
                  x="34" y="41"
                  fontFamily="Cinzel, serif"
                  fontSize="27"
                  fontWeight="700"
                  fill="#f5f0e0"
                  letterSpacing="-1"
                >L</text>

                {/* marma / spine dots */}
                <circle cx="45" cy="17" r="2"   fill="#d4a832"/>
                <circle cx="45" cy="23" r="2"   fill="#d4a832"/>
                <circle cx="45" cy="29" r="2"   fill="#d4a832"/>
                <circle cx="45" cy="35" r="2"   fill="#d4a832"/>
                <circle cx="45" cy="41" r="1.4" fill="#d4a832" opacity="0.65"/>

                {/* bottom swoosh */}
                <path
                  d="M7 47 Q29 56 51 47"
                  stroke="#b8891a"
                  strokeWidth="1.6"
                  fill="none"
                  opacity="0.85"
                />
              </svg>
            </div>

            <div className="eal-logo-text">
              <span className="eal-title">
                Ever <em>Ayur</em> Life
              </span>
              <span className="eal-tagline">Kalari Nadi Marma Therapy</span>
            </div>
          </NavLink>

          <div className="eal-vr" />

          {/* Desktop Nav Links */}
          <ul className="eal-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  end={link.path === "/"}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Book Now CTA */}
          <NavLink to="/contact" className="eal-book">
            <span className="eal-book-label">
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path
                  d="M6 1L7.3 4.4L11 4.4L8.1 6.7L9.3 10.5L6 8.2L2.7 10.5L3.9 6.7L1 4.4L4.7 4.4Z"
                  fill="currentColor"
                />
              </svg>
              Book Now
            </span>
          </NavLink>

          {/* Hamburger toggle */}
          <button
            className={`eal-ham${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span /><span /><span />
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div className={`eal-mobile${menuOpen ? " open" : ""}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  end={link.path === "/"}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <NavLink
            to="/contact"
            className="eal-mobile-book"
            onClick={() => setMenuOpen(false)}
          >
            ✦ Book Now
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
