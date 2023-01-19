import React from "react";
import "./button.css"

const Button = ({text, style }) => {
 const stylesButton = style ? `btn-${style}`:'btn-light'
    return (
         <button className={`btn ${stylesButton}`}>Buttom</button>
         )}

export default Button;