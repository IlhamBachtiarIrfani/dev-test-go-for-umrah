/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState } from 'react';
import { signIn, getCsrfToken } from "next-auth/react";
import CreateAccountTermsText from '@ilhamirfan/components/common/createAccountTermsText';
import Copyright from '@ilhamirfan/components/common/copyright';
import EnterEmailState from './enterEmailState';
import EnterPasswordState from './enterPasswordState';
import { useRouter } from 'next/navigation';

// Component for the login page
export default function LoginPage() {
    const router = useRouter();

    // State variables for managing login state, email input, and CSRF token
    const [loginState, setLoginState] = useState('email');
    const [emailInput, setEmailInput] = useState('');
    const csrfToken = getCsrfToken();

    // Function to handle email submission
    function handleEmailSubmit(email: string) {
        setLoginState('password');
        setEmailInput(email);
    };

    // Function to handle login submission
    async function handleLoginSubmit(email: string, password: string) {
        const result = await signIn("credentials", {
            redirect: false,
            email: email,
            password: password,
            userAgent: navigator.userAgent,
            deviceInfo: navigator.platform,
            csrfToken: csrfToken,
        });

        // Redirect to dashboard on successful login
        if (result?.error) {
            throw Error(result.error);
        } else {
            router.push("/dashboard")
        }
    }

    // JSX markup for the component
    return (
        <div className='row h-100'>
            <div className='col-12 col-lg-6 form-container flex-column d-flex'>
                <div className='flex-grow-1'>
                    {/* Conditional rendering based on login state */}
                    {loginState === 'email' && <EnterEmailState onEmailSubmit={handleEmailSubmit} />}
                    {loginState === 'password' && (
                        <EnterPasswordState currentEmail={emailInput} onLoginSubmit={handleLoginSubmit} />
                    )}
                    {/* Terms text for creating an account */}
                    <CreateAccountTermsText />
                </div>
                {/* Copyright information */}
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
