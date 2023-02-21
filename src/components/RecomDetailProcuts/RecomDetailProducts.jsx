import React from "react";
import "./recomDetailProducts.css";
import {
  FaHeart,
  FaWifi,
  FaSwimmer,
  FaStar,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Button from "../Button/Button";
const products = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1600671012016-e5890d87f804?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fGhvdGVsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Hoteles",
    amount: "807.105",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1554968756-e41553ee4eb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    category: "Glamping",
    amount: "807.105",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Casas de playa",
    amount: "807.105",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Cabañas",
    amount: "807.105",
  },
];

const RecomDetailProducts = () => {
  return (
    <div className="main_container_cards">
      <h2>Recomendaciones</h2>
      <div className="container_cards">
        {products.map(({ image }) => {
          return (
            <div className="container_card_detail">
              <div className="container_cards_img">
                <img
                  src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2VydmljZXMlMjBpbiUyMGElMjBob3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <FaHeart />
              </div>
              <div className="container_cards_info"></div>
              {/* <h3>informacion</h3>
               <Button text="Ver mas" style="dark" size="1" /> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default RecomDetailProducts;