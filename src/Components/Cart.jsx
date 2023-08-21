import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove, increment, decrement } from "../Redux/CartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const itams = useSelector((state) => state.card);
  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  const handleIncrement = (id) => {
    dispatch(increment(id));
  };
  const handleDecrement = (id) => {
    dispatch(decrement(id));
  };
  return (
    <>
      <div className="card_main">
        {itams.map((data, index) => (
          <div className="card" key={data.id}>
            <div className="imgContainer">
              <img src={data.image} alt="" />
            </div>
            <div className="content">
              <p>Title {data.title}</p>
              <p>Price {data.price}</p>
              <p>Rating Count {data.rating.count}</p>
              <p>Rate {data.rating.rate}</p>
            </div>
            <div className="buttonContainer">
              <button className="remove" onClick={() => handleRemove(data.id)}>
                Remove
              </button>
              <div className="addMoreItam">
                <button
                  className="increment"
                  onClick={() => handleIncrement(data.id)}
                >
                  +
                </button>
                <span>{data.quantity}</span>
                <button
                  className="decrement"
                  disabled={`${data.quantity <= 1 ? "disabled" : ""}`}
                  onClick={() => handleDecrement(data.id)}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Cart;
