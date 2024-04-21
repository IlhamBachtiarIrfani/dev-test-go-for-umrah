'use client'

import PrimaryButton from "@ilhamirfan/components/input/button/primaryButton";
import TextInput from "@ilhamirfan/components/input/textInput";
import { validateEmail } from "@ilhamirfan/helper/validation";
import Link from "next/link";
import { FormEvent, useState } from "react";

interface EnterEmailStateProps {
    email: string;
    onEmailSubmit: (email: string) => void;
}

export default function EnterEmailState(props: EnterEmailStateProps) {
    const [emailInput, setEmailInput] = useState(props.email);
    const [isSubmitting, setIsSubmitting] = useState(false); // Track submit state for button styling/loading indicator
    const [emailError, setEmailError] = useState<null | string>(null);

    const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

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
            console.error("Error submitting email:", error);
            // Handle submission error (e.g., display error message)
        } finally {
            setIsSubmitting(false); // Reset submitting state after completion
        }
    };

    return (
        <>
            <h3 className="form-title">Create your partner account</h3>
            <p className="form-desc">
            Create an account to list and manage your property.
            </p>

            <form onSubmit={onFormSubmit} noValidate>
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

                <PrimaryButton
                    className="mt-4"
                    title={isSubmitting ? "Submitting..." : "Continue"}
                    disabled={isSubmitting} // Disable button while submitting
                />
            </form>

            <hr />

            <Link className="btn btn-outline-primary" href="/login">
                Login
            </Link>
        </>
    );
}
