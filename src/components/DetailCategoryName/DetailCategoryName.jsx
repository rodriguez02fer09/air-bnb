import React from "react";
import "./detailCategoryName.css";
import  DetailCategoryStars from "../DetailCategoryStars/DetailCategoryStars";


const DetailCategoryName = ({ category, title ,star}) => {

  return (
    <div className="detail_category">
      <div className="detail_category__product">
        <p>{category}</p>
        <DetailCategoryStars star={star}/>
      </div>
      <div className="detail_category__name">
        <p>{title}</p>
      </div>
    </div>
  );
};
export default DetailCategoryName;
