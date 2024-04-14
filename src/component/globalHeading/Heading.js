import React from "react";
import chichen_icon from "./chicken_icon.png";
import line from "./line.png";
import './heading.css';

function Heading(props) {
  // console.log(props)
  return (
    <div className="py-2 pt-4">
      <div className="position-relative py-2">
        <img src={line} className="" />
        <img src={chichen_icon} className="img_icon" />
      </div>
      <h1 className={props.col ? props.col : "hdg_tx"}>{props.text}</h1>
    </div>
  );
}

export default Heading;
