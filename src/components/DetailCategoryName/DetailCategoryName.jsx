import React from "react";
import "./detailCategoryName.css";

const DetailCategoryName = ({ category, title }) => {
  return (
    <div className="detail_category">
      <div className="detail_category__product">
        <p>{category}</p>
      </div>
      <div className="detail_category__name">
        <p>{title}</p>
      </div>
    </div>
  );
};
export default DetailCategoryName;
