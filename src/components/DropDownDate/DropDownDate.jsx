import React from "react";
import "./dropDownDate.css";
import InputIcon from "../InputIcon/InputIcon";
// import DateSearchBar from "../DateSearchBar/DateSearchBar";


const DropDownDate = ({img}) => {
  return (
  <div className="container-dorpdownDate">
    <InputIcon  placeholder="Check in - Check out" img={img} size="3"/>
    {/* <DateSearchBar/> */}
  </div>
  
  );
};
export default DropDownDate;
