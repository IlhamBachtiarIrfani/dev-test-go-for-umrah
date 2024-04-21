import Avatar from '@ilhamirfan/components/common/avatar'
import DashboardTitle from '@ilhamirfan/components/common/dashboardTitle'
import Link from 'next/link'
import React from 'react'

export default function LatestBooking() {
    return (
        <div>
            <DashboardTitle title='Latest Booking'>
                <Link href="#" className='btn btn-outline-primary btn-sm px-4'>See all reservation</Link>
            </DashboardTitle>

            <div className='bg-light p-3 rounded my-3 overflow-auto'>
                <table className='table table-hover'>
                    <tbody>
                        {
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


function TableItem() {
    return (
        <tr className='border-top border-bottom text-nowrap'>
            <td className='px-4 py-3'>
                <Avatar title='Guy Hawkins' src="/image/background.png">
                    <span>1 Nights</span>
                    <span>5 Bedroom</span>
                </Avatar>
            </td>
            <td className='px-4 py-3 fw-medium'>
                <p className='text-small text-body-tertiary m-0'>Check-out</p>
                <div className='text-small'>
                    8 Des 2021
                </div>
            </td>
            <td className='px-4 py-3 fw-medium'>
                <p className='text-small text-body-tertiary m-0'>Check-out</p>
                <div className='text-small'>
                    8 Des 2021
                </div>
            </td>
            <td className='px-4 py-3 fw-medium'>
                <p className='text-small text-body-tertiary m-0'>Status</p>
                <span className='bg-success fw-medium text-light text-small m-0 rounded-pill px-3 py-1'>
                    Confirmed
                </span>
            </td>
            <td className='px-4 py-3'>
                <Link href={"#"} className='text-link-primary'>See Reservation</Link>
            </td>
        </tr>
    )
}
