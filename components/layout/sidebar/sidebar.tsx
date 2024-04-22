import Link from 'next/link'; // Import Link component for navigation
import React from 'react'; // Import necessary modules

import LogoSvg from "@ilhamirfan/public/logo-dark.svg" // Import LogoSvg for the application logo

import LayoutIcon from '@ilhamirfan/public/icon/layout.svg' // Import LayoutIcon for dashboard
import CalendarIcon from '@ilhamirfan/public/icon/calendar.svg' // Import CalendarIcon for rates & availability
import ReservationIcon from '@ilhamirfan/public/icon/reservation.svg' // Import ReservationIcon for reservation
import BedIcon from '@ilhamirfan/public/icon/bed.svg' // Import BedIcon for room
import StarIcon from '@ilhamirfan/public/icon/star.svg' // Import StarIcon for guest review
import SettingIcon from '@ilhamirfan/public/icon/setting.svg' // Import SettingIcon for settings

// Define props interface for Sidebar component
interface SidebarProps {
    show: boolean; // Indicates whether the sidebar should be shown or hidden
}

// Sidebar component to render the sidebar section of the application
export default function Sidebar(props: SidebarProps) {
    return (
        <aside className={`sidebar ${props.show ? "show" : ""}`}> {/* Render sidebar container */}
            <div className='brand-container'> {/* Render branding section */}
                <Link className='navbar-brand' href='/'> {/* Render logo with link to home */}
                    <LogoSvg /> {/* Render LogoSvg for application logo */}
                </Link>
            </div>
            <div className='navigation-container'> {/* Render navigation section */}
                {/* Render NavigationItem components for different navigation items */}
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

// Define props interface for NavigationItem component
interface NavigationItemProps {
    active?: boolean; // Indicates whether the navigation item is active
    label: string; // Label for the navigation item
    icon: React.ReactNode // Icon for the navigation item
}

// NavigationItem component to render individual navigation items
function NavigationItem(props: NavigationItemProps) {
    return (
        <Link href={"#"} className={`navigation-item ${props.active ? "active" : ""}`}> {/* Render navigation item with link */}
            {props.icon} {/* Render icon for navigation item */}
            <span>{props.label}</span> {/* Render label for navigation item */}
        </Link>
    )
}
