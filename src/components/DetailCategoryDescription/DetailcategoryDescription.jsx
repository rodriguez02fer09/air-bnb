import React from "react";
import "./detailCategoryDescription.css"

const DetailCategoryDescription=( {description})=>{

    return( <div className="detail_category__descrip">
    <p>
      {description}
      <a href="">Ver màs ... </a>
    </p>
    </div>)
}

export default DetailCategoryDescription;