import FullPageAlert from '@ilhamirfan/components/fullPageAlert'
import React from 'react'

// Props interface defining the shape of props passed to SuccessState component
interface SuccessStateProps {
    email: string; // Email address to be verified
}

// Component definition
export default function SuccessState(props: SuccessStateProps) {
    // JSX markup for rendering the component
    return (
        <FullPageAlert
            title='Verify your email address'
            desc={
                <p>
                    {/* Dynamic content to display the email address */}
                    We sent you an email with a verification link to <span className='email'>{props.email}</span>. To confirm your account please follow the link in the email we just sent.
                </p>
            }
            buttonLabel='Open your email'
        />
    )
}
