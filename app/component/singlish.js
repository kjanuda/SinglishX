"use client";
/**
 * SINGLISH → SINHALA UNICODE CONVERTER
 * Updated Complete Edition — White theme, Blue/Yellow/Black/White palette
 *
 * Supports:
 *  ✓ All vowels: a aa A Aa/AA ae aee i ii u uu e ee/ea o oo/oe au ai
 *  ✓ All consonants including GNa KNa zka qa nj ng nndha nnda nnga etc.
 *  ✓ Consonant+vowel patterns: ka kaa kA kAa ki kii ku kuu ke kee ko koo kau kl
 *  ✓ ra clusters: kra kraa krA krAa kri krie kru kruu kre kree kro kroo
 *  ✓ + operator for explicit combine: k+ru k+raa k+re k+ro
 *  ✓ Y for yansaya: sathY  sathYa  widhYuthaya
 *  ✓ @ for repaya: ka@maya
 *  ✓ * for conjunct letters: k*ShaNika
 *  ✓ \rXXX prefix reph
 *  ✓ \n anusvara ං   \h / X visarga ඃ   \N ඬ   \R ල
 *  ✓ Nasal clusters: nnda nndha nnga
 *  ✓ <-- English --> passthrough mode
 *  ✓ Syllable counter
 *  ✓ Real-time live preview
 */

import { useState, useCallback, useRef } from "react";

// ─── Unicode constants ────────────────────────────────────────────────────────
const HAL      = "\u0DCA"; // ් virama
const ZWJ      = "\u200D"; // zero-width joiner
const ANUSVARA = "\u0D82"; // ං
const VISARGA  = "\u0D83"; // ඃ

// ─── Independent vowels ───────────────────────────────────────────────────────
const INDEPENDENT_VOWELS = {
  "aee": "\u0D88", // ඈ
  "aa":  "\u0D86", // ආ
  "ae":  "\u0D87", // ඇ
  "Aa":  "\u0D88", // ඈ
  "AA":  "\u0D88", // ඈ
  "au":  "\u0D96", // ඖ
  "ai":  "\u0D93", // ඓ
  "ii":  "\u0D8A", // ඊ
  "uu":  "\u0D8C", // ඌ
  "ee":  "\u0D92", // ඒ
  "ea":  "\u0D92", // ඒ (alt)
  "oo":  "\u0D95", // ඕ
  "oe":  "\u0D95", // ඕ (alt)
  "a":   "\u0D85", // අ
  "A":   "\u0D87", // ඇ
  "i":   "\u0D89", // ඉ
  "u":   "\u0D8B", // උ
  "e":   "\u0D91", // එ
  "o":   "\u0D94", // ඔ
};

// ─── Vowel diacritics ─────────────────────────────────────────────────────────
const VOWEL_DIACRITICS = {
  "aee": "\u0DD1", // ෑ long ae
  "aa":  "\u0DCF", // ා
  "ae":  "\u0DD0", // ැ short ae
  "Aa":  "\u0DD1", // ෑ long ae
  "AA":  "\u0DD1", // ෑ long ae
  "au":  "\u0DDE", // ෞ
  "ai":  "\u0DDB", // ෛ
  "ii":  "\u0DD3", // ී
  "uu":  "\u0DD6", // ූ
  "ee":  "\u0DDA", // ේ
  "ea":  "\u0DDA", // ේ (alt)
  "oo":  "\u0DDD", // ෝ
  "oe":  "\u0DDD", // ෝ (alt)
  "A":   "\u0DD0", // ැ short ae
  "a":   "",       // inherent
  "i":   "\u0DD2", // ි
  "u":   "\u0DD4", // ු
  "e":   "\u0DD9", // ෙ
  "o":   "\u0DDC", // ො
};

