'use client'

import PrimaryButton from "@ilhamirfan/components/input/button/primaryButton";
import TextInput from "@ilhamirfan/components/input/textInput";
import { validateEmail } from "@ilhamirfan/helper/validation";
import Link from "next/link";
import { FormEvent, useState } from "react";

interface EnterEmailStateProps {
    onEmailSubmit: (email: string) => void;
}

export default function EnterEmailState(props: EnterEmailStateProps) {
    const [emailInput, setEmailInput] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false); // Track submit state for button styling/loading indicator
    const [emailError, setEmailError] = useState<null | string>(null);

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

        await props.onEmailSubmit(emailInput);
    };

    return (
        <>
            <h3 className="form-title">Sign in to manage your property</h3>
            <p className="form-desc">
                Create an account to list and manage your property.
            </p>

            <form onSubmit={onFormSubmit} noValidate>
                <TextInput
                    label="Email Address"
                    placeholder="Enter your email address"
                    name="email"
                    type="email"
                    onInputChange={setEmailInput}
                    isError={emailError != null}
                    errorText={emailError ?? undefined}
                />

                <PrimaryButton
                    className="mt-4"
                    title={isSubmitting ? "Submitting..." : "Continue"}
                    disabled={isSubmitting}
                    isLoading={isSubmitting}
                />
            </form>

            <hr />

            <Link className="btn btn-outline-primary" href="/register">
                Create your partner account
            </Link>
        </>
    );
}
