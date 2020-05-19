import React, { Component } from "react";
import Layout from "./Components/Layout/Layout";
import BurgerBuilder from "./Containers/BurgerBuilder/BurgerBuilder";

import "./App.css";

class App extends Component {
  render() {
    return (
    
        <div className="App">
        <p>REACT App Burger Builder</p>
        <Layout>
          <p>Layout Props Children</p>
          <BurgerBuilder />
        </Layout>
        
        </div>
      
    );
  }
}

export default App;
