export function Hero() {
  return (
    <section
      className="relative w-full bg-[#2C2A28]"
      style={{ height: "100svh", minHeight: "600px", overflow: "hidden" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&h=1200&fit=crop&auto=format')`,
        }}
      />
      {/* Left-to-right gradient overlay for desktop — radial vignette for mobile */}
      <div
        className="absolute inset-0 hidden sm:block"
        style={{ background: "linear-gradient(to right, rgba(20,16,12,0.88) 0%, rgba(20,16,12,0.5) 55%, rgba(20,16,12,0.2) 100%)" }}
      />
      <div
        className="absolute inset-0 sm:hidden"
        style={{ background: "linear-gradient(to bottom, rgba(20,16,12,0.45) 0%, rgba(20,16,12,0.72) 50%, rgba(20,16,12,0.90) 100%)" }}
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{ background: "linear-gradient(to top, rgba(20,16,12,0.6), transparent)" }}
      />

      {/* ── DESKTOP content (left-aligned) ── */}
      <div className="relative z-10 h-full hidden sm:flex flex-col justify-center max-w-[1440px] mx-auto px-12 lg:px-20">
        <div className="max-w-[680px]">
          <p
            className="text-[#C66A23] tracking-[0.35em] uppercase mb-6"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600 }}
          >
            Bespoke African Travel Since 1998
          </p>

          <h1
            className="text-white mb-5 leading-[0.95]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(56px, 7.5vw, 110px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            Journeys
            <br />
            <em className="not-italic italic" style={{ color: "#EADDCB" }}>to Africa</em>
          </h1>

          <p
            className="text-white/65 mb-10 max-w-[400px]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px", fontWeight: 300, lineHeight: 1.8 }}
          >
            Curated expeditions to the world's most extraordinary wilderness — private, unhurried, and deeply personal.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#enquire"
              className="inline-flex items-center justify-center px-9 py-4 bg-[#C66A23] text-white uppercase tracking-[0.2em] hover:bg-[#b05c1e] transition-colors duration-300"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600 }}
            >
              Plan Your Journey
            </a>
            <a
              href="#destinations"
              className="inline-flex items-center justify-center px-9 py-4 border border-white/35 text-white uppercase tracking-[0.2em] hover:border-white/70 hover:bg-white/8 transition-all duration-300"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 500 }}
            >
              Explore
            </a>
          </div>
        </div>

        {/* Bottom meta strip */}
        <div className="absolute bottom-10 left-12 lg:left-20 right-12 lg:right-20 flex items-end justify-between">
          <div className="flex items-center gap-10">
            {[["25+", "Years Expertise"], ["180+", "Private Camps"], ["4,200+", "Journeys Crafted"]].map(([num, label]) => (
              <div key={label} className="flex flex-col">
                <span
                  className="text-white"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 700, lineHeight: 1 }}
                >
                  {num}
                </span>
                <span
                  className="text-white/40 tracking-[0.2em] uppercase mt-1"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 500 }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
          {/* Scroll indicator */}
          <div className="flex flex-col items-center gap-2">
            <span
              className="text-white/35 tracking-[0.25em] uppercase"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 500 }}
            >
              Scroll
            </span>
            <div className="w-px h-10 bg-white/15 relative overflow-hidden">
              <div
                className="absolute top-0 w-full bg-white/55"
                style={{ height: "40%", animation: "scrollLine 2.2s ease-in-out infinite" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── MOBILE content (centered) ── */}
      <div className="relative z-10 h-full sm:hidden flex flex-col items-center justify-center px-6 text-center pb-24">
        <p
          className="text-[#C66A23] tracking-[0.35em] uppercase mb-5"
          style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 600 }}
        >
          Bespoke African Travel Since 1998
        </p>

        <h1
          className="text-white mb-5 leading-[0.95]"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(44px, 13vw, 64px)",
            fontWeight: 700,
            letterSpacing: "-0.01em",
          }}
        >
          Journeys
          <br />
          <em className="not-italic italic" style={{ color: "#EADDCB" }}>to Africa</em>
        </h1>

        <p
          className="text-white/60 mb-8 max-w-[300px]"
          style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", fontWeight: 300, lineHeight: 1.8 }}
        >
          Curated expeditions to the world's most extraordinary wilderness.
        </p>

        {/* Full-width CTA anchored near bottom */}
        <div className="absolute bottom-10 left-0 right-0 px-6 flex flex-col gap-3">
          <a
            href="#enquire"
            className="flex items-center justify-center w-full py-4 bg-[#C66A23] text-white uppercase tracking-[0.2em]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600 }}
          >
            Plan Your Journey
          </a>
          <a
            href="#destinations"
            className="flex items-center justify-center w-full py-4 border border-white/40 text-white uppercase tracking-[0.2em]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 500 }}
          >
            Explore Destinations
          </a>
        </div>
      </div>

      <style>{`
        @keyframes scrollLine {
          0%   { transform: translateY(-100%); opacity: 0; }
          40%  { opacity: 1; }
          100% { transform: translateY(300%); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
