"use client";

const SINHALA_FONT = "'Noto Sans Sinhala','Iskoola Pota','Noto Serif Sinhala',serif";

const NAV_LINKS = [
  { label: "Home",    href: "/" },
  { label: "About",   href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        width: "100%",
        borderTop: "2px solid #e3f0ff",
        background: "#ffffff",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          padding: "13px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 10,
          boxSizing: "border-box",
        }}
      >
        {/* Left — Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            style={{
              fontFamily: SINHALA_FONT,
              fontSize: 16,
              fontWeight: 700,
              color: "#f57f17",
              lineHeight: 1,
            }}
          >
            සිංහල
          </span>
          <span
            style={{
              fontSize: 13,
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
        </div>

        {/* Center — Nav links */}
        <nav style={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
          {NAV_LINKS.map((link, idx) => (
            <span key={link.label} style={{ display: "flex", alignItems: "center" }}>
              <a
                href={link.href}
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#1565c0",
                  textDecoration: "none",
                  padding: "3px 9px",
                  borderRadius: 6,
                  transition: "all .15s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "#e3f0ff";
                  e.currentTarget.style.color = "#0d47a1";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#1565c0";
                }}
              >
                {link.label}
              </a>
              {idx < NAV_LINKS.length - 1 && (
                <span style={{ color: "#dee2ef", fontSize: 11, userSelect: "none" }}>·</span>
              )}
            </span>
          ))}
        </nav>

        {/* Right — Developer credit + copyright */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexWrap: "wrap",
          }}
        >
          {/* Developer credit */}
          <span style={{ fontSize: 11, color: "#888" }}>
            Developed by{" "}
            <a
              href="https://kjanuda.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontWeight: 700,
                color: "#1565c0",
                textDecoration: "none",
                borderBottom: "1.5px solid #e3f0ff",
                paddingBottom: 1,
                transition: "all .15s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = "#f57f17";
                e.currentTarget.style.borderBottomColor = "#ffe082";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = "#1565c0";
                e.currentTarget.style.borderBottomColor = "#e3f0ff";
              }}
            >
              Januda J
            </a>
          </span>

          {/* Divider */}
          <span style={{ color: "#dee2ef", fontSize: 11, userSelect: "none" }}>|</span>

          {/* Copyright */}
          <span style={{ fontSize: 11, color: "#999", whiteSpace: "nowrap" }}>
            © {year} Singlish Typer
          </span>
        </div>
      </div>
    </footer>
  );
}