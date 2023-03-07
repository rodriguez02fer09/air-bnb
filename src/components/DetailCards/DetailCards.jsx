import React from "react";
import "./detailCards.css";
import { FaWifi, FaSwimmer } from "react-icons/fa";
import DetailCategoryName from "../DetailCategoryName/DetailCategoryName";
import DetailCategoryPuntaje from "../DetailCategoryPuntaje/DetailCategoryPuntaje";
import DetailCategoryStars from "../DetailCategoryStars/DetailCategoryStars";
import DetailCategoryLocation from "../DetailCategoryLocation/DetailCategoryLocation";
import DetailCategoryDescription from "../DetailCategoryDescription/DetailcategoryDescription"

const DetailCards = ({
  category,
  puntaje,
  star,
  definicion,
  title,
  location,
  description,
}) => {
  return (
    <div className="main-container__detail">
      <div className="container-detail_info">
        <div className="container-detail_category">
          <DetailCategoryStars star={star} />
          <DetailCategoryName category={category} title={title} />
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
