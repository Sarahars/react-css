import Phone from "../../images/pink-img.jpg";
import "./root.css";

function Cart(props) {
  return (
    <div className="product">
      {/* <img src={Phone} alt="" />   => pour les images importer depuis le PC*/}
      <img src={props.image} alt=""/>
      <div>
        <h3>{props.name}</h3>
        <p>{props.price}</p>
      </div>
      {/* <p>
        This device is extremely popular. We're keen to get the device to you as
        quickly as possible. Place your order today and we'll deliver it to you
        asap. Check the estimated delivery time below.
      </p> */}
      <button onClick={() => {
        props.update(props.price)
      }}>Add to cart</button>
    </div>
  );
}

export default Cart;
