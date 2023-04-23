import React from "react";
import Food from "../Food/Food";
import styles from "./Foodlist.module.css";
const Foodlist = ({ foods }) => {
  return (
    <ul className={styles["food-list"]}>
      {foods.map((food) => {
        return (
          <Food
            id={food._id}
            name={food.name}
            price={food.price}
            desc={food.desc}
          />
        );
      })}
    </ul>
  );
};

export default Foodlist;
