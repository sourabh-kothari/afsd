import React, { useState } from "react";
import   "./RecipeProduct.css";
import ShowItem from "./ShowItem";
const RecipeProduct = (props) => {
  const [items, setrecipe] = useState();
  const dish = props.data;
  const displayItem = () => {
    if (items) {
      setrecipe();
    } else {
      setrecipe(dish);
    }
  };
  return (
    <>
      <div className="viewItems">
        <img src={dish.image} alt="Img" />
        <p>{dish.label}</p>
        <button type="button" onClick={displayItem}>
          View
        </button>
      </div>
      {items && <ShowItem item={items} />}
    </>
  );
};

export default RecipeProduct;
