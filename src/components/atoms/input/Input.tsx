import React from 'react'
import './Input.css'

type Inputprops = {
    type: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    className: string;
    id: string; 
}

const Input: React.FC<Inputprops> = ({type,name,value,onChange,placeholder,className,id}) => {
  return (
    <div>
        <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`input ${className || ""}`}
        id={id}/>
        
  </div>
  )
}

export default Input