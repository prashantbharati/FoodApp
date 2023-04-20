import React from "react";
import { Link } from "react-router-dom";
import styles from "./Mainnavigation.module.css";
const Mainnavigation = () => {
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
          <Link to="/mycart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Mainnavigation;
