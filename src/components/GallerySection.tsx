import lunaPhoto1 from "@/assets/luna-photo-1.png";
import lunaPhoto2 from "@/assets/luna-photo-2.png";
import lunaPhoto3 from "@/assets/luna-photo-3.png";
import lunaPhoto4 from "@/assets/luna-photo-4.png";
import lunaPhoto5 from "@/assets/luna-photo-5.png";
import lunaPhoto6 from "@/assets/luna-photo-6.png";
import lunaPhoto7 from "@/assets/luna-photo-7.png";
import lunaPhoto8 from "@/assets/luna-photo-8.png";
import lunaPhoto9 from "@/assets/luna-photo-9.png";
import lunaPhoto10 from "@/assets/luna-photo-10.png";
import lunaPhoto11 from "@/assets/luna-photo-11.png";
import lunaPhoto12 from "@/assets/luna-photo-12.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const GallerySection = () => {
  const photos = [
    lunaPhoto1, lunaPhoto2, lunaPhoto3, lunaPhoto4,
    lunaPhoto5, lunaPhoto6, lunaPhoto7, lunaPhoto8,
    lunaPhoto9, lunaPhoto10, lunaPhoto11, lunaPhoto12,
  ];

  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif-elegant text-primary text-3xl md:text-4xl mb-2">Galería</h2>
        <div className="flex justify-center my-4">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>

        <div className="mt-10 px-12">
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {photos.map((photo, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                  <div className="relative overflow-hidden rounded-lg border border-border group">
                    <img
                      src={photo}
                      alt={`Lunita foto ${i + 1}`}
                      className="w-full h-80 object-cover object-top transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
