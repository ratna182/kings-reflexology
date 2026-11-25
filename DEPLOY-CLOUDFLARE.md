# Panduan Deploy ke Cloudflare

Proyek ini sudah disiapkan sebagai **static export** (`out/`) dan dikonfigurasi untuk **Cloudflare Workers Static Assets** — itu jenis project yang kamu buat di dashboard (build `npm run build`, deploy `npx wrangler deploy`).

## 0. Kondisi saat ini

- `main` di GitHub sudah berisi hasil migrasi.
- `wrangler.toml` menyajikan folder `out` sebagai static assets.
- `public/_headers` berisi security header (ikut tersalin ke `out/_headers`).
- Domain `www.thekingsreflexology.com` masih di Vercel, DNS di Hostinger. **Jangan ubah DNS dulu** sampai versi Cloudflare terbukti jalan.

## 1. Deploy (dashboard yang sudah kamu buat)

1. Buka project di **Workers & Pages** → tab **Deployments**.
2. Klik **Retry build** / **Deploy** pada build `main` (config sudah diperbaiki, build lama akan gagal).
3. Pastikan setelan build:
   - Build command: `npm run build`
   - Deploy command: `npx wrangler deploy`
   - Root directory: `/`
   - Build variable (opsional): `NODE_VERSION` = `22`
4. Setelah *Success*, buka URL `https://kings-reflexology.<subdomain>.workers.dev`.
5. Cek halaman, gambar gallery, jam operasional, dan tombol WhatsApp.

> Jangan mengisi "Build output directory" — untuk Workers, folder output diambil dari `wrangler.toml` (`[assets] directory = "./out"`).

## 2. Deploy dari komputer (alternatif)

```bash
npx wrangler login
npm run build
npx wrangler deploy
```

Kalau mau cek konfigurasi tanpa upload:

```bash
npx wrangler deploy --dry-run
```

## 3. Tes lokal

```bash
npm run build
npx wrangler dev
```

Buka `http://localhost:8787`. Ini menguji static assets + `_headers` persis seperti di Cloudflare.

## 4. Pasang domain www

Custom Domain di Workers **wajib** domainnya aktif di Cloudflare (nameserver pindah ke Cloudflare). DNS saat ini di Hostinger, jadi:

1. Cloudflare dashboard → **Add a domain** → masukkan `thekingsreflexology.com` → pilih paket **Free**.
2. Cloudflare memberi 2 nameserver (mis. `xxx.ns.cloudflare.com`). Buka **Hostinger → Domain → Nameserver**, ganti kedua nameserver ke nilai dari Cloudflare.
3. Tunggu status domain di Cloudflare menjadi **Active** (biasanya 1–24 jam). Cloudflare akan meng-import record DNS lama; pastikan record `www` (CNAME ke Vercel) masih ada agar situs lama tetap hidup.
4. Setelah aktif: project Worker → **Settings** → **Domains & Routes** → **Add** → **Custom Domain** → `www.thekingsreflexology.com` → **Add**. DNS record dibuat otomatis.
5. Redirect apex ke www: **Rules** → **Redirect Rules** → buat rule `thekingsreflexology.com/*` → `https://www.thekingsreflexology.com/$1` (301). Tambahkan dulu proxied `A` record `@` → `192.0.2.0` (placeholder, tidak pernah dipakai).
6. Baru setelah `www` di Cloudflare jalan, hapus CNAME `www` ke Vercel.

## 5. Verifikasi setelah domain aktif

```bash
curl -I https://www.thekingsreflexology.com
curl -I https://www.thekingsreflexology.com/sitemap.xml
```

Yang harus terlihat:

- `content-security-policy`, `x-frame-options: DENY`, `x-content-type-options: nosniff`
- `cache-control: public, max-age=31536000, immutable` untuk `/_next/static/...`
- `/sitemap.xml` balas `200` dengan `content-type: application/xml`
- `/api/vitals` balas `404` (memang dihapus)

Terakhir: buka di HP, cek gambar, jam operasional, dan tombol reservasi WhatsApp.

## 6. Troubleshooting

| Gejala | Penyebab | Solusi |
|---|---|---|
| Deploy gagal: `pages_build_output_dir` | config lama untuk Pages | sudah diganti `[assets] directory`; push lalu retry |
| Build gagal: `next start` | script lama | sudah dihapus, pakai `npm run build` |
| Halaman tanpa CSS/JS | `out/` tidak ter-upload | cek `wrangler.toml` dan log `Read N files from ./out` |
| Header keamanan tidak muncul | `_headers` tidak ikut | pastikan `out/_headers` ada setelah build |
| Domain tidak bisa ditambahkan | zona belum aktif di Cloudflare | pindahkan nameserver dulu |
| Masih tampil situs Vercel | DNS cache | tunggu propagasi, coba incognito |

Kalau **tidak mau memindahkan nameserver** ke Cloudflare: pakai **Pages** (bukan Workers) — Pages mendukung custom domain lewat CNAME dari DNS Hostinger. Tapi project yang sudah kamu buat adalah Workers, jadi panduan di atas yang berlaku.

## 7. Rollback

Kembalikan nameserver di Hostinger ke nilai semula (punya Hostinger). Situs Vercel tetap hidup selama record CNAME-nya belum dihapus.

## 8. Beres-beres

Setelah stabil beberapa hari: hapus project Vercel, dan hapus branch `cloudflare-migration` di GitHub (isinya sudah masuk `main`).
