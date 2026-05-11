"use client";

import { useState } from "react";

const SINHALA_FONT = "'Noto Sans Sinhala','Iskoola Pota','Noto Serif Sinhala',serif";

const NAV_LINKS = [
  { label: "Home",    href: "/" },
  { label: "About",   href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered]   = useState(null);

  return (
    <nav
      style={{
        width: "100%",
        background: "#ffffff",
        borderBottom: "2px solid #e3f0ff",
        boxSizing: "border-box",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          width: "100%",
          padding: "0 24px",
          height: 58,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxSizing: "border-box",
        }}
      >
        {/* ── Logo / Brand ── */}
        <a
          href="/"
          style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}
        >
          <span
            style={{
              fontFamily: SINHALA_FONT,
              fontSize: 19,
              fontWeight: 700,
              color: "#f57f17",
              lineHeight: 1,
            }}
          >
            සිංහල
          </span>
          <span
            style={{
              fontSize: 15,
              fontWeight: 800,
              color: "#0d47a1",
              letterSpacing: "-0.01em",
            }}
          >
            Singlish Typer
          </span>
          <span
            style={{
              fontSize: 9,
              fontWeight: 700,
              padding: "2px 7px",
              borderRadius: 20,
              background: "#fff8e1",
              color: "#f57f17",
              border: "1.5px solid #ffe082",
              letterSpacing: "0.05em",
              lineHeight: 1.8,
            }}
          >
            PRO
          </span>
        </a>

        {/* ── Desktop Nav Links ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
          className="desktop-nav"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onMouseEnter={() => setHovered(link.label)}
              onMouseLeave={() => setHovered(null)}
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: hovered === link.label ? "#0d47a1" : "#1565c0",
                textDecoration: "none",
                padding: "7px 14px",
                borderRadius: 8,
                background: hovered === link.label ? "#e3f0ff" : "transparent",
                transition: "all .15s",
              }}
            >
              {link.label}
            </a>
          ))}

          {/* CTA button */}
          <a
            href="/converter"
            onMouseEnter={() => setHovered("cta")}
            onMouseLeave={() => setHovered(null)}
            style={{
              marginLeft: 8,
              fontSize: 13,
              fontWeight: 700,
              color: "#ffffff",
              textDecoration: "none",
              padding: "7px 18px",
              borderRadius: 8,
              background: hovered === "cta" ? "#0d47a1" : "#1565c0",
              border: "2px solid #1565c0",
              transition: "all .15s",
              whiteSpace: "nowrap",
            }}
          >
            ⌨ Try Converter
          </a>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            display: "none",
            flexDirection: "column",
            gap: 5,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 4,
          }}
          className="hamburger"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "#1565c0",
                borderRadius: 2,
                transition: "all .2s",
                transformOrigin: "center",
                transform:
                  menuOpen
                    ? i === 0 ? "rotate(45deg) translate(5px, 5px)"
                    : i === 1 ? "opacity: 0; scaleX(0)"
                    : "rotate(-45deg) translate(5px, -5px)"
                    : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* ── Mobile Dropdown ── */}
      {menuOpen && (
        <div
          style={{
            width: "100%",
            background: "#ffffff",
            borderTop: "1.5px solid #e3f0ff",
            padding: "10px 24px 16px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            boxSizing: "border-box",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#1565c0",
                textDecoration: "none",
                padding: "9px 14px",
                borderRadius: 8,
                background: "#f4f6fb",
                border: "1.5px solid #e3f0ff",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/converter"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: 4,
              fontSize: 14,
              fontWeight: 700,
              color: "#ffffff",
              textDecoration: "none",
              padding: "10px 14px",
              borderRadius: 8,
              background: "#1565c0",
              textAlign: "center",
            }}
          >
            ⌨ Try Converter
          </a>
        </div>
      )}

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}