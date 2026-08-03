# Product Requirements Document — Kings Refleksi Website

**Versi:** 1.0
**Tanggal:** 3 Agustus 2026
**Status:** Draft untuk review

---

## 1. Ringkasan Proyek

Website company profile untuk Kings Refleksi — bisnis pijat refleksi & perawatan tubuh dengan 3 cabang aktif (Bogor x2, Bekasi x1), berdiri sejak 2003 (rebrand dari "Bogor Refleksi" ke "Kings Refleksi" di 2006).

**Catatan koreksi cakupan:** Brief awal menyebut cabang di Jakarta dan Bogor. Berdasarkan kisi-kisi konten yang diberikan, cabang aktual adalah **2 di Bogor (Yasmin, Bukit Cimanggu City) + 1 di Bekasi (Grand Galaxy)** — tidak ada cabang Jakarta. PRD ini mengikuti data aktual; sesuaikan kembali kalau ada cabang Jakarta yang belum tercantum di kisi-kisi.

**Scope teknis:** Website informasional (marketing/company profile). Sistem member (poin, redeem) ditampilkan sebagai **informasi program**, bukan portal fungsional — user tidak login, poin tidak dihitung otomatis di web. Pendaftaran & transaksi member tetap berjalan offline/via WhatsApp admin cabang.

---

## 2. Tujuan Produk

| Tujuan | Deskripsi |
|---|---|
| Kredibilitas merek | Menegaskan posisi Kings Refleksi sebagai layanan pijat refleksi premium, bukan tempat pijat generik — visual dan copy harus merefleksikan 20+ tahun pengalaman |
| Konversi ke WhatsApp | Setiap cabang punya kontak WA admin terpisah — tujuan utama situs adalah mengarahkan pengunjung ke WA cabang terdekat, bukan form booking di web |
| Edukasi layanan | Banyak calon pelanggan awam terhadap istilah (bekam, ear candle, totok wajah) — konten harus menjelaskan tanpa terasa seperti artikel medis |
| Akuisisi member | Menjelaskan value proposition member agar pelanggan existing termotivasi daftar di cabang |

## 3. Target Pengguna

- **Pelanggan baru** — mencari info lokasi terdekat & jenis layanan sebelum datang/WA
- **Pelanggan existing** — cek info member benefit, lokasi cabang, kontak
- **Keluarga** — sesuai hero copy ("pijat sehat keluarga"), target termasuk kunjungan bersama, bukan hanya individu

---

## 4. Struktur Navigasi

### 4.1 Navbar yang diberikan
```
Home | Tentang Kami | Kontak | Lokasi
```

### 4.2 Rekomendasi tambahan

| Tambahan | Alasan |
|---|---|
| **Layanan** | Ada 6 jenis layanan dengan penjelasan cukup panjang (Massage, Reflexology, Bekam, Scrub, Ear Candle, Totok Wajah) — tanpa entri navbar sendiri, konten ini "tenggelam" di tengah halaman dan sulit di-scan pengunjung yang buru-buru |
| **Member** | Ada CTA + benefit + syarat ketentuan yang cukup substansial — layak jadi anchor sendiri agar bisa di-link langsung (misal dari campaign WA/IG: "cek benefit member di web") |

**Navbar final yang disarankan:**
```
Home | Layanan | Member | Tentang Kami | Lokasi | Kontak
```

Kalau ingin tetap ringkas (maks 4-5 item sesuai prinsip quiet luxury — navbar padat mengurangi kesan premium), alternatif: gabungkan **Lokasi** ke dalam **Kontak** jadi satu section "Kontak & Lokasi", karena kontennya memang saling berdekatan (WA per cabang + alamat per cabang).

```
Home | Layanan | Member | Tentang Kami | Kontak
```

### 4.3 Arsitektur halaman: one-page vs multi-page

Berdasarkan struktur konten (mengalir linear: Hero → Member → Visi Misi → Layanan → Benefit Member → Sejarah → Kontak), ini secara alami cocok jadi **single-page dengan anchor scroll** (`#layanan`, `#member`, `#tentang-kami`, `#kontak`), bukan halaman terpisah per route.

