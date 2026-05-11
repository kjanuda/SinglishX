'use client';

import { useState } from 'react';

// ─── Design tokens (matching Singlish Typer Pro) ──────────────────────────────
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
  red:      "#c62828",
  redLt:    "#ffebee",
  green:    "#2e7d32",
  greenLt:  "#e8f5e9",
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

function Field({ label, id, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label
        htmlFor={id}
        style={{
          fontSize: 11, fontWeight: 700, color: S.blueDk,
          textTransform: "uppercase", letterSpacing: "0.08em",
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

const inputBase = {
  width: "100%",
  padding: "11px 14px",
  border: `2px solid ${S.grayMid}`,
  borderRadius: 10,
  fontSize: 14,
  color: S.black,
  background: S.grayLt,
  outline: "none",
  fontFamily: "system-ui,sans-serif",
  lineHeight: 1.5,
  boxSizing: "border-box",
  transition: "border-color .15s, background .15s",
};

function StyledInput({ id, name, type = "text", value, onChange, placeholder, required }) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      id={id} name={name} type={type}
      value={value} onChange={onChange}
      placeholder={placeholder} required={required}
      style={{
        ...inputBase,
        borderColor: focused ? S.blueMid : S.grayMid,
        background: focused ? S.white : S.grayLt,
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
}

function StyledTextarea({ id, name, value, onChange, placeholder, required, rows = 5 }) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      id={id} name={name}
      value={value} onChange={onChange}
      placeholder={placeholder} required={required}
      rows={rows}
      style={{
        ...inputBase,
        resize: "vertical",
        minHeight: 120,
        borderColor: focused ? S.blueMid : S.grayMid,
        background: focused ? S.white : S.grayLt,
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState('');
  const [success, setSuccess]   = useState('');
  const [btnHover, setBtnHover] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); setError(''); setSuccess('');
    try {
      const res  = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to send email');
      setSuccess('Email sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError(err.message || 'An error occurred while sending the email');
    } finally {
      setLoading(false);
    }
  };

  const filled = Object.values(formData).filter(Boolean).length;
  const total  = Object.keys(formData).length;

  return (
    <div style={{
      minHeight: "100vh",
      background: S.white,
      color: S.black,
      padding: "24px 16px",
      fontFamily: "system-ui,sans-serif",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
    }}>
      <div style={{ width: "100%", maxWidth: 580 }}>

        {/* ── Header ── */}
        <div style={{
          display: "flex", alignItems: "center", gap: 12,
          paddingBottom: 14, borderBottom: `2.5px solid ${S.blueLt}`, marginBottom: 14,
        }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <h1 style={{ fontSize: 22, fontWeight: 800, color: S.blueDk, lineHeight: 1.2, margin: 0 }}>
              <span style={{ fontFamily: SINHALA_FONT, color: S.yellowDk }}>සිංහල</span>
              {" "}Contact Us
              <span style={{ fontSize: 14, color: S.blueMid, fontWeight: 600, marginLeft: 6 }}>Pro</span>
            </h1>
            <p style={{ fontSize: 12, color: S.grayTxt, margin: "3px 0 0" }}>
              Send us a message — we'll get back to you shortly
            </p>
          </div>
          <span style={{
            flexShrink: 0, fontSize: 10, padding: "3px 10px", borderRadius: 20,
            fontWeight: 700, background: S.yellowLt, color: S.yellowDk,
            border: `1.5px solid #ffe082`, whiteSpace: "nowrap",
          }}>
            COMPLETE EDITION
          </span>
        </div>

        {/* ── Info banner ── */}
        <div style={{
          background: S.yellowLt, border: `1.5px solid #ffe082`, borderRadius: 10,
          padding: "10px 14px", fontSize: 12, color: "#5d4037",
          lineHeight: 2, marginBottom: 16,
          display: "flex", flexWrap: "wrap", gap: "0 20px",
        }}>
          {[["📧","support@singlishtyper.lk"], ["⏱","Reply within 24 hours"], ["🔒","Your data is private"]].map(([icon, text]) => (
            <span key={text}>
              <span style={{ fontWeight: 700, color: S.yellowDk }}>{icon}</span>{" "}{text}
            </span>
          ))}
        </div>

        {/* ── Alerts ── */}
        {error && (
          <div style={{
            marginBottom: 14, padding: "11px 14px",
            background: S.redLt, border: `1.5px solid #ef9a9a`,
            borderRadius: 10, fontSize: 13, color: S.red,
            display: "flex", gap: 8,
          }}>
            <span style={{ fontWeight: 700 }}>✕</span>{error}
          </div>
        )}
        {success && (
          <div style={{
            marginBottom: 14, padding: "11px 14px",
            background: S.greenLt, border: `1.5px solid #a5d6a7`,
            borderRadius: 10, fontSize: 13, color: S.green,
            display: "flex", gap: 8,
          }}>
            <span style={{ fontWeight: 700 }}>✓</span>{success}
          </div>
        )}

        {/* ── Form card ── */}
        <div style={{
          background: S.white, border: `1.5px solid ${S.grayMid}`,
          borderRadius: 14, padding: "20px", marginBottom: 14,
        }}>
          <SectionLabel>Your Details</SectionLabel>

          {/* Name + Email — responsive 2-col */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 12, marginBottom: 12,
          }}>
            <Field label="Name" id="name">
              <StyledInput id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" required />
            </Field>
            <Field label="Email" id="email">
              <StyledInput id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required />
            </Field>
          </div>

          <div style={{ marginBottom: 14 }}>
            <Field label="Subject" id="subject">
              <StyledInput id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="What is this about?" required />
            </Field>
          </div>

          <SectionLabel>Message</SectionLabel>
          <StyledTextarea
            id="message" name="message"
            value={formData.message} onChange={handleChange}
            placeholder="Write your message here…" required rows={5}
          />
        </div>

        {/* ── Progress + Submit ── */}
        <div style={{
          background: S.grayLt, border: `1.5px solid ${S.grayMid}`,
          borderRadius: 12, padding: "12px 14px", marginBottom: 14,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: S.blueDk, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Form Progress
            </span>
            <span style={{ fontSize: 11, color: S.grayTxt }}>{filled}/{total} fields filled</span>
          </div>
          <div style={{ height: 6, background: S.grayMid, borderRadius: 4, overflow: "hidden", marginBottom: 12 }}>
            <div style={{
              height: "100%",
              width: `${(filled / total) * 100}%`,
              background: filled === total ? "#43a047" : S.blueMid,
              borderRadius: 4,
              transition: "width .3s ease, background .3s",
            }} />
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
            style={{
              width: "100%", padding: "12px 0",
              border: "none", borderRadius: 10,
              fontSize: 14, fontWeight: 700,
              cursor: loading ? "not-allowed" : "pointer",
              background: loading ? S.grayMid : btnHover ? S.blueDk : S.blueMid,
              color: loading ? S.grayTxt : S.white,
              transition: "background .15s, transform .1s",
              transform: btnHover && !loading ? "translateY(-1px)" : "none",
              letterSpacing: "0.04em",
            }}
          >
            {loading ? (
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                <span style={{
                  display: "inline-block", width: 14, height: 14,
                  border: `2px solid ${S.grayTxt}`,
                  borderTopColor: "transparent",
                  borderRadius: "50%",
                  animation: "spin 0.7s linear infinite",
                }} />
                Sending…
              </span>
            ) : "Send Email →"}
          </button>
        </div>

        {/* ── Status pills ── */}
        <div style={{
          display: "flex", gap: 7, flexWrap: "wrap", alignItems: "center",
          paddingTop: 12, borderTop: `1.5px solid ${S.grayMid}`,
        }}>
          {[
            [`${formData.name    ? "✓" : "○"} Name`,    !!formData.name],
            [`${formData.email   ? "✓" : "○"} Email`,   !!formData.email],
            [`${formData.subject ? "✓" : "○"} Subject`, !!formData.subject],
            [`${formData.message ? "✓" : "○"} Message`, !!formData.message],
          ].map(([label, ok]) => (
            <span key={label} style={{
              fontSize: 11, padding: "3px 10px", borderRadius: 6,
              border: `1.5px solid ${ok ? "#a5d6a7" : S.grayMid}`,
              background: ok ? S.greenLt : S.grayLt,
              color: ok ? S.green : "#555",
              fontWeight: 600, transition: "all .2s",
            }}>
              {label}
            </span>
          ))}
        </div>

      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}