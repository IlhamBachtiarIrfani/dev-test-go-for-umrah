import React from 'react'

import "@ilhamirfan/styles/textInput.scss"

interface TextInputProps {
    label: string;
    placeholder: string;
    name: string;
    type?: string;
}

export default function TextInput(props: TextInputProps) {
    return (
        <div className='text-input'>
            <label className="form-label">{props.label}</label>
            <input type={props.type ?? 'text'} className="form-control" placeholder={props.placeholder} name={props.name} />
        </div>
    )
}
