import React from "react";
import "./search.css"
import Button from '../Button/Button'
import DropDownLocations from "../DropDownLocations/DropDownLocations"

const locations =[{ciudad:"San Carlos de Bariloche",pais:"Argentina"},{ciudad:"Buenos Aires",pais:"Argentina"},{ciudad:"Mendoza",pais:"Argentina"},{ciudad:"Córdoba",pais:"Argentina"}]

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
