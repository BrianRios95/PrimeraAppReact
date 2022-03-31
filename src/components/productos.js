const products = [
  {
    id: 1,
    name: "Big Mac",
    price: 700,
    category: "burger",
    img: "https://mcdonalds.es/api/cms/images/mcdonalds-es/13adbc63-d0b7-4fb4-804e-f6beea09928a_1080x943_Big+Mac.png?auto=compress,format",
    description: "Big Mac lechuga tomate etc",
  },
  {
    id: 1,
    name: "Cuarto de Libra",
    price: 800,
    category: "burger",
    img: "https://mcdonalds.es/api/cms/images/mcdonalds-es/bd86ee9f-9252-4dc3-b2b0-e69e8a2361d2_1080x943_Cuarto_de_Libra.png?auto=compress,format",
    description: "Big Mac lechuga tomate etc",
  },
  {
    id: 1,
    name: "Doble con queso",
    price: 600,
    category: "burger",
    img: "https://mcdonalds.es/api/cms/images/mcdonalds-es/57e9dca6-0242-4048-9554-bc35c6f3fc84_1080x943_Menu%CC%814You_doble+cheeseburger.png?auto=compress,format",
    description: "Big Mac lechuga tomate etc",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};
