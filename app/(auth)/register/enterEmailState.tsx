'use client'

import PrimaryButton from "@ilhamirfan/components/input/button/primaryButton";
import TextInput from "@ilhamirfan/components/input/textInput";
import { validateEmail } from "@ilhamirfan/helper/validation";
import Link from "next/link";
import { FormEvent, useState } from "react";

// Props interface for the EnterEmailState component
interface EnterEmailStateProps {
    email: string;
    onEmailSubmit: (email: string) => void;
}

// Component definition
export default function EnterEmailState(props: EnterEmailStateProps) {
    // State variables for managing email input, submission state, and validation error
    const [emailInput, setEmailInput] = useState(props.email);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [emailError, setEmailError] = useState<null | string>(null);

    // Function to handle form submission
    const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsSubmitting(true); // Set submitting state

        // Validate email input
        const emailValidation = validateEmail(emailInput);

        // Set error message if validation fails
        if (!emailValidation.isValid) {
            setEmailError(emailValidation.errorMessage ?? null);
            setIsSubmitting(false);
            return;
        }

        try {
            // Call props.onEmailSubmit to submit email asynchronously
            await props.onEmailSubmit(emailInput);
        } catch (error) {
            console.error("Error submitting email:", error);
        } finally {
            setIsSubmitting(false); // Reset submitting state after completion
        }
    };

    // JSX markup for the component
    return (
        <>
            {/* Title and description of the form */}
            <h3 className="form-title">Create your partner account</h3>
            <p className="form-desc">
                Create an account to list and manage your property.
            </p>

            {/* Form for entering email address */}
            <form onSubmit={onFormSubmit} noValidate>
                {/* Text input field for email address */}
                <TextInput
                    label="Email Address"
                    placeholder="Enter your email address"
                    name="email"
                    type="email"
                    defaultValue={emailInput}
                    onInputChange={setEmailInput}
                    isError={emailError != null}
                    errorText={emailError ?? undefined}
                />

                {/* Primary button for submission */}
                <PrimaryButton
                    className="mt-4"
                    title={isSubmitting ? "Submitting..." : "Continue"}
                    disabled={isSubmitting}
                />
            </form>

            {/* Horizontal line */}
            <hr />

            {/* Link to the login page */}
            <Link className="btn btn-outline-primary" href="/login">
                Login
            </Link>
        </>
    );
}
