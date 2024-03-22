import React, { useState } from "react";
import RecipeList from "./RecipeList";
import "./RecipeProduct.css";

const RecipeFinder = () => {
  const [result, setOutcome] = useState();
  const Keys = "6247cc937d182578f6adbc7cf994c99a	";
  const Id = "45838235";
  const [searchItem, setSearch] = useState("");


  const search = (event) => {
    setSearch(event.target.value);
  };


  const getApi = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${searchItem}&app_id=${Id}&app_key=${Keys}`
    );

    const data_item = await response.json();
    setOutcome(data_item.hits);
    console.log(data_item);
  };

  
  const refresh = () => {
    if (searchItem.length === 0) {
      alert("Enter Something To Search");
      setOutcome();
    } else {
      getApi();
    }
  };


  const getSearch = () => {
    if (searchItem.length === 0) {
      alert("Enter Something To Search");
      setOutcome();
    } else {
      getApi();
    }
  };

  
  return (
    <div className="container">
      <input type="text" onChange={search} placeholder="Search Here" />
      <button type="Submit" onClick={getSearch}>
        GO Search
      </button>
      <button
        type="button"
        onClick={refresh}
        style={{ marginLeft: "3rem" }}
      >
        Refresh Item
      </button>
      {result && <RecipeList data={result} />}
    </div>
  );
};

export default RecipeFinder;
