/* eslint-disable @next/next/no-img-element */
'use client'

import Copyright from '@ilhamirfan/components/common/copyright'
import React, { useState } from 'react'
import EnterEmailState from './enterEmailState';
import CreateAccountTermsText from '@ilhamirfan/components/common/createAccountTermsText';
import EnterDataState from './enterDataState';
import EnterPasswordState from './enterPasswordState';
import { requestRegister } from '@ilhamirfan/app/api/auth/[...nextauth]/registerAction';
import Image from 'next/image';
import mosqueBackground from '@ilhamirfan/public/image/background.png'

// Component definition
export default function RegisterPage() {
    // State variables for managing registration state and input values
    const [registerState, setRegisterState] = useState('email');
    const [emailInput, setEmailInput] = useState("");
    const [firstNameInput, setFirstNameInput] = useState("")
    const [lastNameInput, setLastNameInput] = useState("")
    const [userNameInput, setUserNameInput] = useState("")
    const [phoneInput, setPhoneInput] = useState("")

    // Function to handle email submission
    function handleEmailSubmit(email: string) {
        setRegisterState('data');
        setEmailInput(email);
    };

    // Function to handle successful data submission
    function handleDataSuccess(firstName: string, lastName: string, userName: string, phone: string) {
        setRegisterState("password")
        setFirstNameInput(firstName);
        setLastNameInput(lastName);
        setUserNameInput(userName);
        setPhoneInput(phone);
    }

    // Function to handle cancellation of data submission
    function handleDataCancel() {
        setRegisterState("email")
    }

    // Function to handle registration submission
    async function handleRegisterSubmit(password: string) {
        const result = await requestRegister(emailInput, password, firstNameInput, lastNameInput, userNameInput, phoneInput);

        if (result?.error) {
            throw Error(result.error);
        }

        setRegisterState("success")
    }

    // Function to handle cancellation of registration
    function handleRegisterCancel() {
        setRegisterState("data")
    }

    // JSX markup for the component
    return (
        <div className='row h-100'>
            <div className='col-12 col-lg-6 form-container flex-column d-flex'>
                <div className='flex-grow-1'>
                    {/* Render sub-components based on registration state */}
                    {
                        registerState === 'email' &&
                        <EnterEmailState
                            email={emailInput}
                            onEmailSubmit={handleEmailSubmit}
                        />
                    }
                    {
                        registerState === 'data' &&
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
                        registerState === 'password' &&
                        <EnterPasswordState
                            onPasswordSubmit={handleRegisterSubmit}
                            onPasswordCancel={handleRegisterCancel}
                        />
                    }
                    <CreateAccountTermsText />
                </div>
                <Copyright />
            </div>
            {/* Background image */}
            <div className='col-6 d-none d-lg-block p-0'>
                <img
                    src="/image/background.png"
                    srcSet='/image/background@2x.png 2x'
                    alt='mosque-background'
                    className='mosque-background'
                />
            </div>
        </div>
    );
}
