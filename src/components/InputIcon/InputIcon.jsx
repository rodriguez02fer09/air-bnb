import React from "react";
import "./inputIcon.css";
import img from "../../assets/locationIcon.svg"

const InputIcon= ({ placeholder}) => {
  return (
    <div className="container_dropDown">
      <div className="container_dropDown_input">
      <img src={img} alt="locationIcon"/>
        <input type="text" placeholder={placeholder}/>
      </div>
    </div>
  );
};

export default InputIcon;