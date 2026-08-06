---
name: Noir & Gold
colors:
  # --- Background family: REVISI — rentang dipersempit sesuai arahan klien:
  # gradasi dari HITAM 100% (murni) ke HITAM 90% (sedikit lebih terang), bukan
  # lompatan besar ke abu-abu seperti draft sebelumnya. Kesan tetap "solid black"
  # dari jauh, gradasi hanya terasa saat elemen saling bertumpuk (card di atas card). ---
  surface: '#000000'                  # hitam 100% — page background murni
  surface-dim: '#000000'
  surface-bright: '#0d0d0d'
  surface-container-lowest: '#000000'
  surface-container-low: '#080808'
  surface-container: '#0d0d0d'
  surface-container-high: '#141414'
  surface-container-highest: '#1a1a1a'  # hitam ~90% — batas paling terang, untuk card paling "naik"

  on-surface: '#f5f0e8'               # warm off-white text
  on-surface-variant: '#b8b0a0'       # muted warm grey untuk secondary text
  inverse-surface: '#f5f0e8'
  inverse-on-surface: '#000000'
  outline: '#4a4438'
  outline-variant: '#241f16'
  surface-tint: '#c9a24b'

  primary: '#000000'                  # hitam — structural base
  on-primary: '#f5f0e8'
  primary-container: '#0d0d0d'
  on-primary-container: '#d4d4d4'
  inverse-primary: '#f5f0e8'

  secondary: '#8a8478'                # warm stone grey — secondary text/metadata
  on-secondary: '#000000'
  secondary-container: '#141414'
  on-secondary-container: '#c9c4b8'

  tertiary: '#c9a24b'                 # GOLD — dipakai liberal (accents, borders, icons, CTA)
  on-tertiary: '#000000'
  tertiary-container: '#2e2410'
  on-tertiary-container: '#e8c97a'

  error: '#ff6b6b'
  on-error: '#000000'
  error-container: '#2e1010'
  on-error-container: '#ffb4b4'

  script-accent: '#c9a24b'            # script text ("About Us"-style overline) — reuse gold

  focus-ring: '#c9a24b'
  focus-ring-offset: '#000000'

  disabled-fill: '#0d0d0d'
  disabled-on: '#5a5648'

typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.01em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 38px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0em

  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md-mobile:
    fontFamily: Playfair Display
    fontSize: 26px
    fontWeight: '600'
    lineHeight: '1.35'

  script-accent:
    fontFamily: Alex Brush
    fontSize: 22px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: 0.01em

  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-lg-mobile:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'

  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md-mobile:
    fontFamily: Manrope
    fontSize: 15px
    fontWeight: '400'
    lineHeight: '1.6'

  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.2em

  quote-serif:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.5'

spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-desktop: 80px
  margin-mobile: 24px
  section-gap: 80px
  section-gap-mobile: 48px

image-ratios:
  portrait: '4:5'
  square: '1:1'
  service-card-icon: '1:1'    # circular-crop icon foto di service card (persis referensi)
  about-image: '4:5'
  banner-image: '1:1'
---

## Brand & Style — REVISI: Mengikuti Referensi LUXE Salon & Studio 100% (secara struktur)

**Arahan klien terbaru:** bukan lagi "terinspirasi dari" LUXE, tapi **mengikuti struktur & pola komponen referensi secara penuh** — urutan section, jenis komponen (feature-icon row, about+ornate badge, service icon-grid, banner promo, footer 4-kolom) — semuanya di-mirror 1:1 dari referensi. Yang **tidak** di-mirror hanya 2 hal sesuai arahan eksplisit klien:

1. **Warna dasar tetap keluarga hitam**, bukan hijau seperti referensi. Tapi sekarang rentang gradasinya **dipersempit**: dari hitam murni `#000000` (surface dasar) ke hitam ~90% `#1a1a1a` (surface paling terang/naik) — bukan direntangkan ke abu-abu terang seperti draft sebelumnya (`#2c2c2c`). Efeknya: dari jauh situs terasa "solid black" nyaris flat, gradasi hanya kebaca saat card bertumpuk langsung di atas card lain.
2. **Botanical background lebih "nyata"/organik**, bukan line-art silhouette datar — lihat detail di bawah.

Semua prinsip dari sistem lama ("Ethereal Stillness" — sharp shape, no-shadow, bronze eksklusif) **tidak berlaku**. Ini bukan revisi tambal sulam, ini penggantian arsitektur visual total mengikuti referensi.

