import React from "react";
import "./dropDownDate.css";
import InputIcon from "../InputIcon/InputIcon";


const DropDownDate = ({img}) => {
  return (
  <div className="container-dorpdownDate">
    <InputIcon  placeholder="Check in - Check out" img={img} size="3"/>
  </div>
  
  );
};
export default DropDownDate;
