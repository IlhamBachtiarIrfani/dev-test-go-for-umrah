import React from 'react'

interface ErrorAlertProps {
    label: string;
}

export default function ErrorAlert(props: ErrorAlertProps) {
    return (
        <div className="alert alert-danger" role="alert">
            {props.label}
        </div>
    )
}
