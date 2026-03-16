"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

interface MenuCardProps {
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  badge?: "Best Seller" | "Popular" | "Chef Recommendation";
}

export const MenuCard = ({ name, category, price, image, description, badge }: MenuCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-premium-sm hover:shadow-premium-lg transition-all duration-500"
    >
      {/* Image Section - Cleaner & More Focused */}
      <div className="relative h-72 w-full overflow-hidden">
        <Image 
          src={image} 
          alt={`menu ${name.toLowerCase()} urban coffee cafe jakarta`} 
          fill 
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40" />
        
        {badge && (
          <div className="absolute top-6 left-6 z-20">
            <span className="bg-white/90 backdrop-blur-md text-dark-brown text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-xl flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-coffee-accent rounded-full animate-pulse" />
              {badge}
            </span>
          </div>
        )}

        {/* Minimalist Price Tag */}
        <div className="absolute bottom-6 right-6 z-20">
          <div className="bg-dark-brown px-4 py-2 rounded-2xl shadow-premium-sm border border-white/10">
            <span className="text-coffee-accent font-extrabold text-lg font-poppins">{price}</span>
          </div>
        </div>
      </div>
      
      {/* Content Section - Text Only for Premium Feel */}
      <div className="p-8 pb-10">
        <div className="mb-4">
          <span className="text-coffee-accent text-[10px] font-black uppercase tracking-[0.3em]">{category}</span>
          <h3 className="text-2xl font-bold text-dark-brown mt-1 group-hover:text-coffee-accent transition-colors duration-300">
            {name}
          </h3>
        </div>
        
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 italic">
          &quot;{description}&quot;
        </p>
      </div>
    </motion.div>
  );
};