import Avatar from '@ilhamirfan/components/common/avatar'
import DashboardTitle from '@ilhamirfan/components/common/dashboardTitle'
import Link from 'next/link'
import React from 'react'

export default function ReservationOverview() {
    return (
        <div>
            <DashboardTitle title='Reservation Overview'>
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
        <tr className='border-top border-bottom'>
            <td className='px-4 py-3'>
                <Avatar title='Guy Hawkins' src="/image/background.png">
                    <span>#10292827</span>
                    <span>1 Nights</span>
                    <span>5 Bedroom</span>
                </Avatar>
            </td>
            <td className='px-4 py-3 fw-medium'>
                31 October
            </td>
            <td className='px-4 py-3 fw-medium text-body-tertiary'>
                <div>
                    7 Des 2021 - 8 Des 2021
                </div>
                <div>
                    Arrival : 1:00 PM - 1:00 PM
                </div>
            </td>
            <td className='px-4 py-3 fw-medium'>
                $ 100.00
            </td>
            <td className='px-4 py-3 fw-medium'>
                <Link href={"#"} className='text-link-primary'>Detail Order</Link>
            </td>
        </tr>
    )
}
