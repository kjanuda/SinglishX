/**
 * SinhalaBlog.jsx
 * ───────────────
 * Fully responsive, SEO-optimised Sinhala blog page for SinglishX.
 * Place at:  app/blog/page.jsx  (Next.js App Router)
 *
 * For SEO metadata add a sibling file  app/blog/metadata.js :
 *
 *   export const metadata = {
 *     title: "Sinhala Language Blog – History, Script & Culture | SinglishX",
 *     description: "Explore in-depth articles about the Sinhala language …",
 *     keywords: "Sinhala language, Sinhala script, Sri Lanka history, …",
 *     openGraph: { … },
 *   };
 */

'use client';

import { useState, useEffect } from 'react';

// ─── Design tokens ────────────────────────────────────────────────────────────
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
  green:    "#2e7d32",
  greenLt:  "#e8f5e9",
};

// ─── Blog content ─────────────────────────────────────────────────────────────
const POSTS = [
  {
    id: "what-is-sinhala",
    tag: "Language",
    tagColor: S.blueMid,
    tagBg: S.blueLt,
    emoji: "🗣️",
    sinhala: "සිංහල භාෂාව",
    title: "What is Sinhala?",
    subtitle: "The living voice of an ancient civilization",
    readTime: "4 min read",
    dateISO: "2025-05-17",
    dateDisplay: "May 17, 2025",
    metaDescription: "Learn what Sinhala is — an Indo-Aryan language spoken by 17 million people in Sri Lanka, with unique diglossia, rich loanwords, and a 2,300-year history.",
    keywords: "what is Sinhala, Sinhala language, Sinhalese language, Indo-Aryan language Sri Lanka, Sinhala diglossia",
    sections: [
      {
        heading: null,
        body: `Sinhala (සිංහල), also spelled Sinhalese, is an Indo-Aryan language spoken primarily by the Sinhalese people of Sri Lanka. It is one of the two official languages of Sri Lanka alongside Tamil, and is the native tongue of approximately 17 million people — making it one of the world's most geographically concentrated major languages.`,
      },
      {
        heading: null,
        body: `Sinhala belongs to the Indo-Iranian branch of the Indo-European language family. Its closest relative is Dhivehi, the language of the Maldives, which diverged from Sinhala several centuries ago. Despite this connection, Sinhala developed largely in isolation on the island of Sri Lanka, allowing it to evolve a uniquely distinct phonology, vocabulary, and script unlike any other language in the world.`,
      },
      {
        heading: "Diglossia — Two Sinhala in One",
        body: `One of the most fascinating features of Sinhala is its diglossia — the coexistence of two distinct registers used in different social contexts. Formal written Sinhala (literary Sinhala) differs substantially from colloquial spoken Sinhala in grammar, vocabulary, and sentence structure. A native speaker navigates both naturally, switching between them depending on context: a news broadcast uses literary forms, while everyday conversation uses the spoken register.`,
      },
      {
        heading: "A Language Rich in Loanwords",
        body: `Sinhala has absorbed loanwords from Pali, Sanskrit, Portuguese, Dutch, Malay, and English — a direct reflection of the island's rich trade history and colonial past. Words like "iskole" (school, from English), "boru" (lie, from Portuguese "burro"), and "karumbu" (sugarcane, from Tamil) are everyday reminders of these layered influences that make Sinhala a uniquely cosmopolitan tongue.`,
      },
    ],
  },
  {
    id: "srilanka-sinhala-history",
    tag: "History",
    tagColor: S.green,
    tagBg: S.greenLt,
    emoji: "🏛️",
    sinhala: "ශ්‍රී ලංකාව සහ සිංහල",
    title: "Sri Lanka & Sinhala: An Inseparable Bond",
    subtitle: "How a language became the soul of a nation",
    readTime: "5 min read",
    dateISO: "2025-05-17",
    dateDisplay: "May 17, 2025",
    metaDescription: "Discover the deep 2,300-year relationship between Sri Lanka and the Sinhala language — from Prince Vijaya and Buddhism to colonialism and independence.",
    keywords: "Sri Lanka Sinhala history, Sinhala language history, Sinhalese people origin, Buddhism Sinhala, Sri Lanka independence language",
    sections: [
      {
        heading: null,
        body: `The relationship between Sri Lanka and the Sinhala language is one of the most profound language-nation bonds in the world. For over 2,300 years, Sinhala has been the primary medium of literature, religion, administration, and daily life for the island's majority population.`,
      },
      {
        heading: "Ancient Origins",
        body: `Sri Lanka's chronicle texts — the Mahavamsa and Dipavamsa — written in Pali but describing a Sinhala-speaking civilization, date the origins of the Sinhalese people to around the 5th century BCE. Prince Vijaya, according to legend, arrived from northern India and established the first Sinhalese kingdom. His descendants spoke an early form of Sinhala derived from Prakritic dialects of ancient India.`,
      },
      {
        heading: "Buddhism Shapes the Language",
        body: `The introduction of Buddhism to Sri Lanka in the 3rd century BCE under King Devanampiyatissa, facilitated by Emperor Ashoka's emissary Mahinda, became the single most important event shaping the Sinhala language and identity. Buddhist teachings were translated and composed in Sinhala, creating a sacred link between language, religion, and culture that persists to this day. Monasteries became the custodians of Sinhala learning for centuries.`,
      },
      {
        heading: "Colonial Pressure & Survival",
        body: `During the colonial period — Portuguese (1505–1658), Dutch (1658–1796), and British (1796–1948) — Sinhala faced pressure from European languages, particularly English. Yet it survived, preserved through Buddhist monasteries, village schools (piriven), and the collective identity of the Sinhalese people. The language proved more resilient than any colonial administration could suppress.`,
      },
      {
        heading: "Independence and Official Status",
        body: `Post-independence in 1948, the "Sinhala Only Act" of 1956 elevated Sinhala to the sole official language — a politically charged decision that reflected how deeply intertwined language and national identity had become. Today, Sinhala is more than a means of communication. It is a living symbol of Sri Lankan heritage, sovereignty, and cultural continuity, spoken by over 70% of the island's population.`,
      },
    ],
  },
  {
    id: "sinhala-alphabet-history",
    tag: "Script",
    tagColor: "#6a1b9a",
    tagBg: "#f3e5f5",
    emoji: "✍️",
    sinhala: "සිංහල අකුරු",
    title: "The Sinhala Alphabet: Past to Present",
    subtitle: "How one of the world's most beautiful scripts evolved over 2,000 years",
    readTime: "6 min read",
    dateISO: "2025-05-17",
    dateDisplay: "May 17, 2025",
    metaDescription: "Trace the evolution of the Sinhala alphabet from ancient Brahmi inscriptions through palm-leaf manuscripts to Unicode and digital typing tools like SinglishX.",
    keywords: "Sinhala alphabet, Sinhala script history, Sinhala letters, Brahmi script Sri Lanka, Sinhala Unicode, Sinhala writing system",
    sections: [
      {
        heading: null,
        body: `The Sinhala script (සිංහල අක්ෂර මාලාව) is an abugida — a writing system where each consonant carries an inherent vowel sound that can be modified by diacritical marks. It is considered one of the most visually elegant scripts in the world, recognized by its beautiful rounded, circular letterforms that distinguish it from every other writing system on Earth.`,
      },
      {
        heading: "Ancient Origins — 3rd Century BCE",
        body: `The earliest form of written Sinhala emerged around the 3rd century BCE, derived from the Brahmi script brought to Sri Lanka with Buddhism. These ancient inscriptions, found carved into cave walls across Sri Lanka at Devanagala, Mihintale, and Sigiriya, used a script known as Old Sinhala Brahmi. The letterforms were angular and relatively simple — nothing like the flowing curves of modern Sinhala.`,
      },
      {
        heading: "Proto-Sinhala Script — 1st to 7th Century CE",
        body: `As centuries passed, the script gradually evolved. By the early centuries of the Common Era, the angular Brahmi-derived forms began to curve. This Proto-Sinhala phase shows the characteristic rounding that would define the mature script. Monks copying Buddhist manuscripts on ola (palm) leaves shaped the letters with styluses, and the natural requirements of palm-leaf writing accelerated the rounding of letterforms dramatically.`,
      },
      {
        heading: "Medieval Sinhala — 7th to 13th Century",
        body: `The medieval period saw the script reach a high point of elegance. Inscriptions from this era, such as those at Polonnaruwa, show sophisticated, fully rounded letterforms very close to modern Sinhala. The script expanded its repertoire to accommodate Pali and Sanskrit sounds used in Buddhist texts, adding special characters and conjunct consonants that gave Sinhala one of the largest character sets among world scripts.`,
      },
      {
        heading: "Modern Standardization — 19th to 20th Century",
        body: `The arrival of printing technology with European colonizers prompted the first standardization of Sinhala script. The first Sinhala printing types were cast by Dutch printers in the 18th century. British missionaries and scholars later systematized the script further for dictionaries and grammars. The 20th century saw official government standardization, fixing the modern alphabet at 18 vowels, 41 consonants, and several special characters — 59 base characters in total.`,
      },
      {
        heading: "Today — Digital Sinhala & SinglishX",
        body: `The most transformative evolution came with the digital age. Unicode standardized Sinhala in 1999 (Unicode 3.0), assigning code points U+0D80–U+0DFF to the script. This enabled Sinhala to appear correctly on computers, smartphones, and the internet worldwide. Tools like SinglishX now allow anyone to type Sinhala using familiar Roman keyboard input (Singlish) — a revolution that brought the ancient 2,300-year-old script into the hands of every modern user.`,
      },
    ],
  },
  {
    id: "sinhala-culture-literature",
    tag: "Culture",
    tagColor: S.yellowDk,
    tagBg: S.yellowLt,
    emoji: "🌺",
    sinhala: "සිංහල රසවිඳීම",
    title: "Why the World is Falling in Love with Sinhala",
    subtitle: "Literature, music, poetry, and the global Sinhala digital revival",
    readTime: "4 min read",
    dateISO: "2025-05-17",
    dateDisplay: "May 17, 2025",
    metaDescription: "Discover why Sinhala culture — from 1,500-year-old Sigiriya poetry to modern music and digital content — is capturing global attention like never before.",
    keywords: "Sinhala literature, Sinhala poetry, Sigiriya graffiti, Sinhala music, Sri Lanka culture, Sinhala digital content, Singlish",
    sections: [
      {
        heading: null,
        body: `Beyond its role as a medium of daily communication, Sinhala is a language of extraordinary artistic richness. Its literature, poetry, music, and oral traditions represent one of South Asia's most underappreciated cultural treasures — and increasingly, the world is taking notice.`,
      },
      {
        heading: "Sinhala Literature — 2,000 Years of Excellence",
        body: `Sinhala literature spans over 2,000 years. The Sigiri Graffiti — love poems scratched by visitors onto the Mirror Wall of Sigiriya rock fortress between the 6th and 13th centuries — are among the oldest surviving secular poetry in any Indo-Aryan language. Over 1,500 individual poems survive, expressing love, longing, beauty, and wit with a sophistication that rivals contemporary poetry anywhere in the world. These are not curiosities — they are world-class literature.`,
      },
      {
        heading: "Medieval Masterworks",
        body: `The medieval period produced literary landmarks: the Amavatura (12th century) and the Saddharmaratnavaliya (13th century) are foundational prose works. The Sandesa (message poem) tradition, in which a bird or cloud messenger carries a poetic letter across the landscape of Sri Lanka, produced some of the most beloved verse in Sinhala — a uniquely Sri Lankan literary form with no parallel in world literature.`,
      },
      {
        heading: "Sinhala Music Goes Global",
        body: `Modern Sinhala music — Baila rhythms, classical Nurthi, film songs, and light music — has a passionate following within the Sri Lankan diaspora worldwide. Artists like W.D. Amaradeva, Sunil Shantha, and Nanda Malini elevated Sinhala song to high art across the 20th century. Today, a new generation of Sinhala pop, indie, and hip-hop artists is reaching global audiences through Spotify, YouTube, and streaming platforms.`,
      },
      {
        heading: "The Digital Sinhala Revolution",
        body: `One of the most exciting developments is the explosion of Sinhala content online. Social media, YouTube channels, podcasts, and blogs in Sinhala have grown dramatically in the last decade. Young Sri Lankans are reclaiming their mother tongue, mixing Sinhala with English in the phenomenon called "Singlish" and creating vibrant digital culture. Tools like SinglishX are at the forefront of this movement — making it easier than ever to type, share, and celebrate Sinhala online. The language that carved poetry onto a mountain 1,500 years ago is now typed millions of times a day on smartphones across the world.`,
      },
    ],
  },
];

