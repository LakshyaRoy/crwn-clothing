import React, { useContext } from "react";

import { ReactComponent as ShoppingIcons } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
  const { cartItems } = useContext(CartContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  const totalCartValue = cartItems.map((items) => items.quantity);
  console.log(totalCartValue);
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcons className="shopping-icon" />
      <span className="item-count">
        {totalCartValue.reduce((curr, acc) => {
          return curr + acc;
        }, 0)}
      </span>
    </div>
  );
};

export default CartIcon;
