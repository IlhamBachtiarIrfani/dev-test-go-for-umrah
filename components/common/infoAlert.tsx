import Image from 'next/image';
import React from 'react'

import InfoIcon from '@ilhamirfan/public/icon/Info.svg'

import '@ilhamirfan/styles/alert.scss'

interface infoAlertProps {
    label: string;
}

export default function InfoAlert(props: infoAlertProps) {
    return (
        <div className="custom-alert-info" role="alert">
            <Image src={InfoIcon} alt='info' />
            {props.label}
        </div>
    )
}
