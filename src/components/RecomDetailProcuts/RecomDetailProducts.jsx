import React from "react";
import "./recomDetailProducts.css";

import { FaHeart } from "react-icons/fa";
import DetailCards from "../DetailCards/DetailCards";
 import Button from "../Button/Button";


const RecomDetailProducts = ({detailInfor  = [] }) => {
  return (
    <div className="main_container_cards">
      <div className="container_cards__title">
      <h2>Recomendaciones</h2>
      </div>
  
      <div className="container_cards">
        {detailInfor.map(({ image,category,title,puntaje,definicion,location,description, stars}, index) => {
          return (
            <div className="container_card_detail">
              <div className="container_cards_img">
                <img src={image} />
                <FaHeart />
              </div>
              <div className="container_detail__information">
               <DetailCards category={category} title={title} puntaje={puntaje} star={stars} definicion={definicion} location={location} description={description}  />
               <Button text="Ver más" style="dark" size="2" /> 
               </div>
            </div>
          );
        })}
        
      </div>
    </div>
  );
};
export default RecomDetailProducts;
