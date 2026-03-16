import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-white py-10 md:py-12 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-4 ml-0">
          
          {/* Brand & Description */}
          <div className="text-center md:text-left max-w-xs">
            <Link href="/" className="text-xl font-bold text-dark-brown font-poppins">
              Urban <span className="text-coffee-accent">Coffee</span>
            </Link>
            <p className="text-gray-500 mt-2 text-xs leading-relaxed">
              Menghadirkan kehangatan dalam setiap cangkir kopi pilihan.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
            <Link href="#home" className="text-dark-brown hover:text-coffee-accent transition">Home</Link>
            <Link href="#menu" className="text-dark-brown hover:text-coffee-accent transition">Menu</Link>
            <Link href="#gallery" className="text-dark-brown hover:text-coffee-accent transition">Gallery</Link>
            <Link href="#location" className="text-dark-brown hover:text-coffee-accent transition">Location</Link>
          </div>

          {/* Social icons */}
          <div className="flex space-x-4">
            <a href="#" className="w-8 h-8 rounded-full bg-dark-brown text-cream flex items-center justify-center hover:bg-coffee-accent transition-all shadow-sm">
              <span className="sr-only">Instagram</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 1.802a3.333 3.333 0 110 6.666 3.333 3.333 0 010-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-dark-brown text-cream flex items-center justify-center hover:bg-[#25D366] transition-all shadow-sm">
                <span className="sr-only">WhatsApp</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.171.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.747-2.874-2.512-2.96-2.626-.087-.115-.708-.941-.708-1.793 0-.852.449-1.267.608-1.441.159-.175.348-.219.463-.219.116 0 .232.001.334.005.109.004.256-.041.401.31.159.385.546 1.332.593 1.432.047.099.078.215.011.349-.066.134-.1.218-.198.334-.098.116-.207.259-.296.347-.1.098-.204.205-.088.404.117.198.52 0 .858.736.338.336.634.615.972.827.337.21.63.303.854.117.225-.187.319-.247.46-.339.141-.093.284-.078.414-.031.13.047.824.388.966.459.142.069.237.104.272.164.035.06.035.348-.109.753z"/>
                </svg>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-6 text-center text-gray-400 text-[10px]">
          <p>© {new Date().getFullYear()} Urban Coffee. Alamat: Jl. Kopi Nikmat No. 10, Jakarta.</p>
        </div>
      </div>
    </footer>
  );
};
