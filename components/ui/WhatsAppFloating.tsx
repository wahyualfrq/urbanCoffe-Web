"use client";

import Link from 'next/link';

export const WhatsAppFloating = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[99] flex items-center group animate-float-slow">
      {/* Dynamic Label - Focused on Conversion/Ordering */}
      <div className="bg-white px-4 py-2.5 rounded-2xl shadow-premium-lg mr-3 border border-gray-100 hidden sm:block transform transition-all duration-500 group-hover:scale-105 origin-right">
        <p className="text-dark-brown text-xs font-bold tracking-tight">
          Pesan kopi sekarang? <span className="text-coffee-accent font-extrabold">Order via WhatsApp</span>
        </p>
      </div>

      {/* Floating Button */}
      <Link 
        href="https://wa.me/6281234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-premium-lg hover:shadow-glass hover:-translate-y-2 transition-all duration-300 relative flex items-center justify-center active:scale-90"
        aria-label="Chat with us on WhatsApp"
      >
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        
        <div className="relative z-10">
          <svg 
            className="w-6 h-6 md:w-7 md:h-7" 
            fill="white" 
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.67-1.611-.917-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-4.821 4.754a8.117 8.117 0 01-3.77-.92l-.27-.16-2.799.734.747-2.729-.174-.277a8.11 8.11 0 01-1.241-4.393c0-4.493 3.654-8.147 8.147-8.147 4.492 0 8.148 3.654 8.148 8.147 0 4.494-3.656 8.147-8.148 8.147m0-17.398C8.256 1.693 4.197 5.751 4.197 10.74c0 1.594.414 3.15 1.203 4.517L4.1 22.307l7.218-1.893c1.32.72 2.808 1.1 4.322 1.1 4.987 0 9.046-4.059 9.046-9.047 0-4.988-4.059-9.047-9.046-9.047" />
          </svg>
        </div>
      </Link>
    </div>
  );
};
