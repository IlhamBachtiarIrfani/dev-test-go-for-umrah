import React from 'react'

// ErrorAlert component to render an error alert with a specified label
interface ErrorAlertProps {
    label: string;  // Error message to be displayed in the alert
}

export default function ErrorAlert(props: ErrorAlertProps) {
    return (
        <div className="alert alert-danger" role="alert">
            {props.label}
        </div>
    )
}
