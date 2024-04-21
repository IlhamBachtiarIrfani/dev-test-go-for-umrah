'use client'

import PrimaryButton from "@ilhamirfan/components/input/button/primaryButton";
import PasswordInput from "@ilhamirfan/components/input/passwordInput";
import { validateSimplePassword } from "@ilhamirfan/helper/validation";
import Link from "next/link";
import { useState, FormEvent } from "react";
import ErrorAlert from "@ilhamirfan/components/common/errorAlert";

interface EnterPasswordStateProps {
    currentEmail: string;
    onLoginSubmit: (email: string, password: string) => void;
}

export default function EnterPasswordState(props: EnterPasswordStateProps) {
    const [passwordInput, setPasswordInput] = useState("");
    const [validationError, setValidationError] = useState<string | null>(null); // New state for validation errors

    const [loginError, setLoginError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    async function onFormSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (isLoading) {
            return; // Prevent multiple submissions while loading
        }

        setValidationError(null); // Clear validation errors on submit
        setLoginError(null);

        const passwordValidation = validateSimplePassword(passwordInput);

        if (!passwordValidation.isValid) {
            setValidationError(passwordValidation.errorMessage ?? null); // Set validation error message
            return;
        }

        setIsLoading(true);

        try {
            await props.onLoginSubmit(props.currentEmail, passwordInput);
        } catch (error: unknown) {
            if (error instanceof Error) {
                setLoginError(error.message);
            } else {
                setLoginError("An unexpected error occurred.");
            }
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <h3 className="form-title">Enter your password</h3>
            <p className="form-desc">
                Enter your password for <span className="fw-semibold text-dark">{props.currentEmail}.</span>
            </p>

            <form noValidate onSubmit={onFormSubmit}>
                {loginError && <ErrorAlert label={loginError} />} {/* Separate error display for login issues */}

                <PasswordInput
                    label="Password"
                    placeholder="Enter your password"
                    name="password"
                    onInputChange={setPasswordInput}
                    errorText={validationError ?? "Please enter a valid password."}
                    isError={validationError != null} // Combine error states
                />

                <div className="my-4">
                    <Link className="text-link-primary" href={`forgot-password?email=${props.currentEmail}`}>
                        Forgot Password?
                    </Link>
                </div>

                <PrimaryButton
                 title="Continue" 
                 disabled={isLoading}
                 isLoading={isLoading}
                  />
            </form>

            <hr />
        </>
    );
}
