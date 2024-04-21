import Image from 'next/image'
import React from 'react'

import checkIcon from '@ilhamirfan/public/icon/check.svg'
import PrimaryButton from './input/button/primaryButton'

interface FullPageAlertProps {
    title: string;
    desc: React.ReactNode;
    buttonLabel: string;
}

export default function FullPageAlert(props: FullPageAlertProps) {
    return (
        <div className='row h-100 d-flex align-items-center'>
            <div className='global-alert-container'>
                <Image src={checkIcon} alt='check-icon' />

                <h1 className='title'>{props.title}</h1>
                <div className='desc'>{props.desc}</div>

                <PrimaryButton title={props.buttonLabel} />
            </div>
        </div>
    )
}
