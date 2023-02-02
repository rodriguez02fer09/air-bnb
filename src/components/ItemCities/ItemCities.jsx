import React from "react";
import "./itemCities.css";
import LocationIconBlack from "../../assets/locationIconBlack.svg";

const ItemCities = () => {
  return (
    <div className="container_item">
      <div className="container_item_img">
        <img src={LocationIconBlack} alt="location" />
      </div>
      <div className="container_item_descripcion">
      <p className="container_item_ciudad">Ciudad</p>
      <p className="container_item_pais">Pais</p>
    </div>
    </div>
  );
};

export default ItemCities;
