'use client'

import Avatar from '@ilhamirfan/components/common/avatar'; // Import Avatar component for user profile/avatar
import SearchInput from '@ilhamirfan/components/input/searchInput'; // Import SearchInput component for search functionality
import { useSession, signOut } from 'next-auth/react'; // Import NextAuth hooks for session management
import Link from 'next/link'; // Import Link component for navigation

import LayoutIcon from '@ilhamirfan/public/icon/layout.svg' // Import LayoutIcon for sidebar toggle
import BellIcon from '@ilhamirfan/public/icon/bell.svg' // Import BellIcon for notifications
import UserIcon from '@ilhamirfan/public/icon/user.svg' // Import UserIcon for user profile/avatar

import React, { MouseEvent } from 'react' // Import necessary modules

// Define props interface for Header component
interface HeaderProps {
    onToggleSidebar: () => void; // Function to handle sidebar toggle
}

// Header component to render the header section of the application
export default function Header(props: HeaderProps) {
    const { data } = useSession({ required: true }); // Get user session data

    // Function to handle logout
    function handleLogout(e: MouseEvent) {
        e.preventDefault();
        signOut(); // Sign out the user
    }

    // Function to handle toggle sidebar
    function handleToggleSidebar(e: MouseEvent) {
        e.preventDefault()
        props.onToggleSidebar(); // Invoke onToggleSidebar function from props
    }

    return (
        <header className='header-container'> {/* Render header container */}
            <div className='d-flex align-items-center gap-4'> {/* Render branding/navigation section */}
                <button onClick={handleToggleSidebar} className='d-flex d-lg-none sidebar-toggle'> {/* Render sidebar toggle button */}
                    <LayoutIcon /> {/* Render LayoutIcon */}
                </button>

                <Avatar title='Big Makkah Hotel' src="/image/background.png"> {/* Render Avatar component for logo/avatar */}
                    <span>#10292827</span> {/* Render hotel ID */}
                </Avatar>

                <Link href={"#"} className='text-link-primary d-none d-md-block'>See your property</Link> {/* Render property link */}
            </div>

            <div className='d-flex gap-4 align-items-center gap-4'> {/* Render user-related actions section */}
                <form className='d-none d-lg-block'> {/* Render search form */}
                    <SearchInput placeholder='Search' name='search' /> {/* Render SearchInput component for search functionality */}
                </form>

                <BellIcon /> {/* Render BellIcon for notifications */}

                <div onClick={handleLogout} className='user-info-container'> {/* Render user profile/avatar */}
                    <div className='user-avatar'> {/* Render user avatar */}
                        <UserIcon /> {/* Render UserIcon */}
                    </div>
                    <span className='d-none d-sm-block'> {/* Render user email */}
                        {data?.user?.email} {/* Display user email */}
                    </span>
                </div>
            </div>
        </header>
    )
}
