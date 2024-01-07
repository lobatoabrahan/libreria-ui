import React from 'react';

const Button = ({ children}) => (
    <button className={`px-4 py-2 bg-[#f0f0f0]`}>
        {children}
    </button>
);

export default Button;