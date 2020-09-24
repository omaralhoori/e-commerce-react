import React from 'react';

import './login-registerpage.scss'

import SignIn from '../../components/sigin-in/sigin-in'
import SignUp from '../../components/sign-up/sign-up'

const LoginRegisterPage = () => {
    return (
        <div className='login-registerpage'>
            <SignIn />
            <SignUp />
        </div>
    );
}

 
export default LoginRegisterPage;