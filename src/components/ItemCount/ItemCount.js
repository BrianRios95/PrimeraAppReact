import { useState } from "react";
import "./ItemCount.css";

const ItemCount = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    if (counter - 1 < 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };

  const clearAmount = () => {
    setCounter(0);
  };

  return (
    <div className="addToCart">
      <div className="amount">
        <h3> {counter} </h3>
      </div>
      <div className="counterContainer">
        <button onClick={decrease} className="decrease">
          -
        </button>
        <button onClick={clearAmount} className="clearAmount">
          Limpiar
        </button>
        <button onClick={increase} className="increase">
          +
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
