import Link from 'next/link'
import React from 'react'

// CreateAccountTermsText component to display the terms and conditions and privacy statement links
export default function CreateAccountTermsText() {
    return (
        <p className='text-center mt-4 text-muted create-account-terms-text'>
            By signing in or creating an account, you agree with our <Link className='text-link-primary' href='/terms-conditions'>Terms & conditions</Link> and <Link className='text-link-primary' href='/privacy-statement'>Privacy statement</Link>
        </p>
    )
}
