import React from "react"
import "../Input/input.css"

const Input = ({label, type, size}) => {
    const classNew ='container-input'
    return(
        <div className={`${classNew}`}>
            <label className={`${classNew}_label`}>{label}</label>
            <input type={type} className={`${classNew}_input input_${size}`} />

        </div>
    )

}

export default Input;