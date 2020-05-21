import "./cards.css";
import React from "react";
import Cardsrender from "../cardlists/cards/cardsrender";

const Cards = (props) => {
  console.log(props);
  return (
    <div className="cardlist">
      {props.monsters.map((monster) => (
        <Cardsrender key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default Cards;
