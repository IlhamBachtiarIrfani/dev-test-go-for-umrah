'use client'

import React, { useState } from 'react'
import InputEmailState from './inputEmailState'
import SuccessState from './successState'
import { requestForgotPassword } from '@ilhamirfan/app/api/auth/[...nextauth]/forgotPasswordAction'

export default function ForgotPasswordPage() {
    const [pageState, setPageState] = useState("email")
    const [email, setEmail] = useState("")

    async function handleEmailSubmit(email: string) {
        setEmail(email);
        const result = await requestForgotPassword(email);

        
        console.log(result);

        if (!result.success) {
            throw Error(result.errors);
        }


        setPageState("success")
    }

    if (pageState == "success") {
        return <SuccessState email={email} />
    }

    return (
        <InputEmailState onEmailSubmit={handleEmailSubmit} />
    )
}
