import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const stars = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  width: Math.random() * 3 + 1,
  height: Math.random() * 3 + 1,
  top: Math.random() * 60,
  left: Math.random() * 100,
  animationDelay: Math.random() * 3,
  animationDuration: Math.random() * 2 + 2,
}));

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const totalHeight = container.offsetHeight - window.innerHeight;
    if (totalHeight <= 0) return;
    const progress = Math.max(0, Math.min(1, -rect.top / totalHeight));
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    // Listen on multiple possible scroll targets
    const targets = [window, document, document.documentElement];
    targets.forEach((t) => t.addEventListener("scroll", handleScroll, { passive: true }));
    handleScroll();
    return () => {
      targets.forEach((t) => t.removeEventListener("scroll", handleScroll));
    };
  }, [handleScroll]);

  // Phases with smoother transitions
  const introOpacity = scrollProgress < 0.05 ? 0
    : scrollProgress < 0.2 ? (scrollProgress - 0.05) / 0.15
    : scrollProgress < 0.45 ? 1
    : scrollProgress < 0.6 ? 1 - (scrollProgress - 0.45) / 0.15
    : 0;

  const titleOpacity = scrollProgress < 0.12 ? 0
    : scrollProgress < 0.28 ? (scrollProgress - 0.12) / 0.16
    : scrollProgress < 0.5 ? 1
    : scrollProgress < 0.65 ? 1 - (scrollProgress - 0.5) / 0.15
    : 0;

  const nameOpacity = scrollProgress < 0.5 ? 0
    : scrollProgress < 0.7 ? (scrollProgress - 0.5) / 0.2
    : 1;

  const bgScale = 1 + scrollProgress * 0.08;

  return (
    <div ref={containerRef} className="relative" style={{ height: "300svh" }}>
      {/* Sticky container */}
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        {/* Background */}
        <img
          src={heroBg}
          alt="Luna mirando la luna en una noche estrellada"
          className="absolute inset-0 w-full h-full object-cover will-change-transform origin-center"
          width={1080}
          height={1920}
          style={{ transform: `scale(${bgScale})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />

        {/* Stars */}
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-starlight animate-twinkle"
            style={{
              width: star.width + "px",
              height: star.height + "px",
              top: star.top + "%",
              left: star.left + "%",
              animationDelay: star.animationDelay + "s",
              animationDuration: star.animationDuration + "s",
            }}
          />
        ))}

        {/* Intro text */}
        <div
          className="absolute inset-x-0 top-[8%] z-10 text-center px-4"
          style={{
            opacity: introOpacity,
            transform: `translateY(${(1 - introOpacity) * 25}px)`,
            willChange: "opacity, transform",
          }}
        >
          <p className="text-gold-light text-xs sm:text-sm tracking-[0.2em] uppercase font-light leading-relaxed max-w-[90vw] mx-auto">
            Con la bendición de Dios y la compañía de mis padres, tengo el honor de invitarte a celebrar
          </p>
        </div>

        {/* MIS XV AÑOS */}
        <div
          className="absolute inset-x-0 top-[18%] z-10 text-center px-4"
          style={{
            opacity: titleOpacity,
            transform: `translateY(${(1 - titleOpacity) * 25}px)`,
            willChange: "opacity, transform",
          }}
        >
          <h2 className="font-serif-elegant text-primary text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wider">
            MIS XV AÑOS
          </h2>
        </div>

        {/* Name and date */}
        <div
          className="absolute inset-x-0 bottom-[10%] z-10 text-center px-6"
          style={{
            opacity: nameOpacity,
            transform: `translateY(${(1 - nameOpacity) * 30}px)`,
            willChange: "opacity, transform",
          }}
        >
          <div className="flex justify-center mb-4">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
          <h1
            className="font-script text-gold-gradient text-5xl sm:text-6xl md:text-8xl glow-gold mb-6 px-4 py-4"
            style={{ lineHeight: "1.4" }}
          >
            Luna Cepeda
          </h1>
          <p className="text-foreground/80 text-lg tracking-widest">
            18 de julio de 2026 · 7:00 PM
          </p>
        </div>

        {/* Scroll indicator - visible at start */}
        <div
          className="absolute bottom-4 inset-x-0 z-10 flex flex-col items-center"
          style={{ opacity: Math.max(0, 1 - scrollProgress * 5) }}
        >
          <p className="text-foreground/50 text-xs tracking-widest uppercase mb-2">Desliza</p>
          <div className="w-5 h-8 border border-foreground/30 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
