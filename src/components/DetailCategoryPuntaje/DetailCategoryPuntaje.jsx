import React from "react";
import "./detailCategoryPuntaje.css"


const DetailCategoryPuntaje =({puntaje , definicion})=>{
    return(
        <div className="detail-category__point">
          <div className="detail-category__point__value">
            <p>{puntaje}</p>
          </div>
          <div className="detail-category__point__definition">
            <p>{definicion}</p>
          </div>
        </div>
    )

}

export default DetailCategoryPuntaje;