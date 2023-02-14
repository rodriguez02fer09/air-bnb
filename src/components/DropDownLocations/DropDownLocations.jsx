import React ,{useEffect,useState}from "react";
import "./dropDownLocations.css";
import InputIcon from "../InputIcon/InputIcon"
import ItemCities from "../ItemCities/ItemCities";

const DropDownLocations = ({locations = [], img }) => {

  const [open , setOpen] = useState (false);
  const [currentLocation , setCurrentLocation]=useState()

  const toggleDropDown = () => {
    setOpen((state) => !state)
  }

  const selectLocation = (location ) => {
    setOpen(!open)
    setCurrentLocation(location)
  }

  return (
  <div className="container-dorpdowncities">
    <InputIcon value={currentLocation} handlerOnClick={toggleDropDown} img={img} placeholder="¿ A donde vamos?" />
    <div className="container-list">
      {open && locations.map(({city, country}, index)=>{
        return (
          <ItemCities handlerClick={selectLocation} key={index} city={city} country={country}/>)
      })}
    </div>
  </div>
)};

export default DropDownLocations;