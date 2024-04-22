import React, { useState, ChangeEvent, useEffect } from 'react'

import "@ilhamirfan/styles/phoneInput.scss" // Import phone input styles

// Define props interface for PhoneInput component
interface PhoneInputProps {
    label: string; // Label for the input field
    placeholder: string; // Placeholder text for the input field
    name: string; // Name attribute for the input field
    defaultValue?: string; // Default value for the input field
    onInputChange?: (value: string) => void; // Function to handle input changes
    isError?: boolean; // Indicates error state
    errorText?: string; // Error message to display
}

// PhoneInput component to render a phone input field with region code dropdown
export default function PhoneInput(props: PhoneInputProps) {
    const [phoneInput, setPhoneInput] = useState(props.defaultValue ?? ""); // State to store phone input value
    const [regionInput, setRegionInput] = useState("+1"); // State to store region code input value

    // Effect to update the phone number value when there is a change in phoneInput, regionInput, or props
    useEffect(() => {
        if (props.onInputChange) {
            props.onInputChange(regionInput + phoneInput); // Concatenate region code with phone number and pass to onInputChange
        }
    }, [phoneInput, regionInput, props])

    // Function to handle phone number input changes
    function onPhoneChange(e: ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        const value = e.target.value.replace(/[^0-9\-]/g, ''); // Allow only numeric characters and hyphen
        setPhoneInput(value); // Update phoneInput state with sanitized value
    }

    // Function to handle region code selection changes
    function onRegionChange(e: ChangeEvent<HTMLSelectElement>) {
        e.preventDefault();
        setRegionInput(e.target.value); // Update regionInput state with selected value
    }

    return (
        <div className='phone-input'> {/* Render phone input container */}
            <label>{props.label}</label> {/* Render label */}
            <div>
                <select className="form-select" value={regionInput} onChange={onRegionChange}> {/* Render region code dropdown */}
                    <option value={"+1"}>+1</option>
                    <option value={"+62"}>+62</option>
                </select>

                <div className='divider' /> {/* Render divider between region code and phone number input */}

                <input
                    value={phoneInput}
                    type={'text'} // Set input type as text
                    placeholder={props.placeholder}
                    name={props.name}
                    onChange={onPhoneChange}
                />
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
