import { useEffect, useRef, useState, useMemo } from "react";
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

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScroll = containerRef.current.offsetHeight - window.innerHeight;
      if (totalScroll <= 0) return;
      const scrolled = -rect.top;
      setScrollProgress(Math.max(0, Math.min(1, scrolled / totalScroll)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Phase 0-0.3: intro text fades in
  // Phase 0.2-0.5: "MIS XV AÑOS" fades in
  // Phase 0.4-0.7: intro fades out, name starts appearing
  // Phase 0.6-1.0: name and date fully visible

  const introOpacity = useMemo(() => {
    if (scrollProgress < 0.05) return 0;
    if (scrollProgress < 0.25) return (scrollProgress - 0.05) / 0.2;
    if (scrollProgress < 0.5) return 1;
    if (scrollProgress < 0.65) return 1 - (scrollProgress - 0.5) / 0.15;
    return 0;
  }, [scrollProgress]);

  const titleOpacity = useMemo(() => {
    if (scrollProgress < 0.15) return 0;
    if (scrollProgress < 0.35) return (scrollProgress - 0.15) / 0.2;
    if (scrollProgress < 0.55) return 1;
    if (scrollProgress < 0.7) return 1 - (scrollProgress - 0.55) / 0.15;
    return 0;
  }, [scrollProgress]);

  const nameOpacity = useMemo(() => {
    if (scrollProgress < 0.55) return 0;
    if (scrollProgress < 0.75) return (scrollProgress - 0.55) / 0.2;
    return 1;
  }, [scrollProgress]);

  // Background parallax - subtle upward shift
  const bgTranslateY = useMemo(() => {
    return scrollProgress * -15;
  }, [scrollProgress]);

  return (
    <div ref={containerRef} className="relative" style={{ height: "300vh" }}>
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background image with parallax */}
        <img
          src={heroBg}
          alt="Luna mirando la luna en una noche estrellada"
          className="absolute inset-0 w-full h-full object-cover will-change-transform"
          width={1080}
          height={1920}
          style={{ transform: `translateY(${bgTranslateY}%)` }}
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

        {/* Intro text - fades in first */}
        <div
          className="absolute inset-x-0 top-[8%] sm:top-[10%] z-10 text-center px-4 transition-none"
          style={{
            opacity: introOpacity,
            transform: `translateY(${(1 - introOpacity) * 20}px)`,
          }}
        >
          <p className="text-gold-light text-xs sm:text-sm md:text-base tracking-[0.2em] uppercase font-light leading-relaxed max-w-[95vw] sm:max-w-xl md:max-w-2xl mx-auto">
            Con la bendición de Dios y la compañía de mis padres, tengo el honor de invitarte a celebrar
          </p>
        </div>

        {/* MIS XV AÑOS - fades in second */}
        <div
          className="absolute inset-x-0 top-[18%] sm:top-[20%] z-10 text-center px-4 transition-none"
          style={{
            opacity: titleOpacity,
            transform: `translateY(${(1 - titleOpacity) * 20}px) scale(${0.9 + titleOpacity * 0.1})`,
          }}
        >
          <h2 className="font-serif-elegant text-primary text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wider">
            MIS XV AÑOS
          </h2>
        </div>

        {/* Name and date - fades in last, stays */}
        <div
          className="absolute inset-x-0 bottom-[10%] sm:bottom-[12%] z-10 text-center px-6 transition-none"
          style={{
            opacity: nameOpacity,
            transform: `translateY(${(1 - nameOpacity) * 30}px)`,
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
      </div>
    </div>
  );
};

export default HeroSection;
