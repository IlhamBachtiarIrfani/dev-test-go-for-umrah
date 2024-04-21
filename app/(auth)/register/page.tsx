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

export default function RegisterPage() {
    const router = useRouter();

    const [registerState, setRegisterState] = useState('email');

    const [emailInput, setEmailInput] = useState("");
    const [firstNameInput, setFirstNameInput] = useState("")
    const [lastNameInput, setLastNameInput] = useState("")
    const [userNameInput, setUserNameInput] = useState("")
    const [phoneInput, setPhoneInput] = useState("")

    const csrfToken = getCsrfToken();

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
        const resultRegister = await requestRegister(emailInput, password, firstNameInput, lastNameInput, userNameInput, phoneInput);

        const result = await signIn("credentials", {
            redirect: false,
            email: emailInput,
            password: password,
            userAgent: navigator.userAgent,
            deviceInfo: navigator.platform,
            csrfToken: csrfToken,
        });

        if (result?.error) {
            throw Error(result.error);
        } else {
            router.push("/dashboard")
        }
        
        alert(result);
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
            <div className='col-6 d-none d-lg-block mosque-background'></div>
        </div>
    );
}
