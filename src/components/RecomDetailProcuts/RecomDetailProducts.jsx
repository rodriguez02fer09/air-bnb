import React from "react";
import "./recomDetailProducts.css";

import { FaHeart } from "react-icons/fa";
import DetailCards from "../DetailCards/DetailCards";
 import Button from "../Button/Button";

const products = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1600671012016-e5890d87f804?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fGhvdGVsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Hoteles",
    amount: "807.105",
  },
  // {
  //   id: 2,
  //   image:
  //     "https://images.unsplash.com/photo-1554968756-e41553ee4eb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
  //   category: "Glamping",
  //   amount: "807.105",
  // },
  // {
  //   id: 3,
  //   image:
  //     "https://images.unsplash.com/photo-1600671012016-e5890d87f804?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fGhvdGVsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  //   category: "Hoteles",
  //   amount: "807.105",
  // },
  // {
  //   id: 4,
  //   image:
  //     "https://images.unsplash.com/photo-1554968756-e41553ee4eb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
  //   category: "Glamping",
  //   amount: "807.105",
  // },
];

const RecomDetailProducts = () => {
  return (
    <div className="main_container_cards">
      <div className="container_cards__title">
      <h2>Recomendaciones</h2>
      </div>
      <div className="container_cards">
        {products.map(({ image }, index) => {
          return (
            <div className="container_card_detail">
              <div className="container_cards_img">
                <img src={image} alt="" />
                <FaHeart />
              </div>
              <div className="container_detail__information">
               <DetailCards/>
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
