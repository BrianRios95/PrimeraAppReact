import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../productos";

const ItemListContainer = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    getProducts().then((productos) => {
      setItem(productos);
    });
  }, []);

  return (
    <div>
      <h2>Lista de productos</h2>
      <ItemList item={item} />
    </div>
  );
};

export default ItemListContainer;
