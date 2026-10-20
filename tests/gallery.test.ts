import { describe, expect, it } from "vitest";
import { galleryItems } from "../src/data/gallery";

describe("gallery content", () => {
  it("contains all requested photos and captions", () => {
    expect(galleryItems).toHaveLength(8);
    expect(galleryItems.map((item) => item.src)).toEqual([
      "/foto-eksterior.webp",
      "/foto-lorong-interior.webp",
      "/foto-signage-reflexology-room.webp",
      "/foto-ruang-perawatan.webp",
      "/foto-proses-bekam.webp",
      "/galaxy (1).webp",
      "/galaxy (2).webp",
      "/galaxy (3).webp",
    ]);
    expect(galleryItems.map((item) => item.caption)).toEqual([
      "Exterior",
      "Menyambut Anda",
      "Ruang Reflexology",
      "Ruang Perawatan",
      "Terapi Bekam",
      "Resepsionis Grand Galaxy",
      "Grand Galaxy di Malam Hari",
      "Signage Grand Galaxy",
    ]);
  });

  it("defines intrinsic dimensions and accessible alt text", () => {
    for (const item of galleryItems) {
      expect(item.width).toBeGreaterThan(0);
      expect(item.height).toBeGreaterThan(0);
      expect(item.alt.length).toBeGreaterThan(0);
    }
  });
});
