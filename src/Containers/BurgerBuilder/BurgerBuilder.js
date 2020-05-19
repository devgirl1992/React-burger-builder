import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import "./BurgerBuilder.css";
import Burger from "../../Components/Burger/Burger"


class BurgerBuilder extends Component {
  state = {
    ingredients: {
      Salad: 0,
      Bacon: 0,
      Cheese: 0,
      Meat:0
    }
  }
  render () {
    return (
     <Aux>
       <Burger ingredients={this.state.ingredients}/>
       <div className="BuildCtr">Build Controls</div>
     </Aux>
    )
  }
  
}

export default BurgerBuilder;