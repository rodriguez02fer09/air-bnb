import React from "react";
import "./dropDownDate.css";
import InputIcon from "../InputIcon/InputIcon";


const DropDownDate = ({img}) => {
  return (
  <div className="container-dorpdownDate">
    <InputIcon  placeholder="Check in - Check out" img={img}/>
  </div>
  
  );
};
export default DropDownDate;
