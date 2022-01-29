import Navbar from "../components/Navbar/Navbar";
import Cart from "../components/cart/Cart";
import Data from "../constants/data.json";
import { useState, useEffect } from "react";

function App() {
  const [listProducts, setListProduct] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
      setTimeout(() => {
          setListProduct(Data.list);
      }, 3000);
  }, []);

  const updateTotal = (price) => {
    setTotal(total + price);
  };
  return (
    <div>
      <Navbar totalPrice={total} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
          marginLeft: 120,
        }}
      >
        {listProducts.length === 0 ? (
          <div> loading .... </div>) : (
        listProducts.map((item) => {
          return (
            <Cart
              update={updateTotal}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          );
        })
        )}
      </div>
    </div>
  );
}

export default App;
