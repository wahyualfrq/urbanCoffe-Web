import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';

export const Location = () => {
  return (
    <section id="location" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <Reveal animation="fade-in">
          <SectionHeading 
            title="Lokasi Urban Coffee" 
            subtitle="Cari tempat ngopi di Senopati? Kunjungi Urban Coffee, pilihan coffee shop aesthetic di Jakarta Selatan."
          />
        </Reveal>
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-stretch">
          <Reveal animation="fade-in-left" className="w-full lg:w-1/3">
            <div className="h-full space-y-6 md:space-y-8 bg-white p-6 md:p-10 rounded-3xl shadow-lg border border-gray-100">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-dark-brown mb-3 md:mb-4 font-poppins">Alamat</h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                  Jl. Kopi Nikmat No. 10, Senopati, Kebayoran Baru, Jakarta Selatan, 12190
                </p>
                <p className="text-sm text-gray-500 italic leading-relaxed">
                  Urban Coffee adalah <span className="text-coffee-accent font-semibold">coffee shop Senopati</span> yang strategis, menjadikannya <span className="text-coffee-accent font-semibold">cafe Jakarta Selatan</span> favorit. Lokasi kami sangat dekat dengan area SCBD, ideal untuk tempat ngopi santai maupun urusan bisnis.
                </p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-dark-brown mb-3 md:mb-4 font-poppins">Jam Operasional</h3>
                <div className="space-y-3 text-gray-600 text-sm md:text-base">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span>Senin - Jumat</span>
                    <span className="font-semibold text-dark-brown">08:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between items-center bg-gray-50 p-2 rounded-lg">
                    <span>Sabtu - Minggu</span>
                    <span className="font-semibold text-dark-brown">07:00 - 23:00</span>
                  </div>
                </div>
              </div>
              <div className="pt-2">
                <Button 
                  href="https://maps.google.com" 
                  variant="outline" 
                  className="w-full py-4 text-base"
                >
                  Buka di Google Maps
                </Button>
              </div>
            </div>
          </Reveal>
          
          <Reveal animation="fade-in-right" className="w-full lg:w-2/3">
            <div className="h-[350px] md:h-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100 relative min-h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15865.176462716492!2d106.812328!3d-6.23072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e49e0a299d%3A0x76878a892b9560!2sSenopati%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Urban Coffee Location"
              ></iframe>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
