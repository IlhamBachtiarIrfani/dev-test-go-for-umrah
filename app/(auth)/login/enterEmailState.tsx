'use client'

import PrimaryButton from "@ilhamirfan/components/input/button/primaryButton";
import TextInput from "@ilhamirfan/components/input/textInput";
import { validateEmail } from "@ilhamirfan/helper/validation";
import Link from "next/link";
import { FormEvent, useState } from "react";

// Props interface for the EnterEmailState component
interface EnterEmailStateProps {
    onEmailSubmit: (email: string) => void;
}

// Component definition
export default function EnterEmailState(props: EnterEmailStateProps) {
    // State variables for managing email input, submission state, and errors
    const [emailInput, setEmailInput] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false); 
    const [emailError, setEmailError] = useState<null | string>(null);

    // Function to handle form submission
    const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Trim email input and reset error state
        if (!emailInput.trim()) {
            setEmailError(null);
            return;
        }

        // Set submitting state
        setIsSubmitting(true);

        // Validate email address
        const emailValidation = validateEmail(emailInput);

        // Display error message if email is invalid
        if (!emailValidation.isValid) {
            setEmailError(emailValidation.errorMessage ?? null);
            setIsSubmitting(false);
            return;
        }

        // Call props.onEmailSubmit to submit email asynchronously
        await props.onEmailSubmit(emailInput);
    };

    // JSX markup for the component
    return (
        <>
            {/* Title and description of the form */}
            <h3 className="form-title">Sign in to manage your property</h3>
            <p className="form-desc">
                Create an account to list and manage your property.
            </p>

            {/* Email submission form */}
            <form onSubmit={onFormSubmit} noValidate>
                {/* Email input field */}
                <TextInput
                    label="Email Address"
                    placeholder="Enter your email address"
                    name="email"
                    type="email"
                    onInputChange={setEmailInput}
                    isError={emailError != null}
                    errorText={emailError ?? undefined}
                />

                {/* Primary button for submission */}
                <PrimaryButton
                    className="mt-4"
                    title={isSubmitting ? "Submitting..." : "Continue"}
                    disabled={isSubmitting}
                    isLoading={isSubmitting}
                />
            </form>

            {/* Horizontal line */}
            <hr />

            {/* Link to navigate to the registration page */}
            <Link className="btn btn-outline-primary" href="/register">
                Create your partner account
            </Link>
        </>
    );
}
