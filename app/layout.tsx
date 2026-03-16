import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "../styles/globals.css";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { WhatsAppFloating } from "@/components/ui/WhatsAppFloating";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap',
});

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'], 
  subsets: ["latin"], 
  variable: "--font-poppins",
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://urbancoffee.com"),
  title: "Urban Coffee Cafe | Tempat Ngopi Nyaman & Kopi Premium di Jakarta",
  description: "Urban Coffee adalah cafe modern dengan pilihan kopi premium. Tempat nyaman untuk kerja, meeting, dan nongkrong di Jakarta. Lihat menu & lokasi kami.",
  keywords: [
    "cafe jakarta",
    "coffee shop jakarta",
    "tempat ngopi nyaman",
    "kopi premium jakarta",
    "cafe senopati",
    "tempat nongkrong jakarta",
    "reservasi cafe jakarta"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Urban Coffee Cafe - Tempat Ngopi Nyaman di Jakarta",
    description: "Nikmati kopi premium dengan suasana cafe modern yang nyaman untuk kerja dan bersantai.",
    url: "https://urbancoffee.com",
    siteName: "Urban Coffee",
    images: [
      {
        url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Interior Urban Coffee Cafe Jakarta",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-id", // Placeholder
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "name": "Urban Coffee",
    "image": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb",
    "@id": "https://urbancoffee.com",
    "url": "https://urbancoffee.com",
    "telephone": "+6281234567890",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Kopi Nikmat No. 10, Senopati",
      "addressLocality": "Jakarta Selatan",
      "addressRegion": "Jakarta",
      "postalCode": "12190",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -6.2307,
      "longitude": 106.8123
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "07:00",
        "closes": "23:00"
      }
    ],
    "servesCuisine": ["Coffee", "Bakery"],
    "menu": "https://urbancoffee.com/#menu",
    "acceptsReservations": "true"
  };

  return (
    <html lang="id">
      <head />
      <body className={`${inter.variable} ${poppins.variable} font-inter antialiased bg-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
