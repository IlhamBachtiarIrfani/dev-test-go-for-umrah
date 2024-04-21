import Link from 'next/link'
import React from 'react'

interface DashboardTitleProps {
    title: string;
    children: React.ReactNode;
}

export default function DashboardTitle(props: DashboardTitleProps) {
    return (
        <div className='d-flex align-items-center justify-content-between'>
            <h4>{props.title}</h4>
            <div className='d-flex align-items-center justify-content-between gap-4'>
                {props.children}
            </div>
        </div>
    )
}
