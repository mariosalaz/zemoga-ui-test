import React from 'react';

const Button = ({text}) => {
    return (
        <div className="button-container">
            <button type="button">{text}</button>
        </div>
    )
}

export default Button;