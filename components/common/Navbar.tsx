"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

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

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [isMobileMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      scrolled || isMobileMenuOpen 
        ? 'bg-white/80 backdrop-blur-xl shadow-premium-sm py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link 
          href="/" 
          className={`text-xl md:text-2xl font-bold font-poppins tracking-[0.2em] group relative z-[101] transition-colors ${
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
                scrolled || isMobileMenuOpen ? 'text-dark-brown' : 'text-cream'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-coffee-accent transition-all duration-300 group-hover:w-full`} />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <button 
          className="lg:hidden relative z-[101] w-10 h-10 flex flex-col justify-center items-center space-y-1.5 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2 bg-dark-brown' : (scrolled ? 'bg-dark-brown' : 'bg-white')}`} />
          <span className={`w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 bg-dark-brown' : (scrolled ? 'bg-dark-brown' : 'bg-white')}`} />
          <span className={`w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2 bg-dark-brown' : (scrolled ? 'bg-dark-brown' : 'bg-white')}`} />
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center space-y-8 transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full'
        }`}>
          {navLinks.map((link, index) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`text-3xl font-bold text-dark-brown hover:text-coffee-accent transition-all transform active:scale-95 ${
                isMobileMenuOpen ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ 
                animationDelay: isMobileMenuOpen ? `${index * 100}ms` : '0ms',
                animationFillMode: 'forwards'
              }}
              onClick={handleLinkClick}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-8 border-t border-gray-100 w-2/3 flex justify-center space-x-6">
             <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-dark-brown">IG</div>
             <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-dark-brown">WA</div>
          </div>
        </div>
      </div>
    </nav>
  );
};
