import React from 'react'

// DashboardTitle component to render a title for a dashboard section along with additional children elements
interface DashboardTitleProps {
    title: string;                  // Title of the dashboard section
    children: React.ReactNode;     // Additional React elements to be rendered alongside the title
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
