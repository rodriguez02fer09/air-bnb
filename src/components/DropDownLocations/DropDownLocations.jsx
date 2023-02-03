import React from "react";
import "./dropDownLocations.css";
import InputIcon from "../InputIcon/InputIcon"
import ItemCities from "../ItemCities/ItemCities";

const DropDownLocations = ({locations = []}) => {
  return (<div className="container-dorpdowncities">
    <InputIcon placeholder="¿ A donde vamos?"/>
    {locations.map((location,index)=>{
      return (<ItemCities ciudad={location.ciudad} pais={location.pais}/>)
    })}
  </div>
)};

export default DropDownLocations;