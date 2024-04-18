import React from 'react'

import "@ilhamirfan/styles/textInput.scss"

interface PasswordInputProps {
    label: string;
    placeholder: string;
    name: string;
}

export default function PasswordInput(props: PasswordInputProps) {
    return (
        <div className='text-input'>
            <label className="form-label">{props.label}</label>
            <div className='input-group'>
                <input type={'text'} className="form-control" placeholder={props.placeholder} name={props.name} />
                <span className="">Show</span>
            </div>
        </div>
    )
}
