const steps = [
  {
    num: "01",
    icon: "✦",
    title: "Vision Consultation",
    desc: "We begin with a deep conversation — your travel style, your dreams for Africa, the rhythm you want from your journey. No templates. No compromise.",
  },
  {
    num: "02",
    icon: "✦",
    title: "Bespoke Itinerary",
    desc: "Our Africa specialists craft a personalised route, selecting the finest private camps and seasonal wildlife experiences tailored entirely to you.",
  },
  {
    num: "03",
    icon: "✦",
    title: "Seamless Experience",
    desc: "From private charter flights to expert field guides, every detail is arranged with precision so you can be fully present in the wild.",
  },
];

export function ProcessSection() {
  return (
    <section className="relative bg-[#EADDCB] overflow-hidden">
      {/* Atmospheric elephant image */}
      <div className="relative" style={{ height: "clamp(300px, 45vw, 600px)" }}>
        <img
          src="https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=1920&h=700&fit=crop&auto=format"
          alt="Lone elephant walking across the African savanna"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(234,221,203,0) 0%, rgba(234,221,203,0.3) 60%, rgba(234,221,203,1) 100%)" }}
        />
        {/* Top overlay */}
        <div
          className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center"
          style={{ background: "rgba(44,42,40,0.15)" }}
        >
          <div className="text-center px-8">
            <p
              className="text-white/80 tracking-[0.35em] uppercase mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600 }}
            >
              How We Work
            </p>
            <h2
              className="text-white leading-[1.1]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(32px, 4vw, 62px)",
                fontWeight: 700,
              }}
            >
              Your Journey,{" "}
              <span className="italic">Perfectly Formed</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="max-w-[1440px] mx-auto px-8 sm:px-12 lg:px-20 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`flex flex-col lg:flex-col gap-0 ${i > 0 ? "lg:border-l lg:border-[#2C2A28]/15 lg:pl-8" : ""}`}
            >
              {/* Mobile: row layout */}
              <div className="flex items-start gap-6 lg:flex-col lg:gap-0">
                <div className="flex-shrink-0 lg:mb-6">
                  <span
                    className="text-[#C66A23]/30 block"
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: "60px", fontWeight: 700, lineHeight: 1 }}
                  >
                    {step.num}
                  </span>
                </div>
                <div className="lg:mt-0">
                  <div className="flex items-center gap-3 mb-3 lg:mb-4">
                    <span className="text-[#C66A23] text-sm">{step.icon}</span>
                    <h3
                      className="text-[#2C2A28] tracking-[0.06em] uppercase"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 600 }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p
                    className="text-[#2C2A28]/65"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", fontWeight: 300, lineHeight: 1.85 }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center lg:justify-start">
          <a
            href="#enquire"
            className="inline-flex items-center px-10 py-4 bg-[#2C2A28] text-white uppercase tracking-[0.18em] hover:bg-[#C66A23] transition-colors duration-300"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600 }}
          >
            Begin Your Journey
          </a>
        </div>
      </div>
    </section>
  );
}
