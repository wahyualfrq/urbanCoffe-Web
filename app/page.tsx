import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Menu } from "@/sections/Menu";
import { Gallery } from "@/sections/Gallery";
import { Location } from "@/sections/Location";
import { CTA } from "@/sections/CTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Location />
      <CTA />
    </div>
  );
}
