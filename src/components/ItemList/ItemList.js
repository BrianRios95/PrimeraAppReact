import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ item }) => {
  return (
    <div className="productsContainer">
      {item.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ItemList;