// ─── Consonants ───────────────────────────────────────────────────────────────
const CONSONANTS = {
  "LuAA":  "\u0DC5",
  "LuAa":  "\u0DC5",
  "nndha": "\u0DAC",
  "nnda":  "\u0D9F",
  "nnga":  "\u0D9E",
  "zdha":  "\u0DB0",
  "zga":   "\u0D9E",
  "GNa":   "\u0DA5",
  "KNa":   "\u0DC5",
  "GN":    "\u0DA5",
  "KN":    "\u0DC5",
  "kh":    "\u0D9B",
  "gh":    "\u0D9D",
  "Ga":    "\u0D9C",
  "Ka":    "\u0D9B",
  "Ch":    "\u0DA1",
  "Ca":    "\u0DA1",
  "jh":    "\u0DA3",
  "Th":    "\u0DA8",
  "Dh":    "\u0DAA",
  "dh":    "\u0DB0",
  "th":    "\u0DAE",
  "ph":    "\u0DB5",
  "bh":    "\u0DB7",
  "sh":    "\u0DC1",
  "Sh":    "\u0DC2",
  "Sa":    "\u0DC2",
  "ch":    "\u0DA0",
  "Lu":    "\u0DC5",
  "La":    "\u0DC5",
  "Ba":    "\u0BAD",
  "Na":    "\u0DAB",
  "Da":    "\u0DA9",
  "Ta":    "\u0DA7",
  "ng":    "\u0D9E",
  "nj":    "\u0DA4",
  "zka":   "\u0D9B",
  "qa":    "\u0DA5",
  "k": "\u0D9A", "g": "\u0D9C", "j": "\u0DA2",
  "T": "\u0DA7", "D": "\u0DA9",
  "N": "\u0DAB", "t": "\u0DAD", "d": "\u0DAF", "n": "\u0DB1",
  "p": "\u0DB4", "b": "\u0DB6", "B": "\u0DB6", "m": "\u0DB8",
  "y": "\u0DBA", "r": "\u0DBB", "R": "\u0DBB",
  "l": "\u0DBD", "L": "\u0DC5",
  "w": "\u0DC0", "v": "\u0DC0",
  "s": "\u0DC3", "h": "\u0DC4",
  "f": "\u0DC6", "q": "\u0D9A", "P": "\u0DB4",
  "c": "\u0DA0",
};

// ─── Signs ────────────────────────────────────────────────────────────────────
const SIGNS = {
  "\\\\n": ANUSVARA,
  "\\n":   ANUSVARA,
  "\\\\h": VISARGA,
  "\\h":   VISARGA,
  "\\N":   "\u0DAC",
  "\\R":   "\u0DBD",
  "X":     VISARGA,
};

// ─── Sort helpers ─────────────────────────────────────────────────────────────
const sortDesc = (obj) =>
  Object.entries(obj)
    .filter(([, v]) => v !== null)
    .sort((a, b) => b[0].length - a[0].length);

const IVsorted  = sortDesc(INDEPENDENT_VOWELS);
const VDsorted  = sortDesc(VOWEL_DIACRITICS);
const Csorted   = sortDesc(CONSONANTS);
const SIGsorted = sortDesc(SIGNS);

// ─── Match helper ─────────────────────────────────────────────────────────────
function matchAt(sorted, str, pos) {
  const rest = str.slice(pos);
  for (const [k, v] of sorted) {
    if (rest.startsWith(k)) return { k, v, len: k.length };
  }
  return null;
}

