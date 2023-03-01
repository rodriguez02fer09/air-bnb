import React from "react";
import "./categoryProducts.css";

const categories = [
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

const CategoryProducts = () => {
  return (
    <div className="conatiner_products">
      <div className="conatiner-products_title">
        <p>Buscar por tipo de alojamiento</p>
      </div>
      <div className="conatiner-products_category">
        {categories.map(({ image, category, amount }, index) => {
          return (
            <div className="card-category">
              <div className="card-category_img">
                <img
                  src={image}
                  alt="imagen categoria"
                />
              </div>
              <div className="card-category_info">
                <p>{category}</p>
                <p> {amount} {"Hoteles"}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryProducts;
