import React from "react";
import "./button.css"

const Button = ({text, style,size }) => {
 const stylesButton = style ? `btn-${style}`:'btn-light'
    return (
         <button className={`btn ${stylesButton} btn_${size}`}>{text}</button>
         )}

export default Button;