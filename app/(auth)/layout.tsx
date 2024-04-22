'use client'

import React, { useEffect } from 'react'

// Importing styles specific to authentication pages
import "@ilhamirfan/styles/auth.scss"

// Importing necessary hooks for session management and routing
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

// Importing the BasicLayout component for rendering common layout elements
import BasicLayout from '@ilhamirfan/components/layout/basicLayout';

// Props interface defining the shape of props passed to Layout component
interface LayoutProps {
    children: React.ReactNode; // Children elements to be rendered within the layout
}

// Component definition
export default function Layout({ children }: LayoutProps) {
    // Retrieving session information
    const session = useSession();

    // Router instance for managing navigation
    const router = useRouter();

    // Effect hook to handle redirection when session status changes
    useEffect(() => {
        if (session.status == "authenticated") {
            // Redirect authenticated users to the home page ("/") with scrolling disabled
            router.push("/", { scroll: false })
        }
    }, [session]) // Dependency array ensures the effect runs when session status changes

    // JSX markup for rendering the component
    return (
        <BasicLayout>
            {children} {/* Rendering children elements within BasicLayout component */}
        </BasicLayout>
    )
}
