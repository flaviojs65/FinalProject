export interface Vetement {
    id: number;
    nom: string;
    prix: number;
    description: string;
    images: string[];
    quantite: number;
    taille: string;
    couleur: string;
    couleurName: string;
    categorie: string;
    product: string;
    newItem?: boolean;
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
        couleur: "assets/color.png",
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
    },
    {
        id: 6,
        nom: "New Lune Dress",
        prix: 65,
        description: "A resort-wear essential, this is a wrap mini dress with side ties. It’s made with Relux Jersey, an ultra-soft and drapey fabric that uses LENZING™ ECOVERO™ Viscose — responsibly sourced wood-based fibres produced through a process that reduces impact on forests, biodiversity and water supply.",
        images: [
            "assets/Vetments/Dresses/NewLuneDress/NewLuneDress1.jpeg",
            "assets/Vetments/Dresses/NewLuneDress/NewLuneDress2.webp",
            "assets/Vetments/Dresses/NewLuneDress/NewLuneDress3.webp",
            "assets/Vetments/Dresses/NewLuneDress/NewLuneDress4.webp",
            "assets/Vetments/Dresses/NewLuneDress/NewLuneDress5.webp",
            "assets/Vetments/Dresses/NewLuneDress/NewLuneDress6.jpeg"],
        quantite: 1,
        taille: "S",
        couleur: "https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_04_a08_114668_27638_sw.jpg",
        couleurName: "Slab Blue",
        categorie: "Wilfred",
        product: "Wrap mini dress"

    },
    {
        id: 7,
        nom: "Contour Off-Shoulder Dress",
        prix: 98,
        description: "This is an off-the-shoulder mini dress with long sleeves and double-layer fabric for a supportive fit. It’s made with Contour — luxe, ultra-flattering fabric coveted for its smoothing effect and second-skin feel. Nothing more essential.",
        images: [
            "assets/Vetments/Dresses/ContourOff-Shoulder/ContourOffShoulder1.webp",
            "assets/Vetments/Dresses/ContourOff-Shoulder/ContourOffShoulder2.webp",
            "assets/Vetments/Dresses/ContourOff-Shoulder/ContourOffShoulder3.webp",
            "assets/Vetments/Dresses/ContourOff-Shoulder/ContourOffShoulder4.webp",
            "assets/Vetments/Dresses/ContourOff-Shoulder/ContourOffShoulder5.webp",
            "assets/Vetments/Dresses/ContourOff-Shoulder/ContourOffShoulder6.webp"],
        quantite: 1,
        taille: "S",
        couleur: "https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a08_118305_1274_sw.jpg",
        couleurName: "Black",
        categorie: "Contour",
        product: "Off-the-shoulder longsleeve mini",

    },
    {
        id: 8,
        nom: "Franky Tassel",
        prix: 120,
        description: "This is a fit-and-flare maxi dress with a back cutout and classic fit. It’s made from Naia™ Renew — a drapey satin fabric with a lustrous, glossy sheen that’s extremely soft to the touch. It’s produced from recycled waste material and wood-based fibres from responsibly managed forests with a focus on protecting ecosystems and providing social benefits for local communities.",
        images: [
            "assets/BestSellers/FrankyTassel/FrankyTassel1.jpeg",
            "assets/BestSellers/FrankyTassel/FrankyTassel2.jpeg",
            "assets/BestSellers/FrankyTassel/FrankyTassel3.jpeg",
            "assets/BestSellers/FrankyTassel/FrankyTassel4.jpeg",
            "assets/BestSellers/FrankyTassel/FrankyTassel5.jpeg",
            "assets/BestSellers/FrankyTassel/FrankyTassel6.jpeg"],
        quantite: 1,
        taille: "M",
        couleurName: "Aquamarine Green",
        couleur: "https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_01_a08_116344_31973_sw.jpg",
        categorie: "Babaton",
        product: "Satin fit-and-flare maxi dress",
        newItem: true
    },
    {
        id: 9,
        nom: "Jesse Metallic ",
        prix: 120,
        description: "This is a fit-and-flare maxi dress with a back cutout and classic fit. It’s made from Naia™ Renew — a drapey satin fabric with a lustrous, glossy sheen that’s extremely soft to the touch. It’s produced from recycled waste material and wood-based fibres from responsibly managed forests with a focus on protecting ecosystems and providing social benefits for local communities.",
        images: [
            "assets/BestSellers/JesseMetallic/JesseMetallic1.jpeg",
            "assets/BestSellers/JesseMetallic/JesseMetallic2.jpeg",
            "assets/BestSellers/JesseMetallic/JesseMetallic3.jpeg",
            "assets/BestSellers/JesseMetallic/JesseMetallic4.jpeg",
            "assets/BestSellers/JesseMetallic/JesseMetallic5.jpeg",
            "assets/BestSellers/JesseMetallic/JesseMetallic6.jpeg"],
        quantite: 1,
        taille: "M",
        couleurName: "Gold",
        couleur: "assets/BestSellers/JesseMetallic/JesseMetallicColor.png",
        categorie: "Babaton",
        product: "Crochet Midi Dress",
        newItem: true
    },
    {
        id: 9,
        nom: "Jesse Metallic ",
        prix: 120,
        description: "This is a fit-and-flare maxi dress with a back cutout and classic fit. It’s made from Naia™ Renew — a drapey satin fabric with a lustrous, glossy sheen that’s extremely soft to the touch. It’s produced from recycled waste material and wood-based fibres from responsibly managed forests with a focus on protecting ecosystems and providing social benefits for local communities.",
        images: [
            "assets/BestSellers/KayeOversized/KayeOversized1.jpeg",
            "assets/BestSellers/KayeOversized/KayeOversized2.jpeg",
            "assets/BestSellers/KayeOversized/KayeOversized3.jpeg",
            "assets/BestSellers/KayeOversized/KayeOversized4.jpeg",
            "assets/BestSellers/KayeOversized/KayeOversized5.jpeg",
            "assets/BestSellers/KayeOversized/KayeOversized6.jpeg"],
        quantite: 1,
        taille: "M",
        couleurName: "Gold",
        couleur: "assets/BestSellers/KayeOversized/KayeOversizedColor.png",
        categorie: "Babaton",
        product: "Crochet Midi Dress",
        newItem: true
    },
    {
        id: 10,
        nom: "Winona Jaine",
        prix: 120,
        description: "This is a fit-and-flare maxi dress with a back cutout and classic fit. It’s made from Naia™ Renew — a drapey satin fabric with a lustrous, glossy sheen that’s extremely soft to the touch. It’s produced from recycled waste material and wood-based fibres from responsibly managed forests with a focus on protecting ecosystems and providing social benefits for local communities.",
        images: [
            "assets/BestSellers/WinonaJaine/WinonaJaine1.jpg",
            "assets/BestSellers/WinonaJaine/WinonaJaine2.jpg",
            "assets/BestSellers/WinonaJaine/WinonaJaine3.jpg",
            "assets/BestSellers/WinonaJaine/WinonaJaine4.jpg",
            "assets/BestSellers/WinonaJaine/WinonaJaine5.jpg",
            "assets/BestSellers/WinonaJaine/WinonaJaine6.jpg"],
        quantite: 1,
        taille: "M",
        couleurName: "Gold",
        couleur: "assets/BestSellers/KayeOversized/KayeOversizedColor.png",
        categorie: "Babaton",
        product: "Crochet Midi Dress",
        newItem: true
    },
];
