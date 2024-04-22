'use client'

import Link from 'next/link'; // Import Link component from Next.js
import React from 'react'; // Import necessary modules

import LogoSvg from "@ilhamirfan/public/logo.svg"; // Import application logo
import GlobeIcon from "@ilhamirfan/public/icon/globe.svg"; // Import globe icon

// Define props interface for BasicLayout component
interface BasicLayoutProps {
    children: React.ReactNode; // Content to be displayed within the main content area of the layout
}

// BasicLayout component to render a basic layout with navbar, logo, language button, and help button
export default function BasicLayout(props: BasicLayoutProps) {
    return (
        <div className='basic-main-container'> {/* Render main container */}
            {/* Render navbar */}
            <nav className="navbar navbar-expand-sm bg-secondary flex-none">
                <div className="container">
                    {/* Render application logo */}
                    <Link className='navbar-brand' href='/'>
                        <LogoSvg />
                    </Link>

                    <ul className='navbar-nav d-flex align-items-center'>
                        {/* Render language button */}
                        <li className='nav-item d-none d-sm-block'>
                            <LanguageButton />
                        </li>

                        <span className='vertical-divider d-none d-sm-block' />

                        {/* Render help button */}
                        <li className='nav-item'>
                            <a className="help-button btn btn-outline-success me-2 " href='/help'>Help</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <main className='container-fluid d-flex flex-column'>
                {props.children} {/* Render children within main content area */}
            </main>
        </div>
    )
}

// LanguageButton component to render a language button with globe icon
function LanguageButton() {
    return (
        <div>
            <GlobeIcon />
            <span className='text-light ps-1'>En</span>
        </div>
    )
}
