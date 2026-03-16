"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Location', href: '#location' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      isMobileMenuOpen 
        ? 'bg-white py-4' // Fully opaque when menu open
        : scrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-premium-sm py-4' 
          : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between relative z-[102]">
        <Link 
          href="/" 
          className={`text-xl md:text-2xl font-bold font-poppins tracking-[0.2em] transition-colors ${
            scrolled || isMobileMenuOpen ? 'text-dark-brown' : 'text-white'
          }`}
          onClick={handleLinkClick}
        >
          URBAN<span className="font-light text-coffee-accent">COFFEE</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`relative font-medium transition-colors hover:text-coffee-accent group ${
                scrolled ? 'text-dark-brown' : 'text-cream'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-coffee-accent transition-all duration-300 group-hover:w-full`} />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <button 
          className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-center space-y-1.5 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? 'translate-y-2 rotate-45 bg-dark-brown' : (scrolled ? 'bg-dark-brown' : 'bg-white')}`} />
          <span className={`w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 bg-dark-brown' : (scrolled ? 'bg-dark-brown' : 'bg-white')}`} />
          <span className={`w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? '-translate-y-2 -rotate-45 bg-dark-brown' : (scrolled ? 'bg-dark-brown' : 'bg-white')}`} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="fixed inset-0 bg-white z-[101] flex flex-col items-center justify-center lg:hidden"
          >
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link 
                    href={link.href} 
                    className="text-4xl font-bold text-dark-brown hover:text-coffee-accent transition-colors tracking-tight"
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-16 pt-8 border-t border-gray-100 w-2/3 flex justify-center space-x-8"
            >
               <div className="flex flex-col items-center gap-2">
                 <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-dark-brown font-bold shadow-sm">IG</div>
                 <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Instagram</span>
               </div>
               <div className="flex flex-col items-center gap-2">
                 <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-dark-brown font-bold shadow-sm">WA</div>
                 <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">WhatsApp</span>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
