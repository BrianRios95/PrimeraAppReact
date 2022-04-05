const products = [
  {
    id: 1,
    name: "Bic Mac",
    price: 800,
    category: "burger",
    img: "https://mcdonalds.es/api/cms/images/mcdonalds-es/13adbc63-d0b7-4fb4-804e-f6beea09928a_1080x943_Big+Mac.png?auto=compress,format",
    description:
      "Dos jugosas hamburguesas de carne 100% vacuno español, lechuga fresca y crujiente, cebolla, pepinillo, queso Cheddar fundido y nuestra inimitable salsa secreta. Todo esto envuelto en un nuevo pan de sésamo horneado al estilo tradicional.",
    ingredients: [
      "pan",
      "carne",
      "pepinillos",
      "queso",
      "salsa Big Mac",
      "cebolla",
      "lechuga",
    ],
  },
  {
    id: 2,
    name: "Cuarto de Libra",
    price: 800,
    category: "burger",
    img: "https://mcdonalds.es/api/cms/images/mcdonalds-es/bd86ee9f-9252-4dc3-b2b0-e69e8a2361d2_1080x943_Cuarto_de_Libra.png?auto=compress,format",
    description:
      "Seguro que eres fanático de una de las hamburguesas más míticas de McDonald’s. ¿Quién puede no rendirse ante su tradicional receta de carne, doble de queso, pepinillo, cebolla en tiras, kétchup y mostaza?",
    ingredients: [
      "pan",
      "carne",
      "ketchup",
      "queso",
      "mostaza",
      "cebolla",
      "lechuga",
    ],
  },
  {
    id: 3,
    name: "Cheese Burger",
    price: 800,
    category: "burger",
    img: "https://mcdonalds.es/api/cms/images/mcdonalds-es/bece0fec-976e-4403-8374-8424497c8b97_1080x943_Menu%CC%814You_cheeseburger.png?auto=compress,format",
    description:
      "Nuestra Cheeseburger con kétchup, mostaza, cebolla, pepinillo y queso fundido tipo Cheddar.",
    ingredients: [
      "pan",
      "carne",
      "ketchup",
      "queso",
      "mostaza",
      "cebolla",
      "lechuga",
    ],
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getDescription = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((p) => p.id == id));
    }, 2000);
  });
};
