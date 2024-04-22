'use client'

import PrimaryButton from "@ilhamirfan/components/input/button/primaryButton";
import { validateName, validatePhone, validateUsername } from "@ilhamirfan/helper/validation";
import { useState, FormEvent, MouseEvent } from "react";
import TextInput from "@ilhamirfan/components/input/textInput";
import InfoAlert from "@ilhamirfan/components/common/infoAlert";
import PhoneInput from "@ilhamirfan/components/input/phoneInput";

import ArrowLeftIcon from '@ilhamirfan/public/icon/arrow-left.svg'

// Props interface for the EnterDataState component
interface EnterDataStateProps {
    firstName: string,
    lastName: string,
    userName: string,
    phone: string,
    onDataSubmit: (firstName: string, lastName: string, userName: string, phone: string) => void;
    onDataCancel: () => void;
}

// Component definition
export default function EnterDataState(props: EnterDataStateProps) {
    // State variables for managing input values and validation errors
    const [firstNameInput, setFirstNameInput] = useState(props.firstName)
    const [lastNameInput, setLastNameInput] = useState(props.lastName)
    const [userNameInput, setUserNameInput] = useState(props.userName)
    const [phoneInput, setPhoneInput] = useState(props.phone)
    const [firstNameValidationError, setFirstNameValidationError] = useState<string | null>(null);
    const [lastNameValidationError, setLastNameValidationError] = useState<string | null>(null);
    const [userNameValidationError, setUserNameValidationError] = useState<string | null>(null);
    const [phoneValidationError, setPhoneValidationError] = useState<string | null>(null);

    // Function to handle form submission
    async function onFormSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // Reset validation errors
        setFirstNameValidationError(null);
        setLastNameValidationError(null);
        setUserNameValidationError(null);
        setPhoneValidationError(null);

        // Validate input fields
        const firstNameValidation = validateName(firstNameInput, "First name");
        const lastNameValidation = validateName(lastNameInput, "Last name");
        const userNameValidation = validateUsername(userNameInput);
        const phoneValidation = validatePhone(phoneInput);

        // Set validation errors
        setFirstNameValidationError(firstNameValidation.errorMessage ?? null);
        setLastNameValidationError(lastNameValidation.errorMessage ?? null);
        setUserNameValidationError(userNameValidation.errorMessage ?? null);
        setPhoneValidationError(phoneValidation.errorMessage ?? null);

        // Return if any validation fails
        if (!firstNameValidation.isValid || !lastNameValidation.isValid || !userNameValidation.isValid || !phoneValidation.isValid) {
            return;
        }

        // Call onDataSubmit to submit data
        props.onDataSubmit(firstNameInput, lastNameInput, userNameInput, phoneInput);
    }

    // Function to handle back button click
    function handleBackClick(e: MouseEvent) {
        e.preventDefault();

        // Call onDataCancel to cancel data submission
        props.onDataCancel();
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
            <h3 className="form-title mt-3">Contact details</h3>
            <p className="form-desc">
                Create your partner account create an account to list and manage your property
            </p>

            {/* Form for entering personal data */}
            <form noValidate onSubmit={onFormSubmit}>
                <div className="long-form-container">
                    {/* Text input fields for first name, last name, and username */}
                    <TextInput
                        label="First name"
                        placeholder="Enter your first name"
                        name="first-name"
                        type="text"
                        defaultValue={firstNameInput}
                        onInputChange={setFirstNameInput}
                        errorText={firstNameValidationError ?? "Please enter a valid first name."}
                        isError={firstNameValidationError != null}
                    />
                    <TextInput
                        label="Last name"
                        placeholder="Enter your last name"
                        name="last-name"
                        type="text"
                        defaultValue={lastNameInput}
                        onInputChange={setLastNameInput}
                        errorText={lastNameValidationError ?? "Please enter a valid last name."}
                        isError={lastNameValidationError != null}
                    />
                    <TextInput
                        label="Username"
                        placeholder="Enter your username"
                        name="last-name"
                        type="text"
                        defaultValue={userNameInput}
                        onInputChange={setUserNameInput}
                        errorText={userNameValidationError ?? "Please enter a valid username."}
                        isError={userNameValidationError != null}
                    />

                    {/* Phone input field */}
                    <PhoneInput
                        label="Phone Number"
                        placeholder="(888) 888-8888"
                        name="phone"
                        defaultValue={phoneInput}
                        onInputChange={setPhoneInput}
                        errorText={phoneValidationError ?? "Please enter a valid phone number."}
                        isError={phoneValidationError != null}
                    />

                    {/* Informational alert */}
                    <InfoAlert label="We'll text a two-factor authentication code to this number when you sign in." />
                </div>

                {/* Continue button */}
                <PrimaryButton title="Continue" />
            </form>

            {/* Horizontal line */}
            <hr />
        </>
    );
}
