import Phone from "../../images/pink-img.jpg";
import "./root.css";

function Cart() {
  return (
    <div className="product">
      <img src={Phone}></img>
      <div>
        <h3>Product title</h3>
        <p>1200 $</p>
      </div>
      <p>
        This device is extremely popular. We're keen to get the device to you as
        quickly as possible. Place your order today and we'll deliver it to you
        asap. Check the estimated delivery time below.
      </p>
      <button>Add to cart</button>
    </div>
  );
}

export default Cart;
