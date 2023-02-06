import React from "react";
import "./inputIcon.css";
import img from "../../assets/locationIcon.svg"

const InputIcon= ({ placeholder, handlerOnClick}) => {
  return (
    <div className="container_dropDown">
      <div className="container_dropDown_input">
      <img src={img} alt="locationIcon"/>
        <input onClick={handlerOnClick} type="text" placeholder={placeholder}/>
      </div>
    </div>
  );
};

export default InputIcon;