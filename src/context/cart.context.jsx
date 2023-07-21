import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find if cart items contains product to add
  // if found increase quantity
  // return new array with modified cart items
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  CartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };
  const [cartItems, setCartitems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartitems(addCartItem(cartItems, productToAdd));
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
