import React from 'react'
import './Button.css'

type ButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
    classname?: string;
}
const Button: React.FC<ButtonProps> = ({children,onClick,classname}) => {
  return (
    <button className={`button ${classname || ""}`}
    onClick={onClick} > 
    {children} </button>
  );
};

export default Button;