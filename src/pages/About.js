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
            <p>

               ‘Lux Ice-Cream’ is another American dessert parlor, concentrated on serving surface-driven little group frozen yogurts with a recharged consideration regarding flavor and sense of taste. Proprietor and originator build up every formula explicitly for every individual flavor.

               The uprightness of his fixings is never traded off with added substances or handled balancing out. “Each frozen yogurt is made considering the flavor profile first.” With this hands-on methodology, the owner hopes to change the manner in which individuals eat and consider this nostalgic treat, by giving dessert darlings a completely unique and contemporary frozen yogurt encounter.

               The owner is an independent restaurateur, with broad cake involvement in some of New York’s best foundations. In 2022, he opened ‘Lux Ice-Cream’.

               “‘Lux Ice-Cream’ is my opportunity to express my affection for the quintessential American liberality. I have been longing for these flavors, this style, and this place for a considerable length of time.”</p>
         </div>
      </div>
   );
}

export default About;
