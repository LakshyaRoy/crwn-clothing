import React from "react";
import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";
import CartItems from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItems key={item?.id} CartItem={item} />
        ))}
      </div>

      <Button>Go To CheckOut</Button>
    </div>
  );
};

export default CartDropDown;
