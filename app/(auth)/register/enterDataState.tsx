import PrimaryButton from "@ilhamirfan/components/input/button/primaryButton";
import { validateName, validatePhone, validateUsername } from "@ilhamirfan/helper/validation";
import { useState, FormEvent, MouseEvent } from "react";
import TextInput from "@ilhamirfan/components/input/textInput";
import InfoAlert from "@ilhamirfan/components/common/infoAlert";
import PhoneInput from "@ilhamirfan/components/input/phoneInput";
import Image from "next/image";

import arrowLeftIcon from '@ilhamirfan/public/icon/arrow-left.svg'

interface EnterDataStateProps {
    firstName: string,
    lastName: string,
    userName: string,
    phone: string,
    onDataSubmit: (firstName: string, lastName: string, userName: string, phone: string) => void;
    onDataCancel: () => void;
}

export default function EnterDataState(props: EnterDataStateProps) {
    const [firstNameInput, setFirstNameInput] = useState(props.firstName)
    const [lastNameInput, setLastNameInput] = useState(props.lastName)
    const [userNameInput, setUserNameInput] = useState(props.userName)
    const [phoneInput, setPhoneInput] = useState(props.phone)

    const [firstNameValidationError, setFirstNameValidationError] = useState<string | null>(null);
    const [lastNameValidationError, setLastNameValidationError] = useState<string | null>(null);
    const [userNameValidationError, setUserNameValidationError] = useState<string | null>(null);
    const [phoneValidationError, setPhoneValidationError] = useState<string | null>(null);

    async function onFormSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setFirstNameValidationError(null);
        setLastNameValidationError(null);
        setUserNameValidationError(null);
        setPhoneValidationError(null);

        const firstNameValidation = validateName(firstNameInput, "First name");
        const lastNameValidation = validateName(lastNameInput, "Last name");
        const userNameValidation = validateUsername(userNameInput);
        const phoneValidation = validatePhone(phoneInput);

        setFirstNameValidationError(firstNameValidation.errorMessage ?? null);
        setLastNameValidationError(lastNameValidation.errorMessage ?? null);
        setUserNameValidationError(userNameValidation.errorMessage ?? null);
        setPhoneValidationError(phoneValidation.errorMessage ?? null);

        if (!firstNameValidation.isValid || !lastNameValidation.isValid || !userNameValidation.isValid || !phoneValidation.isValid) {
            return;
        }

        props.onDataSubmit(firstNameInput, lastNameInput, userNameInput, phoneInput);
    }

    function handleBackClick(e: MouseEvent) {
        e.preventDefault();

        props.onDataCancel();
    }

    return (
        <>
            <button onClick={handleBackClick} className='back-btn'>
                <Image src={arrowLeftIcon} alt='arrow-left' />
                <span>Back</span>
            </button>

            <h3 className="form-title mt-3">Contact details</h3>
            <p className="form-desc">
                Create your partner account create an account to list and manage your property
            </p>

            <form noValidate onSubmit={onFormSubmit}>
                <div className="long-form-container">
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

                    <PhoneInput
                        label="Phone Number"
                        placeholder="(888) 888-8888"
                        name="phone"
                        defaultValue={phoneInput}
                        onInputChange={setPhoneInput}
                        errorText={phoneValidationError ?? "Please enter a valid phone number."}
                        isError={phoneValidationError != null}
                    />

                    <InfoAlert label="We'll text a two-factor authentication code to this number when you sign in." />
                </div>

                <PrimaryButton title="Continue" />
            </form>

            <hr />
        </>
    );
}
