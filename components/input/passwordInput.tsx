'use client'

import React, { useState, MouseEvent, ChangeEvent } from 'react'

import "@ilhamirfan/styles/passwordInput.scss"

interface PasswordInputProps {
    label: string;
    placeholder: string;
    name: string;
    defaultValue?: string;
    onInputChange?: (value: string) => void;
    isError?: boolean;
    errorText?: string;
}

export default function PasswordInput(props: PasswordInputProps) {
    const [isShow, setShow] = useState(false)
    const [passwordInput, setPasswordInput] = useState(props.defaultValue ?? "")

    function togglePassword(e: MouseEvent<HTMLSpanElement>) {
        e.preventDefault();

        setShow(value => !value);
    }


    function onPasswordChange(e: ChangeEvent<HTMLInputElement>) {
        e.preventDefault();

        const value = e.target.value;

        setPasswordInput(value);

        if (props.onInputChange) {
            props.onInputChange(value);
        }
    }

    return (
        <div className='password-input'>
            <label>{props.label}</label>
            <div>
                <input
                    value={passwordInput}
                    type={isShow ? 'text' : 'password'}
                    placeholder={props.placeholder}
                    name={props.name}
                    onChange={onPasswordChange}
                />

                <span className="px-3" onClick={togglePassword}>
                    {
                        isShow ? "Hide" : "Show"
                    }
                </span>
            </div>

            {
                props.isError ?
                    <p className='input-error'>{props.errorText}</p>
                    :
                    <></>
            }
        </div>
    )
}
