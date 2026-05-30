export function IntroFeatures() {
  const features = [
    {
      icon: "◈",
      title: "Private & Exclusive",
      desc: "Every journey is designed solely for you. No shared vehicles, no set programmes.",
    },
    {
      icon: "◈",
      title: "Expert Local Guides",
      desc: "Deeply knowledgeable naturalists with decades of field experience.",
    },
    {
      icon: "◈",
      title: "Extraordinary Camps",
      desc: "Hand-selected intimate camps and lodges in Africa's most pristine wilderness.",
    },
  ];

  return (
    <section id="destinations" className="bg-white py-24 lg:py-36">
      <div className="max-w-[1440px] mx-auto px-8 sm:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <div>
            <p
              className="text-[#C66A23] tracking-[0.3em] uppercase mb-5"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600 }}
            >
              The Terra Africana Difference
            </p>
            <h2
              className="text-[#2C2A28] mb-6 leading-[1.1]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(34px, 3.5vw, 54px)",
                fontWeight: 700,
              }}
            >
              Safaris Crafted With{" "}
              <span className="italic">Rare Precision</span>
            </h2>
            <p
              className="text-[#7A7570] mb-12 max-w-[480px]"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px", fontWeight: 300, lineHeight: 1.85 }}
            >
              For over two decades, we have been leading discerning travellers into the soul of Africa — beyond the tourist trails, beyond expectation. Each itinerary is a living document, shaped by your curiosity and refined by our on-the-ground knowledge.
            </p>
            {/* Feature list */}
            <div className="flex flex-col gap-8">
              {features.map((f) => (
                <div key={f.title} className="flex gap-5 items-start">
                  <span className="text-[#C66A23] mt-0.5 text-lg flex-shrink-0">{f.icon}</span>
                  <div>
                    <h3
                      className="text-[#2C2A28] mb-1 tracking-[0.05em] uppercase"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 600 }}
                    >
                      {f.title}
                    </h3>
                    <p
                      className="text-[#7A7570]"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", fontWeight: 300, lineHeight: 1.75 }}
                    >
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#enquire"
              className="inline-flex items-center gap-3 mt-12 text-[#C66A23] uppercase tracking-[0.2em] hover:gap-5 transition-all duration-300"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600 }}
            >
              Discover Our Approach
              <span className="w-8 h-px bg-[#C66A23] inline-block" />
            </a>
          </div>

          {/* Right: Image composition */}
          <div className="relative">
            {/* Main image */}
            <div className="relative overflow-hidden bg-[#EADDCB]" style={{ aspectRatio: "4/5" }}>
              <img
                src="https://images.unsplash.com/photo-1741850821150-58b56e0e6156?w=800&h=1000&fit=crop&auto=format"
                alt="Luxury safari camp under acacia trees at golden hour"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating accent card */}
            <div
              className="absolute -bottom-8 -left-8 bg-[#EADDCB] p-6 hidden md:block"
              style={{ width: "200px" }}
            >
              <p
                className="text-[#C66A23] tracking-[0.2em] uppercase mb-1"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600 }}
              >
                Tailor-Made
              </p>
              <p
                className="text-[#2C2A28]"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", fontWeight: 500, lineHeight: 1.4 }}
              >
                Every journey is one of a kind
              </p>
            </div>
            {/* Decorative dot pattern */}
            <div
              className="absolute -top-6 -right-6 w-24 h-24 hidden lg:block"
              style={{
                backgroundImage: "radial-gradient(circle, #EADDCB 1.5px, transparent 1.5px)",
                backgroundSize: "10px 10px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
