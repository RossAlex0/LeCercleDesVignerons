export type WineDomain = {
  id: number;
  name: string;
  varieties: string[];
  description: string;
  fullDescription: string;
  appellations: string[];
  image: string;
  specificity: string;
};

export const wineDomains: WineDomain[] = [
  {
    id: 1,
    name: "Bordeaux",
    varieties: ["Merlot", "Cabernet Sauvignon", "Cabernet Franc"],
    description: "Région réputée pour ses grands crus rouges d'assemblage.",
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
