// Importing necessary components
import Avatar from '@ilhamirfan/components/common/avatar'
import DashboardTitle from '@ilhamirfan/components/common/dashboardTitle'
import Link from 'next/link'
import React from 'react'

// Component definition for rendering the reservation overview section
export default function ReservationOverview() {
    return (
        <div>
            {/* DashboardTitle component with title 'Reservation Overview' */}
            <DashboardTitle title='Reservation Overview'>
                {/* Link to view all reservations */}
                <Link href="#" className='btn btn-outline-primary btn-sm px-4'>See all reservation</Link>
            </DashboardTitle>

            {/* Container for reservation overview data */}
            <div className='bg-light p-3 rounded my-3 overflow-auto'>
                {/* Navigation tabs */}
                <nav className='nav-tab text-nowrap'>
                    <a className='nav-tab-item active' href='#'>Departure</a>
                    <a className='nav-tab-item' href='#'>Arrival</a>
                    <a className='nav-tab-item' href='#'>Stay-over</a>
                </nav>
                {/* Table for displaying reservation details */}
                <table className='table table-hover'>
                    <tbody>
                        {
                            // Mapping through sample data and rendering TableItem component for each item
                            [1, 2, 3, 4, 5].map((item) => {
                                return <TableItem key={item} />
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

// Component definition for rendering each table row in the reservation overview
function TableItem() {
    return (
        <tr className='border-top border-bottom text-nowrap'>
            {/* Avatar component with title and avatar image */}
            <td className='px-4 py-3'>
                <Avatar title='Guy Hawkins' src="/image/background.png">
                    {/* Reservation details */}
                    <span>#10292827</span>
                    <span>1 Nights</span>
                    <span>5 Bedroom</span>
                </Avatar>
            </td>
            {/* Departure date */}
            <td className='px-4 py-3 fw-medium'>
                31 October
            </td>
            {/* Arrival date and time */}
            <td className='px-4 py-3 fw-medium text-body-tertiary'>
                <div>
                    7 Des 2021 - 8 Des 2021
                </div>
                <div>
                    Arrival : 1:00 PM - 1:00 PM
                </div>
            </td>
            {/* Reservation price */}
            <td className='px-4 py-3 fw-medium'>
                $ 100.00
            </td>
            {/* Link to view reservation details */}
            <td className='px-4 py-3 fw-medium'>
                <Link href={"#"} className='text-link-primary'>Detail Order</Link>
            </td>
        </tr>
    )
}
