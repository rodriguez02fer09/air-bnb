import React from "react"
import "../Input/input.css"

const Input = ({label, type, size, value ,name, handlerchange}) => {
    const classNew ='container-input'
    return(
        <div className={`${classNew}`}>
            <label className={`${classNew}_label`}>{label}</label>
            <input type={type} className={`${classNew}_input input_${size}`} value={value} name={name} onChange={handlerchange}/>

        </div>
    )

}

export default Input;