import React from 'react';
import MultiplePizza from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{backgroundImage:`url(${MultiplePizza})`}} >
     
      </div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p><center>Order pizza, pasta, sandwiches & more online for carryout or delivery from Pritzz,s Pizzeria. View menu, find locations, track orders.</center></p>
      </div>
    </div>
  )
}

export default About;
