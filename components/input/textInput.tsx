import React, { ChangeEvent, useState } from 'react'

import "@ilhamirfan/styles/textInput.scss" // Import text input styles

// Define props interface for TextInput component
interface TextInputProps {
    label: string; // Label text to describe the input field
    placeholder: string; // Placeholder text for the input field
    name: string; // Name attribute for the input field
    type?: string; // Type of input field (default: 'text')
    defaultValue?: string; // Default value for the input field
    onInputChange?: (value: string) => void; // Function to handle input change events
    isError?: boolean; // Flag to indicate error state
    errorText?: string; // Error message text
}

// TextInput component to render a text input field
export default function TextInput(props: TextInputProps) {
    const [textInput, setTextInput] = useState(props.defaultValue ?? "") // State to manage input value

    // Function to handle input change events
    function onTextChange(e: ChangeEvent<HTMLInputElement>) {
        e.preventDefault();

        const value = e.target.value;

        setTextInput(value);

        // Invoke onInputChange function if provided
        if (props.onInputChange) {
            props.onInputChange(value);
        }
    }

    return (
        <div className='text-input'> {/* Render text input container */}
            <label>{props.label}</label> {/* Render input label */}
            <input
                type={props.type ?? 'text'} // Set input type (default: 'text')
                placeholder={props.placeholder} // Set placeholder text
                name={props.name} // Set name attribute
                onChange={onTextChange} // Handle input change events
                value={textInput} // Set input value
            />

            {/* Render error message if isError is true */}
            {
                props.isError ?
                    <span className='input-error'>{props.errorText}</span>
                    :
                    <></>
            }
        </div>
    )
}
