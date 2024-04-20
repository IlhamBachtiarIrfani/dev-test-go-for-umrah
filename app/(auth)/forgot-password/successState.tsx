import Image from 'next/image'
import React from 'react'

import checkIcon from '@ilhamirfan/public/icon/check.svg'
import PrimaryButton from '@ilhamirfan/components/input/button/primaryButton'

export default function SuccessState() {
    return (
        <div className='row h-100'>
            <div className='forgot-password-success-container'>
                <Image src={checkIcon} alt='check-icon' />

                <h1 className='title'>Check your inbox</h1>
                <p className='desc'>We just emailed instructions and a reset password link to <span className='email'>f***********@g*****.com</span>. It might take a few minutes to arrive.</p>

                <PrimaryButton title='Open your email' />
            </div>
        </div>
    )
}
