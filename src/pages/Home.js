import React from "react";
import Food from "../components/Food/Food";
import '../styles/Home.css';

import Craft1 from "../assets/craft1.jpeg";
import Craft2 from "../assets/craft2.jpeg";
import Violet1 from "../assets/violet1.jpeg";
import Violet2 from "../assets/violet2.jpeg";


const Header = () => {
   return (
      <div>
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
         <Food bgImg1={Craft1} bgImg2={Craft2} />
         <Food bgImg={Violet1} />
         <Food bgImg={Violet2} />
      </div>
   );
}

export default Header;