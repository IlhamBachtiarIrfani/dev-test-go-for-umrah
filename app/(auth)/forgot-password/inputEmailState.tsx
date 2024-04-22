/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState, FormEvent } from 'react'
import CreateAccountTermsText from '../../../components/common/createAccountTermsText'
import TextInput from '@ilhamirfan/components/input/textInput'
import PrimaryButton from '@ilhamirfan/components/input/button/primaryButton'
import Copyright from '@ilhamirfan/components/common/copyright'
import { validateEmail } from '@ilhamirfan/helper/validation'
import ErrorAlert from '@ilhamirfan/components/common/errorAlert'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image';

import mosqueBackground from '@ilhamirfan/public/image/background.png'

// Props interface for the component
interface InputEmailStateProps {
    onEmailSubmit: (email: string) => void
}

// Component definition
export default function InputEmailState(props: InputEmailStateProps) {
    const searchParams = useSearchParams()

    // State variables for managing input, submission state, and errors
    const [emailInput, setEmailInput] = useState(searchParams.get("email") ?? "");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [emailError, setEmailError] = useState<null | string>(null);
    const [forgotPasswordError, setForgotPasswordError] = useState<string | null>(null);

    // Function to handle form submission
    const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!emailInput.trim()) {
            setEmailError(null);
            return;
        }

        setIsSubmitting(true); // Set submitting state

        const emailValidation = validateEmail(emailInput);

        if (!emailValidation.isValid) {
            setEmailError(emailValidation.errorMessage ?? null);
            setIsSubmitting(false);
            return;
        }

        try {
            // Call props.onEmailSubmit to submit email asynchronously
            await props.onEmailSubmit(emailInput);
            // Handle successful submission (e.g., navigate to next step)
        } catch (error) {
            if (error instanceof Error) {
                setForgotPasswordError(error.message);
            } else {
                setForgotPasswordError("An unexpected error occurred.");
            }
        } finally {
            setIsSubmitting(false); // Reset submitting state after completion
        }
    };

    // JSX markup for the component
    return (
        <div className='row h-100'>
            {/* Left column containing the password reset form */}
            <div className='col-12 col-lg-6 form-container flex-column d-flex'>
                <div className='flex-grow-1'>
                    {/* Title and description of the password reset form */}
                    <h3 className='form-title'>Forgot your password ?</h3>
                    <p className='form-desc'>Confirm your username and we&apos;ll send you a link to reset your password.</p>

                    {/* Password reset form */}
                    <form onSubmit={onFormSubmit} noValidate>
                        {/* Display error message if any */}
                        {forgotPasswordError && <ErrorAlert label={forgotPasswordError} />}

                        {/* Email input field */}
                        <TextInput
                            label='Email Address'
                            placeholder='Enter your email address'
                            name='email' type='email'
                            defaultValue={emailInput}
                            onInputChange={setEmailInput}
                            isError={emailError != null}
                            errorText={emailError ?? undefined}
                        />

                        {/* Continue button */}
                        <PrimaryButton
                            className="mt-4"
                            title='Continue'
                            disabled={isSubmitting}
                            isLoading={isSubmitting}
                        />
                    </form>

                    {/* Horizontal line */}
                    <hr />

                    {/* Text for creating an account and terms */}
                    <CreateAccountTermsText />
                </div>

                {/* Copyright information */}
                <Copyright />
            </div>

            {/* Right column containing a background image */}
            <div className='col-6 d-none d-lg-block p-0'>
                {/* Background image */}
                <img
                    src="/image/background.png"
                    srcSet='/image/background@2x.png 2x'
                    alt='mosque-background'
                    className='mosque-background'
                />
            </div>
        </div>
    )
}
