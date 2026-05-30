import { useState } from "react";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const navGroups = [
  {
    heading: "Explore",
    links: ["East Africa", "Southern Africa", "West Africa", "North Africa", "Indian Ocean"],
  },
  {
    heading: "Journeys",
    links: ["Wildlife Safaris", "Cultural Expeditions", "Honeymoon Safaris", "Family Adventures", "Conservation Safaris"],
  },
  {
    heading: "Company",
    links: ["Our Story", "Our Team", "Journal", "Partnerships", "Contact Us"],
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer id="enquire" className="relative bg-[#2C2A28] overflow-hidden">
      {/* Background dunes image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486314030120-d5ab85fe58cd?w=1920&h=900&fit=crop&auto=format"
          alt="Desert sand dunes at sunset"
          className="w-full h-full object-cover opacity-20"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(44,42,40,0.97) 40%, rgba(44,42,40,0.7) 100%)" }}
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 sm:px-12 lg:px-20">
        {/* Top section */}
        <div className="pt-24 pb-16 text-center" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          {/* Logo */}
          <div className="flex flex-col items-center mb-3">
            <span
              className="text-[#C66A23] tracking-[0.4em] uppercase"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600 }}
            >
              TERRA
            </span>
            <span
              className="text-white tracking-[0.2em]"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", fontWeight: 700, lineHeight: 1.1 }}
            >
              Africana
            </span>
          </div>
          <p
            className="text-white/40 tracking-[0.2em] uppercase mb-10"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 400 }}
          >
            Bespoke African Safari & Travel
          </p>

          <h3
            className="text-white mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(26px, 3vw, 44px)",
              fontWeight: 500,
              fontStyle: "italic",
            }}
          >
            Begin Your African Story
          </h3>
          <p
            className="text-white/50 mb-10 max-w-[440px] mx-auto"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", fontWeight: 300, lineHeight: 1.75 }}
          >
            Join our community and receive curated insights, seasonal travel inspiration, and exclusive offers from the heart of Africa.
          </p>

          {/* Email signup */}
          {subscribed ? (
            <div className="flex items-center justify-center gap-2">
              <span className="text-[#C66A23] text-lg">✦</span>
              <p
                className="text-white/80 tracking-[0.1em] uppercase"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 500 }}
              >
                Thank you — we'll be in touch
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-0 max-w-[460px] mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 px-5 py-4 bg-white/10 text-white placeholder-white/30 outline-none border border-white/15 focus:border-[#C66A23] transition-colors duration-200 w-full"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 300 }}
                required
              />
              <button
                type="submit"
                className="px-7 py-4 bg-[#C66A23] text-white uppercase tracking-[0.18em] hover:bg-[#b05c1e] transition-colors duration-200 flex-shrink-0"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600 }}
              >
                Subscribe
              </button>
            </form>
          )}
        </div>

        {/* Navigation links */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          {navGroups.map((group) => (
            <div key={group.heading}>
              <p
                className="text-[#C66A23] tracking-[0.25em] uppercase mb-5"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 600 }}
              >
                {group.heading}
              </p>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/45 hover:text-white/80 transition-colors duration-200 tracking-[0.05em]"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 300 }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-white/25 tracking-[0.08em]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 300 }}
          >
            © {new Date().getFullYear()} Terra Africana. All rights reserved. SATSA Member.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-5">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Facebook, label: "Facebook" },
              { Icon: Twitter, label: "Twitter" },
              { Icon: Youtube, label: "YouTube" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="text-white/30 hover:text-[#C66A23] transition-colors duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms", "Sitemap"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/25 hover:text-white/50 transition-colors duration-200 tracking-[0.05em]"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 300 }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
