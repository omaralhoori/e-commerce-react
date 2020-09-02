import React from 'react';

import './custom-button.scss'

const CustomButton = ({ children, isGoogleSiginIn, ...otherProps }) => {
    return (
        <button className={`${isGoogleSiginIn ? 'google-sigin-in' : ''} custom-button `} {...otherProps}>
            {children}
        </button>
    );
}


export default CustomButton;