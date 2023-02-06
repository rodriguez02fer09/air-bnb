import React from "react";
import "./search.css"
import Button from '../Button/Button'
import DropDownLocations from "../DropDownLocations/DropDownLocations"

const locations =[{city:"San Carlos de Bariloche",country:"Argentina"},{city:"Buenos Aires",country:"Argentina"},{city:"Mendoza",country:"Argentina"},{city:"Córdoba",country:"Argentina"}]

const Search = () => {
  return (
    <section className="container_search">
      <h1>
        Busca ofertas en hoteles , casa y mucho más
      </h1>
      <div className="container_search_cities_date">
      <DropDownLocations locations={locations}/>
      <Button text="Buscar" style="dark" size="0" />
      </div>
    </section>
  );
};
export default Search;
