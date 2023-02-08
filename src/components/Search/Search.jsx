import React from "react";
import "./search.css";
import Button from "../Button/Button";
import DropDownLocations from "../DropDownLocations/DropDownLocations";
import DropDownDate from "../DropDownDate/DropDownDate";
import dateIcon from "../../assets/date.svg";
import locationIconBlack from "../../assets/locationIconBlack.svg";

const locations = [
  { city: "San Carlos de Bariloche", country: "Argentina" },
  { city: "Buenos Aires", country: "Argentina" },
  { city: "Mendoza", country: "Argentina" },
  { city: "Córdoba", country: "Argentina" },
];

const Search = () => {
  return (
    <section className="container_search">
      <div className="container_search_cities_date">
        <div className="container_search_title">
          <h1>Busca ofertas en hoteles , casa y mucho más</h1>
        </div>
        <div className="container_search_dropdown">
          <div className="container_search_dropdown_input">
            <DropDownLocations
              className="container_search_dropdown_DropDownLocations"
              img={locationIconBlack}
              locations={locations}
            />
            <DropDownDate img={dateIcon} placeholder="Check in - Check out" />
          </div>
          <div className="container_search_button">
            <Button text="Buscar" style="dark" size="btn_1" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Search;
