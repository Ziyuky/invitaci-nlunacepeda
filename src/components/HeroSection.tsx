import { useEffect, useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const stars = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  size: Math.random() * 3 + 1,
  top: Math.random() * 65,
  left: Math.random() * 100,
  delay: Math.random() * 4,
  duration: Math.random() * 2 + 2,
}));

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const sticky = section.querySelector<HTMLElement>("[data-sticky]")!;
    const bg = section.querySelector<HTMLElement>("[data-bg]")!;
    const intro = section.querySelector<HTMLElement>("[data-intro]")!;
    const title = section.querySelector<HTMLElement>("[data-title]")!;
    const name = section.querySelector<HTMLElement>("[data-name]")!;
    const scroll = section.querySelector<HTMLElement>("[data-scroll]")!;

    let raf = 0;
    const update = () => {
      const rect = section.getBoundingClientRect();
      const travel = section.offsetHeight - window.innerHeight;
      const raw = Math.max(0, Math.min(1, -rect.top / travel));

      // Background: subtle parallax shift + gentle zoom
      bg.style.transform = `translateY(${raw * -40}px) scale(${1 + raw * 0.08})`;

      // Overlay darkens as you scroll to ease transition to next section
      sticky.style.setProperty("--overlay-opacity", String(raw * 0.35));

      // Intro text: visible at start, fades out as you scroll
      const introFade = Math.max(0, 1 - raw * 3);
      intro.style.opacity = String(introFade);
      intro.style.transform = `translateY(${raw * -50}px)`;

      // "MIS XV AÑOS": fades in as intro fades out
      const titleIn = Math.max(0, Math.min(1, (raw - 0.12) / 0.18));
      title.style.opacity = String(titleIn);
      title.style.transform = `translateY(${(1 - titleIn) * 30}px) scale(${0.92 + titleIn * 0.08})`;

      // Name block: always visible, gets slightly brighter
      name.style.opacity = String(0.75 + raw * 0.25);

      // Scroll indicator: disappears quickly
      scroll.style.opacity = String(Math.max(0, 1 - raw * 5));

      raf = 0;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[200svh] sm:h-[220svh]">
      <div
        data-sticky
        className="hero-sticky sticky top-0 h-[100svh] w-full overflow-hidden"
      >
        {/* Background image */}
        <img
          data-bg
          src={heroBg}
          alt="Luna mirando la luna en una noche estrellada"
          className="absolute inset-0 h-full w-full object-cover will-change-transform hero-entrance-zoom"
          width={1080}
          height={1920}
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
        <div className="hero-scroll-overlay absolute inset-0 pointer-events-none" />

        {/* Entrance veil (fades out on load) */}
        <div className="hero-veil absolute inset-0 z-30 bg-background pointer-events-none" />

        {/* Stars */}
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-starlight animate-twinkle"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${star.top}%`,
              left: `${star.left}%`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}

        {/* Intro text */}
        <div
          data-intro
          className="absolute inset-x-0 top-[7%] z-10 px-5 text-center sm:top-[8%] will-change-transform hero-text-reveal"
          style={{ animationDelay: "0.8s" }}
        >
          <p className="mx-auto max-w-[88vw] text-[0.7rem] font-light uppercase leading-relaxed tracking-[0.22em] text-gold-light sm:max-w-2xl sm:text-sm md:text-base">
            Con la bendición de Dios y la compañía de mis padres, tengo el honor de invitarte a celebrar
          </p>
        </div>

        {/* "MIS XV AÑOS" */}
        <div
          data-title
          className="absolute inset-x-0 top-[17%] z-10 px-5 text-center sm:top-[20%] will-change-transform hero-text-reveal"
          style={{ opacity: 0, animationDelay: "1.2s" }}
        >
          <h2 className="font-serif-elegant text-3xl font-semibold tracking-[0.18em] text-primary sm:text-4xl md:text-5xl">
            MIS XV AÑOS
          </h2>
        </div>

        {/* Name + date */}
        <div
          data-name
          className="absolute inset-x-0 bottom-[10%] z-10 px-6 text-center sm:bottom-[12%] hero-text-reveal"
          style={{ animationDelay: "1.6s" }}
        >
          <div className="mb-4 flex justify-center">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent shimmer" />
          </div>
          <h1
            className="font-script glow-gold mb-6 px-4 py-4 text-5xl text-gold-gradient sm:text-6xl md:text-8xl"
            style={{ lineHeight: "1.4" }}
          >
            Luna Cepeda
          </h1>
          <p className="text-base tracking-widest text-foreground/80 sm:text-lg">
            18 de julio de 2026 · 7:00 PM
          </p>
        </div>

        {/* Scroll indicator */}
        <div
          data-scroll
          className="absolute inset-x-0 bottom-4 z-10 flex flex-col items-center hero-text-reveal"
          style={{ animationDelay: "2.2s" }}
        >
          <p className="mb-2 text-xs uppercase tracking-widest text-foreground/50">
            Desliza
          </p>
          <div className="flex h-8 w-5 items-start justify-center rounded-full border border-foreground/30 p-1">
            <div className="h-2 w-1 animate-bounce rounded-full bg-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
