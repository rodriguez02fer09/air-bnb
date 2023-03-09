import React from "react";
import "./detailCategoryStars.css";
import { FaStar } from "react-icons/fa";

const DetailCategoryStars = ({star}) => {
    const renderStarts = (quantity, color) => {
        const quantityStars = [];
        for (let i = 0; i < quantity; i++) {
          quantityStars.push(<FaStar key={i} color={color} />);
        }
        return quantityStars.map((start) => start);
      };

  return (
    <div className="detail_category__stars">
      {renderStarts(star, "#F0572D")}
      {renderStarts(5 - star, "#31363F")}
    </div>
  );
};

export default DetailCategoryStars;
