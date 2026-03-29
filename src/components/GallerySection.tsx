import lunaPhoto1 from "@/assets/luna-photo-1.png";
import lunaPhoto2 from "@/assets/luna-photo-2.png";

const GallerySection = () => {
  const photos = [lunaPhoto1, lunaPhoto2];

  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif-elegant text-primary text-3xl md:text-4xl mb-2">Galería</h2>
        <div className="flex justify-center my-4">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-lg border border-border group"
            >
              <img
                src={photo}
                alt={`Luna Cepeda foto ${i + 1}`}
                className="w-full h-80 object-cover object-top transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
