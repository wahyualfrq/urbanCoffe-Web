# ☕ Urban Coffee Cafe - Premium Landing Page

Urban Coffee adalah sebuah platform landing page modern yang dirancang khusus untuk bisnis cafe/coffee shop kelas atas. Dibangun menggunakan teknologi terbaru untuk menghasilkan performa tinggi, desain premium, dan SEO yang sangat kuat.

## ✨ Fitur Utama

- **Premium UI/UX**: Desain modern dengan estetika *luxury*, animasi halus menggunakan Framer Motion, dan transisi antar section yang natural.
- **Conversion-Oriented**: Strategi Call-to-Action (CTA) yang dioptimalkan untuk meningkatkan pemesanan melalui integrasi WhatsApp.
- **Local SEO Optimized**: Struktur heading, metadata, sitemap, dan Google Maps yang sudah terintegrasi untuk meningkatkan peringkat di pencarian lokal.
- **Mobile First & Responsive**: Tampilan yang sempurna di berbagai ukuran layar (Mobile, Tablet, Desktop).
- **Fast Performance**: Optimasi gambar menggunakan `next/image` dan *lazy loading* untuk kecepatan maksimal.

## 🚀 Teknologi yang Digunakan

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animasi**: [Framer Motion](https://www.framer.com/motion/)
- **Ikon**: Heroicons & Font Awesome (SVG)

## 🛠️ Instalasi

Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/) (versi 18 atau terbaru) di sistem Anda.

1. **Clone Repository**
   ```bash
   git clone https://github.com/username/urban-coffee.git
   cd urban-coffee
   ```

2. **Instal Dependensi**
   ```bash
   npm install
   ```

3. **Menjalankan Mode Pengembangan**
   ```bash
   npm run dev
   ```
   Aplikasi akan berjalan di `http://localhost:3000`.

4. **Build untuk Produksi**
   ```bash
   npm run build
   npm start
   ```

## 📁 Struktur Proyek

```text
├── app/                  # Route Next.js, layout, dan metadata
├── components/           # Komponen UI reusable (Button, Navbar, dll)
├── sections/             # Section utama halaman (Hero, About, Menu, dll)
├── public/               # Asset statis (Logo, Gambar, Favicon)
├── styles/               # Global CSS & Tailwind configuration
└── tailwind.config.ts    # Custom design system & tokens
```

## ⚙️ Konfigurasi WhatsApp

Untuk mengubah nomor WhatsApp tujuan pemesanan, buka file berikut:
- `components/ui/WhatsAppFloating.tsx`
- `sections/Menu.tsx`
- `sections/CTA.tsx`

Ubah atribut `href` ke format: `https://wa.me/628XXXXXXXXXX`

## 🎨 Kustomisasi Tema

Sistem desain diatur melalui `tailwind.config.ts`. Anda dapat dengan mudah mengubah:
- **Warna Aksen**: Cari `coffee-accent` untuk mengubah warna emas/latte.
- **Warna Utama**: Cari `dark-brown` untuk mengubah tone warna gelap cafe.
- **Typography**: Menggunakan font Google 'Poppins' untuk kesan modern.

## 🚀 Deployment ke Vercel

Proyek ini telah dioptimalkan untuk performa tinggi di [Vercel](https://vercel.com/).

1. **Hubungkan GitHub**: Hubungkan repository GitHub Anda ke Dashboard Vercel.
2. **Auto-Detection**: Vercel akan otomatis mengenali proyek ini sebagai Next.js.
3. **Environment Variables**: Jika menggunakan Analytics atau Google Maps API Key di masa depan, tambahkan di tab Settings.
4. **Deploy**: Klik tombol Deploy dan website Anda akan online dalam hitungan detik.

### 📈 Strategi SEO Ranking #1
Untuk menembus peringkat pertama Google, lakukan langkah berikut setelah deploy:

1. **Google Search Console**: Daftarkan domain Anda dan kirimkan sitemap (`https://domain-anda.com/sitemap.xml`).
2. **Google Business Profile**: Daftarkan lokasi cafe Anda di Google Maps untuk mendukung SEO Lokal (Kata kunci: "Cafe terdekat").
3. **Domain Custom**: Gunakan domain `.com`, `.id`, atau `.coffee` yang relevan dengan nama brand.
4. **Update Konten**: Google menyukai website yang aktif. Pastikan sitemap diperbarui jika ada menu baru.
5. **Backlinks**: Bagikan link website Anda di media sosial (Instagram, TikTok) untuk meningkatkan otoritas domain.

---

Dibuat dengan ❤️ oleh [Antigravity AI] & [USER]. 
☕ *Elevating the Coffee Experience through Code.*
