import React, { useState, MouseEvent, ChangeEvent } from 'react'

import "@ilhamirfan/styles/passwordInput.scss" // Import password input styles

// Define props interface for PasswordInput component
interface PasswordInputProps {
    label: string; // Label for the input field
    placeholder: string; // Placeholder text for the input field
    name: string; // Name attribute for the input field
    defaultValue?: string; // Default value for the input field
    onInputChange?: (value: string) => void; // Function to handle input changes
    isError?: boolean; // Indicates error state
    errorText?: string; // Error message to display
}

// PasswordInput component to render a password input field with toggle functionality
export default function PasswordInput(props: PasswordInputProps) {
    const [isShow, setShow] = useState(false); // State to toggle password visibility
    const [passwordInput, setPasswordInput] = useState(props.defaultValue ?? ""); // State to store password input value

    // Function to toggle password visibility
    function togglePassword(e: MouseEvent<HTMLSpanElement>) {
        e.preventDefault();
        setShow(value => !value);
    }

    // Function to handle password input changes
    function onPasswordChange(e: ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        const value = e.target.value;
        setPasswordInput(value);
        if (props.onInputChange) {
            props.onInputChange(value);
        }
    }

    return (
        <div className='password-input'> {/* Render password input container */}
            <label>{props.label}</label> {/* Render label */}
            <div>
                <input
                    value={passwordInput}
                    type={isShow ? 'text' : 'password'} // Toggle input type based on password visibility
                    placeholder={props.placeholder}
                    name={props.name}
                    onChange={onPasswordChange}
                />

                <span className="px-3" onClick={togglePassword}> {/* Render toggle button */}
                    {
                        isShow ? "Hide" : "Show" // Show "Hide" text if password is visible, otherwise "Show"
                    }
                </span>
            </div>

            {
                props.isError ? // If isError is true
                    <p className='input-error'>{props.errorText}</p> // Render error message
                    :
                    <></> // Otherwise, render empty fragment
            }
        </div>
    )
}
