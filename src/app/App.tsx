import { useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { IntroFeatures } from "./components/IntroFeatures";
import { HighlightsGrid } from "./components/HighlightsGrid";
import { QuoteSection } from "./components/QuoteSection";
import { ProcessSection } from "./components/ProcessSection";
import { ImageCarousel } from "./components/ImageCarousel";
import { ContentBlock } from "./components/ContentBlock";
import { TeamBlock } from "./components/TeamBlock";
import { Footer } from "./components/Footer";

/* MARKER-MAKE-KIT-INVOKED */

export default function App() {
  // Prevent body-level horizontal scroll leak
  useEffect(() => {
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
    return () => {
      document.documentElement.style.overflowX = "";
      document.body.style.overflowX = "";
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-white"
      style={{
        overflowX: "hidden",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <Navigation />
      <Hero />
      <IntroFeatures />
      <HighlightsGrid />
      <QuoteSection />
      <ProcessSection />
      <ImageCarousel />
      <ContentBlock />
      <TeamBlock />
      <Footer />
    </div>
  );
}
