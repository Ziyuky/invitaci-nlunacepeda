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
  return (
    <section className="parallax-group h-[100svh]">
      {/* ── Back layer: bg image + stars (scrolls slower) ── */}
      <div className="parallax-layer-back absolute inset-0">
        <img
          src={heroBg}
          alt="Luna mirando la luna en una noche estrellada"
          className="h-full w-full object-cover"
          width={1080}
          height={1920}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />

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
      </div>

      {/* ── Foreground layer: text content (scrolls at normal speed) ── */}
      <div className="parallax-layer-base relative z-10 h-full">
        {/* Intro — above the moon */}
        <div className="absolute inset-x-0 top-[3%] text-center px-5 hero-text-reveal" style={{ animationDelay: "0.6s" }}>
          <p className="mx-auto max-w-[88vw] text-[0.7rem] font-light uppercase leading-relaxed tracking-[0.22em] text-gold-light sm:max-w-2xl sm:text-sm md:text-base">
            Con la bendición de Dios y la compañía de mis padres, tengo el honor de invitarte a celebrar
          </p>
        </div>

        {/* Title — between the moon and the girl */}
        <div className="absolute inset-x-0 top-[42%] text-center px-5 hero-text-reveal" style={{ animationDelay: "1s" }}>
          <h2 className="font-serif-elegant text-3xl font-semibold tracking-[0.18em] text-primary sm:text-4xl md:text-5xl">
            MIS XV AÑOS
          </h2>
        </div>

        {/* Name + date — over the lower area */}
        <div className="absolute inset-x-0 bottom-[10%] text-center px-6 hero-text-reveal" style={{ animationDelay: "1.4s" }}>
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
        <div className="absolute inset-x-0 bottom-[2%] flex flex-col items-center hero-text-reveal" style={{ animationDelay: "2s" }}>
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
