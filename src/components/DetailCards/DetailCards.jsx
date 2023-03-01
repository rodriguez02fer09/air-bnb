import React from "react";
import "./detailCards.css";
import { FaWifi, FaSwimmer, FaStar, FaMapMarkerAlt } from "react-icons/fa";


const DetailCards = ({category,stars,puntaje,definicion,title, location,description}) => {
  return (
    <div className="main-container__detail">
      <div className="container-detail_info">
        <div className="container-detail_category">
          <div className="detail_category__product">
            <p>{category}</p>
            <div className="detail_category__stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <div className="detail_category__name">
            <p>{title}</p>
          </div>
        </div>
        <div className="detail-category__punt">
          <div className="category__puntaje">
            <p>{puntaje}</p>
          </div>
          <p>{definicion}</p>
        </div>
      </div>
      <div className="detail_category__location">
        <FaMapMarkerAlt />
        <p> {location}
        <a> Mostrar en el mapa</a>
        </p>
      </div>
      <div className="category-location__icon">
        <FaWifi />
        <FaSwimmer />
        </div>
      <div className="detail_category__descrip">
        <p>{description}
         <a href="">Ver màs ... </a>
        </p>
      </div>
    </div>
  );
};
export default DetailCards;