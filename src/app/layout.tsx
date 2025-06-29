import type { Metadata } from "next";
import "@/styles/global.css";
const URL = "https://cercle-des-vignerons.vercel.app";
const pictures = [
  {
    url: `${URL}/images/background_home.webp`,
    width: 2206,
    height: 1518,
    alt: "tonneaux",
  },
  {
    url: `${URL}/images/bordeaux.webp`,
    width: 1025,
    height: 1025,
    alt: "fake saint emilion",
  },
  {
    url: `${URL}/images/bourgogne.webp`,
    width: 1024,
    height: 1024,
    alt: "fake bourgogne city",
  },
  {
    url: `${URL}/images/champagne.webp`,
    width: 1024,
    height: 1024,
    alt: "fake champagne city",
  },
  {
    url: `${URL}/images/rhone.webp`,
    width: 1024,
    height: 1024,
    alt: "fake rhone city",
  },
  {
    url: `${URL}/images/yoan.webp`,
    width: 1024,
    height: 1024,
    alt: "negociant",
  },
  {
    url: `${URL}/images/luc.webp`,
    width: 800,
    height: 1200,
    alt: "director",
  },
  {
    url: `${URL}/logo/white_logo.svg`,
    width: 400,
    height: 400,
    alt: "cercle des vignerons",
  },
  {
    url: `${URL}/logo/arrow-down.svg`,
    width: 200,
    height: 200,
    alt: "arrow",
  },
];

export const metadata: Metadata = {
  title: "Cercle Des Vignerons",
  description:
    "Découvrez le Cercle des Vignerons à Saint-Émilion, en Gironde, et les vins de Yoan et Luc Lacombe : terroirs d’exception, tradition et passion du vin.",
  openGraph: {
    title: "Cercle Des Vignerons",
    description:
      "Découvrez le Cercle des Vignerons et nos vins avec Yoan et Luc Lacombe, entre terroirs d’exception et passion du vin.",
    images: pictures.map((image) => image),
    locale: "fr_FR",
    type: "website",
    siteName: "Cercle des Vignerons",
    url: URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Cercle Des Vignerons",
    description:
      "Découvrez le Cercle des Vignerons et nos vins avec Yoan et Luc Lacombe, entre terroirs d’exception et passion du vin.",
    images: pictures.map((image) => image),
  },
  icons: {
    icon: { url: "/logo/white_logo_without_text.webp", type: "image/webp" },
    apple: { url: "/logo/white_logo_without_text.webp", type: "image/webp" },
    shortcut: { url: "/logo/white_logo_without_text.webp", type: "image/webp" },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  keywords: [
    "Cercle des Vignerons",
    "vigne",
    "vins",
    "wine",
    "bouteille",
    "rouge",
    "Gironde",
    "Saint Denis de Pile",
    "Saint emilion",
    "Pomerol",
    "Libourne",
    "Luc Lacombe",
    "Yoan Lacombe",
  ],
  creator: "Rossignol Alex",
  category: "wine",
  other: {
    legal: `${URL}/mentionsLegalCercleDesVignerons.pdf`,
    privacyPolicy: `${URL}/Politique_de_confidentialite_Cercle_des_Vignerons.pdf`,
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          name: "Luc Lacombe",
          jobTitle: "Président Cercle Des Vignerons",
          telephone: "06 85 26 94 30",
          email: "cerclevigneron@aol.fr",
        },
        {
          "@type": "Person",
          name: "Yoan Lacombe",
          jobTitle: "Négociant en vins",
          email: "cerclevigneron@aol.fr",
        },
        {
          "@type": "Organization",
          name: "Cercle des Vignerons",
          url: URL,
          logo: `${URL}/logo/white_logo.svg`,
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+33685269430",
            contactType: "Customer Service",
            email: "cerclevigneron@aol.fr",
          },
        },
      ],
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
