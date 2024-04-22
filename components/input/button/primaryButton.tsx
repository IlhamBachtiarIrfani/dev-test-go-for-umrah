import React from 'react'

import "@ilhamirfan/styles/button.scss" // Import button styles
import LoadingSpinner from '@ilhamirfan/components/common/loadingSpinner' // Import LoadingSpinner component

// Define props interface for PrimaryButton component
interface PrimaryButtonProps {
    title: string, // Button title
    className?: string, // Additional CSS classes for styling
    isLoading?: boolean, // Indicates loading state
    disabled?: boolean, // Indicates disabled state
}

// PrimaryButton component to render a primary button with optional loading spinner
export default function PrimaryButton(props: PrimaryButtonProps) {
    return (
        <button className={`btn btn-primary ${props.className}`} disabled={props.disabled}> {/* Render button element */}
            {
                !props.isLoading ? // If isLoading is false
                    props.title // Render button title
                    :
                    <LoadingSpinner /> // Otherwise, render loading spinner
            }
        </button>
    )
}
