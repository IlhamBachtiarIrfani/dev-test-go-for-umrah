'use client'

import { validatePassword } from '@ilhamirfan/helper/validation';
import Image from 'next/image';
import React, { useState, FormEvent, MouseEvent } from 'react'

import arrowLeftIcon from '@ilhamirfan/public/icon/arrow-left.svg'
import ErrorAlert from '@ilhamirfan/components/common/errorAlert';
import PrimaryButton from '@ilhamirfan/components/input/button/primaryButton';
import PasswordInput from '@ilhamirfan/components/input/passwordInput';

interface EnterPasswordStateProps {
    onPasswordSubmit: () => void;
    onPasswordCancel: () => void;
}

export default function EnterPasswordState(props: EnterPasswordStateProps) {
    const [passwordInput, setPasswordInput] = useState("")
    const [confirmPasswordInput, setConfirmPasswordInput] = useState("")

    const [passwordValidationError, setPasswordValidationError] = useState<string | null>(null);
    const [confirmPasswordValidationError, setConfirmPasswordValidationError] = useState<string | null>(null);

    const [registerError, setRegisterError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    async function onFormSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (isLoading) {
            return; // Prevent multiple submissions while loading
        }

        setPasswordValidationError(null);
        setConfirmPasswordValidationError(null);
        setRegisterError(null);

        const passwordValidation = validatePassword(passwordInput);
        const confirmPasswordValidation = passwordInput == confirmPasswordInput;

        setPasswordValidationError(passwordValidation.errorMessage ?? null);

        if (!confirmPasswordValidation) {
            setConfirmPasswordValidationError("Confirm password is not match");
        }

        if (!passwordValidation.isValid || !confirmPasswordValidation) {
            return;
        }

        setIsLoading(true);

        try {

            props.onPasswordSubmit();
        } catch (error: unknown) {
            if (error instanceof Error) {
                setRegisterError(error.message);
            } else {
                setRegisterError("An unexpected error occurred.");
            }
        } finally {
            setIsLoading(false);
        }
    }

    function handleBackClick(e: MouseEvent) {
        e.preventDefault();

        props.onPasswordCancel();
    }

    return (
        <>
            <button onClick={handleBackClick} className='back-btn'>
                <Image src={arrowLeftIcon} alt='arrow-left' />
                <span>Back</span>
            </button>

            <h3 className="form-title mt-3">Create password</h3>
            <p className="form-desc">
                Use a minimum of 10 characters, including uppercase letters, lowercase letters and numbers.
            </p>

            <form noValidate onSubmit={onFormSubmit}>
                {registerError && <ErrorAlert label={registerError} />}

                <div className="long-form-container">
                    <PasswordInput
                        label="Password"
                        placeholder="Enter your password"
                        name="password"
                        onInputChange={setPasswordInput}
                        errorText={passwordValidationError ?? "Please enter a valid first name."}
                        isError={passwordValidationError != null}
                    />

                    <PasswordInput
                        label="Confirm Password"
                        placeholder="Enter your confirm password"
                        name="confirm password"
                        onInputChange={setConfirmPasswordInput}
                        errorText={confirmPasswordValidationError ?? "Please enter a valid last name."}
                        isError={confirmPasswordValidationError != null}
                    />
                </div>

                <PrimaryButton title="Continue" isLoading={isLoading} />
            </form>

            <hr />
        </>
    )
}
