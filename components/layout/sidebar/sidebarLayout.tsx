import '@ilhamirfan/styles/sidebar.scss'; // Import sidebar styles
import React, { useState } from 'react'; // Import necessary modules
import Sidebar from './sidebar'; // Import Sidebar component
import Header from './header'; // Import Header component

// Define props interface for SidebarLayout component
interface SidebarLayoutProps {
    children: React.ReactNode; // Content to be displayed within the main content area of the layout
}

// SidebarLayout component to render layout with sidebar, header, and main content
export default function SidebarLayout(props: SidebarLayoutProps) {
    const [showMobileSideBar, setShowMobileSideBar] = useState(false); // State to control mobile sidebar visibility

    // Function to toggle mobile sidebar visibility
    function toggleShowMobileSideBar() {
        setShowMobileSideBar(value => !value);
    }

    return (
        <div className='sidebar-main-container'> {/* Render main container */}
            {/* Render Sidebar component */}
            <Sidebar show={showMobileSideBar} />

            <div className='content-container'> {/* Render content container */}
                {/* Render Header component */}
                <Header onToggleSidebar={toggleShowMobileSideBar} />
                <main>
                    {props.children} {/* Render children within main content area */}
                </main>
            </div>
        </div>
    )
}
