import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1603703182693-51a19941fa59?w=600&h=800&fit=crop&auto=format",
    alt: "Maasai tribal people in vivid traditional dress walking across red African earth",
    label: "Culture & People",
    title: "Living Traditions",
    desc: "Meet the Maasai, Himba, and San communities whose ancient wisdom shapes modern life.",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=600&h=800&fit=crop&auto=format",
    alt: "Two elephants silhouetted against a vivid African sunset sky",
    label: "Wildlife",
    title: "The Great Herds",
    desc: "Witness elephant families, lion prides, and the spectacle of the great wildebeest migration.",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=600&h=800&fit=crop&auto=format",
    alt: "Majestic lion resting in lush African savanna grass",
    label: "Big Five",
    title: "Apex Encounters",
    desc: "Private game drives at dawn and dusk, guided by expert trackers into the heart of wild Africa.",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1764390692517-98db135fe1be?w=600&h=800&fit=crop&auto=format",
    alt: "Tour boat gliding down an African river with elephants bathing in the background",
    label: "River Safaris",
    title: "Waterways & Wildlife",
    desc: "Silent boat safaris along the Chobe and Zambezi reveal Africa from a completely new perspective.",
  },
];

export function HighlightsGrid() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollTo = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("div")?.offsetWidth ?? 280;
    el.scrollBy({ left: dir === "right" ? cardWidth + 12 : -(cardWidth + 12), behavior: "smooth" });
  };

  return (
    <section className="bg-white py-20 lg:py-32" style={{ borderTop: "1px solid rgba(44,42,40,0.08)" }}>
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="px-6 sm:px-10 lg:px-20 mb-12 lg:mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
          <div>
            <p
              className="text-[#C66A23] tracking-[0.3em] uppercase mb-3.5"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600 }}
            >
              Africa Awaits
            </p>
            <h2
              className="text-[#2C2A28] leading-[1.08]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(28px, 3vw, 46px)",
                fontWeight: 700,
              }}
            >
              Highlights of the Continent
            </h2>
          </div>
          {/* Desktop arrows */}
          <div className="hidden lg:flex items-center gap-2.5">
            <button
              onClick={() => scrollTo("left")}
              className="w-10 h-10 border border-[#2C2A28]/18 flex items-center justify-center hover:bg-[#2C2A28] hover:text-white hover:border-[#2C2A28] transition-all duration-200 text-[#2C2A28]"
            >
              <ChevronLeft size={17} />
            </button>
            <button
              onClick={() => scrollTo("right")}
              className="w-10 h-10 border border-[#2C2A28]/18 flex items-center justify-center hover:bg-[#2C2A28] hover:text-white hover:border-[#2C2A28] transition-all duration-200 text-[#2C2A28]"
            >
              <ChevronRight size={17} />
            </button>
          </div>
        </div>

        {/* Desktop 4-col grid */}
        <div className="hidden lg:grid grid-cols-4 px-20 gap-5">
          {cards.map((card) => (
            <HighlightCard key={card.id} card={card} />
          ))}
        </div>

        {/* Tablet 2×2 grid */}
        <div className="hidden sm:grid lg:hidden grid-cols-2 px-10 gap-5">
          {cards.map((card) => (
            <HighlightCard key={card.id} card={card} compact />
          ))}
        </div>

        {/* Mobile horizontal swipe carousel */}
        <div className="sm:hidden">
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto px-6 pb-2"
            style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch", scrollSnapType: "x mandatory" }}
            onScroll={(e) => {
              const el = e.currentTarget;
              const firstCard = el.querySelector("div") as HTMLElement;
              if (!firstCard) return;
              const cardW = firstCard.offsetWidth + 12;
              setActiveIndex(Math.round(el.scrollLeft / cardW));
            }}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0"
                style={{ width: "76vw", scrollSnapAlign: "start" }}
              >
                <HighlightCard card={card} compact />
              </div>
            ))}
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {cards.map((_, i) => (
              <div
                key={i}
                className="h-1 rounded-full transition-all duration-300"
                style={{
                  width: i === activeIndex ? "20px" : "6px",
                  background: i === activeIndex ? "#C66A23" : "rgba(44,42,40,0.18)",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`div::-webkit-scrollbar { display: none; }`}</style>
    </section>
  );
}

function HighlightCard({ card, compact }: { card: typeof cards[0]; compact?: boolean }) {
  return (
    <div className="group cursor-pointer">
      <div
        className="overflow-hidden bg-[#EADDCB] mb-4 relative"
        style={{ aspectRatio: compact ? "1/1" : "3/4" }}
      >
        <img
          src={card.img}
          alt={card.alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4"
          style={{ background: "linear-gradient(to top, rgba(44,42,40,0.55), transparent 50%)" }}
        >
          <span
            className="text-white tracking-[0.18em] uppercase"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 600 }}
          >
            Explore →
          </span>
        </div>
      </div>
      <p
        className="text-[#C66A23] tracking-[0.28em] uppercase mb-1.5"
        style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600 }}
      >
        {card.label}
      </p>
      <h3
        className="text-[#2C2A28] mb-2"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: compact ? "17px" : "20px",
          fontWeight: 600,
          lineHeight: 1.2,
        }}
      >
        {card.title}
      </h3>
      {!compact && (
        <p
          className="text-[#7A7570]"
          style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 300, lineHeight: 1.75 }}
        >
          {card.desc}
        </p>
      )}
    </div>
  );
}
