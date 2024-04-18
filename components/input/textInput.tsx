'use client'

import React, { ChangeEvent, useState } from 'react'

import "@ilhamirfan/styles/textInput.scss"

interface TextInputProps {
    label: string;
    placeholder: string;
    name: string;
    type?: string;
    defaultValue?: string;
    onInputChange?: (value: string) => void;
    isError?: boolean;
    errorText?: string;
}

export default function TextInput(props: TextInputProps) {
    const [textInput, setTextInput] = useState(props.defaultValue ?? "")

    function onTextChange(e: ChangeEvent<HTMLInputElement>) {
        e.preventDefault();

        const value = e.target.value;

        setTextInput(value);

        if (props.onInputChange) {
            props.onInputChange(value);
        }
    }

    return (
        <div className='text-input'>
            <label>{props.label}</label>
            <input
                type={props.type ?? 'text'}
                placeholder={props.placeholder}
                name={props.name}
                onChange={onTextChange}
                value={textInput}
            />

            {
                props.isError ?
                    <span className='input-error'>{props.errorText}</span>
                    :
                    <></>
            }
        </div>
    )
}
