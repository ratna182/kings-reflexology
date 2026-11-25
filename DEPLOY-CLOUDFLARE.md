# Panduan Deploy ke Cloudflare Pages

Proyek ini sudah disiapkan sebagai **static export** (`out/`), lengkap dengan `wrangler.toml` dan `public/_headers`.

## 0. Kondisi saat ini

- `main` di GitHub sudah berisi hasil migrasi.
- Domain `www.thekingsreflexology.com` masih diarahkan ke **Vercel** (CNAME `vercel-dns`), DNS dikelola di **Hostinger** (`dns-parking.com`).
- Jangan matikan Vercel dulu sampai Cloudflare terbukti jalan.

## 1. Cara A — Deploy lewat GitHub (disarankan, auto-deploy tiap push)

1. Buka https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Pilih repo `ratna182/kings-reflexology`, branch **main**.
3. Isi konfigurasi build:
   - Framework preset: **Next.js (Static HTML Export)** — kalau tidak ada, pilih **None**
   - Build command: `npm run build`
   - Build output directory: `out`
   - Environment variable: `NODE_VERSION` = `22`
4. **Save and Deploy**. Tunggu sampai status *Success*, lalu buka URL `https://<nama-project>.pages.dev`.
5. Cek halaman, gambar, dan link WhatsApp di URL `pages.dev` tersebut.

> Kalau dashboard bilang "Wrangler configuration file detected" dan field build disembunyikan, itu normal: nilainya diambil dari `wrangler.toml` (`pages_build_output_dir = "out"`).

## 2. Cara B — Deploy dari komputer (tanpa Git integration)

```bash
npx wrangler login
npx wrangler pages project create kings-reflexology --production-branch main
npm run build
npx wrangler pages deploy
```

`wrangler pages deploy` otomatis membaca `wrangler.toml` (project `kings-reflexology`, folder `out`).

## 3. Tes lokal dulu (opsional, tapi berguna)

```bash
npm run build
npx wrangler pages dev out
```

Buka `http://localhost:8788`. Ini juga menguji file `_headers` (security header) persis seperti di Cloudflare.

## 4. Pasang domain www

1. Di Cloudflare: project Pages → **Custom domains** → **Set up a custom domain** → isi `www.thekingsreflexology.com`.
2. Cloudflare akan menampilkan target CNAME, misalnya `kings-reflexology.pages.dev`.
3. Buka panel DNS **Hostinger** → kelola DNS `thekingsreflexology.com`:
   - Ubah record **CNAME** `www` dari `*.vercel-dns-*.com` menjadi `kings-reflexology.pages.dev`
   - TTL: default
4. Tunggu propagasi (5–60 menit). Cek:

```bash
nslookup www.thekingsreflexology.com
```

Harus mengarah ke `*.pages.dev` (atau IP Cloudflare), bukan Vercel lagi.

5. Untuk domain tanpa `www` (`thekingsreflexology.com`): buat **redirect 301** ke `https://www.thekingsreflexology.com` di Hostinger (menu Redirect), karena situs ini memakai `www` sebagai canonical.

## 5. Verifikasi setelah domain aktif

```bash
curl -I https://www.thekingsreflexology.com
curl -I https://www.thekingsreflexology.com/sitemap.xml
```

Yang harus terlihat:

- `content-security-policy`, `x-frame-options: DENY`, `x-content-type-options: nosniff`
- `cache-control: public, max-age=31536000, immutable` untuk aset `/_next/static/...`
- `/sitemap.xml` balas `200` dengan `content-type: application/xml`
- `/api/vitals` balas `404` (memang dihapus, bukan error)

Terakhir: buka situs di HP, cek gambar gallery, jam operasional, dan tombol reservasi WhatsApp.

## 6. Kalau ada masalah

| Gejala | Penyebab umum | Solusi |
|---|---|---|
| Build gagal: `next start` tidak dikenal | script lama | sudah dihapus; pastikan build command `npm run build` |
| Build gagal saat ambil font Google | jaringan runner | redeploy; build butuh akses `fonts.googleapis.com` |
| Halaman tanpa CSS/JS | output dir salah | pastikan `out`, bukan `.next` |
| Header keamanan tidak muncul | `_headers` tidak ter-upload | cek `out/_headers` ada setelah build |
| Domain masih ke Vercel | CNAME belum diubah / cache DNS | tunggu propagasi, coba mode incognito |

## 7. Rollback

Kalau ada yang rusak: kembalikan CNAME `www` di Hostinger ke nilai Vercel semula. Situs lama tetap hidup selama record Vercel tidak dihapus.

## 8. Beres-beres

Setelah Cloudflare stabil beberapa hari, hapus project Vercel dan branch `cloudflare-migration` di GitHub (branch itu sudah tidak dipakai, isinya sudah masuk `main`).
