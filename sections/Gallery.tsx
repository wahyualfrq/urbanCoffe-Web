import Image from 'next/image';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
    alt: "Interior Cafe"
  },
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    alt: "Barista Coffee Craft"
  },
  {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    alt: "Coffee Cup"
  },
  {
    src: "https://images.unsplash.com/photo-1443884590026-2e4d21aee71c",
    alt: "People working"
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de",
    alt: "Friends hanging out"
  },
  {
    src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf",
    alt: "Cozy Corner"
  }
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <Reveal animation="fade-in">
          <div className="inline-block px-4 py-1 mb-4 bg-coffee-accent/10 rounded-full text-coffee-accent text-xs font-bold uppercase tracking-widest">
            Visual Experience
          </div>
          <SectionHeading 
            title="Suasana Urban Coffee" 
            subtitle="Jelajahi setiap sudut kenyamanan yang kami ciptakan untuk Anda."
          />
        </Reveal>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4 h-[500px] md:h-[700px]">
          
          {/* Main Large Image */}
          <Reveal animation="scale-in" className="col-span-2 row-span-2">
            <div className="relative h-full w-full rounded-[32px] overflow-hidden group shadow-premium-lg">
              <Image 
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb" 
                alt="Urban Coffee Lounge" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </Reveal>

          {/* Vertical Image */}
          <Reveal animation="scale-in" delay={200} className="col-span-1 row-span-2">
            <div className="relative h-full w-full rounded-[32px] overflow-hidden group shadow-premium-lg">
              <Image 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085" 
                alt="Barista Craft" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </Reveal>

          {/* Two Small Images */}
          <Reveal animation="scale-in" delay={400} className="col-span-1 row-span-1">
            <div className="relative h-full w-full rounded-[32px] overflow-hidden group shadow-premium-lg">
              <Image 
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93" 
                alt="Coffee Detail" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </Reveal>

          <Reveal animation="scale-in" delay={600} className="col-span-1 row-span-1">
            <div className="relative h-full w-full rounded-[32px] overflow-hidden group shadow-premium-lg">
              <Image 
                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf" 
                alt="Cozy Corner" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};
