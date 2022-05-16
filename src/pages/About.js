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
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam id atque expedita aspernatur cupiditate vero, molestiae rem quaerat adipisci qui, quidem accusantium cum. Ullam officiis eaque cupiditate sunt rem! Voluptas pariatur perspiciatis doloremque libero praesentium quo, non reiciendis tempora exercitationem molestiae dolorum repellat voluptatibus ad impedit ex sed, sint nihil illum cumque aperiam harum modi, facilis vel vero! Perspiciatis dolores temporibus, ad architecto nulla totam quae! Veniam obcaecati quis nemo culpa repudiandae quisquam quo amet molestias fugiat neque atque repellat eos omnis, iste iusto sit, deleniti doloribus laudantium. Ullam at animi incidunt quaerat non quidem sapiente quos perspiciatis tenetur reprehenderit.</p>
         </div>
      </div>
   );
}

export default About;