## Colors

| Token | Nilai | Peran |
|---|---|---|
| `surface` | `#000000` | Background utama — hitam 100% |
| `surface-container-highest` | `#1a1a1a` | Level paling terang (~90% hitam) — card yang paling "naik" dari background |
| `tertiary` (Gold) | `#c9a24b` | Aksen utama — border, icon, CTA, teks script — dipakai liberal di semua section, sama seperti referensi |
| `on-surface` | `#f5f0e8` | Teks utama — warm off-white, bukan putih murni (biar tidak "flat" di atas hitam pekat) |

Gradasi antar level surface sekarang **halus dan sempit** (5 step dari `#000000` → `#1a1a1a`), dipakai untuk membedakan: page bg → section bg → card bg → card-hover/elevated bg, tanpa membuat kontras tonal yang mencolok seperti sistem sebelumnya.

## Layout — Mirror Struktur Referensi 100%

Urutan & jenis section di-mapping langsung dari referensi LUXE, section-per-section:

| # | Section di Referensi | Mapping ke Noir & Gold |
|---|---|---|
| 1 | Navbar + tombol gold "Book Appointment" kanan-atas | Navbar + logo agak besar kiri, menu kanan, CTA gold pill "Chat WhatsApp" kanan-atas (bukan "Book Appointment" — sesuai model bisnis WA-first) |
| 2 | Hero split: teks kiri (heading 2-baris + divider ornamen tipis + body + 2 tombol) — foto kanan (potrait crop) | Sama persis: heading 2-baris, garis divider ornamen tipis gold di bawah heading, body copy, 2 tombol (primary solid gold + secondary outline gold), foto kanan circular/organic-crop |
| 3 | Wavy gold divider di bawah Hero | Dipertahankan sesuai draft sebelumnya |
| 4 | **Feature-icon row** (4 icon: Premium Quality, Expert Stylists, Luxurious Experience, Customer Satisfaction) | **BARU** — belum ada di draft sebelumnya, WAJIB ditambahkan: 4 icon-item (icon line-art gold + judul singkat + 1 baris desc) |
| 5 | About section: foto kiri + badge ornate overlap ("5+ Years of Excellence") — teks kanan dengan script-accent overline "About Us" | Sama persis: foto kiri (interior/treatment), badge ornate overlap pojok foto, teks kanan dengan script-accent overline "Tentang Kami" |
| 6 | Services: script overline + heading, grid 6 card (foto circular top + badge icon overlay + judul + 1 baris desc + tombol "Book Now") | Sama persis, sudah sesuai draft PRD 5.4 — tinggal pastikan badge icon overlay di tepi foto circular tidak dilewat |
| 7 | Banner promo horizontal (script overline + heading + body + tombol, foto kanan, badge lingkaran "20% OFF") | Mapping ke section **Member** (bukan promo diskon) — badge lingkaran isinya bukan "20% OFF" tapi ikon/angka benefit member, misal "1 Poin / Rp100rb" |
| 8 | Footer 4-kolom: Lokasi, Telepon, Email, Sosial Media — bar bawah copyright + link legal | Sama persis, tapi Lokasi & Telepon jadi **per-cabang** (3 entri), bukan 1 alamat generik seperti referensi |

