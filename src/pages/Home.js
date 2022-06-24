import React from "react";
import '../styles/Home.css';

// Import images
import craft1 from "../assets/craft1.jpeg";
import craft2 from "../assets/craft2.jpeg";
import Food from "../components/food/Food";



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
         <Food bgImg1={craft1} bgImg2={craft2} />
      </div>
   );
}

export default Header;