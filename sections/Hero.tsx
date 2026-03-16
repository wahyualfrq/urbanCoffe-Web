import { Button } from "../components/ui/Button";
import Image from "next/image";
import { Reveal } from "../components/ui/Reveal";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Cinematic Zoom */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
          alt="Urban Coffee Cinematic Atmosphere"
          fill
          className="object-cover scale-110 animate-subtle-zoom"
          priority
          sizes="100vw"
        />
        {/* Advanced Multi-layer Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent hidden md:block" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Main Content Area */}
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <Reveal animation="fade-in">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white text-xs sm:text-sm font-bold tracking-[0.2em] uppercase animate-floating shadow-glass">
                <span className="w-2 h-2 bg-coffee-accent rounded-full animate-pulse" />
                Premium Coffee Experience
              </div>
            </Reveal>

            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-8 font-poppins text-white leading-[0.9] tracking-tight drop-shadow-2xl">
              Urban <br /> 
              <span className="text-coffee-accent drop-shadow-none">Coffee Cafe</span>
            </h1>

            <Reveal animation="fade-in-up" delay={200}>
              <p className="text-xl sm:text-2xl font-medium mb-10 text-white/90 font-poppins leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Tempat ngopi nyaman untuk <span className="text-coffee-accent font-bold">kerja</span>, <span className="text-coffee-accent font-bold">meeting</span>, dan bersantai.
              </p>
            </Reveal>

            <Reveal animation="fade-in-up" delay={400}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
                <Button 
                    href="https://wa.me/6281234567890" 
                    variant="whatsapp"
                    className="w-full sm:w-auto text-lg px-12 py-5 shadow-premium-lg"
                >
                  Order via WhatsApp
                </Button>
                <Button 
                    href="#menu" 
                    variant="outline"
                    className="w-full sm:w-auto text-lg px-12 py-5 border-white/40 text-white hover:bg-white hover:text-dark-brown backdrop-blur-md"
                >
                  Lihat Menu
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Luxury Floating Card - Glassmorphism */}
          <div className="hidden lg:block w-full lg:w-1/3">
            <Reveal animation="scale-in" delay={800} className="relative group">
              <div className="bg-white/5 backdrop-blur-2xl p-8 rounded-[40px] border border-white/10 shadow-glass animate-float-slow transform group-hover:rotate-1 transition-transform duration-1000">
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-coffee-accent rounded-full flex items-center justify-center text-white font-bold text-xl">☕</div>
                    <div>
                      <h4 className="text-white font-bold text-xl">Speciality Beans</h4>
                      <p className="text-gray-400 text-sm">Roasted with love</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/5 text-center">
                      <p className="text-coffee-accent text-3xl font-bold">100%</p>
                      <p className="text-white/60 text-xs mt-1 uppercase tracking-tighter">Arabica</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/5 text-center">
                      <p className="text-coffee-accent text-3xl font-bold">4.9/5</p>
                      <p className="text-white/60 text-xs mt-1 uppercase tracking-tighter">Rating</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-white text-sm font-medium italic opacity-60">"The best coffee shop for deep work in the city."</p>
                  </div>
                </div>
              </div>
              {/* Decorative Glow */}
              <div className="absolute -inset-4 bg-coffee-accent/20 blur-[100px] rounded-full z-[-1] animate-pulse-slow" />
            </Reveal>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Refined */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce-gentle opacity-40 hidden md:flex">
         <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-coffee-accent rounded-full animate-bounce" />
         </div>
      </div>
    </section>
  );
};
