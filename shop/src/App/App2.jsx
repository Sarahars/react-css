import Navbar from "../components/Navbar/Navbar";
import Cart from "../components/cart/Cart";
import { useState, useEffect } from "react";

function App() {
  const [listProducts, setListProducts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch("http://192.168.1.34:1337/product")
      .then((data) => {
        data.json().then((list) => {
setListProducts(list.products); });
      })
      .catch((error) => console.log("=======", error));
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
          marginLeft: 80,
        }}
      >
        {listProducts.length === 0 ? (
          <div> loading ...... </div>
        ) : (
          listProducts.map((item) => {
            return (
              <Cart
                update={updateTotal}
                name={item.name}
                price={item.price}
                image={item.imgUrl}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default App;