// ─── Core token converter ─────────────────────────────────────────────────────
function convertToken(word) {
  let result = "";
  let i = 0;
  const len = word.length;

  while (i < len) {
    const rest = word.slice(i);

    // 1. Standalone signs
    const sign = matchAt(SIGsorted, word, i);
    if (sign) { result += sign.v; i += sign.len; continue; }

    // 2. \r prefix reph
    if (rest.startsWith("\\r") && i + 2 < len) {
      result += "\u0DBB" + HAL + ZWJ;
      i += 2;
      continue;
    }

    // 3. @ repaya inline
    if (word[i] === "@") {
      result += "\u0DBB" + HAL + ZWJ;
      i++;
      continue;
    }

    // 4. + combine operator
    if (word[i] === "+") { i++; continue; }

    // 5. * conjunct operator
    if (word[i] === "*") {
      if (result.endsWith(HAL)) result = result.slice(0, -1) + HAL + ZWJ;
      i++;
      continue;
    }

    // 6. Nasal clusters
    const nasals = [
      ["nndha", "\u0DAC"],
      ["nnda",  "\u0D9F"],
      ["nnga",  "\u0D9E"],
    ];
    let nasalMatch = false;
    for (const [k, v] of nasals) {
      if (rest.toLowerCase().startsWith(k)) {
        result += v; i += k.length; nasalMatch = true; break;
      }
    }
    if (nasalMatch) continue;

    // 7. Consonant
    const cm = matchAt(Csorted, word, i);
    if (cm) {
      i += cm.len;

      // 7a. Yansaya (Y)
      if (i < len && word[i] === "Y") {
        i++;
        const vm = matchAt(VDsorted, word, i);
        if (vm) {
          result += cm.v + HAL + ZWJ + "\u0DBA" + (vm.v || "");
          i += vm.len;
        } else {
          result += cm.v + HAL + ZWJ + "\u0DBA";
        }
        continue;
      }

      // 7b. Vocalic l
      if (i < len && word[i] === "l") {
        const after = word[i + 1];
        const noMoreCons = !after || /[\s+*@Y]/.test(after);
        if (noMoreCons || !matchAt(Csorted, word, i + 1)) {
          result += cm.v + "\u0DDF";
          i++;
          continue;
        }
      }

      // 7c. ra cluster
      if (i < len && word[i] === "r") {
        const vm = matchAt(VDsorted, word, i + 1);
        if (vm) {
          if (vm.k === "u")  { result += cm.v + "\u0DD8"; i += 1 + vm.len; continue; }
          if (vm.k === "uu") { result += cm.v + "\u0DF2"; i += 1 + vm.len; continue; }
          result += cm.v + HAL + ZWJ + "\u0DBB" + (vm.v || "");
          i += 1 + vm.len;
          continue;
        }
      }

      // 7d. Normal vowel diacritic
      const vm = matchAt(VDsorted, word, i);
      if (vm) {
        result += cm.v + (vm.v || "");
        i += vm.len;
      } else {
        result += cm.v + HAL;
      }
      continue;
    }

    // 8. Independent vowel
    const ivm = matchAt(IVsorted, word, i);
    if (ivm) { result += ivm.v; i += ivm.len; continue; }

    // 9. Pass through
    result += word[i];
    i++;
  }

  return result;
}

// ─── Main converter (public API) ──────────────────────────────────────────────
export function convertSinglishToSinhala(text) {
  if (!text) return "";
  const parts = text.split(/(<--\s*[\s\S]*?\s*-->)/);
  return parts.map(part => {
    const englishMatch = part.match(/^<--\s*([\s\S]*?)\s*-->$/);
    if (englishMatch) return englishMatch[1];
    return part.split(/(\s+)/).map(tok =>
      /^\s+$/.test(tok) ? tok : convertToken(tok)
    ).join("");
  }).join("");
}

// ─── UI Data ──────────────────────────────────────────────────────────────────
const SINHALA_FONT = "'Noto Sans Sinhala','Iskoola Pota','Noto Serif Sinhala',serif";

const EXAMPLES = [
  { s: "mama",           l: "I/me — මම" },
  { s: "oyaa",           l: "You — ඔයා" },
  { s: "kohomada",       l: "How? — කොහොමද" },
  { s: "sthuthi",        l: "Thanks — ස්තූති" },
  { s: "bohoma sthuthi", l: "Thank you very much" },
  { s: "ayubowan",       l: "Greetings — ආයුබෝවන්" },
  { s: "nAa",            l: "No — නෑ" },
  { s: "sathY",          l: "සත්‍ය" },
  { s: "sathYa",         l: "සත්‍යා" },
  { s: "widhYuthaya",    l: "විද්‍යුතය" },
  { s: "ka@maya",        l: "කර්මය (repaya)" },
  { s: "k*ShaNika",      l: "ක්‍ෂණික (conjunct)" },
  { s: "k+ru",           l: "කෘ (vocalic r)" },
  { s: "k+raa",          l: "ක්‍රා (ra cluster)" },
  { s: "\\rka",          l: "ර්‍ක (reph prefix)" },
  { s: "mannjokka",      l: "මඤ්ඤොක්ක" },
  { s: "singhala",       l: "සිංහල" },
  { s: "amma",           l: "Mother — අම්මා" },
  { s: "thaththa",       l: "Father — තාත්තා" },
  { s: "watura",         l: "Water — වතුර" },
  { s: "bath",           l: "Rice — බත්" },
  { s: "lanka",          l: "ලංකා" },
  { s: "gama",           l: "Village — ගම" },
  { s: "pansala",        l: "Temple — පන්සල" },
  { s: "adara",          l: "Love — ආදර" },
];

