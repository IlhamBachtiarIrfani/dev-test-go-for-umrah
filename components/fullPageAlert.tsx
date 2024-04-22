import React from 'react'; // Import necessary modules

import CheckIcon from '@ilhamirfan/public/icon/check.svg'; // Import check icon
import PrimaryButton from './input/button/primaryButton'; // Import PrimaryButton component

// Define props interface for FullPageAlert component
interface FullPageAlertProps {
    title: string; // The title of the alert
    desc: React.ReactNode; // The description or content of the alert
    buttonLabel: string; // The label or text displayed on the primary button
}

// FullPageAlert component to render a full-page alert with title, description, and primary button
export default function FullPageAlert(props: FullPageAlertProps) {
    return (
        <div className='row h-100 d-flex align-items-center'> {/* Render main container */}
            <div className='global-alert-container'> {/* Render alert container */}
                <CheckIcon /> {/* Render check icon */}

                <h1 className='title'>{props.title}</h1> {/* Render alert title */}
                <div className='desc'>{props.desc}</div> {/* Render alert description */}

                <PrimaryButton title={props.buttonLabel} /> {/* Render primary button */}
            </div>
        </div>
    )
}
