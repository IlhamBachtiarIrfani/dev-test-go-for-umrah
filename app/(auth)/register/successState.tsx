import FullPageAlert from '@ilhamirfan/components/fullPageAlert'
import React from 'react'

interface SuccessStateProps {
    email: string;
}


export default function SuccessState(props: SuccessStateProps) {
    return (
        <FullPageAlert
            title='Verify your email address'
            desc={
                <p>
                    We sent you an email with a verification link to <span className='email'>{props.email}</span>. To confirm your account please follow the link in the email we just sent.
                </p>
            }
            buttonLabel='Open your email'
        />
    )
}