const REFERENCE = {
  "Independent Vowels": [
    ["a","අ"],["aa","ආ"],["A/ae","ඇ"],["Aa/AA/aee","ඈ"],
    ["i","ඉ"],["ii","ඊ"],["u","උ"],["uu","ඌ"],
    ["e","එ"],["ee/ea","ඒ"],["o","ඔ"],["oo/oe","ඕ"],
    ["au","ඖ"],["ai","ඓ"],
  ],
  "All Consonants": [
    ["k","ක"],["kh/Ka","ඛ"],["g","ග"],["gh","ඝ"],
    ["ng","ඞ"],["nnda","ඟ"],["ch/c","ච"],["Ch/Ca","ඡ"],
    ["j","ජ"],["jh","ඣ"],["nj","ඤ"],["GN","ඥ"],
    ["T/Ta","ට"],["Th","ඨ"],["D/Da","ඩ"],["Dh","ඪ"],
    ["N/Na","ණ"],["\\N/nndha","ඬ"],["t","ත"],["th","ථ"],
    ["d","ද"],["dh","ධ"],["n","න"],["p","ප"],
    ["ph","ඵ"],["b","බ"],["bh","භ"],["m","ම"],
    ["y","ය"],["r/R","ར"],["l","ල"],["L/Lu/KN","ළ"],
    ["w/v","ව"],["sh","ශ"],["Sh/Sa","ෂ"],["s","ස"],
    ["h","හ"],["f","ෆ"],["B/Ba","෭"],
  ],
  "Consonant+Vowel (k=ක example)": [
    ["k","ක්"],["ka","ක"],["kaa","කා"],["kA","කැ"],
    ["kAa","කෑ"],["ki","කි"],["kii","කී"],["ku","කු"],
    ["kuu","කූ"],["ke","කෙ"],["kee","කේ"],["ko","කො"],
    ["koo","කෝ"],["kau","කෞ"],["kl","කෟ"],
    ["k+ru","කෘ"],["k+ruu","කෲ"],["k+ra","ක්‍රා"],["k+ri","ක්‍රි"],
  ],
  "Signs & Operators": [
    ["\\n","ං"],["\\h / X","ඃ"],["\\N","ඬ"],["\\R","ල"],
    ["Y","yansaya"],["@","repaya"],["*","conjunct"],["+","combine"],
  ],
};

const TOOLBAR = [
  { group: "Signs", items: [
    { label: "\\n",   si: "ං",  tip: "anusvara" },
    { label: "\\h",   si: "ඃ",  tip: "visarga" },
    { label: "\\N",   si: "ඬ",  tip: "ඬ" },
    { label: "+ru",   si: "ෘ",  tip: "vocalic r short" },
    { label: "+ruu",  si: "ෲ",  tip: "vocalic r long" },
    { label: "l",     si: "ෟ",  tip: "vocalic l (after cons)" },
  ]},
  { group: "Operators", items: [
    { label: "*",  si: "\u200D",     tip: "conjunct *" },
    { label: "Y",  si: "\u200D\u0DBA", tip: "yansaya Y" },
    { label: "@",  si: "ར️‍",        tip: "repaya @" },
    { label: "+r", si: "\u200D\u0DBB", tip: "ra cluster +r" },
  ]},
  { group: "Common", items: [
    { label: "ka",  si: "ක",  tip: "ka" },
    { label: "ma",  si: "ම",  tip: "ma" },
    { label: "na",  si: "න",  tip: "na" },
    { label: "la",  si: "ල",  tip: "la" },
    { label: "ra",  si: "ར",  tip: "ra" },
    { label: "wa",  si: "ව",  tip: "wa" },
    { label: "sa",  si: "ස",  tip: "sa" },
    { label: "tha", si: "ථ",  tip: "tha" },
  ]},
];

