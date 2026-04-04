import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-x-hidden">
      <img
        src={heroBg}
        alt="Luna mirando la luna en una noche estrellada"
        className="absolute inset-0 w-full h-full object-cover"
        width={1080}
        height={1920}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      
      {/* Stars */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-starlight animate-twinkle"
          style={{
            width: Math.random() * 3 + 1 + "px",
            height: Math.random() * 3 + 1 + "px",
            top: Math.random() * 60 + "%",
            left: Math.random() * 100 + "%",
            animationDelay: Math.random() * 3 + "s",
            animationDuration: Math.random() * 2 + 2 + "s",
          }}
        />
      ))}

      {/* Intro text - positioned between moon and girl's head */}
      <div className="relative z-10 text-center px-6 mt-[18%] sm:mt-[15%] md:mt-[12%]">
        <p className="text-gold-light text-xs sm:text-sm md:text-base tracking-[0.3em] uppercase mb-3 font-light leading-relaxed max-w-xs sm:max-w-sm md:max-w-md mx-auto">
          Con la compañía de mis padres tengo el honor de invitarte a celebrar
        </p>
        <h2 className="font-serif-elegant text-primary text-2xl sm:text-3xl md:text-5xl font-semibold tracking-wider">
          MIS XV AÑOS
        </h2>
      </div>

      {/* Name and date - positioned below center */}
      <div className="relative z-10 text-center px-6 mt-auto pb-[15%] sm:pb-[12%]">
        <div className="flex justify-center mb-4">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>
        <h1 className="font-script text-gold-gradient text-5xl sm:text-6xl md:text-8xl glow-gold mb-6 px-4 py-4" style={{ lineHeight: '1.4' }}>
          Luna Cepeda
        </h1>
        <p className="text-foreground/80 text-lg tracking-widest">
          18 de julio de 2026 · 7:00 PM
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
