'use client'

import React, { useState, ChangeEvent, useEffect } from 'react'

import "@ilhamirfan/styles/phoneInput.scss"

interface PhoneInputProps {
    label: string;
    placeholder: string;
    name: string;
    defaultValue?: string;
    onInputChange?: (value: string) => void;
    isError?: boolean;
    errorText?: string;
}


export default function PhoneInput(props: PhoneInputProps) {
    const [phoneInput, setPhoneInput] = useState(props.defaultValue ?? "")
    const [regionInput, setRegionInput] = useState("+1")

    useEffect(() => {
        if (props.onInputChange) {
            props.onInputChange(regionInput + phoneInput);
        }
    }, [phoneInput, regionInput, props])


    function onPhoneChange(e: ChangeEvent<HTMLInputElement>) {
        e.preventDefault();

        const value = e.target.value.replace(/[^0-9\-]/g, '');

        setPhoneInput(value);
    }

    function onRegionChange(e: ChangeEvent<HTMLSelectElement>) {
        e.preventDefault();

        setRegionInput(e.target.value);
    }

    return (
        <div className='phone-input'>
            <label>{props.label}</label>
            <div>
                <select className="form-select" value={regionInput} onChange={onRegionChange}>
                    <option value={"+1"}>+1</option>
                    <option value={"+62"}>+62</option>
                </select>

                <div className='divider' />

                <input
                    value={phoneInput}
                    type={'text'}
                    placeholder={props.placeholder}
                    name={props.name}
                    onChange={onPhoneChange}
                />
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
