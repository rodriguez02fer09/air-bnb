import React from "react";
import "./detailCategoryPuntaje.css"


const DetailCategoryPuntaje =({puntaje , definicion})=>{
    return(
        <div className="detail-category__punt">
          <div className="category__puntaje">
            <p>{puntaje}</p>
          </div>
          <p>{definicion}</p>
        </div>
    )

}

export default DetailCategoryPuntaje;