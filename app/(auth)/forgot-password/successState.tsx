import FullPageAlert from '@ilhamirfan/components/fullPageAlert'
import { censorEmail } from '@ilhamirfan/helper/validation';
import React from 'react'

interface SuccessStateProps {
    email: string;
}

export default function SuccessState(props: SuccessStateProps) {
    return (
        <FullPageAlert
            title='Check your inbox'
            desc={
                <p>
                    We just emailed instructions and a reset password link to <span className='email'>{censorEmail(props.email)}</span>.It might take a few minutes to arrive.
                </p>
            }
            buttonLabel="Open your email"
        />
    )
}