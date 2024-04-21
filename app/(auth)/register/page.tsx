'use client'

import Copyright from '@ilhamirfan/components/common/copyright'
import React, { useState } from 'react'
import EnterEmailState from './enterEmailState';
import CreateAccountTermsText from '@ilhamirfan/components/common/createAccountTermsText';
import EnterDataState from './enterDataState';
import EnterPasswordState from './enterPasswordState';
import SuccessState from './successState';
import { requestRegister } from '@ilhamirfan/app/api/auth/[...nextauth]/registerAction';
import { getCsrfToken, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import mosqueBackground from '@ilhamirfan/public/image/background.png'

export default function RegisterPage() {
    const [registerState, setRegisterState] = useState('email');

    const [emailInput, setEmailInput] = useState("");
    const [firstNameInput, setFirstNameInput] = useState("")
    const [lastNameInput, setLastNameInput] = useState("")
    const [userNameInput, setUserNameInput] = useState("")
    const [phoneInput, setPhoneInput] = useState("")

    function handleEmailSubmit(email: string) {
        setRegisterState('data');
        setEmailInput(email);
    };

    function handleDataSuccess(firstName: string, lastName: string, userName: string, phone: string) {
        setRegisterState("password")
        setFirstNameInput(firstName);
        setLastNameInput(lastName);
        setUserNameInput(userName);
        setPhoneInput(phone);
    }

    function handleDataCancel() {
        setRegisterState("email")
    }

    async function handleRegisterSubmit(password: string) {
        const result = await requestRegister(emailInput, password, firstNameInput, lastNameInput, userNameInput, phoneInput);

        if (result?.error) {
            throw Error(result.error);
        }
        
        console.log(result);
        setRegisterState("success")
    }

    function handleRegisterCancel() {
        setRegisterState("data")
    }

    if (registerState === "success") {
        return <SuccessState email={emailInput} />
    }

    return (
        <div className='row h-100'>
            <div className='col-12 col-lg-6 form-container flex-column d-flex'>
                <div className='flex-grow-1'>
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
            <div className='col-6 d-none d-lg-block p-0'>
                <Image src={mosqueBackground} alt='mosque-background' className='mosque-background' />
            </div>
        </div>
    );
}
