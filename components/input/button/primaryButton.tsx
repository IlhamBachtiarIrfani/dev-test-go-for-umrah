import React from 'react'

import "@ilhamirfan/styles/button.scss"
import LoadingSpinner from '@ilhamirfan/components/common/loadingSpinner'

interface PrimaryButtonProps {
    title: string,
    className?: string,
    isLoading?: boolean,
    disabled?: boolean,
}

export default function PrimaryButton(props: PrimaryButtonProps) {
    return (
        <button className={`btn btn-primary ${props.className}`} disabled={props.disabled}>
            {
                !props.isLoading ?
                    props.title
                    :
                    <LoadingSpinner />
            }
        </button>
    )
}
