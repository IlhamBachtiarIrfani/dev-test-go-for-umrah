import React from 'react'
import ReservationOverview from './reservationOverview'
import LatestBooking from './latestBooking'

export default function DashboardPage() {
  return (
    <div>
      <ReservationOverview />
      <LatestBooking />
    </div>
  )
}
