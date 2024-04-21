import Link from 'next/link'
import React from 'react'

import LogoSvg from "@ilhamirfan/public/logo-dark.svg"

import LayoutIcon from '@ilhamirfan/public/icon/layout.svg'
import CalendarIcon from '@ilhamirfan/public/icon/calendar.svg'
import ReservationIcon from '@ilhamirfan/public/icon/reservation.svg'
import BedIcon from '@ilhamirfan/public/icon/bed.svg'
import StarIcon from '@ilhamirfan/public/icon/star.svg'
import SettingIcon from '@ilhamirfan/public/icon/setting.svg'

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
                <NavigationItem label='Dashboard' icon={<LayoutIcon />} active />
                <NavigationItem label='Rates & Availability' icon={<CalendarIcon />} />
                <NavigationItem label='Reservation' icon={<ReservationIcon />} />
                <NavigationItem label='Room' icon={<BedIcon />} />
                <NavigationItem label='Guest review' icon={<StarIcon />} />
                <NavigationItem label='Setting' icon={<SettingIcon />} />
            </div>
        </aside>
    )
}

interface NavigationItemProps {
    active?: boolean;
    label: string;
    icon: React.ReactNode
}

function NavigationItem(props: NavigationItemProps) {
    return (
        <Link href={"#"} className={`navigation-item ${props.active ? "active" : ""}`}>
            {props.icon}
            <span>{props.label}</span>
        </Link>
    )
}