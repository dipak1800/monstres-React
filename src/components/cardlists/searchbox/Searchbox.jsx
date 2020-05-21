import React from "react";
import "./Searchbox.css";

function Searchbox(props) {
  return (
    <div style={{textAlign:'center'}}>
      <input
        className="searchbar"
        type="search"
        placeholder={props.placeholder}
        onChange={props.hanleChange}
      ></input>
    </div>
  );
}

export default Searchbox;
