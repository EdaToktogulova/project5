import React from 'react';
import IceCream from "../assets/iceCream.jpeg";
import '../styles/About.css';

function About() {
   return (
      <div className="about">
         <div className="aboutTop" 
         style={{ backgroundImage: `url(${IceCream})` }}>
         </div>
         <div className="aboutBottom">
            <h1>ABOUT US</h1>
            <p>loresfjjjjjjjjjjjjnvjbshjfhjehjfihnvuesfigtophhdsf</p>
         </div>
      </div>
   );
}

export default About;
