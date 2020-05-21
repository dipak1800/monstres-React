import React from "react";
import "./cardsrender.css";

function Cardsrender(props) {
  return (
    <div key={props.monster.id} className="card-container">
      <img
        alt="I AM A MONSTER:("
        src={`https://robohash.org/${props.monster.id}?set=set1&size=200x200`}
      ></img>
      <h1>{props.monster.name}</h1>
      <p style={{ fontSize: "17px" }}>{props.monster.email}</p>
    </div>
  );
}

export default Cardsrender;
