export interface Vetement {
    id: number;
    nom: string;
    prix: number;
    description: string;
    images: string[];
    quantite: number;
    taille: string;
    couleur: string;
    categorie: string;
}

export const vetements: Vetement[] = [
    {
        id: 1,
        nom: "Cella Satin",
        prix: 120,
        description: "Robe de soirée longue avec détails en dentelle, parfaite pour les événements formels.",
        images: [
            "assets/Vetments/Dresses/CellaSatinDress/CellaSatinDress1.jpeg",
            "assets/Vetments/Dresses/CellaSatinDress/CellaSatinDress2.webp",
            "assets/Vetments/Dresses/CellaSatinDress/CellaSatinDress3.jpeg",
            "assets/Vetments/Dresses/CellaSatinDress/CellaSatinDress4.webp",
            "assets/Vetments/Dresses/CellaSatinDress/CellaSatinDress5.webp",
            "assets/Vetments/Dresses/CellaSatinDress/CellaSatinDress6.jpeg"],
        quantite: 1,
        taille: "M",
        couleur: "noir",
        categorie: "robe"
    },
    {
        id: 2,
        nom: "Martine",
        prix: 98,
        description: "This is a flattering maxi tube dress with double-layer fabric for a supportive fit. It’s made with Contour — luxe, ultra-flattering fabric coveted for its smoothing effect and second-skin feel. Nothing more essential",
        images: [
            "assets/Vetments/Dresses/MartineDress/MartineDress1.webp",
            "assets/Vetments/Dresses/MartineDress/MartineDress2.webp",
            "assets/Vetments/Dresses/MartineDress/MartineDress3.jpeg",
            "assets/Vetments/Dresses/MartineDress/MartineDress4.jpeg",
            "assets/Vetments/Dresses/MartineDress/MartineDress5.webp",
            "assets/Vetments/Dresses/MartineDress/MartineDress6.webp",],
        quantite: 1,
        taille: "S",
        couleur: "bleu ciel",
        categorie: "robe"
    },
    {
        id: 3,
        nom: "Auction Dress",
        prix: 98,
        description: "Wearing a thousand times. This is a lined sleeveless mini dress with a crew neckline. It's made with Mirror Crepe™ — Babaton’s essential crepe fabric with a soft drape and silky satin back. It’s sourced from an innovative Japanese mill and made with wood-based fibres from responsibly managed forests with a focus on protecting ecosystems and providing social benefits for local communities.",
        images: [
            "assets/Vetments/Dresses/Auction/Auction1.webp",
            "assets/Vetments/Dresses/Auction/Auction2.webp",
            "assets/Vetments/Dresses/Auction/Auction3.webp",
            "assets/Vetments/Dresses/Auction/Auction4.webp",
            "assets/Vetments/Dresses/Auction/Auction5.webp",
            "assets/Vetments/Dresses/Auction/Auction6.webp"],
        quantite: 1,
        taille: "S",
        couleur: "bleu ciel",
        categorie: "robe"
    }, {
        id: 4,
        nom: "Contour Tube Dress",
        prix: 98,
        description: "This is a flattering maxi tube dress with double-layer fabric for a supportive fit. It’s made with Contour — luxe, ultra-flattering fabric coveted for its smoothing effect and second-skin feel. Nothing more essential",
        images: [
            "assets/Vetments/Dresses/ContourTubeMaxi/ContourTubeMaxi1.jpeg",
            "assets/Vetments/Dresses/ContourTubeMaxi/ContourTubeMaxi2.webp",
            "assets/Vetments/Dresses/ContourTubeMaxi/ContourTubeMaxi3.webp",
            "assets/Vetments/Dresses/ContourTubeMaxi/ContourTubeMaxi4.webp",
            "assets/Vetments/Dresses/ContourTubeMaxi/ContourTubeMaxi5.webp",
            "assets/Vetments/Dresses/ContourTubeMaxi/ContourTubeMaxi6.jpeg"],
        quantite: 1,
        taille: "S",
        couleur: "bleu ciel",
        categorie: "robe"
    }, {
        id: 5,
        nom: "Intellect Satin",
        prix: 98,
        description: "This is a flattering maxi tube dress with double-layer fabric for a supportive fit. It’s made with Contour — luxe, ultra-flattering fabric coveted for its smoothing effect and second-skin feel. Nothing more essential",
        images: [
            "assets/Vetments/Dresses/IntellectSatin/IntellectSatin1.webp",
            "assets/Vetments/Dresses/IntellectSatin/IntellectSatin2.webp",
            "assets/Vetments/Dresses/IntellectSatin/IntellectSatin3.webp",
            "assets/Vetments/Dresses/IntellectSatin/IntellectSatin4.webp",
            "assets/Vetments/Dresses/IntellectSatin/IntellectSatin5.webp",
            "assets/Vetments/Dresses/IntellectSatin/IntellectSatin6.webp"],
        quantite: 1,
        taille: "S",
        couleur: "bleu ciel",
        categorie: "robe"
    }
];
