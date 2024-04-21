import React, { useState, FormEvent } from 'react'
import CreateAccountTermsText from '../../../components/common/createAccountTermsText'
import TextInput from '@ilhamirfan/components/input/textInput'
import PrimaryButton from '@ilhamirfan/components/input/button/primaryButton'
import Copyright from '@ilhamirfan/components/common/copyright'
import { validateEmail } from '@ilhamirfan/helper/validation'
import ErrorAlert from '@ilhamirfan/components/common/errorAlert'
import { useSearchParams } from 'next/navigation'

interface InputEmailStateProps {
    onEmailSubmit: (email: string) => void
}

export default function InputEmailState(props: InputEmailStateProps) {
    const searchParams = useSearchParams()
    
    const [emailInput, setEmailInput] = useState(searchParams.get("email") ?? "");
    const [isSubmitting, setIsSubmitting] = useState(false); // Track submit state for button styling/loading indicator
    const [emailError, setEmailError] = useState<null | string>(null);

    const [forgotPasswordError, setForgotPasswordError] = useState<string | null>(null);

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

    return (
        <div className='row h-100'>
            <div className='col-12 col-lg-6 form-container flex-column d-flex'>
                <div className='flex-grow-1'>

                    <h3 className='form-title'>Forgot your password ?</h3>
                    <p className='form-desc'>Confirm your username and we&apos;ll send you a link to reset your password.</p>

                    <form onSubmit={onFormSubmit} noValidate>
                        {forgotPasswordError && <ErrorAlert label={forgotPasswordError} />} {/* Separate error display for login issues */}

                        <TextInput
                            label='Email Address'
                            placeholder='Enter your email address'
                            name='email' type='email'
                            defaultValue={emailInput}
                            onInputChange={setEmailInput}
                            isError={emailError != null}
                            errorText={emailError ?? undefined}
                        />

                        <PrimaryButton
                            className="mt-4"
                            title='Continue'
                            disabled={isSubmitting}
                            isLoading={isSubmitting}
                        />
                    </form>

                    <hr />

                    <CreateAccountTermsText />
                </div>

                <Copyright />
            </div>
            <div className='col-6 d-none d-lg-block mosque-background'>
            </div>
        </div>
    )
}
