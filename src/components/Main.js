import React from "react";
import Card from "./Card";
import greekSalad from "../assets/Salad.jpg";
import bruschetta from "../assets/Bruchetta.svg";
import LemonDessert from "../assets/LemonDessert.jpg";
import about from '../assets/about.svg';


import './Main.css';

const specialsData = [
  {
    img: greekSalad,
    title: "Greek Salad",
    price: 12.99,
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    img: bruschetta,
    title: "Bruschetta",
    price: 5.99,
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    img: LemonDessert,
    title: "Lemon Dessert",
    price: 5.0,
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

function Main() {
  const specialsCards = specialsData.map((item) => {
    return (
      <Card
        key={item.title}
        image={item.img}
        title={item.title}
        price={item.price}
        description={item.description}
      />
    );
  });

  return (
    <main>
      <section className="specials">
        <div className="top">
          <h1>This weeks specials!</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Sit leo vestibulum viverra lectus turpis pharetra pharetra. Ullamcorper pellentesque mauris libero suspendisse quisque rhoncus sit. Accumsan tincidunt nunc aliquet orci commodo arcu eget metus. Dictumst suscipit ut enim quam dignissim facilisis in diam enim.</p>
        </div>
        <div className="cards">{specialsCards}</div>
      </section>
      <br/>
      
      <section className ="head">
      <div className="left">
      <h1>Little Lemon <br/> Chicago </h1>

      <p>Lorem ipsum dolor sit amet consectetur. Sit leo vestibulum viverra lectus turpis pharetra pharetra. Ullamcorper pellentesque mauris libero suspendisse quisque rhoncus sit. <br/>Accumsan tincidunt nunc aliquet orci commodo arcu eget metus. Dictumst suscipit ut enim quam dignissim facilisis in diam enim.</p>

        
      </div>
      <div className="right">
        
        <img
          src={about}
          alt="our cook holding a tablet with delicoues baguettes"
        /> 
      </div>
      </section>
      


    </main>
    

    
  );
}

export default Main;
