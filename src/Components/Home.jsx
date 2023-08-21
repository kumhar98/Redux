import React, { useEffect } from "react";
import { add, increment, decrement } from "../Redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, statuses } from "../Redux/ProductSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.pro);
  const items = useSelector((state) => state.card);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  if (status === statuses.Loading) {
    return <div>Loading......</div>;
  }
  const handleAdd = (item) => {
    dispatch(add(item));
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
        {data.map((item) => {
          return (
            <div className="card" key={item.id}>
              <div className="imgContainer">
                <img src={item.image} alt="" />
              </div>
              <div className="content">
                <p>Title {item.title}</p>
                <p>Price {item.price}</p>
                <p>Rating Count {item.rating.count}</p>
                <p>Rate {item.rating.rate}</p>
              </div>
              <div className="buttonContainer">
                {items.some((data) => data.id === item.id) ? (
                  items.map((data) =>
                    data.id === item.id ? (
                      <div className="addMoreItam" key={data.id}>
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
                    ) : null
                  )
                ) : (
                  <button onClick={() => handleAdd(item)}>Add To Card</button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
