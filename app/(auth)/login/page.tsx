'use client'

import React, { useEffect, useState } from 'react';

import { signIn, getCsrfToken } from "next-auth/react";

import CreateAccountTermsText from '@ilhamirfan/components/common/createAccountTermsText';
import Copyright from '@ilhamirfan/components/common/copyright';
import EnterEmailState from './enterEmailState';
import EnterPasswordState from './enterPasswordState';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();

    const [loginState, setLoginState] = useState('email');
    const [emailInput, setEmailInput] = useState('');
    const csrfToken = getCsrfToken();
    

    function handleEmailSubmit(email: string) {
        setLoginState('password');
        setEmailInput(email);
    };

    async function handleLoginSubmit(email: string, password: string) {
        const result = await signIn("credentials", {
            redirect: false,
            email: email,
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
    }

    return (
        <div className='row h-100'>
            <div className='col-12 col-lg-6 form-container flex-column d-flex'>
                <div className='flex-grow-1'>
                    {loginState === 'email' && <EnterEmailState onEmailSubmit={handleEmailSubmit} />}
                    {loginState === 'password' && (
                        <EnterPasswordState currentEmail={emailInput} onLoginSubmit={handleLoginSubmit} />
                    )}
                    <CreateAccountTermsText />
                </div>
                <Copyright />
            </div>
            <div className='col-6 d-none d-lg-block mosque-background'></div>
        </div>
    );
}
