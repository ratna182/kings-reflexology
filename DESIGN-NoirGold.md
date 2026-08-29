---
name: Noir & Gold
colors:
  # --- Background family: black-to-lighter-black gradation (per client direction — 
  # NOT green like the LUXE reference; keep the ornate gold-luxury language but on 
  # a black tonal scale) ---
  surface: '#0d0d0d'                  # deepest black — page background
  surface-dim: '#0a0a0a'
  surface-bright: '#1a1a1a'
  surface-container-lowest: '#0d0d0d'
  surface-container-low: '#141414'
  surface-container: '#1c1c1c'
  surface-container-high: '#242424'
  surface-container-highest: '#2c2c2c'  # lightest black tone — for card surfaces standing above bg

  on-surface: '#f5f0e8'               # warm off-white text
  on-surface-variant: '#b8b0a0'       # muted warm grey for secondary text
  inverse-surface: '#f5f0e8'
  inverse-on-surface: '#0d0d0d'
  outline: '#4a4438'
  outline-variant: '#2c2820'
  surface-tint: '#c9a24b'

  primary: '#0d0d0d'                  # black — structural base
  on-primary: '#f5f0e8'
  primary-container: '#1c1c1c'
  on-primary-container: '#d4d4d4'
  inverse-primary: '#f5f0e8'

  secondary: '#8a8478'                # warm stone grey — secondary text/metadata
  on-secondary: '#0d0d0d'
  secondary-container: '#242424'
  on-secondary-container: '#c9c4b8'

  tertiary: '#c9a24b'                 # GOLD — now used liberally (accents, borders, icons, CTAs), 
                                       # not exclusively-rare like the old Bronze rule
  on-tertiary: '#0d0d0d'
  tertiary-container: '#3a2e14'
  on-tertiary-container: '#e8c97a'

  error: '#ff6b6b'
  on-error: '#0d0d0d'
  error-container: '#3a1414'
  on-error-container: '#ffb4b4'

  # --- Decorative script-accent color (for "About Us"-style script text) ---
  script-accent: '#c9a24b'            # reuses gold — script text should read as an accent, not a new hue

  focus-ring: '#c9a24b'
  focus-ring-offset: '#0d0d0d'

  disabled-fill: '#1c1c1c'
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

  # --- New: script accent font, used ONLY for small decorative overline-style 
  # phrases (e.g. "About Us", "Special Offer") — never for body copy or headings ---
  script-accent:
    fontFamily: Alex Brush
    fontSize: 22px
    fontWeight: '400'
    lineHeight: '1.2'

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
  section-gap: 80px           # kept at the tightened value from earlier revisions
  section-gap-mobile: 48px

image-ratios:
  portrait: '4:5'
  square: '1:1'
  service-card: '1:1'         # circular-crop service icons in the LUXE reference are square-cropped then masked round
---

## Brand & Style — REVISI TOTAL (menggantikan "Ethereal Stillness")

**Perubahan arah:** klien menolak sistem quiet-luxury minimalis sebelumnya. Sistem baru ini — **"Noir & Gold"** — mengadopsi bahasa visual dari referensi LUXE Salon & Studio **99% mirip**, TERMASUK layout, komponen dekoratif (wavy divider, feature-icon row, ornate stat badge, circular service card, special-offer-style banner), dan penggunaan gold liberal. Satu-satunya penyimpangan yang disengaja dari referensi: **background tetap keluarga hitam** (bukan hijau), sesuai keputusan final klien.

## Background — Gradient Hitam (bukan flat, bukan hijau)

**Revisi final:** background BUKAN flat single-tone lagi — pakai **gradient halus** dari hitam pekat ke hitam sedikit lebih terang, meniru kedalaman visual yang di referensi dicapai lewat gradasi hijau tua-ke-hijau-gelap.

- Base gradient: `linear-gradient(180deg, #000000 0%, #0d0d0d 95%)` — atau radial gradient dengan pusat sedikit lebih terang (`#141414`) memudar ke tepi (`#000000`), tergantung section (radial cocok untuk Hero yang punya focal point foto, linear cocok untuk section dengan layout horizontal rata)
- Variasi antar section: tetap gunakan `surface-container` hingga `surface-container-highest` (dari token yang sudah ada) sebagai lapisan card DI ATAS gradient background, bukan mengganti gradient itu sendiri
- JANGAN pakai warna hijau atau warna lain di luar keluarga hitam/gold untuk background — gradient ini murni variasi gelap-terang dalam 1 hue netral



## Colors

