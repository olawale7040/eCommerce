import React from 'react';

import './custom-button.styles.scss';


const CustomButton = ({children, GoogleSignIn , ...otherProps}) =>(
    <button className={`${GoogleSignIn} == 'google-sign-in' ? 'google-sign-in' : '' custom-button` } {...otherProps}>
        {children}
    </button>
)

export default CustomButton;