const GUIDE_SECTIONS = [
  {
    title: "+ Operator — Combine",
    content: [
      ["k+ru",  "කෘ",  "vocalic r short"],
      ["k+ruu", "කෲ",  "vocalic r long"],
      ["k+ra",  "ක්‍රා", "ra cluster"],
      ["k+re",  "ක්‍රෙ", ""],
      ["k+ree", "ක්‍රේ", ""],
      ["k+ro",  "ක්‍රො", ""],
      ["k+roo", "ක්‍රෝ", ""],
    ],
  },
  {
    title: "Y — Yansaya",
    content: [
      ["sathY",       "සත්‍ය",   ""],
      ["sathYa",      "සත්‍යා",  ""],
      ["widhYuthaya", "විද්‍යුතය", ""],
    ],
  },
  {
    title: "@ — Repaya (ར් modifier)",
    content: [["ka@maya", "කར්මය", "ར → @"]],
  },
  {
    title: "* — Conjunct Letters",
    content: [["k*ShaNika", "ක්‍ෂණික", ""]],
  },
  {
    title: "\\r prefix — Reph",
    content: [["\\rka", "ར්‍ค", ""]],
  },
  {
    title: "<-- --> English Passthrough",
    content: [["ektharaa <-- A --> nam sisuwek", "එක්තරා A නම් සිසුවෙක්", ""]],
  },
];

const VOWEL_PATTERNS = [
  "k=ක්  ka=ක  kaa=කා  kA=කැ  kAa=කෑ",
  "ki=කි  kii=කී  ku=කු  kuu=කූ  kau=කෞ",
  "ke=කෙ  kee=කේ  ko=කො  koo=කෝ  kl=කෟ",
  "kra=ක්‍රා  kri=ක්‍රි  kru=කෘ  kruu=කෲ",
  "kre=ක්‍රෙ  kree=ක්‍රේ  kro=ක්‍රො  kroo=ක්‍රෝ",
  "\\rka=ར་‍ค  kYa=ク‍යා  kl=කෟ",
];

// ─── Styles ───────────────────────────────────────────────────────────────────
const S = {
  // Colors
  blue:      "#1565c0",
  blueLt:    "#e3f0ff",
  blueMid:   "#1976d2",
  blueDk:    "#0d47a1",
  yellow:    "#f9a825",
  yellowLt:  "#fff8e1",
  yellowDk:  "#f57f17",
  black:     "#111111",
  white:     "#ffffff",
  grayLt:    "#f4f6fb",
  grayMid:   "#dee2ef",
  grayTxt:   "#666666",
};

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

function StatPill({ children, ok }) {
  return (
    <span style={{
      fontSize: 11, padding: "3px 10px", borderRadius: 6,
      border: `1.5px solid ${ok ? "#a5d6a7" : S.grayMid}`,
      background: ok ? "#e8f5e9" : S.grayLt,
      color: ok ? "#2e7d32" : "#555",
    }}>
      {children}
    </span>
  );
}

