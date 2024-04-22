import React from 'react'

// Importing the InfoIcon component
import InfoIcon from '@ilhamirfan/public/icon/info.svg'

// Importing the custom styles for the alert
import '@ilhamirfan/styles/alert.scss'

// InfoAlert component to render an info alert with a specified label
interface infoAlertProps {
    label: string;  // Information message to be displayed in the alert
}

export default function InfoAlert(props: infoAlertProps) {
    return (
        <div className="custom-alert-info" role="alert">
            <InfoIcon /> {/* Render the InfoIcon component for the information icon */}
            {props.label} {/* Display the informative message */}
        </div>
    )
}
