
import React, { useState } from "react";
import ShhoppingCartIcon from "../../../../Header/img/shopping_cart_icon.png";
import "./Buton.style.css"

export default function Button({ addToBasket , product }) {
  return (
    <button onClick={() => addToBasket(product)}>
      <img src={ShhoppingCartIcon} alt="Shopping Cart" />
    </button>
  );
}