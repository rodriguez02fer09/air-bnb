import React from "react"
import "../Input/input.css"

const Input = ({label, type, size, value ,name, handlerchange ,errors}) => {

    const className = errors[name] ? 'container-input_error container-input': 'container-input';
    return(
        <div className={`${className}`}>
            <label className={`${className}_label`}>{label}</label>
            <input type={type} className={`${className}_input input_${size}`} value={value} name={name} onChange={handlerchange} />
            { 
               errors[name] && <span>{errors[name]}</span>
            }

        </div>
    )
}

export default Input;