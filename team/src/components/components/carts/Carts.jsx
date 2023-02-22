import React from "react";
import Imgs from "../carts/imeg-1.webp";
function Carts() {
  return (
    <div className="cart">
      <img src={Imgs} alt="" />
      <div className="cart-titel">
        <p className="cart-p">22ct</p>
        <p className="cart-name">Organic Bell Pepper</p>
        <div className="cart-bun">
          <p className="cart-sena">$10 </p>
          <button className="btn-1"></button>
        </div>
      </div>
    </div>
  );
}

export default Carts;
