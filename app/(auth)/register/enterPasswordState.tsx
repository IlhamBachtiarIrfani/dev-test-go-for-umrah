'use client'

import { validatePassword } from '@ilhamirfan/helper/validation';
import React, { useState, FormEvent, MouseEvent } from 'react'

import ArrowLeftIcon from '@ilhamirfan/public/icon/arrow-left.svg'
import ErrorAlert from '@ilhamirfan/components/common/errorAlert';
import PrimaryButton from '@ilhamirfan/components/input/button/primaryButton';
import PasswordInput from '@ilhamirfan/components/input/passwordInput';

// Props interface for the EnterPasswordState component
interface EnterPasswordStateProps {
    onPasswordSubmit: (password: string) => void;
    onPasswordCancel: () => void;
}

// Component definition
export default function EnterPasswordState(props: EnterPasswordStateProps) {
    // State variables for managing password input, confirm password input, validation errors, registration error, and submission state
    const [passwordInput, setPasswordInput] = useState("");
    const [confirmPasswordInput, setConfirmPasswordInput] = useState("");

    const [passwordValidationError, setPasswordValidationError] = useState<string | null>(null);
    const [confirmPasswordValidationError, setConfirmPasswordValidationError] = useState<string | null>(null);

    const [registerError, setRegisterError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    // Function to handle form submission
    async function onFormSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // Return if submission is in progress
        if (isLoading) {
            return;
        }

        // Reset validation and error states
        setPasswordValidationError(null);
        setConfirmPasswordValidationError(null);
        setRegisterError(null);

        // Validate password and confirm password
        const passwordValidation = validatePassword(passwordInput);
        const confirmPasswordValidation = passwordInput === confirmPasswordInput;

        // Set validation errors
        setPasswordValidationError(passwordValidation.errorMessage ?? null);
        if (!confirmPasswordValidation) {
            setConfirmPasswordValidationError("Confirm password does not match");
        }

        // Return if any validation fails
        if (!passwordValidation.isValid || !confirmPasswordValidation) {
            return;
        }

        // Set loading state and handle form submission
        setIsLoading(true);
        try {
            await props.onPasswordSubmit(passwordInput);
        } catch (error: unknown) {
            // Handle registration error
            if (error instanceof Error) {
                setRegisterError(error.message);
            } else {
                setRegisterError("An unexpected error occurred.");
            }
        } finally {
            // Reset loading state after submission
            setIsLoading(false);
        }
    }

    // Function to handle back button click
    function handleBackClick(e: MouseEvent) {
        e.preventDefault();
        props.onPasswordCancel();
    }

    // JSX markup for the component
    return (
        <>
            {/* Back button */}
            <button onClick={handleBackClick} className='back-btn'>
                <ArrowLeftIcon />
                <span>Back</span>
            </button>

            {/* Title and description of the form */}
            <h3 className="form-title mt-3">Create password</h3>
            <p className="form-desc">
                Use a minimum of 10 characters, including uppercase letters, lowercase letters and numbers.
            </p>

            {/* Form for entering password and confirm password */}
            <form noValidate onSubmit={onFormSubmit}>
                {/* Display registration error */}
                {registerError && <ErrorAlert label={registerError} />}

                <div className="long-form-container">
                    {/* Password input field */}
                    <PasswordInput
                        label="Password"
                        placeholder="Enter your password"
                        name="password"
                        onInputChange={setPasswordInput}
                        errorText={passwordValidationError ?? "Please enter a valid password."}
                        isError={passwordValidationError != null}
                    />

                    {/* Confirm password input field */}
                    <PasswordInput
                        label="Confirm Password"
                        placeholder="Enter your confirm password"
                        name="confirm password"
                        onInputChange={setConfirmPasswordInput}
                        errorText={confirmPasswordValidationError ?? "Passwords do not match."}
                        isError={confirmPasswordValidationError != null}
                    />
                </div>

                {/* Continue button */}
                <PrimaryButton title="Continue" isLoading={isLoading} disabled={isLoading} />
            </form>

            {/* Horizontal line */}
            <hr />
        </>
    )
}