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
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Lato:wght@300;400;700&display=swap');

        :root {
          --primary:   #3B3B1A;
          --secondary: #AEC8A4;
          --light:     #E7EFC7;
          --accent:    #8A784E;

          --primary-dark: #2a2a12;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        /* NAVBAR */
        .eal-navbar {
          background: linear-gradient(180deg, var(--primary), var(--primary-dark));
          position: sticky;
          top: 0;
          z-index: 1000;
          font-family: 'Lato', sans-serif;
          box-shadow: 0 6px 24px rgba(0,0,0,0.35);
        }

        /* TOP LINE */
        .eal-navbar::before {
          content: '';
          display: block;
          height: 3px;
          background: linear-gradient(
            90deg,
            var(--primary),
            var(--accent),
            var(--light),
            var(--accent),
            var(--primary)
          );
        }

        .eal-inner {
          max-width: 1360px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          padding: 0 32px;
          height: 78px;
          gap: 20px;
        }

        /* LOGO */
        .eal-logo {
          text-decoration: none;
        }

        .eal-title {
          font-family: 'Cinzel', serif;
          font-size: 17px;
          font-weight: 600;
          color: var(--light);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .eal-title em {
          color: var(--accent);
          font-style: normal;
        }

        .eal-tagline {
          font-size: 9px;
          color: var(--secondary);
          letter-spacing: 0.25em;
          margin-top: 3px;
        }

        /* DIVIDER */
        .eal-vr {
          width: 1px;
          height: 34px;
          background: linear-gradient(to bottom, transparent, var(--accent), transparent);
        }

        /* NAV LINKS */
        .eal-links {
          display: flex;
          flex: 1;
          list-style: none;
        }

        .eal-links a {
          color: rgba(231,239,199,0.85);
          text-decoration: none;
          font-family: 'Cinzel', serif;
          font-size: 11px;
          letter-spacing: 0.12em;
          padding: 8px 12px;
          position: relative;
        }

        .eal-links a::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 12px;
          right: 12px;
          height: 1.5px;
          background: var(--accent);
          transform: scaleX(0);
          transition: 0.3s;
        }

        .eal-links a:hover {
          color: var(--light);
        }

        .eal-links a:hover::after,
        .eal-links a.active::after {
          transform: scaleX(1);
        }

        .eal-links a.active {
          color: var(--accent);
        }

        /* CTA BUTTON */
        .eal-book {
          background: linear-gradient(135deg, var(--accent), var(--secondary));
          color: var(--primary) !important;
          padding: 10px 22px;
          border-radius: 30px;
          font-family: 'Cinzel', serif;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-decoration: none;
          box-shadow: 0 4px 16px rgba(0,0,0,0.3);
          transition: 0.3s ease;
        }

        .eal-book:hover {
          transform: translateY(-2px);
          opacity: 0.9;
        }

        /* HAMBURGER */
        .eal-ham {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          margin-left: auto;
        }

        .eal-ham span {
          width: 24px;
          height: 2px;
          background: var(--light);
        }

        /* MOBILE */
        .eal-mobile {
          display: none;
          background: var(--primary);
          padding: 10px 0 20px;
        }

        .eal-mobile.open { display: block; }

        .eal-mobile a {
          display: block;
          padding: 12px 36px;
          color: var(--light);
          text-decoration: none;
        }

        .eal-mobile a:hover,
        .eal-mobile a.active {
          color: var(--accent);
          background: rgba(255,255,255,0.05);
        }

        .eal-mobile-book {
          display: block;
          margin: 16px 36px 0;
          padding: 12px;
          text-align: center;
          background: var(--accent);
          color: var(--primary) !important;
          border-radius: 30px;
        }

        @media (max-width: 960px) {
          .eal-links, .eal-book, .eal-vr { display: none; }
          .eal-ham { display: flex; }
        }
      `}</style>

      <nav className="eal-navbar">
        <div className="eal-inner">

          <NavLink to="/" className="eal-logo">
            <div>
              <div className="eal-title">Ever <em>Ayur</em> Life</div>
              <div className="eal-tagline">Kalari Nadi Marma Therapy</div>
            </div>
          </NavLink>

          <div className="eal-vr" />

          <ul className="eal-links">
            {navLinks.map(link => (
              <li key={link.path}>
                <NavLink to={link.path} end={link.path === "/"}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <NavLink to="/contact" className="eal-book">
            Book Now
          </NavLink>

          <button className="eal-ham" onClick={() => setMenuOpen(!menuOpen)}>
            <span/><span/><span/>
          </button>
        </div>

        <div className={`eal-mobile ${menuOpen ? "open" : ""}`}>
          <ul>
            {navLinks.map(link => (
              <li key={link.path}>
                <NavLink to={link.path} onClick={()=>setMenuOpen(false)}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <NavLink to="/contact" className="eal-mobile-book">
            Book Now
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;