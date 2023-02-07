import React ,{useEffect,useState}from "react";
import "./dropDownLocations.css";
import InputIcon from "../InputIcon/InputIcon"
import ItemCities from "../ItemCities/ItemCities";

const DropDownLocations = ({locations = [], img }) => {

  const [open , setOpen] = useState (false);
  const handlerOnClick = () => {
    setOpen(!open)
  }

  return (<div className="container-dorpdowncities">
    <InputIcon handlerOnClick={handlerOnClick} img={img} placeholder="¿ A donde vamos?" />
    {open && locations.map(({city, country}, index)=>{
      return (<ItemCities key={index} city={city} country={country}/>)
    })}
  </div>
)};

export default DropDownLocations;