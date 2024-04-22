'use client'

import PrimaryButton from "@ilhamirfan/components/input/button/primaryButton";
import PasswordInput from "@ilhamirfan/components/input/passwordInput";
import { validateSimplePassword } from "@ilhamirfan/helper/validation";
import Link from "next/link";
import { useState, FormEvent } from "react";
import ErrorAlert from "@ilhamirfan/components/common/errorAlert";

// Props interface for the EnterPasswordState component
interface EnterPasswordStateProps {
    currentEmail: string;
    onLoginSubmit: (email: string, password: string) => void;
}

// Component definition
export default function EnterPasswordState(props: EnterPasswordStateProps) {
    // State variables for managing password input, validation error, login error, and loading state
    const [passwordInput, setPasswordInput] = useState("");
    const [validationError, setValidationError] = useState<string | null>(null);
    const [loginError, setLoginError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    // Function to handle form submission
    async function onFormSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // Prevent multiple submissions while loading
        if (isLoading) {
            return;
        }

        // Reset error states
        setValidationError(null);
        setLoginError(null);

        // Validate password
        const passwordValidation = validateSimplePassword(passwordInput);

        // Display validation error if password is invalid
        if (!passwordValidation.isValid) {
            setValidationError(passwordValidation.errorMessage ?? null);
            return;
        }

        // Set loading state
        setIsLoading(true);

        try {
            // Call props.onLoginSubmit to submit email and password asynchronously
            await props.onLoginSubmit(props.currentEmail, passwordInput);
        } catch (error: unknown) {
            // Handle login errors
            if (error instanceof Error) {
                setLoginError(error.message);
            } else {
                setLoginError("An unexpected error occurred.");
            }
        } finally {
            // Reset loading state after completion
            setIsLoading(false);
        }
    }

    // JSX markup for the component
    return (
        <>
            {/* Title and description of the form */}
            <h3 className="form-title">Enter your password</h3>
            <p className="form-desc">
                Enter your password for <span className="fw-semibold text-dark">{props.currentEmail}.</span>
            </p>

            {/* Password submission form */}
            <form noValidate onSubmit={onFormSubmit}>
                {/* Display login error if any */}
                {loginError && <ErrorAlert label={loginError} />}

                {/* Password input field with error handling */}
                <PasswordInput
                    label="Password"
                    placeholder="Enter your password"
                    name="password"
                    onInputChange={setPasswordInput}
                    errorText={validationError ?? "Please enter a valid password."}
                    isError={validationError != null}
                />

                {/* Link to navigate to password reset page */}
                <div className="my-4">
                    <Link className="text-link-primary" href={`forgot-password?email=${props.currentEmail}`}>
                        Forgot Password?
                    </Link>
                </div>

                {/* Primary button for submission */}
                <PrimaryButton
                    title="Continue"
                    disabled={isLoading}
                    isLoading={isLoading}
                />
            </form>

            {/* Horizontal line */}
            <hr />
        </>
    );
}
