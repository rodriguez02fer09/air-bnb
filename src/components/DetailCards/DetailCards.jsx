import React from "react";
import "./detailCards.css";
import { FaWifi, FaSwimmer, FaStar, FaMapMarkerAlt } from "react-icons/fa";
const detailInfor = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1600671012016-e5890d87f804?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fGhvdGVsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Hotel",
    stars: "5",
    puntaje: "8",
    definicion: "Muy Bueno ",
    title: "Hermitage Hotel",
    location: "A 940 m del centro ",
    description:
      "En el corazón de San Telmo, disfruta de un albergue inspirado en las pasiones de Buenos Aires",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1600077625345-f401f4ba2fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9zdGVsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    category: "Hotel",
    stars: "5",
    puntaje: "8",
    definicion: "Muy Bueno ",
    title: "Hermitage Hotel",
    location: "A 940 m del centro ",
    description:
      "En el corazón de San Telmo, disfruta de un albergue inspirado en las pasiones de Buenos Aires",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRlcGFydGFtZW50b3MlMjBiZWR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",

    category: "Hotel",
    stars: "5",
    puntaje: "8",
    definicion: "Muy Bueno ",
    title: "Hermitage Hotel",
    location: "A 940 m del centro ",
    description:
      "En el corazón de San Telmo, disfruta de un albergue inspirado en las pasiones de Buenos Aires",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1630994347131-96d17ec41ba2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGJlZCUyMGFuZCUyMGJyZWFrZmFzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    category: "Hotel",
    stars: "5",
    puntaje: "8",
    definicion: "Muy Bueno ",
    title: "Hermitage Hotel",
    location: "A 940 m del centro ",
    description:
      "En el corazón de San Telmo, disfruta de un albergue inspirado en las pasiones de Buenos Aires",
  },
];

const DetailCards = () => {
  return (
    <div className="main-container__detail">
      <div className="container_category_name">
        <div className="categoy_starts">
          <p>Hotel</p>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <div className="categoy_names">
          <p>Hermitage Hotel</p>
        </div>
      </div>
      <div class>

      </div>
    </div>
  );
};
export default DetailCards;
