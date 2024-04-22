'use client'

import React, { Suspense, useState } from 'react'
import InputEmailState from './inputEmailState'
import SuccessState from './successState'
import { requestForgotPassword } from '@ilhamirfan/app/api/auth/[...nextauth]/forgotPasswordAction'

// Component for the Forgot Password page
export default function ForgotPasswordPage() {
    // State variables for managing page state and email input
    const [pageState, setPageState] = useState("email")
    const [email, setEmail] = useState("")

    // Function to handle email submission
    async function handleEmailSubmit(email: string) {
        setEmail(email);
        const result = await requestForgotPassword(email);

        if (!result.success) {
            throw Error(result.errors);
        }

        setPageState("success")
    }

    // Conditional rendering based on page state
    if (pageState == "success") {
        return <SuccessState email={email} />
    }

    // Render input email state if page state is not success
    return (
        <Suspense>
            <InputEmailState onEmailSubmit={handleEmailSubmit} />
        </Suspense>
    )
}
