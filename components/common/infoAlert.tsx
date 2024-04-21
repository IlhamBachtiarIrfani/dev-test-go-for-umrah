import Image from 'next/image';
import React from 'react'

import InfoIcon from '@ilhamirfan/public/icon/info.svg'

import '@ilhamirfan/styles/alert.scss'

interface infoAlertProps {
    label: string;
}

export default function InfoAlert(props: infoAlertProps) {
    return (
        <div className="custom-alert-info" role="alert">
            <InfoIcon />
            {props.label}
        </div>
    )
}
