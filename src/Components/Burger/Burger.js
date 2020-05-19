import React from "react";
import "./Burger.css";
import BurgerIngrediant from "./BurgerIngrediant/BurgerIngrediant";

const burger = (props) => {
  const transformedIngredient = Object.keys(props.ingredients)
  .map(ingkey => {
   return[...Array(props.ingredients[ingkey])]
    .map((_, i) => {
      return <BurgerIngrediant key={ingkey + i} type={ingkey} />;
    });
  }).reduce((arr, el) => {
return arr.concat(el)
}, []);

if(transformedIngredient.length === 0) {
  transformedIngredient = <p>Please start adding some ingredients!</p>
}

  return (
    <div className="Burger">
      <BurgerIngrediant type="BreadTop" />
      {transformedIngredient}
      <BurgerIngrediant type="BreadBottom" />
    </div>
  );
};

export default burger;
