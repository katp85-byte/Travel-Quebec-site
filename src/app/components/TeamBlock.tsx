const guides = [
  {
    id: 1,
    name: "James Ochieng",
    role: "Head of East Africa",
    years: "18 years in the field",
    img: "https://images.unsplash.com/photo-1741850821428-01abc97866b3?w=500&h=660&fit=crop&auto=format",
    alt: "Expert safari guide standing near a luxury tent in the African bush",
  },
  {
    id: 2,
    name: "Sarah van der Berg",
    role: "Southern Africa Specialist",
    years: "12 years in the field",
    img: "https://images.unsplash.com/photo-1753954507587-2fc489e2cd90?w=500&h=660&fit=crop&auto=format",
    alt: "Safari jeep silhouetted against an expansive African sunset",
  },
];

export function TeamBlock() {
  return (
    <section className="bg-[#F5F0E8] py-24 lg:py-36" style={{ borderTop: "1px solid rgba(44,42,40,0.08)" }}>
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Text — second on mobile, first on desktop */}
          <div className="order-2 lg:order-1">
            <p
              className="text-[#C66A23] tracking-[0.3em] uppercase mb-5"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600 }}
            >
              The People Behind Your Journey
            </p>
            <h2
              className="text-[#2C2A28] mb-6 leading-[1.1]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(28px, 3vw, 50px)",
                fontWeight: 700,
              }}
            >
              Guided by Those
              <br />
              <span className="italic">Who Know Africa Best</span>
            </h2>
            <p
              className="text-[#7A7570] mb-6 max-w-[460px]"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px", fontWeight: 300, lineHeight: 1.85 }}
            >
              Our small, passionate team of Africa specialists have spent decades living and working across the continent. They know the best time to be in each location, which camps offer true exclusivity, and where the wildlife is most spectacular.
            </p>
            <p
              className="text-[#7A7570] mb-10 max-w-[460px]"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px", fontWeight: 300, lineHeight: 1.85 }}
            >
              When you travel with Terra Africana, you are not just booking a holiday. You are gaining a trusted companion for life — someone who will be there before, during, and long after your journey.
            </p>

            {/* Credentials */}
            <div className="flex flex-col gap-3.5 mb-10 py-8" style={{ borderTop: "1px solid rgba(44,42,40,0.1)", borderBottom: "1px solid rgba(44,42,40,0.1)" }}>
              {[
                "SATSA Bonded Travel Agency",
                "Condé Nast Traveler Recommended",
                "African Travel & Tourism Association",
              ].map((cred) => (
                <div key={cred} className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-[#C66A23] flex-shrink-0" />
                  <span
                    className="text-[#7A7570] tracking-[0.1em] uppercase"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 500 }}
                  >
                    {cred}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#enquire"
              className="inline-flex items-center px-8 py-4 border border-[#2C2A28] text-[#2C2A28] uppercase tracking-[0.18em] hover:bg-[#2C2A28] hover:text-white transition-all duration-300 w-full sm:w-auto justify-center sm:justify-start"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600 }}
            >
              Meet Our Team
            </a>
          </div>

          {/* Guide cards — first on mobile, second on desktop */}
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            {guides.map((guide, i) => (
              <div
                key={guide.id}
                className={`group relative overflow-hidden bg-[#EADDCB] ${i === 1 ? "mt-8" : ""}`}
                style={{ aspectRatio: "3/4" }}
              >
                <img
                  src={guide.img}
                  alt={guide.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-4"
                  style={{ background: "linear-gradient(to top, rgba(44,42,40,0.88) 0%, transparent 100%)" }}
                >
                  <p
                    className="text-white"
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", fontWeight: 600, lineHeight: 1.2 }}
                  >
                    {guide.name}
                  </p>
                  <p
                    className="text-[#C66A23] tracking-[0.12em] uppercase mt-1"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600 }}
                  >
                    {guide.role}
                  </p>
                  <p
                    className="text-white/45 mt-0.5"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 300 }}
                  >
                    {guide.years}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
