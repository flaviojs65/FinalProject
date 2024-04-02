export interface Vetement {
    id: number;
    nom: string;
    prix: number;
    description: string;
    images: string[];
    quantite: number;
    taille: string;
    couleur: string;
    couleurName?: string;
    categorie: string;
    product: string;
}

export const vetements: Vetement[] = [
    {
        id: 1,
        nom: "Cella Satin Dress",
        prix: 120,
        description: "This is a fit-and-flare maxi dress with a back cutout and classic fit. It’s made from Naia™ Renew — a drapey satin fabric with a lustrous, glossy sheen that’s extremely soft to the touch. It’s produced from recycled waste material and wood-based fibres from responsibly managed forests with a focus on protecting ecosystems and providing social benefits for local communities.",
        images: [
            "assets/Vetments/Dresses/CellaSatinDress/CellaSatinDress1.jpeg",
            "assets/Vetments/Dresses/CellaSatinDress/CellaSatinDress2.webp",
            "assets/Vetments/Dresses/CellaSatinDress/CellaSatinDress3.jpeg",
            "assets/Vetments/Dresses/CellaSatinDress/CellaSatinDress4.webp",
            "assets/Vetments/Dresses/CellaSatinDress/CellaSatinDress5.webp",
            "assets/Vetments/Dresses/CellaSatinDress/CellaSatinDress6.jpeg"],
        quantite: 1,
        taille: "M",
        couleurName: "Aquamarine Green",
        couleur: "https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_01_a08_116344_31973_sw.jpg",
        categorie: "Babaton",
        product: "Satin fit-and-flare maxi dress"
    },
    {
        id: 2,
        nom: "Martine Poplin Dress",
        prix: 98,
        description: "A quintessential Sunday Best style, this is a tiered mini dress with an elastic waist, front tie detail and adjustable straps. It's cut from airy, lightweight 100% cotton poplin with a smooth, crisp feel.        ",
        images: [
            "assets/Vetments/Dresses/MartineDress/MartineDress1.webp",
            "assets/Vetments/Dresses/MartineDress/MartineDress2.webp",
            "assets/Vetments/Dresses/MartineDress/MartineDress3.jpeg",
            "assets/Vetments/Dresses/MartineDress/MartineDress4.webp",
            "assets/Vetments/Dresses/MartineDress/MartineDress5.jpeg",
            "assets/Vetments/Dresses/MartineDress/MartineDress6.webp"],
        quantite: 1,
        taille: "S",
        couleurName: "White",
        couleur: "https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_02_a08_109395_1275_sw.jpg",
        categorie: "Sunday Best",
        product: "Tiered cotton poplin mini dress "
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
        couleur: "https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_01_a08_119731_1274_sw.jpg",
        couleurName: "Black",
        categorie: "robe",
        product: "Tiered cotton poplin mini dress "
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
        couleur: "https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a08_118760_1274_sw.jpg",
        couleurName: "Black",
        categorie: "robe",
        product: "Tiered cotton poplin mini dress "
    }, {
        id: 5,
        nom: "Intellect Satin",
        prix: 98,
        description: "This is a pleated maxi dress with a crew neckline and smocked waistband. It's made from sleek, drapey satin with a smooth feel and matte shine. This fabric is sourced from an innovative Japanese mill.",
        images: [
            "assets/Vetments/Dresses/IntellectSatin/IntellectSatin1.webp",
            "assets/Vetments/Dresses/IntellectSatin/IntellectSatin2.webp",
            "assets/Vetments/Dresses/IntellectSatin/IntellectSatin3.webp",
            "assets/Vetments/Dresses/IntellectSatin/IntellectSatin4.webp",
            "assets/Vetments/Dresses/IntellectSatin/IntellectSatin5.webp",
            "assets/Vetments/Dresses/IntellectSatin/IntellectSatin6.webp"],
        quantite: 1,
        taille: "S",
        couleur: "https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_01_a08_115448_30360_sw.jpg",
        couleurName: "Cruise Blue",
        categorie: "robe",
        product: "Japanese satin pleated crewneck maxi dress"
    }
];
