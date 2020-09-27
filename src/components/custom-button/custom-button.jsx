import React from 'react';

import './custom-button.scss'

const CustomButton = ({ children, isGoogleSiginIn, inverted,...otherProps }) => {
    return (
        <button className={`
        ${isGoogleSiginIn ? 'google-sigin-in' : ''} 
        ${inverted ? 'inverted' : ''} 
        custom-button `} {...otherProps}>
            {children}
        </button>
    );
}


export default CustomButton;