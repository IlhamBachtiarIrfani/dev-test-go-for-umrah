'use client'

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

import logoSvg from "@ilhamirfan/public/logo.svg"
import globeIcon from "@ilhamirfan/public/icon/globe.svg"

interface BasicLayoutProps {
    children: React.ReactNode;
}


export default function BasicLayout(props: BasicLayoutProps) {
  return (
    <div className='main-container'>
            <nav className="navbar navbar-expand-sm bg-secondary flex-none">
                <div className="container">
                    {/* ===== LOGO BRAND ===== */}
                    <Link className='navbar-brand' href='/'>
                        <Image src={logoSvg} alt='logo goforumrah' priority />
                    </Link>


                    <ul className='navbar-nav d-flex align-items-center'>

                        {/* ===== LANGUAGE ===== */}
                        <li className='nav-item'>
                            <LanguageButton />
                        </li>

                        <span className='vertical-divider' />

                        {/* ===== HELP BUTTON ===== */}
                        <li className='nav-item'>
                            <a className="help-button btn btn-outline-success me-2 " href='/help'>Help</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <main className='container-fluid'>
                {props.children}
            </main>
        </div>
  )
}

function LanguageButton() {
    return (
        <div>
            <Image src={globeIcon} alt='globe-icon' priority />
            <span className='text-light ps-1'>En</span>
        </div>
    )
}