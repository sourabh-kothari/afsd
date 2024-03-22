import React from "react";


const ShowItem = (props) => {
  const object = props.object;
  console.log(object.totalNutrients);
  return (
    <>
      <div>
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td>Dish Type</td>
              <td>
                {object.cuisineType.map((res) => (
                  <li>{res}</li>
                ))}
              </td>
            </tr>
            <tr>
              <td>Amount of Calorie's</td>
              <td>{object.calories}</td>
            </tr>
            <tr>
              <td>CO2 Emission</td>
              <td>
                <li>
                  {object.totalCO2Emissions}
                </li>
              </td>
            </tr>
            <tr>
              <td>Type Of Recipes</td>
              <td>{object.dishType.map((res) => res)}</td>
            </tr>
            <tr>
              <td>Ingredients</td>
              <td>
                {object.ingredientLines.map((res) => (
                  <li>{res}</li>
                ))}
              </td>
            </tr>
            <tr>
              <td>Total Nutrition value</td>
              <td>
                <li>
                  {`${object.totalNutrients.FAPU.label} = 
                  ${object.totalNutrients.FAPU.quantity}
                  ${object.totalNutrients.FAPU.unit}`}
                </li>
                <li>
                  {`${object.totalNutrients.FIBTG.label} = 
                  ${object.totalNutrients.FIBTG.quantity}
                  ${object.totalNutrients.FIBTG.unit}`}
                </li>
                <li>
                  {`${object.totalNutrients.MG.label} = 
                  ${object.totalNutrients.MG.quantity}
                  ${object.totalNutrients.MG.unit}`}
                </li>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ShowItem;
