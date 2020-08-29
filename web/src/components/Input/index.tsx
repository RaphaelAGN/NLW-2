import React, { InputHTMLAttributes } from 'react';
import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    className: string;
}

const Input: React.FC<InputProps> = ( {name, label, className, ...rest} ) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type='text' id={name} className={className} {...rest} />
        </div>
    );
}

export default Input;