import "./itemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  return (
    <div className="itemDetailContainer">
      <div className="imgDetailContainer">
        <img src={item.img} />
      </div>
      <div className="description">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <div className="ingredients">
          {item.ingredients.map((ing) => (
            <p>{ing}</p>
          ))}
        </div>
      </div>
      <ItemCount />
    </div>
  );
};

export default ItemDetail;
