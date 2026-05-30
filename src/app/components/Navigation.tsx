import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Destinations", "Experiences", "Private Safaris", "About", "Journal"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled || mobileOpen ? "bg-[#2C2A28]" : "bg-transparent"
      }`}
    >
      {/* Main bar */}
      <div
        className="max-w-[1440px] mx-auto flex items-center justify-between px-6 sm:px-10 lg:px-20"
        style={{ height: "60px" }}
      >
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none flex-shrink-0">
          <span
            className="text-white tracking-[0.35em] uppercase"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700 }}
          >
            TERRA
          </span>
          <span
            className="text-white tracking-[0.15em]"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 700, lineHeight: 1.1 }}
          >
            Africana
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-9">
          {links.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-white/75 hover:text-white transition-colors duration-200 tracking-[0.14em] uppercase"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10.5px", fontWeight: 500 }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="flex items-center gap-4">
          <a
            href="#enquire"
            className="hidden lg:inline-flex items-center px-6 py-2 bg-[#C66A23] text-white uppercase tracking-[0.18em] hover:bg-[#b05c1e] transition-colors duration-200"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 600 }}
          >
            Enquire
          </a>

          {/* Mobile: "Enquire" text + hamburger */}
          <a
            href="#enquire"
            className="lg:hidden text-[#C66A23] uppercase tracking-[0.12em] mr-1"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 600 }}
          >
            Enquire
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-1.5"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      <div
        className={`lg:hidden bg-[#2C2A28] overflow-hidden transition-all duration-300`}
        style={{ maxHeight: mobileOpen ? "400px" : "0", opacity: mobileOpen ? 1 : 0 }}
      >
        <div className="px-6 pb-7 pt-2 flex flex-col gap-0">
          {links.map((link, i) => (
            <a
              key={link}
              href="#"
              className="text-white/70 hover:text-white py-3.5 tracking-[0.14em] uppercase"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "11px",
                fontWeight: 500,
                borderBottom: i < links.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
              }}
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
