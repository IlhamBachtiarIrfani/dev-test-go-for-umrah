import FullPageAlert from '@ilhamirfan/components/fullPageAlert'
import { censorEmail } from '@ilhamirfan/helper/validation';
import React from 'react'

// Props interface for the SuccessState component
interface SuccessStateProps {
    email: string;
}

// Component definition
export default function SuccessState(props: SuccessStateProps) {
    return (
        <FullPageAlert
            // Title of the success message
            title='Check your inbox'
            // Description of the success message, including the censored email address and instructions
            desc={
                <p>
                    We just emailed instructions and a reset password link to <span className='email'>{censorEmail(props.email)}</span>.It might take a few minutes to arrive.
                </p>
            }
            // Label for the button to prompt the user to open their email
            buttonLabel="Open your email"
        />
    )
}
