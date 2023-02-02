import React from "react";
import "./itemCities.css";
import LocationIconBlack from "../../assets/locationIconBlack.svg"

const ItemCities = () => {
  return(
    <div className="container_item">
<img src={LocationIconBlack} alt="imglocation" />
        <p className="container_item_ciudad">Ciudad</p>
        <p className="container_item_pais">Pais</p>
    </div>
  )
};

export default ItemCities;
