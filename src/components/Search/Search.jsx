import React from "react";
import "./search.css"
import InputIcon from "../InputIcon/InputIcon";
import Button from '../Button/Button'
import LocationIcon  from"../../assets/locationIcon.svg"
import ItemCities from "../ItemCities/ItemCities"



const Search = () => {
  return (
    <section className="container_search">
      <h1>
        Busca ofertas en hoteles , casa y mucho más
      </h1>
      <div className="container_search_cities_date">
     <InputIcon placeholder="¿ A donde vamos" img = {LocationIcon}/>
    <ItemCities/>
      <Button text="Buscar" style="dark" size="0" />
      </div>
    </section>
  );
};
export default Search;
