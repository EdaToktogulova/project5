import React from "react";
import { Link } from "react-router-dom";
import BannerImage from '../assets/header.jpeg';
import '../styles/Home.css';

function Home() {
   return (
      <div className="home"  style={{ backgroundImage:  `url(${BannerImage   })`}}>
         <div className="headerContainer">
            <h1>ICE-CREAM</h1>
            <h1>SHOP</h1>
            <p>ice-cream to fit any taste</p>
            <Link to="/menu">
               <button>ORDER NOW</button>
            </Link>
         </div>
      </div>
   )
}

export default Home;
