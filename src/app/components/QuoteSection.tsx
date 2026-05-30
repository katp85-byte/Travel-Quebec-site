export function QuoteSection() {
  return (
    <section className="bg-white py-28 lg:py-40" style={{ borderTop: "1px solid rgba(44,42,40,0.08)" }}>
      <div className="max-w-[900px] mx-auto px-8 sm:px-12 text-center">
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-16 bg-[#C66A23]/40" />
          <span className="text-[#C66A23] text-xl">◈</span>
          <div className="h-px w-16 bg-[#C66A23]/40" />
        </div>

        <blockquote>
          <p
            className="text-[#2C2A28] mb-10 leading-[1.35]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(26px, 3.5vw, 46px)",
              fontWeight: 400,
              fontStyle: "italic",
              letterSpacing: "-0.01em",
            }}
          >
            "Africa changes you. Not the continent itself — though it does that too — but the idea that the world could be so ancient, so wide, and still so surprisingly kind."
          </p>

          <footer>
            <div className="h-px w-10 bg-[#2C2A28]/20 mx-auto mb-6" />
            <cite
              className="not-italic"
            >
              <span
                className="text-[#2C2A28] block"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "17px", fontWeight: 600 }}
              >
                Helena Voss
              </span>
              <span
                className="text-[#7A7570] tracking-[0.2em] uppercase"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 500 }}
              >
                Terra Africana Guest, Botswana 2024
              </span>
            </cite>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