// ─── JSON-LD Structured Data for SEO ─────────────────────────────────────────
function JsonLd({ post }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.metaDescription,
    "keywords": post.keywords,
    "datePublished": post.dateISO,
    "dateModified": post.dateISO,
    "author": {
      "@type": "Person",
      "name": "Januda J. Kodithuwakku",
      "url": "https://kjanuda.netlify.app/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SinglishX",
      "url": "https://singlishx.netlify.app"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://singlishx.netlify.app/blog#${post.id}`
    },
    "inLanguage": "en",
    "about": {
      "@type": "Language",
      "name": "Sinhala",
      "alternateName": "Sinhalese"
    }
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────
function TagPill({ label, color, bg }) {
  return (
    <span style={{
      fontSize: 10, fontWeight: 700, padding: "3px 10px",
      borderRadius: 20, background: bg, color,
      border: `1.5px solid ${color}33`,
      letterSpacing: "0.07em", textTransform: "uppercase",
      flexShrink: 0, whiteSpace: "nowrap",
    }}>
      {label}
    </span>
  );
}

function BlogCard({ post, onClick, active }) {
  const [hov, setHov] = useState(false);
  return (
    <article
      onClick={() => onClick(post)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      aria-label={post.title}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onClick(post)}
      style={{
        background: active ? S.blueLt : hov ? "#f0f5ff" : S.white,
        border: `1.5px solid ${active ? S.blueMid : hov ? S.grayMid : S.grayMid}`,
        borderLeft: `4px solid ${active ? S.blueMid : hov ? "#bdd0f0" : "transparent"}`,
        borderRadius: 12,
        padding: "14px 16px",
        cursor: "pointer",
        transition: "all .18s",
        marginBottom: 10,
        outline: "none",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6, flexWrap: "wrap" }}>
        <span style={{ fontSize: 17 }}>{post.emoji}</span>
        <TagPill label={post.tag} color={post.tagColor} bg={post.tagBg} />
        <span style={{ fontSize: 10, color: S.grayTxt, marginLeft: "auto" }}>{post.readTime}</span>
      </div>
      <div style={{ fontFamily: SINHALA_FONT, fontSize: 12.5, color: S.yellowDk, marginBottom: 3 }}>
        {post.sinhala}
      </div>
      <h2 style={{
        fontSize: 14, fontWeight: 800, color: S.blueDk,
        margin: "0 0 3px", lineHeight: 1.35,
      }}>
        {post.title}
      </h2>
      <p style={{ fontSize: 11.5, color: S.grayTxt, margin: 0, lineHeight: 1.5 }}>
        {post.subtitle}
      </p>
    </article>
  );
}

function ArticleView({ post, isMobile, onBack }) {
  return (
    <article
      itemScope
      itemType="https://schema.org/BlogPosting"
      style={{ maxWidth: 740 }}
    >
      {/* JSON-LD */}
      <JsonLd post={post} />

      {/* Hidden SEO meta hints */}
      <meta itemProp="headline" content={post.title} />
      <meta itemProp="description" content={post.metaDescription} />
      <meta itemProp="keywords" content={post.keywords} />
      <meta itemProp="datePublished" content={post.dateISO} />

      {/* Mobile back button */}
      {isMobile && (
        <button
          onClick={onBack}
          style={{
            display: "flex", alignItems: "center", gap: 6,
            background: S.grayLt, border: `1.5px solid ${S.grayMid}`,
            borderRadius: 8, padding: "7px 14px",
            fontSize: 12, fontWeight: 700, color: S.blueDk,
            cursor: "pointer", marginBottom: 20,
          }}
        >
          ← All Articles
        </button>
      )}

      {/* Article header */}
      <header style={{
        borderBottom: `2.5px solid ${S.blueLt}`,
        paddingBottom: 20, marginBottom: 24,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, flexWrap: "wrap" }}>
          <TagPill label={post.tag} color={post.tagColor} bg={post.tagBg} />
          <span style={{ fontSize: 11, color: S.grayTxt }}>{post.readTime}</span>
          <time
            dateTime={post.dateISO}
            style={{ fontSize: 11, color: S.grayTxt, marginLeft: "auto" }}
          >
            {post.dateDisplay}
          </time>
        </div>

        <div style={{
          fontFamily: SINHALA_FONT, fontSize: 20,
          color: S.yellowDk, marginBottom: 8, lineHeight: 1.5,
        }}
          itemProp="about"
        >
          {post.sinhala}
        </div>

        <h1
          itemProp="headline"
          style={{
            fontSize: "clamp(20px, 4vw, 26px)",
            fontWeight: 900, color: S.blueDk,
            margin: "0 0 8px", lineHeight: 1.25, letterSpacing: "-0.02em",
          }}
        >
          {post.emoji} {post.title}
        </h1>
        <p style={{ fontSize: 14, color: S.grayTxt, margin: "0 0 10px", fontStyle: "italic" }}>
          {post.subtitle}
        </p>

        {/* SEO description (visually subtle) */}
        <p style={{ fontSize: 12.5, color: "#888", margin: 0, lineHeight: 1.6 }}
          itemProp="description">
          {post.metaDescription}
        </p>
      </header>

      {/* Article sections */}
      <div
        itemProp="articleBody"
        style={{ fontSize: "clamp(14px, 2.5vw, 15.5px)", lineHeight: 1.9, color: "#222" }}
      >
        {post.sections.map((sec, i) => (
          <section key={i}>
            {sec.heading && (
              <h2 style={{
                fontSize: 13, fontWeight: 800,
                color: S.blueDk, letterSpacing: "0.06em",
                textTransform: "uppercase",
                borderLeft: `3px solid ${S.blueMid}`,
                paddingLeft: 10,
                margin: "28px 0 10px",
              }}>
                {sec.heading}
              </h2>
            )}
            <p style={{ margin: "0 0 16px" }}>{sec.body}</p>
          </section>
        ))}
      </div>

      {/* CTA Banner */}
      <div style={{
        marginTop: 36, padding: "16px 20px",
        background: S.yellowLt, border: `1.5px solid #ffe082`,
        borderRadius: 12, fontSize: 14, color: "#5d4037",
        display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap",
      }}>
        <span style={{ fontSize: 22 }}>⌨️</span>
        <span style={{ flex: 1 }}>
          Want to type in Sinhala on any device?{" "}
          <a
            href="/"
            style={{ color: S.blueMid, fontWeight: 800, textDecoration: "none" }}
          >
            Try SinglishX for free →
          </a>
        </span>
      </div>

      {/* Author */}
      <div style={{
        marginTop: 20, padding: "12px 16px",
        background: S.grayLt, border: `1.5px solid ${S.grayMid}`,
        borderRadius: 10, display: "flex", alignItems: "center", gap: 12,
      }}>
        <div style={{
          width: 38, height: 38, borderRadius: "50%",
          background: S.blueLt, border: `2px solid ${S.blueMid}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 18, flexShrink: 0,
        }}>👨‍💻</div>
        <div itemProp="author" itemScope itemType="https://schema.org/Person">
          <div style={{ fontSize: 12, fontWeight: 700, color: S.blueDk }} itemProp="name">
            Januda J. Kodithuwakku
          </div>
          <div style={{ fontSize: 11, color: S.grayTxt }}>
            Creator of SinglishX · Sinhala Unicode Tools ·{" "}
            <a href="https://kjanuda.netlify.app/" style={{ color: S.blueMid }}
              itemProp="url">kjanuda.netlify.app</a>
          </div>
        </div>
        <time
          dateTime={post.dateISO}
          style={{ fontSize: 11, color: S.grayTxt, marginLeft: "auto", whiteSpace: "nowrap" }}
        >
          {post.dateDisplay}
        </time>
      </div>
    </article>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function SinhalaBlog() {
  const [active, setActive]       = useState(POSTS[0]);
  const [showArticle, setShowArticle] = useState(false); // mobile toggle
  const [isMobile, setIsMobile]   = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleSelect = (post) => {
    setActive(post);
    if (isMobile) setShowArticle(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => setShowArticle(false);

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home",  "item": "https://singlishx.netlify.app" },
      { "@type": "ListItem", "position": 2, "name": "Blog",  "item": "https://singlishx.netlify.app/blog" },
      { "@type": "ListItem", "position": 3, "name": active.title },
    ]
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: S.white,
      color: S.black,
      fontFamily: "system-ui, sans-serif",
    }}>
      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── Page Header ── */}
      <header style={{
        borderBottom: `2.5px solid ${S.blueLt}`,
        padding: "18px 20px 14px",
        background: S.white,
      }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: 10 }}>
            <ol style={{
              listStyle: "none", padding: 0, margin: 0,
              display: "flex", gap: 6, alignItems: "center",
              fontSize: 11, color: S.grayTxt, flexWrap: "wrap",
            }}>
              <li><a href="/" style={{ color: S.blueMid, textDecoration: "none" }}>Home</a></li>
              <li style={{ color: S.grayMid }}>›</li>
              <li style={{ color: S.grayTxt }}>Blog</li>
            </ol>
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            <h1 style={{
              fontSize: "clamp(18px, 4vw, 22px)",
              fontWeight: 900, color: S.blueDk,
              margin: 0, letterSpacing: "-0.02em",
            }}>
              <span style={{ fontFamily: SINHALA_FONT, color: S.yellowDk }}>සිංහල</span>
              {" "}Language Blog
              <span style={{ fontSize: 13, color: S.blueMid, fontWeight: 600, marginLeft: 6 }}>Pro</span>
            </h1>
            <span style={{
              fontSize: 10, padding: "3px 10px", borderRadius: 20,
              fontWeight: 700, background: S.yellowLt, color: S.yellowDk,
              border: "1.5px solid #ffe082",
            }}>
              {POSTS.length} ARTICLES
            </span>
          </div>
          <p style={{ fontSize: 12.5, color: S.grayTxt, margin: "5px 0 0" }}>
            In-depth articles on Sinhala language history, alphabet, culture, and Sri Lanka heritage
          </p>
        </div>
      </header>

      {/* ── Layout ── */}
      <div style={{
        maxWidth: 1160, margin: "0 auto",
        // Desktop: sidebar + article. Mobile: stacked.
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "300px 1fr",
        minHeight: "calc(100vh - 110px)",
      }}>

        {/* ── LEFT SIDEBAR ── */}
        {(!isMobile || !showArticle) && (
          <aside
            aria-label="Article list"
            style={{
              borderRight: isMobile ? "none" : `1.5px solid ${S.grayMid}`,
              borderBottom: isMobile ? `1.5px solid ${S.grayMid}` : "none",
              padding: "20px 16px",
              background: S.grayLt,
            }}
          >
            <div style={{
              fontSize: 10, fontWeight: 700, color: S.blueDk,
              textTransform: "uppercase", letterSpacing: "0.08em",
              marginBottom: 12,
            }}>
              All Articles
            </div>

            {POSTS.map(post => (
              <BlogCard
                key={post.id}
                post={post}
                onClick={handleSelect}
                active={active.id === post.id}
              />
            ))}

            {/* About banner */}
            <div style={{
              marginTop: 16, padding: "12px 14px",
              background: S.blueLt, border: `1.5px solid #90caf9`,
              borderRadius: 10, fontSize: 11.5, color: S.blueDk, lineHeight: 1.7,
            }}>
              <strong>📚 About this blog</strong><br />
              In-depth articles about the Sinhala language — its history, alphabet, culture,
              and digital future. Updated regularly.
            </div>

            {/* Topics */}
            <div style={{ marginTop: 14 }}>
              <div style={{
                fontSize: 10, fontWeight: 700, color: S.blueDk,
                textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8,
              }}>
                Topics
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {[
                  { label: "Language", color: S.blueMid, bg: S.blueLt },
                  { label: "History",  color: S.green,   bg: S.greenLt },
                  { label: "Script",   color: "#6a1b9a",  bg: "#f3e5f5" },
                  { label: "Culture",  color: S.yellowDk, bg: S.yellowLt },
                ].map(t => (
                  <TagPill key={t.label} label={t.label} color={t.color} bg={t.bg} />
                ))}
              </div>
            </div>
          </aside>
        )}

        {/* ── RIGHT ARTICLE ── */}
        {(!isMobile || showArticle) && (
          <main
            style={{
              padding: isMobile ? "24px 16px 60px" : "36px 44px 60px",
            }}
          >
            <ArticleView
              post={active}
              isMobile={isMobile}
              onBack={handleBack}
            />

            {/* Related posts */}
            <section style={{ marginTop: 48 }}>
              <div style={{
                fontSize: 11, fontWeight: 700, color: S.blueDk,
                textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 14,
              }}>
                More Articles
              </div>
              <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(220px,1fr))",
                gap: 12,
              }}>
                {POSTS.filter(p => p.id !== active.id).map(post => (
                  <div
                    key={post.id}
                    onClick={() => handleSelect(post)}
                    style={{
                      background: S.grayLt,
                      border: `1.5px solid ${S.grayMid}`,
                      borderRadius: 12, padding: "14px 16px",
                      cursor: "pointer", transition: "all .15s",
                    }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = S.blueMid}
                    onMouseLeave={e => e.currentTarget.style.borderColor = S.grayMid}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 6 }}>
                      <span style={{ fontSize: 16 }}>{post.emoji}</span>
                      <TagPill label={post.tag} color={post.tagColor} bg={post.tagBg} />
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: S.blueDk, marginBottom: 3, lineHeight: 1.3 }}>
                      {post.title}
                    </div>
                    <div style={{ fontSize: 11.5, color: S.grayTxt }}>{post.readTime}</div>
                  </div>
                ))}
              </div>
            </section>
          </main>
        )}
      </div>

      {/* ── Global responsive styles ── */}
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; }
        a:focus-visible { outline: 2px solid #1976d2; outline-offset: 2px; border-radius: 4px; }
        @media (max-width: 480px) {
          h1 { font-size: 18px !important; }
        }
      `}</style>
    </div>
  );
}