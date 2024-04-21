import '@ilhamirfan/styles/sidebar.scss'

import React from 'react'
import Sidebar from './sidebar';
import Header from './header';

interface SidebarLayoutProps {
    children: React.ReactNode;
}

export default function SidebarLayout(props: SidebarLayoutProps) {

    return (
        <div className='main-container'>
            <Sidebar />

            <div className='content-container'>
                <Header />
                <main>
                    {props.children}
                </main>
            </div>
        </div>
    )
}
