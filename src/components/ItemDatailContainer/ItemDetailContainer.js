import { useState, useEffect } from "react";

import ItemDetail from "../ItemDetail/ItemDetail";
import { getDescription } from "../productos";

const ItemDetailContainer = () => {
  const [itemDetail, setItemDetail] = useState([]);

  useEffect(() => {
    getDescription(1).then((productos) => {
      setItemDetail(productos);
      console.log(productos);
    });
  }, []);

  return (
    <div>
      <ItemDetail item={itemDetail} />
    </div>
  );
};

export default ItemDetailContainer;
