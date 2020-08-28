import React, { InputHTMLAttributes } from 'react';
import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

const Checkbox: React.FC<InputProps> = ( {name, label, ...rest} ) => {
    return (
        <div className="checkbox-block">
            <input type='checkbox' id={name} {...rest} />
            <label htmlFor={name}>{label}</label>
        </div>
    );
}

export default Checkbox;