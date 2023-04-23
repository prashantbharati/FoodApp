import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Mainnavigation.module.css";
import CartContext from "../../store/cart-context";
const Mainnavigation = () => {
  const { cartLength } = useContext(CartContext);

  return (
    <nav className={styles.nav}>
      <ul
        style={{
          display: "flex",
          // flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <li>
          <Link to="/allfoods">React Foods</Link>
        </li>
        <li>
          <Link to="/mycart">
            Cart <sup>{cartLength}</sup>
          </Link>
        </li>
        <li>
          <Link to="/github">Github</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Mainnavigation;
