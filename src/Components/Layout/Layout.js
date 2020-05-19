import React from 'react';
// import Aux from "../../hoc/Auxiliary";
import "./Layout.css";


const layout = (props) => {
  return (
    <div className="layout">
     <div >
       Toolbar, Sidedrawer, Backdrop
     </div>
     <main >
       {props.children}
     </main>
    </div>
  );
}
 
export default layout;