| Pendekatan | Kapan tepat |
|---|---|
| **Single-page + anchor** *(direkomendasikan)* | Konten seukuran ini (~8 section), audiens mobile yang scroll cepat, SEO tidak butuh banyak halaman terindeks terpisah |
| **Multi-page** (`/layanan`, `/tentang-kami`, dst.) | Kalau ke depan tiap layanan butuh halaman detail sendiri (SEO per-treatment keyword), atau konten "Tentang Kami" akan terus bertambah panjang |

Rekomendasi: mulai dengan single-page. Struktur folder tetap disiapkan modular (tiap section jadi komponen terpisah) supaya migrasi ke multi-page nanti tidak perlu rombak total.

---

## 5. Rincian Konten per Section

### 5.1 Hero
- **Heading:** "Pijat sehat Keluarga" (2 baris, sesuai `display-lg` di design system — split baris untuk emphasis pada "Keluarga")
- **Body:** copy yang diberikan, ditampilkan dengan `body-lg`
- **CTA:** perlu 1 primary button — rekomendasi "Hubungi Kami" atau "Lihat Lokasi", mengarah ke WhatsApp cabang terdekat atau section Kontak
- **Visual:** foto ambiance pijat keluarga (bukan stock generik) sesuai arahan desain quiet luxury sebelumnya

**Gap yang perlu diisi klien:** copy hero belum menyebut jumlah cabang/kota secara eksplisit — worth dipertimbangkan menambah 1 baris kecil seperti "3 Cabang di Bogor & Bekasi" sebagai trust signal di bawah hero, tapi ini keputusan konten, bukan wajib.

### 5.2 Member CTA
- Heading: "Menjadi Member, Menikmati Manfaat Pijat Sehat"
- Body copy yang diberikan
- **Perlu CTA button** — belum ada di kisi-kisi, rekomendasi: "Cek Cara Daftar" → scroll ke section Kontak (karena pendaftaran member via cabang/WA, bukan form online)

### 5.3 Visi & Misi
- Visi: 1 paragraf
- Misi: 5 poin numbered (Kualitas Layanan, Kepuasan Pelanggan, Pengembangan Karyawan, Inovasi & Teknologi, Kesehatan & Kesejahteraan)
- **Layout:** sesuai `Fixed Editorial Grid` di DESIGN.md — Visi di kolom offset (misal 2-7), Misi sebagai numbered list di kolom lain atau di bawahnya dengan `section-gap`

### 5.4 Layanan (6 item)

| Layanan | Ringkasan 1-baris untuk card (di-generate dari deskripsi panjang) |
|---|---|
| Massage | Teknik manipulasi otot & kulit untuk relaksasi dan aliran darah |
| Reflexology | Pijat titik refleksi di kaki/tangan/telinga untuk keseimbangan tubuh |
| Bekam | Terapi hisap tradisional untuk sirkulasi & detoksifikasi |
| Scrub Massage | Lulur tradisional Indonesia untuk kulit halus dan segar |
| Ear Candle | Terapi lilin telinga untuk membersihkan & meredakan tekanan telinga |
| Totok Wajah | Akupresur wajah dari tradisi Tiongkok untuk sirkulasi & energi Chi |

**Rekomendasi UX:** deskripsi panjang di kisi-kisi terlalu detail untuk card grid (akan bikin section terasa seperti artikel, bukan editorial). Sarankan:
- Card menampilkan ringkasan 1 baris (tabel di atas) + foto
- Klik/expand (accordion tanpa shadow, sesuai shape language sharp) menampilkan deskripsi lengkap
- Ini menjaga kepadatan visual tetap "quiet luxury" — bukan wall of text

**Perlu diisi klien:** harga per layanan belum ada di kisi-kisi. Perlu diputuskan: tampilkan harga di web, atau "Hubungi kami untuk info harga" (umum untuk bisnis spa/refleksi karena harga sering beda per cabang/promo).

### 5.5 Benefit Member
- 2 poin benefit (1 poin/Rp100rb, redeem diskon/merchandise)
- "Syarat & Ketentuan Berlaku" — **perlu klarifikasi:** apakah S&K lengkap perlu ditampilkan (expandable text/modal) atau cukup teks disclaimer tanpa detail? Kalau S&K lengkap belum tersedia, jangan janji link yang kosong.

