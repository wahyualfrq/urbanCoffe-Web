import { Button } from "../components/ui/Button";
import { Reveal } from "../components/ui/Reveal";

export const CTA = () => {
  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden border-t border-gray-100">
      {/* Decorative Graphics */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-coffee-accent/5 rounded-full -mr-32 -mt-32 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-coffee-accent/5 rounded-full -ml-32 -mb-32 blur-3xl animate-pulse-slow" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <Reveal animation="scale-in">
          <div className="max-w-4xl mx-auto space-y-8 md:space-y-10">
            <div className="inline-block px-4 py-1.5 bg-coffee-accent/10 rounded-full text-coffee-accent text-xs font-bold uppercase tracking-[0.2em]">
              Reservasi Sekarang
            </div>
            <h2 className="text-4xl md:text-7xl font-bold text-dark-brown font-poppins leading-[1.1] tracking-tight">
              Ingin Menikmati <br /> <span className="text-coffee-accent">Kopi Terbaik</span> Hari Ini?
            </h2>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Kami menunggu kehadiran Anda. Hubungi kami melalui WhatsApp untuk reservasi meja atau pemesanan menu favorit secara instan.
            </p>
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-5">
              <Button 
                href="https://wa.me/6281234567890" 
                variant="whatsapp"
                className="w-full sm:w-auto text-xl px-12 py-6 shadow-premium-lg"
              >
                Booking via WhatsApp
              </Button>
              <div className="flex items-center gap-3 text-sm font-medium text-gray-400">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Respon cepat dalam ± 5 Menit
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
