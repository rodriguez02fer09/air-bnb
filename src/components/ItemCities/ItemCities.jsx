import React from "react";
import "./itemCities.css";
import LocationIconBlack from "../../assets/locationIconBlack.svg";

const ItemCities = ({ city, country,  handlerClick }) => {
  return (
    <div className="container_item" onClick={() => handlerClick(city)}>
      <div className="container_item_img">
        <img src={LocationIconBlack} alt="location" />
      </div>
      <div className="container_item_descripcion">
        <p className="container_item_ciudad">{city}</p>
        <p className="container_item_pais">{country}</p>
      </div>
    </div>
  );
};

export default ItemCities;
