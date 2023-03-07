import React from "react";
import "./detailCategoryLocation.css"
import { FaMapMarkerAlt } from "react-icons/fa";

const DetailCategoryLocation =( {location}) => {

    return( <div className="detail_category__location">
    <FaMapMarkerAlt />
    <p>
      {" "}
      {location}
      <a> Mostrar en el mapa</a>
    </p>
  </div>)

}

export default DetailCategoryLocation;
