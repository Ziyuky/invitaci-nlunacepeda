import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2026-07-18T00:00:00");

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = TARGET_DATE.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { value: timeLeft.days, label: "Días" },
    { value: timeLeft.hours, label: "Horas" },
    { value: timeLeft.minutes, label: "Minutos" },
    { value: timeLeft.seconds, label: "Segundos" },
  ];

  return (
    <section className="py-16 bg-secondary/50">
      <p className="text-center text-primary font-serif-elegant text-2xl mb-8 tracking-wider">Faltan</p>
      <div className="flex justify-center gap-4 md:gap-8 px-4">
        {units.map((u) => (
          <div key={u.label} className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-lg border border-border flex items-center justify-center bg-card animate-pulse-glow">
              <span className="text-2xl md:text-4xl font-serif-elegant text-primary font-bold">
                {String(u.value).padStart(2, "0")}
              </span>
            </div>
            <span className="text-muted-foreground text-xs md:text-sm mt-2 tracking-widest uppercase">
              {u.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CountdownSection;
