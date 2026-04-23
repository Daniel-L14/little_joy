const productos = [
  // 👶 RECIÉN NACIDOS
  {
    id: 1,
    nombre: "Body algodón beige",
    categoria: "recien-nacidos",
    precio: 49900,
    imagenes: [
      "/assets/body1.jpg",
      "/assets/body1-2.jpg",
      "/assets/body1-3.jpg"
    ],
    tallas: ["RN", "0-3M", "3-6M"],
    oferta: true,
  },
  {
    id: 2,
    nombre: "Body blanco clásico",
    categoria: "recien-nacidos",
    precio: 45900,
    imagenes: [
      "/assets/body2.jpg",
      "/assets/body2-2.jpg"
    ],
    tallas: ["RN", "0-3M"],
    oferta: false,
  },
  {
    id: 3,
    nombre: "Body verde oliva",
    categoria: "recien-nacidos",
    precio: 49900,
    imagenes: [
      "/assets/body3.jpg"
    ],
    tallas: ["0-3M", "3-6M"],
    oferta: false,
  },

  // 👕 CONJUNTOS
  {
    id: 4,
    nombre: "Conjunto beige comfy",
    categoria: "ninos",
    precio: 69900,
    imagenes: [
      "/assets/conjunto1.jpg",
      "/assets/conjunto1-2.jpg"
    ],
    tallas: ["3-6M", "6-9M", "9-12M"],
    oferta: true,
  },
  {
    id: 5,
    nombre: "Conjunto gris suave",
    categoria: "ninos",
    precio: 72900,
    imagenes: [
      "/assets/conjunto2.jpg"
    ],
    tallas: ["6-9M", "9-12M"],
    oferta: false,
  },

  // 👗 VESTIDOS
  {
    id: 6,
    nombre: "Vestido crema delicado",
    categoria: "ninas",
    precio: 75900,
    imagenes: [
      "/assets/vestido1.jpg",
      "/assets/vestido1-2.jpg"
    ],
    tallas: ["6-9M", "9-12M"],
    oferta: true,
  },
  {
    id: 7,
    nombre: "Vestido floral suave",
    categoria: "ninas",
    precio: 79900,
    imagenes: [
      "/assets/vestido2.jpg"
    ],
    tallas: ["9-12M", "12-18M"],
    oferta: false,
  },

  // 👖 PANTALONES
  {
    id: 8,
    nombre: "Pantalón algodón beige",
    categoria: "ninos",
    precio: 39900,
    imagenes: [
      "/assets/pantalon1.jpg"
    ],
    tallas: ["3-6M", "6-9M", "9-12M"],
    oferta: false,
  },
  {
    id: 9,
    nombre: "Pantalón gris comfy",
    categoria: "ninos",
    precio: 42900,
    imagenes: [
      "/assets/pantalon2.jpg"
    ],
    tallas: ["6-9M", "9-12M"],
    oferta: true,
  },

  // 🧦 MEDIAS
  {
    id: 10,
    nombre: "Medias suaves pack x3",
    categoria: "accesorios",
    precio: 19900,
    imagenes: [
      "/assets/medias1.jpg"
    ],
    tallas: ["Única"],
    oferta: false,
  },
  {
    id: 11,
    nombre: "Medias térmicas bebé",
    categoria: "accesorios",
    precio: 22900,
    imagenes: [
      "/assets/medias2.jpg"
    ],
    tallas: ["Única"],
    oferta: true,
  },

  // 🧸 EXTRA (PARA MÁS REALISMO)
  {
    id: 12,
    nombre: "Enterizo suave premium",
    categoria: "recien-nacidos",
    precio: 65900,
    imagenes: [
      "/assets/enterizo1.jpg"
    ],
    tallas: ["RN", "0-3M", "3-6M"],
    oferta: true,
  },
];

export default productos;