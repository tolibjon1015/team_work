import "../cart/Cart.css";
import Img from "./photo.jpg";
function Cart() {
  return (
    <div className="carts">
      <div className="cart_cart">
        <img src={Img} alt="" className="img" />
      </div>
      <div className="cart_cart">
        <img src={Img} alt="" className="img" />
      </div>
      <div className="cart_cart">
        <img src={Img} alt="" className="img" />
      </div>
      <div className="cart_cart">
        <img src={Img} alt="" className="img" />
      </div>
    </div>
  );
}

export default Cart;
