const FooterSection = () => {
  return (
    <section className="py-16 px-6 text-center bg-secondary/30">
      <p className="text-foreground/60 font-serif-elegant text-lg mb-4">
        Los momentos más bonitos de la vida se vuelven mágicos cuando los compartimos con quienes amamos.
      </p>
      <h3 className="font-script text-gold-gradient text-5xl glow-gold mb-2">Te esperamos</h3>
      <div className="flex justify-center my-6">
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>
      <p className="text-muted-foreground text-xs tracking-widest">Luna Cepeda — Mis XV Años</p>
    </section>
  );
};

export default FooterSection;
