import React from "react"
import "../Input/input.css"

const Input = ({label, type, size, value ,name, handlerchange , error = null}) => {
    const className = error ? 'container-input_error container-input': 'container-input';
    return(
        <div className={`${className}`}>
            <label className={`${className}_label`}>{label}</label>
            <input type={type} className={`${className}_input input_${size}`} value={value} name={name} onChange={handlerchange} />
            { 
                error && <p>Este campo es obligatorio</p>
            }

        </div>
    )
}

export default Input;