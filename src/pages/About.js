import React from "react";
import IceCream from "../assets/iceCream.jpeg";
import "../styles/About.css";

function About() {
   return (
      <div className="about">
         <div className="aboutTop" style={{ backgroundImage: `url(${IceCream})` }}></div>
         <div className="aboutBottom">
            <h1>About Us</h1>
            <p>
               ‘Lux Ice-Cream’ is another American dessert parlor, concentrated on
               serving surface-driven little group frozen yogurts with a recharged
               consideration regarding flavor and sense of taste. Proprietor and
               originator build up every formula explicitly for every individual
               flavor. The uprightness of his fixings is never traded off with added
               substances or handled balancing out.
            </p>
         </div>
      </div>
   );
}

export default About;
