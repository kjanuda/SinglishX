"use client";

import { useState } from "react";

// ─── Design tokens (matching SinglishConverter) ───────────────────────────────
const SINHALA_FONT = "'Noto Sans Sinhala','Iskoola Pota','Noto Serif Sinhala',serif";

const S = {
  blue:     "#1565c0",
  blueLt:   "#e3f0ff",
  blueMid:  "#1976d2",
  blueDk:   "#0d47a1",
  yellow:   "#f9a825",
  yellowLt: "#fff8e1",
  yellowDk: "#f57f17",
  black:    "#111111",
  white:    "#ffffff",
  grayLt:   "#f4f6fb",
  grayMid:  "#dee2ef",
  grayTxt:  "#666666",
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: "⌨",
    title: "Real-time Conversion",
    desc: "Type Singlish romanisation and watch it transform into perfect Sinhala Unicode instantly — character by character.",
  },
  {
    icon: "🔤",
    title: "Complete Vowel System",
    desc: "All vowels supported: short, long, diphthongs — a, aa, ae, Aa, i, ii, u, uu, e, ee, o, oo, au, ai and more.",
  },
  {
    icon: "ක",
    title: "Full Consonant Table",
    desc: "Every Sinhala consonant including rare clusters — nndha, nnda, nnga, GNa, KNa, zka, and all aspirated forms.",
  },
  {
    icon: "✦",
    title: "Advanced Operators",
    desc: "Y for yansaya, @ for repaya, * for conjunct letters, + for explicit combine, \\r for reph prefix.",
  },
  {
    icon: "ෘ",
    title: "Ra & Vocalic Clusters",
    desc: "kra, kraa, k+ru, k+ruu and all ra-cluster vowel combinations — including vocalic-l (kl).",
  },
  {
    icon: "🌐",
    title: "English Passthrough",
    desc: "Embed English words seamlessly using <-- word --> syntax inside your Sinhala text.",
  },
];

const SHORTCUTS = [
  ["Y",            "yansaya",         "sathYa → සත්‍යා"],
  ["@",            "repaya",          "ka@maya → කර්මය"],
  ["*",            "conjunct",        "k*ShaNika → ක්‍ෂණික"],
  ["+",            "combine",         "k+ru → කෘ"],
  ["\\n",          "anusvara ං",      "sin\\ghala → සිංහල"],
  ["\\h / X",      "visarga ඃ",      "standalone sign"],
  ["<-- ... -->",  "English block",   "embed Latin text"],
];

const CHANGELOG = [
  { ver: "3.0", date: "2025", note: "Complete edition — all clusters, operators, English passthrough" },
  { ver: "2.5", date: "2024", note: "Ra-cluster full vowel support, vocalic-l, yansaya" },
  { ver: "2.0", date: "2024", note: "Repaya, conjunct, reph prefix, nasal clusters" },
  { ver: "1.0", date: "2023", note: "Initial release — basic vowels & consonants" },
];

const TEAM = [
  { name: "Singlish Typer", role: "Open Source Project", si: "සිංහල" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionLabel({ children }) {
  return (
    <div style={{
      fontSize: 11, fontWeight: 700, color: S.blueDk,
      textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8,
    }}>
      {children}
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "16px 14px",
        border: `1.5px solid ${hovered ? S.blueMid : S.grayMid}`,
        borderRadius: 12,
        background: hovered ? S.blueLt : S.grayLt,
        transition: "all .18s",
        cursor: "default",
      }}
    >
      <div style={{ fontSize: 26, marginBottom: 8, fontFamily: SINHALA_FONT }}>{icon}</div>
      <div style={{ fontWeight: 700, fontSize: 13, color: S.blueDk, marginBottom: 5 }}>{title}</div>
      <div style={{ fontSize: 12, color: S.grayTxt, lineHeight: 1.6 }}>{desc}</div>
    </div>
  );
}

