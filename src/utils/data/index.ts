export type WineDomain = {
  id: number;
  name: string;
  varieties: string[];
  description: string;
  country_position: string;
  climat: string;
  terroirs: string[];
  fullDescription: string;
  appellations: string[];
  wine_style: string;
  image: string;
  specificity: string;
};

export type UsersCDV = {
  firstname: string;
  lastname: string;
  role: string;
  description: string;
  phone: string;
  mail: string;
  avatar: string;
};

export type CoodrinatesCDV = {
  openingDay: string;
  closingDay: string;
  openingHour: string;
  closingHour: string;
  adress: string;
  description: string;
};

export const wineDomains: WineDomain[] = [
  {
    id: 1,
    name: "Bordeaux",
    varieties: ["Merlot", "Cabernet Sauvignon", "Cabernet Franc"],
    description: "Région réputée pour ses grands crus rouges d'assemblage.",
    country_position: "Sud-Ouest",
    climat: "Océanique, humide",
    terroirs: ["Graves", "Argilo-Calcaires"],
    wine_style: "Structurés, Tanniques",
    fullDescription:
      "Le vignoble de Bordeaux, situé au sud-ouest de la France, est mondialement connu pour ses vins rouges d'assemblage complexes et équilibrés. Le terroir y est divisé en rive gauche et rive droite, avec des sols variés qui influencent la typicité des vins produits.",
    image: "/images/bordeaux.webp",
    appellations: ["Saint-Émilion", "Graves", "Pessac-Léognan", "Pomerol"],
    specificity: "C’est la plus grande région AOC de France.",
  },
  {
    id: 2,
    name: "Champagne",
    varieties: ["Pinot Noir", "Chardonnay", "Meunier"],
    description: "La seule région autorisée à produire le vin nommé Champagne.",
    country_position: "Grand Est",
    climat: "Continental, frais",
    terroirs: ["Marnes", "Calcaires"],
    wine_style: "Elégants, fins, légers",
    fullDescription:
      "Située au nord-est de la France, la Champagne est la patrie des vins effervescents les plus célèbres au monde. Le climat frais et les sols crayeux offrent des conditions idéales pour la production de vins fins, élégants et dotés d’une grande fraîcheur.",
    image: "/images/champagne.webp",
    appellations: [
      "Montagne de Reims",
      "Vallée de la Marne",
      "Côte des Blancs",
      "Côte des Bar",
    ],
    specificity: "La méthode champenoise y est née au XVIIe siècle.",
  },
  {
    id: 3,
    name: "Vallée du Rhône",
    varieties: ["Syrah", "Grenache", "Mourvèdre", "Viognier"],
    description: "Des rouges puissants et des blancs aromatiques du sud-est.",
    country_position: "Sud-Est",
    climat: "Méditerranéen au sud, tempéré au nord",
    terroirs: ["Granit (Nord)", "Galets Roulés (Sud)"],
    wine_style: "Puissants (Sud), épicés (Nord)",
    fullDescription:
      "Le vignoble de la Vallée du Rhône s'étend du sud de Lyon jusqu'à Avignon. Divisée entre Rhône nord (Syrah pure) et sud (assemblages Grenache/Syrah/Mourvèdre), elle produit des vins intenses, chaleureux et chargés en soleil. Les blancs y sont rares mais très expressifs.",
    image: "/images/rhone.webp",
    appellations: [
      "Côte-Rôtie",
      "Châteauneuf-du-Pape",
      "Hermitage",
      "Gigondas",
    ],
    specificity:
      "Le Rhône sud utilise souvent des assemblages à plus de 10 varietiess.",
  },
  {
    id: 4,
    name: "Bourgogne",
    varieties: ["Pinot Noir", "Chardonnay"],
    description: "Région de terroirs où chaque parcelle a son identité.",
    country_position: "Centre-Est",
    climat: "Climat frais",
    terroirs: ["Craie", "Calcaire"],
    wine_style: "Effervescents, secs, bruts",
    fullDescription:
      "La Bourgogne est célèbre pour sa mosaïque de climats (ou 'climats'), inscrits au patrimoine mondial. Le Pinot Noir y donne des rouges fins et complexes, tandis que le Chardonnay y brille par sa pureté et sa minéralité. Les vins sont classés par appellation, de régionale à Grand Cru.",
    image: "/images/bourgogne.webp",
    appellations: [
      "Chablis",
      "Nuits-Saint-Georges",
      "Gevrey-Chambertin",
      "Pommard",
    ],
    specificity: "La notion de ‘climat’ y est unique au monde.",
  },
];

export const usersCDV: UsersCDV[] = [
  {
    firstname: "Luc",
    lastname: "Lacombe",
    role: "Fondateur & Negociant en vin",
    description:
      "Fondateur du Cercle des Vignerons en 2001. Il a construit son parcours autour de sa passion pour le vin, les terroirs et les histoires humaines qui l'accompagnent.",
    phone: "06 85 26 94 30",
    mail: "cerclevigneron@aol.fr",
    avatar: "/images/luc.webp",
  },
  {
    firstname: "Yoan",
    lastname: "Lacombe",
    role: "Négociant en vin",
    description:
      "Animé par une vision moderne du métier, il perpétue l’héritage familial avec exigence et curiosité et un vrai sens du produit.",
    phone: "06 87 34 08 74",
    mail: "yoan.lacombe@gmail.com",
    avatar: "/images/yoan.webp",
  },
];

export const coordinatesCDV: CoodrinatesCDV = {
  openingDay: "Lundi",
  closingDay: "Vendredi",
  openingHour: "9h",
  closingHour: "18h",
  adress: "37 route de l’europe, 33910 Saint-Denis de pile",
  description:
    "Le Cercle des Vignerons est une structure locale et à taille humaine, implantée depuis plus de 20 ans en Gironde. Il se positionne comme un lieu de négoce et conseil, offrant un large éventail de vins français à des prix compétitifs. Idéal pour les amateurs de bon vin, les curieux et grands connaisseurs.",
};
