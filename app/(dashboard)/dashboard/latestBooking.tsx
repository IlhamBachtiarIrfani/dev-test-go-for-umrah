'use client'

// Importing necessary components and modules
import Avatar from '@ilhamirfan/components/common/avatar'
import DashboardTitle from '@ilhamirfan/components/common/dashboardTitle'
import Link from 'next/link'
import React from 'react'

// Component definition for rendering the latest booking section
export default function LatestBooking() {
    return (
        <div>
            {/* Dashboard title with a "See all reservation" button */}
            <DashboardTitle title='Latest Booking'>
                <Link href="#" className='btn btn-outline-primary btn-sm px-4'>See all reservation</Link>
            </DashboardTitle>

            {/* Container for the latest booking list */}
            <div className='bg-light p-3 rounded my-3 overflow-auto'>
                {/* Table for displaying latest bookings */}
                <table className='table table-hover'>
                    <tbody>
                        {/* Mapping through an array to render each booking as a TableItem */}
                        {[1, 2, 3, 4, 5].map((item) => {
                            return <TableItem key={item} />
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

// Component for rendering each row in the table with booking details
function TableItem() {
    return (
        <tr className='border-top border-bottom text-nowrap'>
            {/* Column for guest name, number of nights, and number of bedrooms */}
            <td className='px-4 py-3'>
                <Avatar title='Guy Hawkins' src="/image/background.png">
                    <span>1 Nights</span>
                    <span>5 Bedroom</span>
                </Avatar>
            </td>
            {/* Column for check-in date */}
            <td className='px-4 py-3 fw-medium'>
                <p className='text-small text-body-tertiary m-0'>Check-in</p>
                <div className='text-small'>
                    8 Des 2021
                </div>
            </td>
            {/* Column for check-out date */}
            <td className='px-4 py-3 fw-medium'>
                <p className='text-small text-body-tertiary m-0'>Check-out</p>
                <div className='text-small'>
                    8 Des 2021
                </div>
            </td>
            {/* Column for booking status */}
            <td className='px-4 py-3 fw-medium'>
                <p className='text-small text-body-tertiary m-0'>Status</p>
                <span className='bg-success fw-medium text-light text-small m-0 rounded-pill px-3 py-1'>
                    Confirmed
                </span>
            </td>
            {/* Column for viewing reservation details */}
            <td className='px-4 py-3'>
                <Link href={"#"} className='text-link-primary'>See Reservation</Link>
            </td>
        </tr>
    )
}
