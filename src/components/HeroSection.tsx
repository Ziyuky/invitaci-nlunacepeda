import { useEffect, useRef, useState, useCallback } from "react";
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

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const totalHeight = Math.max(container.offsetHeight - window.innerHeight, 1);
    const progress = clamp(-rect.top / totalHeight);
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [handleScroll]);

  const introOpacity = clamp(1 - scrollProgress * 2.2, 0, 1);
  const introTranslate = scrollProgress * -28;

  const titleOpacity = clamp((scrollProgress - 0.18) / 0.2, 0, 1);
  const titleTranslate = 24 - titleOpacity * 24;
  const titleScale = 0.94 + titleOpacity * 0.06;

  const bgTranslate = scrollProgress * -10;
  const bgScale = 1 + scrollProgress * 0.05;

  const nameOpacity = clamp(0.72 + scrollProgress * 0.5, 0.72, 1);

  return (
    <section ref={containerRef} className="relative h-[220svh] sm:h-[240svh]">
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        <img
          src={heroBg}
          alt="Luna mirando la luna en una noche estrellada"
          className="absolute inset-0 h-full w-full object-cover will-change-transform"
          width={1080}
          height={1920}
          style={{ transform: `translateY(${bgTranslate}px) scale(${bgScale})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-background/35 via-transparent to-background" />

        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-starlight animate-twinkle"
            style={{
              width: `${star.width}px`,
              height: `${star.height}px`,
              top: `${star.top}%`,
              left: `${star.left}%`,
              animationDelay: `${star.animationDelay}s`,
              animationDuration: `${star.animationDuration}s`,
            }}
          />
        ))}

        <div
          className="absolute inset-x-0 top-[7%] z-10 px-5 text-center sm:top-[8%]"
          style={{
            opacity: introOpacity,
            transform: `translateY(${introTranslate}px)`,
            willChange: "transform, opacity",
          }}
        >
          <p className="mx-auto max-w-[92vw] text-xs font-light uppercase leading-relaxed tracking-[0.22em] text-gold-light sm:max-w-2xl sm:text-sm md:text-base">
            Con la bendición de Dios y la compañía de mis padres, tengo el honor de invitarte a celebrar
          </p>
        </div>

        <div
          className="absolute inset-x-0 top-[18%] z-10 px-5 text-center sm:top-[21%]"
          style={{
            opacity: titleOpacity,
            transform: `translateY(${titleTranslate}px) scale(${titleScale})`,
            willChange: "transform, opacity",
          }}
        >
          <h2 className="font-serif-elegant text-3xl font-semibold tracking-[0.18em] text-primary sm:text-4xl md:text-5xl">
            MIS XV AÑOS
          </h2>
        </div>

        <div
          className="absolute inset-x-0 bottom-[10%] z-10 px-6 text-center sm:bottom-[12%]"
          style={{ opacity: nameOpacity }}
        >
          <div className="mb-4 flex justify-center">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
          <h1 className="font-script glow-gold mb-6 px-4 py-4 text-5xl text-gold-gradient sm:text-6xl md:text-8xl" style={{ lineHeight: "1.4" }}>
            Luna Cepeda
          </h1>
          <p className="text-lg tracking-widest text-foreground/80">18 de julio de 2026 · 7:00 PM</p>
        </div>

        <div
          className="absolute inset-x-0 bottom-4 z-10 flex flex-col items-center"
          style={{ opacity: clamp(1 - scrollProgress * 4, 0, 1) }}
        >
          <p className="mb-2 text-xs uppercase tracking-widest text-foreground/50">Desliza</p>
          <div className="flex h-8 w-5 items-start justify-center rounded-full border border-foreground/30 p-1">
            <div className="h-2 w-1 animate-bounce rounded-full bg-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
