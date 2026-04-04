import { Calendar, MapPin } from "lucide-react";

const EventSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif-elegant text-primary text-3xl md:text-4xl mb-2">La Fiesta</h2>
        <div className="flex justify-center my-4">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>

        <div className="mt-10 space-y-8">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center">
              <Calendar className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-foreground/60 text-xs tracking-[0.2em] uppercase mb-1">Fecha y hora</p>
              <p className="font-serif-elegant text-foreground text-xl">18 de julio de 2026</p>
              <p className="text-muted-foreground text-sm">7:00 PM</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-foreground/60 text-xs tracking-[0.2em] uppercase mb-1">Lugar</p>
              <p className="font-serif-elegant text-foreground text-xl">Finca La Esmeralda</p>
              <p className="text-muted-foreground text-sm">Guaduas, Cundinamarca</p>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/Finca+La+Esmeralda+Guaduas+Cundinamarca"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 border border-primary text-primary text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-colors duration-300 rounded"
          >
            ¿Cómo llegar?
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
