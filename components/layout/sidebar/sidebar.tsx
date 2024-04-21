import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


import logoSvg from "@ilhamirfan/public/logo-dark.svg"

export default function Sidebar() {
    return (
        <aside className='sidebar'>
            <div className='brand-container'>
                <Link className='navbar-brand' href='/'>
                    <Image src={logoSvg} alt='logo goforumrah' priority />
                </Link>
            </div>
            <div className='navigation-container'>
                <NavigationItem label='Dashboard' active />
                <NavigationItem label='Rates & Availability' />
                <NavigationItem label='Reservation' />
                <NavigationItem label='Room' />
                <NavigationItem label='Guest review' />
                <NavigationItem label='Setting' />
            </div>
        </aside>
    )
}

interface NavigationItemProps {
    active?: boolean;
    label: string;
}

function NavigationItem(props: NavigationItemProps) {
    return (
        <Link href={"#"} className={`navigation-item ${props.active ? "active" : ""}`}>
            <div className='icon' />
            <span>{props.label}</span>
        </Link>
    )
}