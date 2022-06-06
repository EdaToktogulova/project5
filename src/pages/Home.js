import React from "react";
import '../styles/Home.css';

import Food from '../components/food/Food.jsx';

// Import images
import Craft1 from "../assets/craft1.jpeg"
import Craft2 from "../assets/craft2.jpeg"
import Violet1 from "../assets/violet1.jpeg"
import Violet2 from "../assets/violet2.jpeg"

const Header = () => {
   return (
      <div className="header">
         <div className="container">
            <div className="content">
               <div className="text">
                  <p>welcome to our</p>
               </div>
               <h1>Ice-Cream</h1>
               <h1>Shop</h1>
               <button className="btn">Delivery</button>
               <button className="btn">Take-out</button>
            </div>
         </div>
      </div>
   );
}

export default Header;