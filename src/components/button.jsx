import React from 'react';

const Button = ({ btntype, children, onClick, extra, ...rest }) => {
    return (
        <button type={btntype} className={`btn ${extra}`} onClick={onClick} {...rest}>
            {children}
        </button>
    );
};

export default Button;
