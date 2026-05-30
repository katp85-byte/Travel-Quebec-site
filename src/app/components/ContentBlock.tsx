export function ContentBlock() {
  return (
    <section className="bg-white py-24 lg:py-36" style={{ borderTop: "1px solid rgba(44,42,40,0.08)" }}>
      <div className="max-w-[1440px] mx-auto px-8 sm:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <div className="order-2 lg:order-1">
            <p
              className="text-[#C66A23] tracking-[0.3em] uppercase mb-5"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600 }}
            >
              Beyond the Guidebook
            </p>
            <h2
              className="text-[#2C2A28] mb-6 leading-[1.1]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(30px, 3vw, 50px)",
                fontWeight: 700,
              }}
            >
              Where the Wild
              <br />
              <span className="italic">Remains Untamed</span>
            </h2>
            <p
              className="text-[#7A7570] mb-6"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px", fontWeight: 300, lineHeight: 1.85 }}
            >
              We work exclusively in private conservancies and national parks where wildlife roams free and human footprints are minimal. No crowds. No rush. Just the raw, unfiltered drama of the African bush.
            </p>
            <p
              className="text-[#7A7570] mb-10"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px", fontWeight: 300, lineHeight: 1.85 }}
            >
              Our relationships with private landowners, conservation projects, and indigenous communities run deep — giving our guests access to places most travellers will never see.
            </p>
            {/* Stats row */}
            <div className="flex gap-10 mb-10 py-8" style={{ borderTop: "1px solid rgba(44,42,40,0.1)", borderBottom: "1px solid rgba(44,42,40,0.1)" }}>
              {[
                ["12", "African Countries"],
                ["48", "Private Reserves"],
                ["98%", "Guest Return Rate"],
              ].map(([val, label]) => (
                <div key={label}>
                  <p
                    className="text-[#2C2A28]"
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 700 }}
                  >
                    {val}
                  </p>
                  <p
                    className="text-[#7A7570] tracking-[0.15em] uppercase"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 500 }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
            <a
              href="#enquire"
              className="inline-flex items-center gap-3 text-[#C66A23] uppercase tracking-[0.2em] hover:gap-5 transition-all duration-300"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600 }}
            >
              View All Destinations
              <span className="w-8 h-px bg-[#C66A23] inline-block" />
            </a>
          </div>

          {/* Right: Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="overflow-hidden bg-[#EADDCB]" style={{ aspectRatio: "4/3" }}>
              <img
                src="https://images.unsplash.com/photo-1516642499105-492ff3ac521b?w=900&h=680&fit=crop&auto=format"
                alt="Majestic lion portrait in the African wild"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Accent block */}
            <div
              className="absolute -bottom-6 -right-6 bg-[#C66A23] p-5 hidden md:flex items-center gap-4"
              style={{ width: "220px" }}
            >
              <span
                className="text-white/40"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", fontWeight: 700, lineHeight: 1 }}
              >
                ✦
              </span>
              <div>
                <p
                  className="text-white"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "14px", fontWeight: 500 }}
                >
                  Responsible Travel
                </p>
                <p
                  className="text-white/70 tracking-[0.1em] uppercase"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 500 }}
                >
                  Conservation Partners
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
