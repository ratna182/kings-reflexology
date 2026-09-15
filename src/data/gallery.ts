export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

export const galleryItems: GalleryItem[] = [
  {
    src: "/foto-eksterior.webp",
    alt: "Tampak depan gedung The King's Reflexology",
    caption: "Exterior",
    width: 2268,
    height: 4032,
  },
  {
    src: "/foto-lorong-interior.webp",
    alt: "Lorong interior The King's Reflexology",
    caption: "Menyambut Anda",
    width: 1086,
    height: 1448,
  },
  {
    src: "/foto-signage-reflexology-room.webp",
    alt: "Signage ruang reflexology The King's Reflexology",
    caption: "Ruang Reflexology",
    width: 900,
    height: 1600,
  },
  {
    src: "/foto-ruang-perawatan.webp",
    alt: "Ruang perawatan The King's Reflexology",
    caption: "Ruang Perawatan",
    width: 1086,
    height: 1448,
  },
  {
    src: "/foto-proses-bekam.webp",
    alt: "Proses terapi bekam di The King's Reflexology",
    caption: "Terapi Bekam",
    width: 1073,
    height: 936,
  },
];
