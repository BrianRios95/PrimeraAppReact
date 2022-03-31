import "./Item.css";

const Item = ({ name, img }) => {
  return (
    <article>
      <p className="productName">{name}</p>
      <div className="imgContainer">
        <img src={img} alt={name} />
      </div>
      <button>ver más</button>
    </article>
  );
};

export default Item;