function RefCell({ en, si }) {
  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center",
      gap: 2, padding: "8px 4px", borderRadius: 8,
      border: `1.5px solid ${S.blueLt}`, background: S.grayLt, textAlign: "center",
    }}>
      <span style={{ fontFamily: SINHALA_FONT, fontSize: 20, color: S.black }}>{si}</span>
      <span style={{ fontSize: 10, fontFamily: "monospace", fontWeight: 700, color: S.yellowDk }}>{en}</span>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function SinglishConverter() {
  const [input, setInput]   = useState("");
  const [tab, setTab]       = useState("type");
  const [copied, setCopied] = useState(false);
  const textareaRef         = useRef(null);

  const output    = convertSinglishToSinhala(input);
  const wordCount = input.trim() ? input.trim().split(/\s+/).length : 0;
  const sylCount  = (output.match(/[\u0D85-\u0DC6]/g) || []).length;

  const handleCopy = useCallback(async () => {
    if (!output) return;
    try { await navigator.clipboard.writeText(output); } catch (_) {}
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [output]);

  const insertAtCursor = (text) => {
    const el = textareaRef.current;
    if (!el) return;
    const s = el.selectionStart, e = el.selectionEnd;
    const next = input.slice(0, s) + text + input.slice(e);
    setInput(next);
    setTimeout(() => {
      el.selectionStart = el.selectionEnd = s + text.length;
      el.focus();
    }, 0);
  };

  // ── Layout ──
  return (
    <div style={{ minHeight: "100vh", background: S.white, color: S.black, padding: 16, fontFamily: "system-ui,sans-serif" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>

        {/* ── Header ── */}
        

        {/* ── Tabs ── */}
        <div style={{
          display: "flex", gap: 5, background: S.blueLt, borderRadius: 12,
          padding: 5, marginBottom: 16,
        }}>
          {[
            { id: "type",  label: "⌨  Type" },
            { id: "ref",   label: "📖  Reference" },
            { id: "guide", label: "💡  Guide" },
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

        {/* ════════════════ TYPE TAB ════════════════ */}
        {tab === "type" && (
          <>
            {/* Input / Output */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
              {/* Input */}
              <div>
                <SectionLabel>Singlish input</SectionLabel>
                <textarea
                  ref={textareaRef}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder={"Type here...\nkohomada\nk+ru  k*ShaNika  sathYa"}
                  style={{
                    width: "100%", height: 140, padding: 12,
                    border: `2px solid ${S.grayMid}`, borderRadius: 10,
                    fontSize: 14, color: S.black, background: S.white,
                    resize: "none", outline: "none", fontFamily: "monospace",
                    lineHeight: 1.6, boxSizing: "border-box", transition: "border .15s",
                  }}
                  onFocus={e => e.target.style.borderColor = S.blueMid}
                  onBlur={e => e.target.style.borderColor = S.grayMid}
                />
              </div>

              {/* Output */}
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                  <SectionLabel>Sinhala output</SectionLabel>
                  <button
                    onClick={handleCopy}
                    style={{
                      padding: "4px 14px",
                      border: `2px solid ${copied ? "#a5d6a7" : S.grayMid}`,
                      borderRadius: 8, background: copied ? "#e8f5e9" : S.white,
                      color: copied ? "#2e7d32" : S.black,
                      fontSize: 12, cursor: "pointer", fontWeight: 600,
                      transition: "all .15s",
                    }}
                  >
                    {copied ? "✓ Copied!" : "⎘ Copy"}
                  </button>
                </div>
                <div
                  onClick={handleCopy}
                  title="Click to copy"
                  style={{
                    width: "100%", height: 140, padding: 12,
                    border: `2px solid ${S.grayMid}`, borderRadius: 10,
                    background: S.grayLt, overflowY: "auto",
                    cursor: "pointer", whiteSpace: "pre-wrap", wordBreak: "break-word",
                    lineHeight: 1.9, boxSizing: "border-box",
                    fontFamily: SINHALA_FONT,
                    fontSize: output ? 22 : 13,
                    color: output ? S.black : "#bbb",
                    fontStyle: output ? "normal" : "italic",
                    transition: "border .15s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = S.blueMid}
                  onMouseLeave={e => e.currentTarget.style.borderColor = S.grayMid}
                >
                  {output || "Output appears here…"}
                </div>
              </div>
            </div>

            {/* Toolbar */}
            <div style={{
              background: S.grayLt, border: `1.5px solid ${S.grayMid}`,
              borderRadius: 12, padding: 12, marginBottom: 12,
              display: "flex", flexWrap: "wrap", gap: 16,
            }}>
              {TOOLBAR.map(grp => (
                <div key={grp.group}>
                  <div style={{ fontSize: 9, fontWeight: 700, color: "#aaa", textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 6 }}>
                    {grp.group}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                    {grp.items.map(item => (
                      <button
                        key={item.label}
                        onClick={() => insertAtCursor(item.label)}
                        title={item.tip}
                        style={{
                          display: "flex", flexDirection: "column", alignItems: "center",
                          gap: 2, padding: "6px 9px",
                          border: `1.5px solid ${S.grayMid}`, borderRadius: 8,
                          background: S.white, cursor: "pointer", minWidth: 42, transition: "all .15s",
                        }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = S.blueMid; e.currentTarget.style.background = S.blueLt; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = S.grayMid; e.currentTarget.style.background = S.white; }}
                      >
                        <span style={{ fontFamily: SINHALA_FONT, fontSize: 17, color: S.black }}>{item.si}</span>
                        <span style={{ fontSize: 9, fontFamily: "monospace", color: S.blueMid, fontWeight: 700 }}>{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Examples */}
            <SectionLabel>Examples — click to load</SectionLabel>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
              {EXAMPLES.map(ex => (
                <button
                  key={ex.s}
                  onClick={() => { setInput(ex.s); textareaRef.current?.focus(); }}
                  title={ex.l}
                  style={{
                    padding: "5px 13px", border: `1.5px solid ${S.grayMid}`,
                    borderRadius: 20, background: S.white, color: "#333",
                    fontSize: 12, cursor: "pointer", fontWeight: 500, transition: "all .15s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = S.blueMid; e.currentTarget.style.color = S.blueDk; e.currentTarget.style.background = S.blueLt; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = S.grayMid; e.currentTarget.style.color = "#333"; e.currentTarget.style.background = S.white; }}
                >
                  {ex.s}
                </button>
              ))}
            </div>

            {/* Status bar */}
            <div style={{ display: "flex", gap: 7, alignItems: "center", paddingTop: 12, borderTop: `1.5px solid ${S.grayMid}` }}>
              <StatPill>{output.length} chars</StatPill>
              <StatPill>{wordCount} words</StatPill>
              <StatPill>{sylCount} syllables</StatPill>
              {output && <StatPill ok>✓ Converted</StatPill>}
            </div>
          </>
        )}

        {/* ════════════════ REFERENCE TAB ════════════════ */}
        {tab === "ref" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {Object.entries(REFERENCE).map(([section, items]) => (
              <div key={section} style={{
                background: S.white, border: `1.5px solid ${S.grayMid}`,
                borderRadius: 12, padding: "14px 16px",
              }}>
                <SectionLabel>{section}</SectionLabel>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(72px, 1fr))", gap: 7 }}>
                  {items.map(([en, si]) => <RefCell key={en} en={en} si={si} />)}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ════════════════ GUIDE TAB ════════════════ */}
        {tab === "guide" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {GUIDE_SECTIONS.map(({ title, content }) => (
              <div key={title} style={{
                background: S.white, border: `1.5px solid ${S.grayMid}`,
                borderRadius: 12, padding: "14px 16px",
              }}>
                <SectionLabel>{title}</SectionLabel>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {content.map(([en, si, note]) => (
                    <div key={en} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <code style={{
                        padding: "3px 10px", borderRadius: 6,
                        background: S.yellowLt, border: `1.5px solid #ffe082`,
                        color: "#bf360c", fontSize: 12, fontFamily: "monospace", fontWeight: 700,
                      }}>
                        {en}
                      </code>
                      <span style={{ color: "#999", fontSize: 13 }}>→</span>
                      <span style={{ fontFamily: SINHALA_FONT, fontSize: 21, color: S.black }}>{si}</span>
                      {note && <span style={{ fontSize: 11, color: S.grayTxt }}>{note}</span>}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Full vowel pattern */}
            <div style={{
              background: S.white, border: `1.5px solid ${S.grayMid}`,
              borderRadius: 12, padding: "14px 16px",
            }}>
              <SectionLabel>Full Vowel Pattern (replace ක with any consonant)</SectionLabel>
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                {VOWEL_PATTERNS.map(line => (
                  <div key={line} style={{
                    background: S.yellowLt, border: `1.5px solid #ffe082`,
                    borderRadius: 7, padding: "5px 12px",
                    fontFamily: "monospace", fontSize: 12, color: "#333", lineHeight: 2,
                  }}>
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}