import React from "react";
import "./detailCards.css";
import { FaWifi, FaSwimmer } from "react-icons/fa";
import DetailCategoryName from "../DetailCategoryName/DetailCategoryName";
import DetailCategoryPuntaje from "../DetailCategoryPuntaje/DetailCategoryPuntaje";
import DetailCategoryLocation from "../DetailCategoryLocation/DetailCategoryLocation";
import DetailCategoryDescription from "../DetailCategoryDescription/DetailcategoryDescription"

const DetailCards = ({
  category,
  puntaje,
  definicion,
  title,
  location,
  description,
  star
}) => {

  return (
    <div className="main-container__detail">
      <div className="container-detail_info">
        <div className="container-detail_category">
          <DetailCategoryName category={category} title={title} star={star}/>
        </div>
        <DetailCategoryPuntaje puntaje={puntaje} definicion={definicion} />
      </div>
      <DetailCategoryLocation location={location} />
      <div className="category-location__icon">
        <FaWifi />
        <FaSwimmer />
      </div>
      <DetailCategoryDescription description={description} />
    </div>
  );
};
export default DetailCards;
