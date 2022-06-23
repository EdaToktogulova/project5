import React from 'react';
import CreamLeft from '../assets/creamLeft.jpeg'
import '../styles/Contact.css';

function Contact() {
   return (
      <div className='contact'>
         <div className='leftSide'
            style={{ backgroundImage: `url(${CreamLeft})` }}>
         </div>
         <div className='rightSide'>
            <h1>Contact Us</h1>
            <form id="contact-form" method="POST">
               <label htmlFor="name">Full name</label>
               <input id="name" placeholder="Enter full name..." type="text" />
               <label htmlFor="email">Email</label>
               <input id="email" placeholder="Enter email..." type="email" />
               <label htmlFor="messsage">Messsage</label>
               <textarea rows="6" placeholder="Enter message..." name="message" required />
               <button type="submit"> Send Messsage</button>
            </form>
         </div>
      </div>
   )
}

export default Contact;
