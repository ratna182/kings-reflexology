export type Promo = {
  id: string;
  judul: string;
  deskripsi: string;
  periodeBerlaku: string;
  cabangTerkait: string;
  ctaText: string;
};

export const promos: Promo[] = [
  {
    id: "promo-massage-gratis",
    judul: "Bekam + Massage Gratis",
    deskripsi:
      "Setiap pembelian layanan bekam, nikmati massage relaksasi 30 menit secara cuma-cuma. Berlaku untuk semua cabang.",
    periodeBerlaku: "1 – 31 September 2026",
    cabangTerkait: "semua",
    ctaText: "Pesan Sekarang",
  },
  {
    id: "promo-member-baru",
    judul: "Bonus 50 Poin Member Baru",
    deskripsi:
      "Daftar member di bulan ini dan langsung dapat 50 poin bonus — setara diskon Rp50.000 untuk kunjungan pertama.",
    periodeBerlaku: "1 – 30 September 2026",
    cabangTerkait: "semua",
    ctaText: "Daftar Member",
  },
];
