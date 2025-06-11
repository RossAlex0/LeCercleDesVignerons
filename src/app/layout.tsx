import type { Metadata } from "next";
import "@/styles/global.css";

const preloadPicture = [
  { image: "/logo/simple_white_logo.svg" },
  { image: "/images/background_home.webp" },
  { image: "/logo/white_logo.svg" },
];

export const metadata: Metadata = {
  title: "Cercle Des Vignerons",
  description:
    "Site officiel du Cercle des Vignerons de Saint-Émilion, Gironde. Découvrez les appellations viticoles de chaque région, avec une présentation détaillée des terroirs et des vins produits. Accédez également aux coordonnées pour entrer directement en contact.",
  openGraph: {
    title: "Cercle Des Vignerons",
    description:
      "Site officiel du Cercle des Vignerons de Saint-Émilion, Gironde. Découvrez les appellations viticoles de chaque région, avec une présentation détaillée des terroirs et des vins produits. Accédez également aux coordonnées pour entrer directement en contact.",
    images: preloadPicture.map((image) => image.image),
  },
  twitter: {
    title: "Cercle Des Vignerons",
    description:
      "Site officiel du Cercle des Vignerons de Saint-Émilion, Gironde. Découvrez les appellations viticoles de chaque région, avec une présentation détaillée des terroirs et des vins produits. Accédez également aux coordonnées pour entrer directement en contact.",
    images: preloadPicture.map((image) => image.image),
  },
  icons: {
    icon: "/logo/simple_white_logo.svg",
  },
  creator: "Rossignol Alex",
  other: {
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
