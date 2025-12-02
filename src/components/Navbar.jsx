import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home", end: true },
    { to: "/about", label: "About Me" },
    { to: "/experience", label: "Experience" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact Me" },
  ];

  return (
    <header className={`navbar ${open ? "is-open" : ""}`}>
      <div className="nav-inner">
        <div className="nav-brand">
          <NavLink to="/" className="brand-link" onClick={() => setOpen(false)}>
            KVSR
          </NavLink>
        </div>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((s) => !s)}
        >
          <span className="hamburger" />
        </button>

        {/* Nav Links */}
        <nav className="nav-links" role="navigation">
          <ul>
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-socials">
          <a
            href="https://github.com/subbaraokanamarlapudi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="social-icon"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/subbarao-kanamarlapudi/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.2 2.4-2.5 4.9-2.5 5.3 0 6.3 3.5 6.3 8v9.3h-5V18.1c0-2.2 0-5-3-5-3.1 0-3.6 2.4-3.6 4.8V24h-5V8z" />
            </svg>
          </a>

          <a
            href="mailto:kv.subba.rao521@gmail.com"
            aria-label="Email"
            title="Email"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
