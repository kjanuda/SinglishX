'use client';

const S = {
  blue:     "#1565c0",
  blueLt:   "#e3f0ff",
  blueMid:  "#1976d2",
  blueDk:   "#0d47a1",
  black:    "#111111",
  white:    "#ffffff",
  grayLt:   "#f4f6fb",
  grayMid:  "#dee2ef",
  grayTxt:  "#666666",
};

const SITE_NAME     = "SinglishX";
const SITE_URL      = "https://singlishx.netlify.app";
const CONTACT_EMAIL = "janudakodi@gmail.com";
const LAST_UPDATED  = "May 17, 2025";

const h2Style = {
  fontSize: 18,
  fontWeight: 800,
  color: "#0d47a1",
  margin: "0 0 12px",
  letterSpacing: "-0.01em",
};

const h3Style = {
  fontSize: 14,
  fontWeight: 700,
  color: "#333",
  margin: "16px 0 8px",
};

const ulStyle = {
  paddingLeft: 22,
  margin: "8px 0 12px",
  lineHeight: 1.9,
};

const linkStyle = {
  color: "#1976d2",
  textDecoration: "underline",
};

const divider = (
  <hr style={{ border: "none", borderTop: "1.5px solid #dee2ef", margin: "32px 0" }} />
);

export default function PrivacyPolicy() {
  return (
    <div style={{
      minHeight: "100vh",
      background: S.white,
      color: S.black,
      fontFamily: "system-ui, sans-serif",
    }}>
      <main style={{ maxWidth: 760, margin: "0 auto", padding: "52px 24px 100px" }}>

        <h1 style={{
          fontSize: 32, fontWeight: 900, color: S.blueDk,
          margin: "0 0 8px", letterSpacing: "-0.02em",
        }}>
          Privacy Policy
        </h1>
        <p style={{ fontSize: 13, color: S.grayTxt, margin: "0 0 40px", borderBottom: `1.5px solid ${S.grayMid}`, paddingBottom: 20 }}>
          Effective date: <strong>{LAST_UPDATED}</strong> &nbsp;·&nbsp; {SITE_NAME} &nbsp;·&nbsp; {SITE_URL}
        </p>

        <div style={{ fontSize: 15.5, lineHeight: 1.85, color: "#222" }}>

          <p>
            Welcome to <strong>{SITE_NAME}</strong>. This Privacy Policy describes how we collect,
            use, and handle your information when you visit <strong>{SITE_URL}</strong>. By using
            this website, you agree to the collection and use of information in accordance with
            this policy.
          </p>

          {divider}

          <h2 style={h2Style}>1. Information We Collect</h2>
          <h3 style={h3Style}>Information You Provide Directly</h3>
          <p>When you use our Contact form, we collect:</p>
          <ul style={ulStyle}>
            <li>Your name and email address</li>
            <li>The content of your message or feedback</li>
          </ul>
          <h3 style={h3Style}>Information Collected Automatically</h3>
          <p>When you visit our website, we automatically collect:</p>
          <ul style={ulStyle}>
            <li>IP address and approximate location (country / city)</li>
            <li>Browser type, version, and operating system</li>
            <li>Pages you visit and time spent on each page</li>
            <li>Referring website or search terms used to reach us</li>
            <li>Device type and screen resolution</li>
          </ul>

          {divider}

          <h2 style={h2Style}>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul style={ulStyle}>
            <li>Respond to your questions and support requests</li>
            <li>Improve our website content, features, and performance</li>
            <li>Analyse website traffic and usage patterns</li>
            <li>Display relevant advertisements via Google AdSense</li>
            <li>Maintain the security and proper operation of our website</li>
            <li>Comply with applicable laws and legal obligations</li>
          </ul>
          <p>
            We do <strong>not</strong> sell, rent, or trade your personal information to third
            parties for their own marketing purposes.
          </p>

          {divider}

          <h2 style={h2Style}>3. Cookies</h2>
          <p>
            Our website uses cookies — small text files stored on your device — to enhance your
            experience and enable certain functionality. The types of cookies we use are:
          </p>
          <ul style={ulStyle}>
            <li>
              <strong>Essential Cookies</strong> — Necessary for the website to function correctly.
              These cannot be disabled.
            </li>
            <li>
              <strong>Analytics Cookies</strong> — Help us understand how visitors interact with our
              site (e.g., pages visited, time on site). Data is aggregated and anonymised.
            </li>
            <li>
              <strong>Advertising Cookies</strong> — Used by Google AdSense to serve personalised
              advertisements based on your browsing behaviour and interests.
            </li>
            <li>
              <strong>Preference Cookies</strong> — Remember your settings and choices across visits.
            </li>
          </ul>
          <p>
            You can control or disable cookies at any time through your browser settings. Please note
            that disabling certain cookies may limit functionality on our website. To learn more, visit{" "}
            <a href="https://www.allaboutcookies.org" style={linkStyle} target="_blank" rel="noopener noreferrer">
              allaboutcookies.org
            </a>.
          </p>

          {divider}

          <h2 style={h2Style}>4. Google AdSense and Advertising</h2>
          <p>
            We use <strong>Google AdSense</strong>, an advertising service provided by Google LLC,
            to display advertisements on our website. Google AdSense uses cookies and similar
            technologies to serve ads based on your visits to our site and other websites.
          </p>
          <ul style={ulStyle}>
            <li>
              Google uses the <strong>DoubleClick cookie</strong> and other cookies to serve ads
              personalised to your interests based on your browsing history.
            </li>
            <li>
              Third-party vendors, including Google, use cookies to serve ads based on your prior
              visits to our website and/or other websites on the internet.
            </li>
            <li>
              You may opt out of personalised advertising by visiting{" "}
              <a href="https://www.google.com/settings/ads" style={linkStyle} target="_blank" rel="noopener noreferrer">
                Google Ads Settings
              </a>.
            </li>
            <li>
              You may also opt out via the{" "}
              <a href="https://optout.networkadvertising.org" style={linkStyle} target="_blank" rel="noopener noreferrer">
                Network Advertising Initiative opt-out page
              </a>.
            </li>
          </ul>
          <p>
            For more information on how Google uses data when you use our site, visit:{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              style={linkStyle}
              target="_blank"
              rel="noopener noreferrer"
            >
              How Google uses data from sites that use our services
            </a>.
          </p>

          {divider}

          <h2 style={h2Style}>5. Third-Party Services</h2>
          <p>
            Our website may integrate with the following third-party services. Each service operates
            under its own privacy policy:
          </p>
          <ul style={ulStyle}>
            <li>
              <strong>Google Analytics</strong> — Traffic analysis and user behaviour insights.{" "}
              <a href="https://policies.google.com/privacy" style={linkStyle} target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>
            </li>
            <li>
              <strong>Google AdSense</strong> — Display advertising network.{" "}
              <a href="https://policies.google.com/privacy" style={linkStyle} target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>
            </li>
            <li>
              <strong>Google Fonts</strong> — Web fonts served from Google's CDN.{" "}
              <a href="https://policies.google.com/privacy" style={linkStyle} target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>
            </li>
            <li>
              <strong>Netlify</strong> — Website hosting and deployment.{" "}
              <a href="https://www.netlify.com/privacy/" style={linkStyle} target="_blank" rel="noopener noreferrer">Netlify Privacy Policy</a>
            </li>
          </ul>

          {divider}

          <h2 style={h2Style}>6. Data Retention</h2>
          <ul style={ulStyle}>
            <li>Contact form submissions are kept for up to <strong>12 months</strong> for customer support, then securely deleted.</li>
            <li>Anonymised analytics data may be retained for up to <strong>26 months</strong>.</li>
            <li>Server log files (including IP addresses) are retained for <strong>30 days</strong> for security monitoring.</li>
          </ul>

          {divider}

          <h2 style={h2Style}>7. Your Privacy Rights</h2>
          <p>
            Depending on your country or region, you may have the following rights regarding your
            personal data:
          </p>
          <ul style={ulStyle}>
            <li><strong>Right to Access</strong> — Request a copy of personal data we hold about you.</li>
            <li><strong>Right to Rectification</strong> — Request correction of inaccurate data.</li>
            <li><strong>Right to Erasure</strong> — Request deletion of your personal data.</li>
            <li><strong>Right to Object</strong> — Object to how we process your data.</li>
            <li><strong>Right to Data Portability</strong> — Receive your data in a portable, machine-readable format.</li>
            <li><strong>Right to Restrict Processing</strong> — Request we limit how we use your data.</li>
          </ul>
          <p>
            To exercise any of these rights, please email us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} style={linkStyle}>{CONTACT_EMAIL}</a>.
            We will respond within <strong>30 days</strong>.
          </p>

          {divider}

          <h2 style={h2Style}>8. Children's Privacy</h2>
          <p>
            Our website is not directed to children under the age of <strong>13</strong>. We do not
            knowingly collect personal information from children under 13. If you are a parent or
            guardian and believe your child has provided us with personal information, please contact
            us at <a href={`mailto:${CONTACT_EMAIL}`} style={linkStyle}>{CONTACT_EMAIL}</a> and
            we will promptly delete that information from our records.
          </p>

          {divider}

          <h2 style={h2Style}>9. Security</h2>
          <p>
            We take reasonable technical and organisational measures to protect your personal
            information against unauthorised access, disclosure, alteration, or destruction.
            However, no method of internet transmission or electronic storage is completely secure.
            We cannot guarantee absolute security of your data.
          </p>

          {divider}

          <h2 style={h2Style}>10. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices,
            technology, or legal requirements. When we make changes, we will update the effective
            date at the top of this page. We encourage you to review this policy periodically.
            Continued use of our website after any update constitutes acceptance of the revised policy.
          </p>

          {divider}

          <h2 style={h2Style}>11. Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests related to this Privacy Policy or your
            personal data, please contact us:
          </p>
          <ul style={ulStyle}>
            <li><strong>Website:</strong> <a href={SITE_URL} style={linkStyle}>{SITE_URL}</a></li>
            <li><strong>Email:</strong> <a href={`mailto:${CONTACT_EMAIL}`} style={linkStyle}>{CONTACT_EMAIL}</a></li>
            <li><strong>Developer:</strong> Januda J. Kodithuwakku</li>
          </ul>

        </div>
      </main>
    </div>
  );
}