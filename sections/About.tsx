import Image from 'next/image';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';

export const About = () => {
  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-coffee-accent/5 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Side - Overlapping Effect */}
          <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
            <Reveal animation="fade-in-left">
              <div className="relative group">
                <div className="relative h-[450px] sm:h-[600px] w-full rounded-[40px] overflow-hidden shadow-premium-lg z-10 transition-transform duration-700 group-hover:scale-[1.02]">
                  <Image 
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24" 
                    alt="Urban Coffee Premium Ambience" 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Decorative Frame */}
                <div className="absolute -top-6 -left-6 bottom-6 right-6 border-2 border-coffee-accent/20 rounded-[40px] z-0 hidden sm:block" />
              </div>
            </Reveal>

            {/* Experience Floating Badge - Optimized for Mobile */}
            <Reveal animation="scale-in" delay={400} className="absolute -bottom-6 -right-2 sm:-bottom-12 sm:right-0 z-20">
              <div className="bg-dark-brown text-white p-6 sm:p-10 rounded-[24px] sm:rounded-[32px] shadow-premium-lg animate-float-slow">
                <p className="text-3xl sm:text-6xl font-bold font-poppins text-coffee-accent">05+</p>
                <p className="text-[10px] sm:text-sm uppercase tracking-widest font-bold opacity-70">Years of <br /> Excellence</p>
              </div>
            </Reveal>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <Reveal animation="fade-in-right">
              <div className="inline-block px-4 py-1 mb-4 bg-coffee-accent/10 rounded-full text-coffee-accent text-xs font-bold uppercase tracking-widest">
                Our Story
              </div>
              <SectionHeading 
                title="Seni Menyeduh Kopi & Kenyamanan" 
                centered={false}
                className="mb-8 flex flex-col items-center lg:items-start"
              />
            </Reveal>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <Reveal animation="fade-in-right" delay={200}>
                <p>
                  Urban Coffee adalah <strong className="text-dark-brown">destinasi utama</strong> bagi mereka yang menghargai kualitas. Kami mengkurasi biji kopi pilihan terbaik untuk menghadirkan <strong className="text-dark-brown text-coffee-accent">pengalaman sensorik</strong> yang tak terlupakan di setiap cangkir.
                </p>
              </Reveal>
              <Reveal animation="fade-in-right" delay={400}>
                <p>
                  Lebih dari sekadar cafe, kami menciptakan ruang yang <strong className="text-dark-brown">menginspirasi produktivitas</strong>. Dengan desain minimalis modern dan suasana yang tenang, Urban Coffee adalah rumah kedua bagi para profesional, kreatif, dan pecinta kopi di Jakarta.
                </p>
              </Reveal>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
                <Reveal animation="scale-in" delay={600}>
                  <div className="group p-6 rounded-3xl border border-gray-100 bg-white hover:border-coffee-accent/30 transition-all duration-300 shadow-premium-sm hover:shadow-premium-lg">
                    <div className="w-12 h-12 bg-coffee-accent/10 rounded-2xl flex items-center justify-center text-coffee-accent mb-4 group-hover:scale-110 transition-transform">
                      ⭐
                    </div>
                    <h4 className="font-bold text-dark-brown text-xl mb-2">Premium Quality</h4>
                    <p className="text-sm text-gray-500">Biji kopi pilihan terbaik dari seluruh penjuru nusantara.</p>
                  </div>
                </Reveal>
                <Reveal animation="scale-in" delay={800}>
                  <div className="group p-6 rounded-3xl border border-gray-100 bg-white hover:border-coffee-accent/30 transition-all duration-300 shadow-premium-sm hover:shadow-premium-lg">
                    <div className="w-12 h-12 bg-coffee-accent/10 rounded-2xl flex items-center justify-center text-coffee-accent mb-4 group-hover:scale-110 transition-transform">
                      ✨
                    </div>
                    <h4 className="font-bold text-dark-brown text-xl mb-2">Modern Vibe</h4>
                    <p className="text-sm text-gray-500">Suasana modern yang tenang untuk fokus maksimal.</p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
