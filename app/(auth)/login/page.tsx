'use client'

import React, { useState } from 'react';

import CreateAccountTermsText from '@ilhamirfan/components/common/createAccountTermsText';
import Copyright from '@ilhamirfan/components/common/copyright';
import EnterEmailState from './enterEmailState';
import EnterPasswordState from './enterPasswordState';

export default function LoginPage() {
    const [loginState, setLoginState] = useState('email');
    const [emailInput, setEmailInput] = useState('');

    function handleEmailSubmit(email: string) {
        setLoginState('password');
        setEmailInput(email);
    };

    function handleLoginSuccess() {
        alert("Login Success!");
    }

    return (
        <div className='row h-100'>
            <div className='col-12 col-lg-6 form-container flex-column d-flex'>
                <div className='flex-grow-1'>
                    {loginState === 'email' && <EnterEmailState onEmailSubmit={handleEmailSubmit} />}
                    {loginState === 'password' && (
                        <EnterPasswordState currentEmail={emailInput} onLoginSuccess={handleLoginSuccess} />
                    )}
                    <CreateAccountTermsText />
                </div>
                <Copyright />
            </div>
            <div className='col-6 d-none d-lg-block mosque-background'></div>
        </div>
    );
}
