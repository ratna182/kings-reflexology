export type Branch = {
  id: string;
  name: string;
  city: string;
  area: string;
  phoneDisplay: string;
  waLink: string;
  waText: string;
  address: string;
  mapsUrl: string;
  hours?: string[];
};

export const branches: Branch[] = [
  {
    id: "lokasi-yasmin-bogor",
    name: "Kings Refleksi Yasmin",
    city: "Bogor",
    area: "Yasmin",
    phoneDisplay: "0821-2974-3449",
    waLink: "https://wa.me/6282129743449",
    waText:
      "Halo Kings Refleksi Yasmin, saya ingin bertanya tentang layanan dan harga pijat refleksi.",
    address:
      "Jl. KH. R. Abdullah Bin Nuh, Ruko Taman Yasmin Sektor VI No. 194, Curugmekar, Kec. Bogor Barat, Kota Bogor, Jawa Barat 16113",
    mapsUrl: "https://maps.app.goo.gl/RXyjjYU3oyzZehAS9",
    hours: ["Senin–Jumat 09.00–21.00", "Sabtu–Minggu 09.00–21.30"],
  },
  {
    id: "lokasi-bukit-cimanggu-bogor",
    name: "Kings Refleksi Bukit Cimanggu City",
    city: "Bogor",
    area: "Bukit Cimanggu City",
    phoneDisplay: "0852-8295-3626",
    waLink: "https://wa.me/6285282953626",
    waText:
      "Halo Kings Refleksi Bukit Cimanggu City, saya ingin bertanya tentang layanan dan harga pijat refleksi.",
    address:
      "Blok Bukit Cimanggu No. 5, Ruko Jl. Bukit Cimanggu City Raya, RT.02/RW.13, Cibadak, Tanah Sareal, Kota Bogor, Jawa Barat 16165",
    mapsUrl: "https://maps.app.goo.gl/auEqteUvVwc8nJUZ9",
    hours: ["Senin–Minggu 09.00–21.00"],
  },
  {
    id: "lokasi-grand-galaxy-bekasi",
    name: "Kings Refleksi Grand Galaxy",
    city: "Bekasi",
    area: "Grand Galaxy",
    phoneDisplay: "0813-2180-078",
    waLink: "https://wa.me/628132180078",
    waText:
      "Halo Kings Refleksi Grand Galaxy, saya ingin bertanya tentang layanan dan harga pijat refleksi.",
    address: "PXGF+6J7, Jaka Setia, Kec. Bekasi Sel., Kota Bekasi, Jawa Barat",
    mapsUrl: "https://maps.app.goo.gl/zxU7GXKLqHG5komk6",
  },
];

export function waLinkWithMessage(branch: Branch): string {
  return `${branch.waLink}?text=${encodeURIComponent(branch.waText)}`;
}

export const companyEmail = "info@kingsrefleksi.com";

export const defaultBranch = branches[0];