### 5.6 Sejarah Perusahaan
- Dua blok narasi: "Awal berdiri" (2003→2006 rebrand) dan "Sejak perubahan nama" (paragraf kedua & ketiga terasa duplikatif — direkomendasikan disunting jadi 1 narasi timeline yang mengalir, bukan digabung mentah)
- **Rekomendasi konten:** bisa divisualisasikan sebagai timeline sederhana (2003 — 2006 — sekarang) sesuai gaya editorial, bukan 3 paragraf teks panjang berturut-turut yang berat dibaca di quiet luxury layout

### 5.6.1 Placeholder Foto — Section Tentang Kami

Section "Tentang Kami" (mencakup Visi Misi + Sejarah, 5.3 & 5.6) membutuhkan **4 foto**. Karena kisi-kisi belum menentukan foto spesifik untuk tiap slot, berikut placeholder dengan asumsi peruntukan berdasarkan struktur konten yang ada — **perlu dikonfirmasi ke klien** (lihat Open Questions #8).

| Slot | Nama file placeholder | Asumsi konten | Aspect ratio | Penempatan |
|---|---|---|---|---|
| Foto 1 | `about-hero.jpg` | Foto utama/ambiance — interior salah satu cabang atau momen treatment, jadi visual anchor section | 4:5 (portrait) | Sisi kanan blok Visi Misi (kolom offset 8-12 sesuai Fixed Editorial Grid) |
| Foto 2 | `about-heritage-2003.jpg` | Foto era awal berdiri (2003, "Bogor Refleksi") — kalau dokumentasi lama tidak ada, bisa foto simbolis/arsip terdekat | 1:1 atau 3:4 | Sejajar dengan narasi "Awal berdiri" di timeline |
| Foto 3 | `about-rebrand-2006.jpg` | Foto pasca-rebrand ke "Kings Refleksi" 2006 — momen transisi/identitas baru | 1:1 atau 3:4 | Sejajar dengan narasi rebrand di timeline |
| Foto 4 | `about-today.jpg` | Foto kondisi terkini — cabang, tim, atau treatment terbaru, merepresentasikan "sekarang" di timeline | 4:5 (portrait) | Titik akhir timeline, sebelum transisi ke section Layanan |

**Spesifikasi teknis foto (mengikuti DESIGN.md):**
- Format: WebP/AVIF untuk web, simpan source asli JPG/PNG resolusi tinggi terpisah
- Treatment visual: sedikit desaturasi atau warm tint agar match parchment background (`#F5F2ED`), sesuai spek Imagery di DESIGN.md
- `object-fit: cover` dengan container sharp-cornered (tanpa border-radius), konsisten dengan shape language
- Alt text wajib deskriptif per foto untuk SEO & accessibility (lihat Section 9.3) — bukan generik "foto 1", "foto 2"

**Catatan penting:** Kalau ternyata 4 foto ini bukan untuk timeline sejarah tapi untuk keperluan lain (misal 1 foto per cabang + 1 foto tim, atau galeri interior tanpa kaitan timeline), struktur tabel di atas perlu disesuaikan — placeholder ini asumsi awal berdasarkan konten yang ada, bukan konfirmasi final dari klien.

### 5.7 Kontak & Lokasi
- Email: info@kingsrefleksi.com
- 3 nomor WA admin per cabang (bukan 1 WA umum) — penting: setiap CTA "Chat WA" di section Layanan/Member harus mengarah ke cabang yang dipilih user, bukan nomor tunggal

**Data cabang (final, dari klien):**

| Cabang | Nomor WA | Link `wa.me` |
|---|---|---|
| Yasmin Bogor | 0821-2974-3449 | `https://wa.me/6282129743449` |
| Bukit Cimanggu City Bogor | 0852-8295-3626 | `https://wa.me/6285282953626` |
| Grand Galaxy Bekasi | 0813-2180-078 | `https://wa.me/628132180078` |

**Catatan implementasi penting:**
- Ketiga link di atas menggunakan protokol `http://` — pastikan diubah ke `https://wa.me/...` saat implementasi. `wa.me` redirect tetap jalan di keduanya, tapi `https` adalah standar aman dan mencegah mixed-content warning kalau situs sendiri sudah full HTTPS.
- Nomor Grand Galaxy Bekasi (`628132180078`) polanya beda dari 2 nomor lain — cek ulang ke klien apakah ini digit yang benar (nomor Indonesia yang valid biasanya 10-13 digit setelah `62`; nomor ini 11 digit termasuk kode negara, kemungkinan benar tapi worth dikonfirmasi sebelum go-live supaya tidak ada pelanggan salah connect).
- Simpan sebagai data terstruktur di `data/branches.ts`, bukan hardcoded di komponen JSX (selaras dengan requirement di Section 7 — Konten update).

**Gap yang masih perlu diisi klien:**
- Alamat lengkap tiap cabang (jalan, nomor, kode pos) + jam operasional — nomor WA sudah didapat, tapi alamat fisik untuk schema `LocalBusiness` (Section 9.2) belum ada
- Apakah perlu embed Google Maps per cabang atau cukup teks alamat + link "Buka di Maps"

---

## 6. Functional Requirements

| ID | Requirement | Prioritas |
|---|---|---|
| FR-1 | Setiap CTA WhatsApp membuka `wa.me` link dengan nomor sesuai cabang terkait (bukan nomor generik) | Must |
| FR-2 | Navigasi anchor scroll halus (smooth scroll) ke tiap section dari navbar | Must |
| FR-3 | Section Layanan: card dengan expand/collapse untuk deskripsi panjang | Should |
| FR-4 | Section Kontak: link "Buka di Google Maps" per cabang (bukan embed map berat yang perlambat load) | Should |
| FR-5 | Mobile nav: full-screen overlay menu (sesuai DESIGN.md, bukan slide-in drawer) | Must |
| FR-6 | Tidak ada form submission, login, atau database — seluruh interaksi transaksional terjadi di luar web (WA) | Must (scope guard) |

## 7. Non-Functional Requirements

| Aspek | Requirement |
|---|---|
| Performance | Karena tidak ada backend/DB, target Lighthouse Performance ≥95 — realistis untuk static site. Foto harus di-optimize (next/image, format WebP/AVIF) |
| Accessibility | Ikuti baseline dari DESIGN.md — kontras AA, focus-ring pada semua elemen interaktif (termasuk WA link & accordion) |
| SEO | Lihat Section 9 — Strategi SEO untuk detail lengkap |
| Konten update | Alamat, nomor WA, dan harga (kalau ditampilkan) kemungkinan berubah — simpan sebagai config/data file terpisah (`data/branches.ts`, `data/services.ts`), bukan hardcoded di JSX, agar update tidak perlu sentuh komponen |

## 8. Tech Stack (Rekomendasi)

Karena scope informasional (tanpa auth/DB), arsitektur bisa jauh lebih ringan dibanding proyek lain yang sedang kamu kerjakan (misal wedding invitation yang pakai Prisma/SQLite):

| Layer | Rekomendasi | Alasan |
|---|---|---|
| Framework | Next.js 14 (App Router), static-first | SSG cukup — tidak ada data dinamis per-request |
| Styling | Tailwind CSS + design tokens dari `DESIGN.md` | Konsisten dengan sistem desain quiet luxury yang sudah dibuat |
| Animasi | Framer Motion (scroll-reveal, subtle parallax hero) | Sesuai spek motion di DESIGN.md — no bounce, fade/slide-up saja |
| Data konten | Local JSON/TS config file, bukan CMS/DB | Update konten (cabang, layanan) jarang terjadi — CMS jadi overhead yang tidak perlu di skala ini |
| Deployment | Static export atau Vercel/Railway sesuai preferensi | Tidak butuh server runtime karena tidak ada backend logic |

**Trade-off yang perlu diketahui:** kalau ke depan mau ada blog/artikel kesehatan (bagus untuk SEO jangka panjang), local JSON tidak akan scalable untuk non-technical content editor. Titik keputusan: kalau tim marketing perlu update konten sendiri tanpa developer, worth mempertimbangkan headless CMS ringan (misal Sanity/Notion-as-CMS) — tapi untuk scope saat ini (member statis, tanpa auth) itu premature.

---

## 9. Strategi SEO

Bisnis ini 100% bergantung pada pencarian lokal ("pijat refleksi bogor", "pijat keluarga bekasi", dst.) — jadi SEO di sini bukan nice-to-have, tapi channel akuisisi utama selain WA/IG. Strategi dibagi 4 lapis: teknikal, on-page, local, dan content.

### 9.1 Technical SEO

| Item | Requirement | Alasan |
|---|---|---|
| Rendering | Static generation (SSG) via Next.js, bukan client-side rendering murni | Konten harus ada di initial HTML — crawler tidak perlu eksekusi JS untuk baca konten |
| Core Web Vitals | LCP < 2.5s, INP < 200ms, CLS < 0.1 | Sejak 2021 jadi ranking factor langsung; hero image (LCP element) wajib pakai `next/image` dengan `priority` |
| `sitemap.xml` | Auto-generate via `next-sitemap` atau route handler bawaan App Router (`app/sitemap.ts`) | Wajib meski single-page — membantu Google index anchor/section penting lebih cepat |
| `robots.txt` | Allow all, tunjuk ke sitemap | Standar, tapi sering terlewat di project kecil |
| Canonical URL | Set eksplisit di tiap halaman (meski cuma 1) | Mencegah duplicate content kalau domain bisa diakses lewat www dan non-www |
| Mobile-first | Wajib — Google index mobile version sebagai primary sejak lama, dan mayoritas pencarian "pijat refleksi terdekat" terjadi di HP | Sudah align dengan requirement responsive di DESIGN.md |
| HTTPS | Wajib, termasuk redirect http→https otomatis di level hosting/DNS | Ranking factor + trust signal |
| Structured data validation | Test tiap schema pakai Google Rich Results Test sebelum go-live | Schema yang salah syntax = tidak muncul rich snippet sama sekali, tanpa warning jelas |

### 9.2 Local SEO (prioritas tertinggi)

Karena 3 cabang fisik, local SEO adalah differentiator terbesar dibanding kompetitor yang cuma punya 1 lokasi atau tidak optimasi sama sekali.

| Item | Requirement |
|---|---|
| Schema `LocalBusiness` x3 | Satu schema JSON-LD terpisah per cabang (bukan 1 schema digabung) — masing-masing dengan `name`, `address`, `geo` (lat/long), `openingHours`, `telephone`, `priceRange` |
| Google Business Profile | Pastikan 3 cabang punya listing GBP terpisah & terverifikasi, link balik ke section masing-masing cabang di web (`/#lokasi-yasmin`, dst.) — **ini di luar scope development web tapi wajib dikoordinasikan**, karena tanpa GBP, schema markup di web saja tidak cukup untuk muncul di Google Maps/local pack |
| NAP consistency | Name-Address-Phone harus **identik persis** (termasuk format nomor telepon, singkatan "Jl." vs "Jalan") antara website, GBP, dan direktori lain (misal listing di Instagram bio) — inkonsistensi NAP adalah salah satu penyebab paling umum local ranking tidak optimal |
| Halaman/section per cabang | Idealnya tiap cabang punya anchor/URL sendiri yang bisa di-index terpisah (`/#lokasi-yasmin-bogor`) berisi alamat, jam, foto cabang spesifik — bukan cuma 1 alamat generik di footer | 
| Local keyword di heading | Section Lokasi & Kontak sebaiknya eksplisit sebut nama kota di `h2`/`h3` (misal "Cabang Kami di Bogor & Bekasi"), bukan cuma "Lokasi" generik |

### 9.3 On-Page SEO

| Item | Requirement |
|---|---|
| Title tag | Unik, sertakan brand + kota utama + layanan unggulan. Contoh: `Kings Refleksi — Pijat Refleksi & Keluarga di Bogor & Bekasi` (≤60 karakter) |
| Meta description | 150-160 karakter, sertakan CTA — contoh: "Pijat refleksi, bekam, dan totok wajah dengan 3 cabang di Bogor & Bekasi. Kunjungi kami untuk relaksasi keluarga." |
| Heading hierarchy | 1 `h1` (hero heading), `h2` per section utama (Layanan, Member, Tentang Kami, Lokasi, Kontak), `h3` untuk tiap jenis layanan individual — jangan skip level demi styling visual |
| Alt text gambar | Deskriptif dan kontekstual (bukan "image1.jpg") — contoh: `alt="Ruang pijat refleksi Kings Refleksi cabang Yasmin Bogor"`, bukan cuma "spa room" generik |
| Internal anchor links | Navbar & CTA button pakai anchor link asli (`href="#layanan"`) yang crawlable, bukan `onClick` JS-only handler tanpa `href` |
| URL slug (kalau nanti multi-page) | `kingsrefleksi.com/layanan/bekam`, bukan query string atau ID — relevan kalau nanti migrasi ke multi-page sesuai section 4.3 |
| Open Graph & Twitter Card | Wajib untuk preview link yang dibagikan ke WA/IG — `og:image` custom (bukan default logo kecil), `og:title`, `og:description` |

### 9.4 Content SEO (jangka panjang, opsional v1)

Konten di kisi-kisi sudah cukup kaya keyword natural (nama tiap treatment, kota cabang), tapi untuk kompetisi jangka panjang:

- **Deskripsi layanan yang ada** (Massage, Reflexology, Bekam, dst.) sebenarnya adalah konten paling SEO-valuable di situs ini — jangan dipangkas jadi terlalu singkat demi estetika. Rekomendasi di section 5.4 (ringkasan 1-baris + expand) tetap menjaga teks lengkap ter-index karena ada di DOM (expand via CSS/JS toggle, bukan lazy-load konten dari API terpisah) — cek implementasi accordion tidak pakai `display:none` dari awal load tanpa konten di HTML.
- **Trade-off scope:** blog/artikel kesehatan ("manfaat bekam untuk migrain", dst.) adalah cara efektif menang keyword long-tail, tapi ini nambah scope signifikan (butuh CMS, editorial workflow) — dicatat sebagai rekomendasi fase 2, bukan v1, konsisten dengan keputusan static-content di section 8.

---

## 10. Out of Scope (v1)

- Login/akun member
- Perhitungan poin otomatis
- Booking/reservasi online
- Payment gateway
- Multi-bahasa (asumsi ID-only kecuali dinyatakan lain)
- Blog/artikel kesehatan (lihat 9.4 — direkomendasikan fase 2)

## 11. Open Questions untuk Klien

1. Alamat lengkap + jam operasional 3 cabang?
2. ~~Nomor WA aktual per cabang~~ — **sudah terjawab**, lihat Section 5.7 (perlu konfirmasi ulang khusus format nomor Grand Galaxy Bekasi)
3. Harga layanan: ditampilkan di web atau "hubungi kami"?
4. S&K member: perlu teks lengkap atau cukup disclaimer singkat?
5. Ada rencana cabang baru dalam waktu dekat? (mempengaruhi apakah data cabang di-hardcode atau disiapkan lebih fleksibel)
6. Aset foto: apakah ada foto asli tiap cabang/ambiance, atau perlu foto stock berkualitas tinggi sebagai gap-filler sementara?
7. Apakah 3 cabang sudah punya Google Business Profile aktif & terverifikasi? Kalau belum, ini perlu dikoordinasikan paralel dengan development web (lihat 9.2)
8. Untuk 4 foto di section Tentang Kami (lihat 5.6.1): apakah memang untuk timeline sejarah (2003 → 2006 → sekarang + 1 foto ambiance), atau peruntukan lain? Foto asli tersedia atau perlu bridging dengan stock sementara?

---

## 12. Referensi Desain

Seluruh implementasi visual mengikuti `DESIGN.md` (design system "Ethereal Stillness") yang sudah disepakati — palet quiet luxury (charcoal/parchment/bronze), tipografi Bodoni Moda + Manrope, shape sharp tanpa shadow, dan spacing editorial dengan `section-gap`.