function ShortcutRow({ op, label, example }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "7px 0", borderBottom: `1px solid ${S.grayMid}` }}>
      <code style={{
        minWidth: 90, padding: "3px 10px", borderRadius: 6,
        background: S.yellowLt, border: `1.5px solid #ffe082`,
        color: "#bf360c", fontSize: 12, fontFamily: "monospace", fontWeight: 700,
      }}>
        {op}
      </code>
      <span style={{ fontSize: 13, color: S.blueDk, fontWeight: 600, minWidth: 90 }}>{label}</span>
      <span style={{ fontSize: 11, color: S.grayTxt, fontFamily: "monospace" }}>{example}</span>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function About() {
  const [tab, setTab] = useState("about");

  return (
    <div style={{ minHeight: "100vh", background: S.white, color: S.black, padding: "16px 32px", fontFamily: "system-ui,sans-serif" }}>
      <div style={{ width: "100%" }}>

        {/* ── Header (mirrors SinglishConverter) ── */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, paddingBottom: 14, borderBottom: `2.5px solid ${S.blueLt}`, marginBottom: 14 }}>
          <div>
            
            <p style={{ fontSize: 12, color: S.grayTxt, margin: "3px 0 0" }}>
              About this tool — features, operators & version history
            </p>
          </div>
          <span style={{
            marginLeft: "auto", fontSize: 10, padding: "3px 10px", borderRadius: 20,
            fontWeight: 700, background: S.yellowLt, color: S.yellowDk,
            border: `1.5px solid #ffe082`, whiteSpace: "nowrap",
          }}>
            COMPLETE EDITION
          </span>
        </div>

        {/* ── Intro banner ── */}
        <div style={{
          background: S.yellowLt, border: `1.5px solid #ffe082`, borderRadius: 10,
          padding: "12px 16px", fontSize: 13, color: "#5d4037", lineHeight: 1.8, marginBottom: 14,
        }}>
          <span style={{ fontWeight: 700, color: S.yellowDk }}>Singlish Typer Pro</span> converts romanised Sinhala (Singlish) into{" "}
          <span style={{ fontFamily: SINHALA_FONT, fontSize: 15 }}>නිවැරදි සිංහල යුනිකෝඩ්</span>{" "}
          in real time. Supports all vowels, consonants, special clusters, operators, and English passthrough — no IME needed.
        </div>

        {/* ── Tabs ── */}
        <div style={{
          display: "flex", gap: 5, background: S.blueLt, borderRadius: 12,
          padding: 5, marginBottom: 16,
        }}>
          {[
            { id: "about",    label: "ℹ  About" },
            { id: "features", label: "✦  Features" },
            { id: "history",  label: "📋  Changelog" },
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              style={{
                flex: 1, padding: "9px 0", border: "none", cursor: "pointer",
                fontSize: 13, fontWeight: 600, borderRadius: 8, transition: "all .15s",
                background: tab === id ? S.blueDk : "transparent",
                color: tab === id ? S.white : S.blueMid,
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* ════════════════ ABOUT TAB ════════════════ */}
        {tab === "about" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

            {/* What is it */}
            <div style={{ background: S.white, border: `1.5px solid ${S.grayMid}`, borderRadius: 12, padding: "14px 16px" }}>
              <SectionLabel>What is Singlish?</SectionLabel>
              <p style={{ fontSize: 13, color: "#333", lineHeight: 1.8, margin: 0 }}>
                <strong>Singlish</strong> (not to be confused with Singaporean English) is the romanised phonetic writing system used
                by Sinhala speakers online when a Sinhala keyboard isn't available. Words are typed using Latin characters that
                approximate Sinhala pronunciation — for example, <code style={{ background: S.yellowLt, padding: "1px 6px", borderRadius: 4, color: "#bf360c", fontSize: 12 }}>kohomada</code>{" "}
                becomes <span style={{ fontFamily: SINHALA_FONT, fontSize: 18 }}>කොහොමද</span>.
              </p>
              <p style={{ fontSize: 13, color: "#333", lineHeight: 1.8, margin: "10px 0 0" }}>
                This tool provides a complete, rule-based converter — no machine learning, no internet required. Every conversion is
                deterministic and instant.
              </p>
            </div>

            {/* Operator quick-ref */}
            <div style={{ background: S.white, border: `1.5px solid ${S.grayMid}`, borderRadius: 12, padding: "14px 16px" }}>
              <SectionLabel>Special Operators</SectionLabel>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {SHORTCUTS.map(([op, label, example]) => (
                  <ShortcutRow key={op} op={op} label={label} example={example} />
                ))}
              </div>
            </div>

            {/* How to use */}
            <div style={{ background: S.white, border: `1.5px solid ${S.grayMid}`, borderRadius: 12, padding: "14px 16px" }}>
              <SectionLabel>How to Use</SectionLabel>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  ["1", "Type Singlish", "Enter romanised Sinhala in the left input box on the Type tab."],
                  ["2", "See output live", "The right panel updates instantly — no button needed."],
                  ["3", "Copy result", 'Click the output area or the "⎘ Copy" button to copy Unicode text.'],
                  ["4", "Use operators", "Add Y, @, *, + to produce yansaya, repaya, conjuncts, and ra clusters."],
                  ["5", "Check examples", "Click any example pill to load it instantly into the input box."],
                ].map(([num, title, desc]) => (
                  <div key={num} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{
                      minWidth: 24, height: 24, borderRadius: "50%",
                      background: S.blueDk, color: S.white,
                      fontSize: 11, fontWeight: 800, display: "flex",
                      alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      {num}
                    </span>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: S.blueDk }}>{title}</div>
                      <div style={{ fontSize: 12, color: S.grayTxt, lineHeight: 1.6 }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech note */}
            <div style={{
              background: S.grayLt, border: `1.5px solid ${S.grayMid}`,
              borderRadius: 12, padding: "12px 16px",
              display: "flex", alignItems: "center", gap: 12,
            }}>
              <span style={{ fontSize: 22 }}>⚙</span>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: S.blueDk, marginBottom: 3 }}>Pure rule-based engine</div>
                <div style={{ fontSize: 12, color: S.grayTxt, lineHeight: 1.6 }}>
                  No server calls, no AI model. The converter is a deterministic finite-state parser that
                  maps Singlish tokens to Unicode code points using sorted longest-match rules.
                  Works offline once loaded.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ════════════════ FEATURES TAB ════════════════ */}
        {tab === "features" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: 10,
            }}>
              {FEATURES.map(f => <FeatureCard key={f.title} {...f} />)}
            </div>

            {/* Coverage table */}
            <div style={{ background: S.white, border: `1.5px solid ${S.grayMid}`, borderRadius: 12, padding: "14px 16px" }}>
              <SectionLabel>Coverage at a Glance</SectionLabel>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 8 }}>
                {[
                  ["Independent vowels", "14"],
                  ["Vowel diacritics", "14"],
                  ["Consonants", "37+"],
                  ["Nasal clusters", "3 (nndha, nnda, nnga)"],
                  ["Ra-cluster vowels", "10"],
                  ["Special operators", "6 (Y @ * + \\r \\n)"],
                  ["English passthrough", "✓ <-- ... -->"],
                  ["Syllable counter", "✓ real-time"],
                ].map(([k, v]) => (
                  <div key={k} style={{
                    display: "flex", justifyContent: "space-between",
                    padding: "7px 10px", borderRadius: 8,
                    background: S.grayLt, border: `1px solid ${S.grayMid}`,
                    fontSize: 12,
                  }}>
                    <span style={{ color: S.grayTxt }}>{k}</span>
                    <span style={{ fontWeight: 700, color: S.blueDk }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Unicode blocks */}
            <div style={{ background: S.white, border: `1.5px solid ${S.grayMid}`, borderRadius: 12, padding: "14px 16px" }}>
              <SectionLabel>Unicode Blocks Used</SectionLabel>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {[
                  ["U+0D80–U+0DFF", "Sinhala block"],
                  ["U+200D", "Zero-width joiner"],
                  ["U+0DCA", "Virama (HAL) ්"],
                  ["U+0D82", "Anusvara ං"],
                  ["U+0D83", "Visarga ඃ"],
                ].map(([code, name]) => (
                  <div key={code} style={{
                    padding: "5px 12px", borderRadius: 8,
                    background: S.yellowLt, border: `1.5px solid #ffe082`,
                    fontSize: 11, color: "#5d4037",
                  }}>
                    <span style={{ fontWeight: 700, fontFamily: "monospace", color: "#bf360c" }}>{code}</span>
                    {" — "}{name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ════════════════ CHANGELOG TAB ════════════════ */}
        {tab === "history" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ background: S.white, border: `1.5px solid ${S.grayMid}`, borderRadius: 12, padding: "14px 16px" }}>
              <SectionLabel>Version History</SectionLabel>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {CHANGELOG.map(({ ver, date, note }, i) => (
                  <div key={ver} style={{
                    display: "flex", gap: 14, alignItems: "flex-start",
                    padding: "12px 0",
                    borderBottom: i < CHANGELOG.length - 1 ? `1px solid ${S.grayMid}` : "none",
                  }}>
                    {/* Version badge */}
                    <div style={{
                      minWidth: 52, padding: "4px 0", textAlign: "center",
                      borderRadius: 8,
                      background: i === 0 ? S.blueDk : S.grayLt,
                      color: i === 0 ? S.white : S.grayTxt,
                      fontSize: 12, fontWeight: 800,
                      border: `1.5px solid ${i === 0 ? S.blueDk : S.grayMid}`,
                    }}>
                      v{ver}
                    </div>
                    <div>
                      <div style={{ fontSize: 11, color: S.grayTxt, marginBottom: 3 }}>{date}</div>
                      <div style={{ fontSize: 13, color: S.black, lineHeight: 1.6 }}>{note}</div>
                      {i === 0 && (
                        <span style={{
                          display: "inline-block", marginTop: 5,
                          fontSize: 10, padding: "2px 9px", borderRadius: 20,
                          background: S.yellowLt, color: S.yellowDk,
                          border: `1.5px solid #ffe082`, fontWeight: 700,
                        }}>
                          LATEST
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Open source */}
            <div style={{
              background: S.blueLt, border: `1.5px solid ${S.blueMid}`,
              borderRadius: 12, padding: "14px 16px",
              display: "flex", alignItems: "center", gap: 14,
            }}>
              <span style={{ fontSize: 30 }}>🤝</span>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: S.blueDk, marginBottom: 4 }}>Open Source & Free</div>
                <div style={{ fontSize: 12, color: "#333", lineHeight: 1.7 }}>
                  Singlish Typer is free to use for everyone. Contributions, bug reports, and suggestions
                  are welcome. If a Singlish pattern isn't converting correctly, please report it with an example.
                </div>
              </div>
            </div>

            {/* Credits */}
            <div style={{ background: S.white, border: `1.5px solid ${S.grayMid}`, borderRadius: 12, padding: "14px 16px" }}>
              <SectionLabel>Credits</SectionLabel>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  ["Sinhala Unicode Consortium", "Unicode block U+0D80–U+0DFF specification"],
                  ["Noto Sans Sinhala", "Primary rendering font by Google Fonts"],
                  ["Iskoola Pota", "Fallback system font for Sinhala on Windows"],
                  ["Community contributors", "Singlish romanisation patterns & edge cases"],
                ].map(([name, role]) => (
                  <div key={name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12 }}>
                    <span style={{ fontWeight: 600, color: S.blueDk }}>{name}</span>
                    <span style={{ color: S.grayTxt }}>{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── Footer (matches main app style) ── */}
        <div style={{
          marginTop: 20, paddingTop: 12,
          borderTop: `1.5px solid ${S.grayMid}`,
          display: "flex", justifyContent: "space-between", alignItems: "center",
          fontSize: 11, color: S.grayTxt,
        }}>
          <span>
            <span style={{ fontFamily: SINHALA_FONT, color: S.yellowDk, fontSize: 14 }}>සිංහල</span>
            {" "}Singlish Typer Pro — Complete Edition
          </span>
          <span style={{
            padding: "3px 10px", borderRadius: 6,
            background: S.grayLt, border: `1px solid ${S.grayMid}`,
            fontSize: 10, fontWeight: 700, color: S.blueMid,
          }}>
            v3.0
          </span>
        </div>

      </div>
    </div>
  );
}