**Section yang TIDAK ada padanan di referensi tapi tetap wajib** (spesifik konten King's Reflexology, di luar mapping): Sejarah/Timeline perusahaan (2003→2006→sekarang). Ditempatkan menyatu di dalam section About (poin 5), sebagai kelanjutan setelah Visi-Misi, sebelum masuk ke Services.

## Feature-Icon Row (BARU — detail implementasi)

Section ini yang paling signifikan hilang dari draft sebelumnya. Detail:

- **Posisi:** tepat di bawah wavy divider Hero, sebelum section About.
- **Isi:** 4 item, tiap item = icon line-art gold (ornate style, bukan geometris minimal) + judul singkat (`label-caps` atau `headline` kecil) + 1 baris deskripsi (`body-md`, warna `on-surface-variant`).
- **Konten disarankan** (mapping dari referensi "Premium Quality / Expert Stylists / Luxurious Experience / Customer Satisfaction" ke konteks refleksi keluarga):
  1. **20+ Tahun Pengalaman** — Melayani keluarga Bogor & Bekasi sejak 2003
  2. **Terapis Bersertifikat** — Profesional terlatih di tiap teknik pijat
  3. **Suasana Nyaman & Higienis** — Ruang perawatan bersih, tenang, dan privat
  4. **Kepuasan Pelanggan** — Member setia jadi bukti kualitas layanan kami
- **Layout:** grid 4 kolom desktop, 2 kolom tablet, stack 1 kolom mobile — sama seperti referensi.
- **Background:** transparan menyatu dengan `surface`, tidak pakai card container terpisah (mengikuti referensi yang menaruh icon row langsung di atas background gelap, bukan dalam card).

## Ornate Badge (About Section)

Mapping dari badge "5+ Years of Excellence" di referensi:

- Bentuk: frame melengkung gaya "certificate/plaque", garis gold tipis 1.5-2px di tepinya, overlap di pojok kanan-bawah foto About (sesuai posisi referensi).
- Isi: angka besar (`headline-md`, gold) + 1 baris label (`label-caps`) — misal **"20+"** / "Tahun Melayani Keluarga Indonesia", dengan icon kecil gold di atas angka (bisa pakai motif lotus/crown, bukan scissors seperti referensi — scissors relevan untuk salon, tidak untuk refleksi).
- Shadow: subtle gold-tinted glow di sekeliling frame, konsisten dengan aturan shadow gold di seluruh sistem.

## Botanical Background — REVISI FINAL: Foto Daun Asli (PNG Cutout), Bukan Ilustrasi

**Perubahan dari draft sebelumnya:** bukan lagi SVG line-art maupun render ilustrasi multi-path, tapi **foto tanaman asli** (contoh acuan: monstera) yang di-cutout jadi PNG background-transparan, ditempatkan sebagai layer dekoratif — mirror pendekatan referensi client (lihat contoh moodboard "uniqueness"), tapi opacity ditekan jauh lebih rendah karena background di sini gelap, bukan putih terang.

### Sumber aset
- **Foto daun asli**, bukan vector — monstera, palem, atau daun tropis lain dengan urat/vein natural yang terlihat jelas.
- Di-cutout presisi (background dihapus, transparent PNG/WebP), boleh crop sebagian daun kepotong di tepi frame (seperti pola referensi) untuk kesan foto "terpotong" natural, bukan elemen dekoratif yang sengaja dipusatkan.
- 2-3 foto daun berbeda dipakai berulang secara konsisten di seluruh halaman (jangan ganti-ganti motif tiap section, supaya tetap terasa 1 keluarga visual).

### Color treatment (karena background hitam, bukan putih seperti referensi)
Referensi pakai daun hijau natural karena background-nya putih terang — itu tidak langsung bisa dipakai di atas `surface: #000000` tanpa penyesuaian, karena hijau natural solid akan langsung "keluar tema" gold-on-black. Dua opsi treatment, pilih salah satu untuk konsistensi di seluruh situs:

| Opsi | Treatment | Kapan cocok |
|---|---|---|
| **A — Desaturated gold-tint** *(direkomendasikan)* | Foto daun di-grayscale lalu overlay warna gold (`tertiary #c9a24b`) dengan blend mode `overlay`/`soft-light` | Paling menyatu dengan sistem gold-on-black, terasa "sengaja" bukan sisa aset stock |
| **B — Hijau redup asli** | Foto daun dipertahankan warna hijau aslinya, opacity ditekan sangat rendah | Kalau ingin kesan "tanaman sungguhan" lebih terasa botanical, bukan cuma tekstur abstrak |

### Opacity — INI YANG PALING PENTING dibanding referensi
Referensi pakai daun ~90-100% opacity karena jadi elemen visual utama di atas background terang. Di sistem Noir & Gold, daun harus **jauh lebih tipis** — cukup terbaca sebagai tekstur samar di background, tidak boleh bersaing dengan teks gold atau heading:

- **8-15% opacity** untuk daun besar di pojok section (bukan 30-40% seperti spec draft sebelumnya)
- Boleh naik ke **~20%** HANYA untuk daun kecil yang jauh dari teks penting (pojok terluar, area kosong)
- Tidak perlu variasi opacity dekat-vs-jauh dari teks seperti draft SVG sebelumnya — karena foto asli sudah punya tekstur/shading natural sendiri, cukup 1 nilai opacity konsisten per section

### Penempatan & ukuran
- Pojok kiri-atas & kanan-bawah tiap section besar (Hero, Feature-row, About, Services, Member banner), sesuai pola referensi yang menaruh daun terpotong di pojok frame.
- 250-450px lebar desktop (foto asli butuh ukuran sedikit lebih besar dari ilustrasi vector supaya detail vein-nya tetap terbaca meski opacity rendah), proporsional lebih kecil di mobile.
- Boleh overflow sedikit keluar batas section untuk kesan natural/tidak kaku, sama seperti referensi.

### Layering & performa
- Selalu di belakang konten (`z-index` rendah, `pointer-events: none`).
- Format WebP/AVIF dengan alpha channel, kompres agresif — karena ini elemen dekoratif opacity rendah, tidak perlu resolusi tinggi; lazy-load kalau di luar viewport awal supaya tidak menambah beban LCP (lihat requirement Core Web Vitals di PRD section 9.1).
- Grain/noise halus opsional di layer background paling belakang (di atas `surface`, di bawah daun) — konsisten dengan tekstur referensi, tapi opacity sangat rendah (~3-5%) supaya tidak menambah "noise" visual berlebih di atas hitam pekat.

## Typography

- **Headline:** Playfair Display, weight 600 — high-contrast serif, kesan tegas/mewah sesuai referensi.
- **Script accent:** Alex Brush (atau Google Fonts script sejenis), HANYA untuk overline dekoratif pendek ("Tentang Kami", "Layanan Kami", dst.) — tidak untuk body/heading utama.
- **Body:** Manrope — netral, menopang headline yang lebih dekoratif.

## Elevation & Shapes

- **Shadow/glow ada** — card, foto, badge pakai `box-shadow` gold-tinted halus, bukan hitam generik.
- **Rounded/circular** — button pill, card border-radius besar, foto service **circular** penuh (bukan rectangular).
- **Border gold tegas:** 1.5-2px solid (bukan opacity rendah) di semua card/frame/badge — supaya tidak "tenggelam" oleh botanical decoration yang sekarang lebih ramai/organik di background.
- **Wavy divider:** tetap dipakai antar section, garis gold 2px + glow halus.

## Components

- **Navbar:** logo kiri (agak besar, 72-90px desktop), menu tengah/kanan, CTA gold pill kanan-atas paling menonjol (mirror posisi "Book Appointment" di referensi) — isi CTA: "Chat WhatsApp" atau "Hubungi Kami".
- **Buttons:** Pill-shaped. Primary: solid gold, teks hitam. Secondary: outline gold, teks gold (persis pola 2-tombol Hero di referensi: "Book Now" + "Explore Services" → jadi "Hubungi Kami" + "Lihat Layanan").
- **Feature-icon item:** icon gold ornate + judul + 1 baris desc, tanpa card container (lihat detail di atas).
- **About badge:** ornate frame overlap foto (lihat detail di atas).
- **Service card:** foto circular top + badge icon overlay tepi foto + rounded card body + border gold 1.5-2px + shadow gold-tinted + tombol pill kecil.
- **Banner (Member):** layout horizontal seperti "Special Offer" referensi — teks+CTA kiri, foto kanan, badge lingkaran gold overlap di antara keduanya.
- **Footer:** 4 kolom (Lokasi ×3 cabang, Telepon ×3 cabang, Email, Sosial Media) + bar bawah copyright/legal — background sedikit lebih terang dari page bg (`surface-container`) atau full gold-bar seperti bottom bar referensi, pilih salah satu saat implementasi untuk konsistensi kontras teks.

## Logo Usage — Tidak Berubah dari Keputusan Sebelumnya

Logo tetap di header/navbar kiri-atas, ukuran ~72-90px desktop / 50-60px mobile, background transparan menyatu `surface`. Tidak muncul di footer (footer pakai teks brand). Warna logo asli (merah/gold/hijau/biru) dibiarkan apa adanya sebagai brand mark resmi — aturan gold-only berlaku untuk semua elemen UI lain di luar logo ini. Foto Hero (circular crop talent pijat) tetap ada di kanan Hero, tidak digantikan logo.

## Yang Tetap Dipertahankan

- Section-gap 80px desktop / 48px mobile
- Struktur konten PRD (navigasi, 3 cabang, member info) — soal konten, tidak berubah oleh revisi visual ini
- Aturan accessibility dasar (focus-ring gold, kontras AA, disabled state)
