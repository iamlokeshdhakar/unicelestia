export const medicineBoxData = [
  {
    formula:
      "Antioxidants with Multivitamins, Multiminerals, Lycopene, Green Tea Extract & Cyanocobalamin Tablets",
    imgUrl: "/images/apt_1.png",
    tabName: "ATP GOLD",
    link: '/products/atp-gold-tablets',
    tag: "TABLETS",
  },
  {
    formula: "Rabeprazole Sodium (EC) & Domperidone (SR) Capsules",
    imgUrl: "/images/rostro.png",
    tabName: "ROSTRO-DSR",
    link: '/products/rostro-dsr-capsules',
    tag: "CAPSULES",
  },
  {
    formula:
      "Aceclofenac, Paracetamol & Serratiopeptidase Tablets",
    imgUrl: "/images/tedflam.png",
    tabName: "TEDFLAM-SP",
    link: '/products/tedflam-sp-tablets',
    tag: "TABLETS",
  },
  {
    formula: "Ceftriaxone & Sulbactam for Injection I.P.",
    imgUrl: "/images/injection.png",
    tabName: "MIRAZEF-S",
    link: '/products/mirazef-s-injection',
    tag: "INJECTION",
  },
  {
    formula: "Lycopene with Multivitamin & Multiminerals Syrup",
    imgUrl: "/images/apts2.png",
    tabName: "ATP GOLD",
    link: '/products/atp-gold-syrup',
    tag: "SYRUP",
  }
]


export const products = [
  {
    name: "ATP GOLD Tablets",
    price: "$192",
    href: "#",
    breadcrumbs: [
      { id: 1, name: "Home", href: "/" },
      { id: 2, name: "Products", href: "#" }
    ],
    images: "/images/apt_1.png",
    formula: [
      { name: "Antioxidants", percent: "23%" },
      { name: "Multivitamins", percent: "23%" },
      { name: "Multiminerals", percent: "23%" },
      { name: "Lycopene", percent: "23%" },
      { name: "Green Tea Extract", percent: "23%" },
      { name: "Cyanocobalamin", percent: "23%" }
    ],
    description: "ATP GOLD is a comprehensive dietary supplement designed to support overall health and wellness. This powerful formulation combines a blend of antioxidants, multivitamins, multiminerals, lycopene, green tea extract, and cyanocobalamin (Vitamin B12) to provide essential nutrients that help combat oxidative stress and promote optimal bodily function.",
    ingredients: [
      "Green Tea Extract (95%) (Camellia sinensis)",
      "Lycopene (10%)",
      "Vitamin C (L-ascorbic Acid)",
      "Niacin (Nicotinamide)",
      "Vitamin E (DL-alpha-tocopheryl acetate)",
      "Pantothenic Acid (D-pantothenate Calcium)",
      "Vitamin B2 (Riboflavin)",
      "Vitamin B6 (Pyridoxine HCl)",
      "Vitamin B1 (Thiamine Mononitrate)",
      "Vitamin A (Retinyl Acetate)",
      "Folic Acid (n-pteroyl-l-glutamic acid)",
      "Biotin (D-Biotin)",
      "Vitamin B12 (Cyanocobalamin)",
      "Elemental Zinc (Zinc Oxide)",
      "Elemental Magnesium (Magnesium Oxide)",
      "Elemental Manganese (Manganese Sulphate)",
      "Elemental Boron (Boron Proteinate)",
      "Elemental Chromium (Chromium Chloride)",
      "Elemental Selenium (Sodium Selenite)"
    ],
    indications: ["Individuals looking to enhance their overall nutritional intake.", "Those seeking to boost their antioxidant defenses.", "People experiencing fatigue or low energy levels.", "Individuals interested in supporting heart health and metabolic function."],
    conclusion: "ATP GOLD is an ideal choice for those seeking a robust supplement to enhance their daily nutritional regimen. With its unique blend of powerful ingredients, ATP GOLD supports your body’s health at the cellular level, helping you feel your best every day.",
    sideEffect: "ATP GOLD is generally well-tolerated. However, some individuals may experience mild gastrointestinal discomfort or allergic reactions. If you experience any severe side effects or an allergic reaction, discontinue use and consult a healthcare professional.",
    precautions: ["Consult your healthcare provider before use if you are pregnant, nursing, taking medication, or have a medical condition.", "Do not exceed the recommended dose."],
    dosage: [{
      age: "Adults",
      description: "Take 1 tablet daily with a meal, or as directed by your healthcare provider."
    }],
    link: "/atp-gold-tablets"
  },
  // {
  //   name: "ROSTRO-DSR Capsules",
  //   price: "$145",
  //   href: "#",
  //   breadcrumbs: [
  //     { id: 1, name: "Home", href: "/" },
  //     { id: 2, name: "Products", href: "#" }
  //   ],
  //   images: "/images/rostro.png",
  //   formula: [
  //     { name: "Rabeprazole Sodium", percent: "20%" },
  //     { name: "Domperidone", percent: "15%" }
  //   ],
  //   description: "Description for ROSTRO-DSR Capsules.",
  //   highlights: ["Rabeprazole Sodium", "Domperidone"],
  //   details: "Detailed information about ROSTRO-DSR Capsules.",
  //   link: "/rostro-dsr-capsules"
  // },
  // {
  //   name: "TEDFLAM-SP Tablets",
  //   price: "$110",
  //   href: "#",
  //   breadcrumbs: [
  //     { id: 1, name: "Home", href: "/" },
  //     { id: 2, name: "Products", href: "#" }
  //   ],
  //   images: "/images/tedflam.png",
  //   formula: [
  //     { name: "Antioxidants", percent: "25%" },
  //     { name: "Multivitamins", percent: "20%" },
  //     { name: "Multiminerals", percent: "20%" },
  //     { name: "Lycopene", percent: "15%" }
  //   ],
  //   description: "Description for TEDFLAM-SP Tablets.",
  //   highlights: ["Antioxidants", "Multivitamins", "Lycopene"],
  //   details: "Detailed information about TEDFLAM-SP Tablets.",
  //   link: "/tedflam-sp-tablets"
  // },
  // {
  //   name: "MIRAZEF-S Injection",
  //   price: "$250",
  //   href: "#",
  //   breadcrumbs: [
  //     { id: 1, name: "Home", href: "/" },
  //     { id: 2, name: "Products", href: "#" }
  //   ],
  //   images: "/images/injection.png",
  //   formula: [
  //     { name: "Ceftriaxone", percent: "50%" },
  //     { name: "Sulbactam", percent: "50%" }
  //   ],
  //   description: "Description for MIRAZEF-S Injection.",
  //   highlights: ["Ceftriaxone", "Sulbactam"],
  //   details: "Detailed information about MIRAZEF-S Injection.",
  //   link: "/mirazef-s-injection"
  // },
  // {
  //   name: "ATP GOLD Syrup",
  //   price: "$95",
  //   href: "#",
  //   breadcrumbs: [
  //     { id: 1, name: "Home", href: "/" },
  //     { id: 2, name: "Products", href: "#" }
  //   ],
  //   images: "/images/apts2.png",
  //   formula: [
  //     { name: "Lycopene", percent: "20%" },
  //     { name: "Multivitamins", percent: "30%" },
  //     { name: "Multiminerals", percent: "30%" }
  //   ],
  //   description: "Description for ATP GOLD Syrup.",
  //   highlights: ["Lycopene", "Multivitamins", "Multiminerals"],
  //   details: "Detailed information about ATP GOLD Syrup.",
  //   link: "/atp-gold-syrup"
  // }
]