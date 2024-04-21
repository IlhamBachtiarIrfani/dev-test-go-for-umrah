'use client'

import '@ilhamirfan/styles/sidebar.scss'

import React, { useState } from 'react'
import Sidebar from './sidebar';
import Header from './header';

interface SidebarLayoutProps {
    children: React.ReactNode;
}

export default function SidebarLayout(props: SidebarLayoutProps) {
    const [showMobileSideBar, setShowMobileSideBar] = useState(false)

    function toggleShowMobileSideBar() {
        setShowMobileSideBar(value => !value);
    }

    return (
        <div className='sidebar-main-container'>
            <Sidebar show={showMobileSideBar} />

            <div className='content-container'>
                <Header onToggleSidebar={toggleShowMobileSideBar} />
                <main>
                    {props.children}
                </main>
            </div>
        </div>
    )
}
