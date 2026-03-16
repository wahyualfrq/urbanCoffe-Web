"use client";

import { SectionHeading } from '../components/ui/SectionHeading';
import { MenuCard } from '../components/menu/MenuCard';
import { motion } from 'framer-motion';

const menuItems = [
 {
  name: "Manual Brew V60",
  category: "Specialty Coffee",
  price: "Rp35.000",
  description: "Ekstraksi kopi manual dengan metode pouring untuk memunculkan notes aromatik yang kompleks.",
  image: "https://images.unsplash.com/photo-1686207855029-0caaa0f16014?q=80&w=1170&auto=format&fit=crop",
  badge: "Chef Recommendation" as const
},
  {
    name: "Caramel Macchiato",
    category: "Signature Coffee",
    price: "Rp42.000",
    description: "Perpaduan espresso premium dengan susu creamy dan saus karamel artisanal yang manis sempurna.",
    image: "https://images.unsplash.com/photo-1662047102608-a6f2e492411f?q=80&w=687&auto=format&fit=crop",
    badge: "Best Seller" as const
  },
  {
    name: "Matcha Latte",
    category: "Non-Coffee",
    price: "Rp38.000",
    description: "Bubuk matcha Jepang murni yang dipadukan dengan susu segar, memberikan rasa yang menenangkan.",
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7",
    badge: "Popular" as const
  },
  {
    name: "Classic Croissant",
    category: "Artisan Pastry",
    price: "Rp28.000",
    description: "Pastry berlapis yang super renyah di luar dan lembut di dalam, dibuat fresh setiap pagi.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a",
    badge: "Best Seller" as const
  },
  {
    name: "Avocado Toast",
    category: "Premium Brunch",
    price: "Rp55.000",
    description: "Roti gandum panggang dengan topping alpukat segar, telur poached, dan taburan biji-bijian.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8",
    badge: "Chef Recommendation" as const
  },
  {
    name: "Cold Brew Signature",
    category: "Specialty Coffee",
    price: "Rp40.000",
    description: "Kopi yang diseduh dingin selama 12 jam untuk hasil rasa yang smooth, low-acid, dan refreshing.",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c",
    badge: "Popular" as const
  }
];

export const Menu = () => {
  return (
    <section id="menu" className="py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-coffee-accent/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="text-center mb-10 md:mb-12"
        >
           <span className="inline-block px-4 py-1.5 mb-6 bg-coffee-accent/10 rounded-full text-coffee-accent text-xs font-bold uppercase tracking-[0.3em]">
             The Selection
           </span>
           <SectionHeading 
             title="Menu Favorit" 
             subtitle="Eksplorasi cita rasa kopi autentik dan hidangan premium yang kami kurasi khusus untuk pengalaman kuliner terbaik Anda."
             centered={true}
           />
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-10">
          {menuItems.map((item, index) => (
            <MenuCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
