import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import styles from "./Mycart.module.css";
const Mycart = () => {
  const cartCtx = useContext(CartContext);
  const { cart } = cartCtx;
  // int ps
  // cart.map((food)=>ps+=food.qty*food.price)
  const totalPrice = cart.reduce(
    (prev, curr) => prev + curr.price * curr.qty,
    0
  );
  return (
    <ul className={styles.cart}>
      <li>My Cart</li>
      {cart.map((item, id) => {
        return (
          <li key={id}>
            <p className={styles["item-name"]}>
              {item.name}
              {"   "}
              <span className={styles["item-qty"]}>x{item.qty}</span>
            </p>
            <p className={styles["item-desc"]}>{item.desc}</p>
            <p className={styles["item-price"]}>{item.price}</p>
          </li>
        );
      })}

      <li>Total:{totalPrice}</li>
      <span className={styles["place-order-btn"]}>
        <button>Place Order</button>
      </span>
    </ul>
  );
};

export default Mycart;
