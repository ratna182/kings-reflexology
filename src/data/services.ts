export type Service = {
  slug: string;
  name: string;
  image?: string;
  summary: string;
  description: string;
};

export const services: Service[] = [
  {
    slug: "massage",
    name: "Massage",
    image: "/layanan-massage.webp",
    summary: "Teknik manipulasi otot & kulit untuk relaksasi dan aliran darah.",
    description:
      "Massage adalah teknik perawatan tubuh yang melibatkan manipulasi jaringan tubuh, terutama otot dan kulit, untuk meredakan ketegangan, mengurangi rasa sakit, dan meningkatkan aliran darah. Pijat dilakukan dengan menekan, menggosok, atau memijat tubuh dengan tangan, jari, atau alat tertentu, tergantung pada jenis pijat yang dilakukan. Selain memberikan relaksasi, pijat juga dapat memberikan manfaat kesehatan lainnya.",
  },
  {
    slug: "reflexology",
    name: "Reflexology",
    image: "/layanan-reflexology.webp",
    summary: "Pijat titik refleksi di kaki, tangan, dan telinga untuk keseimbangan tubuh.",
    description:
      "Reflexology adalah bentuk terapi pijat yang berfokus pada titik-titik tertentu di tubuh, terutama di kaki, tangan, dan telinga, yang dipercaya memiliki hubungan langsung dengan organ atau sistem tubuh lainnya. Teknik ini bertujuan merangsang titik-titik refleksi tersebut untuk meningkatkan keseimbangan tubuh, meredakan ketegangan, dan memperbaiki kesehatan secara keseluruhan.",
  },
  {
    slug: "bekam",
    name: "Bekam",
    image: "/layanan-bekam.webp",
    summary: "Terapi hisap tradisional untuk sirkulasi dan detoksifikasi tubuh.",
    description:
      "Bekam adalah salah satu metode pengobatan tradisional yang menggunakan alat untuk menciptakan hisapan pada kulit, dengan tujuan meningkatkan sirkulasi darah, mengurangi nyeri, dan mengeluarkan racun atau zat-zat berbahaya dari tubuh. Bekam telah digunakan dalam berbagai budaya, terutama pengobatan tradisional Tiongkok, Timur Tengah, dan sebagian wilayah Asia, dan dikenal dengan nama yang berbeda-beda, seperti hijama dalam tradisi Islam.",
  },
  {
    slug: "scrub-massage",
    name: "Scrub Massage",
    image: "/layanan-scrub-massage.webp",
    summary: "Lulur tradisional Indonesia untuk kulit halus dan segar.",
    description:
      "Scrub massage adalah salah satu metode perawatan tubuh tradisional Indonesia yang digunakan untuk membersihkan, menghaluskan, dan meremajakan kulit. Lulur melibatkan pemakaian campuran bahan alami seperti rempah-rempah dan tumbuhan, yang dioleskan ke seluruh tubuh dan dipijat dengan lembut sebelum dibilas dengan air.",
  },
  {
    slug: "ear-candle",
    name: "Ear Candle",
    image: "/layanan-ear-candle.webp",
    summary: "Terapi lilin telinga untuk membersihkan dan meredakan tekanan telinga.",
    description:
      "Ear candle adalah sebuah alat yang digunakan dalam praktik yang dikenal sebagai terapi lilin telinga. Terapi ini dipercaya membantu membersihkan kotoran telinga, mengurangi rasa tertekan, atau bahkan meningkatkan kesehatan saluran telinga. Prosesnya melibatkan lilin panjang dengan salah satu ujung dimasukkan ke telinga dan ujung lainnya dinyalakan.",
  },
  {
    slug: "totok-wajah",
    name: "Totok Wajah",
    image: "/layanan-totok-wajah.webp",
    summary: "Akupresur wajah dari tradisi Tiongkok untuk sirkulasi dan energi Chi.",
    description:
      "Totok wajah adalah salah satu teknik perawatan wajah yang berasal dari tradisi pengobatan Tiongkok. Teknik ini melibatkan pemijatan atau penekanan pada titik-titik tertentu di wajah untuk merangsang aliran energi (Chi) dan meningkatkan sirkulasi darah. Umumnya dilakukan dengan jari tangan atau alat bantu, dengan gerakan yang lembut namun terarah oleh terapis yang berpengalaman.",
  },
];