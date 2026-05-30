import { useRef, useState, useEffect } from "react";

const carouselImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&h=900&fit=crop&auto=format",
    alt: "Lone acacia tree bathed in golden hour light on the African savanna",
    caption: "Serengeti, Tanzania",
    aspect: "4/3" as const,
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1764390692517-98db135fe1be?w=1200&h=900&fit=crop&auto=format",
    alt: "Tour boat gliding down an African river with elephants in the background",
    caption: "Chobe River, Botswana",
    aspect: "4/3" as const,
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1741850826374-234124a31bf2?w=800&h=1000&fit=crop&auto=format",
    alt: "Luxury canvas tent glowing against the twilight sky in the African bush",
    caption: "Okavango Delta, Botswana",
    aspect: "4/5" as const,
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1709402606682-400133d92ab2?w=1200&h=900&fit=crop&auto=format",
    alt: "Open safari vehicle with guests observing a lion at close range",
    caption: "Masai Mara, Kenya",
    aspect: "4/3" as const,
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1673667616969-8466c862b9ca?w=1200&h=900&fit=crop&auto=format",
    alt: "Couple holding hands walking through the golden African grasslands",
    caption: "Amboseli, Kenya",
    aspect: "4/3" as const,
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1753954507587-2fc489e2cd90?w=800&h=1000&fit=crop&auto=format",
    alt: "Safari jeep silhouetted against a vast sunset on the African horizon",
    caption: "Etosha, Namibia",
    aspect: "4/5" as const,
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1603703182693-51a19941fa59?w=1200&h=900&fit=crop&auto=format",
    alt: "Maasai people in vibrant traditional dress walking across the savanna",
    caption: "Ngorongoro, Tanzania",
    aspect: "4/3" as const,
  },
];

export function ImageCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Prevent body scroll bleed from grab-drag
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const prevent = (e: TouchEvent) => e.stopPropagation();
    el.addEventListener("touchstart", prevent, { passive: true });
    return () => el.removeEventListener("touchstart", prevent);
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;
    setIsDragging(false);
    const startX = e.pageX;
    const scrollLeft = el.scrollLeft;
    let moved = false;

    const onMove = (ev: MouseEvent) => {
      const dx = ev.pageX - startX;
      if (Math.abs(dx) > 4) moved = true;
      el.scrollLeft = scrollLeft - dx;
      if (moved) setIsDragging(true);
    };
    const onUp = () => {
      setIsDragging(false);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
    e.preventDefault();
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[#2C2A28] py-16 lg:py-20"
      style={{ overflow: "hidden" }}
    >
      {/* Header */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 mb-10 flex items-end justify-between">
        <div>
          <p
            className="text-[#C66A23] tracking-[0.32em] uppercase mb-3"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 600 }}
          >
            Gallery
          </p>
          <h2
            className="text-white leading-[1.1]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(24px, 2.5vw, 38px)",
              fontWeight: 700,
            }}
          >
            Moments from the Field
          </h2>
        </div>
        <p
          className="hidden md:block text-white/25 tracking-[0.18em] uppercase"
          style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 500 }}
        >
          Drag to explore →
        </p>
      </div>

      {/* Scrollable track — NO padding-right so it bleeds edge-to-edge on the right */}
      <div
        ref={trackRef}
        className="flex gap-2.5 overflow-x-auto pl-6 sm:pl-10 lg:pl-20"
        style={{
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
          cursor: isDragging ? "grabbing" : "grab",
          userSelect: "none",
          /* pad right so last card doesn't clip but track still looks edge-to-edge */
          paddingRight: "clamp(24px, 5vw, 80px)",
        }}
        onMouseDown={handleMouseDown}
      >
        {carouselImages.map((img) => (
          <div
            key={img.id}
            className="flex-shrink-0 group relative overflow-hidden bg-[#3a3734]"
            style={{
              width: img.aspect === "4/5"
                ? "clamp(210px, 22vw, 320px)"
                : "clamp(280px, 32vw, 460px)",
              aspectRatio: img.aspect,
              /* mobile: square crop */
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
              draggable={false}
              /* Mobile: enforce 1:1 aspect with object-position center */
              style={{ objectPosition: "center center" }}
            />
            {/* Caption overlay */}
            <div
              className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
              style={{ background: "linear-gradient(to top, rgba(44,42,40,0.80) 0%, transparent 100%)" }}
            >
              <p
                className="text-white/80 tracking-[0.18em] uppercase"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 500 }}
              >
                {img.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .flex::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
