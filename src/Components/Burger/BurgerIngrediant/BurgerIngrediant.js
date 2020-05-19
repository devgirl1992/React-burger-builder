import React from 'react';
import PropTypes from "prop-types";
 import "./BurgerIngrediant.css"
//  import classes from "./BurgerIngrediant.css"

const burgerIngrediant = (props) => {
  let ingredients = null;

  switch(props.type) {
    case("BreadBottom"):
      ingredients = <div className="BreadBottom"></div>;
      break;
      case("BreadTop"):
      ingredients = (<div  className="BreadTop">
        <div className="Seeds1"></div>
        <div className="Seeds2"></div>
      </div>);
      break;
      case("Meat"):
      ingredients = <div className="Meat"></div>;
      break;
      case("Cheese"):
      ingredients = <div className="Cheese"></div>;
      break;
      case("Salad"):
      ingredients = <div className="Salad"></div>;
      break;
      case("Bacon"):
      ingredients = <div className="Bacon"></div>;
      break;
      default:
        ingredients = null;
  }
  return (
     ingredients
  );
}
 

burgerIngrediant.PropTypes = {
  type: PropTypes.string.isRequired
};

export default burgerIngrediant;