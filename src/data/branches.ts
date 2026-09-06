export type Branch = {
  id: string;
  name: string;
  city: string;
  area: string;
  phoneDisplay: string;
  waLink: string;
  waText: string;
  address: string;
  postalCode: string;
  mapsUrl: string;
  geo: { latitude: number; longitude: number };
  hours?: string[];
};

export const branches: Branch[] = [
  {
    id: "lokasi-yasmin-bogor",
    name: "The King's Reflexology Yasmin",
    city: "Bogor",
    area: "Yasmin",
    phoneDisplay: "0821-2974-3449",
    waLink: "https://wa.me/6282129743449",
    waText:
      "Halo The King's Reflexology Yasmin, saya ingin bertanya tentang layanan dan harga pijat refleksi.",
    address:
      "Jl. KH. R. Abdullah Bin Nuh, Ruko Taman Yasmin Sektor VI No. 194, Curugmekar, Kec. Bogor Barat, Kota Bogor, Jawa Barat 16113",
    postalCode: "16113",
    mapsUrl: "https://maps.app.goo.gl/v64smGAg67MD19fv7",
    geo: { latitude: -6.5608122, longitude: 106.7663192 },
    hours: ["Senin–Jumat 09.00–21.00", "Sabtu–Minggu 09.00–21.30"],
  },
  {
    id: "lokasi-bukit-cimanggu-bogor",
    name: "The King's Reflexology Bukit Cimanggu City",
    city: "Bogor",
    area: "Bukit Cimanggu City",
    phoneDisplay: "0852-8295-3626",
    waLink: "https://wa.me/6285282953626",
    waText:
      "Halo The King's Reflexology Bukit Cimanggu City, saya ingin bertanya tentang layanan dan harga pijat refleksi.",
    address:
      "Blok Bukit Cimanggu No. 5, Ruko Jl. Bukit Cimanggu City Raya, RT.02/RW.13, Cibadak, Tanah Sareal, Kota Bogor, Jawa Barat 16165",
    postalCode: "16165",
    mapsUrl: "https://maps.app.goo.gl/PNT9YSzSm1kvUtGbA",
    geo: { latitude: -6.5541336, longitude: 106.782655 },
    hours: ["Senin–Minggu 09.00–21.00"],
  },
  {
    id: "lokasi-grand-galaxy-bekasi",
    name: "The King's Reflexology Grand Galaxy",
    city: "Bekasi",
    area: "Grand Galaxy",
    phoneDisplay: "0813-2180-078",
    waLink: "https://wa.me/628132180078",
    waText:
      "Halo The King's Reflexology Grand Galaxy, saya ingin bertanya tentang layanan dan harga pijat refleksi.",
    address:
      "Ruko Grand Galaxy City, Jl. Boulevard Raya, Blok RGA No. 95, Bekasi Selatan, Kota Bekasi, Jawa Barat",
    postalCode: "17147",
    mapsUrl: "https://maps.app.goo.gl/pGpg7e9gEpZxTWBG6",
    geo: { latitude: -6.2737509, longitude: 106.9738418 },
  },
];

export function waLinkWithMessage(branch: Branch): string {
  return `${branch.waLink}?text=${encodeURIComponent(branch.waText)}`;
}

export const companyEmail = "info@thekingsreflexology.com";

export const defaultBranch = branches[0];