import { Header } from 'components'
import React from 'react'

const Trips = () => {

  return (

    <main className='all-users wrapper'>
      <Header
        title="Trips"
        description="View and Edit AI-generated Travel plans"
        ctaText="Create a Trip"
        ctaUrl="/trips/create"
      />
    </main>

  )
}

export default Trips
