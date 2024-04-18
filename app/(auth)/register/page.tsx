'use client'

import Copyright from '@ilhamirfan/components/common/copyright'
import React, { useState } from 'react'
import EnterEmailState from './enterEmailState';
import CreateAccountTermsText from '@ilhamirfan/components/common/createAccountTermsText';
import EnterDataState from './enterDataState';
import EnterPasswordState from './enterPasswordState';

export default function RegisterPage() {
    const [loginState, setLoginState] = useState('email');

    const [emailInput, setEmailInput] = useState("");
    const [firstNameInput, setFirstNameInput] = useState("")
    const [lastNameInput, setLastNameInput] = useState("")
    const [userNameInput, setUserNameInput] = useState("")
    const [phoneInput, setPhoneInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const [confirmPasswordInput, setConfirmPasswordInput] = useState("")

    function handleEmailSubmit(email: string) {
        setLoginState('data');
        setEmailInput(email);
    };

    function handleDataSuccess(firstName: string, lastName: string, userName: string, phone: string) {
        setLoginState("password")
        setFirstNameInput(firstName);
        setLastNameInput(lastName);
        setUserNameInput(userName);
        setPhoneInput(phone);
    }

    function handleDataCancel() {
        setLoginState("email")
    }

    function handleRegisterSuccess() {
        alert("Success")
    }

    function handleRegisterCancel() {
        setLoginState("data")
    }

    return (
        <div className='row h-100'>
            <div className='col-12 col-lg-6 form-container flex-column d-flex'>
                <div className='flex-grow-1'>
                    {
                        loginState === 'email' &&
                        <EnterEmailState
                            email={emailInput}
                            onEmailSubmit={handleEmailSubmit}
                        />
                    }
                    {
                        loginState === 'data' &&
                        <EnterDataState
                            firstName={firstNameInput}
                            lastName={lastNameInput}
                            userName={userNameInput}
                            phone={phoneInput}
                            onDataSubmit={handleDataSuccess}
                            onDataCancel={handleDataCancel}
                        />
                    }
                    {
                        loginState === 'password' &&
                        <EnterPasswordState
                            onPasswordSubmit={handleRegisterSuccess}
                            onPasswordCancel={handleRegisterCancel}
                        />
                    }
                    <CreateAccountTermsText />
                </div>
                <Copyright />
            </div>
            <div className='col-6 d-none d-lg-block mosque-background'></div>
        </div>
    );
}
