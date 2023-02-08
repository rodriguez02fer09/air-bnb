import React from "react";
import "./inputIcon.css";

const InputIcon= ({ placeholder, handlerOnClick, img,value}) => {
  return (
    <div className="container_dropDown">
      <div className="container_dropDown_input">
      <img src={img} alt="locationIcon" />
        <input value={value} onClick={handlerOnClick} type="text"  placeholder={placeholder}/>
      </div>
    </div>
  );
};

export default InputIcon;