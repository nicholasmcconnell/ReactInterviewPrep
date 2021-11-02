import React from "react";
import './button.css';

interface ButtonProps {
    label: string;
}
const Button: React.FC<ButtonProps> = ({ label }) => {
    return (
        <div data-testid='button' className='button-style'>{label}</div>
    )
}

export default Button;