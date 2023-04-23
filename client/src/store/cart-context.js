import React, { createContext, useEffect, useState } from "react";

const CartContext = createContext({
  cart: [],
  cartLength: 0,
  addToCart: () => {},
});

export const CartContextProvider = (props) => {
  const initialcart = JSON.parse(localStorage.getItem("cart") || "[]");
  const [cart, setCart] = useState(initialcart);

  const addToCart = (item) => {
    const isPresent = cart.some((food) => food.id === item.id);

    if (isPresent) {
      setCart(() => {
        return cart.map((food) =>
          food.id === item.id ? { ...food, qty: food.qty + 1 } : food
        );
      });
    } else {
      setCart((prevstate) => {
        return [...prevstate, item];
      });
    }
  };

  const context = {
    cart: cart,
    cartLength: cart.length,
    addToCart: addToCart,
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
