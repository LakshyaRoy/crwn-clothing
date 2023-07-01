import React, { useContext } from "react";

import { ReactComponent as ShoppingIcons } from "../../assets/115 - shopping-bag.svg";
import "./cart-icon.styles.scss";
import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcons className="shopping-icons" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
