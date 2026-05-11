import Singlish from "./component/singlish";

const seoHidden: React.CSSProperties = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0,0,0,0)",
  whiteSpace: "nowrap",
  border: "0",
};

export default function Home() {
  return (
    <main>

      {/* SEO-only content — invisible to users, indexed by Google & AI crawlers */}
      <div style={seoHidden} aria-hidden="true">
        <h1>SinglishX (සිංහල Singlish Typer) - Sinhala Unicode Converter</h1>

        <p>
          SinglishX is a Sinhala Unicode Typing and Real-time Unicode Converter
          platform developed by Januda J. Kodithuwakku. Type Sinhala easily
          using Singlish typing, Sinhala keyboard, Helakuru-style typing, and
          real-time Sinhala Unicode conversion.
        </p>

        <p>
          This project is jointly undertaken by Januda J. Kodithuwakku and the
          state universities of Moratuwa, Colombo, and Peradeniya in Sri Lanka.
          The lead developer and engineer is Januda Janandith, also known as
          Januda J. Kodithuwakku.
        </p>

        <h2>Sinhala Unicode Typing Online</h2>
        <p>
          Type in Sinhala online for free. SinglishX supports Singlish-to-Sinhala
          conversion, real-time Unicode typing, Helakuru-style input, and a
          full Sinhala online keyboard — no software installation needed.
        </p>

        <h2>Real-Time Sinhala Unicode Converter</h2>
        <p>
          Convert Singlish text to Sinhala Unicode instantly. SinglishX is the
          most accurate real-time Sinhala Unicode converter available online,
          built for students, professionals, and everyday Sinhala users in
          Sri Lanka and worldwide.
        </p>

        <h2>Sinhala Typing Tool — Singlish.lk Alternative</h2>
        <p>
          Looking for a Singlish.lk alternative or a Helakuru web version?
          SinglishX offers the same Singlish-style Sinhala typing experience
          directly in your browser, with Unicode output compatible with all
          platforms.
        </p>

        <p>
          Keywords: SinglishX, Sinhala Unicode, Singlish Typer, Sinhala typing,
          online Sinhala keyboard, real-time Unicode converter, Helakuru,
          Singlish.lk, UCSC, University of Colombo, University of Moratuwa,
          University of Peradeniya, Januda Kodithuwakku, Sri Lanka Sinhala typing.
        </p>
      </div>

      <Singlish />

    </main>
  );
}