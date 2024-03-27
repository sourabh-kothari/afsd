import React from "react";
import RecipeProduct from "./RecipeProduct";
import "./RecipeProduct.css";

//This code belongs to Sourabh Kothari//
const RecipeList = (props) => {
  return (
    <>
      <div className="visible">
        {props.data.map((item) => (
          <div key={item.recipe.label}>
            <RecipeProduct data={item.recipe} />
          </div>
        ))}
      </div>
    </>
  );
};

export default RecipeList;