- **Surface (hitam bertingkat):** `surface` (#0d0d0d, background utama) hingga `surface-container-highest` (#2c2c2c, untuk card yang perlu "naik" dari background). Ini menggantikan single-charcoal-tone sebelumnya dengan gradasi bertingkat, agar card/section punya kedalaman tanpa perlu shadow drastis.
- **Gold (`tertiary` #C9A24B):** Berbeda dari Bronze sebelumnya yang sengaja langka, Gold di sistem ini **dipakai liberal** — border dekoratif, icon, CTA, teks aksen. Ini konsisten dengan referensi yang menggunakan emas di hampir setiap section.
- **Script accent:** warna gold yang sama dipakai untuk teks script font, menjaga tetap 1 keluarga warna aksen meski dipakai di banyak tempat.

## Typography

- **Headline:** Playfair Display menggantikan Bodoni Moda — masih high-contrast serif, tapi weight 600 (bukan 400) untuk kesan lebih tegas/mewah sesuai referensi.
- **Script accent (BARU):** font kaligrafi (contoh: Alex Brush, atau Google Fonts script family sejenis) dipakai HANYA untuk frasa overline dekoratif pendek (misal "About Us", "Special Offer", "Our Services") — tidak pernah untuk body copy atau heading utama, karena keterbacaan script buruk di teks panjang.
- **Body:** Manrope dipertahankan — cukup netral untuk mendukung headline yang sekarang lebih dekoratif.

## Layout & Spacing

- **Section divider WAVY:** setiap transisi antar section menggunakan garis lengkung organik (SVG path), dihias garis tipis gold di sepanjang kurva — MENGGANTIKAN pendekatan "diagonal cut sharp" dari sistem sebelumnya.
- **Botanical ornament liberal:** ilustrasi daun/leaves (line-art atau silhouette gold/gelap) ditempatkan di pojok kiri-kanan BANYAK section, bukan cuma 1-2 section seperti sistem lama — konsisten dengan referensi yang penuh elemen daun di tiap sudut.
- Section-gap tetap memakai nilai yang sudah dirapatkan sebelumnya (80px desktop / 48px mobile) — keputusan spacing tidak berubah, hanya visual language di sekitarnya.

## Elevation & Depth — BERUBAH TOTAL dari sistem lama

- **Ada shadow/glow:** card, foto, dan badge (misal badge "5+ Tahun") menggunakan `box-shadow` halus gold-tinted (bukan hitam generik) untuk memberi kesan "berkilau", MENGGANTIKAN aturan "no shadow" sebelumnya.
- **Overlay modal:** boleh pakai semi-transparent dark overlay (bukan solid fill penuh seperti sebelumnya).

## Shapes — BERUBAH TOTAL dari sistem lama

- **Rounded, bukan sharp.** Button jadi pill/rounded-rectangle. Card punya border-radius besar. Foto service di-crop **circular** (bulat penuh), bukan rectangular sharp seperti sebelumnya.
- **Ornate frame:** elemen penting (misal badge statistik "X+ Tahun Pengalaman") dibungkus frame dekoratif dengan sudut melengkung bergaya "certificate/plaque", dihias garis gold tipis di tepinya.
- **Wavy divider** (lihat Layout & Spacing) juga bagian dari shape language baru ini.

## Components

- **Buttons:** Pill-shaped (border-radius penuh), solid Gold dengan teks hitam (`on-tertiary`), ATAU outline Gold dengan teks Gold. Hover: sedikit brightness increase + subtle glow, bukan cuma color invert datar.
- **Cards (Layanan):** Foto circular di bagian atas card, rounded-rectangle card body di bawahnya, border tipis gold, subtle shadow gold-tinted. Badge icon kecil (misal gunting untuk Hair Styling) di-overlay di tepi foto circular.
- **Icon:** Line-art gold, boleh lebih dekoratif/ornate (crown, lotus-style) dibanding sistem lama yang strict geometris minimal.
- **Navigation:** Tetap top-bar, tapi CTA utama ("Book Appointment"/"Chat WhatsApp") sekarang jadi solid gold pill button yang menonjol — bukan sekadar teks berwarna seperti sistem lama.
- **Statistik/Badge:** Ornate frame melengkung (lihat referensi "5+ Years of Excellence") — bukan angka polos dengan `display-lg` seperti sistem lama.

## Botanical Background Decoration (detail implementasi)

Berbeda dari sistem lama yang membatasi botanical ornament ke 1 elemen kecil per section, sistem Noir & Gold ini secara sengaja memakai ilustrasi daun/bunga sebagai **elemen background berulang**, konsisten dengan referensi LUXE:

- **Bentuk:** siluet daun tropis (monstera, palem, atau daun panjang melengkung) DAN/ATAU bunga garis-tunggal (single-line floral, bukan bunga penuh detail realistis) — pilih 2-3 motif saja dan pakai berulang, jangan tiap section beda motif (supaya tetap terasa 1 keluarga visual).
- **Warna:** DUA varian —
  1. Gold outline tipis (opacity 15-25%) untuk daun/bunga yang ditempatkan dekat elemen penting (dekat heading, dekat CTA) — supaya terasa "menghias", bukan menyaingi
  2. Hitam/charcoal lebih gelap dari background (`surface-container-highest` di atas `surface`, opacity 30-40%) untuk siluet besar di pojok/tepi jauh dari teks — memberi kedalaman tanpa mengganggu keterbacaan
- **Penempatan:** pojok kiri-atas dan kanan-bawah tiap section besar (Hero, Layanan, Kontak) — mengikuti pola referensi yang taruh daun di pojok kiri-bawah Hero dan kanan-atas/bawah section lain.
- **Ukuran:** cukup besar untuk terlihat jelas sebagai elemen dekoratif (bukan cuma "detail kecil yang ditemukan" seperti sistem lama) — target 200-400px lebar di desktop, proporsional lebih kecil di mobile.
- **Layering:** botanical ini SELALU di belakang konten (z-index rendah, `pointer-events: none`), boleh sedikit overflow keluar batas section untuk kesan organik/tidak kaku.

## Gold Shaping — Penegasan (revisi dari draft awal)

Border dan garis gold di seluruh sistem ini perlu lebih **tegas/jelas terlihat**, bukan sekadar aksen tipis:

- **Border card & frame:** naikkan dari 1px ke **1.5-2px**, warna gold solid (bukan opacity rendah) — card, badge statistik, dan frame foto harus punya outline gold yang jelas terlihat dari jarak normal, bukan cuma kelihatan saat diperhatikan dekat.
- **Wavy divider:** garis gold di sepanjang kurva section juga dipertegas ke 2px, dengan sedikit glow/shadow gold halus di sekelilingnya (bukan garis polos datar).
- **Icon:** stroke gold pada icon line-art dipertebal sedikit (dari hairline ke medium-weight stroke) supaya tetap terbaca jelas meski di atas background gelap bertekstur botanical.
- **Ornate frame (badge statistik, dst.):** sudut melengkung frame ini harus benar-benar terlihat sebagai bingkai emas yang jelas — bukan garis tipis nyaris tak terlihat.

**Prinsip keseluruhan revisi ini:** karena background sekarang lebih "ramai" (ada botanical decoration), elemen gold struktural (border, divider, icon) perlu dipertegas supaya tidak "tenggelam" di antara dekorasi — gold harus tetap jadi elemen yang paling menonjol/mengarahkan mata, bukan bersaing sama rata dengan ornamen daun di belakangnya.

## Logo Usage — FINAL: Header/Navbar, Agak Besar, Foto Hero Talent Tetap Ada

**Keputusan final klien** (mengoreksi draft "hanya di Hero" sebelumnya): logo tetap tampil di **header/navbar**, bukan dipindah ke tengah di atas heading. Ukurannya "agak besar" — lebih besar dari logo navbar standar (~72-90px tinggi, bukan 40-56px kecil seperti draft awal), tapi tetap di posisi kiri-atas header, sejajar dengan menu navigasi di kanannya. Foto Hero (circular crop talent pijat) tetap dipertahankan seperti yang sudah berjalan — logo TIDAK menggantikan atau memindahkan foto ini.

- Posisi: kiri-atas header, sejajar horizontal dengan menu navigasi (Home, Tentang Kami, Kontak, dst.) di sisi kanan
- Ukuran: ~72-90px tinggi di desktop (cukup besar untuk terbaca jelas termasuk tagline "Family Massage and Reflexy"), ~50-60px di mobile
- Background: transparan, menyatu dengan `surface` (#0d0d0d) header
- Logo TIDAK muncul di footer (tetap sesuai keputusan sebelumnya — footer pakai teks brand biasa, bukan gambar logo)
- Warna logo (merah/gold/hijau/biru) tetap dibiarkan apa adanya sebagai brand mark resmi — aturan gold-only tetap berlaku untuk semua elemen UI lain di luar logo ini
- Foto Hero: tetap circular crop seperti yang sudah diimplementasikan, di sisi kanan heading, TIDAK diubah oleh perubahan posisi logo ini

## Komponen Tambahan — Adopsi 99% dari Referensi LUXE

Komponen berikut belum ada di draft sebelumnya, sekarang diadopsi mengikuti referensi (tetap dengan background hitam, bukan hijau):

### Feature Icon Row (baru)
Baris 4 kolom berisi icon line-art gold + label singkat + deskripsi 1 baris, ditempatkan tepat di bawah Hero (sebelum wavy divider ke section berikutnya) — mengikuti pola "PREMIUM QUALITY / EXPERT STYLISTS / LUXURIOUS EXPERIENCE / CUSTOMER SATISFACTION" di referensi. Untuk The King's Reflexology, adaptasi kontennya jadi 4 value proposition bisnis ini, misal: "Terapis Berpengalaman", "Pijat Keluarga", "Teknik Tradisional", "Kepuasan Pelanggan" — 4 poin yang sudah ada nuansanya di Misi (Section 5.3 PRD), diringkas jadi label pendek untuk row ini.

### Ornate Stat Badge (baru)
Frame melengkung dekoratif berisi icon + angka besar + label kecil, ditempatkan sejajar foto di section Tentang Kami — mengikuti pola "5+ Years of Excellence" di referensi. Untuk The King's Reflexology: gunakan "20+ Tahun Pengalaman" (dari sejarah 2003-sekarang), dengan icon yang relevan (misal telapak tangan/kaki, bukan gunting seperti referensi salon).

### Special-Offer-Style Banner (adaptasi dari Member CTA)
Section Member (Section 5.2 PRD) di-reskin mengikuti pola banner "Special Offer" di referensi — frame kotak dengan border gold tipis, teks script accent kecil di atas heading ("Member" jadi script, bukan label-caps polos), foto di sisi kanan, badge lingkaran kecil (bisa dipakai untuk menampilkan icon member/star alih-alih "20% OFF" karena member benefit bukan diskon persentase tunggal).

### Footer — Row Style 4 Kolom (revisi dari draft footer sebelumnya)
Footer sebelumnya sempat disederhanakan ke 2 kolom (Brand+Kontak, Cabang) untuk mengurangi redundansi dengan navbar. Sekarang mengikuti gaya referensi: baris horizontal 4 kolom — **Lokasi, Telepon, Email, Sosial Media** (ikon Facebook/Instagram/WhatsApp/YouTube jika ada) — DENGAN CATATAN: karena The King's Reflexology punya **3 cabang** (bukan 1 lokasi seperti referensi), kolom "Lokasi" perlu tetap menampung 3 alamat (bisa sebagai 3 baris ringkas di kolom itu, bukan 1 alamat tunggal seperti referensi) — jangan hilangkan data 3 cabang demi ikut pola referensi mentah-mentah.

### Promo Section (BARU — Section 5.8 PRD)
Beda dari "Special-Offer-Style Banner" (yang isinya 1 CTA Member tetap), section Promo ini menampung **beberapa promo aktif sekaligus** yang berganti mingguan — jadi styling-nya grid/carousel card, bukan 1 banner statis:

- **Layout:** grid 2-3 kolom (desktop), 1 kolom stack (mobile) — tiap promo 1 card, BUKAN satu banner besar tunggal seperti "Special Offer" di referensi (karena bisa ada lebih dari 1 promo aktif bersamaan)
- **Card style:** ornate frame gold tipis (1.5-2px) sama seperti card Layanan, dengan badge kecil "PROMO" di pojok card (label-caps, background gold solid, teks hitam) sebagai penanda visual cepat
- **Header section:** script accent kecil ("Promo Spesial" atau sejenis) di atas heading utama, konsisten dengan pola "About Us"/"Special Offer" di referensi
- **Per-card:** judul promo (`headline-md` diperkecil, atau ukuran khusus card), deskripsi singkat, periode berlaku (`label-caps` kecil, warna muted), CTA pill-button gold ke WA cabang terkait
- **Empty state:** section ini TIDAK dirender sama sekali (termasuk dari navbar) kalau tidak ada promo aktif — bukan ditampilkan kosong dengan placeholder "belum ada promo"
- **Posisi:** setelah Member CTA, sebelum Tentang Kami — sesuai urutan navbar baru (Home, Layanan, Member, Promo, Tentang Kami, Kontak)

## Yang TETAP dipertahankan dari sistem lama (tidak semua diganti)

- Section-gap yang sudah dirapatkan (80px/48px)
- Struktur PRD (navigasi, 3 cabang, member info, dst.) — ini soal konten, tidak berubah
- Aturan accessibility dasar (focus-ring, kontras AA, disabled state) — prinsipnya sama, cuma warnanya disesuaikan ke palet baru
