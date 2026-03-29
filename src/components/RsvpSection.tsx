import { useState } from "react";
import { CheckCircle } from "lucide-react";

const WHATSAPP_NUMBER = "573115609816";

const RsvpSection = () => {
  const [name, setName] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const getWhatsAppUrl = () => {
    const message = encodeURIComponent(
      `¡Hola! Soy ${name.trim()} y confirmo mi asistencia a los XV años de Lunita.`
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-md mx-auto text-center">
        <h2 className="font-serif-elegant text-primary text-3xl md:text-4xl mb-2">Confirmación</h2>
        <div className="flex justify-center my-4">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>
        <p className="text-foreground/70 text-sm mb-2 mt-6">
          Espero que puedas acompañarme.
        </p>
        <p className="text-primary text-sm font-medium mb-8">
          ¡Confirma tu asistencia antes del 15 de abril de 2026!
        </p>

        {confirmed ? (
          <div className="flex flex-col items-center gap-3 animate-float-up">
            <CheckCircle className="w-12 h-12 text-primary" />
            <p className="font-serif-elegant text-foreground text-xl">¡Gracias, {name}!</p>
            <p className="text-muted-foreground text-sm">Nos vemos en la fiesta 🎉</p>
          </div>
        ) : (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Tu nombre completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={100}
              className="w-full px-4 py-3 bg-input border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring text-center"
            />
            <a
              href={name.trim() ? getWhatsAppUrl() : undefined}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (name.trim()) setConfirmed(true);
              }}
              className={`block w-full py-3 shimmer text-primary-foreground font-semibold tracking-widest uppercase text-sm rounded text-center transition-opacity ${
                !name.trim() ? "opacity-40 pointer-events-none" : ""
              }`}
            >
              Confirmar Asistencia
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default RsvpSection;
