import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


import LogoSvg from "@ilhamirfan/public/logo-dark.svg"

interface SidebarProps {
    show: boolean;
}

export default function Sidebar(props: SidebarProps) {
    return (
        <aside className={`sidebar ${props.show ? "show" : ""}`}>
            <div className='brand-container'>
                <Link className='navbar-brand' href='/'>
                    <LogoSvg />
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