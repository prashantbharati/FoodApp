import React, { useEffect, useState } from "react";
import axios from "axios";
import Foodlist from "../components/Foodlist/Foodlist";
const Allfood = () => {
  const [food, setFoods] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      const res = await axios.get("http://localhost:5000/foods");
      console.log(res);
      setFoods(res.data);
    };
    getdata();
  }, []);

  return (
    <div>
      <Foodlist foods={food} />
    </div>
  );
};

export default Allfood;
