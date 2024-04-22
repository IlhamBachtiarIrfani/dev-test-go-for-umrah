// Importing necessary components
import React from 'react'
import ReservationOverview from './reservationOverview'
import LatestBooking from './latestBooking'

// Component definition for rendering the dashboard page
export default function DashboardPage() {
  return (
    <div>
      {/* Rendering ReservationOverview component */}
      <ReservationOverview />
      {/* Rendering LatestBooking component */}
      <LatestBooking />
    </div>
  )
}
